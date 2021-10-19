import React from 'react';
import { Col, FloatingLabel, Form, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';

const Appointment = () => {

    // set Appointment section
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <img
                            className="w-100"
                            src="https://i.ibb.co/BPjprvT/doctor-indicate.png" alt="" />
                    </div>
                    <div className="col-md-6">
                        <div>
                            <h1>MAKE AN <br /> APPOINTMENT</h1>
                            <p>Schedule your appointment with a specialist</p>
                        </div>
                        <Form className="text-start">
                            <Row className="mb-3">
                                <Form.Group as={Col} controlId="formGridName">
                                    <Form.Control type="name" placeholder="Patient Name" />
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridDate">
                                    <Form.Control type="date" placeholder="Appointment Date" />
                                </Form.Group>
                            </Row>

                            <Row className="mb-3">
                                {/* selection from */}
                                <Form.Group as={Col} controlId="formGridState">
                                    <Form.Select defaultValue="Cardiology">
                                        <option>Cardiology</option>
                                        <option>Gynaecology</option>
                                        <option>Nurology</option>
                                        <option>Pediatric</option>
                                        <option>Pulmonary</option>
                                        <option>Diabetes</option>
                                        <option>Dental</option>
                                    </Form.Select>
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridState">
                                    <Form.Select defaultValue="Male">
                                        <option>Male</option>
                                        <option>Female</option>
                                    </Form.Select>
                                </Form.Group>
                            </Row>
                            <Row className="mb-3">
                                <Form.Group as={Col} controlId="formGridEmail">
                                    <Form.Control type="email" placeholder="Enter email" />
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridNumber">
                                    <Form.Control type="number" placeholder="Phone Number" />
                                </Form.Group>
                            </Row>

                            <FloatingLabel controlId="floatingTextarea2" label="Message">
                                <Form.Control
                                    as="textarea"
                                    placeholder="Leave a comment here"
                                    style={{ height: '100px' }}
                                />
                            </FloatingLabel>

                            <Button className="mt-2" variant="info" type="submit">
                                Submit
                            </Button>
                        </Form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Appointment;