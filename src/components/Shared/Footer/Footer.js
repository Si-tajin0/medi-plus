import React from 'react';
import { GoLocation } from "react-icons/go";
import { IoMdCall, IoMdMail, IoMdTime } from "react-icons/io";
import { BsFacebook, BsTwitter, BsInstagram, BsLinkedin } from "react-icons/bs";
import './Footer.css';

const Footer = () => {
    return (
        <div className="footer-container py-5">
            <div className="container">
                <div className="row">
                    <div className="col-md-5 px-5">
                        <div>
                            <img src="https://i.ibb.co/F7hC6Pq/logo.png" alt="" />
                            <p>MediPuls is committed to meeting or exceeding the high quality and safety expectations of our patients, customers and regulators.</p>
                        </div>
                        {/* social media icon */}
                        <div className="d-flex justify-content-center social">
                            <h3><BsFacebook /></h3>
                            <h3><BsTwitter /></h3>
                            <h3><BsInstagram /></h3>
                            <h3><BsLinkedin /></h3>
                        </div>
                    </div>
                    <div className="col-md-3 links">
                        <h4 className="text-white">QUICK LINKS</h4>
                        <br />
                        <li>Dental implants</li>
                        <li>Medical research</li>
                        <li>Medical counselling</li>
                        <li>Pharmaceutical advice</li>
                        <li>Blood bank</li>
                    </div>
                    <div className="col-md-4">
                        <h4 className="text-white">OUR OFFICE</h4>
                        <br />
                        <p><GoLocation /> 128 W 44th St, New York, NY 10075</p>
                        <p><IoMdCall /> +366 123 444 876</p>
                        <p><IoMdMail /> mediplus@gmail.com</p>
                        <p><IoMdTime /> Mon - Fri: 9:00 - 18:00</p>
                    </div>
                </div>
                <hr />
                <div className="text-center text-white">
                    <small>Copyright &copy; 2021 MediPuls - by: SI TAJIN</small>
                </div>
            </div>
        </div>
    );
};

export default Footer;