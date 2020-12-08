import React from "react"
import { Sidebar } from "../components/Sidebar"
import { Container } from "../components/Grid"
import Input from "../components/Input"
import Text from "../components/Text"
import { useForm } from "react-hook-form"
import InputMask from "react-input-mask"

const Register = () => {
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
              maxLength={12}
              placeholder="Telefone"
              defaultValue="as"
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
          </form>
        </Container>
      </div>
    </>
  )
}

export default Register
