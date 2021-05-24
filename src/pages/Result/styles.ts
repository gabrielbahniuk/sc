import styled from 'styled-components'

export const Container = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  padding: 2.5rem 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  h1 {
    text-align: center;
    color: var(--text-color);
    margin-bottom: 3rem;
    font-size: 2.5rem;
  }
  canvas {
    width: 100%;
  }
`

export const ButtonSection = styled.span`
  display: flex;
  width: 80%;
  flex-direction: column;
  justify-content: center;
`
