import React, { useState, useEffect } from "react"
import { Sidebar } from "../components/Sidebar"
import { Container } from "../components/Grid"
import Input from "../components/Input"
import Text, { Small } from "../components/Text"
import { useForm } from "react-hook-form"
import InputMask from "react-input-mask"
import { ButtonPrimary } from "../components/Button"
import Cards from "react-credit-cards"
import "react-credit-cards/es/styles-compiled.css"
import { useTheme } from "@material-ui/core/styles"
import "../assets/styles/pages/creditCard.css"
import Title from "../components/Title"
import api from "../services/api"
import { useHistory } from "react-router-dom"

const Register = () => {
  const { register, handleSubmit, errors } = useForm()
  const history = useHistory()
  const theme = useTheme()
  const [dataCard, setDataCard] = useState({
    cvc: "",
    expiry: "",
    nameCard: "",
    numberCard: "",
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDataCard({
      ...dataCard,
      [e.target.name]: e.target.value,
    })
  }

  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [email, setEmail] = useState("")
  const [senha, setSenha] = useState("")

  async function onSubmit(data: any) {
    await api.post("users", data)
    alert("cadastro realizado com sucesso")
    history.push("/login")
  }

  // useEffect(() => {
  //   name,
  //     phone,
  //     email,
  //     senha,
  //     dataCard.cvc,
  //     dataCard.expiry,
  //     dataCard.numberCard
  //   dataCard.nameCard
  // }, [])

  return (
    <>
      <Sidebar />
      <div className="flex justify-center items-center md:pt-4 pt-12 pb-4">
        <Container desktopWidth={50} tabletWidth={60} box>
          <div className="flex justify-center">
            <Title size="small" color={theme.colors.color.info}>
              Preencha seus dados
            </Title>
          </div>
          <div className="flex justify-center pb-8">
            <Text>É rápidinho, só para entendermos melhor sobre vc ;)</Text>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Input
              marginTop
              autoComplete="nope"
              type="text"
              name="name"
              id="inputName"
              maxLength={100}
              value={name}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setName(e.target.value)
              }
              placeholder="Nome Completo"
              ref={register({
                required: "Preencha o nome",
                pattern: {
                  value: /^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$/,
                  message: "Preencha com um nome válido",
                },
              })}
            />
            {errors.name && <Small>{errors.name.message}</Small>}
            <InputMask
              mask="(99) 99999-9999"
              autoComplete="nope"
              type="tel"
              name="phone"
              id="inputPhone"
              placeholder="Telefone"
              value={phone}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setPhone(e.target.value)
              }
            >
              {(inputProps: any) => (
                <Input
                  {...inputProps}
                  ref={register({
                    required: "Preencha o telefone",
                  })}
                />
              )}
            </InputMask>
            <div className="left">
              {errors.phone && <Small>{errors.phone.message}</Small>}
            </div>
            <Input
              autoComplete="nope"
              type="email"
              name="email"
              id="inputEmail"
              maxLength={100}
              placeholder="Email"
              value={email}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setEmail(e.target.value)
              }
              ref={register({
                required: "Preencha o email",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                  message: "Preencha com um email válido",
                },
              })}
            />
            {errors.email && <Small>{errors.email.message}</Small>}
            <Input
              autoComplete="nope"
              type="password"
              name="senha"
              id="inputSenha"
              placeholder="Senha"
              value={senha}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setSenha(e.target.value)
              }
              ref={register({
                required: "Preencha a senha",
                pattern: {
                  value: /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*\W+).*$/,
                  message: "Preencha com uma senha válida",
                },
              })}
            />
            {errors.senha && <Small>{errors.senha.message}</Small>}
            <div className="pt-6">
              <Cards
                cvc={dataCard.cvc}
                expiry={dataCard.expiry}
                name={dataCard.nameCard}
                number={dataCard.numberCard}
              />
            </div>
            <InputMask
              mask="9999 9999 9999 9999"
              autoComplete="nope"
              type="tel"
              name="numberCard"
              id="inputNumberCard"
              placeholder="Número do cartão"
              onChange={handleInputChange}
              value={dataCard.numberCard}
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
            {errors.numberCard && <Small>{errors.numberCard.message}</Small>}
            <div className="flex flex-row justify-between">
              <InputMask
                mask="99/9999"
                autoComplete="nope"
                type="tel"
                name="expiry"
                id="inputExpiry"
                placeholder="Validade do cartão"
                onChange={handleInputChange}
                value={dataCard.expiry}
              >
                {(inputProps: any) => (
                  <Input
                    {...inputProps}
                    width="50"
                    ref={register({
                      required: "Preencha a validade do cartão",
                      pattern: {
                        value: /^(0[1-9]|1[012])[/](19|20)\d{2}$/,
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
            <div className="flex justify-between">
              <div>
                {errors.expiry && <Small>{errors.expiry.message}</Small>}
              </div>
              <div>{errors.cvc && <Small>{errors.cvc.message}</Small>}</div>
            </div>
            <Input
              autoComplete="nope"
              type="text"
              name="nameCard"
              id="inputNameCard"
              maxLength={100}
              placeholder="Nome impresso no cartão"
              onChange={handleInputChange}
              value={dataCard.nameCard}
              ref={register({
                required: "Preencha o nome impresso no cartão",
                pattern: {
                  value: /^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$/,
                  message: "Preencha com um nome válido",
                },
              })}
            />
            {errors.nameCard && <Small>{errors.nameCard.message}</Small>}
            <div className="pt-2">
              <Text color={theme.colors.color.info} size="small">
                * Ao realizar o cadastro não iremos cobrar nenhum valor no seu
                cartão, apenas salvamos seus dados para quando precisar cobrar
                mensalmente ;)
              </Text>
            </div>
            <div className="flex justify-center pt-6">
              <ButtonPrimary type="submit">Cadastrar</ButtonPrimary>
            </div>
          </form>
        </Container>
      </div>
    </>
  )
}

export default Register
