import React from 'react';
import { Card, Col } from 'react-bootstrap';
import './Staff.css';

const Staff = (props) => {
    console.log(props)
    const {name, role, remark, img} = props.teacher;
    return (
        <>
            <Col lg={3}>
                    <Card>
                        <Card.Img variant="top" src={img} />
                        <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <small className="fw-bold">{role}</small>
                        <Card.Text>{remark}</Card.Text>
                            </Card.Body>
                    </Card>
            </Col>
        </>
    );
};

export default Staff;