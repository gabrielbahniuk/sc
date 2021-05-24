import styled from 'styled-components'

export const Container = styled.div`
  margin-top: 4rem;
  display: flex;
  flex-direction: column;
  width: 100%;

  table {
    width: 100%;
    border-spacing: 0 0.25rem;

    thead,
    tbody {
      text-align: center;
    }
    th {
      background: var(--secondary-color);
      color: #101112;
      font-weight: 400;
      padding: 1rem 2rem;
      line-height: 1.5rem;
      cursor: pointer;
    }

    td {
      padding: 1rem 2rem;
      border: 0;
      background: #fff;
      color: #000;
    }
  }
`
