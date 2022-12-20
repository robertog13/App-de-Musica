import React, { useState } from "react";
import PropTypes from 'prop-types';
import FilterContext from './index';

export default function Provider({ children }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [search, setSearch] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [artist, setArtist] = useState('');

  const contextValue = {
    artist,
    setArtist,
    isLoading,
    setIsLoading,
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