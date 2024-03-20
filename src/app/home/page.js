"use client"
import Image from 'next/image';
/* eslint-disable react-hooks/rules-of-hooks */
import { useState } from 'react';

const page = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div>

    
        <div>
            <div className="navbar">
                <div className="navbar-start">
                <div className="dropdown">
                        <div onClick={toggleDropdown} tabIndex={0} role="button" className="btn btn-ghost btn-circle bg-[#123456] text-white ">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                        </div>

                        {isOpen && (
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-[#123456] text-white  w-[300px] h-[700px] gap-[20px] ">
                               
                                <div className='flex justify-between items-center'>
                                    <div className='flex justify-center items-center'>
                                    <Image src="https://i.ibb.co/Vq8Mjh9/user-removebg-preview.png" alt='ok' width={50} height={50}></Image>
                                    <p className='text-[18px] font-bold'>Hello, User</p>
                                    </div>
                                    <Image src="https://i.ibb.co/SXGYH7L/bb-removebg-preview.png" alt='ok' width={50} height={50}></Image>
                                </div>

                                <div className='divider bg-white h-[1px] my-[-2px]'></div>

                                <li><a>Disscussion Forum</a></li>
                                <li><a>Market Stories</a></li>
                                <li><a>Sentiment</a></li>
                                <li><a>Market</a></li>
                                <li><a>Sector</a></li>
                                <li><a>Watchlist</a></li>
                                <li><a>Events</a></li>
                                <li><a>News/Interview</a></li>
                            </ul>
                        )}
                    </div>
                </div>
            </div>   









  

        </div>

        <div className='mx-auto'>
            <p className='text-center text-red-600 text-[30px] font-semibold'>DISCUSSION FOURM</p>
            <div className="bg-white shadow-2xl rounded-lg w-[500px] mx-auto">
                <div className="p-4 flex">
                    {/* <Image className='rounded-full' src="https://i.ibb.co/WVXfMwY/hi-removebg-preview.png" alt='ok' width={100} height={100}></Image> */}
                  
                    <Image src="https://i.ibb.co/7kwx61x/00c2a31087f27b4ff4bf8616e383903b.jpg" alt="ok" width={100} height={100} className="rounded-full"/>
                   <h2 className="text-xl font-semibold mb-2">Card</h2>
                   <p>Item</p>
               </div>
           </div>
        </div>

        </div>
    );
};

export default page;