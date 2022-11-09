import React from 'react';
import { FaStar } from 'react-icons/fa';

const Service = ({ service }) => {
    const { picture, price, trainer, service_name, ratings, description, _id } = service;
    console.log(service)
    return (
        <div className='shadow-md rounded-lg my-5'>
            <div className='p-2'>
                <img src={picture} className='rounded-lg cursor-pointer ' alt="" />
                <div className='py-4 mx-4'>
                    <h3 className='heading-font text-xl font-bold'>{service_name}</h3>
                    <p className='para-font'>{description?.length > 100 ? description.slice(0, 100) + '...' : description}</p>
                    <button className='btn w-full border-2 bg-white text-black border-[black]
                     hover:bg-slate-700 hover:text-white btn-font my-3'>View Details</button>
                    <hr />
                    <span className='flex justify-between mt-2'>
                        <strong className='heading-font'>Price: ${price}</strong>
                        <small>
                            {
                                ratings.map(rating => <FaStar className='inline mx-0.5'></FaStar>)
                            }
                        </small>
                    </span>
                </div>
            </div>
        </div>
    );
};

export default Service;