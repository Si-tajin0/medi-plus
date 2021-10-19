import React from 'react';
import { Accordion } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './About.css';

const About = () => {
    return (
        <div>
            <div className="container my-5">
                <div className="row">
                    <div className="col-md-6 text-start">
                        <div className="text-border">
                            <h1>OUR PHILOSOPHY</h1>
                        </div>
                        <p>Medipuls clinic aims to provide unparallel service to the people of our country by delivering the highest possible level of care. For this, huge investment has been made on equipment and technology. We have successfully recruited about 30 consultants from USA, UK and quality hospitals from Middle East.</p>
                        <br />
                        <p>About half a dozen physicians are coming from CMC, Vellore. Bangladeshi physicians with impeccable reputation are also a part of the medical team. Huge emphasis has been made on quality nursing services, for which we have trained over a hundred nurses for more than a year. We have nurses educators from Australia, UK, India and the Philippines. Nurses and technicians have already received training from CMC Vellore and it continues to be an on-going process.</p>
                        <br />
                        <p>Medical services will be provided as both outpatient and inpatient.</p>
                    </div>
                    <div className="col-md-6">
                        <img className="w-100" src="https://i.ibb.co/bF3ZMBm/cardiology.jpg" alt="" />
                    </div>
                </div>
            </div>
            <div className='doctor-call mt-5'>
                <h1>Call: +366 123 444 876</h1>
                <h4>if you suspect a stroke or heart attack, then act fast</h4>
                <Link to='/appointment'><button>MAKE AN APPOINTMENT</button></Link>
            </div>
            <div className="container my-3">
                <div className="row">
                    <div className="col-md-6">
                        <img className="w-100" src="https://ithemeslab.com/tfdemo/joomla/medipuls/images/itl_demo/others/docwithbaby.jpg" alt="" />
                    </div>
                    <div className="col-md-6 text-start">
                        <div className="text-border">
                            <h1>MISSION</h1>
                        </div>
                        <br />
                        <p>Adhering to high ethical and moral standards at all times making service quality top priority in all we do training staff to work within a quality care environment providing quality health care service in all processes delivering customer satisfaction through quality services</p>
                        <div className="text-border">
                            <h1>WHY CHOOSE US</h1>
                        </div>
                        <br />
                        <Accordion defaultActiveKey="0">
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>Nice Accomodation</Accordion.Header>
                                <Accordion.Body>
                                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1">
                                <Accordion.Header>Internal Pharmacy</Accordion.Header>
                                <Accordion.Body>
                                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="3">
                                <Accordion.Header>Bill of rights</Accordion.Header>
                                <Accordion.Body>
                                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="4">
                                <Accordion.Header>Test Reports</Accordion.Header>
                                <Accordion.Body>
                                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et.
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default About;