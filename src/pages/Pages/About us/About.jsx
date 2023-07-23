import { Link } from "react-router-dom";
import Connect from "../../Home/Home1/Connect/Connect";
import Testimonial from "../../Home/Home1/Testimonial/Testimonial";
import AboutTeam from "./AboutTeam";
import { Icon } from "@iconify/react";
import { useEffect } from "react";
import teeth from "../../../assets/icon/teeth (3).png";


const About = () => {
  useEffect(()=>{
    window.scrollTo(0, 0)
  }, [])
  return (
    <div className="">
      <div className="text-center w-full">
        <div className="bg-gradient-to-r from-[#abe0ff] to-brand cover-full">
        <h1 className="lg:text-5xl md:text-3xl text-xl font-bold text-white text-center pt-10">
          About Us.
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
          AboutUs
        </p>
        </div>
      </div>
      <div className="mx-auto max-w-screen-xl">
        <div className="max-w-5xl px-4 py-12 mx-auto">
          <div className="grid gap-4 mx-4 sm:grid-cols-12">
            <div className="col-span-12 sm:col-span-3">
              <div>
                <div className="text-center sm:text-left mb-5 before:block before:w-28 before:h-3 before:mb-5 before:rounded-md before:mx-auto sm:before:mx-0 before:bg-brand">
                  <p className="text-lg text-brand">Work process</p>
                  <h3 className="text-5xl font-semibold text-brand">
                    How it works?
                  </h3>
                </div>
              </div>

              {/* shake2 css class name from Testimonial.css */}
              <div className="shake2">
                <Icon
                  className="text-brand font-blod"
                  icon="ic:baseline-keyboard-double-arrow-right"
                  width={"40"}
                />
              </div>
            </div>
            <div className="relative col-span-12 px-4 space-y-6 sm:col-span-9">
              <div className="col-span-12 space-y-12 relative px-4 sm:col-span-8 sm:space-y-8 sm:before:absolute sm:before:top-2 sm:before:bottom-0 sm:before:w-0.5 sm:before:-left-3 before:bg-brand">
                <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-brand">
                  <h3 className="text-xl font-bold tracking-wide text-brand">
                    Search Best Online Professional
                  </h3>
                  <time className="text-xs text-brand tracking-wide uppercase dark:text-gray-400">
                    May 2023
                  </time>
                  <p className="mt-3">
                    Pellentesque feugiat ante at nisl efficitur, in mollis orci
                    scelerisque. Interdum et malesuada fames ac ante ipsum
                    primis in faucibus.
                  </p>
                </div>
                <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-brand">
                  <h3 className="text-xl font-bold tracking-wide text-brand">
                    Get Instant Appointment
                  </h3>
                  <time className="text-xs text-brand tracking-wide uppercase dark:text-gray-400">
                    Jul 2023
                  </time>
                  <p className="mt-3">
                    Morbi vulputate aliquam libero non dictum. Aliquam sit amet
                    nunc ut diam aliquet tincidunt nec nec dui. Donec mollis
                    turpis eget egestas sodales.
                  </p>
                </div>
                <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-brand">
                  <h3 className="text-xl font-bold tracking-wide text-brand">
                    Leave Your Feedback
                  </h3>
                  <time className="text-xs text-brand tracking-wide uppercase dark:text-gray-400">
                    Jan 2023
                  </time>
                  <p className="mt-3">
                    Suspendisse tincidunt, arcu nec faucibus efficitur, justo
                    velit consectetur nisl, sit amet condimentum lacus orci nec
                    purus. Mauris quis quam suscipit, vehicula felis id,
                    vehicula enim.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <AboutTeam />
        <Testimonial />
        <Connect />
      </div>
    </div>
  );
};

export default About;
