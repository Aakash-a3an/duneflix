import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserAuth } from '../context/AuthContext';

const Login = () => {
  const [rememberLogin, setRememberLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const {user, logIn} = UserAuth();
  const navigate = useNavigate();

  const handlerFormSubmit = async (e) => {
    e.preventDefault();

    try{
      await logIn(email, password);
      navigate("/");
    } catch (err) {
      console.log(err);
    }

  };

  return (
    <>
      <div className='w-full h-screen'>
        <img 
        className='hidden sm:block absolute w-full h-full object-cover'
        src="https://assets.nflxext.com/ffe/siteui/vlv3/32c47234-8398-4a4f-a6b5-6803881d38bf/eed3a573-8db7-47ca-a2ce-b511e0350439/IN-en-20240122-popsignuptwoweeks-perspective_alpha_website_small.jpg" 
        alt="backdrop" />

        <div className='bg-black/70 fixed top-0 left-0 w-full h-screen' />

        <div className='fixed w-full px-4 py-24 z-20'>
          <div className='max-w-[450px] h-[600px] mx-auto bg-black/80 rounded-lg'>
            <div className='max-w-[320px] mx-auto py-16'>
              <h1 className='text-3xl font-sans font-semibold'>Login</h1>

              <form onSubmit={handlerFormSubmit} className=' w-full flex flex-col py-4'>
                <input className='p-3 my-2 bg-gray-700 rounded' type="email" placeholder='email' autoComplete='email' value={email} onChange={(e)=> setEmail(e.target.value)} />
                <input className='p-3 my-2 bg-gray-700 rounded' type="password" placeholder='password' autoComplete='current-password' value={password} onChange={(e)=> setPassword(e.target.value)} />
                <button className='bg-red-600 py-3 my-6 rounded font-sans font-semibold'>Login</button>
                <div className='flex justify-between items-center text-gray-600'>
                  <p>
                    <input type="checkbox" className='mr-2' checked={rememberLogin} onChange={(e)=> setRememberLogin(!rememberLogin)} />
                    Remember Me
                  </p>
                  <p className='cursor-pointer'>Need Help?</p>
                </div>
                <p className='my-4'>
                  <span className='text-gray-600 mr-2'>New to Duneflix?</span>
                  <Link to="/signup"> Sign Up</Link>
                </p>
              </form>
            </div>
          </div>
        </div>

      </div>
    </>
  )
}
export default Login