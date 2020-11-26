import styled from "styled-components"
import tokens from "../config/tokens"

export const PageLanding = styled.div`
  ${({ theme }) => `
  background: ${theme.backgrounds.gradientPrimary};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 30px 20px;

  @media screen and (min-width: ${tokens.breakpoints.desktop}px) {
    width: 100vw;
    height: 100vh;
    padding: 40px 20px;
  }

  & .content-wrapper {
    position: relative;
    width: 100%;
    max-width: 1150px;
    height: 100vh;
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    justify-content: space-between;

    @media screen and (min-width: ${tokens.breakpoints.desktop}px) {
      height: 100%;
    }

    .location {
      position: absolute;
      right: 0;
      top: 0;
      display: flex;
      flex-direction: column;
      text-align: right;
      color: ${theme.colors.color.primaryInverse};

      p {
        @media screen and (min-width: ${tokens.breakpoints.tablet}px) {
          font-size: 20px;
          line-height: 30px;
        }
      }
    }

    main {
      position: absolute;
      flex-direction: column;
      display: flex;
      justify-content: space-between;
      margin-top: 70px;

      @media screen and (min-width: ${tokens.breakpoints.tablet}px) {
        display: flex;
        align-self: center;
        margin-top: 80px;
      }

      @media screen and (min-width: ${tokens.breakpoints.desktop}px) {
        position: relative;
        align-self: end;
        margin-top: 30px;
      }

      .text-landing {
        max-width: 350px;
        position: relative;
        bottom: 0;

        @media screen and (min-width: ${tokens.breakpoints.tablet}px) {
          max-width: 500px;
        }

        @media screen and (min-width: ${tokens.breakpoints.desktop}px) {
          position: absolute;
          max-width: 350px;
          flex-direction: row;
          margin-top: 0;
        }
      }

      h1 {
        @media screen and (min-width: ${tokens.breakpoints.tablet}px) {
          font-size: 54px;
          line-height: 70px;
        }

        @media screen and (min-width: ${tokens.breakpoints.desktop}px) {
          font-size: 76px;
          line-height: 80px;
        }
      }
      p {
        margin-top: 20px;
        padding-bottom: 10px;

        @media screen and (min-width: ${tokens.breakpoints.tablet}px) {
          font-size: 24px;
          line-height: 32px;
        }

        @media screen and (min-width: ${tokens.breakpoints.desktop}px) {
          margin-top: 40px;
          padding-bottom: 40px;
        }
      }

      .image-landing {
        @media screen and (min-width: ${tokens.breakpoints.desktop}px) {
          position: relative;
          left: 440px;
        }
      }
    }

    & .enter-app {
      position: absolute;
      right: 0;
      bottom: 60px;
      width: 50px;
      height: 50px;
      background-color: ${theme.colors.color.primaryInverse};
      border-radius: 18px;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: 0.2s;
      align-self: flex-end;

      @media screen and (min-width: ${tokens.breakpoints.tablet}px) {
        position: absolute;
        bottom: 0;
        width: 50px;
        height: 50px;
        border-radius: 30px;
      }

      :hover {
        background-color: ${theme.colors.hover.secondary};
      }
    }
  `}
`

export const PurpleLanding = styled.div`
  ${({ theme }) => `
  background: ${theme.backgrounds.gradientSecondary};

  @media screen and (min-width: ${tokens.breakpoints.desktop}px) {
    width: 100vw;
    height: 100vh;
    padding: 40px 60px;
  }
  `}
`
