import React from "react"
import styled from "styled-components"
import { MdError } from "react-icons/md"
import Text from "../components/Text"
import { useTheme } from "@material-ui/core/styles"

const MessageErrorStyle = styled.div`
  ${({ theme }) => `
    width: 100%;
    border-radius: 8px;
    display: flex;
    align-items: center;
    background-color: ${theme.backgrounds.error};
    padding: 8px 30px;
  `}
`

type BoxErrorProps = {
  text: string
}

function MessageError({ text }: BoxErrorProps) {
  const theme = useTheme()

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
