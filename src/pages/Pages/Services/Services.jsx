import "./Services.css";
import service1 from "../../../assets/service/doc1.jpg";
import service2 from "../../../assets/service/doc2.jpg";
import service3 from "../../../assets/service/doc3.jpg";
import service4 from "../../../assets/service/service (1).jpg";
import service5 from "../../../assets/service/service (2).jpg";
import service6 from "../../../assets/service/service (3).jpg";
import Testomonal from "./Testomonal";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import teeth from "../../../assets/icon/teeth (3).png";
import { useEffect } from "react";

const Services = () => {
  useEffect(()=>{
    window.scrollTo(0, 0)
  }, [])
  return (
    <div>
      <div className="text-center w-full">
        <div className="bg-gradient-to-r from-[#abe0ff] to-brand cover-full">
        <h1 className="lg:text-5xl md:text-3xl text-xl font-bold text-white text-center pt-10">
          Our Services.
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
          Services
        </p>
        </div>
      </div>
      <div className="mx-auto max-w-screen-xl">
       

        <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 py-20 gap-y-5">
          <div className="column">
            <div className="card-hover">
              <div className="p-1 mx-auto ">
                <img src={service1} alt="" className="rounded" />
              </div>
              <h3 className="text-2xl font-bold mb-2 text-brand pt-3">
                Dentistry
              </h3>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Quisquam consequatur necessitatibus eaque.
              </p>
            </div>
          </div>
          <div className="column">
            <div className="card-hover">
              <div className="p-1 mx-auto ">
                <img src={service4} alt="" className="rounded" />
              </div>
              <h3 className="text-2xl font-bold mb-2 text-brand pt-3">
                Researches
              </h3>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Quisquam consequatur necessitatibus eaque.
              </p>
            </div>
          </div>
          <div className="column">
            <div className="card-hover">
              <div className="p-1 mx-auto ">
                <img src={service2} alt="" className="rounded" />
              </div>
              <h3 className="text-2xl font-bold mb-2 text-brand pt-3">
                Cardiology
              </h3>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Quisquam consequatur necessitatibus eaque.
              </p>
            </div>
          </div>
          <div className="column">
            <div className="card-hover">
              <div className="p-1 mx-auto">
                <img src={service5} alt="" className="rounded" />
              </div>
              <h3 className="text-2xl font-bold mb-2 text-brand pt-3">
                Therapiya
              </h3>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Quisquam consequatur necessitatibus eaque.
              </p>
            </div>
          </div>
          <div className="column">
            <div className="card-hover">
              <div className="p-1 mx-auto ">
                <img src={service3} alt="" className="rounded" />
              </div>
              <h3 className="text-2xl font-bold mb-2 text-brand pt-3">
                Virusology
              </h3>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Quisquam consequatur necessitatibus eaque.
              </p>
            </div>
          </div>
          <div className="column">
            <div className="card-hover">
              <div className="p-1 mx-auto">
                <img src={service6} alt="" className="rounded" />
              </div>
              <h3 className="text-2xl font-bold mb-2 text-brand pt-3">
                Pharmocology
              </h3>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Quisquam consequatur necessitatibus eaque.
              </p>
            </div>
          </div>
        </div>
        <Testomonal />
      </div>
    </div>
  );
};

export default Services;
