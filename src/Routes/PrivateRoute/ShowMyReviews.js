import React from 'react';
import { FaEdit, FaStar } from 'react-icons/fa';

const ShowMyReviews = ({ review, handleDeleteReview }) => {

    const { customer, email, image, message, rating, serviceId, serviceTitle, _id } = review;
    console.log(review)

    return (
        <tr className=' my-10 py-10 border-2 shadow-lg'>
            <td className=' rounded-t-md rounded-b-md p-2'>
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
                <button className="btn btn-square btn-outline">
                    <FaEdit className="h-5 w-5"></FaEdit>
                </button>
            </th>

            <th>
                <button className="btn btn-square btn-outline">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
            </th>
        </tr>
    );
};

export default ShowMyReviews;