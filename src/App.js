import React from 'react';
import { Route, Switch } from 'react-router-dom/cjs/react-router-dom.min.js';
import Album from './pages/Album/Album.jsx';
import Main from './pages/Main/Main.jsx';


function App() {
  return (
    <Switch>
      <Route exact path='/' component={ () => <Main /> } />
      <Route exact path='/album/:id' component={ () => <Album /> }/>
    </Switch>
  );
}

export default App;