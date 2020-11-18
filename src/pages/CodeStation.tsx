import React, { useEffect, useState } from 'react';
import Sidebar from '../components/Sidebar';
import { useParams } from 'react-router-dom';
import api from '../services/api';

type StationProps = {
  name: string;
  code: number;
  bikeAvailable: number;
  bikeUnavailable: number;
};

type StationPropsParams = {
  id: string;
};

function CodeStation() {
  const params = useParams<StationPropsParams>();
  const [station, setStation] = useState<StationProps>();

  useEffect(() => {
    api.get(`stations/${params.id}`).then((response) => {
      setStation(response.data);
    });
  }, [params.id]);

  if (!station) {
    return <p>Carregando...</p>;
  }

  return (
    <>
      <Sidebar />
      <main>
        <div>{station.code}</div>
      </main>
    </>
  );
}

export default CodeStation;
