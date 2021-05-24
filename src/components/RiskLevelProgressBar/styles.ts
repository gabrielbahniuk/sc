import { appConfig } from '../../config'
import styled from 'styled-components'

const { MAXIMUM_RISK_LEVEL } = appConfig

export const ProgressBar = styled.div`
  background: #333;
  border-radius: 13px;
  height: 1.5rem;
  width: 100%;
  padding: 3px;
  transition: width 0.2s;
  margin-top: 1rem;

  span {
    content: '';
    display: block;
    background-color: ${({ riskLevel }): string =>
      riskLevel <= 8 ? 'var(--ok-color)' : riskLevel <= 16 ? 'var(--alert-color)' : 'var(--danger-color)'};
    width: ${({ riskLevel }): number => (riskLevel / MAXIMUM_RISK_LEVEL) * 100}%;
    height: 100%;
    border-radius: 9px;
    transition: width 0.3s;
  }
`

export const ProgressLabelContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  span {
    color: var(--text-color);
  }
`
