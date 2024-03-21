"use client"
/* eslint-disable react-hooks/rules-of-hooks */

import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { FaHeart, FaEye, FaComment, FaShare } from 'react-icons/fa';

const Card = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('/data.json');
      const jsonData = await response.json();
      setData(jsonData);
    };

    fetchData();
  }, []);

  return (
    <div>
      
      <div className='mx-auto'>
      <div className='bg-[#f0f0f0] w-[350px]'>
        <p className='text-start text-red-600 text-[30px] font-semibold ml-[5px] '>DISCUSSION FOURM</p>
      </div>
{/* 
<div class='lg:bg-[#f0f0f0] sm:bg-[#123456] w-[350px]'>

  <p class='text-start text-red-600 text-[30px] font-semibold ml-[5px] hidden lg:block'>DISCUSSION FORUM</p>

<div className='flex '>
<button class='btn text-white bg-[#123456] block lg:hidden'>DISCUSSION FORUM</button>
<button class='btn text-white bg-[#123456] block lg:hidden'>MARKET STORIES</button>
</div>
</div> */}


        {data.map((item) => (
          <div key={item.id}>
            <div className="bg-white shadow-2xl rounded-lg w-[650px] mx-auto mt-[30px]">
          <div className="p-4 flex justify-between items-start">
            <div className="flex justify-around items-center gap-[20px]">
              <Image src={item.image} alt="ok" width={100} height={100} className="rounded-full" />
              <p className='text-[18px] font-semibold'>{item.name}</p>
              <button className='bg-[#123456] text-white w-[100px] h-[30px] rounded-3xl'>Sector 2</button>
            </div>
            <div>
              <p className='text-[#123456]'>{item.time}</p>
            </div>
          </div>
          <div className='mx-auto'>
            <p className='text-[15px] mx-[100px]'>{item.paragraph}</p>
          </div>
          <div className='flex justify-around items-center my-[20px] '>
            <div className='flex justify-center items-center mb-[30px] gap-2'>
              <FaHeart color="black" size={24} />
              <p className='text'>{item.likeCount}</p>
            </div>
            <div className='flex justify-center items-center mb-[30px] gap-2'>
              <FaEye color="black" size={24} />
              <p>{item.viewCount}</p>
            </div>
            <div className='flex justify-center items-center mb-[30px] gap-2'>
              <FaComment color="black" size={24} />
              <p>{item.commentCount} Comments</p>
            </div>
            <div className='flex justify-center items-center mb-[30px] gap-2'>
              <FaShare color="black" size={24} />
              <p>Share</p>
            </div>
          </div>
        </div>
          </div>
        ))}


</div>
    </div>

// In the heart of untouched wilderness lies the captivating beauty of nature, where every element harmonizes in a symphony of life.
    //   <div className='mx-auto'>
    //     <p className='text-center text-red-600 text-[30px] font-semibold'>DISCUSSION FOURM</p>
    //     <div className="bg-white shadow-2xl rounded-lg w-[650px] mx-auto">
    //       <div className="p-4 flex justify-between items-start">
    //         <div className="flex justify-around items-center gap-[20px]">
    //           <Image src="https://i.ibb.co/7kwx61x/00c2a31087f27b4ff4bf8616e383903b.jpg" alt="ok" width={100} height={100} className="rounded-full" />
    //           <p className='text-[18px] font-semibold'>Mina Rahman</p>
    //           <button className='bg-[#123456] text-white w-[100px] h-[30px] rounded-3xl'>Sector 2</button>
    //         </div>
    //         <div>
    //           <p className='text-[#123456]'>2 min ago</p>
    //         </div>
    //       </div>
    //       <div className='mx-auto'>
    //         <p className='text-[15px] mx-[100px]'>In the heart of untouched wilderness lies the captivating beauty of nature, where every element harmonizes in a symphony of life. </p>
    //       </div>
    //       <div className='flex justify-around items-center my-[20px] '>
    //         <div className='flex justify-center items-center mb-[30px] gap-2'>
    //           <FaHeart color="black" size={24} />
    //           <p className='text'>2k</p>
    //         </div>
    //         <div className='flex justify-center items-center mb-[30px] gap-2'>
    //           <FaEye color="black" size={24} />
    //           <p>2k</p>
    //         </div>
    //         <div className='flex justify-center items-center mb-[30px] gap-2'>
    //           <FaComment color="black" size={24} />
    //           <p>2k Comments</p>
    //         </div>
    //         <div className='flex justify-center items-center mb-[30px] gap-2'>
    //           <FaShare color="black" size={24} />
    //           <p>Share</p>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default Card;
