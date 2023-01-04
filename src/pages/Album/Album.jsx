import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom/cjs/react-router-dom';
import Header from '../../componentes/Header/Header.jsx';
import Loading from '../../componentes/Loading';
import MusicCard from '../../componentes/MusicsCards/MusicCards';
import context from '../../context';
import getMusics from '../../services/getMusicsAPI';
import "./Album.css"

function Album() {
  useEffect(() => {
   music()
  },[])

  const { isLoading } = useContext(context);
  const [musics, setMusics] = useState('');
  const [band, setBand] = useState('');
  const {id} = useParams();

  const music = async () => {
    const result = await getMusics(id);
    const songs = result.filter((musica) => musica.kind === 'song');
    setMusics(songs);
    setBand(result[0])
  };
  console.log({musics});
 
  return (
    <>
    <Header />
    { isLoading && <Loading />}
    {
      musics.length > 0
        && (
          <div className='Album'>
            <div className='AlbumInfo'>
              <img src={band.artworkUrl100} alt={band.collectionName} />
              <div className='Tittles'>
                <h2>{ band.artistName }</h2>
                <h3>{ band.collectionName }</h3>
              </div>
            </div>
            {
              musics.map((song) => (
                <MusicCard
                  key={ song.length }
                  trackName={ song.trackName }
                  previewUrl={ song.previewUrl }
                />
            ))}
          </div>
      )}

    </>
  );
}

export default Album;