import React, { Component } from 'react';
//import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Alert } from 'react-bootstrap';
import Nav from './Nav';
import images from './ImageList';
import ImageContainer from './ImageContainer';
//import './App.css';

class GameContainer extends Component {
    state = {
        score: 0,
        highScore: 0,
        clickedArr: [],
        imagesArr: [],
        message: "Click an image to begin!",
        isShow: false,
        won: false
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
                message: "You guessed incorrectly!",
                isShow: "danger",
                won: false
            });

            const element = document.querySelector('.animatebutton');
            element.classList.add('animated', 'shake');
            setTimeout(function () {
                element.classList.remove('shake');
            }, 1000);
        } else {
            newStateArray.push(imgId);
            highScore = (highScore === score) ? highScore + 1 : highScore;
            score = score + 1;
            this.setState({
                score: (score === images.length) ? 0 : score,
                highScore: highScore,
                clickedArr: (score === images.length) ? [] : newStateArray,
                imagesArr: shuffledArr,
                message: (score === images.length) ? "You won!!" : "You guessed correctly!",
                isShow: "success",
                won: (score === images.length) ? true : false
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
                <Nav isShow={this.state.isShow} won={this.state.won} message={this.state.message} score={this.state.score} highScore={this.state.highScore} />
                <Container className="animatebutton">
                    <div>
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
