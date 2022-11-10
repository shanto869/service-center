import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import useTitle from '../../Hooks/useTitle';

const AddService = () => {
    const { user } = useContext(AuthContext)
    console.log(user)
    // const { picture, price, service_name, ratings, description, _id } = service;
    useTitle('Add Service')

    const handleGivenReview = (event) => {
        event.preventDefault()
        const form = event.target;
        const service_name = form.serviceName.value;
        const picture = form.serviceImg.value;
        const price = form.price.value;
        const email = form.email.value;
        const description = form.message.value;

        console.log(service_name, picture, price, description)

        const reviewInfo = {
            picture,
            price,
            service_name,
            description,
            email,
        }

        fetch('https://service-center-server-shanto869.vercel.app/review', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(reviewInfo)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    toast.success('successfully added a service')
                    form.reset()
                }
            })
    }


    return (
        <div>
            <form onSubmit={handleGivenReview} className='mx-auto shadow-lg w-auto text-center py-5 mb-12 mt-6'>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 justify-items-center mb-10'>

                    <input name='serviceName' type="text" placeholder="Service Name" className="input input-bordered w-full max-w-md" required />
                    <input name='serviceImg' type="text" placeholder="Service URL" className="input input-bordered w-full max-w-md" required />
                    <input name='price' type="number" placeholder="Service Price" className="input input-bordered w-full max-w-md" required />
                    <input name='email' type="text" defaultValue={user?.email} readOnly placeholder="Your Email" className="input input-bordered w-full max-w-md" required />
                </div>

                <textarea name='message' className="textarea textarea-bordered w-3/5 h-24" placeholder="Your Message" required></textarea> <br /><br />
                <input className='btn btn-outline border-black border-2 rounded-3xl hover:bg-slate-700 text-black hover:text-white px-10 mt-6 btn-font' type="submit" value="Place Your Review" />
            </form>
        </div>
    );
};

export default AddService;