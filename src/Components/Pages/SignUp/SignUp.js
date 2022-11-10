import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { FaGooglePlusG } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../AuthProvider/AuthProvider';
import useTitle from '../../../Hooks/useTitle';

const SignUp = () => {
    const { createUserWithEmail, googleSignIn } = useContext(AuthContext)

    const googleProvider = new GoogleAuthProvider()
    useTitle('Sign Up')

    const navigate = useNavigate()
    const location = useLocation()
    let from = location.state?.from?.pathname || "/";

    const handleSubmit = (event) => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, email, password)

        // sign up user
        createUserWithEmail(email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
                toast.success('Successfully Sign Up')
                navigate(from, { replace: true });
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
                navigate(from, { replace: true });
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
                                    <span className="label-text">Full Name</span>
                                </label>
                                <input type="text" name='name' required placeholder="your name" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' required placeholder="your email" className="input input-bordered" />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' required placeholder="your password" className="input input-bordered" />
                                <label className="label">
                                    <span className="label-text">
                                        Have an account!! Please
                                        <Link to='/login' className=" link-hover text-red-300 mr-2 pr-3">Login</Link>
                                    </span>

                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Sign Up</button>
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

export default SignUp;