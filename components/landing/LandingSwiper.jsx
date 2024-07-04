"use client"
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Pagination } from 'swiper/modules';
import { HERO_ADVER } from './LandingData';
import Image from 'next/image';
import {  MdStar, MdStars } from 'react-icons/md';
import Button from '../button/Button';

export default function LandingSwiper() {
  return (
    <>
      <Swiper
        direction={'vertical'}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper container"
      >
        {HERO_ADVER.map((item)=> (
        <SwiperSlide key={item.key}>
          <div className='grid grid-cols-2 justify-between items-center gap-56'>
            <div className='flex flex-col gap-6'>

              <h1 className='text-[60px] font-bold text-primary p-0  m-0 leading-[60px]'>{item.label}</h1>
              <p className='text-[14px] text-primary'>{item.desc}</p>
              <div className='flex gap-2'>
              {Array(5).fill(1).map((index)=> (
              <MdStar key={index}/>
              ))}
              </div>
              <Button/>
            </div>
            <div>
              <Image src={item.image} alt={item.label} width='500' height='500' />
            </div>
          </div>
        </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
