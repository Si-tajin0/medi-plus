import React from 'react';
import { Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css';


const Header = () => {
    return (
        <div>
            {/* carousel item 1 */}
            <Carousel fade variant="dark">
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://i.ibb.co/vkFHnnG/slide1-bg-1.jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption className="header-text2">
                        <div className="text-black text-start w-100">
                            <h5>For a comfortable experience</h5>
                            <h1>Medical <span className="text-info">Professionals</span><br /> that you can trust</h1>
                            <Link to='/appointment'><button className="btn-appointment">Make Apointment</button></Link>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                {/* carousel item 2 */}
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://i.ibb.co/fY21RBR/slide1-bg.jpg"
                        alt="Second slide"
                    />

                    <Carousel.Caption className="header-text2">
                        <div className="text-white text-start w-100">
                            <h5>A team of medical proffessionals</h5>
                            <h1>Providing <span className="text-info">Total</span><br /> health care solutions</h1>
                            <Link to='/appointment'><button className="btn-appointment">Make Apointment</button></Link>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                {/* carousel item 3 */}
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://i.ibb.co/Xz57gJK/slide3-bg-1.jpg"
                        alt="Third slide"
                    />


                    <Carousel.Caption className="header-text">
                        <div className="text-black w-100">
                            <h5>A modern health care comes with</h5>
                            <h1>Latest <span className="text-info">Equipment</span> and technology</h1>
                            <Link to='/appointment'><button className="btn-appointment">Make Apointment</button></Link>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Header;