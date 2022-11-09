import React from 'react';
import { FaAngleDoubleRight, FaStar } from 'react-icons/fa';
import { useLoaderData } from 'react-router-dom';

const ServiceDetails = () => {
    const serviceDetails = useLoaderData()
    const { picture, price, trainer, service_name, ratings, description, _id, join_quantity, qualification, service_plan, email } = serviceDetails;
    console.log(serviceDetails)
    return (
        <div>
            <div className='service-details py-8 text-center text-white'>
                <h4 className='para-font text-4xl'>We Offer healthier lifestyle.</h4>
                <h2 className='nav-font text-2xl my-3'>See Details of <span className='text-lime-400'>{service_name}</span></h2>
            </div>
            <div className='mx-10'>
                <div className='mx-14'>
                    <h3 className='text-4xl title-font my-5 '>{service_name}</h3>
                    <div className='service-info'>
                        <div className=''>
                            <p className='para-font text-lg text-slate-700 mb-6'>{description}</p>
                            <h3 className='text-3xl btn-font'>Here are the benefits you get</h3>
                            <span className='p-5 m-5 shadow-lg'>
                                {
                                    service_plan.map((plan, idx) => <p className='text-slate-700 nav-font text-lg my-1 ' key={idx}><FaAngleDoubleRight className='inline mr-3' /> {plan}</p>)
                                }
                            </span>
                        </div>
                        <div>
                            <img src={picture} className='inline-block w-full' alt="" />
                            <div className='flex justify-around mt-8'>
                                <div>
                                    <h4 className='text-lg nav-font'>Total joined this service: {join_quantity}</h4>
                                    <h2 className='text-2xl title-font font-bold mt-4'>Price: ${price}</h2>
                                </div>
                                <span>
                                    {
                                        ratings.map(rating => <FaStar className='inline mx-0.5 text-warning'></FaStar>)
                                    }
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div>

                </div>
            </div>
        </div>
    );
};

export default ServiceDetails;