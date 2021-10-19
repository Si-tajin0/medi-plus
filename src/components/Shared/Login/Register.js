import React from 'react';
import { Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import { FaFacebook, FaGoogle, FaGithub } from 'react-icons/fa';
import './Login.css';
import useAuth from '../../../hooks/useAuth';

const Register = () => {

    // import to use firebase auth
    const { signInUsingGoogle, signInUsingGitHub, nameChange, emailChange, passwordChange, signUpUsingEmail, error } = useAuth();
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-md-6 mt-5">
                        <h1>Create Account</h1>
                        <Form className="text-start" onSubmit={signUpUsingEmail}>
                            <Form.Group className="mb-3" controlId="formBasicName">
                                <Form.Label>Name</Form.Label>
                                <Form.Control onBlur={nameChange} type="name" placeholder="Your Name" required />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control onBlur={emailChange} type="email" placeholder="Enter email" required />
                                <Form.Text className="text-muted">
                                    We'll never share your email with anyone else.
                                </Form.Text>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control onBlur={passwordChange} type="password" placeholder="Password" required />
                            </Form.Group>
                            <div className="mb-3 text-danger">{error}</div>
                            <Button variant="info" type="submit">
                                Sign up
                            </Button>

                        </Form>
                        <br />
                        <p>Or Login with</p>
                        <div className="login-btn">
                            <Button><FaFacebook /></Button>
                            <Button className="bg-danger" onClick={signInUsingGoogle}><FaGoogle /></Button>
                            <Button className="bg-secondary" onClick={signInUsingGitHub}><FaGithub /></Button>
                        </div>
                        <br />
                        <Link to='/login'><Button className="text-info" variant="link">Already Have a Account</Button></Link>
                    </div>
                    {/* image section */}
                    <div className="col-md-6">
                        <img src="https://i.ibb.co/7XpqR1J/rights-access-abstract-concept-vector-illustration-personal-data-document-management-system-database.jpg" className="w-100" alt="" />
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Register;