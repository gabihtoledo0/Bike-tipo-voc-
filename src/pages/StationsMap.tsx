import React, { useEffect, useState } from "react"
import { Map, TileLayer, Marker, Popup } from "react-leaflet"
import "leaflet/dist/leaflet.css"
import logoBike from "../assets/images/logo-64px.svg"
import Leaflet from "leaflet"
import { FiArrowRight } from "react-icons/fi"
import { Link } from "react-router-dom"
import api from "../services/api"
import "../assets/styles/pages/stylesPopup.css"
import Sidebar from "../components/Sidebar"
import styled from "styled-components"
import tokens from "../config/tokens"

const mapIcon = Leaflet.icon({
  iconUrl: logoBike,
  iconSize: [52, 62],
  iconAnchor: [29, 68],
  popupAnchor: [170, 2],
})

type StationsProps = {
  id: number
  latitude: number
  longitude: number
  name: string
  bikeAvailable: number
  bikeUnavailable: number
}

const PageMap = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
  display: flex;

  .map {
    margin-top: 70px;
    @media screen and (min-width: ${tokens.breakpoints.tablet}px) {
      margin-top: 0;
    }
  }
`

function StationsMap() {
  const [stations, setStations] = useState<StationsProps[]>([])

  useEffect(() => {
    api.get("stations").then((response) => {
      setStations(response.data)
    })
  }, [stations])

  return (
    <PageMap id="page-map">
      <Sidebar long />
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
              <Popup
                closeButton={false}
                minWidth={240}
                className="map-popup"
                maxHeight={240}
              >
                {station.name}
                <Link to={`/station/${station.id}`}>
                  <FiArrowRight size={20} color="#fff" />
                </Link>
              </Popup>
            </Marker>
          )
        })}
      </Map>
    </PageMap>
  )
}

export default StationsMap
