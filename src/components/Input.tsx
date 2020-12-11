import styled from "styled-components"

type InputProps = {
  width?: string
}

const Input = styled.input<InputProps>`
  width: ${(props) => (props.width ? props.width : "100")}%;
  ${({ theme }) => `
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
