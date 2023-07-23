
import client1 from "../../../../assets/clients/client (1).jpg";
import client2 from "../../../../assets/clients/client (2).jpg";
import client3 from "../../../../assets/clients/client (3).jpg";
import "./Testimonial.css";
import { Icon } from "@iconify/react";

const Testimonial = () => {
  
  return (
    <div className="py-20 mx-auto max-w-screen-xl">
      <div className="flex justify-center">
        <h5 className=" text-base font-bold bg-gray-300 py-1 px-5 inline-block text-secondary text-center">
          Clients feedback
        </h5>
      </div>
      <h1 className="lg:text-6xl md:text-4xl sm:text-3xl font-size  font-bold text-brand mt-3 text-center">
        What our client say.
      </h1>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 items-center pt-20 gap-5 justify-items-center  lg:px-10">
        <div className="flex flex-col max-w-sm gap-5 shadow-md group border">
          <div className="group-hover:border-brand border border-white duration-300">
            <div className="px-4 py-12 rounded-t-lg sm:px-8 md:px-12">
              <p className="relative px-6 py-1 text-lg italic text-center text-gray-400 ">
                <Icon
                  icon="bi:chat-square-quote-fill"
                  width="35"
                  className=" text-brand group-hover:translate-x-48 duration-300 translate-x-0"
                />
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Voluptatibus quibusdam, eligendi exercitationem molestias
                possimus facere.
              </p>
            </div>
            <div className="flex flex-col items-center justify-center p-8 rounded-b-lg bg-gray-100">
              <img
                src={client1}
                alt=""
                className="w-24 h-24 mb-2 -mt-16 bg-center border bg-cover rounded-full"
              />
              <p className="text-xl font-bold my-2 leading-tight  text-brand">
                Samia Akhter
              </p>
              <p className="text-sm uppercase text-gray-400 font-semibold">
                Lorem, ipsum dolor.
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col max-w-sm gap-5 shadow-md group border">
          <div className="group-hover:border-brand border border-white duration-300">
            <div className="px-4 py-12 rounded-t-lg sm:px-8 md:px-12 ">
              <p className="relative px-6 py-1 text-lg italic text-center text-gray-400">
                <Icon
                  icon="bi:chat-square-quote-fill"
                  width="35"
                  className=" text-brand group-hover:translate-x-48 duration-300 translate-x-0"
                />
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Voluptatibus quibusdam, eligendi exercitationem molestias
                possimus facere.
              </p>
            </div>
            <div className="flex flex-col items-center justify-center p-8 rounded-b-lg bg-gray-100">
              <img
                src={client2}
                alt=""
                className="w-24 h-24 mb-2 -mt-16 bg-center border bg-cover rounded-full"
              />
              <p className="text-xl font-bold my-2 leading-tight  text-brand">
                Lamia Hasan
              </p>
              <p className="text-sm uppercase text-gray-400 font-semibold">
                Lorem, ipsum dolor.
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col max-w-sm gap-5 shadow-md group border">
          <div className="group-hover:border-brand border border-white duration-300">
            <div className="px-4 py-12 rounded-t-lg sm:px-8 md:px-12 ">
              <p className="relative px-6 py-1 text-lg italic text-center text-gray-400 ">
                <Icon
                  icon="bi:chat-square-quote-fill"
                  width="35"
                  className=" text-brand group-hover:translate-x-48 duration-300 translate-x-0"
                />
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Voluptatibus quibusdam, eligendi exercitationem molestias
                possimus facere.
              </p>
            </div>
            <div className="flex flex-col items-center justify-center p-8 rounded-b-lg bg-gray-100">
              <img
                src={client3}
                alt=""
                className="w-24 h-24 mb-2 -mt-16 bg-center border bg-cover rounded-full "
              />
              <p className="text-xl font-bold my-2 leading-tight  text-brand">
                Sadilisha
              </p>
              <p className="text-sm uppercase text-gray-400 font-semibold">
                Lorem ipsum dolor.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
