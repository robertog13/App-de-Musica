import React from 'react';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import "./Footer.css"

function Footer() {
  return (
  <div className='Footer'>
    <p>Site feito por Roberto Gonçalves de Araujo</p>
    <div className='Social'>
      <AiFillGithub size={30} className="iconS"/>
      <AiFillLinkedin size={30} className="iconS"/>
    </div>
    <p>Ilutrações de <a className='linkRef' href="https://storyset.com/web">Web illustrations by Storyset</a></p>
  </div>
  );
}

export default Footer;