import React from 'react';
import '../styles/pages/stationsMap.css';
import { Map, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

function StationsMap() {
  return (
    <div id="page-map">
      <aside>
        <header>
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
          url={
            'https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}'
          }
        />
      </Map>
    </div>
  );
}

export default StationsMap;
