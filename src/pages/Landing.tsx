import React from "react"
import { FiArrowRight } from "react-icons/fi"
import { Link } from "react-router-dom"
import LogoBikeText from "../assets/images/bike-tipo-vc.svg"
import Ride from "../assets/images/ride.svg"
import styled from "styled-components"
import tokens from "../config/tokens"
import Image from "../components/Image"
import Text from "../components/Text"
import Title from "../components/Title"

const PageLanding = styled.div`
  background: linear-gradient(
    90deg,
    rgba(255, 246, 121, 1) 19%,
    rgba(251, 220, 54, 1) 51%,
    rgba(251, 219, 51, 1) 100%
  );
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
      color: #945fbd;

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
      background-color: #945fbd;
      border-radius: 18px;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: 0.2s;
      align-self: flex-end;

      @media screen and (min-width: ${tokens.breakpoints.tablet}px) {
        position: absolute;
        bottom: 0;
        width: 80px;
        height: 80px;
        border-radius: 30px;
      }

      :hover {
        background-color: #7d3caf;
      }
    }
  }
`

export default function Landing() {
  return (
    <PageLanding>
      <div className="content-wrapper">
        <Image
          src={LogoBikeText}
          alt="logo bike tipo vc"
          width={160}
          tabletWidth="260px"
        />
        <main>
          <div className="text-landing">
            <Title weight="bold" as="h1" size="big" className="text-gray-700">
              Leve a saúde para sua vida
            </Title>
            <Text size="big" as="p" className="text-gray-700">
              Troque o carro pela bike e viva o mundo de uma melhor forma.
            </Text>
          </div>
          <div className="image-landing">
            <Image
              src={Ride}
              width={280}
              desktopWidth="550px"
              alt="mulher andando de bicicleta"
            />
          </div>
        </main>

        <div className="location">
          <Title as="p" size="xsmall" weight="bold">
            Springfield
          </Title>
          <Title as="p" weight="regular" size="xsmall">
            Oregon
          </Title>
        </div>

        <Link to="/map" className="enter-app">
          <FiArrowRight size={26} color="#fff" />
        </Link>
      </div>
    </PageLanding>
  )
}
