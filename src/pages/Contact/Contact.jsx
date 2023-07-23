import contact from "../../assets/image/contact-us.png";
import png1 from "../../assets/icon/location.png";
import png2 from "../../assets/icon/phone.png";
import png3 from "../../assets/icon/mail.png";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import "./Contact.css";
import { useEffect } from "react";
import teeth from "../../assets/icon/teeth (3).png";

const Contact = () => {
  useEffect(()=>{
    window.scrollTo(0, 0)
  }, [])
  return (
    <div className="">
      <div className="text-center w-full">
        <div className="bg-gradient-to-r from-[#abe0ff] to-brand cover-full">
        <h1 className="lg:text-5xl md:text-3xl text-xl font-bold text-white text-center pt-10">
          Contact Us.
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
          ContactUs
        </p>
        </div>
      </div>
      <div className="max-w-screen-xl  grid justify-items-center items-center lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-10 mx-auto py-16">
        <a
          href="https://goo.gl/maps/g94H8WE9VCS4yzoXA"
          target="_blank"
          className="group"
        >
          <div className="flex items-center border border-white group-hover:border-brand duration-300 gap-4  bg-white shadow py-10 px-10 rounded-lg brand">
            <p className="bg-brand rounded-lg ">
              <img src={png1} alt="" className="w-16 h-16  p-3" />
            </p>
            <div>
              <h1 className="text-3xl font-bold text-brand">Our Address</h1>
              <p className="text-lg font-semibold text-gray-500">
                Dhaka, Bangladesh
              </p>
            </div>
          </div>
        </a>
        {/* tel:+4733378901" */}
        <a href="tel:+88 01303 384414" className="group ">
          <div className="flex items-center gap-4 border border-white group-hover:border-brand duration-300 bg-white shadow py-10 px-12 rounded-lg brand">
            <p className="bg-brand rounded-lg ">
              <img src={png2} alt="" className="w-16 h-16  p-3" />
            </p>
            <div>
              <h1 className="text-3xl font-bold text-brand">Our Phone</h1>
              <p className="text-lg font-semibold text-gray-500">
                +88 01303 384414{" "}
              </p>
            </div>
          </div>
        </a>
        <a href="mailto: abc@example.com" className="group">
          <div className="flex items-center border border-white group-hover:border-brand duration-300 gap-4 bg-white shadow py-10 px-5 rounded-lg brand">
            <p className="bg-brand rounded-lg w-16 h-16">
              <img src={png3} alt="" className="  p-3" />
            </p>
            <div>
              <h1 className="text-3xl font-bold px-5 text-brand">Our Email</h1>
              <p className="text-lg font-semibold text-gray-500">
                letstalk@weerodigital.com
              </p>
            </div>
          </div>
        </a>
      </div>
      <div className=" text-gray-100 px-8 ">
        <div className="max-w-screen-xl px-8 grid gap-8 grid-cols-1 md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 py-16 mx-auto text-gray-900 rounded-lg">
          <div className="flex flex-col justify-between">
            <div className="text-center move-1">
              <img src={contact} alt="" />
            </div>
          </div>
          <div className="">
            <div>
              <span className="uppercase text-sm text-gray-600 font-bold">
                Full Name
              </span>
              <input
                className="w-full  text-black bg-gray-100 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="text"
                placeholder=""
              />
            </div>
            <div className="mt-8">
              <span className="uppercase text-sm text-gray-600 font-bold">
                Email
              </span>
              <input
                className="w-full  text-black mt-2 bg-gray-100 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="text"
              />
            </div>
            <div className="mt-8">
              <span className="uppercase text-sm text-gray-600 font-bold">
                Message
              </span>
              <textarea className="w-full h-32  text-black bg-gray-100 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"></textarea>
            </div>
            <div className="mt-8">
              <button className="uppercase transform hover:scale-105 duration-300 ease-in-out  text-sm font-bold tracking-wide bg-brand text-gray-100 p-3 rounded-lg w-full focus:outline-none focus:shadow-outline">
                Send Message
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* google map */}
      <div className="mb-16">
        <div className="w-full h-80 mt-3 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
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
  );
};

export default Contact;
