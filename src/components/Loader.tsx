import React from "react"
import { ThemeContext } from "styled-components"
import Text from "../components/Text"
import { CircularProgress } from "@material-ui/core"

interface LoaderProps {
  data: String
}

const Loader = ({ data }: LoaderProps) => {
  const theme = React.useContext(ThemeContext)

  return (
    <div
      className="flex flex-col justify-center items-center"
      style={{ height: "100vh" }}
    >
      <CircularProgress style={{ color: theme.colors.color.primaryInverse }} />
      <div className="pt-4">
        <Text align="center" color={theme.colors.color.primaryInverse}>
          {data}
        </Text>
      </div>
    </div>
  )
}

export default Loader
