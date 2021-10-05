import React from 'react';
import { Col } from 'react-bootstrap';
import './Service.css';

const Service = (props) => {
    console.log(props)
    const { name, time, detail, img } = props.service;
    return (
        <>
            <Col lg={6}>
                <div className="card service-card">
                    <img className="img img-fluid card-img" src={img} alt="" />
                    <div className="service-info">
                        <h4 className="fw-bold">{name}</h4>
                        <h6 className="fw-bold"> Class Time: <span>{time}</span></h6>
                        <p>{detail}</p>
                    </div>
                </div>
            </Col>
        </>
    );
};

export default Service;