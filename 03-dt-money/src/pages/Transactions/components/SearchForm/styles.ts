import styled from "styled-components";

export const SearchFormStyled = styled.form`
  display: flex;
  gap: 1rem;

  input {
    flex: 1;

    padding: 1rem;

    border-radius: 6px;
    border: 0;

    background-color: ${props => props.theme["gray-900"]};
    color: ${props => props.theme["gray-300"]};

    &::placeholder {
      color: ${props => props.theme["gray-500"]};
    }
  }

  button {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    
    padding: 1rem;
    background: transparent;
    border-radius: 6px;
    border: 1px solid ${props => props.theme["green-300"]};
    color: ${props => props.theme["green-300"]};
    font-weight: bold;

    cursor: pointer;

    transition: 0.2s ease;
    
    &:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }

    &:not(:disabled):hover {
      background-color: ${props => props.theme["green-500"]};
      border-color: ${props => props.theme["green-500"]};
      color: ${props => props.theme.white};
    }
  }
`