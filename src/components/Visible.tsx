import React from "react";
import styled from "styled-components";
import tokens from "../config/tokens";

type VisibleProps = {
  inline?: boolean
  mobile?: boolean
  tablet?: boolean
  desktop?: boolean
  children: React.ReactNode
}

const Visible = styled.div<VisibleProps>`
  display: ${(props) =>
    !props.mobile ? "none" : props.inline ? "inline-block" : "block"};
  @media screen and (min-width: ${tokens.breakpoints.tablet}px) {
    display: ${(props) =>
      !props.tablet ? "none" : props.inline ? "inline-block" : "block"};
  }
  @media screen and (min-width: ${tokens.breakpoints.desktop}px) {
    display: ${(props) =>
      !props.desktop ? "none" : props.inline ? "inline-block" : "block"};
  }
`

export default Visible;