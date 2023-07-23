
import teeth from "../../../assets/icon/teeth (2).png";
import doctor1 from "../../../assets/team/team (1).jpg";
import doctor2 from "../../../assets/team/team (2).jpg";
import doctor3 from "../../../assets/team/team (3).jpg";
import doctor4 from "../../../assets/team/team (4).jpg";
const DoctorListCard = () => {
  return (
    <>
      {/* component */}
      <div className="mb-32">
      <div className="top-0 left-0 right-0 items-center ">
        <h1 className="text-4xl font-bold text-brand text-center">
          YOUR DOCTORS
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
      </div>


      <div className="relative">
        <div className="max-w-screen-xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 relative ">
          <div className="lg:col-span-3 lg:border-l pl-6 ">
            <div className="border-b mb-5 text-sm">
              <div className="text-brand flex items-center  pb-2 pr-2 border-b-2 border-brand uppercase">
                <a href="#" className="font-semibold inline-block">
                  Most Popular
                </a>
              </div>
            </div>
            <div className="my-4 flex">
              <div className="text-md border-b pb-4">
                <a
                  href="#"
                  className="text-brand hover:text-brand font-semibold"
                >
                  Welcome
                </a>
              </div>
            </div>
            <div className="my-4 flex">
              <div className="text-md border-b pb-4">
                <a
                  href="#"
                  className="text-brand hover:text-brand font-semibold"
                >
                  Statement of Faith
                </a>
              </div>
            </div>
            <div className="my-4 flex">
              <div className="text-md border-b pb-4">
                <a
                  href="#"
                  className="text-brand hover:text-brand font-semibold"
                >
                  {" "}
                  Our History
                </a>
              </div>
            </div>
            <div className="my-4 flex">
              <div className="text-md border-b pb-4">
                <a
                  href="#"
                  className="text-brand hover:text-brand font-semibold"
                >
                  Education/Accreditation
                </a>
              </div>
            </div>
            <div className="my-4 flex">
              <div className="text-md border-b pb-4">
                <a
                  href="#"
                  className="text-brand hover:text-brand font-semibold"
                >
                  Education/Accreditation
                </a>
              </div>
            </div>
            <div className="my-4 flex">
              <div className="text-md border-b pb-4">
                <a
                  href="#"
                  className="text-brand hover:text-brand font-semibold"
                >
                  Education/Accreditation
                </a>
              </div>
            </div>
          </div>
          <div className="lg:col-span-9">
            <div className="content">
              {/* <h3 className="text-2xl font-bold mt-5 mb-10 text-center text-brand">Doctors List</h3> */}


               <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="group relative mx-auto w-11/12 overflow-hidden rounded-[16px] bg-gray-300 p-[1px] transition-all duration-300 ease-in-out hover:bg-gradient-to-r hover:from-indigo-500 hover:via-secondary hover:to-brand">
                      <div className="group-hover:animate-spin-slow invisible absolute -top-40 -bottom-40 left-10 right-10 bg-gradient-to-r from-transparent via-white/90 to-transparent group-hover:visible" />
                      <div className="relative rounded-[15px] bg-white p-6">
                        <div className="space-y-4">
                          <img
                            src={doctor1}
                            alt=""
                          />
                          <p className="text-lg font-semibold text-brand">
                            Hover me!
                          </p>
                          <p className="font-md text-slate-500">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Ipsam delectus temporibus est ut nisi nam at adipisci
                            sunt dolore quibusdam.
                          </p>
                        </div>
                      </div>
                  </div>
                  <div className="group relative mx-auto w-11/12 overflow-hidden rounded-[16px] bg-gray-300 p-[1px] transition-all duration-300 ease-in-out hover:bg-gradient-to-r hover:from-indigo-500 hover:via-purple-500 hover:to-pink-500">
                      <div className="group-hover:animate-spin-slow invisible absolute -top-40 -bottom-40 left-10 right-10 bg-gradient-to-r from-transparent via-white/90 to-transparent group-hover:visible" />
                      <div className="relative rounded-[15px] bg-white p-6">
                        <div className="space-y-4">
                          <img
                            src={doctor2}
                            alt=""
                          />
                          <p className="text-lg font-semibold text-brand">
                            Hover me!
                          </p>
                          <p className="font-md text-slate-500">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Ipsam delectus temporibus est ut nisi nam at adipisci
                            sunt dolore quibusdam.
                          </p>
                        </div>
                      </div>
                  </div>

                  <div className="group relative mx-auto w-11/12 overflow-hidden rounded-[16px] bg-gray-300 p-[1px] transition-all duration-300 ease-in-out hover:bg-gradient-to-r hover:from-indigo-500 hover:via-purple-500 hover:to-pink-500">
                      <div className="group-hover:animate-spin-slow invisible absolute -top-40 -bottom-40 left-10 right-10 bg-gradient-to-r from-transparent via-white/90 to-transparent group-hover:visible" />
                      <div className="relative rounded-[15px] bg-white p-6">
                        <div className="space-y-4">
                          <img
                            src={doctor3}
                            alt=""
                          />
                          <p className="text-lg font-semibold text-brand">
                            Hover me!
                          </p>
                          <p className="font-md text-slate-500">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Ipsam delectus temporibus est ut nisi nam at adipisci
                            sunt dolore quibusdam.
                          </p>
                        </div>
                      </div>
                  </div>

                  <div className="group relative mx-auto w-11/12 overflow-hidden rounded-[16px] bg-gray-300 p-[1px] transition-all duration-300 ease-in-out hover:bg-gradient-to-r hover:from-indigo-500 hover:via-purple-500 hover:to-pink-500">
                      <div className="group-hover:animate-spin-slow invisible absolute -top-40 -bottom-40 left-10 right-10 bg-gradient-to-r from-transparent via-white/90 to-transparent group-hover:visible" />
                      <div className="relative rounded-[15px] bg-white p-6">
                        <div className="space-y-4">
                          <img
                            src={doctor4}
                            alt=""
                          />
                          <p className="text-lg font-semibold text-brand">
                            Hover me!
                          </p>
                          <p className="font-md text-slate-500">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Ipsam delectus temporibus est ut nisi nam at adipisci
                            sunt dolore quibusdam.
                          </p>
                        </div>
                      </div>
                  </div>
               </div>
           

              

            </div>
          </div>
        </div>
      </div>

    
    </>
  );
};

export default DoctorListCard;
