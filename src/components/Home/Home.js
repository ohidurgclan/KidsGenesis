import React from 'react';
import { Container, Row } from 'react-bootstrap';
import useServices from '../../hooks/useServices';
import useTeachers from '../../hooks/useTeachers';
import Homestaff from '../Homestaff/Homestaff';
import Service from '../Service/Service';
import Slider from '../Slider/Slider';
import './Home.css';

const Home = () => {
    const [teachers] = useTeachers();
    const [services] = useServices();
    return (
        <div>
            <Slider></Slider>
            <Container>
            <Row>
            <h2 className="fw-bold mb-5" >Creative Teachers</h2>
            {
                teachers.slice(2,6).map(teacherItem => <Homestaff
                    key={teacherItem.key}
                    teacherItem={teacherItem}
                ></Homestaff>)
            }       
            <h2 className="fw-bold mt-5 mb-5">Our Services</h2>   
            {
                services.slice(0,4).map(service => <Service
                    key={service.key}
                    service={service}
                    >
                    </Service>)          
            }
            </Row>
            </Container>
        </div>
    );
};

export default Home;