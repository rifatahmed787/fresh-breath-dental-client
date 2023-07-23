import { useEffect } from "react";
import team1 from "../../../assets/team/team (1).jpg"
import team2 from "../../../assets/team/team (2).jpg"
import team3 from "../../../assets/team/team (3).jpg"
import team4 from "../../../assets/team/team (4).jpg"

import { Icon } from '@iconify/react';

const AboutTeam = () => {
  useEffect(()=>{
    window.scrollTo(0, 0)
  }, [])
    return (
        <div className="py-16 px-5">
           <div className="flex justify-center">
            <h5 className=" text-base font-bold bg-gray-300 py-1 px-5 inline-block text-secondary text-center">What we provide</h5>
            </div>
                <h1 className="text-6xl font-serif mt-3 font-semibold text-brand pb-10 text-center">Our Creative Team</h1>
            <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 justify-items-center gap-5 pt-10">

            <div className="bg-white border-2 group border-white duration-300 hover:border-brand ">
             <div className="w-72 h-fit group">
             <div className="relative overflow-hidden">
             <img className="h-96 w-full  object-cover" src={team1} alt="" />
             <div className="absolute h-full w-full bg-black/60 text-center -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300"> 
              <div>
              <h1 className="text-3xl font-bold text-brand mt-44">Dr Weero</h1>
              </div>
             
              <div className="flex justify-center items-center gap-3 pt-4 text-gray-300">
              <a href=""><Icon icon="ic:baseline-facebook" width="28" className="hover:translate-y-2 duration-300"/></a>
             <a href=""><Icon icon="mdi:twitter" width="28" className="hover:translate-y-2 duration-300"/></a>
              <a href=""><Icon icon="mdi:instagram" width="28" className="hover:translate-y-2 duration-300"/></a>
              </div>
             </div>
           </div>
         </div>
        </div>
            <div className="bg-white border-2 group border-white duration-300 hover:border-brand ">
             <div className="w-72 h-fit group">
             <div className="relative overflow-hidden">
             <img className="h-96 w-full  object-cover" src={team2} alt="" />
             <div className="absolute h-full w-full bg-black/60 text-center -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300"> 
              <div>
              <h1 className="text-3xl font-bold text-brand mt-44">Dr Weero</h1>
              </div>
             
              <div className="flex justify-center items-center gap-3 pt-4 text-gray-300">
              <a href=""><Icon icon="ic:baseline-facebook" width="28" className="hover:translate-y-2 duration-300"/></a>
             <a href=""><Icon icon="mdi:twitter" width="28" className="hover:translate-y-2 duration-300"/></a>
              <a href=""><Icon icon="mdi:instagram" width="28" className="hover:translate-y-2 duration-300"/></a>
              </div>
             </div>
           </div>
         </div>
        </div>
            <div className="bg-white border-2 group border-white duration-300 hover:border-brand ">
             <div className="w-72 h-fit group">
             <div className="relative overflow-hidden">
             <img className="h-96 w-full  object-cover" src={team3} alt="" />
             <div className="absolute h-full w-full bg-black/60 text-center -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300"> 
              <div>
              <h1 className="text-3xl font-bold text-brand mt-44">Dr Weero</h1>
              </div>
             
              <div className="flex justify-center items-center gap-3 pt-4 text-gray-300">
              <a href=""><Icon icon="ic:baseline-facebook" width="28" className="hover:translate-y-2 duration-300"/></a>
             <a href=""><Icon icon="mdi:twitter" width="28" className="hover:translate-y-2 duration-300"/></a>
              <a href=""><Icon icon="mdi:instagram" width="28" className="hover:translate-y-2 duration-300"/></a>
              </div>
             </div>
           </div>
         </div>
        </div>
            <div className="bg-white border-2 group border-white duration-300 hover:border-brand ">
             <div className="w-72 h-fit group">
             <div className="relative overflow-hidden">
             <img className="h-96 w-full  object-cover" src={team4} alt="" />
             <div className="absolute h-full w-full bg-black/60 text-center -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300"> 
              <div>
              <h1 className="text-3xl font-bold text-brand mt-44">Dr Weero</h1>
              </div>
             
              <div className="flex justify-center items-center gap-3 pt-4 text-gray-300">
              <a href=""><Icon icon="ic:baseline-facebook" width="28" className="hover:translate-y-2 duration-300"/></a>
             <a href=""><Icon icon="mdi:twitter" width="28" className="hover:translate-y-2 duration-300"/></a>
              <a href=""><Icon icon="mdi:instagram" width="28" className="hover:translate-y-2 duration-300"/></a>
              </div>
             </div>
           </div>
         </div>
        </div>

       
      </div>
    </div>
    );
};

export default AboutTeam;