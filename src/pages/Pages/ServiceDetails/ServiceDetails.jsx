import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import servicesImg1 from "../../../assets/service/doc1.jpg";
import servicesImg2 from "../../../assets/service/doc2.jpg";
import servicesImg3 from "../../../assets/service/doc3.jpg";
import servicesImg4 from "../../../assets/service/service (1).jpg";
import servicesImg5 from "../../../assets/service/service (2).jpg";
import servicesImg6 from "../../../assets/service/service (3).jpg";
import blogImg1 from "../../../assets/clients/client (1).jpg";
import blogImg2 from "../../../assets/clients/client (3).jpg";
import blogImg3 from "../../../assets/service/doc2.jpg";
import blogImg4 from "../../../assets/service/doc3.jpg";
import teeth from "../../../assets/icon/teeth (3).png";

const ServiceDetails = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className="bg-gradient-to-r from-[#abe0ff] to-brand cover-full">
      <h1 className="lg:text-5xl md:text-3xl text-xl font-bold text-white text-center pt-10">
          Our Service Details.
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
          ServicesDetails
        </p>
      </div>
      <section>
        <div className="max-w-screen-xl px-4 py-8 mx-auto sm:py-12 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:items-stretch">
            {/* left side area  */}
            <div className="lg:col-span-2 lg:py-8">
              {/* one area  */}
              <section className="text-gray-600 body-font">
                <div className=" px-5 pb-8 mx-auto flex flex-wrap">
                  <div className="flex w-full mb-20 flex-wrap">
                    <h1 className="sm:text-3xl text-2xl font-bold title-font text-brand lg:w-1/3 lg:mb-0 mb-4">
                      Our All Doctors: Specialist
                    </h1>
                    <p className="lg:pl-6 lg:w-2/3 mx-auto leading-relaxed text-base">
                      Whatever cardigan tote bag tumblr hexagon brooklyn
                      asymmetrical gentrify, subway tile poke farm-to-table.
                      Franzen you probably heard of them man bun deep jianbing
                      selfies heirloom.
                    </p>
                  </div>
                  <div className="flex flex-wrap md:-m-2 -m-1">
                    {/* Service left area  */}
                    <div className="flex flex-wrap w-1/2">
                      <div className="md:p-2 p-1 w-1/2">
                        <img
                          alt="gallery"
                          className="w-full  object-cover h-full object-center block"
                          src={servicesImg1}
                        />
                      </div>
                      <div className="md:p-2 p-1 w-1/2">
                        <img
                          alt="gallery"
                          className="w-full  object-cover h-full object-center block"
                          src={servicesImg2}
                        />
                      </div>
                      <div className="md:p-2 p-1 w-full">
                        <img
                          alt="gallery"
                          className="w-full  h-full object-cover object-center block"
                          src={servicesImg3}
                        />
                      </div>
                    </div>
                    {/* Services right area  */}
                    <div className="flex flex-wrap w-1/2">
                      <div className="md:p-2 p-1 w-full">
                        <img
                          alt="gallery"
                          className="w-full  h-full object-cover object-center block"
                          src={servicesImg4}
                        />
                      </div>
                      <div className="md:p-2 p-1 w-1/2">
                        <img
                          alt="gallery"
                          className="w-full  object-cover h-full object-center block"
                          src={servicesImg5}
                        />
                      </div>
                      <div className="md:p-2 p-1 w-1/2">
                        <img
                          alt="gallery"
                          className="w-full  object-cover h-full object-center block"
                          src={servicesImg6}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              {/* two area  */}
              <section className="text-gray-600 body-font">
                <div className="px-5 pt-24 mx-auto">
                  <h2 className="font-bold text-2xl mb-4 text-brand">
                    Teeth Solutions
                  </h2>
                  <div className="flex flex-wrap -m-4">
                    <div className=" md:w-1/2">
                      <div className="h-full  rounded-lg group m-4 duration-300 hover:border-brand  group border-2 border-gray-200 border-opacity-60 overflow-hidden">
                        <img
                          className="lg:h-48 md:h-36 transform group-hover:scale-105 ease-in-out duration-500 overflow-hidden  w-full object-cover object-center"
                          src={blogImg1}
                          alt="blog"
                        />
                        <div className="p-6">
                          <h2 className="tracking-widest text-xs title-font font-bold text-gray-400 mb-1">
                            CATEGORY
                          </h2>
                          <h1 className="title-font text-lg font-bold text-brand mb-3">
                            The Catalyzer
                          </h1>
                          <p className="leading-relaxed mb-3 text-gray-500">
                            Photo booth fam kinfolk cold-pressed sriracha
                            leggings jianbing microdosing tousled waistcoat.
                          </p>
                          <div className="flex items-center flex-wrap ">
                            <a className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">
                              Learn More
                              <svg
                                className="w-4 h-4 mt-1 ml-2 group-hover:translate-x-2 duration-300"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth="2"
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              >
                                <path d="M5 12h14"></path>
                                <path d="M12 5l7 7-7 7"></path>
                              </svg>
                            </a>
                            <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                              <svg
                                className="w-4 h-4 mr-1"
                                stroke="currentColor"
                                strokeWidth="2"
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                viewBox="0 0 24 24"
                              >
                                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                <circle cx="12" cy="12" r="3"></circle>
                              </svg>
                              1.2K
                            </span>
                            <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                              <svg
                                className="w-4 h-4 mr-1"
                                stroke="currentColor"
                                strokeWidth="2"
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                viewBox="0 0 24 24"
                              >
                                <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                              </svg>
                              6
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className=" md:w-1/2">
                      <div className="h-full  rounded-lg group m-4 duration-300 hover:border-brand group  border-2 border-gray-200 border-opacity-60 overflow-hidden">
                        <img
                          className="lg:h-48 md:h-36 transform group-hover:scale-105 duration-500 w-full object-cover object-center"
                          src={blogImg2}
                          alt="blog"
                        />
                        <div className="p-6">
                          <h2 className="tracking-widest text-xs title-font font-bold text-gray-400 mb-1">
                            CATEGORY
                          </h2>
                          <h1 className="title-font text-lg font-bold text-brand mb-3">
                            The Catalyzer
                          </h1>
                          <p className="leading-relaxed mb-3 text-gray-500">
                            Photo booth fam kinfolk cold-pressed sriracha
                            leggings jianbing microdosing tousled waistcoat.
                          </p>
                          <div className="flex items-center flex-wrap ">
                            <a className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">
                              Learn More
                              <svg
                                className="w-4 h-4 mt-1 ml-2 group-hover:translate-x-2 duration-300"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth="2"
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              >
                                <path d="M5 12h14"></path>
                                <path d="M12 5l7 7-7 7"></path>
                              </svg>
                            </a>
                            <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                              <svg
                                className="w-4 h-4 mr-1"
                                stroke="currentColor"
                                strokeWidth="2"
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                viewBox="0 0 24 24"
                              >
                                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                <circle cx="12" cy="12" r="3"></circle>
                              </svg>
                              1.2K
                            </span>
                            <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                              <svg
                                className="w-4 h-4 mr-1"
                                stroke="currentColor"
                                strokeWidth="2"
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                viewBox="0 0 24 24"
                              >
                                <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                              </svg>
                              6
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="container px-5 pt-20 mx-auto">
                  <h2 className="font-bold text-2xl mb-4 text-brand">
                    Doctors Life style
                  </h2>
                  <div className="flex flex-wrap -m-4">
                    <div className=" md:w-1/2">
                      <div className="h-full  rounded-lg group m-4 duration-300 hover:border-brand group  border-2 border-gray-200 border-opacity-60 overflow-hidden">
                        <img
                          className="lg:h-48 md:h-36 transform group-hover:scale-105 duration-500  w-full object-cover object-center"
                          src={blogImg3}
                          alt="blog"
                        />
                        <div className="p-6">
                          <h2 className="tracking-widest text-xs title-font font-bold text-gray-400 mb-1">
                            CATEGORY
                          </h2>
                          <h1 className="title-font text-lg font-bold text-brand mb-3">
                            The Catalyzer
                          </h1>
                          <p className="leading-relaxed mb-3 text-gray-500">
                            Photo booth fam kinfolk cold-pressed sriracha
                            leggings jianbing microdosing tousled waistcoat.
                          </p>
                          <div className="flex items-center flex-wrap ">
                            <a className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">
                              Learn More
                              <svg
                                className="w-4 h-4 mt-1 ml-2 group-hover:translate-x-2 duration-300"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth="2"
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              >
                                <path d="M5 12h14"></path>
                                <path d="M12 5l7 7-7 7"></path>
                              </svg>
                            </a>
                            <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                              <svg
                                className="w-4 h-4 mr-1"
                                stroke="currentColor"
                                strokeWidth="2"
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                viewBox="0 0 24 24"
                              >
                                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                <circle cx="12" cy="12" r="3"></circle>
                              </svg>
                              1.2K
                            </span>
                            <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                              <svg
                                className="w-4 h-4 mr-1"
                                stroke="currentColor"
                                strokeWidth="2"
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                viewBox="0 0 24 24"
                              >
                                <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                              </svg>
                              6
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className=" md:w-1/2">
                      <div className="h-full  rounded-lg group m-4 duration-300 hover:border-brand  group border-2 border-gray-200 border-opacity-60 overflow-hidden">
                        <img
                          className="lg:h-48 md:h-36 transform group-hover:scale-105 duration-500 w-full object-cover object-center"
                          src={blogImg4}
                          alt="blog"
                        />
                        <div className="p-6">
                          <h2 className="tracking-widest text-xs title-font font-bold text-gray-400 mb-1">
                            CATEGORY
                          </h2>
                          <h1 className="title-font text-lg font-bold text-brand mb-3">
                            The Catalyzer
                          </h1>
                          <p className="leading-relaxed mb-3 text-gray-500">
                            Photo booth fam kinfolk cold-pressed sriracha
                            leggings jianbing microdosing tousled waistcoat.
                          </p>
                          <div className="flex items-center flex-wrap ">
                            <a className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">
                              Learn More
                              <svg
                                className="w-4 h-4 mt-1 ml-2 group-hover:translate-x-2 duration-300"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth="2"
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              >
                                <path d="M5 12h14"></path>
                                <path d="M12 5l7 7-7 7"></path>
                              </svg>
                            </a>
                            <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                              <svg
                                className="w-4 h-4 mr-1"
                                stroke="currentColor"
                                strokeWidth="2"
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                viewBox="0 0 24 24"
                              >
                                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                <circle cx="12" cy="12" r="3"></circle>
                              </svg>
                              1.2K
                            </span>
                            <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                              <svg
                                className="w-4 h-4 mr-1"
                                stroke="currentColor"
                                strokeWidth="2"
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                viewBox="0 0 24 24"
                              >
                                <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                              </svg>
                              6
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
            {/* Right side area  */}
            <div className="grid relative">
              <div className="max-w-md mx-auto text-center  lg:text-left rounded sm:p-8  ">
                <div className="bg-gray-100 p-6 rounded-lg">
                  <header>
                    <h2 className="text-xl font-bold text-brand sm:text-3xl ">
                      Service Details
                    </h2>
                    <p className="mt-4 text-gray-500">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Quas rerum quam amet provident nulla error!
                    </p>
                  </header>
                  <div className="hidden space-y-4 lg:block">
                    <div className=" md:pr-10 ">
                      <div className="flex relative pb-12">
                        <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                          <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
                        </div>
                        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-brand inline-flex items-center justify-center text-white relative z-10">
                          <svg
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            className="w-5 h-5"
                            viewBox="0 0 24 24"
                          >
                            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                          </svg>
                        </div>
                        <div className="flex-grow pl-4">
                          <h2 className="font-bold title-font text-sm text-gray-900 mb-1 tracking-wider">
                            STEP 1
                          </h2>
                          <p className="leading-relaxed">
                            VHS cornhole pop-up, try-hard 8-bit iceland
                            helvetica. Kinfolk bespoke try-hard cliche palo
                            santo offal.
                          </p>
                        </div>
                      </div>
                      <div className="flex relative pb-12">
                        <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                          <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
                        </div>
                        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-brand inline-flex items-center justify-center text-white relative z-10">
                          <svg
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            className="w-5 h-5"
                            viewBox="0 0 24 24"
                          >
                            <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                          </svg>
                        </div>
                        <div className="flex-grow pl-4">
                          <h2 className="font-bold title-font text-sm text-gray-900 mb-1 tracking-wider">
                            STEP 2
                          </h2>
                          <p className="leading-relaxed">
                            Vice migas literally kitsch +1 pok pok. Truffaut hot
                            chicken slow-carb health goth, vape typewriter.
                          </p>
                        </div>
                      </div>
                      <div className="flex relative pb-12">
                        <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                          <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
                        </div>
                        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-brand inline-flex items-center justify-center text-white relative z-10">
                          <svg
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            className="w-5 h-5"
                            viewBox="0 0 24 24"
                          >
                            <circle cx="12" cy="5" r="3"></circle>
                            <path d="M12 22V8M5 12H2a10 10 0 0020 0h-3"></path>
                          </svg>
                        </div>
                        <div className="flex-grow pl-4">
                          <h2 className="font-bold title-font text-sm text-gray-900 mb-1 tracking-wider">
                            STEP 3
                          </h2>
                          <p className="leading-relaxed">
                            Coloring book nar whal glossier master cleanse
                            umami. Salvia +1 master cleanse blog taiyaki.
                          </p>
                        </div>
                      </div>
                      <div className="flex relative pb-12">
                        <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                          <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
                        </div>
                        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-brand inline-flex items-center justify-center text-white relative z-10">
                          <svg
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            className="w-5 h-5"
                            viewBox="0 0 24 24"
                          >
                            <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                            <circle cx="12" cy="7" r="4"></circle>
                          </svg>
                        </div>
                        <div className="flex-grow pl-4">
                          <h2 className="font-bold title-font text-sm text-gray-900 mb-1 tracking-wider">
                            STEP 4
                          </h2>
                          <p className="leading-relaxed">
                            VHS cornhole pop-up, try-hard 8-bit iceland
                            helvetica. Kinfolk bespoke try-hard cliche palo
                            santo offal.
                          </p>
                        </div>
                      </div>
                      <div className="flex relative">
                        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-brand inline-flex items-center justify-center text-white relative z-10">
                          <svg
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            className="w-5 h-5"
                            viewBox="0 0 24 24"
                          >
                            <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                            <path d="M22 4L12 14.01l-3-3"></path>
                          </svg>
                        </div>
                        <div className="flex-grow pl-4">
                          <h2 className="font-bold title-font text-sm text-gray-900 mb-1 tracking-wider">
                            FINISH
                          </h2>
                          <p className="leading-relaxed">
                            Pitchfork ugh tattooed scenester echo park gastropub
                            whatever cold-pressed retro.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="w-full h-80 mt-5 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServiceDetails;