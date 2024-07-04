import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Keyboard, Pagination, Navigation } from 'swiper/modules';
import { DEALS_DATA } from './HotDealsData';
import CardOff from '../card/CardOff';
export default function DealsSwiper() {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        keyboard={{
          enabled: true,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Keyboard, Pagination, Navigation]}
        className="mySwiper"
        breakpoints={{
          640: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 4,
          },
          1280: {
            slidesPerView: 5,
          },
        }}
      >
        {DEALS_DATA.map((item) => (
          <SwiperSlide key={item.key}>
            <CardOff offer={item.offer} title={item.title} desc={item.desc} price={item.price} priceOff={item.priceOff} img={item.img} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
