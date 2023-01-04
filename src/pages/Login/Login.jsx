import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom';
import context from '../../context';
import "./Login.css";


function Login() {
  const {username, setUsername, password, setPassword} = useContext(context)
  const [validLogin, setValidLogin] = useState(true);
  const history = useHistory()

  const validateEmail = () => /\S+@\S+\.\S+/.test(username);
  const validatePassword = password.length > +'6'

  useEffect(() => {
    if (validateEmail() && validatePassword) {
      setValidLogin(true)
    } else {
      setValidLogin(false)
    }
  },[username, password])

  const handleClick = () => {
    history.push('/main')
  }

  return (
    <div className='LoginPage'>
      <h1>TryTunes</h1>
      <h2>Login</h2>
      <label htmlFor="username">
        Usuário
        <input
        type="text"
        id='username'
        name='username'
        value={ username }
        onChange={ (e) => setUsername(e.target.value)}
        />
      </label>
      <label htmlFor="password">
        Senha
        <input
        type="password"
        id='password'
        name='password'
        value={ password }
        onChange={ (e) => setPassword(e.target.value) }
        />
      </label>
      <button
        type='button'
        onClick={ handleClick }
        disabled={ !validLogin }
      >
        Entrar
      </button>
    </div>
  );
}

export default Login;