import React from "react"
import { FiArrowLeft } from "react-icons/fi"
import { useHistory } from "react-router-dom"
import logoBike from "../assets/images/logo-64px.svg"
import styled from "styled-components"
import tokens from "../config/tokens"
import Image from "./Image"
import Text from "./Text"
import Title from "./Title"
import Visible from "./Visible"

const SidebarShort = styled.aside`
  position: fixed;
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: center;
  background: linear-gradient(
    90deg,
    rgba(255, 246, 121, 1) 19%,
    rgba(251, 220, 54, 1) 51%,
    rgba(251, 219, 51, 1) 100%
  );

  header {
    display: flex;
    justify-content: center;
    flex-direction: row;
    align-items: center;
  }

  .image-right {
    margin-right: 10px;
  }

  footer {
    position: absolute;
    left: 20px;
    right: 0;
    top: 15px;
  }

  button {
    width: 38px;
    height: 38px;
  }

  @media screen and (min-width: ${tokens.breakpoints.tablet}px) {
    height: 100%;
    width: auto;
    padding: 32px 24px;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    footer {
      position: relative;
      left: 0;
      right: 0;
      top: 0;
    }

    button {
      width: 48px;
      height: 48px;
    }
  }
`

const SidebarLong = styled.aside`
  position: fixed;
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: center;
  background: linear-gradient(
    90deg,
    rgba(255, 246, 121, 1) 19%,
    rgba(251, 220, 54, 1) 51%,
    rgba(251, 219, 51, 1) 100%
  );

  header {
    display: flex;
    justify-content: center;
    flex-direction: row;
    align-items: center;
  }

  & h2 {
    font-size: 36px;
  }

  .image-right {
    margin-right: 10px;
  }

  @media screen and (min-width: ${tokens.breakpoints.tablet}px) {
    position: relative;
    width: 480px;
    height: auto;
    padding: 50px;
    flex-direction: column;
    justify-content: space-between;

    .image-right {
      margin-right: 0;
    }

    header {
      display: block;
    }

    & h2 {
      margin-top: 64px;
    }

    & p {
      margin-top: 24px;
    }

    & footer {
      display: flex;
      flex-direction: column;
      line-height: 24px;
      color: #945fbd;
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

export function SidebarLarge() {
  return (
    <>
      <SidebarLong>
        <header>
          <div className="image-right">
            <Image
              src={logoBike}
              width={30}
              desktopWidth="60px"
              alt="logo bike"
            />
          </div>
          <Visible desktop>
            <Title as="h2" weight="bold" className="text-gray-700">
              Selecione a estação que desejar
            </Title>
            <Text size="big" as="p" className="text-gray-700" weight="bold">
              Procure as estações que você queira retirar ou depositar sua bike
              :)
            </Text>
          </Visible>
          <Visible mobile>
            <Text as="h2" weight="bold" size="big" className="text-gray-700">
              bike tipo vc
            </Text>
          </Visible>
        </header>
        <Visible desktop>
          <footer>
            <Text size="big" weight="bold">
              Springfield
            </Text>
            <Text as="span" size="big">
              Oregon
            </Text>
          </footer>
        </Visible>
      </SidebarLong>
    </>
  )
}

export function Sidebar() {
  const { goBack } = useHistory()
  return (
    <SidebarShort>
      <Image src={logoBike} width={40} alt="bike tipo vc" />
      <footer>
        <ButtonIcon type="button" onClick={goBack}>
          <FiArrowLeft size={24} color="#fff" />
        </ButtonIcon>
      </footer>
    </SidebarShort>
  )
}
