import React from "react"
import styled, { ThemeContext } from "styled-components"
import { MdError } from "react-icons/md"
import Text from "../components/Text"

const MessageErrorStyle = styled.div`
  ${({ theme }) => `
    width: 100%;
    border-radius: 8px;
    display: flex;
    align-items: center;
    background-color: ${theme.backgrounds.errorLight};
    padding: 8px 30px;
  `}
`

type BoxErrorProps = {
  text: string
}

function MessageError({ text }: BoxErrorProps) {
  const theme = React.useContext(ThemeContext)

  return (
    <MessageErrorStyle>
      <div className="flex flex-row">
        <MdError style={{ color: theme.colors.color.error }} />
        <div className="pl-2">
          <Text size="small" color={theme.colors.color.error}>
            {text}
          </Text>
        </div>
      </div>
    </MessageErrorStyle>
  )
}

export default MessageError
