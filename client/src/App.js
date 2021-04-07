import React from 'react'
import styled from 'styled-components'
import Navbar from './components/Navbar'

const AppContainer = styled.main`
  height: 100%;
  width: 100%;
`

function App() {
  return (
    <AppContainer>
      <Navbar />
    </AppContainer>
  );
}

export default App;
