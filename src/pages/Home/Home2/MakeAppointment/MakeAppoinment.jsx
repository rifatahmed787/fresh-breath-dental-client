import { Link } from "react-router-dom";
import background from "../../../../assets/background/background.jpeg";
import { Icon } from '@iconify/react';

const MakeAppointment = () => {
  return (
    <div className="relative my-32">
      <img src={background} alt="" className="w-full h-[62vh]" />
      <div className="absolute inset-0 bg-black opacity-30"></div>
      <div className="mx-auto max-w-screen-xl">
        <div className="flex  space-x-8 absolute left-0 right-0 top-0 bottom-0 justify-center  transform items-center z-10 text-center sm:text-left responsive">
          <div className="max-w-screen-xl mx-auto">
            <div className="relative">
              <div className="text-white text-center">
                <div className="mx-10 flex items-center">
                  <div className="">
                    <h4 className="text-primary text-lg font-bold">
                      Appointment
                    </h4>
                    <h1 className="text-2xl lg:text-5xl  font-bold">
                      Make an appointment Today
                    </h1>
                    <p className="py-5">
                      Always make sure that you confirm appointments when you
                      make them. When you make an appointment in English by
                      phone be sure to confirm the appointment by repeating the
                      date and time of the meeting back to the other party and
                      asking if that is correct. This should be one of the last
                      things you do prior to ending the conversation.
                    </p>
                  </div>
                </div>
                <Link to="/">
                <div className="flex justify-center lg:pt-5">
                <button className="flex items-center lg:px-8 md:px-6 sm:px-3 lg:py-3 py-2 carousel-appoint-btn m-2 lg:text-lg font-semibold text-white transform hover:scale-105 duration-500 ease-in-out rounded shadow-sm  bg-brand ">Appoinment <Icon icon="iconamoon:sign-plus" width="25" className="pl-1 pt-1"/></button>

                  <button className="flex items-center lg:px-10 md:px-8 sm:px-4 lg:py-3 py-2 m-2 carousel-seemore-btn lg:text-lg font-semibold  text-brand rounded bg-white  transform hover:scale-105 duration-500 ease-in-out">Read <span className="ml-1">more</span><Icon icon="material-symbols:arrow-right-alt" width="25" className="pl-1 pt-1 text-brand"/>
                  </button>
                </div>
			
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MakeAppointment;
