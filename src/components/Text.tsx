import * as React from "react"
import styled from "styled-components"
import tokens from "../config/tokens"

export type FontSize = "big" | "default" | "small" | "xsmall"
export type FontWeight = "regular" | "bold"
type FontAlign = "left" | "right" | "center"

type GetFontFamilyType = (weight: FontWeight) => string
const getFontFamily: GetFontFamilyType = (weight) =>
  tokens.typography.text.family[weight]

type GetFontSizeType = (size: FontSize) => number
const getFontSize: GetFontSizeType = (size) =>
  tokens.typography.text.sizes[size].size

type GetLineHeightType = (size: FontSize) => number
const getLineHeight: GetLineHeightType = (size) =>
  tokens.typography.text.sizes[size].lineHeight

type GetFontWeightType = (weight: FontWeight) => number
const getFontWeight: GetFontWeightType = (weight) => {
  switch (weight) {
    case "bold":
      return 600
    case "regular":
      return 400
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

const StyledText = styled.p<Props>`
  font-family: ${(props) => getFontFamily(props.weight)};
  font-weight: ${(props) => getFontWeight(props.weight)};
  font-size: ${(props) => getFontSize(props.size)}px;
  line-height: ${(props) => getLineHeight(props.size)}px;
  text-align: ${(props) => props.align};
  color: ${(props) => props.color};

  @media screen and (min-width: ${tokens.breakpoints.tablet}px) {
    text-align: ${(props) => [props.tabletAlign, props.align]};
  }
  @media screen and (min-width: ${tokens.breakpoints.desktop}px) {
    text-align: ${(props) => [
      props.desktopAlign,
      props.tabletAlign,
      props.align,
    ]};
  }
`

type TextProps = {
  as?:
    | "p"
    | "div"
    | "span"
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "h6"
  color?: string
  size?: FontSize
  weight?: FontWeight
  align?: FontAlign
  tabletAlign?: FontAlign
  desktopAlign?: FontAlign
  className?: string
  children?: React.ReactNode
}

const Text = React.memo(
  ({
    as = "p",
    size = "default",
    weight = "regular",
    align = "left",
    tabletAlign,
    desktopAlign,
    className,
    children,
  }: TextProps) => (
    <StyledText
      as={as}
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

export const Small = styled.small`
  color: red;
  margin-top: 5px;
`

export default Text
