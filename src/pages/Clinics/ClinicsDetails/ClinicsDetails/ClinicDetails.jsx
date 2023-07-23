import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import teeth from "../../../../assets/icon/teeth (3).png";

const ClinicsDetails = () => {
  return (
    <div>
      <div>
        <div className="bg-gradient-to-r from-[#abe0ff] to-brand cover-full">
        <h1 className="lg:text-5xl md:text-3xl text-xl font-bold text-white text-center pt-10">
          Our Clinics Details.
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
          ClinicsDetails
        </p>
        </div>
        <div className="">
          <div className="max-w-screen-lg mx-auto my-10 px-10">
            <h1
              href="#"
              className="text-brand text-center font-bold text-3xl mb-2"
            >
              Medical terminology allows all medical professionals
            </h1>
            <div className="text-gray-700 text-xs my-6 flex justify-between">
              <div className="flex items-center">
                <a href="#">
                  <img
                    className="w-20 h-20 rounded-full mr-2 border border-brand"
                    src="https://tailwindcss.com/img/jonathan.jpg"
                    alt="Avatar of Jonathan Reinink"
                  />
                </a>
                <div className="text-sm">
                  <a
                    href="#"
                    className="text-[#36747C] font-medium leading-none hover:text-brand transition duration-500 ease-in-out"
                  >
                    Jonathan Reinink
                  </a>
                  <p className="text-gray-600 text-xs">Aug 18</p>
                </div>
              </div>
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
          <div className="max-w-screen-lg mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 relative px-10 ">
            <div className="lg:col-span-4 bg-gray-100 p-5 rounded-lg lg:border-l lg:pl-5 ">
              <div className="border-b mb-5 text-sm">
                <div className="text-brand flex items-center pb-2 pr-2 border-b-2 border-brand uppercase">
                  <a href="#" className="font-semibold inline-block">
                    Most Popular
                  </a>
                </div>
              </div>
              <div className="my-4 flex">
                <div className="text-md border-b pb-4">
                  <a
                    href="#"
                    className="text-black hover:text-brand font-semibold"
                  >
                    Welcome
                  </a>
                </div>
              </div>
              <div className="my-4 flex">
                <div className="text-md border-b pb-4">
                  <a
                    href="#"
                    className="text-brand hover:text-brand font-semibold"
                  >
                    Statement of Faith
                  </a>
                </div>
              </div>
              <div className="my-4 flex">
                <div className="text-md border-b pb-4">
                  <a
                    href="#"
                    className="text-gray-900 hover:text-brand font-semibold"
                  >
                    {" "}
                    Our History
                  </a>
                </div>
              </div>
              <div className="my-4 flex">
                <div className="text-md border-b pb-4">
                  <a
                    href="#"
                    className="text-gray-900 hover:text-brand font-semibold"
                  >
                    Education/Accreditation
                  </a>
                </div>
              </div>
              <div className="my-4 flex">
                <div className="text-md border-b pb-4">
                  <a
                    href="#"
                    className="text-gray-900 hover:text-brand font-semibold"
                  >
                    Education/Accreditation
                  </a>
                </div>
              </div>
              <div className="my-4 flex">
                <div className="text-md border-b pb-4">
                  <a
                    href="#"
                    className="text-gray-900 hover:text-brand font-semibold"
                  >
                    Education/Accreditation
                  </a>
                </div>
              </div>
            </div>
            <div className="lg:col-span-8">
              <div className="content">
                <h3 className="text-2xl font-bold mb-5">Welcome</h3>
                <p className="text-base leading-8 my-5">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the standard dummy
                  text ever since the 1500s, when an unknown printer took a
                  galley of type and scrambled it to make a type specimen book.
                  It has survived not only five centuries, but also the leap
                  into electronic typesetting, remaining essentially unchanged.
                  It was popularised in the 1960s with the release of Letraset
                  sheets containing Lorem Ipsum passages, and more recently with
                  desktop publishing software like Aldus PageMaker including
                  versions of Lorem Ipsum.
                </p>

                <blockquote className="border-l-4 border-gray-500 pl-4 mb-6  rounded text-md italic leading-8 my-5 p-5 text-brand font-semibold">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the standard dummy
                  text ever since the 1500s
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClinicsDetails;