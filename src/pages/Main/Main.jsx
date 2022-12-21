import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../componentes/Header';
import Loading from '../../componentes/Loading';
import context from '../../context';
import searchAlbumsAPI from '../../services/getAlbunsAPI';

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

  console.log(isLoading);

  return (
    <>
      <Header />
      <h2>Pesquisar Artista </h2>
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
      <div>
        {isLoading && <Loading />}
        { valAPI === true 
          && (
            artist.map((album, index) => (
              <div key={ index }>
                <img src={ album.artworkUrl100} alt={ album.collectionName } />
                <h3>{ album.collectionName }</h3>
                <h4>{ album.artistName }</h4>
                <Link
                  to={`/album/${album.collectionId}`}
                >
                  Ver Album!
                 </Link>
              </div>
        )))}
      </div>
    </>
  );
}

export default Main;