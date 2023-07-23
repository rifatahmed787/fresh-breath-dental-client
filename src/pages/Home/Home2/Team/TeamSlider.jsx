import Carousel, { slidesToShowPlugin } from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import { Icon } from "@iconify/react";
import team1 from "../../../../assets/team/team (1).jpg";
import team2 from "../../../../assets/team/team (2).jpg";
import team3 from "../../../../assets/team/team (3).jpg";
import team4 from "../../../../assets/team/team (4).jpg";
const TeamSlider = () => {
  return (
    <div className="mx-auto max-w-screen-xl -mt-[365px] lg:-mt-[320px] z-10">
      <Carousel
        plugins={[
          "infinite",
          "arrows",
          {
            resolve: slidesToShowPlugin,
            options: {
              numberOfSlides: 3,
            },
          },
        ]}
        breakpoints={{
          640: {
            plugins: [
             {
               resolve: slidesToShowPlugin,
               options: {
                numberOfSlides: 1
               }
             },
           ]
          },
          900: {
            plugins: [
             {
               resolve: slidesToShowPlugin,
               options: {
                numberOfSlides: 2
               }
             },
           ]
          }
        }}
      >
        {/* 1st team */}
        <div className="max-w-2xl group mx-4 sm:max-w-sm md:max-w-sm lg:max-w-sm xl:max-w-sm shadow-md sm:mx-auto md:mx-auto lg:mx-auto xl:mx-auto mt-16 bg-white  rounded-lg text-gray-900 z-10">
          <div className="rounded-t-lg h-full overflow-hidden relative">
            <img
              className="object-cover object-top w-full bg-[#ECEFF1] transform group-hover:scale-110 duration-500 ease-in-out"
              src={team2}
              alt="Mountain"
            />
          </div>

          <div className="text-center py-10 border border-gray-300  relative">
            <div className="absolute right-0 -bottom-3 translate-x-0">
              <div className="flex flex-col gap-3 items-center  z-10 bg-brand px-2 py-4">
                <a href="#">
                  <Icon
                    icon="fa-brands:whatsapp-square"
                    width="24"
                    className="text-white hover:scale-110 duration-300"
                  />
                </a>
                <a href="#">
                  <Icon
                    icon="mdi:email"
                    width="28"
                    className="text-white hover:scale-110 duration-300"
                  />
                </a>
                <a href="#">
                  <Icon
                    icon="mdi:linkedin"
                    width="28"
                    className="text-white hover:scale-110 duration-300"
                  />
                </a>
              </div>
            </div>
            <h2 className="font-semibold text-brand text-xl">Dr Sabrina</h2>
            <p className="text-gray-500">General Dentist.</p>
          </div>
        </div>
        {/* 2nd team */}
        <div className="max-w-2xl group mx-4 sm:max-w-sm md:max-w-sm lg:max-w-sm xl:max-w-sm shadow-md sm:mx-auto md:mx-auto lg:mx-auto xl:mx-auto mt-16 bg-white  rounded-lg text-gray-900 z-10">
          <div className="rounded-t-lg h-full overflow-hidden relative">
            <img
              className="object-cover object-top w-full bg-[#ECEFF1] transform group-hover:scale-110 duration-500 ease-in-out"
              src={team1}
              alt="Mountain"
            />
          </div>

          <div className="text-center py-10 border border-gray-300  relative">
            <div className="absolute right-0 -bottom-3 translate-x-0">
              <div className="flex flex-col gap-3 items-center  z-10 bg-brand px-2 py-4">
                <a href="#">
                  <Icon
                    icon="fa-brands:whatsapp-square"
                    width="24"
                    className="text-white hover:scale-110 duration-300"
                  />
                </a>
                <a href="#">
                  <Icon
                    icon="mdi:email"
                    width="28"
                    className="text-white hover:scale-110 duration-300"
                  />
                </a>
                <a href="#">
                  <Icon
                    icon="mdi:linkedin"
                    width="28"
                    className="text-white hover:scale-110 duration-300"
                  />
                </a>
              </div>
            </div>
            <h2 className="font-semibold text-brand text-xl">Dr Faruq</h2>
            <p className="text-gray-500">Orthodontist.</p>
          </div>
        </div>
        {/* 3rd team */}
        <div className="max-w-2xl group mx-4 sm:max-w-sm md:max-w-sm lg:max-w-sm xl:max-w-sm shadow-md sm:mx-auto md:mx-auto lg:mx-auto xl:mx-auto mt-16 bg-white  rounded-lg text-gray-900 z-10">
          <div className="rounded-t-lg h-full overflow-hidden relative">
            <img
              className="object-cover object-top w-full bg-[#ECEFF1] transform group-hover:scale-110 duration-500 ease-in-out"
              src={team3}
              alt="Mountain"
            />
          </div>

          <div className="text-center py-10 border border-gray-300  relative">
            <div className="absolute right-0 -bottom-3 translate-x-0 ">
              <div className="flex flex-col gap-3 items-center  z-10 bg-brand px-2 py-4">
                <a href="#">
                  <Icon
                    icon="fa-brands:whatsapp-square"
                    width="24"
                    className="text-white hover:scale-110 duration-300"
                  />
                </a>
                <a href="#">
                  <Icon
                    icon="mdi:email"
                    width="28"
                    className="text-white hover:scale-110 duration-300"
                  />
                </a>
                <a href="#">
                  <Icon
                    icon="mdi:linkedin"
                    width="28"
                    className="text-white hover:scale-110 duration-300"
                  />
                </a>
              </div>
            </div>
            <h2 className="font-semibold text-brand text-xl">Dr Sara Ali</h2>
            <p className="text-gray-500">Oral Pathologist.</p>
          </div>
        </div>
        {/* 4th team */}
        <div className="max-w-2xl group mx-4 sm:max-w-sm md:max-w-sm lg:max-w-sm xl:max-w-sm shadow-md sm:mx-auto md:mx-auto lg:mx-auto xl:mx-auto mt-16 bg-white  rounded-lg text-gray-900 z-10">
          <div className="rounded-t-lg h-full overflow-hidden relative">
            <img
              className="object-cover object-top w-full bg-[#ECEFF1] transform group-hover:scale-110 duration-500 ease-in-out"
              src={team4}
              alt="Mountain"
            />
          </div>

          <div className="text-center py-10 border border-gray-300  relative">
            <div className="absolute right-0 -bottom-3 translate-x-0 ">
              <div className="flex flex-col gap-3 items-center  z-10 bg-brand px-2 py-4">
                <a href="#">
                  <Icon
                    icon="fa-brands:whatsapp-square"
                    width="24"
                    className="text-white hover:scale-110 duration-300"
                  />
                </a>
                <a href="#">
                  <Icon
                    icon="mdi:email"
                    width="28"
                    className="text-white hover:scale-110 duration-300"
                  />
                </a>
                <a href="#">
                  <Icon
                    icon="mdi:linkedin"
                    width="28"
                    className="text-white hover:scale-110 duration-300"
                  />
                </a>
              </div>
            </div>
            <h2 className="font-semibold text-brand text-xl">Dr Bappi</h2>
            <p className="text-gray-500">Prosthodontist.</p>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default TeamSlider;
