import React from 'react';
import Banner from './Banner/Banner';
import Exprience from './Exprience/Exprience';
import HealthCouch from './HealthCouch/HealthCouch';
import HomeServices from './HomeServices/HomeServices';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <HomeServices></HomeServices>
            <HealthCouch></HealthCouch>
            <Exprience></Exprience>
            
        </div>
    );
};

export default Home;