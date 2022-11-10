import React, { useContext, useState } from 'react';
import { FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../AuthProvider/AuthProvider';
import Loading from '../../Loading/Loading';

const ServicesCard = ({ service }) => {
    const { loading } = useContext(AuthContext)
    const { picture, price, trainer, service_name, ratings, description, _id } = service;

    if (loading) {
        return <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin dark:border-violet-400 text-center mt-20"></div>
    }

    return (

        <div className='shadow-md rounded-lg my-5'>
            <div className='p-2'>
                <img src={picture} className='rounded-lg cursor-pointer ' alt="" />
                <div className='py-4 mx-4'>
                    <h3 className='heading-font text-xl font-bold'>{service_name}</h3>
                    <p className='para-font'>{description?.length > 100 ? description.slice(0, 100) + '...' : description}</p>
                    <Link to={`/service/${_id}`}>
                        <button className='btn w-full border-2 bg-white text-black border-[black]
                 hover:bg-slate-700 hover:text-white btn-font my-3'>View Details</button>
                    </Link>
                    <hr />
                    <span className='flex justify-between mt-2'>
                        <strong className='heading-font'>Price: ${price}</strong>
                        <small>
                            {
                                ratings.map(rating => <FaStar key={rating} className='inline mx-0.5'></FaStar>)
                            }
                        </small>
                    </span>
                </div>
            </div>
        </div>
    );
};

export default ServicesCard;