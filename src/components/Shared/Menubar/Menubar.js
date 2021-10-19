import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import Button from 'react-bootstrap/Button';
import { HashLink } from 'react-router-hash-link';
import './Menubar.css';


// use it just like a RRv4/5 <Link>
// the `to` prop can be a string or an object, see RRv4/5 api for details
<HashLink to="/some/path#with-hash-fragment">Link to Hash Fragment</HashLink>
const Menubar = () => {
    // import to use Firebase auth
    const { user, logOut } = useAuth();
    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light" sticky="top">
                <Container>
                    <Navbar.Brand href="/home">
                        <img src="https://i.ibb.co/F7hC6Pq/logo.png"
                            width="100%"
                            height="40"
                            alt="" />
                    </Navbar.Brand>
                    {/* Navbar toggle */}
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end me-4">
                        {/* menu bar Item */}
                        <Nav.Link className="menu-item" as={Link} to="/home">Home</Nav.Link>
                        <Nav.Link className="menu-item" as={Link} to="/about">About</Nav.Link>
                        <Nav.Link className="menu-item" as={HashLink} to="/home#services">Services</Nav.Link>
                        <Nav.Link className="menu-item" as={HashLink} to="/home#doctors">Doctors</Nav.Link>
                        <Nav.Link className="menu-item" as={Link} to="/contact">Contact US</Nav.Link>
                        {user.email ?
                            <Button onClick={logOut} variant="info">Logout</Button> :
                            <Nav.Link as={Link} to="/login"><Button variant="info">LogIn</Button></Nav.Link>}
                        <Navbar.Text>
                            <img style={{ height: '35px', borderRadius: "50%", paddingLeft: '5px' }} src={user?.photoURL} alt="" />  {user?.displayName}
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Menubar;