import React from "react"
import styled from "styled-components"
import tokens from "../config/tokens"

type StyledImageProps = {
  width?: number
  height?: string
  tabletWidth?: string
  tabletHeight?: string
  desktopWidth?: string
  desktopHeight?: string
}

const StyledImage = styled.img<StyledImageProps>`
  width: ${(props) => props.width}px;
  height: ${(props) => props.height};

  @media screen and (min-width: ${tokens.breakpoints.tablet}px) {
    width: ${(props) => props.tabletWidth ? props.desktopWidth : "auto"};
    height: ${(props) => props.tabletHeight};
  }

  @media screen and (min-width: ${tokens.breakpoints.desktop}px) {
    width: ${(props) => props.desktopWidth ? props.desktopWidth : "auto"};
    height: ${(props) => props.desktopHeight};
  }
`

type ImageProps = {
  src: string
  alt: string
  width?: number
  height?: string
  tabletWidth?: string
  tabletHeight?: string
  desktopWidth?: string
  desktopHeight?: string
}

const Image = ({
  src,
  alt,
  width,
  height,
  desktopWidth,
  desktopHeight,
  tabletHeight,
  tabletWidth,
}: ImageProps) => {
  return (
    <StyledImage
      src={src}
      alt={alt}
      width={width}
      height={height}
      desktopWidth={desktopWidth}
      desktopHeight={desktopHeight}
      tabletHeight={tabletHeight}
      tabletWidth={tabletWidth}
    />
  )
}

export default Image
