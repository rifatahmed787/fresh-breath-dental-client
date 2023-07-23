import PropTypes from "prop-types";

const DoctorsProfileCard = ({ profileData }) => {
  const { fullName, designation, email, intro, linkedin, address, profilePic } =
    profileData;
  return (
    <>
      <div className="font-sans h-[304px] w-full flex flex-row justify-center items-center mb-20">
        <div className=" w-96 mx-auto bg-white border border-brand hover:border-primary hover:shadow">
          <img
            className="w-40 h-40 mx-auto rounded-full -mt-20 border-2 border-primary"
            src={profilePic}
            alt="..."
          />
          <div className="text-center mt-2 text-3xl font-medium text-brand">
            {fullName}
          </div>
          <div className="text-center mt-2 font-light text-sm">
            {designation}
          </div>
          <div className="text-center font-normal text-lg text-gray-900">
            {address}
          </div>
          <div className="px-6 text-center mt-2 font-light text-sm mb-2">
            <p>{intro}</p>
          </div>

          <div className="flex p-4 border-t-[1px] border-brand">
            <div className="w-1/2 text-center hover:translate-x-1 duration-300 hover:text-brand">
              <a href={linkedin} className="">
                linkedin
              </a>
            </div>
            <div className="w-0 border border-brand"></div>
            <div className="w-1/2 text-center hover:translate-x-1 duration-300 hover:text-brand">
              <a href={email}>Email</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

DoctorsProfileCard.propTypes = {
  profileData: PropTypes.shape({
    fullName: PropTypes.string.isRequired,
    designation: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    intro: PropTypes.string.isRequired,
    linkedin: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
    profilePic: PropTypes.string.isRequired,
  }).isRequired,
};

export default DoctorsProfileCard;
