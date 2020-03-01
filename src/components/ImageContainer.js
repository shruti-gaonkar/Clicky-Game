import React from "react";
import { Row, Col } from 'react-bootstrap';

function ImageContainer({ handleImageClick, images }) {
    return (
        <Row>
            {images.map((value, index) => (
                <Col><img src={`https://media.giphy.com/media/${value}/giphy.gif`} data-name={value} onClick={handleImageClick} width="200" height="200" /></Col>
            ))}
        </Row >
    );
}

export default ImageContainer;