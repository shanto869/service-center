import React from 'react';
import { FaStar } from 'react-icons/fa';
import { useLoaderData } from 'react-router-dom';
import ServicesCard from './ServicesCard';

const Services = () => {
    const services = useLoaderData()

    console.log(services)

    return (
        <div>
            <div className='text-center'>
                <h2 className='heading-font text-3xl mt-7 mb-2'>Services</h2>
                <h3 className='text-2xl para-font'>We Offer healthier lifestyle.</h3>
                <div className='grid grid-cols-1 md:grid-cols-3 mx-10 gap-x-8'>
                    {
                        services.map(service => <ServicesCard key={service._id}
                            service={service}
                        ></ServicesCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Services;