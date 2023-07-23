import { Icon } from "@iconify/react";
import { format } from "date-fns";
import PropTypes from "prop-types";
import { DayPicker } from "react-day-picker";
import { Link } from "react-router-dom";
import client from "../../../assets/clients/client (1).jpg";
import teeth from "../../../assets/icon/teeth (4).png";
import "./Appointment.css"

// style={{ background: `url(${bg})` }}

const AppointmentBanner = ({selectedDate, setSelectedDate}) => {
  return (
    <>
      <div className="bg-gradient-to-r from-[#abe0ff] to-brand cover-full">
        <h1 className="pt-16 text-center font-bold lg:text-5xl md:text-3xl text-xl mb-5 text-white">
          BOOK YOUR APPOINTMENT
        </h1>
        <p className="flex justify-center items-center max-w-lg font-bold mx-auto text-center pb-16 text-gray-900 text-lg">
          <Link to="/" className="hover:-translate-x-1 duration-300">
            <span>Home</span>
          </Link>
          <Icon icon="octicon:dot-fill-24" className="mx-2" />
          Appointment
        </p>
      </div>

      <div className="top-0 left-0 right-0 items-center ">
        <h1 className="text-4xl font-bold text-brand text-center pt-20">
          BOOK YOUR APPOINTMENT
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
          printing and typesetting industry. Lorem Ipsum has been the industrys
          standard dummy text ever since the
        </p>
      </div>

      <div className="py-16">
        <div className="grid lg:grid-cols-2 sm:grid-cols-1 justify-items-center items-center gap-y-5">
         
         <img
            src={client}
            alt="dental-chair"
            className="w-80 lg:w-[594px] rounded-lg shadow-xl lg:ml-20"
          />
         
        
          <div className="sm:w-11/12 lg:w-3/4 shadow-xl rounded-lg">
            <DayPicker
              mode="single"
              className=" text-xl font-semibold lg:pl-24 text-secondary"
              selected={selectedDate}
              onSelect={(data) => {
                if (data) {
                  setSelectedDate(data);
                }
              }}
            ></DayPicker>
            <p className="text-center pb-12 text-xl text-secondary font-semibold">
              Your selected date: {format(selectedDate, "PP")}.
            </p>
          </div>
        </div>
      </div>
    
    </>
  );
};

AppointmentBanner.propTypes = {
  selectedDate: PropTypes.instanceOf(Date).isRequired,
  setSelectedDate: PropTypes.func.isRequired,
};

export default AppointmentBanner;
