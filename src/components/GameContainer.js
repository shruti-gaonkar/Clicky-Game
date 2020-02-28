import React, { Component } from 'react';
//import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
//import ImageList from './ImageList';
//import './App.css';

class GameContainer extends Component {
    state = {
        clicked: false
    }

    render() {
        return (<Container>
            <div>
                <h1 className="text-center">Some Text</h1>
                <h3 className="text-center">
                    Sub Text
                </h3>

            </div>
        </Container>);
    }
}

export default GameContainer;
