import { Link } from "react-router-dom";
import teeth1 from "../../../../assets/icon/teeth (1).png"
import teeth2 from "../../../../assets/icon/teeth (2).png"
import teeth3 from "../../../../assets/icon/teeth (3).png"
import teeth4 from "../../../../assets/icon/teeth (4).png"
import "./ServicesItem.css"
import { Icon } from '@iconify/react';



const ServiceItem = () => {
 
    return (
      <div className="grid lg:grid-cols-4 md:grid-cols-2 max-w-screen-xl mx-auto justify-items-center items-center sm:grid-cols-1  gap-5 mt-16  extra-small-margin">
        <div className=" w-80 lg:pr-3 card">
            <img src={teeth1} alt="" className="w-14 -mb-7 "/>
          <div className="border border-gray-200 rounded-xl px-5 py-8 shadow-md hover:border-brand duration-300">
           <h2 className="text-2xl font-bold mb-2 text-brand">Dental implant</h2>
            <p>A dermatologist is a medical doctor who specializes in conditions that affect the skin, hair, and nails, and some other.</p>
            <Link to="/" className="flex  items-center mt-5 text-brand card-body">
               <p className="text-xl font-semibold pr-2">Read more </p>
               <Icon icon="material-symbols:arrow-right-alt" className="mt-1 lg:ml-3 md:ml-24 sm:ml-40 carditem-icon-margin" width="30"/>
            </Link>
           </div>
        </div>
        <div className=" w-80 lg:pr-3  card">
            <img src={teeth2} alt="" className="w-14 -mb-7 "/>
          <div className="border border-gray-200 rounded-xl px-5 py-8 shadow-md hover:border-brand duration-300">
           <h2 className="text-2xl font-bold mb-2 text-brand">Dental implant</h2>
            <p>A dermatologist is a medical doctor who specializes in conditions that affect the skin, hair, and nails and some other thing we dont care.</p>
            <Link to="/" className="flex  items-center mt-5 text-brand card-body">
               <p className="text-xl font-semibold pr-2">Read more </p>
               <Icon icon="material-symbols:arrow-right-alt" className="mt-1 lg:ml-3 md:ml-24 sm:ml-40 carditem-icon-margin" width="30"/>
            </Link>
           </div>
        </div>
        <div className=" w-80 lg:pr-3 card">
            <img src={teeth3} alt="" className="w-14 -mb-6 "/>
          <div className="border border-gray-200 rounded-xl px-5 py-8 shadow-md hover:border-brand duration-300">
           <h2 className="text-2xl font-bold mb-2 text-brand">Dental restoration</h2>
            <p>Dentists are often the first health care professionals to recognize and identify a wide variety of diseases and other thing of some how to do.</p>
            <Link to="/" className="flex  items-center mt-5 text-brand card-body">
               <p className="text-xl font-semibold mr-2">Read more </p>
               <Icon icon="material-symbols:arrow-right-alt" className="mt-1 lg:ml-3 md:ml-24 sm:ml-40 carditem-icon-margin" width="30"/>
            </Link>
           </div>
        </div>
        <div className="w-80 lg:pr-3 card">
            <img src={teeth4} alt="" className="w-14 -mb-6 "/>
          <div className="border border-gray-200 rounded-xl px-5 py-8 shadow-md hover:border-brand duration-300">
           <h2 className="text-2xl font-bold mb-2 text-brand">Teeth Whitening</h2>
            <p>Dentists are often the first health care professionals to recognize and identify a wide variety of diseases for every person and the other thing.</p>
            <Link to="/" className="flex  items-center mt-5 text-brand card-body">
               <p className="text-xl font-semibold mr-2">Read more </p>
               <Icon icon="material-symbols:arrow-right-alt" className="mt-1 lg:ml-3 md:ml-24 sm:ml-40 carditem-icon-margin" width="30"/>
            </Link>
           </div>
        </div>
        
      </div>
    );
};

export default ServiceItem;

