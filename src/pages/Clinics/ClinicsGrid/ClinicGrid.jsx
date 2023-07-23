import { Link } from "react-router-dom";
import clinic1 from "../../../assets/slider/home2.jpg"
import clinic2 from "../../../assets/slider/home2-1.jpg"

import { Icon } from "@iconify/react";
import { useEffect } from "react";
import teeth from "../../../assets/icon/teeth (3).png";

const ClinicGrid = () => {
  useEffect(()=>{
    window.scrollTo(0, 0)
  }, [])
    return (
        <>
      <div className="bg-gradient-to-r from-[#abe0ff] to-brand cover-full">
      <h1 className="lg:text-5xl md:text-3xl text-xl font-bold text-white text-center pt-10">
          Our Clinics.
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
          ClinicsGrid
        </p>
      </div>
          {/* banner section */}
    <section>
    <div className="max-w-screen-xl px-4 mx-auto sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:items-stretch">
      <div className="grid rounded  sm:p-8 relative">
        <div className=" mx-auto mt-1 w-full text-center border border-gray-200 rounded-md lg:text-left">      
            <h2 className="text-lg font-bold text-brand pb-5 pt-2  border rounded-t-md  bg-gray-100 w-full sm:text-3xl text-center mb-5">All Our Clinics</h2>
            <div className="lg:col-span-3 lg:border-l pl-6 ">
            <div className="border-b mb-5 text-sm">
              <div className="text-brand flex items-center  pb-2 pr-2 border-b-2 border-brand uppercase">
                <a href="#" className="font-semibold inline-block">
                  Most Popular
                </a>
              </div>
            </div>
            <div className="my-4 flex">
              <div className="text-md border-b pb-4">
                <a
                  href="#"
                  className="text-brand hover:text-brand font-semibold"
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
                  className="text-brand hover:text-brand font-semibold"
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
                  className="text-brand hover:text-brand font-semibold"
                >
                  Education/Accreditation
                </a>
              </div>
            </div>
            <div className="my-4 flex">
              <div className="text-md border-b pb-4">
                <a
                  href="#"
                  className="text-brand hover:text-brand font-semibold"
                >
                  Education/Accreditation
                </a>
              </div>
            </div>
            <div className="my-4 flex">
              <div className="text-md border-b pb-4">
                <a
                  href="#"
                  className="text-brand hover:text-brand font-semibold"
                >
                  Education/Accreditation
                </a>
              </div>
            </div>
          </div>
     

         
        </div>
        <div className="w-full h-80 mt-5 bg-gray-300 rounded-lg overflow- sm:mr-10 p-10 flex items-end justify-start relative">
      <iframe width="100%" height="100%" className="absolute inset-0" frameBorder="0" title="map" marginHeight="0" marginWidth="0" scrolling="no" src="https://maps.google.com/maps?width=100%&amp;height=600&amp;hl=en&amp;q=%C4%B0zmir+(My%20Business%20Name)&amp;ie=UTF8&amp;t=&amp;z=14&amp;iwloc=B&amp;output=embed" ></iframe>
      
    </div>
      </div>

      <div className="lg:col-span-2">
      <section className="bg-white ">
    <div className="container px-6 py-10 mx-auto">
      
        <div className="grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 gap-5">
        {/* card one     */}
        <div className="max-w-sm mx-auto group hover:no-underline focus:no-underline border-2 border-solid  hover:border-brand rounded-md duration-300 shadow-lg   sm:block ">
          <img role="presentation" className="object-cover py-4 w-11/12 rounded  mx-auto " src={clinic1} />
          <div className="relative overflow-">
            <div className="p-6 space-y-4 ">
              <div className="relative">
                <h3 className="py-3 text-2xl font-semibold group-focus:underline text-brand transition-all duration-300 transform translate-y-0 group-hover:translate-y-[-32px] opacity-100 group-hover:opacity-1000">Lorem ipsum dolor sit amet.</h3>        
                <p className="transition-all duration-300 transform translate-y-0 group-hover:translate-y-[-32px] opacity-100 group-hover:opacity-100 pb-7">Mei ex aliquid eleifend forensibus, quo ad dicta apeirian neglegentur, ex has tantas percipit perfecto. At per tempor albucius perfecto, ei probatus consulatu patrioque mea, ei vocent delicata indoctum pri.</p>
                <button className="flex justify-center items-center font-semibold absolute -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-500  w-full bg-brand py-3 rounded-md text-white overflow-hidden">See More<Icon
                      icon="material-symbols:arrow-right-alt"
                      width="25"
                      className="pl-1 pt-1 text-white group-hover:translate-x-1 duration-300"
                    /></button>
               
              </div> 
            </div>
          </div>
        </div>

        {/* card two */}
        <div className="max-w-sm mx-auto group hover:no-underline focus:no-underline border-2 border-solid  hover:border-brand rounded-md duration-300 shadow-lg   sm:block ">
          <img role="presentation" className="object-cover py-4 w-11/12 rounded  mx-auto " src={clinic2} />
          <div className="relative overflow-">
            <div className="p-6 space-y-4 ">
              <div className="relative">
                <h3 className="py-3 text-2xl font-semibold group-focus:underline text-brand transition-all duration-300 transform translate-y-0 group-hover:translate-y-[-32px] opacity-100 group-hover:opacity-1000">Lorem ipsum dolor sit amet.</h3>        
                <p className="transition-all duration-300 transform translate-y-0 group-hover:translate-y-[-32px] opacity-100 group-hover:opacity-100 pb-7">Mei ex aliquid eleifend forensibus, quo ad dicta apeirian neglegentur, ex has tantas percipit perfecto. At per tempor albucius perfecto, ei probatus consulatu patrioque mea, ei vocent delicata indoctum pri.</p>
                <button className="flex justify-center items-center font-semibold absolute -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-500  w-full bg-brand py-3 rounded-md text-white overflow-hidden">See More<Icon
                      icon="material-symbols:arrow-right-alt"
                      width="25"
                      className="pl-1 pt-1 text-white group-hover:translate-x-1 duration-300"
                    /></button>
               
              </div> 
            </div>
          </div>
        </div>
        
        {/* card three */}
        <div className="max-w-sm mx-auto group hover:no-underline focus:no-underline border-2 border-solid  hover:border-brand rounded-md duration-300 shadow-lg   sm:block ">
          <img role="presentation" className="object-cover py-4 w-11/12 rounded   mx-auto " src={clinic1} />
          <div className="relative overflow-">
            <div className="p-6 space-y-4 ">
              <div className="relative">
                <h3 className="py-3 text-2xl font-semibold group-focus:underline text-brand transition-all duration-300 transform translate-y-0 group-hover:translate-y-[-32px] opacity-100 group-hover:opacity-1000">Lorem ipsum dolor sit amet.</h3>        
                <p className="transition-all duration-300 transform translate-y-0 group-hover:translate-y-[-32px] opacity-100 group-hover:opacity-100 pb-7">Mei ex aliquid eleifend forensibus, quo ad dicta apeirian neglegentur, ex has tantas percipit perfecto. At per tempor albucius perfecto, ei probatus consulatu patrioque mea, ei vocent delicata indoctum pri.</p>
                <button className="flex justify-center items-center font-semibold absolute -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-500  w-full bg-brand py-3 rounded-md text-white overflow-hidden">See More<Icon
                      icon="material-symbols:arrow-right-alt"
                      width="25"
                      className="pl-1 pt-1 text-white group-hover:translate-x-1 duration-300"
                    /></button>
               
              </div> 
            </div>
          </div>
        </div>

        {/* card four */}

        <div className="max-w-sm mx-auto group hover:no-underline focus:no-underline border-2 border-solid  hover:border-brand rounded-md duration-300 shadow-lg   sm:block ">
          <img role="presentation" className="object-cover py-4 w-11/12 rounded   mx-auto " src={clinic2} />
          <div className="relative overflow-">
            <div className="p-6 space-y-4 ">
              <div className="relative">
                <h3 className="py-3 text-2xl font-semibold group-focus:underline text-brand transition-all duration-300 transform translate-y-0 group-hover:translate-y-[-32px] opacity-100 group-hover:opacity-1000">Lorem ipsum dolor sit amet.</h3>        
                <p className="transition-all duration-300 transform translate-y-0 group-hover:translate-y-[-32px] opacity-100 group-hover:opacity-100 pb-7">Mei ex aliquid eleifend forensibus, quo ad dicta apeirian neglegentur, ex has tantas percipit perfecto. At per tempor albucius perfecto, ei probatus consulatu patrioque mea, ei vocent delicata indoctum pri.</p>
                <button className="flex justify-center items-center font-semibold absolute -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-500  w-full bg-brand py-3 rounded-md text-white overflow-hidden">See More<Icon
                      icon="material-symbols:arrow-right-alt"
                      width="25"
                      className="pl-1 pt-1 text-white group-hover:translate-x-1 duration-300"
                    /></button>
               
              </div> 
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

export default ClinicGrid;