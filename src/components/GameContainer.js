import React, { Component } from 'react';
//import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Container } from 'react-bootstrap';
import images from './ImageList';
import ImageContainer from './ImageContainer';
//import './App.css';

class GameContainer extends Component {
    state = {
        score: 0,
        highScore: 0,
        clickedArr: [],
        imagesArr: [],
        message: "Click an image to begin!"
    }

    componentDidMount() {
        this.setState({ imagesArr: this.shuffle() });
    }

    handleImageClick = event => {
        let score = this.state.score;
        let highScore = this.state.highScore;

        const shuffledArr = this.shuffle();

        // copy the state array in a new array to modify it
        let newStateArray = this.state.clickedArr.slice();

        const imgId = event.target.attributes.getNamedItem("data-name").value;
        if (this.state.clickedArr.includes(imgId)) {
            this.setState({
                score: 0,
                highScore: highScore,
                clickedArr: [],
                imagesArr: shuffledArr,
                message: "You guessed incorrectly!"
            });
        } else {
            newStateArray.push(imgId);
            this.setState({
                score: score + 1,
                highScore: (highScore === score) ? highScore + 1 : highScore,
                clickedArr: newStateArray,
                imagesArr: shuffledArr,
                message: "You guessed correctly!"
            });
        }
    }

    shuffle() {
        const newArr = images.slice();

        var ctr = newArr.length, temp, index;

        // While there are elements in the array
        while (ctr > 0) {
            // Pick a random index
            index = Math.floor(Math.random() * ctr);
            // Decrease ctr by 1
            ctr--;
            // And swap the last element with it
            temp = newArr[ctr];
            newArr[ctr] = newArr[index];
            newArr[index] = temp;
        }
        return newArr;
    }

    render() {
        return (
            <>
                <Navbar bg="dark" variant="dark">
                    <Navbar.Brand href="#home">Clicky Game</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto">
                            <Navbar.Text>Score: {this.state.score} | Top Score: {this.state.highScore}</Navbar.Text>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
                <Container>
                    <div>
                        <h1 className="text-center">{this.state.message}</h1>
                        <h3 className="text-center">
                            <ImageContainer images={this.state.imagesArr} handleImageClick={this.handleImageClick} />
                        </h3>
                    </div>
                </Container>
            </>
        );
    }
}

export default GameContainer;
