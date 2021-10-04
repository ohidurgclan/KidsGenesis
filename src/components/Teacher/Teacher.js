import React from 'react';
import { Container, Row } from 'react-bootstrap';
import useTeachers from '../../hooks/useTeachers';
import Staff from '../Staff/Staff';
import './Teacher.css';

const Teacher = () => {
    const [teachers] = useTeachers();
    return (
        <>
            <Container>
                <Row>
                    {
                        teachers.map(teacher => <Staff
                            key={teacher.key}
                            teacher={teacher}
                        ></Staff>)
                    }
                </Row>
            </Container>
        </>
    );
};

export default Teacher;