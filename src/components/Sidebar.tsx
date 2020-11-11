import React from "react"
import { FiArrowLeft } from "react-icons/fi"
import { useHistory } from "react-router-dom"
import logoBike from "../images/logo-64px.svg"
import styled from "styled-components"
import tokens from "../config/tokens"
import Image from "./Image"

type SidebarProps = {
  long?: boolean
}

const SidebarShort = styled.aside`
  display: none;
  @media screen and (min-width: ${tokens.breakpoints.tablet}px) {
    position: fixed;
    height: 100%;
    padding: 32px 24px;
    background: linear-gradient(
      90deg,
      rgba(255, 246, 121, 1) 19%,
      rgba(251, 220, 54, 1) 51%,
      rgba(251, 219, 51, 1) 100%
    );
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }
`

const SidebarLong = styled.aside`
  width: 480px;
  background: linear-gradient(
    90deg,
    rgba(255, 246, 121, 1) 19%,
    rgba(251, 220, 54, 1) 51%,
    rgba(251, 219, 51, 1) 100%
  );
  padding: 50px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  & h2 {
    font-size: 40px;
    font-weight: 800;
    line-height: 42px;
    margin-top: 64px;
  }

  & p {
    line-height: 28px;
    margin-top: 24px;
  }

  & footer {
    display: flex;
    flex-direction: column;
    line-height: 24px;
    color: #945fbd;

    & strong {
      font-weight: 800;
    }
  }
`

const ButtonIcon = styled.button`
  width: 48px;
  height: 48px;
  border: 0;
  background-color: #945fbd;
  border-radius: 16px;
  cursor: pointer;
  transition: 0.2s;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background-color: #7d3caf;
  }
`

export default function Sidebar(long: SidebarProps) {
  const { goBack } = useHistory()
  return (
    <>
      {long ? (
        <SidebarLong>
          <header>
            <Image src={logoBike} width={60} alt="logo bike" />
            <h2 className="text-gray-700">Selecione a estação que desejar</h2>
            <p className="text-gray-700">
              Procure as estações que você queira retirar ou depositar sua bike
              :)
            </p>
          </header>
          <footer>
            <strong>Springfield</strong>
            <span>Oregon</span>
          </footer>
        </SidebarLong>
      ) : (
        <SidebarShort>
          <img src={logoBike} width="40px" alt="bike tipo vc" />
          <footer>
            <ButtonIcon type="button" onClick={goBack}>
              <FiArrowLeft size={24} color="#fff" />
            </ButtonIcon>
          </footer>
        </SidebarShort>
      )}
    </>
  )
}
