import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../componentes/Header/Header';
import Loading from '../../componentes/Loading/Loading';
import context from '../../context';
import searchAlbumsAPI from '../../services/getAlbunsAPI';
import play from "../../images/play-icon.png"
import art from "../../images/Cassette player-bro.png"
import "./Main.css"
import Footer from '../../componentes/Footer/Footer';
import error from "../../images/404.svg"

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
  }

  return (
    <div className='Main'>
      <Header />
      <h2>Pesquisar</h2>
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
          Buscar
        </button>
        </div>
      <div className='Musicsbox'>
        {isLoading && <Loading />}
        { valAPI === true ?
         (
          artist.length !== 0 ?
          (
            artist.map((album, index) => (
              <div className='MusicsCards1' key={ index }>
                <div className='InfoAlbum'>
                  <img src={ album.artworkUrl100} alt={ album.collectionName } />
                  <div className='Tittle'>
                    <h3>{ album.collectionName }</h3>
                    <h4>{ album.artistName }</h4>
                  </div>
                  <Link
                  className='LinkAlbun'
                  to={`/album/${album.collectionId}`}
                  >
                    <img className='PlayButton' src={ play } alt="Botão Play" />
                  </Link>
                </div>
              </div>
        )))
        :
        (
          <div className='CatError'>
            <p>Seu Artista ou Banda não fi encontrado ;-;</p>
            <img src={ error } alt="erro" />
          </div>
        )
          )
        :
        (
          isLoading ? 
          <Loading />
          :
          (
            <div className='AwaitSearch'>
              <img className="Art" src={ art } alt="Ilustração" />
              <p>Esse site usa um banco de dados disponibilizado pelo Itunes. Pesquise por artistas ou albúns para ouvir uma prévia das suas músicas</p>
            </div>
          )

        )}
      </div>
      <Footer/>
    </div>
  );
}

export default Main;