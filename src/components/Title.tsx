import * as React from "react"
import styled from "styled-components"
import tokens from "../config/tokens"

export type FontSize = "big" | "default" | "small" | "xsmall"
export type FontWeight = "regular" | "bold"
type FontAlign = "left" | "right" | "center"

type GetFontFamilyType = (weight: FontWeight) => string
const getFontFamily: GetFontFamilyType = (weight) =>
  tokens.typography.title.family[weight]

type GetFontSizeType = (
  size: FontSize,
  screenSize?: "default" | "desktop"
) => number

const getFontSize: GetFontSizeType = (size, screenSize = "default") =>
  tokens.typography.title.sizes[size].size[screenSize]

type GetLineHeightType = (
  size: FontSize,
  screenSize?: "default" | "desktop"
) => number

const getLineHeight: GetLineHeightType = (size, screenSize = "default") =>
  tokens.typography.title.sizes[size].lineHeight[screenSize]

type GetFontWeightType = (weight: FontWeight) => number
const getFontWeight: GetFontWeightType = (weight) => {
  switch (weight) {
    case "bold":
      return 800
    case "regular":
      return 600
  }
}

type Props = {
  color?: string
  size: FontSize
  weight: FontWeight
  align: FontAlign
  tabletAlign?: FontAlign
  desktopAlign?: FontAlign
}

const StyledTitle = styled.p<Props>`
  font-family: ${(props) => getFontFamily(props.weight)};
  font-weight: ${(props) => getFontWeight(props.weight)};
  font-size: ${(props) => getFontSize(props.size)}px;
  line-height: ${(props) => getLineHeight(props.size)}px;
  text-align: ${(props) => props.align};
  color: ${(props) =>
    props.color ? props.color : props.theme.colors.color.info};

  @media screen and (min-width: ${tokens.breakpoints.tablet}px) {
    text-align: ${(props) => [props.tabletAlign, props.align]};
  }
  @media screen and (min-width: ${tokens.breakpoints.desktop}px) {
    text-align: ${(props) => [
      props.desktopAlign,
      props.tabletAlign,
      props.align,
    ]};
    font-size: ${(props) => getFontSize(props.size, "desktop")}px;
    line-height: ${(props) => getLineHeight(props.size, "desktop")}px;
  }
`

type TitleProps = {
  as?: "p" | "div" | "span" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6"
  color?: string
  size?: FontSize
  weight?: FontWeight
  align?: FontAlign
  tabletAlign?: FontAlign
  desktopAlign?: FontAlign
  className?: string
  children?: React.ReactNode
}

const Title = React.memo(
  ({
    as = "h1",
    size = "default",
    weight = "bold",
    align = "left",
    tabletAlign,
    color,
    desktopAlign,
    className,
    children,
  }: TitleProps) => (
    <StyledTitle
      as={as}
      color={color}
      className={className}
      size={size}
      weight={weight}
      align={align}
      tabletAlign={tabletAlign}
      desktopAlign={desktopAlign}
      children={children}
    />
  )
)

export default Title
