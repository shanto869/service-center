import React, { useEffect, useState } from 'react';
import { FaStar } from 'react-icons/fa';

const ShowServiceReview = ({ review }) => {
    const { customer, email, image, message, rating, serviceId, serviceTitle, _id } = review;
    console.log(review)

    return (
        <tr className='border-2 shadow-lg p-2'>

            <td className='p-2'>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="w-24 rounded-xl">
                            {

                                <img src={image} alt="Avatar Tailwind CSS Component" />
                            }
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{customer}</div>
                        <div className="text-sm opacity-50">{email}</div>
                    </div>
                </div>
            </td>
            <td>
                {serviceTitle}
                <br />
                <span className="badge badge-ghost badge-sm text-md">{rating} <FaStar className='text-warning mr-1'></FaStar></span>
            </td>
            <td>{message}</td>
            <th>

            </th>

            <th>
                <button className="btn btn-ghost"></button>
            </th>
        </tr>
    );
};

export default ShowServiceReview;