import styled from "styled-components";

export const HeaderContainer = styled.header`
  background: ${props => props.theme["gray-900"]};
  padding: 2.5rem 0 7.5rem;

`

export const HeaderContent = styled.div `
  width: 100%;
  max-width: 1120px;
  
  margin: 0 auto;
  padding: 0 1.5rem;

  display:flex;
  justify-content: space-between;
  align-items: center;

`

export const NewTransactionButton = styled.button `
  height: 50px;
  border: 0;
  padding: 0 1.25rem;

  background: ${props => props.theme["green-500"]};
  color: ${props => props.theme.white};
  border-radius: 6px;
  
  font-weight: bold;

  cursor: pointer;

  transition: 0.3s ease;
  &:hover {
    background: ${props => props.theme["green-700"]};
  }

`