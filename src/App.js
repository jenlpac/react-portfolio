import React from 'react';
import About from './components/About';
import Nav from './components/Nav';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';

function App() {
  return (
    <div>
      <Nav></Nav>
      <main>
        <Portfolio></Portfolio>
        <br></br>
        <br></br>
        <About></About>
        <br></br>
        <br></br>
        <Contact></Contact>
      </main>
    </div>
  )
}

export default App;
