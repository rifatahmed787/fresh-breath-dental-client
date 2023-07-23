import { useEffect } from "react";
import cardLogo_1 from "../../../assets/icon/teeth (1).png";
import cardLogo_2 from "../../../assets/icon/teeth (2).png";
import cardLogo_3 from "../../../assets/icon/teeth (3).png";
import DoctorListCard from "./DoctorListCard";


const DoctorList = () => {
  useEffect(()=>{
    window.scrollTo(0, 0)
  }, [])

    return (
        <>
    <div className="relative pt-16 pb-32 flex content-center items-center justify-center" style={{minHeight: '75vh'}}>
      <div className="absolute top-0 left-0 right-0 bottom-0 flex justify-center w-full h-full doctorListBG" >
        <span className="w-full h-full absolute bg-black opacity-40" />
      </div>
      <div className="container relative mx-auto">
        <div className="items-center flex flex-wrap">
          <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
            <div className="pr-12">
              <h1 className="text-white font-bold text-6xl ">
                Your treatment starts with us.
              </h1>
              <p className="mt-4 text-lg text-gray-200">
                This is a simple example of a Landing Page you can build using
                Tailwind Starter Kit. It features multiple CSS components
                based on the Tailwindcss design system.
              </p>
            </div>
          </div>
        </div>
      </div>
      
    </div>
    <section className="pb-20 -mt-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap">
          <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center ">
            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
              <div className="px-4 py-5 flex-auto">
                <div className="text-white p-3 text-center inline-flex items-center justify-center w-28 h-28">
                  
                <img src={cardLogo_1} alt="" />
              
                </div>
                <h6 className="text-xl font-semibold text-brand">Dental extraction</h6>
                <p className="mt-2 mb-4 text-gray-600">
                  Divide details about your product or agency work into parts.
                  A paragraph describing a feature will be enough.
                </p>
              </div>
            </div>
          </div>
          <div className="w-full md:w-4/12 px-4 text-center">
            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
              <div className="px-4 py-5 flex-auto">
              <div className="text-white p-3 text-center inline-flex items-center justify-center w-28 h-28">
                  
                  <img src={cardLogo_2} alt="" />
                
                  </div>
                <h6 className="text-xl font-semibold text-brand">Dental sealant</h6>
                <p className="mt-2 mb-4 text-gray-600">
                  Keep you user engaged by providing meaningful information.
                  Remember that by this time, the user is curious.
                </p>
              </div>
            </div>
          </div>
          <div className="pt-6 w-full md:w-4/12 px-4 text-center">
            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
              <div className="px-4 py-5 flex-auto">
              <div className="text-white p-3 text-center inline-flex items-center justify-center w-28 h-28">
                  
                  <img src={cardLogo_3} alt="" />
                
                  </div>
                <h6 className="text-xl font-semibold text-brand">Dental implant</h6>
                <p className="mt-2 mb-4 text-gray-600">
                  Write a few lines about each one. A paragraph describing a
                  feature will be enough. Keep you user engaged!
                </p>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </section>
    <DoctorListCard />
        </>
    );
};

export default DoctorList;