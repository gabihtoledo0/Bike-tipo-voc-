import styled, { css } from "styled-components"
import PropType from "prop-types"
import tokens from "../config/tokens"

type ButtonPrimaryProps = {
  width?: number
  height?: number
}

const buttonStyles = css`
  box-sizing: border-box;
  position: relative;
  display: inline-block;
  font-family: ${tokens.typography.text.family.bold};
  font-weight: bold;
  font-size: ${tokens.typography.text.sizes.xsmall.size}px;
  line-height: ${tokens.typography.text.sizes.xsmall.lineHeight}px;
  letter-spacing: 1px;
  text-align: center;
  text-transform: uppercase;
  text-decoration: none;
  border-radius: 10px;
  border: none;
  cursor: pointer;
  transition: background-color 0.15s ease-in-out;

  &:after {
    content: " ";
    display: block;
    position: absolute;
    top: -4px;
    left: -4px;
    right: -4px;
    bottom: -4px;
    border-radius: 28px;
    border: 2px solid transparent;
    transition: border-color 0.15s ease-in-out;
  }

  &:hover,
  &:focus {
    transition: background-color 0s;
  }
  &:active {
    transition: background-color 0s;
  }
  &:focus {
    outline: none;
    overflow: visible;
  }
`

export const ButtonPrimary = styled.button<ButtonPrimaryProps>`
  ${({ theme }) => `
  ${buttonStyles}
  width: ${(props) => (props.width ? props.width : "100")}%;
  height: ${(props) => (props.heigth ? props.heigth : "45")}px;
  background-color: ${theme.colors.button.primary};
  color: ${theme.colors.button.textPrimary};
  padding: 0;

  &:hover,
  &:focus {
    background-color: ${theme.colors.hover.primary};
  }
  &:active {
    background-color: ${theme.colors.hover.primary};
  }
  &:focus:after {
    border-color: ${theme.colors.active.primary};
  }
  &[disabled] {
    pointer-events: none;
    background-color: ${theme.backgrounds.disable};
    color: ${theme.colors.colors.disable};
  }

  @media screen and (min-width: ${tokens.breakpoints.tablet}px) {
    padding: 0;
  }
  @media screen and (min-width: ${tokens.breakpoints.desktop}px) {
    padding: 0;
  }
`}
`

export const InvisibleButton = styled.button`
  ${buttonStyles};
  padding: 0;
  background-color: transparent;
  color: ${(props) =>
    props.yellow
      ? tokens.colors.yellow700
      : props.orange
      ? tokens.colors.orange900
      : tokens.colors.grey900};
  line-height: 48px;
  text-decoration: underline;

  &:after {
    top: 4px;
    left: -6px;
    right: -6px;
    bottom: 4px;
  }

  &:hover,
  &:focus {
    color: ${(props) =>
      props.light
        ? designTokens.colors.grey100
        : props.dark
        ? designTokens.colors.grey800
        : designTokens.colors.purple800};
  }
  &:active {
    color: ${(props) =>
      props.light
        ? designTokens.colors.grey000
        : props.dark
        ? designTokens.colors.grey900
        : designTokens.colors.purple900};
  }
  &:focus:after {
    border-color: ${designTokens.colors.purple800};
  }
  &[disabled] {
    pointer-events: none;
    color: ${designTokens.colors.grey100};
  }
`
