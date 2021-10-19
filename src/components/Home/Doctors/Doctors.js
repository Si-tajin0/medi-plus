import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { BsFacebook, BsTwitter, BsInstagram, BsLinkedin } from "react-icons/bs";
import './Doctor.css';

const Doctors = () => {
    // declare the data
    const [data, setData] = useState([]);

    // load the data
    useEffect(() => {
        fetch('/doctorFakeData.json')
            .then(res => res.json())
            .then(result => setData(result))
    }, [])

    return (
        <div id="doctors" className="doctor-container my-5">
            <div className="container">
                <div className="text-start top-text">
                    <h1>MEET
                        <br />
                        OUR DOCTORS</h1>
                    <p>We provide the highest quality care to each patient</p>
                </div>
                <div className="row">
                    {
                        // map the items
                        data.map(pd => (
                            <div key={pd.id} className="col-md-3">
                                <Card className="doctor-team">
                                    <Card.Img variant="top" src={pd.imageURL} />
                                    <Card.Body className="doctor-details">
                                        <Card.Title className="title">{pd.name}</Card.Title>
                                        <Card.Text>
                                            <h3 className="doctor-category">{pd.category}</h3>
                                        </Card.Text>
                                        <Card.Text>
                                            <p>{pd.Department}</p>
                                        </Card.Text>
                                        <Card.Text>
                                            <p>{pd.degree}</p>
                                        </Card.Text>
                                    </Card.Body>
                                    <Card.Footer>
                                        <small className="text-muted">
                                            <div>
                                                <div className="d-flex justify-content-center doctor-social">
                                                    <p><BsFacebook /></p>
                                                    <p><BsTwitter /></p>
                                                    <p><BsInstagram /></p>
                                                    <p><BsLinkedin /></p>
                                                </div>
                                            </div>
                                        </small>
                                    </Card.Footer>
                                </Card>
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className='doctor-call mt-5'>
                <h1>Call: +366 123 444 876</h1>
                <h4>if you suspect a stroke or heart attack, then act fast</h4>
                <Link to='/appointment'><button>MAKE AN APPOINTMENT</button></Link>
            </div>
        </div>
    );
};

export default Doctors;