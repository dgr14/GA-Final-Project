import React from 'react'
import styled from 'styled-components'
import { BrowserRouter as Router } from 'react-router-dom';
import Home from './pages';

const AppContainer = styled.main`
  height: 100%;
  width: 100%;
`

function App() {
  return (
    <Router>
      <Home />
    </Router>
  );
}

export default App;
