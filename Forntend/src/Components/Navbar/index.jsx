import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {LinkContainer} from 'react-router-bootstrap'


function Index() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Job Portal</Navbar.Brand>
          <Nav className="me-auto">
          <LinkContainer to="/">
    <Nav.Link>Home</Nav.Link>
</LinkContainer>
<LinkContainer to="/new">
    <Nav.Link>Post Job</Nav.Link>
</LinkContainer>
           
<LinkContainer to="/jobs">
    <Nav.Link>Applied Jobs</Nav.Link>
</LinkContainer>
          </Nav>
        </Container>
      </Navbar>
    
    </>
  );
}

export default Index;