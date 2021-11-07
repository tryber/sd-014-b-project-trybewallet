import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from './Pages/Login';

function App() {
  return (
    <main>
      <Switch>
        <Route path="/" component={ Login } />
      </Switch>
    </main>
  );
}

export default App;
