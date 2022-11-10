import React from 'react';
import { FaHeartbeat, FaRegGrinAlt, FaSkating } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Exprience = () => {
    return (
        <div>
            <h2 className='text-center text-4xl heading-font mb-5'>Exprience</h2>
            <div className='exprience text-slate-900 py-14 px-12'>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
                    <div>
                        <h3 className='text-3xl title-font '>Over 20 Years <br /> of Experience</h3>
                        <p className='para-font my-6'>Health Coaches look at exercise, eating, wellness, and food not just as calories and weight loss, but also on mental, physical, and spiritual terms.</p>
                        <Link className='btn-font text-2xl'>Request a free consultation</Link>
                    </div>
                    <div className='text-center py-10 bg-slate-800 text-white rounded-sm'>
                        <p className='flex justify-center'><FaSkating className='text-5xl text-[#b2dd4c] font-bold '></FaSkating></p>
                        <h4 className='text-4xl text-[#b2dd4c] font-bold my-5'>200</h4>
                        <h2 className='text-2xl'>Workout Sesisons</h2>
                    </div>
                    <div className='text-center py-10 bg-slate-800 text-white rounded-sm'>
                        <p className='flex justify-center'><FaRegGrinAlt className='text-5xl text-[#b2dd4c] font-bold '></FaRegGrinAlt></p>
                        <h4 className='text-4xl text-[#b2dd4c] font-bold my-5'>150</h4>
                        <h2 className='text-2xl'>Happy Customers</h2>
                    </div>
                    <div className='text-center py-10 bg-slate-800 text-white rounded-sm'>
                        <p className='flex justify-center'><FaHeartbeat className='text-5xl text-[#b2dd4c] font-bold '></FaHeartbeat></p>
                        <h4 className='text-4xl text-[#b2dd4c] font-bold my-5'>90</h4>
                        <h2 className='text-2xl'>Days of Program</h2>
                    </div>


                </div>
            </div>
        </div>
    );
};

export default Exprience;