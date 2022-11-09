import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FaGooglePlusG } from "react-icons/fa";
import { AuthContext } from '../../../AuthProvider/AuthProvider';
import toast from 'react-hot-toast';
import { GoogleAuthProvider } from 'firebase/auth';

const Login = () => {
    const { logInWithEmail, googleSignIn } = useContext(AuthContext)

    const googleProvider = new GoogleAuthProvider()

    const handleSubmit = (event) => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)

        logInWithEmail(email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
                toast.success('Successfully Login')
            })
            .catch(err => {
                console.error(err)
                toast.error(err.message)
            })
    }

    const handleGoogleSignIn = () => {
        googleSignIn(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user)
                toast.success('Successfully Login')
            })
            .catch(err => {
                console.error(err)
                toast.error(err.message)
            })

    }


    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content grid grid-cols-1 md:grid-cols-2 gap-x-4">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' required placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' required placeholder="password" className="input input-bordered" />
                                <label className="label">
                                    <span className="label-text">
                                        New this website!! Please
                                        <Link to='/signup' className=" link-hover text-red-300 mr-2 pr-3">Sign Up</Link>
                                    </span>

                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                        </form>

                        <div className='form-control mx-7 mb-8'>
                            <button onClick={handleGoogleSignIn} className="btn btn-outline">
                                <FaGooglePlusG className='text-4xl'></FaGooglePlusG>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;