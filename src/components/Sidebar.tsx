import React from "react"
import { FiArrowLeft } from "react-icons/fi"
import { useHistory } from "react-router-dom"
import { useTheme } from "@material-ui/core/styles"
import logoBike from "../assets/images/logo-64px.svg"
import styled from "styled-components"
import tokens from "../config/tokens"
import Image from "./Image"
import Text from "./Text"
import Title from "./Title"
import Visible from "./Visible"
import { ButtonSecondary, ButtonInvisible } from "../components/Button"
import { logout } from "../services/auth"

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
  z-index: 100;

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
    padding: 32px 26px;
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
  padding: 0 8px;

  header {
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    align-items: center;
  }

  & h2 {
    font-size: 36px;
  }

  .image-right {
    position: absolute;
    left: 20px;
  }

  @media screen and (min-width: ${tokens.breakpoints.desktop}px) {
    position: relative;
    width: 480px;
    height: auto;
    padding: 50px;
    flex-direction: column;
    justify-content: space-between;

    .image-right {
      margin-right: 0;
      position: relative;
      left: 0;
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

type SidebarLargeProps = {
  isLogged?: boolean
}

type UsersProps = {
  id?: number
}

export function SidebarLarge({ isLogged }: SidebarLargeProps) {
  const theme = useTheme()
  const history = useHistory()
  const idUser = localStorage.getItem("@id-user")

  function handleLogout() {
    history.push("/login")
    return logout()
  }


  return (
    <>
      <SidebarLong>
        <header>
          <div className="flex flex-row lg:justify-between items-center">
            <div className="image-right">
              <Image
                src={logoBike}
                desktopWidth={60}
                tabletWidth={50}
                width={40}
                alt="logo bike"
              />
            </div>
            {isLogged ? (
              <div className="flex h-10 lg:h-16 text-center lg:flex-col sm:flex-row absolute right-0 mr-4 lg:mr-0 lg:relative">
                <ButtonInvisible
                  variant="outlined"
                  style={{ width: "100%" }}
                  onClick={() => history.push(`/meus-dados/${idUser}`)}
                  className="lg:mb-2 mr-2 lg:mr-0"
                >
                  Meus dados
                </ButtonInvisible>
                <ButtonSecondary
                  style={{
                    width: "100%",
                    height: "auto",
                  }}
                  onClick={() => handleLogout()}
                >
                  Sair
                </ButtonSecondary>
              </div>
            ) : (
              <div className="flex h-10 lg:h-16 text-center lg:flex-col sm:flex-row absolute right-0 mr-4 lg:mr-0 lg:relative">
                <ButtonInvisible
                  variant="outlined"
                  style={{ width: "100%" }}
                  onClick={() => history.push("/register")}
                  className="lg:mb-2 mr-2 lg:mr-0"
                >
                  Cadastre-se
                </ButtonInvisible>
                <ButtonSecondary
                  style={{
                    width: "100%",
                    height: "auto",
                  }}
                  onClick={() => history.push("/login")}
                >
                  Entrar
                </ButtonSecondary>
              </div>
            )}
          </div>
          <Visible desktop>
            <Title as="h2" weight="bold" color={theme.colors.color.info}>
              Selecione a estação que desejar
            </Title>
            <Text
              size="big"
              as="p"
              color={theme.colors.color.info}
              weight="bold"
            >
              Procure as estações que você queira retirar ou depositar sua bike
              :)
            </Text>
          </Visible>
        </header>
        <Visible desktop>
          <footer>
            <Text
              size="big"
              color={theme.colors.color.primaryInverse}
              weight="bold"
            >
              Springfield
            </Text>
            <Text
              as="span"
              color={theme.colors.color.primaryInverse}
              size="big"
            >
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
      <Image
        src={logoBike}
        width={40}
        tabletWidth={50}
        desktopWidth={50}
        alt="bike tipo vc"
      />
      <footer>
        <ButtonIcon type="button" onClick={goBack}>
          <FiArrowLeft size={24} color="#fff" />
        </ButtonIcon>
      </footer>
    </SidebarShort>
  )
}
