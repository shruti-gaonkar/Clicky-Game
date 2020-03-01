import React from "react";
import { Navbar, Nav } from 'react-bootstrap';
import Alert from "./Alert";

function Navi(props) {
    return (
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="#home">Clicky Game</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Navbar.Text className="ml-auto">
                    {(props.isShow ?
                        <Alert isShow={props.isShow} message={props.message} />
                        : <h1 className="text-center">{(props.won) ? props.message : "Click an image to begin!"}</h1>)}
                </Navbar.Text>
            </Navbar.Collapse>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <Navbar.Text><h3>Score: {props.score} | Top Score: {props.highScore}</h3></Navbar.Text>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default Navi;