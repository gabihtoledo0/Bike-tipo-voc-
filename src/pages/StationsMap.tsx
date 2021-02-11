import React, { useEffect, useState } from "react"
import { Map, TileLayer, Marker, Popup } from "react-leaflet"
import "leaflet/dist/leaflet.css"
import logoBike from "../assets/images/logo-64px.svg"
import Leaflet from "leaflet"
import { FiArrowRight } from "react-icons/fi"
import { Link } from "react-router-dom"
import api from "../services/api"
import "../assets/styles/pages/stylesPopup.css"
import { SidebarLarge } from "../components/Sidebar"
import styled, { ThemeContext } from "styled-components"
import tokens from "../config/tokens"
import Loader from "../components/Loader"
import BicycleParked from "../assets/images/bicycle-parked32x.png"
import BicycleCanceled from "../assets/images/bike-canceled32x.png"
import ParkingSign from "../assets/images/parking-sign32x.png"
import Image from "../components/Image"

const mapIcon = Leaflet.icon({
  iconUrl: logoBike,
  iconSize: [52, 62],
  iconAnchor: [29, 68],
  popupAnchor: [0, -65],
})

type StationsProps = {
  id: number
  latitude: number
  longitude: number
  name: string
  bikeAvailable: number
  bikeUnavailable: number
}

type MapProps = {
  isLogged?: boolean
}

const PageMap = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
  display: flex;

  .map {
    margin-top: 70px;
    @media screen and (min-width: ${tokens.breakpoints.desktop}px) {
      margin-top: 0;
    }
  }
`

function StationsMap({ isLogged }: MapProps) {
  const [stations, setStations] = useState<StationsProps[]>([])
  const [loading, setLoading] = useState<boolean>(false)
  const theme = React.useContext(ThemeContext)

  useEffect(() => {
    api
      .get("stations")
      .then((response) => {
        setStations(response.data)
      })
      .catch(() => setLoading(true))
  }, [])

  return loading ? (
    <Loader data="Carregando..." />
  ) : (
    <PageMap id="page-map">
      {isLogged ? <SidebarLarge isLogged /> : <SidebarLarge />}
      <Map
        className="map"
        center={[44.0614535, -123.0353531]}
        zoom={15}
        style={{ width: "100%", height: "100%" }}
      >
        <TileLayer
          url={`https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
        />
        {stations.map((station) => {
          return (
            <Marker
              key={station.id}
              position={[station.latitude, station.longitude]}
              icon={mapIcon}
            >
              {isLogged ? (
                <Popup
                  closeButton={false}
                  minWidth={240}
                  className="map-popup-is-logged"
                  maxHeight={240}
                >
                  {station.name}
                  <div
                    className="flex flex-row justify-between mt-3 mb-3"
                    style={{ width: "80%" }}
                  >
                    <div className="flex-col">
                      <Image src={BicycleParked} alt="bicicletas disponiveis" />
                      <div className="mt-2 text-center">
                        {station.bikeAvailable}
                      </div>
                    </div>
                    <div className="flex-col">
                      <Image src={ParkingSign} alt="vagas disponiveis" />
                      <div
                        className="mt-2 text-center"
                        style={{ color: theme.colors.color.success }}
                      >
                        {station.bikeUnavailable}
                      </div>
                    </div>
                    <div className="flex-col">
                      <Image src={BicycleCanceled} alt="bicicletas quebradas" />
                      <div
                        className="mt-2 text-center"
                        style={{ color: theme.colors.color.error }}
                      >
                        0
                      </div>
                    </div>
                  </div>

                  <Link to={`/station/${station.id}`}>
                    <FiArrowRight size={20} color="#fff" />
                  </Link>
                </Popup>
              ) : (
                <Popup
                  closeButton={false}
                  minWidth={240}
                  className="map-popup"
                  maxHeight={240}
                  maxWidth={260}
                >
                  Faça o login para continuar
                  <Link to="/login">
                    <FiArrowRight size={20} color="#fff" />
                  </Link>
                </Popup>
              )}
            </Marker>
          )
        })}
      </Map>
    </PageMap>
  )
}

export default StationsMap
