import React from 'react';
import { useRouteError } from 'react-router-dom';

const ErrorPage = () => {
    const error = useRouteError()

    return (
        <div className='text-center mt-40'>
            <h1 className='text-3xl'>Ops! An Error Ocurred</h1>
            <br />
            <p className='text-lg text-red-700'>{error.statusText || error.message}</p>
            <p className='text-lg'>{error.status}</p>
        </div>
    );
};

export default ErrorPage;