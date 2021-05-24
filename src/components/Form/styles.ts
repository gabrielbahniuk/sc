import styled from 'styled-components'

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;

  label {
    font-size: 1.5rem;
    color: var(--text-color);
    width: 100%;
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
`
