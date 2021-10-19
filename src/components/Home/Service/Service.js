import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import './Service.css';

const Service = () => {
    // import service item use params to react router the data
    const { serviceId } = useParams();

    // declare the data
    const [data, setData] = useState([]);
    const [singleService, setSingleService] = useState([]);


    // load the data
    useEffect(() => {
        fetch('/fakeData.json')
            .then(res => res.json())
            .then(result => setData(result))
    }, [])
    // again load same data
    useEffect(() => {
        const serviceItem = data?.find(item => item.id === serviceId);
        setSingleService(serviceItem);
    }, [data])

    return (
        <div>
            <div>
                <img src={singleService?.imageURL} alt="" />
                <h1 className="text-info">{singleService?.name}</h1>
                <p>{singleService?.description}</p>
                <span className="underline"></span>
                <br />
            </div>
            <div className="service-section">
                <div className="container text-white text-start py-5">
                    <div className="row">
                        <div className="col-md-6">
                            <h1>WE ARE <br />
                                INVESTING IN QUALITY</h1>
                            <p>We are aware that we are serving an increasingly large catchment area, and we continue to work to deliver quality services, not only to Medipuls Clinic members, but also to patients with other forms of private insurance cover, those choosing to fund their surgery themselves and patients being funded by ACC and other public funding arrangements</p>
                            <br />
                            <p>Our recent upgrades and extensions are important steps on the path to accommodating the increasing demands from patients and medical specialists alike, including onsite overnight medical cover from Monday through to Saturday.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='doctor-call'>
                <h1>Call: +366 123 444 876</h1>
                <h4>if you suspect a stroke or heart attack, then act fast</h4>
                <Link to='/appointment'><button>MAKE AN APPOINTMENT</button></Link>
            </div>
        </div>
    );
};

export default Service;