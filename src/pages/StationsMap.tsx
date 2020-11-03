import React from 'react';
import '../styles/pages/stationsMap.css';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import logoBike from '../images/logo-64px.svg';
import Leaflet from 'leaflet';
import { FiArrowRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const mapIcon = Leaflet.icon({
  iconUrl: logoBike,
  iconSize: [58, 68],
  iconAnchor: [29, 68],
  popupAnchor: [170, 2],
});

function StationsMap() {
  return (
    <div id="page-map">
      <aside>
        <header>
          <img src={logoBike} width="60px" alt="logo bike" />
          <h2 className="text-gray-700">Selecione a estação que desejar</h2>
          <p className="text-gray-700">
            Procure as estações que você queira retirar ou depositar sua bike :)
          </p>
        </header>
        <footer>
          <strong>Springfield</strong>
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
        <Marker position={[44.0614535, -123.0353531]} icon={mapIcon}>
          <Popup closeButton={false} minWidth={240} className="map-popup" maxHeight={240}>
            Estação Quick
             <Link to="/station/1">
              <FiArrowRight size={20} color="#fff" />
             </Link>
          </Popup>
        </Marker>
      </Map>
    </div>
  );
}

export default StationsMap;
