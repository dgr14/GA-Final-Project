import React from 'react'
import styled from 'styled-components'
import Navbar from './components/Navbar'
import { BrowserRouter as Router } from 'react-router-dom';

const AppContainer = styled.main`
  height: 100%;
  width: 100%;
`

function App() {
  return (
    <Router>
      <Navbar />
    </Router>
  );
}

export default App;
