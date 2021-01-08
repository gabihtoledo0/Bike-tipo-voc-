import React, { useEffect, useState } from "react"
import { Sidebar } from "../components/Sidebar"
import { useParams } from "react-router-dom"
import api from "../services/api"
import { Container } from "../components/Grid"
import Title from "../components/Title"
import Text from "../components/Text"
import Loader from "../components/Loader"
import { ButtonSecondary, ButtonPrimary } from "../components/Button"
import TorontoRafiki from "../assets/images/Toronto-rafiki.svg"

type StationProps = {
  name?: string
  code?: number
  bikeAvailable?: number
  bikeUnavailable?: number
}

type StationPropsParams = {
  id: string
}

function CodeStation() {
  const params = useParams<StationPropsParams>()
  const [station, setStation] = useState<StationProps>()

  useEffect(() => {
    api.get(`stations/${params.id}`).then((response) => {
      setStation(response.data)
    })
  }, [params.id])

  if (!station) {
    return <Loader data="Carregando..." />
  }

  return (
    <>
      <Sidebar />
      <div className="flex justify-center pt-12">
        <Container desktopWidth={50} tabletWidth={60} box>
          <div className="flex justify-center pb-4">
            <Title>{station.code}</Title>
          </div>
          <Text size="small">
            * O código serve para a retirada da bike na estação fisíca, após a
            retirada clique aqui no botão "Retirado bike" para mantermos um
            controle melhor sobre suas viagens. Faça o mesmo para a devolução da
            bike ;)
          </Text>
          <div className="flex flex-row justify-between pt-8">
            <ButtonPrimary
              style={{
                width: "48%",
              }}
            >
              Devolver bike
            </ButtonPrimary>
            <ButtonSecondary
              style={{
                width: "48%",
              }}
            >
              Retirado bike
            </ButtonSecondary>
          </div>
        </Container>
      </div>
    </>
  )
}

export default CodeStation
