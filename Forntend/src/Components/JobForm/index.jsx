import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { useFormik } from "formik";
import {Formik , Field} from 'formik';
import * as Yup from "yup";
import axios from "axios";
import { jobSchema } from "../../Schemas/yup";
import { useNavigate } from "react-router-dom";

function Index() {
  const initialValues = {
    title: "",
    role: "",
    company: "",
    description: "",
    experience: "",
    location: "",
    minSalary: "",
    maxSalary: "",
    jobType: "",
    imageUrl: "",
    skills: [],
    
  };
  const navigate = useNavigate()

  const { values, errors, touched, handleBlur, handleChange, handleSubmit , setFieldValue } =
    useFormik({
      initialValues,
      validationSchema: jobSchema,

      onSubmit: (values, action) => {
        console.log(values);
        axios.post("http://localhost:3001/new", values).then((res) => {
          console.log(res);
          navigate('/')

        });
      },
    });

    const handleCheckboxChange = (event) => {
      const { name, checked , value } = event.target;
      const {skills} = values
      if(checked) {
        setFieldValue("skills" , [...skills , value]);
        console.log(skills)
      } else {
        const updateCheckbox = skills.filter(
          (checkbox) => checkbox !== value
        ) ; 
        setFieldValue("skills" , updateCheckbox)
        console.log(skills)
      }
    };

  return (
    <Container className="my-3">
      <Row className="justify-content-center p-3">
        <Col className="card p-3" md={6}>
          <Form onSubmit={handleSubmit}>
            <Row>
              <Col>
                <Form.Group className="mb-3" controlId="formGroupEmail">
                  <Form.Label>Title</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter Title"
                    name="title"
                    value={values.title}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors.title && touched.title ? (
                    <p className="text-danger">{errors.title}</p>
                  ) : null}
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className="mb-3" controlId="formGroupRole">
                  <Form.Label>Role</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter Role"
                    value={values.role}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    name="role"
                  />
                  {errors.role && touched.role ? (
                    <p className="text-danger">{errors.role}</p>
                  ) : null}
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Group className="mb-3" controlId="formGroupCompany">
                  <Form.Label>Company</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter Company Name"
                    value={values.company}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    name="company"
                  />
                  {errors.company && touched.company ? (
                    <p className="text-danger">{errors.company}</p>
                  ) : null}
                </Form.Group>
              </Col>
            </Row>

            <Row>
              <Col>
                <Form.Group as={Col} controlId="formGridState" className="mb-3">
                  <Form.Label>Job Type</Form.Label>
                  <Form.Select
                    value={values.jobType}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    name="jobType"
                  >
                    <option value="Full time">Full time</option>
                    <option value="Contract">Contract</option>
                    <option value="WFH">WFH</option>
                    <option value="Permanent">Permanent</option>
                    {errors.jobType && touched.jobType ? (
                      <p className="text-danger">{errors.jobType}</p>
                    ) : null}
                  </Form.Select>
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col>
                {/* <Form.Group as={Col} controlId="formGridState" className="mb-3" name="location">
              <Form.Label>Skills</Form.Label>
              <Form.Select value={values.skills} onChange={handleChange} onBlur={handleBlur}>
                <option value="HTML">HTML</option>
                <option value="CSS">CSS</option>
                <option value="Javascript">Javascript</option>
                <option value="ReactJS">ReactJS</option>
                <option value="Angular">Angular</option>
                <option value=".NET">.NET</option>
                <option value="Andriod">Android</option>
                <option value="Mobile">Mobile</option>
              </Form.Select>
              {errors.skills && touched.skills ? (<p className="text-danger">{errors.skills}</p>) : null}
            </Form.Group> */}
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Group as={Col} controlId="formGridState" className="mb-3">
                  <Form.Label>Location</Form.Label>
                  <Form.Select
                    value={values.location}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    name="location"
                  >
                    <option value="Hyderabad">Hyderabad</option>
                    <option value="Benguluru">Benguluru</option>
                    <option value="Kolkata">Kolkata</option>
                    <option value="Pune">Pune</option>
                    <option value="Mumbai">Mumbai</option>
                  </Form.Select>
                  {errors.location && touched.location ? (
                    <p className="text-danger">{errors.location}</p>
                  ) : null}
                </Form.Group>
              </Col>
            </Row>

            <Row>
              <Col>
                <Form.Group className="mb-3" controlId="formGroupMax">
                  <Form.Label>Experience</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="Enter Experience"
                    name="experience"
                    value={values.experience}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors.experience && touched.experience ? (
                    <p className="text-danger">{errors.experience}</p>
                  ) : null}
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Group className="mb-3" controlId="formGroupSalary">
                  <Form.Label>Minimum Salary</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="Enter Salary"
                    name="minSalary"
                    value={values.minSalary}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors.minSalary && touched.minSalary ? (
                    <p className="text-danger">{errors.minSalary}</p>
                  ) : null}
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className="mb-3" controlId="formGroupMax">
                  <Form.Label>Maximum Salary</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="Enter Maximum"
                    name="maxSalary"
                    value={values.maxSalary}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors.maxSalary && touched.maxSalary ? (
                    <p className="text-danger">{errors.maxSalary}</p>
                  ) : null}
                </Form.Group>
              </Col>
            </Row>
            {/* <Row>
              <Col>
                <Form.Group className="mb-3" controlId="formGroupImageUrl">
                  <Form.Label>Image Url</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter Experience"
                    name="experience"
                    value={values.imageUrl}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors.imageUrl && touched.imageUrl ? (
                    <p className="text-danger">{errors.imageUrl}</p>
                  ) : null}
                </Form.Group>
              </Col>
            </Row> */}
            <Row>
              <Form.Group className="mb-3">
                <Form.Label name="skills"> Skills </Form.Label> <br />
                <Form.Check
                  inline
                  label="HTML"
                  name="HTML"
                  value="HTML"
                  color="primary"
                  checked={values.skills.includes("HTML")}
                  onChange={handleCheckboxChange}
                />
                <Form.Check
                  inline
                  label="CSS"
                  name="CSS"
                  value="CSS"
                  color="primary"
                  onChange={handleCheckboxChange}
                  checked={values.skills.includes("CSS")}
                />
                <Form.Check
                  inline
                  label="Javascript"
                  name="Javascript"
                  value="Javascript"
                  color="primary"
                  onChange={handleCheckboxChange}
                  checked={values.skills.includes("Javascript")}
                />
                <Form.Check
                  inline
                  label=".NET"
                  name=".NET"
                  value=".NET"
                  color="primary"
                  onChange={handleCheckboxChange}
                  checked={values.skills.includes(".NET")}
                />
                <Form.Check
                  inline
                  label="Angular"
                  name="Angular"
                  value="Angular"
                  color="primary"
                  onChange={handleCheckboxChange}
                  checked={values.skills.includes("Angular")}
                />
                <Form.Check
                  inline
                  label="ReactJS"
                  name="ReactJS"
                  value="ReactJS"
                  color="primary"
                  onChange={handleCheckboxChange}
                  checked={values.skills.includes("ReactJS")}
                />
                <Form.Check
                  inline
                  label="Android"
                  name="Android"
                  value="Android"
                  color="primary"
                  onChange={handleCheckboxChange}
                  checked={values.skills.includes("Android")}
                />
              </Form.Group>
            </Row>
            <Row>
              <Col>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlTextarea1"
                >
                  <Form.Label>Description</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    name="description"
                    value={values.description}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors.description && touched.description ? (
                    <p className="text-danger">{errors.description}</p>
                  ) : null}
                </Form.Group>
              </Col>
            </Row>

            <Button type="submit" variant="primary">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default Index;
