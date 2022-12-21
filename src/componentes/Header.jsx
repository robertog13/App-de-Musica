import React, { useContext } from 'react';
import context from '../context';

function Header() {
  const {username} = useContext(context)
  return (
    <>
    <p>logo</p>
    <p>{ username }</p>
    <p>pages</p>
    </>
  );
}

export default Header;