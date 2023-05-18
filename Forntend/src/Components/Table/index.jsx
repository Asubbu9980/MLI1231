import Table from "react-bootstrap/Table";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useState, useEffect } from "react";
import axios from "axios";

function Index() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3001/").then((res) => {
      const response = res.data;
      const result = response.filter((each) => {
        if (each.status === "Applied") {
          return each;
        }
      });
      setJobs(result);
    });
  }, []);

  console.log(jobs);

  return (
    <div className="container mt-5">
      <h5 className="text-center text-primary mb-3">Applied Jobs</h5>
      <Table striped bordered hover className="shadow">
        <thead>
          <tr>
            <th>Title</th>
            <th>Company</th>
            <th>Location</th>
            <th>Experience</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {jobs.map((each) => (
            <tr key={each._id}>
              <td>{each.title}</td>
              <td>{each.company}</td>
              <td>{each.location}</td>
              <td>{each.experience} years</td>
              <td>{each.status}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default Index;
