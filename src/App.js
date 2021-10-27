import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Login from './pages/Login';

function App() {

  return (
  <>
  <div>
    Hello, TrybeWallet!
  </div>
  <BrowserRouter>
    <Route path="/" component={Login} />
  </BrowserRouter>
  </>
  );
}

export default App;
