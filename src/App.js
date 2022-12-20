import React from 'react';
import { Route, Switch } from 'react-router-dom/cjs/react-router-dom.min.js';
import Album from './pages/Album/Album.jsx';
import Login from './pages/Login/Login.jsx';
import Main from './pages/Main/Main.jsx';


function App() {
  return (
    <Switch>
      <Route exact path='/' component={ Login } />
      <Route path='/main' component={ Main } />
      <Route exact path='album/:id' component={ Album }/>
    </Switch>
  );
}

export default App;