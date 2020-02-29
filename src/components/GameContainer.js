import React, { Component } from 'react';
//import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import ImageList from './ImageList';
//import './App.css';

class GameContainer extends Component {
    state = {
        score: 0,
        highScore: 0,
        clickedArr: []
    }

    handleImageClick = event => {
        let score = this.state.score;
        let highScore = this.state.highScore;
        let newStateArray = this.state.clickedArr.slice();

        const imgId = event.target.attributes.getNamedItem("data-id").value;
        if (this.state.clickedArr.includes(imgId)) {
            this.setState({
                score: 0,
                highScore: highScore,
                clickedArr: []
            });
        } else {
            newStateArray.push(imgId);
            this.setState({
                score: score + 1,
                highScore: (highScore === score) ? highScore + 1 : highScore,
                clickedArr: newStateArray
            });
        }
    }

    render() {
        return (<Container>
            <div>
                <h1 className="text-center">Some Text</h1>
                <h3 className="text-center">
                    <ImageList handleImageClick={this.handleImageClick} />
                </h3>

            </div>
        </Container>);
    }
}

export default GameContainer;
