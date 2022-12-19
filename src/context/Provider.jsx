import React, { useState } from "react";
import PropTypes from 'prop-types';
import FilterContext from './index';

export default function Provider({ children }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [search, setSearch] = useState('');
  const [isLoadng, setIsLoadng] = useState(false);
  const [artist, setArtist] = useState({});

  const getMusics = async (id) => {
    const request = await fetch(`https://itunes.apple.com/lookup?id=${id}&entity=song`);
    const requestJson = await request.json();
    return requestJson.results;
  };

  const contextValue = {
    getMusics,
    artist,
    setArtist,
    isLoadng,
    setIsLoadng,
    search,
    setSearch,
    username,
    setUsername,
    password,
    setPassword,
  }

  return (
    <FilterContext.Provider value={ contextValue }>
      {children}
    </FilterContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.element.isRequired,
};