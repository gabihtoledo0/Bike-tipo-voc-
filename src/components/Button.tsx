import Button from "@material-ui/core/Button"
import { withStyles } from "@material-ui/core"
import tokens from "../config/tokens"
import theme from "../config/defaultTheme"

export const ButtonPrimary = withStyles({
  root: {
    backgroundColor: `${theme.colors.button.primary}`,
    color: `${theme.colors.button.textPrimary}`,
    fontSize: "12px",
    width: "120px",
    height: "45px",
    fontFamily: `${tokens.typography.text.family.bold}`,
    fontWeight: "bold",
    borderRadius: "5px",
    "&:hover": {
      backgroundColor: `${theme.colors.hover.primary}`,
    },
  },
})(Button)

export const ButtonSecondary = withStyles({
  root: {
    backgroundColor: `${theme.colors.button.secondary}`,
    color: `${theme.colors.button.inverse}`,
    fontSize: "12px",
    width: "120px",
    height: "45px",
    fontFamily: `${tokens.typography.text.family.bold}`,
    fontWeight: "bold",
    borderRadius: "5px",
    "&:hover": {
      backgroundColor: `${theme.colors.hover.secondary}`,
    },
  },
})(Button)

export const ButtonDelete = withStyles({
  root: {
    backgroundColor: `${theme.colors.button.delete}`,
    color: `${theme.colors.button.inverse}`,
    fontSize: "12px",
    width: "120px",
    height: "45px",
    fontFamily: `${tokens.typography.text.family.bold}`,
    fontWeight: "bold",
    borderRadius: "5px",
    "&:hover": {
      backgroundColor: `${theme.colors.hover.delete}`,
    },
  },
})(Button)

export const ButtonInvisible = withStyles({
  root: {
    color: `${theme.colors.button.secondary}`,
    fontSize: "12px",
    fontFamily: `${tokens.typography.text.family.bold}`,
    fontWeight: "bold",
    borderRadius: "5px",
    borderColor: `${theme.colors.button.secondary}`,
  },
})(Button)
