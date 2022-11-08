import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { FaCuttlefish, FaFonticonsFi, FaListUl } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../AuthProvider/AuthProvider';

const Header = () => {
    const { user, logOut } = useContext(AuthContext)

    const handleLogOut = () => {
        logOut()
            .then(() => toast.success('Successfully Sign Out'))
            .catch(err => toast.error(err.message))
    }

    const meunItems = <>
        <li> <Link to='/' className='font-semibold mx-1'>Home</Link></li>
        <li> <Link to='/' className='font-semibold mx-1'>{user?.email}</Link></li>
        {
            user?.email ? <>
                <li> <Link to='/' onClick={handleLogOut} className='font-semibold mx-1'>Logout</Link></li>

            </>
                :
                <>
                    <li> <Link to='/login' className='font-semibold mx-1'>Login</Link></li>
                    <li> <Link to='/signup' className='font-semibold mx-1'>Sign Up</Link></li>

                </>
        }


    </>


    return (
        <div className="navbar bg-slate-300 px-5">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <FaListUl></FaListUl>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 nav-font">

                        {meunItems}

                    </ul>
                </div>
                <Link className="btn btn-link text-black text-3xl heading-font capitalize">Fitness  <FaCuttlefish className='ml-2' />ube</Link >
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">

                    {meunItems}

                </ul>
            </div>
            <div className="navbar-end">
                <Link className="btn">Get started</Link >
            </div>
        </div>
    );
};

export default Header;