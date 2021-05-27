import { api } from '@/services/api'
import React, { useState, useEffect, useRef, createContext, ReactNode, useContext } from 'react'

type ConesProviderProps = {
  children: ReactNode
}

type Cone = {
  riskLevel: number
  mu: number
  sigma: number
}

type ConesContextData = {
  cones: Cone[]
  hasError: boolean
}

const ConesContext = createContext<ConesContextData>({} as ConesContextData)

export const ConesProvider: React.FC = ({ children }: ConesProviderProps) => {
  const [hasError, setHasError] = useState(false)
  const [cones, setCones] = useState<Cone[]>(() => {
    const storagedCones = localStorage.getItem('@scalable-capital:cones')
    if (storagedCones) {
      return JSON.parse(storagedCones)
    }
    return []
  })

  const prevConesRef = useRef<Cone[]>()

  useEffect(() => {
    prevConesRef.current = cones
  })

  const conesPreviousValue = prevConesRef.current ?? cones

  useEffect(() => {
    if (conesPreviousValue !== cones) {
      localStorage.setItem('@scalable-capital:cones', JSON.stringify(cones))
    }
  }, [cones, conesPreviousValue])

  function loadData(): void {
    if (cones.length !== 0) return
    api
      .get('/api/cones')
      .then(({ data }) => {
        setCones(data)
      })
      .catch(() => {
        setHasError(true)
      })
  }

  useEffect(() => {
    loadData()
  }, [])

  return <ConesContext.Provider value={{ cones, hasError }}>{children}</ConesContext.Provider>
}

export const useCones = (): ConesContextData => {
  const context = useContext(ConesContext)
  return context
}
