import React, { useState } from "react"
import { Sidebar } from "../components/Sidebar"
import { Container } from "../components/Grid"
import Input from "../components/Input"
import Text from "../components/Text"
import { useForm } from "react-hook-form"
import InputMask from "react-input-mask"
import { ButtonPrimary } from "../components/Button"
import Cards from "react-credit-cards"

const Register = () => {
  const [cvc, setCvc] = useState('')
  const [expiry, setExpiry] = useState('')
  const [focus, setFocus] = useState('')
  const [name, setName] = useState('')
  const [number, setNumber] = useState('')


  handleInputFocus = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ focus: e.target.name })
  }

  handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target

    this.setState({ [name]: value })
  }

  const { register, handleSubmit, errors } = useForm()
  return (
    <>
      <Sidebar />
      <div className="flex justify-center items-center pt-4">
        <Container desktopWidth={50} box>
          <form>
            <Text>Insira seus dados</Text>
            <Input
              autoComplete="off"
              type="text"
              name="name"
              id="inputName"
              maxLength={100}
              placeholder="Nome Completo"
              ref={register({
                required: "Preencha o campo nome",
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
                    required: "Preencha o campo telefone",
                    pattern: {
                      value: /^\([1-9]{2}\) (?:[2-8]|9[1-9])[0-9]{3}\-[0-9]{4}$/,
                      message: "Preencha com um telefone válido",
                    },
                  })}
                />
              )}
            </InputMask>
            <Input
              autoComplete="off"
              type="email"
              name="email"
              id="inputEmail"
              maxLength={100}
              placeholder="Email"
              ref={register({
                required: "Preencha o campo email",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                  message: "Preencha com um email válido",
                },
              })}
            />

            <Input
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
            <ButtonPrimary>Cadastrar</ButtonPrimary>
            <Cards
              cvc={this.state.cvc}
              expiry={this.state.expiry}
              focused={this.state.focus}
              name={this.state.name}
              number={this.state.number}
            />
          </form>
        </Container>
      </div>
    </>
  )
}

export default Register
