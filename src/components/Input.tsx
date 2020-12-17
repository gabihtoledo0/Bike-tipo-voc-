import styled from "styled-components"

type InputProps = {
  width?: string
  marginTop?: boolean
}

const Input = styled.input<InputProps>`
  width: ${(props) => (props.width ? props.width : "100")}%;
  margin-top: ${(props) => (props.marginTop ? "0" : "2rem")};
  ${({ theme }) => `
  height: 3.2rem;
  border-radius: 10px;
  border: 1px solid ${theme.colors.color.basic2};
  color: ${theme.colors.color.info};
  outline: 0;
  padding: 0 1.6rem;
  font: 1rem Nunito;
`}
`

export default Input
