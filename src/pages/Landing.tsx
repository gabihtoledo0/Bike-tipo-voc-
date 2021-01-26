import React from "react"
import { useTheme } from "@material-ui/core/styles"
import { BsChevronDoubleDown } from "react-icons/bs"
import LogoBikeText from "../assets/images/bike-tipo-vc.svg"
import Ride from "../assets/images/ride.svg"
import { PageLanding, PurpleLanding } from "../components/Landing"
import Image from "../components/Image"
import Text from "../components/Text"
import Title from "../components/Title"
import Animista, { AnimistaTypes } from "react-animista"
import Table from "../components/Table"
import { StyledColumn, ColumnContainer } from "../components/Grid"
import MobileBro from "../assets/images/mobile-bro.svg"
import { ButtonPrimary } from "../components/Button"
import { Link } from "react-router-dom"

const Landing = () => {
  const theme = useTheme()

  const scrollWin = () => {
    window.scrollTo(0, document.body.scrollHeight)
  }

  return (
    <>
      <PageLanding>
        <div className="content-wrapper">
          <Image
            src={LogoBikeText}
            alt="logo bike tipo vc"
            width={160}
            tabletWidth={260}
            desktopWidth={360}
          />
          <main>
            <div className="text-landing">
              <Title
                weight="bold"
                as="h1"
                size="big"
                color={theme.colors.color.info}
              >
                Leve a saúde para sua vida
              </Title>
              <Text
                size="big"
                as="p"
                weight="bold"
                color={theme.colors.color.info}
              >
                Troque o carro pela bike e viva o mundo de uma melhor forma.
              </Text>
            </div>
            <div className="image-landing">
              <Image
                src={Ride}
                width={280}
                desktopWidth={550}
                alt="mulher andando de bicicleta"
              />
            </div>
          </main>

          <div className="location">
            <Title
              as="p"
              color={theme.colors.color.primaryInverse}
              size="xsmall"
              weight="bold"
            >
              Springfield
            </Title>
            <Title
              as="p"
              color={theme.colors.color.primaryInverse}
              weight="regular"
              size="xsmall"
            >
              Oregon
            </Title>
          </div>

          <button onClick={() => scrollWin()}>
            <Animista
              type={AnimistaTypes.SHADOW_DROP_2_BR}
              duration="1.5s"
              direction="alternate-reverse"
              iterationCount={999}
              className="enter-app"
            >
              <BsChevronDoubleDown
                size={26}
                color={theme.backgrounds.primary}
              />
            </Animista>
          </button>
        </div>
      </PageLanding>
      <PurpleLanding>
        <Animista
          type={AnimistaTypes.SCALE_UP_CENTER}
          duration="1s"
          direction="normal"
          className="display-animation"
        >
          <StyledColumn>
            <ColumnContainer size={12} tabletSize={12} desktopSize={5}>
              <Title size="small" color={theme.colors.color.primary}>
                Como funciona:
              </Title>
              <div className="pt-2 pb-8">
                <Text size="big" color={theme.colors.color.defaultInverse}>
                  Vc pode andar de bike grátis até 1 hora por dia, mas depois
                  disso iremos cobrar um valor a cada 5 minutos, num modelo pay
                  as you go.
                </Text>
              </div>
              <Table />
              <div className="pt-2">
                <Text size="xsmall" color={theme.colors.color.defaultInverse}>
                  * Ao realizar seu o cadastro iremos pedir seu cartão de
                  crédito, pois quando passar do seu tempo gratuito por dia
                  iremos adicionar os valores a + em um histórico mensal, e
                  então no final do mês cairá na fatura do seu cartão :)
                </Text>
              </div>
            </ColumnContainer>
            <ColumnContainer size={12} tabletSize={12} desktopSize={7}>
              <div className="flex lg:items-end md:items-center flex-col lg:pt-12 md:pt-2 align-end">
                <div className="items-center flex flex-col">
                  <div className="lg:pb-12">
                    <Image
                      src={MobileBro}
                      className="display-image"
                      desktopWidth={430}
                      alt="garoto na bicicleta conectado com o celular"
                    />
                  </div>
                  <Link to="/preview-map">
                    <ButtonPrimary>Explorar</ButtonPrimary>
                  </Link>
                </div>
              </div>
            </ColumnContainer>
          </StyledColumn>
        </Animista>
      </PurpleLanding>
    </>
  )
}

export default Landing
