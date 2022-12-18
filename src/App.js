import React from 'react';
import { Route, Switch } from 'react-router-dom/cjs/react-router-dom.min.js';
import Login from './pages/Login/Login.jsx';


function App() {
  return (
    <Switch>
      <Route exact path='/' component={ Login } />
    </Switch>
  );
}

export default App;