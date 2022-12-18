import React from "react";
import PropTypes from 'prop-types';
import FilterContext from './index';

export default function Provider({ children }) {

  const contextValue = {}

  return (
    <FilterContext.Provider value={ contextValue }>
      {children}
    </FilterContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.element.isRequired,
};