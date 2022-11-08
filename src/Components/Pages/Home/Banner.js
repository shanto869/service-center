import React from 'react';

import './Banner.css'

const Banner = () => {
    return (
        <div>
            <div className="banner-bg text-white">
                <div className='pl-20 pt-24'>
                    <h1 className='text-6xl'>Hi! I am Shanto <br />
                        Your Health & Fitness Advisor!!
                    </h1>
                    <p className='pt-10 text-xl'>Health couch provides world class Health, Yoga, fitness & nutrition certification <br />programs to world class professionals.</p>

                    <div>
                        <button className="btn btn-outline border-white rounded-3xl hover:bg-white text-white hover:text-black px-8 mt-5 mr-8">Know More</button>
                        <button className="btn btn-outline border-white rounded-3xl hover:bg-white text-white hover:text-black px-8 mt-5">Contact Me</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Banner;