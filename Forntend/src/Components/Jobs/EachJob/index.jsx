import axios from 'axios';
import { NavLink } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Stack from 'react-bootstrap/Stack';
//import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import { IconName } from "react-icons/fa";
//mport LocationIcon from "@mui/icons-material/Location";
//import RoomIcon from '@mui/icons-material/Room';
import { Link } from 'react-router-dom';

function Index(props) {
  const {data} = props;

  const handleApplyJob = () => {
    
  }
  
  //console.log(data)
  return (
    <Card >
      <Card.Header style={{"color" : "##44bba3"}} className="">{data.company}</Card.Header>
      <Card.Body>
        <Card.Title style={{"color" : "#ce6a31"}} className="mb-3">{data.title}</Card.Title>
        <Stack direction="vertical" className="mb-3 " gap={3}>
       
         <Card.Subtitle className="">Exp : {data.experience} years </Card.Subtitle > 
         <Card.Subtitle >Location : {data.location}</Card.Subtitle > 
      
        </Stack>
        <Stack className="mb-3">
          <Card.Subtitle >Role : {data.role}</Card.Subtitle >
        </Stack>
        <Card.Text className="">
          {data.description.slice(0,65)} <span className="primary">...read more</span>
        </Card.Text>
        <Link to={`/detail/${data._id}`}>
        <div className="">
        <Button variant="success" size="md" onClick={handleApplyJob} className="align-item-center">
         Show details
        </Button>
        </div>
        </Link>
      </Card.Body>
    </Card>
  );
}

export default Index;