import React from 'react';
import Routes from './routes';
import { BrowserRouter } from 'react-router-dom';

/* Template do projeto */

const App = () => {
  return (
  <>
    <BrowserRouter>
    <Routes />
    </BrowserRouter>
  </>
  )
}

export default App;