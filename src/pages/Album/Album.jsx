import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom/cjs/react-router-dom';
import Header from '../../componentes/Header';
import Loading from '../../componentes/Loading';
import context from '../../context';
import getMusics from '../../services/getMusicsAPI';

function Album(prop) {
  const { ljksa } = prop;

  useEffect(() => {
   music()
  },[])

  const { isLoading, setIsLoading } = useContext(context);
  const [musics, setMusics] = useState('');
  const {id} = useParams();

  const music = async () => {
    const result = await getMusics(id);
    const songs = result.filter((musica) => musica.kind === 'song');
    setMusics(songs);
    console.log({result});
  };
 console.log({id});
  return (
    <>
    <Header />

    </>
  );
}

export default Album;