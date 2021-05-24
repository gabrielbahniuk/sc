import React, { useRef, useEffect } from 'react'
import { Chart as ChartJs } from 'chart.js'
import useTimeSeries from '@/hooks/useTimeSeries'
import { appConfig } from '@/config'

type ConeProps = {
  riskLevel: number
  mu: number
  sigma: number
}

type ChartProps = {
  yearsInvestment: number
  cones: ConeProps[]
  investmentValue: number
  riskLevel: number
}

const Chart: React.FC<ChartProps> = ({ investmentValue, yearsInvestment, riskLevel, cones }) => {
  const canvas = useRef<HTMLCanvasElement>(null)

  const { mu, sigma } = cones.filter((cone) => cone.riskLevel === riskLevel)[0]
  const { FEE, MONTHLY_SUM } = appConfig
  ChartJs.defaults.global.defaultFontColor = '#fff'

  const { chartData } = useTimeSeries({
    years: yearsInvestment,
    initialSum: investmentValue,
    fee: FEE,
    mu,
    sigma,
    monthlySum: MONTHLY_SUM
  })

  useEffect(() => {
    drawChart()
  }, [])

  function drawChart(): void {
    const { labels, dataBad, dataGood, dataMedian } = chartData
    const data = {
      datasets: [
        {
          data: dataGood,
          label: 'Good performance',
          borderColor: 'rgba(100, 255, 100, 0.4)',
          fill: false,
          pointRadius: 1
        },
        {
          data: dataMedian,
          label: 'Median performance',
          borderColor: 'rgba(100, 100, 100, 0.4)',
          fill: false,
          pointRadius: 1
        },
        {
          data: dataBad,
          label: 'Bad performance',
          borderColor: 'rgba(255, 100, 100, 0.4)',
          fill: false,
          pointRadius: 1
        }
      ],
      labels
    }

    const options = {
      responsive: false,
      scales: {
        xAxes: [
          {
            display: true,
            scaleLabel: {
              display: true,
              labelString: 'Years',
              fontSize: 16
            },
            gridLines: {
              drawOnChartArea: false
            }
          }
        ],
        yAxes: [
          {
            display: true,
            scaleLabel: {
              display: true,
              fontSize: 16,
              labelString: 'Valuation (EUR)'
            }
          }
        ]
      }
    }

    const config = {
      type: 'line',
      data,
      options
    }

    const context = canvas.current?.getContext('2d')
    new ChartJs(context, config)
  }

  return <canvas ref={canvas} />
}

export default Chart
