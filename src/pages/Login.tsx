import React, { useState } from "react"
import { StyledColumn, ColumnContainer, Container } from "../components/Grid"
import Title from "../components/Title"
import { Small } from "../components/Text"
import Image from "../components/Image"
import login from "../assets/images/login.svg"
import { useTheme } from "@material-ui/core/styles"
import { useForm } from "react-hook-form"
import { ButtonPrimary, ButtonInvisible } from "../components/Button"
import Input from "../components/Input"
import { Sidebar } from "../components/Sidebar"
import { Link } from "react-router-dom"

const Login = () => {
  const { register, handleSubmit, errors } = useForm()
  const [session, setSession] = useState({ message: "" })

  function onSubmit(data: any) {
    const url =
      data.password === "123123"
        ? "https://demo3107275.mockable.io/login"
        : " https://demo3107275.mockable.io/failed-login"

    fetch(url, {
      method: "POST",
      body: JSON.stringify(data),
      headers: new Headers({
        Accept: "application/json",
        "Content-Type": "application/json",
      }),
    }).then((response) => {
      if (response.status === 401) {
        setSession({ message: "Login ou senha incorretos" })
      } else if (response.status === 200) {
        setSession({ message: "" })
      }
    })
  }

  const theme = useTheme()
  return (
    <>
      <Sidebar />
      <div className="py-12 px-4">
        <div className="h-16" />
        <StyledColumn>
          <ColumnContainer desktopSize={6} tabletSize={6} size={6}>
            <div className="flex justify-center">
              <Image
                src={login}
                width={300}
                desktopWidth="500px"
                alt="localização no globo terrestre"
              />
            </div>
          </ColumnContainer>
          <ColumnContainer desktopSize={6} tabletSize={12} size={12}>
            <div className="flex justify-center">
              <Container box>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="flex pb-8">
                    <Title
                      size="small"
                      align="center"
                      color={theme.colors.color.info}
                    >
                      Falta pouco para começar a se exercitar :)
                    </Title>
                  </div>
                  <div className="flex justify-center">
                    <Input
                      autoComplete="off"
                      type="email"
                      name="email"
                      id="inputEmail"
                      placeholder="Email"
                      ref={register({
                        required: "Preencha o campo email",
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                          message: "Preencha com um email válido",
                        },
                      })}
                    />
                  </div>
                  <div className="flex justify-evenly">
                    {errors.email && (
                      <Small className="error">{errors.email.message}</Small>
                    )}
                  </div>
                  <div className="flex justify-center pb-2">
                    <Input
                      type="password"
                      name="password"
                      id="inputSenha"
                      placeholder="Senha"
                      ref={register({
                        required: "Preencha o campo senha",
                        // pattern: {
                        //   value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                        //   message: "Preencha com uma senha válida",
                        // },
                      })}
                    />
                  </div>
                  <div className="flex justify-evenly">
                    {errors.password && (
                      <Small className="error">{errors.password.message}</Small>
                    )}
                  </div>
                  <div className="flex justify-evenly">
                    {session.message && (
                      <Small className="error">{session.message}</Small>
                    )}
                    <ButtonPrimary>Entrar</ButtonPrimary>
                  </div>
                </form>
                <div className="pt-4 flex justify-center">
                  <Link to="/register">
                    <ButtonInvisible href="#text-buttons">
                      Cadastre-se
                    </ButtonInvisible>
                  </Link>
                </div>
              </Container>
            </div>
          </ColumnContainer>
        </StyledColumn>
      </div>
    </>
  )
}

export default Login
