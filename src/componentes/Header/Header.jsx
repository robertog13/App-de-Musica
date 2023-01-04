import React, { useContext } from 'react';
import context from '../../context';
import disco  from "../../images/disco-icon.png";
import config from "../../images/engrenagem.png"
import "./Header.css"

function Header() {
  const {username} = useContext(context)
  return (
    <div className='Header'>
      <img className="Logo" src={ disco } alt="Logo" />
      <h1>TryTunes</h1>
      <div className='PerfilInfo'>
        <p>{ username }</p>
        <img className='Config' src={ config } alt="Configurações" />
      </div>
    </div>
  );
}

export default Header;