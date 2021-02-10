import React, { useEffect, useState } from "react"
import { Sidebar } from "../components/Sidebar"
import { useParams } from "react-router-dom"
import api from "../services/api"
import { Container } from "../components/Grid"
import Title from "../components/Title"
import Text from "../components/Text"
import Loader from "../components/Loader"
import Image from "../components/Image"
import { ButtonSecondary, ButtonPrimary } from "../components/Button"
import TorontoRafiki from "../assets/images/Toronto-rafiki.svg"
import { useTheme } from "@material-ui/core/styles"
import { useHistory } from "react-router-dom"
import MessageError from "../components/MessageError"
import Modal from "../components/Modal"
import { MdDone } from "react-icons/md"

type StationProps = {
  id?: number
  name?: string
  code?: number
  bikeAvailable?: number
  bikeUnavailable?: number
}

type StationPropsParams = {
  id: string
}

function CodeStation() {
  const theme = useTheme()
  const history = useHistory()
  const params = useParams<StationPropsParams>()
  const [station, setStation] = useState<StationProps>()
  const [error, setError] = useState<boolean>(false)
  const [textError, setTextError] = useState<string>("")
  const [isOpenWithdrawal, setIsOpenWithdrawal] = useState<boolean>(false)
  const [isOpenReturn, setIsOpenReturn] = useState<boolean>(false)
  const id_user = localStorage.getItem("@id-user")

  const now = new Date()
  const monName = new Array(
    "janeiro",
    "fevereiro",
    "março",
    "abril",
    "maio",
    "junho",
    "agosto",
    "outubro",
    "novembro",
    "dezembro"
  )

  const initial_date =
    now.getDate() +
    " de " +
    monName[now.getMonth()] +
    " de " +
    now.getFullYear()

  const initial_time = now.getHours() + ":" + now.getMinutes()

  const finish_date =
    now.getDate() +
    " de " +
    monName[now.getMonth()] +
    " de " +
    now.getFullYear()

  const finish_time = now.getHours() + ":" + now.getMinutes()

  useEffect(() => {
    api.get(`stations/${params.id}`).then((response) => {
      setStation(response.data)
    })
  }, [params.id])

  if (!station) {
    return <Loader data="Carregando..." />
  }

  const removedBike = () => {
    api
      .put(`stations/removed-bike/${station.id}`)
      .then(() => {
        setIsOpenWithdrawal(true)
      })
      .catch(() => {
        setError(true)
        setTextError("Algo deu errado")
      })
  }

  const addingBike = () => {
    api
      .put(`stations/adding-bike/${station.id}`)
      .then(() => {
        setIsOpenReturn(true)
      })
      .catch(() => {
        setError(true)
        setTextError("Algo deu errado")
      })
  }

  const withdrawalBike = (id_initial_station: any, name_station: any) => {
    const data = {
      id_user,
      id_initial_station,
      name_station,
      initial_date,
      initial_time,
      finish_time: "",
    }
    api
      .post("travels", data)
      .then(() => {
        removedBike()
      })
      .catch(() => {
        setError(true)
        setTextError(
          "Você já retirou a bike em uma determinada estação, para retirar outra devolva a anterior."
        )
      })
  }

  const returnBike = (id_finished_station: any) => {
    const data = {
      id_finished_station,
      finish_date,
      finish_time,
    }

    api
      .put(`travels/finalizar-viagem/${id_user}`, data)
      .then(() => {
        addingBike()
      })
      .catch((error) => {
        console.log(error.response.status)
        if (error.response.status === 400) {
          setError(true)
          setTextError(
            "Você ainda não retirou uma bike para fazer a devolução da mesma."
          )
        } else {
          setError(true)
          setTextError(
            "Você não pode devolver a bike na mesma estação de retirada. Tente em outra estação :)"
          )
        }
      })
  }

  const iconModal = () => {
    return <MdDone size={24} color={theme.colors.color.success} />
  }

  const footerModalWithdrawal = (id: any) => {
    const submit = (id: any) => {
      // setRaceStarted(id)
      history.push("/map")
    }
    return (
      <ButtonSecondary onClick={() => submit(id)}>
        Voltar para o mapa
      </ButtonSecondary>
    )
  }

  const footerModalReturn = () => {
    const submit = () => {
      // setRaceStarted(0)
      history.push("/map")
    }
    return (
      <ButtonSecondary onClick={() => submit()}>
        Voltar para o mapa
      </ButtonSecondary>
    )
  }

  return (
    <>
      <Sidebar />
      <div className="flex justify-center pt-12">
        <Modal
          icon={iconModal()}
          isOpen={isOpenWithdrawal}
          onClose={() => setIsOpenWithdrawal(false)}
          iconBackgroundColor={theme.backgrounds.successLight}
          title="Sucesso!"
          content="Bike retirada com sucesso, aproveite sua viagem ;)"
          footer={footerModalWithdrawal(station.id)}
        />
        <Modal
          icon={iconModal()}
          isOpen={isOpenReturn}
          onClose={() => setIsOpenReturn(false)}
          iconBackgroundColor={theme.backgrounds.successLight}
          title="Sucesso!"
          content="Bike devolvida com sucesso, volte sempre ;)"
          footer={footerModalReturn()}
        />
        <Container desktopWidth={50} tabletWidth={60} box>
          <div className="flex justify-center pb-4">
            <Text
              weight="bold"
              color={theme.colors.color.primaryInverse}
              size="small"
            >
              {station.name}
            </Text>
          </div>
          <div className="flex justify-center pb-4">
            <Title size="big">{station.code}</Title>
          </div>
          <Text size="small">
            * Este código serve para a retirada da bike na estação fisíca, após
            a retirada clique aqui no botão "Retirado bike" para mantermos um
            controle melhor sobre suas viagens. Faça o mesmo para a devolução da
            bike ;)
          </Text>
          {error && (
            <div className="pt-8">
              <MessageError text={textError} />
            </div>
          )}
          <div className="flex flex-row justify-between pt-8">
            <ButtonSecondary
              style={{
                width: "48%",
              }}
              onClick={() => withdrawalBike(station.id, station.name)}
            >
              Retirado bike
            </ButtonSecondary>
            <ButtonPrimary
              style={{
                width: "48%",
              }}
              onClick={() => returnBike(station.id)}
            >
              Devolver bike
            </ButtonPrimary>
          </div>
        </Container>
      </div>
      <div className="absolute right-0 bottom-0 opacity-75">
        <Image src={TorontoRafiki} alt="viagem de bicicleta" width={400} />
      </div>
    </>
  )
}

export default CodeStation
