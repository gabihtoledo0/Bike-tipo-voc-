import { makeStyles } from "@material-ui/core"

export const stationsMapStyled = makeStyles((theme) => ({
  pageMap: {
    width: "100vw",
    height: "100vh",
    position: "relative",
    display: "flex",
  },

  aside: {
    width: "480px",
    background:
      "linear-gradient(90deg, rgba(255, 246, 121, 1) 19%, rgba(251, 220, 54, 1) 51%,rgba(251, 219, 51, 1) 100%)",
    padding: "50px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },

  titleAside: {
    fontSize: "40px",
    fontWeight: 800,
    lineHeight: "42px",
    marginTop: "64px",
  },
  textAside: {
    lineHeight: "28px",
    marginTop: "24px",
  },
  footerAside: {
    display: "flex",
    flexDirection: "column",
    lineHeight: "24px",
    color: "#945fbd",
  },
  strongAside: {
    fontWeight: 800,
  },
}))
