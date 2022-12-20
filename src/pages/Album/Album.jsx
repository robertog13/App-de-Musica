import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom/cjs/react-router-dom';
import getMusics from '../../services/getMusicsAPI';

function Album() {

  useEffect(() => {
    music()
  },[])

  const [musics, setMusics] = useState('');
  const {id} = useParams();

  const music = async () => {
    const result = await getMusics(id);
    const songs = result.filter((musica) => musica.kind === 'song');
    setMusics(songs);
  };
 console.log(musics);
  return (
  <p>{musics.trackName}</p>
  );
}

export default Album;