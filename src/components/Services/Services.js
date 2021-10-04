import React from 'react';
import { Container, Row } from 'react-bootstrap';
import useServices from '../../hooks/useServices';
import Service from '../Service/Service';
import './Services.css';

const Services = () => {
    const [services] = useServices();
    return (
        <>
            <Container>
                <Row>
                    {
                        services.map(service => <Service
                            key={service.key}
                            service={service}
                            >
                        </Service>)
                    }
                </Row>
            </Container>
        </>
    );
};

export default Services;