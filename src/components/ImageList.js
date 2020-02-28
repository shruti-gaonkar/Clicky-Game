import React from "react";
import { Row, Col } from 'react-bootstrap';

function ImageList() {
    return (
        <Row>
            <Col><img src="https://media.giphy.com/media/TXJiSN8vCERuE/giphy.gif" /></Col>
            <Col><img src="https://media.giphy.com/media/vcRW4hl1VvyCc/giphy.gif" /></Col>
            <Col><img src="https://media.giphy.com/media/Gdyhq5vM5X4ly/giphy.gif" /></Col>
        </Row>
    );
}

export default ImageList;