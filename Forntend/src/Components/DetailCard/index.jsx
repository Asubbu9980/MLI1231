import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import {useEffect} from 'react';
import  Container  from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Stack from 'react-bootstrap/Stack';
import { useNavigate } from 'react-router-dom';


function Index() {
   const params = useParams();
   const {id} = params;
   const navigate = useNavigate()
   
   const [data , setData] = useState({})
   
  const fetchData = () => {
    axios.get(`http://localhost:3001/${id}`)
    .then((res) => {
     const response = res.data;
    setData(response)
    })
  }

  useEffect(() => {
    fetchData()
      
  } , [])

  const handleCancel = () => {
    navigate('/')
  }


  const handleApply = async (id) => {
   try{

    const requestOptions = {
      method : "PUT",
      headers : {'Content-Type' : "application/json"},
      body : JSON.stringify({status : "Applied"})
    } ;

    const response = await fetch('http://localhost:3001/jobs/' + id, requestOptions)
    if(response.status === 200){
      fetchData()
    }
  }
   catch(err){
       console.log(err)
   }
  }
  console.log(data)
  return (
    <Container className=" d-flex justify-content-center align-items-center mt-5 mb-5">
      <Row >
        <Col >
    <Card className="shadow">
      
      <Card.Body>
        <Card.Title>{data.title}</Card.Title>
        <Card.Subtitle className="mb-3">{data.company}</Card.Subtitle>
      
        <p className="">Job highlights</p>
        <Card.Text>
         {data.description}
        </Card.Text>
        <ListGroup className="list-group-flush p-2">
      <ListGroup.Item><span className="" >Role :</span> {data.role}</ListGroup.Item>
      <ListGroup.Item><span className="" >Experience :</span> {data.experience} years</ListGroup.Item>
        <ListGroup.Item><span className="" >Job Type :</span> {data.jobType}</ListGroup.Item>
        <ListGroup.Item><span className="" > Location:</span> {data.location}</ListGroup.Item>
        <ListGroup.Item><span className="" >Salary : </span>$ {data.minSalary} - {data.maxSalary}</ListGroup.Item>
        <ListGroup.Item><span className="" >Skills: </span>{data.skills? data.skills.join() : null}</ListGroup.Item>
       </ListGroup>
      <Stack direction="horizontal" gap={3} className="ml-2" >
      <Button variant="primary" className="mt-3" size="sm" onClick={() => handleApply(data._id)}>{data.status}</Button>
      <Button variant="primary" className="mt-3" size="sm" onClick={handleCancel}>Cancel</Button>
      </Stack>
      </Card.Body>
     
      
      
    </Card>
    </Col>
    </Row>
    </Container>
  );
}

export default Index;