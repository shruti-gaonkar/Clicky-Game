import React from "react";
import { Row, Col, Card } from 'react-bootstrap';

function ImageContainer({ handleImageClick, images }) {
    return (
        <Row>
            {images.map((value, index) => (
                <Col key={value} className="mt-3">
                    <Card>
                        <Card.Body>
                            <img src={`https://media.giphy.com/media/${value}/giphy.gif`} data-name={value} onClick={handleImageClick} width="200" height="200" />
                        </Card.Body>
                    </Card>
                </Col>
            ))}
        </Row >
    );
}

export default ImageContainer;