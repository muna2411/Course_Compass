"use client"
/* eslint-disable react-hooks/rules-of-hooks */
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

const Market = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('/market.json');
      const jsonData = await response.json();
      setData(jsonData);
    };

    fetchData();
  }, []);

return (
    <div>
      <div className='mx-auto '>
          <div className='bg-[#f0f0f0] w-[300px]'>
            <p className='text-start text-red-600 text-[30px] font-semibold ml-[5px] '>MARKET STORIES</p>
          </div>
        {data.map((item) => (
          <div key={item.id}>

            <div className="card card-compact w-[350px] bg-base-100 shadow-xl mt-[30px]">
              <Image src={item.image} alt="ok" width={350} height={350} />
              <div className="card-body">
                <h2 className="card-title">{item.title}</h2>
                <p>{item.paragraph}</p>
             </div>
            </div>
          </div>
        ))}

      </div>
    </div>

    );
};

export default Market;