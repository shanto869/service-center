import React, { useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import ShowMyReviews from './ShowMyReviews';

const MyReview = () => {
    const { user } = useContext(AuthContext)
    const [myReviews, setMyReviews] = useState([])
    console.log(myReviews)


    useEffect(() => {
        fetch(`http://localhost:5000/my_review?email=${user.email}`)
            .then(res => res.json())
            .then(data => {
                setMyReviews(data)
            })
    }, [user?.email])

    const handleDeleteReview = (id) => {
        const confirmation = window.confirm('Are you sure you want to remove this review?')
        if (confirmation) {
            fetch(`http://localhost:5000/my_review?email=${user.email}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if (data.deletedCount > 0) {
                        toast.success('Successfully remove review')
                        const remaining = myReviews[0].filter(review => review._id !== id)
                        setMyReviews(remaining)
                    }
                })
        }
    }


    return (
        <div className='mx-20 my-10'>
            {
                myReviews?.length > 0 ? <>
                    <div className='mx-5'>
                        <div className="overflow-x-auto w-full">
                            <table className="table w-full">

                                <thead>
                                    <tr>
                                        <th>Customar Info</th>
                                        <th>Service Info</th>
                                        <th>Status</th>
                                        <th>
                                            <label>

                                            </label>
                                        </th>
                                        <th></th>
                                    </tr>
                                </thead>

                                <tbody>
                                    {
                                        myReviews?.map(review => <ShowMyReviews key={review._id}
                                            review={review} handleDeleteReview={handleDeleteReview}
                                        ></ShowMyReviews>)
                                    }
                                </tbody>

                            </table>
                        </div>
                    </div>
                </>
                    :
                    <>
                        <h4 className='text-4xl my-36 text-center'>No reviews were added</h4>
                    </>
            }
        </div>
    );
};

export default MyReview;