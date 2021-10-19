import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { FaClock, FaFolderOpen, FaHeart } from 'react-icons/fa';
import './Blogs.css';

const Blogs = () => {
    // set state 
    const [data, setData] = useState([]);
    // load data
    useEffect(() => {
        fetch('/blogFakeData.json')
            .then(res => res.json())
            .then(result => setData(result))
    }, [])
    return (
        <div className="container">
            <div>
                <h1>LATEST FROM BLOG</h1>
                <p>Get the latest health news, diet chart and lots of health tips</p>
            </div>
            <span className="underline"></span>
            <div className="row">
                {
                    data.map(pd => (
                        <div key={pd.id} className="col-md-6 my-4 p-4 text-start blog-item">

                            <Card>
                                <Card.Img className="w-100" variant="top" src={pd.imageURL} />
                                <Card.Body>
                                    <Card.Title className="title">{pd.title}</Card.Title>
                                    <div className="d-flex justify-content-around icon">
                                        <p><span><FaClock /></span> {pd.date}</p>
                                        <p><span><FaFolderOpen /></span> {pd.news}</p>
                                        <p><span><FaHeart /></span> {pd.count}</p>
                                    </div>
                                    <Card.Text>
                                        <p>{pd.detail}</p>
                                    </Card.Text>
                                    <p className="title"><span>Read more..</span></p>
                                </Card.Body>
                            </Card>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Blogs;