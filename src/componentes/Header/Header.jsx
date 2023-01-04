import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';
import { AiFillStar } from 'react-icons/ai'
import { BiLogIn } from 'react-icons/bi'
import context from '../../context';
import disco  from "../../images/disco-icon.png";
import "./Header.css"

function Header() {
  const {username} = useContext(context)
  return (
    <div className='Header'>
      <img className="Logo" src={ disco } alt="Logo" />
      <h1>TryTunes</h1>
      <div className='PerfilInfo'>
        <p>{ username }</p>
        <Link to="/main"><FaHome className='Navegation' size={30}/></Link>
        <Link to="/favorite"><AiFillStar className='Navegation' size={ 32 }/></Link>
        <Link to="/"><BiLogIn className='Navegation' size={30} /></Link>
      </div>
    </div>
  );
}

export default Header;