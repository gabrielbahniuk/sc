import styled from 'styled-components'

export const Container = styled.div`
  margin-top: 4rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    color: var(--text-color);
  }
  button {
    width: 100%;
    padding: 0 1.5rem;
    height: 4rem;
    background: ${({ restart }): string => (restart ? '#f55359' : 'var(--secondary-color)')};
    color: #000;
    border-radius: 14px 7px 14px 7px;
    border: 0;
    font-size: 1.5rem;
    margin-top: 1.5rem;
    transition: filter 0.2s;
    font-weight: 600;

    &:hover {
      filter: brightness(0.9);
    }
  }
`
