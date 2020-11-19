import React from "react"
import { useTheme } from "@material-ui/core/styles"
import { BsChevronDoubleDown } from "react-icons/bs"
import { Link } from "react-router-dom"
import LogoBikeText from "../assets/images/bike-tipo-vc.svg"
import Ride from "../assets/images/ride.svg"
import { PageLanding } from "../components/Landing"
import Image from "../components/Image"
import Text from "../components/Text"
import Title from "../components/Title"
import Animista, { AnimistaTypes } from "react-animista"

export default function Landing() {
  const theme = useTheme()
  return (
    <PageLanding>
      <div className="content-wrapper">
        <Image
          src={LogoBikeText}
          alt="logo bike tipo vc"
          width={160}
          tabletWidth="260px"
        />
        <main>
          <div className="text-landing">
            <Title weight="bold" as="h1" size="big" className="text-gray-700">
              Leve a saúde para sua vida
            </Title>
            <Text size="big" as="p" className="text-gray-700">
              Troque o carro pela bike e viva o mundo de uma melhor forma.
            </Text>
          </div>
          <div className="image-landing">
            <Image
              src={Ride}
              width={280}
              desktopWidth="550px"
              alt="mulher andando de bicicleta"
            />
          </div>
        </main>

        <div className="location">
          <Title as="p" size="xsmall" weight="bold">
            Springfield
          </Title>
          <Title as="p" weight="regular" size="xsmall">
            Oregon
          </Title>
        </div>

        <Link to="/map">
          <Animista
            type={AnimistaTypes.SHADOW_DROP_2_BR}
            duration="1.5s"
            direction="alternate-reverse"
            iterationCount={999}
            className="enter-app"
          >
            <BsChevronDoubleDown size={26} color={theme.backgrounds.primary} />
          </Animista>
        </Link>
      </div>
    </PageLanding>
  )
}
