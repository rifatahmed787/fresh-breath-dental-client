import { Link } from "react-router-dom";
import service1 from "../../../../assets/service/service (1).jpg";
import service2 from "../../../../assets/service/service (2).jpg";
import service3 from "../../../../assets/service/service (3).jpg";
import { Icon } from "@iconify/react";


const Services = () => {
  
  return (
    <div className="mx-auto max-w-screen-xl">
      <div className="flex justify-center">
        <h5 className=" text-base font-bold bg-gray-300 py-1 px-5 inline-block text-secondary text-center">
          What we provide
        </h5>
      </div>
      <h1 className="lg:text-6xl text-4xl font-bold text-brand mt-3 text-center">
        Our Services
      </h1>
      <div className="lg:px-10">
        <div className="mt-20 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 justify-items-center gap-y-10 items-center">
          <div className="bg-white border group border-gray-200 duration-300 hover:border-brand  w-5/6 rounded-md hover:shadow-md">
            <div className="flex justify-center items-center leading-none">
              <img
                src={service1}
                alt="pic"
                className="w-5/6 rounded-md shadow-xl mt-6 transform -translate-y-10    group-hover:-translate-y-4 transition duration-700"
              />
            </div>
            <div className="pl-5 pr-3">
              <h2 className="text-2xl font-bold my-4 text-brand">
                Dental extraction
              </h2>
              <p className="text-base text-gray-400">
                Dentists are often the first health care professionals to
                recognize and identify a wide variety of diseases.
              </p>
              <Link to="/" className="flex  items-center py-5 text-[#36747C]">
                <p className="text-xl font-semibold text-gray-500 mr-2 group-hover:text-gray-900 duration-300">
                  Read more{" "}
                </p>
                <Icon
                  icon="material-symbols:arrow-right-alt"
                  className="mt-1 ml-1 group-hover:text-brand group-hover:translate-x-2 duration-300"
                  width="30"
                />
              </Link>
            </div>
          </div>
          <div className="bg-white border group border-gray-200 duration-300 hover:border-brand  w-5/6 rounded-md hover:shadow-md">
            <div className="flex justify-center items-center leading-none">
              <img
                src={service2}
                alt="pic"
                className="w-5/6 rounded-md shadow-xl mt-6 transform -translate-y-10    group-hover:-translate-y-4 transition duration-700"
              />
            </div>
            <div className="pl-5 pr-3">
              <h2 className="text-2xl font-bold my-4 text-brand">
                Teeth Whitening
              </h2>
              <p className="text-base text-gray-400">
                Dentists are often the first health care professionals to
                recognize and identify a wide variety of diseases.
              </p>
              <Link to="/" className="flex  items-center py-5 text-[#36747C]">
                <p className="text-xl font-semibold text-gray-500 mr-2 group-hover:text-gray-900 duration-300">
                  Read more{" "}
                </p>
                <Icon
                  icon="material-symbols:arrow-right-alt"
                  className="mt-1 ml-1 group-hover:text-brand group-hover:translate-x-2 duration-300"
                  width="30"
                />
              </Link>
            </div>
          </div>
          <div className="bg-white border group border-gray-200 duration-300 hover:border-brand  w-5/6 rounded-md hover:shadow-md">
            <div className="flex justify-center items-center leading-none">
              <img
                src={service3}
                alt="pic"
                className="w-5/6 rounded-md shadow-xl mt-6 transform -translate-y-10    group-hover:-translate-y-4 transition duration-700"
              />
            </div>
            <div className="pl-5 pr-3">
              <h2 className="text-2xl font-bold my-4 text-brand">
                Dental restoration
              </h2>
              <p className="text-base text-gray-400">
                Dentists are often the first health care professionals to
                recognize and identify a wide variety of diseases.
              </p>
              <Link to="/" className="flex  items-center py-5 text-[#36747C]">
                <p className="text-xl font-semibold text-gray-500 mr-2 group-hover:text-gray-900 duration-300">
                  Read more{" "}
                </p>
                <Icon
                  icon="material-symbols:arrow-right-alt"
                  className="mt-1 ml-1 group-hover:text-brand group-hover:translate-x-2 duration-300"
                  width="30"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
