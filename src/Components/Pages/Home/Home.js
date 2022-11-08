import React from 'react';
import Banner from './Banner/Banner';
import HealthCouch from './HealthCouch/HealthCouch';
import HomeServices from './HomeServices/HomeServices';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <HomeServices></HomeServices>
            <HealthCouch></HealthCouch>
        </div>
    );
};

export default Home;