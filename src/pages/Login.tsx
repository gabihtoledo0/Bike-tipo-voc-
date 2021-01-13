import React, { useState } from "react"
import { StyledColumn, ColumnContainer, Container } from "../components/Grid"
import Title from "../components/Title"
import { Small } from "../components/Text"
import Image from "../components/Image"
import CellPhoneLogin from "../assets/images/login.svg"
import { useTheme } from "@material-ui/core/styles"
import { useForm } from "react-hook-form"
import { ButtonPrimary, ButtonInvisible } from "../components/Button"
import Input from "../components/Input"
import { Sidebar } from "../components/Sidebar"
import api from "../services/api"
import { useHistory } from "react-router-dom"
import { login, idUser } from "../services/auth"
import MessageError from "../components/MessageError"
import Visible from "../components/Visible"

const Login = () => {
  const { register, handleSubmit, errors } = useForm()
  const [errorLogin, setErrorLogin] = useState<boolean>(false)
  const history = useHistory()

  async function onSubmit(data: any) {
    try {
      const response = await api.post("users/login", data)
      login(response.data.token)
      idUser(response.data.id)
      history.push("/map")
    } catch (err) {
      setErrorLogin(true)
    }
  }

  const theme = useTheme()
  return (
    <>
      <Sidebar />
      <div className="py-12 px-4">
        <div className="lg:h-16" />
        <StyledColumn>
          <ColumnContainer desktopSize={6} tabletSize={6} size={6}>
            <div className="flex justify-center">
              <Visible desktop>
                <Image
                  src={CellPhoneLogin}
                  width={300}
                  desktopWidth={500}
                  alt="localização no globo terrestre"
                  className="lg:ml-24"
                />
              </Visible>
            </div>
          </ColumnContainer>
          <ColumnContainer desktopSize={6} tabletSize={12} size={12}>
            <div className="flex justify-center">
              <Container width={100} tabletWidth={70} desktopWidth={70} box>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="pb-8">
                    <Title
                      size="small"
                      align="center"
                      color={theme.colors.color.info}
                    >
                      Falta pouco para começar a se exercitar :)
                    </Title>
                  </div>
                  {errorLogin && (
                    <div className="pb-4">
                      <MessageError text="Email ou senha inválida" />
                    </div>
                  )}
                  <div className="flex justify-center">
                    <Input
                      marginTop
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
                  {errors.email && (
                    <Small className="error">{errors.email.message}</Small>
                  )}
                  <div className="flex justify-center pb-2">
                    <Input
                      type="password"
                      name="password"
                      id="inputSenha"
                      placeholder="Senha"
                      ref={register({
                        required: "Preencha o campo senha",
                      })}
                    />
                  </div>
                  {errors.password && (
                    <Small className="error">{errors.password.message}</Small>
                  )}
                  <div className="pt-6 flex justify-evenly">
                    <ButtonPrimary type="submit" style={{ width: "100%" }}>
                      Entrar
                    </ButtonPrimary>
                  </div>
                </form>
                <div className="pt-4 flex justify-center">
                  <ButtonInvisible onClick={() => history.push("/register")}>
                    Cadastre-se
                  </ButtonInvisible>
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
