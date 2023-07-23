
import slider1 from "../../../../assets/slider/slider (1).jpeg"
import slider2 from "../../../../assets/slider/slider (2).jpeg"
import slider3 from "../../../../assets/slider/slider (3).jpeg"
import "./Carousel.css"
import { Icon } from '@iconify/react';
// import { useRef, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Navigation } from "swiper";
import { Link } from "react-router-dom";


const Carousel = () => {
 
  return (
    <>
      <Swiper
      
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Navigation]}
        className="mySwiper lg:h-[90vh]"
      >
        <SwiperSlide>
            <div className="relative">
              <img className="w-full" src={slider1} alt="" />
          
              <div className="absolute inset-0 bg-black opacity-40"></div>
          
              <div className="absolute lg:top-1/3 md:top-2/4 sm:top-1/2 left-1/2 carousel-top-space transform -translate-x-1/2 -translate-y-1/2 text-center z-10">
                <p className="lg:text-lg sm:text-sm font-thin pb-3 text-gray-100">All doctors treat, but a good doctor lets nature heal</p>
                <h1 className="lg:text-6xl md:text-4xl sm:text-3xl font-bold text-white pb-10 carousel-h1-tag">Find The Best <br /> Doctor Near By You.</h1>
               
                <div className="flex justify-center lg:pt-5">
              <Link to="/book">
              <button className="flex items-center lg:px-8 md:px-6 sm:px-3 lg:py-3 py-2 carousel-appoint-btn m-2 lg:text-lg font-semibold text-white transform hover:scale-105 duration-500 ease-in-out rounded shadow-sm  bg-brand ">Appoinment <Icon icon="iconamoon:sign-plus" width="25" className="pl-1 pt-1"/></button>
              </Link>
               
                
                 <Link to="/bloggrid">
                 <button className="flex items-center lg:px-10 md:px-8 sm:px-4 lg:py-3 py-2 m-2 carousel-seemore-btn lg:text-lg font-semibold  text-brand rounded bg-white  transform hover:scale-105 duration-500 ease-in-out">Read <span className="ml-1">more</span><Icon icon="material-symbols:arrow-right-alt" width="25" className="pl-1 pt-1 text-brand"/>
                  </button>
                 </Link>
                </div>
			
                
              </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="relative">
              <img className="w-full" src={slider2} alt="" />
          
              <div className="absolute inset-0 bg-black opacity-40"></div>
          
              <div className="absolute lg:top-1/3 md:top-2/4 sm:top-1/2 left-1/2 carousel-top-space transform -translate-x-1/2 -translate-y-1/2 text-center z-10">
                <p className="lg:text-lg sm:text-sm font-thin pb-3 text-gray-100">All doctors treat, but a good doctor lets nature heal</p>
                <h1 className="lg:text-6xl md:text-4xl sm:text-3xl font-bold text-white pb-10 carousel-h1-tag">Find The Best <br /> Doctor Near By You.</h1>
                
                <div className="flex justify-center lg:pt-5">
              <Link to="/book">
              <button className="flex items-center lg:px-8 md:px-6 sm:px-3 lg:py-3 py-2 carousel-appoint-btn m-2 lg:text-lg font-semibold text-white transform hover:scale-105 duration-500 ease-in-out rounded shadow-sm  bg-brand ">Appoinment <Icon icon="iconamoon:sign-plus" width="25" className="pl-1 pt-1"/></button>
              </Link>
               
                
                 <Link to="/bloggrid">
                 <button className="flex items-center lg:px-10 md:px-8 sm:px-4 lg:py-3 py-2 m-2 carousel-seemore-btn lg:text-lg font-semibold  text-brand rounded bg-white  transform hover:scale-105 duration-500 ease-in-out">Read <span className="ml-1">more</span><Icon icon="material-symbols:arrow-right-alt" width="25" className="pl-1 pt-1 text-brand"/>
                  </button>
                 </Link>
                </div>
			
                
              </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="relative">
              <img className="w-full" src={slider3} alt="" />
          
              <div className="absolute inset-0 bg-black opacity-40"></div>
          
              <div className="absolute lg:top-1/3 md:top-2/4 sm:top-1/2 left-1/2 carousel-top-space transform -translate-x-1/2 -translate-y-1/2 text-center z-10">
                <p className="lg:text-lg sm:text-sm font-thin pb-3 text-gray-100">All doctors treat, but a good doctor lets nature heal</p>
                <h1 className="lg:text-6xl md:text-4xl sm:text-3xl font-bold text-white pb-10 carousel-h1-tag">Find The Best <br /> Doctor Near By You.</h1>
                <div className="flex justify-center lg:pt-5">
              <Link to="/book">
              <button className="flex items-center lg:px-8 md:px-6 sm:px-3 lg:py-3 py-2 carousel-appoint-btn m-2 lg:text-lg font-semibold text-white transform hover:scale-105 duration-500 ease-in-out rounded shadow-sm  bg-brand ">Appoinment <Icon icon="iconamoon:sign-plus" width="25" className="pl-1 pt-1"/></button>
              </Link>
               
                
                 <Link to="/bloggrid">
                 <button className="flex items-center lg:px-10 md:px-8 sm:px-4 lg:py-3 py-2 m-2 carousel-seemore-btn lg:text-lg font-semibold  text-brand rounded bg-white  transform hover:scale-105 duration-500 ease-in-out">Read <span className="ml-1">more</span><Icon icon="material-symbols:arrow-right-alt" width="25" className="pl-1 pt-1 text-brand"/>
                  </button>
                 </Link>
                </div>
              </div>
            </div>
        </SwiperSlide>

        
      </Swiper>
    </>
  );
};

export default Carousel;