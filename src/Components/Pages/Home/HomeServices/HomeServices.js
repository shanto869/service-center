import React, { useEffect, useState } from 'react';
import Service from './Service';

const HomeServices = () => {
    const [services, setServices] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (
        <div className='mx-5'>
            <div className='text-center'>
                <h2 className='text-4xl my-5 heading-font font-bold'>Why Choosing Fitness Cube</h2>
                <p className='my-5 text-slate-500 para-font'>We handpick the best coaches and health experts from across the country to make sure you get <br /> the most personalized health care you deserve between those doctor visits.</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 mx-10 gap-8'>
                {
                    services.map(service => <Service key={service._id} service={service}></Service>)
                }
            </div>
        </div>
    );
};

export default HomeServices;