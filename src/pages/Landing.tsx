import React from "react"
import { FiArrowRight } from "react-icons/fi"
import { Link } from "react-router-dom"
import LogoBikeText from "../images/bike-tipo-vc.svg"
import styled from "styled-components"

const PageLanding = styled.div`
  background: linear-gradient(
      90deg,
      rgba(255, 246, 121, 1) 19%,
      rgba(251, 220, 54, 1) 51%,
      rgba(251, 219, 51, 1) 100%
    );
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 40px 0;
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
    background: url(../images/ride.svg) no-repeat 80% center;

    .location {
      position: absolute;
      right: 0;
      top: 0;
      font-size: 24px;
      line-height: 34px;
      display: flex;
      flex-direction: column;
      text-align: right;
      color: #945fbd;
    }

    main {
      max-width: 350px;

      h1 {
        font-size: 76px;
        font-weight: 900;
        line-height: 70px;
      }
      p {
        margin-top: 40px;
        font-size: 24px;
        line-height: 34px;
      }
    }

    & .enter-app {
      position: absolute;
      right: 0;
      bottom: 0;

      width: 80px;
      height: 80px;
      background-color: #945fbd;
      border-radius: 30px;

      display: flex;
      align-items: center;
      justify-content: center;
      transition: 0.2s;

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
          <h1 className="text-gray-700">Leve saúde para sua vida</h1>
          <p className="text-gray-700">
            Troque o carro por bicicleta e veja o mundo de uma outra forma.
          </p>
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
