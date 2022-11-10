import React from 'react';
import { FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

const Service = ({ service }) => {
    const { picture, price, service_name, ratings, description, _id } = service;
    return (
        <div className='shadow-md rounded-lg my-5'>
            <div className='p-2'>
                {/* <img src={picture} className='rounded-lg cursor-pointer ' alt="" /> */}
                <PhotoProvider>
                    <PhotoView src={picture} className='w-full' style={{ objectFit: 'cover' }}>
                        <img src={picture} className='rounded-lg cursor-pointer ' alt="" />
                    </PhotoView>
                </PhotoProvider>

                <div className='py-4 mx-4'>
                    <h3 className='heading-font text-xl font-bold'>{service_name}</h3>
                    <p className='para-font'>{description?.length > 100 ? description.slice(0, 100) + '...' : description}</p>
                    <Link to={`/service/${_id}`}>
                        <button className='btn w-full border-2 bg-white text-black border-[black]
                 hover:bg-slate-700 hover:text-white btn-font my-3'>View Details</button>
                    </Link>
                    <hr />
                    <span className='flex justify-between mt-2'>
                        <strong className='title-font font-bold'>Price: ${price}</strong>
                        <small>
                            {
                                ratings?.map(rating => <FaStar key={rating} className='inline mx-0.5 text-warning'></FaStar>)
                            }
                        </small>
                    </span>
                </div>
            </div>
        </div>
    );
};

export default Service;