import React from "react"
import styled from "styled-components"
import tokens from "../config/tokens"

type StyledImageProps = {
  width?: number
  height?: number
  tabletWidth?: number
  tabletHeight?: number
  desktopWidth?: number
  desktopHeight?: number
}

const StyledImage = styled.img<StyledImageProps>`
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;

  @media screen and (min-width: ${tokens.breakpoints.tablet}px) {
    width: ${(props) =>
      props.tabletWidth ? props.tabletWidth : props.width}px;
    height: ${(props) => props.tabletHeight}px;
  }

  @media screen and (min-width: ${tokens.breakpoints.desktop}px) {
    width: ${(props) =>
      props.desktopWidth ? props.desktopWidth : props.width}px;
    height: ${(props) => props.desktopHeight}px;
  }
`

type ImageProps = {
  src: string
  alt: string
  width?: number
  height?: number
  tabletWidth?: number
  tabletHeight?: number
  desktopWidth?: number
  desktopHeight?: number
  className?: string
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
  className,
}: ImageProps) => {
  return (
    <StyledImage
      src={src}
      alt={alt}
      desktopWidth={desktopWidth}
      desktopHeight={desktopHeight}
      tabletHeight={tabletHeight}
      tabletWidth={tabletWidth}
      width={width}
      height={height}
      className={className}
    />
  )
}

export default Image
