import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from './EachJob/index';
import { useEffect , useState } from 'react';
import axios from 'axios';

import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import './index.css'



function Index() {
    const [data , setData] = useState([]);
    const [searchData , setSearchData] = useState([])
  
    useEffect(() => {
        axios.get('http://localhost:3001/')
        .then((res) => {
          const response = res.data 
          setData(response);
          setSearchData(response)
          
        })
      } , [])

  const handleSearchValue = (event) => {
      const item = event.target.value;
      const filter = searchData.filter((each) => {
        const title = each.title.toLowerCase();
        const result = title.indexOf(item.toLowerCase());
        if(result!==-1){
          return each
        }
      })
      setData(filter)
  }

  return (
    <Container >

    <Row>
      <Col xs={12} className="mt-3">
      <input type="search" placeholder="search by title"   onChange={handleSearchValue} className="w-100 input p-1"/>
      </Col>
    </Row>

        <Row className="mt-4"> 
        {data.map((each) => (
              <Col xs={12} md={4} style={{"marginBottom" : "24px"}}>  <Card  data={each} /> </Col>
             
            ))}
        </Row>
    </Container>
  )
}

export default Index