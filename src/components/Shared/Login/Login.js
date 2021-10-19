import React from 'react';
import { Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import { FaFacebook, FaGoogle, FaGithub } from 'react-icons/fa';
import './Login.css';
import useAuth from '../../../hooks/useAuth';

const Login = () => {
    // import use firebase
    const { signInUsingGoogle, signInUsingGitHub, loginEmailPassword, error, passwordReset } = useAuth();
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <img src="https://i.ibb.co/7XpqR1J/rights-access-abstract-concept-vector-illustration-personal-data-document-management-system-database.jpg" className="w-100" alt="" />
                    </div>
                    <div className="col-md-6 mt-5">
                        <h1>Sign in to Account</h1>
                        <Form className="text-start" onSubmit={loginEmailPassword}>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" />
                                <Form.Text className="text-muted">
                                    We'll never share your email with anyone else.
                                </Form.Text>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" />
                            </Form.Group>
                            <div className="mb-3 text-danger">{error}</div>
                            <Button variant="primary" type="submit">
                                Log in
                            </Button>
                            <Button className="text-danger" onClick={passwordReset} variant="link">Forget Password?</Button>
                        </Form>
                        <br />
                        <p>Or Login with</p>
                        <div className="login-btn">
                            <Button><FaFacebook /></Button>
                            <Button onClick={signInUsingGoogle}><FaGoogle /></Button>
                            <Button onClick={signInUsingGitHub}><FaGithub /></Button>
                        </div>
                        <br />
                        <span>Are You New?</span>
                        <Link to='/register'><Button variant="link">Please Register</Button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;