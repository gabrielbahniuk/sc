import styled from 'styled-components'

export const Container = styled.button`
  width: 100%;
  padding: 0 1.5rem;
  height: 4rem;
  background: ${({ restart }): string => (restart ? '#f55359' : 'var(--secondary-color)')};
  color: #000;
  border-radius: 14px 7px 14px 7px;
  border: 0;
  font-size: 1.5rem;
  margin-top: 2rem;
  transition: filter 0.2s;
  font-weight: 600;
  cursor: pointer;

  &:hover {
    filter: brightness(0.9);
  }
`
