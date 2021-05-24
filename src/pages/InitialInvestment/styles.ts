import styled from 'styled-components'

export const Container = styled.div`
  max-width: 1120px;
  margin: 1rem auto;
  padding: 2.5rem 1rem;

  h1 {
    text-align: center;
    color: var(--text-color);
    margin-bottom: 3rem;
    font-size: 2.5rem;
  }
  label {
    font-size: 1.5rem;
    color: var(--text-color);
  }
  input,
  select {
    width: 100%;
    padding: 0 1.5rem;
    height: 4rem;
    border-radius: 0.25rem;
    border: 1px solid #d7d7d7;
    background: #e7e9ee;
    font-weight: 400;
    font-size: 1.5rem;
  }

  input[type='number']::-webkit-inner-spin-button,
  input[type='number']::-webkit-outer-spin-button {
    -webkit-appearance: none;
    -webkit-appearance: textfield;
    -moz-appearance: textfield;
    appearance: textfield;

    cursor: pointer;
    display: block;
    width: 1rem;
    color: #333;
    text-align: center;
    position: relative;
  }

  label + label {
    display: block;
    margin-top: 2rem;
  }

  button {
    width: 100%;
    padding: 0 1.5rem;
    height: 4rem;
    background: var(--secondary-color);
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
