import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../../AuthProvider/AuthProvider';

const ServiceReview = ({ id, serviceName }) => {
    const { user } = useContext(AuthContext)
    console.log(user.photoURL)

    const handleGivenReview = (event) => {
        event.preventDefault()
        const form = event.target;
        const name = `${form.firstName.value} ${form.lastName.value}`
        const email = user?.email || 'unregister';
        const phone = form.phone.value;
        const message = form.message.value;

        console.log(name, email, phone, message)

        const reviewInfo = {
            serviceId: id,
            serviceTitle: serviceName,
            customer: name,
            image: user?.photoURL,
            email,
            phone,
            message,
        }

        fetch('http://localhost:5000/review', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(reviewInfo)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })

        // fetch('http://localhost:5000/review', {
        //     method: 'POST',
        //     headers: {
        //         'content-type': 'application/json'
        //     },
        //     body: JSON.stringify(reviewInfo)
        // })
        //     .then(res => res.json())
        //     .then(data => {
        //         if (data.acknowledged) {
        //             form.reset()
        //             alert('Order placed successfully')
        //         }
        //         console.log(data)
        //     })

        // form.reset()
    }

    return (
        <div>
            <h3 className='text-3xl title-font text-center'>Reviews</h3>
            <div className='shadow-lg'>
                <div className='mx-auto mb-9'>
                    <div className='font-bold text-center mb-9'>
                        <h2 className='text-xl mt-2'>Please give a review</h2>
                    </div>

                    <form onSubmit={handleGivenReview} className='mx-auto  w-auto text-center'>
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 justify-items-center mb-10'>

                            <input name='firstName' type="text" placeholder="First Name" className="input input-bordered w-full max-w-md" required />
                            <input name='lastName' type="text" placeholder="Last Name" className="input input-bordered w-full max-w-md" required />
                            <input name='phone' type="number" placeholder="Your Phone" className="input input-bordered w-full max-w-md" required />
                            <input name='email' type="text" defaultValue={user?.email} readOnly placeholder="Your Email" className="input input-bordered w-full max-w-md" required />
                        </div>

                        <textarea name='message' className="textarea textarea-bordered w-3/5 h-24" placeholder="Your Message" required></textarea> <br /><br />
                        <input className='btn btn-secondary ml-auto' type="submit" value="Place Your Order" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ServiceReview;