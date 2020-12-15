import React, { useState } from "react"
import { Sidebar } from "../components/Sidebar"
import { Container } from "../components/Grid"
import Input from "../components/Input"
import Text from "../components/Text"
import { useForm } from "react-hook-form"
import InputMask from "react-input-mask"
import { ButtonPrimary } from "../components/Button"
import Cards from "react-credit-cards"
import "react-credit-cards/es/styles-compiled.css"
import { useTheme } from "@material-ui/core/styles"
import "../assets/styles/pages/creditCard.css"

const Register = () => {
  const [data, setData] = useState({
    cvc: "",
    expiry: "",
    nameCard: "",
    number: "",
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    })
  }

  const { register, handleSubmit, errors } = useForm()
  const theme = useTheme()
  return (
    <>
      <Sidebar />
      <div className="flex justify-center items-center md:pt-4 pt-12 pb-4">
        <Container desktopWidth={50} tabletWidth={60} box>
          <form>
            <Text>Insira seus dados</Text>
            <Input
              autoComplete="nope"
              type="text"
              name="name"
              id="inputName"
              maxLength={100}
              placeholder="Nome Completo"
              ref={register({
                required: "Preencha o nome",
                pattern: {
                  value: /^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$/,
                  message: "Preencha com um nome válido",
                },
              })}
            />
            <InputMask
              mask="(99) 99999-9999"
              autoComplete="nope"
              type="tel"
              name="phone"
              id="inputPhone"
              placeholder="Telefone"
            >
              {(inputProps: any) => (
                <Input
                  {...inputProps}
                  ref={register({
                    required: "Preencha o telefone",
                    pattern: {
                      value: /^\([1-9]{2}\) (?:[2-8]|9[1-9])[0-9]{3}\-[0-9]{4}$/,
                      message: "Preencha com um telefone válido",
                    },
                  })}
                />
              )}
            </InputMask>
            <Input
              autoComplete="nope"
              type="email"
              name="email"
              id="inputEmail"
              maxLength={100}
              placeholder="Email"
              ref={register({
                required: "Preencha o email",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                  message: "Preencha com um email válido",
                },
              })}
            />

            <Input
              autoComplete="nope"
              type="password"
              name="password"
              id="inputSenha"
              placeholder="Senha"
              ref={register({
                required: "Preencha o campo senha",
                pattern: {
                  value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                  message: "Preencha com uma senha válida",
                },
              })}
            />
            <div className="pt-4 pb-12">
              <Cards
                cvc={data.cvc}
                expiry={data.expiry}
                name={data.nameCard}
                number={data.number}
              />
            </div>
            <InputMask
              mask="9999 9999 9999 9999"
              autoComplete="nope"
              type="tel"
              name="number"
              id="inputNumberCard"
              placeholder="Número do cartão"
              onChange={handleInputChange}
            >
              {(inputProps: any) => (
                <Input
                  {...inputProps}
                  ref={register({
                    required: "Preencha o numero do cartão",
                    pattern: {
                      value: /^\d{4}[ -]\d{4}[ -]\d{4}[ -]\d{4}$/,
                      message: "Preencha com uma numero de cartão válido",
                    },
                  })}
                />
              )}
            </InputMask>
            <div className="flex flex-row justify-between">
              <InputMask
                mask="99/99"
                autoComplete="nope"
                type="tel"
                name="expiry"
                id="inputExpiry"
                placeholder="Validade do cartão"
                onChange={handleInputChange}
              >
                {(inputProps: any) => (
                  <Input
                    {...inputProps}
                    width="50"
                    ref={register({
                      required: "Preencha a validade do cartão",
                      pattern: {
                        value: /^(0[1-9]|1[012])[- /.](19|20)\d\d$/,
                        message: "Preencha com uma data correta",
                      },
                    })}
                  />
                )}
              </InputMask>
              <InputMask
                mask="999"
                autoComplete="nope"
                type="text"
                name="cvc"
                id="inputCvc"
                placeholder="Código de segurança"
                onChange={handleInputChange}
              >
                {(inputProps: any) => (
                  <Input
                    {...inputProps}
                    width="45"
                    ref={register({
                      required: "Preencha o código de segurança",
                    })}
                  />
                )}
              </InputMask>
            </div>
            <Input
              autoComplete="nope"
              type="text"
              name="nameCard"
              id="inputNameCard"
              maxLength={100}
              placeholder="Nome impresso no cartão"
              onChange={handleInputChange}
              ref={register({
                required: "Preencha o nome impresso no cartão",
                pattern: {
                  value: /^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$/,
                  message: "Preencha com um nome válido",
                },
              })}
            />
            <Text color={theme.colors.color.textColor} size="small">
              * Ao realizar o cadastro não iremos cobrar nenhum valor no seu
              cartão, apenas salvamos seus dados para quando precisar cobrar
              mensalmente ;)
            </Text>
            <div className="flex justify-center pt-6">
              <ButtonPrimary>Cadastrar</ButtonPrimary>
            </div>
          </form>
        </Container>
      </div>
    </>
  )
}

export default Register
