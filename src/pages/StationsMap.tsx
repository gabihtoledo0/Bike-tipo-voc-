import React, { useEffect, useState } from 'react';
import '../styles/pages/stationsMapStyled.ts';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import logoBike from '../images/logo-64px.svg';
import Leaflet from 'leaflet';
import { FiArrowRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import api from '../services/api';
import { stationsMapStyled } from '../styles/pages/stationsMapStyled';
import '../styles/pages/stylesPopup.css';

const mapIcon = Leaflet.icon({
  iconUrl: logoBike,
  iconSize: [58, 68],
  iconAnchor: [29, 68],
  popupAnchor: [170, 2],
});

type StationsProps = {
  id: number;
  latitude: number;
  longitude: number;
  name: string;
  bikeAvailable: number;
  bikeUnavailable: number;
};

function StationsMap() {
  const [stations, setStations] = useState<StationsProps[]>([]);
  const classes = stationsMapStyled();

  useEffect(() => {
    api.get('stations').then((response) => {
      setStations(response.data);
    });
  }, [stations]);

  return (
    <div id="page-map" className={classes.pageMap}>
      <aside className={classes.aside}>
        <header>
          <img src={logoBike} width="60px" alt="logo bike" />
          <h2 className={`text-gray-700 ${classes.titleAside}`}>
            Selecione a estação que desejar
          </h2>
          <p className={`text-gray-700 ${classes.textAside}`}>
            Procure as estações que você queira retirar ou depositar sua bike :)
          </p>
        </header>
        <footer className={classes.footerAside}>
          <strong className={classes.strongAside}>Springfield</strong>
          <span>Oregon</span>
        </footer>
      </aside>

      <Map
        center={[44.0614535, -123.0353531]}
        zoom={15}
        style={{ width: '100%', height: '100%' }}
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
          );
        })}
      </Map>
    </div>
  );
}

export default StationsMap;
