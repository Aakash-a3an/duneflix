import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserAuth } from '../context/AuthContext'

const NavBar = () => {
    const { user, logOut } = UserAuth();
    const navigate = useNavigate();

    const handleLogout = async () => {
        try{
            await logOut();
            navigate("/");
        } catch(err) {
            console.log(err);
        }
    };
    
  return (
    <div className='absolute flex justify-between w-full p-4 z-50'>
        <Link to="/">
            <h1 className='uppercase text-red-600 font-sans cursor-pointer text-4xl font-bold'>duneflix</h1>
        </Link>

        {
            user?.email ? (
                <div>
                    <Link to="/profile">
                        <button className='text-white pr-4'>Profile</button>
                    </Link>

                    <Link to="/signup">
                        <button onClick={handleLogout} className='bg-red-600 py-2 px-6 rounded cursor-pointer'>Logout</button>
                    </Link>
                </div>
            ) : (
        

        <div>
            <Link to="/login">
                <button className='text-cyan-400 pr-4'>Login</button>
            </Link>

            <Link to="/signup">
                <button className='bg-red-600 py-2 px-6 rounded cursor-pointer'>Sign Up</button>
            </Link>
        </div>

            )}
    </div>
  )
}

export default NavBar