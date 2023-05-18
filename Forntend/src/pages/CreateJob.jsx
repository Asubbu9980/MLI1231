import React from 'react';
import JobForm from '../Components/JobForm'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function CreateJob() {
  return (
    <Container>
        <Row>
            <Col xs={12}>
                <JobForm/>
            </Col>
        </Row>
    </Container>
  )
}

export default CreateJob