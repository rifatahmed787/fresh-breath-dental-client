import DoctorsProfileCard from "./DoctorsProfileCard";
import team1 from "../../../assets/team/doctor (1).jpg";
import team2 from "../../../assets/team/doctor (2).jpg";
import team3 from "../../../assets/team/doctor (3).jpg";
import team4 from "../../../assets/team/doctor (4).jpg";
import teeth from "../../../assets/icon/teeth (3).png";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
const DoctorGrid = () => {
  useEffect(()=>{
    window.scrollTo(0, 0)
  }, [])
  const data = [
    {
      id: 1,
      fullName: "Billie",
      designation: "designation",
      email: "bcuppleditch0@chron.com",
      intro: "intro",
      linkedin: "/",
      address: "address",
      profilePic: team1,
    },
    {
      id: 2,
      fullName: "Patty",
      designation: "designation",
      email: "pswyndley1@php.net",
      intro: "Intro",
      linkedin: "/",
      address: "97508 Lindbergh Drive",
      profilePic: team2,
    },
    {
      id: 3,
      fullName: "Elfie",
      designation: "designation",
      email: "emacfadzan2@indiatimes.com",
      intro: "intro",
      linkedin: "/",
      address: "4 Schlimgen Drive",
      profilePic: team3,
    },
    {
      id: 4,
      fullName: "Chloette",
      designation: "designation",
      email: "canderson3@yellowpages.com",
      intro: "intro",
      linkedin: "/",
      address: "01 Harbort Place",
      profilePic: team4,
    },
    {
      id: 5,
      fullName: "Coop",
      designation: "designation",
      email: "ckruse4@princeton.edu",
      intro: "intro",
      linkedin: "/",
      address: "83 Mcbride Place",
      profilePic: team1,
    },
    {
      id: 6,
      fullName: "Noah",
      designation: "designation",
      email: "njeaycock5@digg.com",
      intro: "intro",
      linkedin: "/",
      address: "713 Gateway Plaza",
      profilePic: team2,
    },
    {
      id: 7,
      fullName: "Alard",
      designation: "designation",
      email: "agroucutt6@economist.com",
      intro: "intro",
      linkedin: "/",
      address: "1666 Carioca Crossing",
      profilePic: team3,
    },
    {
      id: 8,
      fullName: "Wenda",
      designation: "designation",
      email: "wzeplin7@ycombinator.com",
      intro: "intro",
      linkedin: "/",
      address: "04 Rockefeller Hill",
      profilePic: team4,
    },
    {
      id: 9,
      fullName: "Craig",
      designation: "designation",
      email: "cbedow8@webmd.com",
      intro: "intro",
      linkedin:
        "http://lycos.com/non/pretium/quis.png?duis=cum&consequat=sociis&dui=natoque&nec=penatibus&nisi=et&volutpat=magnis&eleifend=dis&donec=parturient",
      address: "035 Dawn Parkway",
      profilePic: team1,
    },
    {
      id: 10,
      fullName: "Tadeas",
      designation: "designation",
      email: "thallaways9@princeton.edu",
      intro: "intro",
      linkedin:
        "http://hubpages.com/facilisi/cras.jpg?donec=bibendum&vitae=felis&nisi=sed&nam=interdum&ultrices=venenatis&libero=turpis&non=enim&mattis=blandit&pulvinar=mi&nulla=in&pede=porttitor&ullamcorper=pede&augue=justo&a=eu",
      address: "317 Lakewood Center",
      profilePic: team2,
    },
  ];
  return (
    <>
      <section className="bg-backgroundColor">
        <div className="bg-gradient-to-r from-[#abe0ff] to-brand cover-full">
        <h1 className="lg:text-5xl md:text-3xl text-xl font-bold text-white text-center pt-10">
          Our doctors panel.
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
          DoctorsGrid
        </p>
        
        </div>

        <div className="container px-6 py-16 mx-auto">
          <div className="grid grid-cols-1 gap-4 mt-4 xl:mt-12 xl:gap-12 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 ">
            {data.map((profileData) => (
              <DoctorsProfileCard
                key={profileData.id}
                profileData={profileData}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default DoctorGrid;
