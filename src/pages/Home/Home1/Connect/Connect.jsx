
import emailIcon from "../../../../assets/icon/mail.png";

import "./Connect.css";

const Connect = () => {
 
  return (
    <div className="text-left py-16 mx-auto max-w-screen-xl">
      <div className="w-11/12 lg:w-10/12 m-3 px-5 py-12 bg-brand rounded-xl mx-auto">
        <div>
          <img src={emailIcon} alt="" className="w-24 h-24 mx-auto" />
          <h2 className="text-white font-bold text-3xl lg:text-4xl text-center">
            Say Hi Hello! Join our newsletter
          </h2>
        </div>
        <p className="text-lg font-bold text-gray-600 text-center py-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. .
        </p>
        <div className="flex justify-center items-center py-10">
          <input
            className="shadow-inner text-white rounded px-3 text-md lg:text-lg bg-secondary focus:outline-none focus:shadow-outline border-2 w-full lg:w-1/2 py-6 border-white input-width"
            placeholder="Enter your email"
            type="text"
          />
          <button className="flex items-center -ml-[145px] lg:-ml-[180px] px-5 lg:px-10 shadow-lg bg-white font-bold text-sm rounded py-3 lg:py-5  text-brand uppercase shake">
            Newsletter
          </button>
        </div>
      </div>
    </div>
  );
};

export default Connect;
