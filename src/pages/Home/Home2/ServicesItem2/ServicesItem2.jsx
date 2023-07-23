import { Link } from "react-router-dom";
import teeth1 from "../../../../assets/icon/teeth (1).png";
import teeth2 from "../../../../assets/icon/teeth (2).png";
import teeth3 from "../../../../assets/icon/teeth (3).png";
import teeth4 from "../../../../assets/icon/teeth (4).png";
import { Icon } from "@iconify/react";

const ServicesItem2 = () => {
  return (
    <div className="max-w-screen-xl mx-auto">
      <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 justify-items-center items-center gap-x-16 gap-y-5 lg:mt-16 sm:mt-10">
        <div className="mt-4 w-80">
          <img src={teeth1} alt="" className="w-28 -mb-14  ml-[110px] " />
          <div className="border border-gray-200 rounded-xl px-5 py-8 hover:border-brand duration-300 text-center">
            <h2 className="text-2xl font-bold my-2 text-brand ">Dentistry</h2>
            <p>
              Dentists are often the first health care professionals to
              recognize and identify a wide variety of diseases.
            </p>
            <Link
              to="/"
              className="flex group items-center mt-5 text-brand justify-center"
            >
              <p className="text-xl font-semibold pr-1">Read more </p>
              <Icon
                icon="material-symbols:arrow-right-alt"
                className="mt-1 ml-2 group-hover:translate-x-2 duration-300"
                width="30"
              />
            </Link>
          </div>
        </div>
        <div className="mt-4 w-80">
          <img src={teeth2} alt="" className="w-28 -mb-14 ml-[110px]" />
          <div className="border border-gray-200 rounded-xl px-5 py-8 hover:border-brand duration-300 text-center">
            <h2 className="text-2xl font-bold my-2 text-brand">
              Dental implant
            </h2>
            <p>
              A dermatologist is a medical doctor who specializes in conditions
              that affect the skin, hair, and nails.
            </p>
            <Link
              to="/"
              className="flex group items-center mt-5 text-brand justify-center"
            >
              <p className="text-xl font-semibold pr-1">Read more </p>
              <Icon
                icon="material-symbols:arrow-right-alt"
                className="mt-1 ml-2 group-hover:translate-x-2 duration-300"
                width="30"
              />
            </Link>
          </div>
        </div>
        <div className="mt-4 w-80">
          <img src={teeth3} alt="" className="w-28 -mb-14 ml-[110px]" />
          <div className="border border-gray-200 rounded-xl px-5 py-8 hover:border-brand duration-300 text-center">
            <h2 className="text-2xl font-bold my-2 text-brand">
              Dental restoration
            </h2>
            <p>
              Dentists are often the first health care professionals to
              recognize and identify a wide variety of diseases.
            </p>
            <Link
              to="/"
              className="flex group items-center mt-5 text-brand justify-center"
            >
              <p className="text-xl font-semibold mr-1">Read more </p>
              <Icon
                icon="material-symbols:arrow-right-alt"
                className="mt-1 ml-2 group-hover:translate-x-2 duration-300"
                width="30"
              />
            </Link>
          </div>
        </div>
        <div className="mt-4 w-80">
          <img src={teeth4} alt="" className="w-28 -mb-14 ml-[110px]" />
          <div className="border border-gray-200 rounded-xl px-5 py-8 hover:border-brand duration-300 text-center">
            <h2 className="text-2xl font-bold my-2 text-brand text-center">
              Teeth Whitening
            </h2>
            <p>
              Dentists are often the first health care professionals to
              recognize and identify a wide variety of diseases.
            </p>
            <Link
              to="/"
              className="flex group items-center mt-5 text-brand justify-center"
            >
              <p className="text-xl font-semibold mr-1">Read more </p>
              <Icon
                icon="material-symbols:arrow-right-alt"
                className="mt-1 ml-2 group-hover:translate-x-2 duration-300"
                width="30"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesItem2;
