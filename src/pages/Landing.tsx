import React from "react"
import { FiArrowRight } from "react-icons/fi"
import { Link } from "react-router-dom"
import LogoBikeText from "../images/bike-tipo-vc.svg"
import Ride from "../images/ride.svg"
import styled from "styled-components"
import tokens from "../config/tokens"

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
    height: 100%;
    max-height: 680px;
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    justify-content: space-between;

    .location {
      position: absolute;
      right: 0;
      top: 0;
      font-size: 16px;
      display: flex;
      flex-direction: column;
      text-align: right;
      color: #945fbd;

      @media screen and (min-width: ${tokens.breakpoints.desktop}px) {
        font-size: 24px;
        line-height: 34px;
      }
    }

    main {
      position: relative;
      flex-direction: column;
      display: flex;
      justify-content: space-between;
      margin-top: 30px;

      .text-landing {
        max-width: 350px;
        position: relative;
        bottom: 0;

        @media screen and (min-width: ${tokens.breakpoints.desktop}px) {
          position: absolute;
          flex-direction: row;
          margin-top: 0;
        }
      }

      h1 {
        font-size: 32px;
        font-weight: 900;

        @media screen and (min-width: ${tokens.breakpoints.desktop}px) {
          font-size: 76px;
          line-height: 70px;
        }
      }
      p {
        margin-top: 20px;
        font-size: 16px;
        padding-bottom: 10px;

        @media screen and (min-width: ${tokens.breakpoints.desktop}px) {
          margin-top: 40px;
          font-size: 24px;
          line-height: 34px;
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
      position: relative;
      right: 0;
      bottom: 0;

      width: 50px;
      height: 50px;
      background-color: #945fbd;
      border-radius: 20px;

      display: flex;
      align-items: center;
      justify-content: center;
      transition: 0.2s;

      @media screen and (min-width: ${tokens.breakpoints.desktop}px) {
        position: absolute;
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
        <img src={LogoBikeText} alt="logo bike tipo vc" />
        <main>
          <div className="text-landing">
            <h1 className="text-gray-700">Leve a saúde para sua vida</h1>
            <p className="text-gray-700">
              Troque o carro pela bike e viva o mundo de uma melhor forma.
            </p>
          </div>
          <div className="image-landing">
            <img src={Ride} width={580} alt="mulher andando de bicicleta" />
          </div>
        </main>

        <div className="location">
          <strong>Springfield</strong>
          <span>Oregon</span>
        </div>

        <Link to="/map" className="enter-app">
          <FiArrowRight size={26} color="#fff" />
        </Link>
      </div>
    </PageLanding>
  )
}
