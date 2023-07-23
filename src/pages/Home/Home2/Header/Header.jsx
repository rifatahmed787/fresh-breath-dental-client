import { Link } from "react-router-dom";
// import home2 from "../../../../assets/slider/home2.jpg";
import home2 from "../../../../assets/slider/home2-1.jpg";
import home2Banner from "../../../../assets/home2/homeBanner.png";
import { Icon } from "@iconify/react";
import "./Header.css";

const Header = () => {
 
  return (
    <div className="relative">
      <img src={home2} alt="" className="w-full h-[90vh]" />
      <div className="absolute inset-0 bg-black opacity-30"></div>
      <div className="mx-auto max-w-screen-xl">
        <div className="lg:flex md:flex flex-row-reverse  items-center space-x-24 absolute top-0 left-0 right-0 bottom-0  transform z-10 text-center sm:text-left responsive">
        <img
            className=" lg:w-4/12 md:w-4/12 sm:w-1/3 mt-20 lg:mt-5 md:mt-5 mx-auto rounded-full header-image-size"
            src={home2Banner}
            alt=""
          />
          <div className="w-1/2">
            <h1 className="lg:text-6xl md:text-4xl sm:text-3xl sm:text-center mt-5 font-bold text-white pb-7 font-size">
              Find The Best <br /> Doctor Near By You.
            </h1>

            <Link to="/">
              <div className="flex justify-center items-center  pt-5">
                
                <div className="flex justify-center lg:pt-5">
                <button className="flex items-center lg:px-8 md:px-6 sm:px-3 lg:py-3 py-2 carousel-appoint-btn m-2 lg:text-lg font-semibold text-white transform hover:scale-105 duration-500 ease-in-out rounded shadow-sm  bg-brand ">Appoinment <Icon icon="iconamoon:sign-plus" width="25" className="pl-1 pt-1"/></button>

                  <button className="flex items-center lg:px-10 md:px-8 sm:px-4 lg:py-3 py-2 m-2 carousel-seemore-btn lg:text-lg font-semibold  text-brand rounded bg-white  transform hover:scale-105 duration-500 ease-in-out ">Read <span className="ml-1">more</span><Icon icon="material-symbols:arrow-right-alt" width="25" className="pl-1 pt-1 text-brand"/>
                  </button>
                </div>
              </div>
            </Link>
          </div>

        
        </div>
      </div>
    </div>
  );
};

export default Header;
