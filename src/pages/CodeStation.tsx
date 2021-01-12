import React, { useEffect, useState, FormEvent } from "react"
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
import SimpleModal from "../components/SimpleModal"
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

function CodeStation(props: any) {
  const theme = useTheme()
  const history = useHistory()
  const params = useParams<StationPropsParams>()
  const [station, setStation] = useState<StationProps>()
  const { raceStarted, setRaceStarted } = props
  const [error, setError] = useState<boolean>(false)
  const [textError, setTextError] = useState<string>("")
  const [isOpen, setIsOpen] = useState<boolean>(false)

  useEffect(() => {
    api.get(`stations/${params.id}`).then((response) => {
      setStation(response.data)
    })
  }, [params.id])

  if (!station) {
    return <Loader data="Carregando..." />
  }

  const withdrawalBike = (id: any) => {
    if (raceStarted !== 0) {
      setError(true)
      setTextError(
        "Você já retirou a bike em uma determinada estação, para retirar outra devolva a anterior."
      )
    } else {
      setRaceStarted(id)
      setIsOpen(true)
    }
  }

  const returnBike = (id: any) => {
    if (raceStarted === 0) {
      setError(true)
      setTextError(
        "Você ainda não retirou uma bike para fazer a devolução da mesma."
      )
    } else if (raceStarted === id) {
      setError(true)
      setTextError(
        "Você não pode devolver a bike na mesma estação de retirada. Tente em outra estação :)"
      )
    } else {
      setRaceStarted(0)
    }
  }

  const iconModal = () => {
    return <MdDone size={24} color={theme.colors.color.success} />
  }

  const footerModal = () => {
    return <ButtonSecondary onClick={() => history.push("/map")} />
  }

  return (
    <>
      <Sidebar />
      <div className="flex justify-center pt-12">
        <SimpleModal
          icon={iconModal()}
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          iconBackgroundColor={theme.backgrounds.successLight}
          title="Sucesso!"
          content="Bike retirada com sucesso, aproveite sua viagem ;)"
          footer={footerModal()}
        />
        <SimpleModal
          icon={iconModal()}
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          iconBackgroundColor={theme.backgrounds.successLight}
          title="Sucesso!"
          content="Bike devolvida com sucesso, volte sempre ;)"
          footer={footerModal()}
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
              onClick={() => withdrawalBike(station.id)}
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
      <div className="absolute right-0 bottom-0">
        <Image src={TorontoRafiki} alt="viagem de bicicleta" width={400} />
      </div>
    </>
  )
}

export default CodeStation
