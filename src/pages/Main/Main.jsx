import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../componentes/Header/Header';
import Loading from '../../componentes/Loading';
import context from '../../context';
import searchAlbumsAPI from '../../services/getAlbunsAPI';
import play from "../../images/play-icon.png"
import art from "../../images/Cassette player-bro.png"
import "./Main.css"

function Main() {
  const { search, setSearch, artist, setArtist, isLoading, setIsLoading } = useContext(context)
  const [validSearch, setValidSearch] = useState(true);
  const [valAPI, setValAPI] = useState(false);

  useEffect(() => {
    search.length >= 2 ? setValidSearch(false) : setValidSearch(true);
  }, [search])

  const onClickSearch = async () => {
    setIsLoading(true)
    setValAPI(false)
    const returnArtist = await searchAlbumsAPI(search)
    setArtist(returnArtist)
    setValAPI(true)
    setSearch('')
    setIsLoading(false)
  }

  console.log({artist});

  return (
    <div className='Main'>
      <Header />
      <h2>Pesquisar Artista </h2>
      <div className='Search'>
        <input
        type="text"
        id='search'
        name='search'
        value={ search }
        onChange={ (e) => setSearch(e.target.value) }
        />
        <button
          type='button'
          onClick={ onClickSearch }
          disabled={ validSearch }
          >
          ir
        </button>
        </div>
      <div className='Musicsbox'>
        {isLoading && <Loading />}
        { valAPI === true ?
         (
            artist.map((album, index) => (
              <div className='MusicsCards1' key={ index }>
                <div className='InfoAlbum'>
                <img src={ album.artworkUrl100} alt={ album.collectionName } />
                  <div className='Tittle'>
                    <h3>{ album.collectionName }</h3>
                    <h4>{ album.artistName }</h4>
                  </div>
                </div>
                <Link
                className='aaa'
                to={`/album/${album.collectionId}`}
                >
                  <img className='PlayButton' src={ play } alt="Botão Play" />
                </Link>
              </div>
        )))
        :
        (
          <div className='testeaaa'>
            <img className="Art" src={ art } alt="Ilustração" />
          </div>
        )}
      </div>
    </div>
  );
}

export default Main;