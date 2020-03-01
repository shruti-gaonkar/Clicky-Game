import React from "react";
import { Navbar, Nav, Alert } from 'react-bootstrap';

function Navi(props) {
    return (
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="#home">Clicky Game</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Navbar.Text className="ml-auto">
                    {(props.isShow ?
                        <Alert variant={props.isShow} className="text-center">
                            {props.message}
                        </Alert>
                        : <h1 className="text-center">{(props.won) ? props.message : "Click an image to begin!"}</h1>)}
                </Navbar.Text>
            </Navbar.Collapse>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <Navbar.Text>Score: {props.score} | Top Score: {props.highScore}</Navbar.Text>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default Navi;