import styled from "styled-components"

const Input = styled.input`
  ${({ theme }) => `
  width: 100%;
  height: 3.2rem;
  margin-bottom: 2rem;
  border-radius: 10px;
  border: 1px solid ${theme.colors.color.basic2};
  color: ${theme.colors.color.info};
  outline: 0;
  padding: 0 1.6rem;
  font: 1rem Nunito;
`}
`

export default Input
