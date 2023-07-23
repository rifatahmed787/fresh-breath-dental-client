import { useEffect } from "react";
import img3 from "../../../../assets/background/background.jpeg";
import TeamSlider from "./TeamSlider";

const Team = () => {
  //scrolling
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <div className="relative dark:text-secondary dark:bg-black mt-20 h-[80vh]">
        <img
          className="w-full h-[80vh]"
          src={img3}
          alt=""
        />
        <div className="absolute inset-0 bg-black opacity-20"></div>

        <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center z-10 ">
          <p className="text-base font-bold bg-gray-200 py-1 px-5 inline-block text-black text-center">
            Meet Our Team
          </p>
          <h1 className="lg:text-6xl md:text-4xl sm:text-3xl font-bold text-white  font-sizee">
            Our Creative Team
          </h1>
        
        </div>
      </div>
      <TeamSlider />
    </div>
  );
};

export default Team;
