import React from "react";
import { Row, Col } from 'react-bootstrap';

function ImageContainer({ handleImageClick, images }) {
    return (
        <Row>
            {images.map((value, index) => (
                <Col><img src={value} data-id={index} onClick={handleImageClick} /></Col>
            ))}
        </Row >
    );
}

export default ImageContainer;