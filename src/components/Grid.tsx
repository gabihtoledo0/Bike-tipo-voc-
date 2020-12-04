import tokens from "../config/tokens"
import styled from "styled-components"
import defaultTheme from "../config/defaultTheme"

type ColumnContainerProps = {
  size?: number
  tabletSize?: number
  desktopSize?: number
}

type Container = {
  background: string
  box: boolean
  desktopWidth: number
  width: number
}

export const StyledColumn = styled.div`
  display: grid;
  grid-row-gap: ${tokens.grid.gutter}px;
  justify-content: center;

  grid-template-columns: repeat(${tokens.grid.columns.mobile}, 1fr);
  @media screen and (min-width: ${tokens.breakpoints.tablet}px) {
    grid-template-columns: repeat(${tokens.grid.columns.tablet}, 1fr);
  }
  @media screen and (min-width: ${tokens.breakpoints.desktop}px) {
    grid-template-columns: repeat(${tokens.grid.columns.desktop}, 1fr);
  }
`

export const ColumnContainer = styled.div<ColumnContainerProps>`
  display: ${(props) => (!props.size ? "none" : "block")};
  grid-column: span ${(props) => props.size};

  @media screen and (min-width: ${tokens.breakpoints.tablet}px) {
    display: ${(props) => (!props.tabletSize ? "none" : "block")};
    grid-column: span ${(props) => props.tabletSize || props.size};
  }
  @media screen and (min-width: ${tokens.breakpoints.desktop}px) {
    display: ${(props) =>
      !props.desktopSize ? "none" : "block"};
    grid-column: span
      ${(props) => props.desktopSize || props.tabletSize || props.size};
  }
`

export const Container = styled.div<Container>`
  background: ${(props) =>
    props.background ? props.background : defaultTheme.backgrounds.primary};
  width: ${(props) => (props.width ? props.width : "100")}%;
  height: auto;
  padding: 10px 40px 35px 40px;
  box-shadow: ${(props) => (props.box ? defaultTheme.shade.dark.idle : "none")};

  @media screen and (min-width: ${tokens.breakpoints.desktop}px) {
    width: ${(props) => (props.desktopWidth ? props.desktopWidth : "50")}%;
    border-radius: 8px;
  }
`
