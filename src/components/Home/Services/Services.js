import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Services.css';

const Services = () => {
    //  declare the state
    const [data, setData] = useState([]);
    // data load 
    useEffect(() => {
        fetch('/fakeData.json')
            .then(res => res.json())
            .then(result => setData(result))
    }, [])
    return (
        <div id="services" className="my-5">
            <div className="service-container">
                <h1>WELCOME TO MEDIPULS HEALTH CARE</h1>
                <p>A health care center you trust to care for those you love</p>
            </div>
            <span className="underline"></span>
            <div className="service-cart container">
                <div className="row">
                    {/* map the data */}
                    {
                        data.map(pd => (
                            <div key={pd.id} className="col-md-4">
                                <div className="cart border rounded my-3 px-1 py-4">
                                    <div className="cart-icon">
                                        <img src={pd.imageURL} alt="" />
                                    </div>
                                    <h2>{pd.name}</h2>
                                    <p>{pd.description}</p>
                                    <Link to={`/service/${pd.id}`}><button>Details</button></Link>
                                </div>

                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default Services;