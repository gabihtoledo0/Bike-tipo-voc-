import React, { useState } from "react"
import { Sidebar } from "../components/Sidebar"
import { Container } from "../components/Grid"
import Input from "../components/Input"
import Text, { Small } from "../components/Text"
import { useForm } from "react-hook-form"
import InputMask from "react-input-mask"
import { ButtonPrimary, ButtonSecondary } from "../components/Button"
import Cards from "react-credit-cards"
import "react-credit-cards/es/styles-compiled.css"
import "../assets/styles/pages/creditCard.css"
import { useTheme } from "@material-ui/core/styles"
import Title from "../components/Title"
import api from "../services/api"
import { useHistory } from "react-router-dom"
import MessageError from "../components/MessageError"
import Modal from "../components/Modal"
import { MdDone } from "react-icons/md"

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

  const [name, setName] = useState(sessionStorage.getItem("@name") || "")
  const [phone, setPhone] = useState(sessionStorage.getItem("@phone") || "")
  const [email, setEmail] = useState(sessionStorage.getItem("@email") || "")
  const [password, setPassword] = useState<string>("")
  const [confPassword, setConfPassword] = useState<string>("")
  const [errorRegister, setErrorRegister] = useState<boolean>(false)
  const [isOpenModalSucess, setIsOpenModalSucess] = useState<boolean>(false)
  const [isOpenModalError, setIsOpenModalError] = useState<boolean>(false)

  async function onSubmit(data: any) {
    if (password === confPassword) {
      try {
        await api.post("users", data)
        setIsOpenModalSucess(true)
      } catch (err) {
        setIsOpenModalError(true)
      }
    }
  }

  const iconModal = () => {
    return <MdDone size={24} color={theme.colors.color.success} />
  }

  const footerModal = () => {
    return (
      <ButtonSecondary onClick={() => history.push("/login")}>
        Entrar
      </ButtonSecondary>
    )
  }

  const iconModalError = () => {
    return (
      <svg
        className="h-6 w-6 text-red-600"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        aria-hidden="true"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
        />
      </svg>
    )
  }

  return (
    <>
      <Sidebar />
      <div className="flex justify-center items-center md:pt-4 pt-12 pb-4 px-4">
        <Modal
          icon={iconModal()}
          isOpen={isOpenModalSucess}
          onClose={() => setIsOpenModalSucess(false)}
          iconBackgroundColor={theme.backgrounds.successLight}
          title="Cadastro realizado"
          content="Seu cadastro foi realizado com sucesso :)"
          footer={footerModal()}
        />
        <Modal
          icon={iconModalError()}
          isOpen={isOpenModalError}
          onClose={() => setIsOpenModalError(false)}
          iconBackgroundColor={theme.backgrounds.errorLight}
          title="Falha no cadastro"
          content="Tivemos um problema ao realizar seu cadastro, verifique seus dados e tente novamente."
        />
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
              onBlur={() => sessionStorage.setItem("@name", name)}
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
              onBlur={() => sessionStorage.setItem("@phone", phone)}
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
              onBlur={() => sessionStorage.setItem("@email", email)}
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
              name="password"
              id="inputPassword"
              placeholder="Senha"
              value={password}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setPassword(e.target.value)
              }
              ref={register({
                required: "Preencha a senha",
                pattern: {
                  value: /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*\W+).*$/,
                  message: "Preencha com uma senha válida",
                },
              })}
            />
            {errors.password && <Small>{errors.password.message}</Small>}
            <Input
              autoComplete="nope"
              type="password"
              name="confSenha"
              id="inputConfPassword"
              placeholder="Confirme sua senha"
              value={confPassword}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setConfPassword(e.target.value)
              }
              ref={register({
                required: "Confirme sua senha",
              })}
            />
            {password !== "undefined" && confPassword !== "undefined" ? (
              password !== confPassword ? (
                <Small>As senhas não conferem</Small>
              ) : null
            ) : null}
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
            {errorRegister && (
              <div className="pt-4">
                <MessageError text="Ocorreu um erro ao registrar sua conta" />
              </div>
            )}
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
