import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import { useEffect } from "react";
import teeth from "../../../assets/icon/teeth (3).png";


const DoctorDetails = () => {
  useEffect(()=>{
    window.scrollTo(0, 0)
  }, [])
  return (
    <>
      <div className="bg-gradient-to-r from-[#abe0ff] to-brand cover-full">
      <h1 className="lg:text-5xl md:text-3xl text-xl font-bold text-white text-center pt-10">
          Our Doctors Details.
        </h1>
        <div className="mt-2 max-w-[200px] mx-auto flex relative">
          <span className="h-[1px] mt-6 w-24 bg-white max-w-[200px] mx-auto"></span>

          <span>
            <img className="max-h-[56px]" src={teeth} alt="" />
          </span>
          <span className="h-[1px] mt-6 w-24 bg-white max-w-[200px] mx-auto"></span>
        </div>
        <p className="flex justify-center items-center max-w-lg font-bold mx-auto text-center  pb-16 text-gray-900 text-lg">
          <Link to={"/"} className="hover:-translate-x-1 duration-300">
            <span>Home</span>
          </Link>
          <Icon icon="octicon:dot-fill-24" className="mx-2" />
          DoctorsDetails
        </p>
      </div>
      <div className="max-w-screen-xl mx-auto">
        <section className="text-gray-600 group body-font max-w-screen-xl mx-auto">
          <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
              <img
                className="object-cover object-center rounded  md:group-hover:translate-x-8 duration-300 lg:group-hover:translate-x-8"
                alt="hero"
                src="https://hips.hearstapps.com/hmg-prod/images/go-big-or-go-home-harper-avery-arrives-at-grey-sloan-news-photo-1569432105.jpg"
              />
            </div>
            <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
              <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-brand">
                Dr. AKM Fazlul Hoque.
              </h1>
              <p className="border-l-4 border-gray-500 pl-4   rounded text-md italic my-5 p-5 text-gray-700 font-semibold mb-8 leading-relaxed">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
                doloremque nemo ducimus. Vel ea eos nam molestiae ab, quaerat
                dolor dolore quod eveniet ipsa itaque doloremque earum placeat
                sed laboriosam, recusandae architecto numquam. In animi ipsa,
                impedit veniam illo repudiandae!
              </p>
              <div className="flex w-full md:justify-start justify-center items-end">
                <div className="relative mr-4 lg:w-full xl:w-1/2 w-2/4">
                  <label
                    htmlFor="hero-field"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Email
                  </label>
                  <input
                    type="text"
                    id="hero-field"
                    name="hero-field"
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:ring-2 focus:ring-indigo-200 focus:bg-transparent focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
                <button className="inline-flex text-white transform hover:scale-105 duration-300 bg-brand border-0 py-2 px-6 focus:outline-none rounded text-lg">
                  Subscribe
                </button>
              </div>
              <p className="text-sm mt-2 text-gray-500 mb-8 w-full">
                Neutra shabby chic ramps, viral fixie.
              </p>
              <div className="flex-row flex">
                <a href="/#" className="w-10 mx-1">
                  <svg
                    className="fill-current cursor-pointer hover:text-black text-xl text-brand transition duration-500 ease-in-out"
                    width="100%"
                    height="100%"
                    viewBox="0 0 24 24"
                    version="1.1"
                    xmlSpace="preserve"
                    style={{
                      fillRule: "evenodd",
                      clipRule: "evenodd",
                      strokeLinejoin: "round",
                      strokeMiterlimit: 2,
                    }}
                  >
                    <path
                      id="Twitter"
                      d="M24,12c0,6.627 -5.373,12 -12,12c-6.627,0 -12,-5.373 -12,-12c0,-6.627
            5.373,-12 12,-12c6.627,0 12,5.373 12,12Zm-6.465,-3.192c-0.379,0.168
            -0.786,0.281 -1.213,0.333c0.436,-0.262 0.771,-0.676
            0.929,-1.169c-0.408,0.242 -0.86,0.418 -1.341,0.513c-0.385,-0.411
            -0.934,-0.667 -1.541,-0.667c-1.167,0 -2.112,0.945 -2.112,2.111c0,0.166
            0.018,0.327 0.054,0.482c-1.754,-0.088 -3.31,-0.929
            -4.352,-2.206c-0.181,0.311 -0.286,0.674 -0.286,1.061c0,0.733 0.373,1.379
            0.94,1.757c-0.346,-0.01 -0.672,-0.106 -0.956,-0.264c-0.001,0.009
            -0.001,0.018 -0.001,0.027c0,1.023 0.728,1.877 1.694,2.07c-0.177,0.049
            -0.364,0.075 -0.556,0.075c-0.137,0 -0.269,-0.014 -0.397,-0.038c0.268,0.838
            1.048,1.449 1.972,1.466c-0.723,0.566 -1.633,0.904 -2.622,0.904c-0.171,0
            -0.339,-0.01 -0.504,-0.03c0.934,0.599 2.044,0.949 3.237,0.949c3.883,0
            6.007,-3.217 6.007,-6.008c0,-0.091 -0.002,-0.183 -0.006,-0.273c0.413,-0.298
            0.771,-0.67 1.054,-1.093Z"
                    />
                  </svg>
                </a>
                <a href="/#" className="w-10 mx-1">
                  <svg
                    className="fill-current cursor-pointer hover:text-black text-brand transition duration-500 ease-in-out"
                    width="100%"
                    height="100%"
                    viewBox="0 0 24 24"
                    version="1.1"
                    xmlSpace="preserve"
                    style={{
                      fillRule: "evenodd",
                      clipRule: "evenodd",
                      strokeLinejoin: "round",
                      strokeMiterlimit: 2,
                    }}
                  >
                    <path
                      id="Facebook"
                      d="M24,12c0,6.627 -5.373,12 -12,12c-6.627,0 -12,-5.373 -12,-12c0,-6.627
            5.373,-12 12,-12c6.627,0 12,5.373
            12,12Zm-11.278,0l1.294,0l0.172,-1.617l-1.466,0l0.002,-0.808c0,-0.422
            0.04,-0.648 0.646,-0.648l0.809,0l0,-1.616l-1.295,0c-1.555,0 -2.103,0.784
            -2.103,2.102l0,0.97l-0.969,0l0,1.617l0.969,0l0,4.689l1.941,0l0,-4.689Z"
                    />
                  </svg>
                </a>
                <a href="/#" className="w-10 mx-1">
                  <svg
                    className="fill-current cursor-pointer hover:text-black text-brand transition duration-500 ease-in-out"
                    width="100%"
                    height="100%"
                    viewBox="0 0 24 24"
                    version="1.1"
                    xmlSpace="preserve"
                    style={{
                      fillRule: "evenodd",
                      clipRule: "evenodd",
                      strokeLinejoin: "round",
                      strokeMiterlimit: 2,
                    }}
                  >
                    <path
                      id="Shape"
                      d="M7.3,0.9c1.5,-0.6 3.1,-0.9 4.7,-0.9c1.6,0 3.2,0.3 4.7,0.9c1.5,0.6 2.8,1.5
            3.8,2.6c1,1.1 1.9,2.3 2.6,3.8c0.7,1.5 0.9,3 0.9,4.7c0,1.7 -0.3,3.2
            -0.9,4.7c-0.6,1.5 -1.5,2.8 -2.6,3.8c-1.1,1 -2.3,1.9 -3.8,2.6c-1.5,0.7
            -3.1,0.9 -4.7,0.9c-1.6,0 -3.2,-0.3 -4.7,-0.9c-1.5,-0.6 -2.8,-1.5
            -3.8,-2.6c-1,-1.1 -1.9,-2.3 -2.6,-3.8c-0.7,-1.5 -0.9,-3.1 -0.9,-4.7c0,-1.6
            0.3,-3.2 0.9,-4.7c0.6,-1.5 1.5,-2.8 2.6,-3.8c1.1,-1 2.3,-1.9
            3.8,-2.6Zm-0.3,7.1c0.6,0 1.1,-0.2 1.5,-0.5c0.4,-0.3 0.5,-0.8 0.5,-1.3c0,-0.5
            -0.2,-0.9 -0.6,-1.2c-0.4,-0.3 -0.8,-0.5 -1.4,-0.5c-0.6,0 -1.1,0.2
            -1.4,0.5c-0.3,0.3 -0.6,0.7 -0.6,1.2c0,0.5 0.2,0.9 0.5,1.3c0.3,0.4 0.9,0.5
            1.5,0.5Zm1.5,10l0,-8.5l-3,0l0,8.5l3,0Zm11,0l0,-4.5c0,-1.4 -0.3,-2.5
            -0.9,-3.3c-0.6,-0.8 -1.5,-1.2 -2.6,-1.2c-0.6,0 -1.1,0.2 -1.5,0.5c-0.4,0.3
            -0.8,0.8 -0.9,1.3l-0.1,-1.3l-3,0l0.1,2l0,6.5l3,0l0,-4.5c0,-0.6 0.1,-1.1
            0.4,-1.5c0.3,-0.4 0.6,-0.5 1.1,-0.5c0.5,0 0.9,0.2 1.1,0.5c0.2,0.3 0.4,0.8
            0.4,1.5l0,4.5l2.9,0Z"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </section>
        <section className="text-gray-600 body-font relative">
          <div className="container px-5 pb-24 mx-auto flex sm:flex-nowrap flex-wrap">
            <div className="lg:w-2/3 md:w-1/2 w-full h-96 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
              <iframe
                width="100%"
                height="100%"
                className="absolute inset-0"
                frameBorder="0"
                title="map"
                marginHeight="0"
                marginWidth="0"
                scrolling="no"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.3482689250204!2d90.35367527506733!3d23.80621167863229!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c162749924dd%3A0x4d0b750e1fcaea7c!2sWeero%20Digital!5e0!3m2!1sen!2sbd!4v1683634586464!5m2!1sen!2sbd"
              ></iframe>
            </div>
            <div className="lg:w-1/3 rounded-lg md:w-1/2 p-5 bg-gray-100 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
              <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">
                Contact
              </h2>
              <p className="leading-relaxed mb-5 text-gray-600">
                Post-ironic portland shabby chic echo park, banjo fashion axe
              </p>
              <div className="relative mb-4">
                <label
                  htmlFor="name"
                  className="leading-7 text-sm text-gray-600"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <div className="relative mb-4">
                <label
                  htmlFor="email"
                  className="leading-7 text-sm text-gray-600"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <div className="relative mb-4">
                <label
                  htmlFor="message"
                  className="leading-7 text-sm text-gray-600"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                ></textarea>
              </div>
              <button className="text-white transform hover:scale-105 duration-300 bg-brand border-0 py-2 px-6 focus:outline-none  rounded text-lg">
                Message
              </button>
            
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default DoctorDetails;