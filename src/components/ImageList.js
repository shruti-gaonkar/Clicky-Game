import React from "react";
import { Row, Col } from 'react-bootstrap';

function ImageList({ handleImageClick }) {
    return (
        <Row>
            <Col><img src="https://media.giphy.com/media/TXJiSN8vCERuE/giphy.gif" data-id="1" onClick={handleImageClick} /></Col>
            <Col><img src="https://media.giphy.com/media/vcRW4hl1VvyCc/giphy.gif" data-id="2" onClick={handleImageClick} /></Col>
            <Col><img src="https://media.giphy.com/media/WEBiysleGJC6Y/giphy.gif" data-id="3" onClick={handleImageClick} /></Col>
            <Col><img src="https://media.giphy.com/media/Gdyhq5vM5X4ly/giphy.gif" data-id="4" onClick={handleImageClick} /></Col>
            <Col><img src="https://media.giphy.com/media/HuGCwDXj4nQnS/giphy.gif" data-id="5" onClick={handleImageClick} /></Col>

        </Row>
    );
}

export default ImageList;