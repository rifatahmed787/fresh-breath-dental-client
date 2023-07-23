import { Icon } from '@iconify/react';
import { Link } from "react-router-dom";
import teeth from "../../../assets/icon/teeth (3).png";

import "./Faq.css";
import { useEffect } from 'react';

const Faq = () => {
  useEffect(()=>{
    window.scrollTo(0, 0)
  }, [])
  return (
    <div className="">
      
      <div className="bg-gradient-to-r from-[#abe0ff] to-brand cover-full">
                <h1 className='pt-16 text-center font-bold lg:text-5xl md:text-3xl text-xl mb-5 text-white'>frequently asked questions</h1>
                <div className="mt-2 max-w-[200px] mx-auto flex relative">
          <span className="h-[1px] mt-6 w-24 bg-white max-w-[200px] mx-auto"></span>

          <span>
            <img className="max-h-[56px]" src={teeth} alt="" />
          </span>
          <span className="h-[1px] mt-6 w-24 bg-white max-w-[200px] mx-auto"></span>
        </div>
                <p className='flex justify-center items-center max-w-lg font-bold mx-auto text-center pb-16 text-gray-900 text-lg'><Link to="/" className="hover:-translate-x-1 duration-300"><span >Home</span></Link><Icon icon="octicon:dot-fill-24" className="mx-2"/>FAQ</p>
            </div>

      <div className="top-0 left-0 right-0 items-center ">
        <h1 className="text-4xl font-bold text-brand text-center pt-20">
          YOUR QUESTIONS
        </h1>
        <div className="mt-2 max-w-[200px] mx-auto flex relative">
          <span className="h-[1px] mt-6 w-24 bg-brand max-w-[200px] mx-auto"></span>

          <span>
            <img className="max-h-[56px]" src={teeth} alt="" />
          </span>
          <span className="h-[1px] mt-6 w-24 bg-brand max-w-[200px] mx-auto"></span>
        </div>
        <p className="text-md text-center text-gray-500 mt-10 max-w-5xl mx-auto ">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
          nonummy nibh euismod at. Lorem Ipsum is simply dummy text of the
          printing and typesetting industry. Lorem Ipsum has been the industry's
          standard dummy text ever since the
        </p>
      </div>
      
      <div className="max-w-5xl mx-auto">
        <div className="lg:flex justify-center items-start gap-3 px-4 mx-auto md:p-8">
          <div className="accordion flex flex-col items-center justify-center">
            {/*  Panel 1  */}
            <div className="mt-10">
              <input
                type="checkbox"
                name="panel"
                id="panel-1"
                className="hidden"
              />
              <label
                htmlFor="panel-1"
                className="label relative block bg-gray-300 hover:bg-brand hover:text-white transition duration-300 text-gray-900 p-4 shadow border-b border-grey"
              >
                Does Continental Hospitals receive and treat a lot of overseas
                patients?
              </label>
              <div className="accordion__content overflow-hidden bg-grey-lighter">
                <h2 className="accordion__header pt-4 pl-4 font-bold text-brand">
                  Header
                </h2>
                <p className="accordion__body p-4 text-gray-500" id="panel1">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Iusto possimus at a cum saepe molestias modi illo facere
                  ducimus voluptatibus praesentium deleniti fugiat ab error quia
                  sit perspiciatis velit necessitatibus.Lorem ipsum dolor sit
                  amet, consectetur adipisicing elit. Lorem ipsum dolor sit
                  amet.
                </p>
              </div>
            </div>
            {/* Panel 2 */}
            <div className="">
              <input
                type="checkbox"
                name="panel"
                id="panel-2"
                className="hidden"
              />
              <label
                htmlFor="panel-2"
                className="label relative block bg-gray-300 hover:bg-brand hover:text-white transition duration-300 p-4 shadow border-b border-grey"
              >
                Does Continental Hospitals conduct any special clinics in
                overseas locations?
              </label>
              <div className="accordion__content overflow-hidden bg-grey-lighter">
                <h2 className="accordion__header pt-4 pl-4 font-bold text-brand">
                  Header
                </h2>
                <p className="accordion__body p-4 text-gray-500">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Iusto possimus at a cum saepe molestias modi illo facere
                  ducimus voluptatibus praesentium deleniti fugiat ab error quia
                  sit perspiciatis velit necessitatibus.Lorem ipsum dolor sit
                  amet, consectetur adipisicing elit. Lorem ipsum dolor sit
                  amet.
                </p>
              </div>
            </div>
            {/*  Panel 3  */}
            <div className="">
              <input
                type="checkbox"
                name="panel"
                id="panel-3"
                className="hidden"
              />
              <label
                htmlFor="panel-3"
                className=" label relative block bg-gray-300 hover:bg-brand hover:text-white transition duration-300  p-4 shadow border-b border-grey"
              >
                What are the other ways of connecting with doctors at
                Continental Hospitals?
              </label>
              <div className="accordion__content overflow-hidden bg-grey-lighter">
                <h2 className="accordion__header pt-4 pl-4 font-bold text-brand">
                  Header
                </h2>
                <p className="accordion__body p-4 text-gray-500">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Iusto possimus at a cum saepe molestias modi illo facere
                  ducimus voluptatibus praesentium deleniti fugiat ab error quia
                  sit perspiciatis velit necessitatibus.Lorem ipsum dolor sit
                  amet, consectetur adipisicing elit. Lorem ipsum dolor sit
                  amet.
                </p>
              </div>
            </div>

            {/*  Panel 4  */}
            <div className="">
              <input
                type="checkbox"
                name="panel"
                id="panel-4"
                className="hidden"
              />
              <label
                htmlFor="panel-4"
                className="label relative block bg-gray-300 hover:bg-brand hover:text-white transition duration-300  p-4 shadow border-b border-grey"
              >
                What are the other ways of connecting with doctors at
                Continental Hospitals?
              </label>
              <div className="accordion__content overflow-hidden bg-grey-lighter">
                <h2 className="accordion__header pt-4 pl-4 font-bold text-brand">
                  Header
                </h2>
                <p className="accordion__body p-4 text-gray-500">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Iusto possimus at a cum saepe molestias modi illo facere
                  ducimus voluptatibus praesentium deleniti fugiat ab error quia
                  sit perspiciatis velit necessitatibus.Lorem ipsum dolor sit
                  amet, consectetur adipisicing elit. Lorem ipsum dolor sit
                  amet.
                </p>
              </div>
            </div>

            {/*  Panel 5  */}
            <div className="">
              <input
                type="checkbox"
                name="panel"
                id="panel-5"
                className="hidden"
              />
              <label
                htmlFor="panel-5"
                className="label relative block bg-gray-300 hover:bg-brand hover:text-white transition duration-300 p-4 shadow border-b border-grey"
              >
                What are the other ways of connecting with doctors at
                Continental Hospitals?
              </label>
              <div className="accordion__content overflow-hidden bg-grey-lighter">
                <h2 className="accordion__header pt-4 pl-4 font-bold text-brand">
                  Header
                </h2>
                <p className="accordion__body p-4 text-gray-500 ">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Iusto possimus at a cum saepe molestias modi illo facere
                  ducimus voluptatibus praesentium deleniti fugiat ab error quia
                  sit perspiciatis velit necessitatibus.Lorem ipsum dolor sit
                  amet, consectetur adipisicing elit. Lorem ipsum dolor sit
                  amet.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
