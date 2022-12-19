import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import context from '../../context';
import searchAlbumsAPI from '../../services/getAlbunsAPI';

function Main() {
  const { search, setSearch, isLoading, setIsLoading, artist, setArtist } = useContext(context)
  const [validSearch, setValidSearch] = useState(true);

  useEffect(() => {
    search.length >= 2 ? setValidSearch(false) : setValidSearch(true);
  }, [search])

  const onClickSearch = async () => {
    const returnArtist = await searchAlbumsAPI(search)
    setArtist(returnArtist)
  }

  console.log(artist);

  return (
    <>
      <h2>Pesquisar</h2>
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
      { artist.map((album) => (
        <div key={ album.artistId }>
          <img src={ album.artworkUrl100} alt={ album.collectionName } />
          <h3>{ album.collectionName }</h3>
          <h4>{ album.artistName }</h4>
          <Link
            to={`/album/${album.collectionId}`}
          >
            Ver Album!
          </Link>
        </div>
      )) }
    </>
  );
}

export default Main;