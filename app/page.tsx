import Image from 'next/image'
import Link from 'next/link';
import { FaFacebookF,FaGoogle,FaLinkedinIn,FaRegEnvelope } from "react-icons/fa";
import { MdLockOutline } from "react-icons/md";

export default function Home() {
  return (
    <main className="flex min-h-screen w-full  items-center justify-center px-20 text-center">
      <div className='bg-white rounded-2xl shadow-2xl lg:flex  w-2/3 max-w-4xl'>
          {/* Sign In Page */}
        <div className='w-full lg:w-3/5 p-5 '>
        <div className='text-left font-bold '>
          <span className='text-green-500'>Company</span>Name
        </div>
          <div className=' text-green-500 font-bold text-3xl pt-10 pb-3'>
            Sign in to Account
          <div className='border-2 border-green-500 w-10 mx-auto mt-2' ></div>
          </div>
          <div className='flex justify-center py-2'>
                <a href="#" className='border-2 border-gray-200 rounded-full p-3 mx-1'>
                  <FaFacebookF  className='text-sm' />
                </a>
                <a href="#" className='border-2 border-gray-200 rounded-full p-3 mx-1'>
                  <FaGoogle  className='text-sm' />
                </a>
                <a href="#" className='border-2 border-gray-200 rounded-full p-3 mx-1'>
                  <FaLinkedinIn  className='text-sm' />
                </a>
          </div>
           <p className='text-sm text-gray-400 mt-2'>or use your email account</p>
           <div className='flex flex-col items-center'>
                <div className='bg-gray-100 flex items-center w-64 p-2 mb-2'>
                <FaRegEnvelope className='text-gray-400 mr-2'/>
                <input type="email" name='email' placeholder='Email' className='outline-none text-sm bg-transparent flex-1' />
                </div>

                <div className='bg-gray-100 flex items-center w-64 p-2'>
                <MdLockOutline className='text-gray-400 mr-2'/>
                <input type="password" name='password' placeholder='Password' className='outline-none text-sm bg-transparent flex-1' />
                </div>

            <div className='w-64 py-2 flex  justify-between text-xs mb-2'>
                      <label className='flex items-center  ' >
                          <input type="checkbox" name='remember' className='mr-1'/> 
                          Remember me
                      </label>
                      <a href="#" className=''>Forgot Password?</a>
            </div>

            <a href="/" className='border-2 border-green-500 text-green-500 rounded-full px-12 py-2 font-semibold hover:bg-green-500 hover:text-white '>Sign Up</a>

           </div>


        </div>  

             {/*  SIGN UP PAGE*/}
       <div className= 'lg:-2/5 bg-green-500 text-white rounded-r-2xl py-36 px-12 lg:px-5 '>
        <h2 className='text-3xl font-bold mb-2'>Hello, Friends</h2>
          <div className='border-2 border-white w-10 mb-2 mx-auto' ></div>
          <p className='text-sm  mb-10'>
            Fill up personal information and start a journery with us
          </p>
           <a href="/" className='border-2 border-white rounded-full px-12 py-2 font-semibold hover:bg-white hover:text-green-500 '>Sign Up</a>
        </div>   
      </div>
    </main>
  )
}























