import React from 'react';
import Blogs from '../Blogs/Blogs';
import Doctors from '../Doctors/Doctors';
import Header from '../Header/Header';
import Services from '../Services/Services';

const Home = () => {
    // home section 
    return (
        <div>
            <Header></Header>
            <Services></Services>
            <Doctors></Doctors>
            <Blogs></Blogs>
        </div>
    );
};

export default Home;