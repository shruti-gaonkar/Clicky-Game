import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import GameContainer from "./components/GameContainer";

function App() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Navbar.Text>Score: 0 | Top Score: 0</Navbar.Text>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <GameContainer />
    </>
  );
}

export default App;
