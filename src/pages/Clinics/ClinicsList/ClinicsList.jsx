import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import clinic1 from "../../../assets/slider/home2.jpg";
import clinic2 from "../../../assets/slider/home2-1.jpg";
import clinic3 from "../../../assets/service/doc2.jpg";
import clinic4 from "../../../assets/service/doc3.jpg";
import teeth from "../../../assets/icon/teeth (3).png";

const ClinicsList = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className="bg-gradient-to-r from-[#abe0ff] to-brand cover-full">
      <h1 className="lg:text-5xl md:text-3xl text-xl font-bold text-white text-center pt-10">
          Our Clinics List.
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
          ClinicsList
        </p>
      </div>
      <section>
        <div className="max-w-screen-xl px-4 py-8 mx-auto sm:py-12 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:items-stretch">
            <div className="grid relative mt-2">
              <div className="max-w-md mx-auto text-center  lg:text-left   rounded sm:p-8">
                <div className="bg-gray-100 p-6 rounded-lg">
                  <header>
                    <h2 className="text-xl font-bold text-brand sm:text-3xl">
                      Specialty
                    </h2>

                    <div>
                      <select
                        id="SortBy"
                        className=" mt-4 rounded border-gray-300 text-sm"
                      >
                        <option>Sort By</option>
                        <option value="Title, DESC">Title, DESC</option>
                        <option value="Title, ASC">Title, ASC</option>
                        <option value="Price, DESC">Price, DESC</option>
                        <option value="Price, ASC">Price, ASC</option>
                      </select>
                    </div>
                    <p className="mt-4 text-gray-500">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Quas rerum quam amet provident nulla error!
                    </p>
                  </header>
                  <div className="hidden space-y-4 lg:block">
                    <div>
                      <p className="block text-xl font-medium text-gray-700">
                        Filters
                      </p>

                      <div className="mt-1 space-y-2">
                        <details className="overflow-hidden rounded border border-gray-300 [&_summary::-webkit-details-marker]:hidden">
                          <summary className="flex cursor-pointer items-center justify-between gap-2 p-4 text-gray-900 transition">
                            <span className="text-sm font-medium">
                              {" "}
                              All Clinics List{" "}
                            </span>

                            <span className="transition group-open:-rotate-180">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="h-4 w-4"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                                />
                              </svg>
                            </span>
                          </summary>

                          <div className="border-t border-gray-200 bg-white">
                            <header className="flex items-center justify-between p-4">
                              <span className="text-sm text-gray-700">
                                {" "}
                                0 Selected{" "}
                              </span>

                              <button
                                type="button"
                                className="text-sm text-gray-900 underline underline-offset-4"
                              >
                                Reset
                              </button>
                            </header>

                            <ul className="space-y-1 border-t border-gray-200 p-4">
                              <li className="flex items-center">
                                <input
                                  type="checkbox"
                                  id="add"
                                  className="h-5 w-5 rounded border-gray-300"
                                />

                                <span className="text-sm font-medium ml-2 text-gray-700">
                                  Apollo Hospitals Dhaka
                                </span>
                              </li>

                              <li className="flex items-center">
                                <input
                                  type="checkbox"
                                  id="FilterPreOrder"
                                  className="h-5 w-5 rounded border-gray-300"
                                />

                                <span className="text-sm ml-2 font-medium text-gray-700">
                                  United Hospital Limited
                                </span>
                              </li>

                              <li className="flex items-center">
                                <input
                                  type="checkbox"
                                  id="FilterOutOfStock"
                                  className="h-5 w-5 rounded border-gray-300"
                                />

                                <span className="text-sm ml-2 font-medium text-gray-700">
                                  Square Hospitals Limited
                                </span>
                              </li>
                            </ul>
                          </div>
                        </details>

                        <details className="overflow-hidden rounded border border-gray-300 [&_summary::-webkit-details-marker]:hidden">
                          <summary className="flex cursor-pointer items-center justify-between gap-2 p-4 text-gray-900 transition">
                            <span className="text-sm font-medium">
                              {" "}
                              Government Hospitals{" "}
                            </span>

                            <span className="transition group-open:-rotate-180">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="h-4 w-4"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                                />
                              </svg>
                            </span>
                          </summary>

                          <div className="border-t border-gray-200 bg-white">
                            <header className="flex items-center justify-between p-4">
                              <span className="text-sm text-gray-700">
                                {" "}
                                0 Selected{" "}
                              </span>

                              <button
                                type="button"
                                className="text-sm text-gray-900 underline underline-offset-4"
                              >
                                Reset
                              </button>
                            </header>

                            <ul className="space-y-1 border-t border-gray-200 p-4">
                              <li className="flex items-center">
                                <input
                                  type="checkbox"
                                  id="add"
                                  className="h-5 w-5 rounded border-gray-300"
                                />

                                <span className="text-sm font-medium ml-2 text-gray-700">
                                  Sheikh Mujib Medical
                                </span>
                              </li>

                              <li className="flex items-center">
                                <input
                                  type="checkbox"
                                  id="FilterPreOrder"
                                  className="h-5 w-5 rounded border-gray-300"
                                />

                                <span className="text-sm ml-2 font-medium text-gray-700">
                                  Dhaka Medical College
                                </span>
                              </li>

                              <li className="flex items-center">
                                <input
                                  type="checkbox"
                                  id="FilterOutOfStock"
                                  className="h-5 w-5 rounded border-gray-300"
                                />

                                <span className="text-sm ml-2 font-medium text-gray-700">
                                  Rajshahi Medical College
                                </span>
                              </li>
                            </ul>
                          </div>
                        </details>

                        <details className="overflow-hidden rounded border border-gray-300 [&_summary::-webkit-details-marker]:hidden">
                          <summary className="flex cursor-pointer items-center justify-between gap-2 p-4 text-gray-900 transition">
                            <span className="text-sm font-medium">
                              {" "}
                              Private Hospitals{" "}
                            </span>

                            <span className="transition group-open:-rotate-180">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="h-4 w-4"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                                />
                              </svg>
                            </span>
                          </summary>

                          <div className="border-t border-gray-200 bg-white">
                            <header className="flex items-center justify-between p-4">
                              <span className="text-sm text-gray-700">
                                {" "}
                                0 Selected{" "}
                              </span>

                              <button
                                type="button"
                                className="text-sm text-gray-900 underline underline-offset-4"
                              >
                                Reset
                              </button>
                            </header>

                            <ul className="space-y-1 border-t border-gray-200 p-4">
                              <li className="flex items-center">
                                <input
                                  type="checkbox"
                                  id="add"
                                  className="h-5 w-5 rounded border-gray-300"
                                />

                                <span className="text-sm font-medium ml-2 text-gray-700">
                                  Central Hospital Limited
                                </span>
                              </li>

                              <li className="flex items-center">
                                <input
                                  type="checkbox"
                                  id="FilterPreOrder"
                                  className="h-5 w-5 rounded border-gray-300"
                                />

                                <span className="text-sm ml-2 font-medium text-gray-700">
                                  Ibn Sina Hospital
                                </span>
                              </li>

                              <li className="flex items-center">
                                <input
                                  type="checkbox"
                                  id="FilterOutOfStock"
                                  className="h-5 w-5 rounded border-gray-300"
                                />

                                <span className="text-sm ml-2 font-medium text-gray-700">
                                  Islami Bank Hospital
                                </span>
                              </li>
                            </ul>
                          </div>
                        </details>
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

            <div className="lg:col-span-2 lg:pb-8">
              <section className="bg-white ">
                <div className="container px-6 py-10 mx-auto">
                  <div className="grid grid-cols-1">
                    <div className="lg:flex m-4 duration-300 hover:border-brand  cursor-pointer border-2 rounded-lg">
                      <img
                        className="object-cover w-full  h-56 rounded-lg lg:w-64 rounded-r-none"
                        src={clinic1}
                        alt=""
                      />

                      <div className="flex flex-col justify-between py-6 mx-5">
                        <a
                          href="#"
                          className="text-xl font-semibold text-brand hover:underline  "
                        >
                          How to use sticky note for problem solving
                        </a>

                        <p>
                          Lorem ipsum dolor sit amet consectetur, adipisicing
                          elit. Consectetur saepe eligendi qui ipsum sunt odit
                          velit nesciunt sint harum, rem illo eveniet ea
                          pariatur sed iure sequi quidem dignissimos
                          molestiae!...
                        </p>
                        <div className="flex justify-between">
                          <a className="text-brand inline-flex items-center md:mb-2 lg:mb-0">
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
                          <span className="text-sm text-gray-500 ">
                            On: 20 October 2019
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="lg:flex group m-4 duration-300 hover:border-brand  cursor-pointer border-2 rounded-lg">
                      <img
                        className="object-cover w-full h-56 rounded-lg lg:w-64 rounded-r-none"
                        src={clinic2}
                        alt=""
                      />

                      <div className="flex flex-col justify-between py-6 mx-5">
                        <a
                          href="#"
                          className="text-xl font-semibold text-brand hover:underline "
                        >
                          How to use sticky note for problem solving
                        </a>

                        <p>
                          Lorem ipsum dolor sit amet consectetur, adipisicing
                          elit. Consectetur saepe eligendi qui ipsum sunt odit
                          velit nesciunt sint harum, rem illo eveniet ea
                          pariatur sed iure sequi quidem dignissimos
                          molestiae!...
                        </p>
                        <div className="flex justify-between">
                          <a className="text-brand inline-flex items-center md:mb-2 lg:mb-0">
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
                          <span className="text-sm text-gray-500 ">
                            On: 20 October 2019
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="lg:flex group m-4 duration-300 hover:border-brand  cursor-pointer border-2 rounded-lg">
                      <img
                        className="object-cover w-full h-56 rounded-lg lg:w-64 rounded-r-none"
                        src={clinic3}
                        alt=""
                      />

                      <div className="flex flex-col justify-between py-6 mx-5">
                        <a
                          href="#"
                          className="text-xl font-semibold text-brand hover:underline "
                        >
                          How to use sticky note for problem solving
                        </a>

                        <p>
                          Lorem ipsum dolor sit amet consectetur, adipisicing
                          elit. Consectetur saepe eligendi qui ipsum sunt odit
                          velit nesciunt sint harum, rem illo eveniet ea
                          pariatur sed iure sequi quidem dignissimos
                          molestiae!...
                        </p>
                        <div className="flex justify-between">
                          <a className="text-brand inline-flex items-center md:mb-2 lg:mb-0">
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
                          <span className="text-sm text-gray-500 ">
                            On: 20 October 2019
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="lg:flex group m-4 duration-300 hover:border-brand  cursor-pointer border-2 rounded-lg">
                      <img
                        className="object-cover w-full h-56 rounded-lg lg:w-64 rounded-r-none"
                        src={clinic4}
                        alt=""
                      />

                      <div className="flex flex-col justify-between py-6 mx-5">
                        <a
                          href="#"
                          className="text-xl font-semibold text-brand hover:underline  "
                        >
                          How to use sticky note for problem solving
                        </a>

                        <p>
                          Lorem ipsum dolor sit amet consectetur, adipisicing
                          elit. Consectetur saepe eligendi qui ipsum sunt odit
                          velit nesciunt sint harum, rem illo eveniet ea
                          pariatur sed iure sequi quidem dignissimos
                          molestiae!...
                        </p>
                        <div className="flex justify-between">
                          <a className="text-brand inline-flex items-center md:mb-2 lg:mb-0">
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
                          <span className="text-sm text-gray-500 ">
                            On: 20 October 2019
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ClinicsList;