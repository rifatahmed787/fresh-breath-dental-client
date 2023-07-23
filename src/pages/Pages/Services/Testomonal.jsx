import { useEffect } from "react";
import client1 from "../../../assets/clients/client (1).jpg";
import client2 from "../../../assets/clients/client (2).jpg";
import client3 from "../../../assets/clients/client (3).jpg";
import client4 from "../../../assets/clients/client (4).jpg";

const Testomonal = () => {
  useEffect(()=>{
    window.scrollTo(0, 0)
  }, [])
  return (
    <div className="max-w-screen-xl mx-auto">
      <div className="flex justify-center">
        <h5 className=" text-base font-bold bg-gray-300 py-1 px-5 inline-block text-secondary text-center">
          Clients feedback
        </h5>
      </div>
      <h1 className="text-6xl font-bold text-brand mt-3 text-center">
        What our client say.
      </h1>
      <div className="testimonial-1 py-4 md:py-12">
        <div className="container mx-auto px-4">
          <div className="md:flex md:flex-wrap md:-mx-4 mb-4">
            <div className="md:w-1/2 md:px-4 mt-6 md:mt-0">
              <div className="testimonial p-6 border shadow flex hover:border-brand hover:bg-brand  duration-300 hover:text-white">
                <div className="w-40 rounded overflow-hidden mr-4 md:mr-6 flex-shrink-0">
                  <img src={client1} className="w-full h-full object-cover" />
                </div>
                <div>
                  <p className="">
                    It really saves me time and effort. FWR Bootstrap Blocks is
                    exactly what our business has been lacking. FWR Bootstrap
                    Blocks was worth a fortune to my company. FWR Bootstrap
                    Blocks has really helped our business. I'm good to go."
                  </p>
                  <div className=" font-bold uppercase mt-6">- Jesse D.</div>
                  <div className="">Medical</div>
                </div>
              </div>
            </div>

            <div className="md:w-1/2 md:px-4 mt-6 md:mt-0">
              <div className="testimonial p-6 border shadow flex hover:border-brand hover:bg-brand  duration-300 hover:text-white">
                <div className="w-40 rounded  overflow-hidden mr-4 md:mr-6 flex-shrink-0">
                  <img src={client2} className="w-full h-full object-cover" />
                </div>
                <div>
                  <p>
                    "Needless to say we are extremely satisfied with the
                    results. Keep up the excellent work. Your company is truly
                    upstanding and is behind its product 100%. Thanks guys, keep
                    up the good work!"
                  </p>
                  <div className=" font-bold uppercase mt-6">- Annabell M.</div>
                  <div>Medical</div>
                </div>
              </div>
            </div>

            <div className="md:w-1/2 md:px-4 mt-6">
              <div className="testimonial p-6 border shadow flex hover:border-brand hover:bg-brand  duration-300 hover:text-white">
                <div className="w-40 rounded overflow-hidden mr-4 md:mr-6 flex-shrink-0">
                  <img src={client3} className="w-full h-full object-cover" />
                </div>
                <div>
                  <p>
                    "FWR Bootstrap Blocks is exactly what our business has been
                    lacking. FWR Bootstrap Blocks is both attractive and highly
                    adaptable. Man, this thing is getting better and better as I
                    learn more about it."
                  </p>
                  <div className="font-bold uppercase mt-6">- Candace H.</div>
                  <div className="">Weero digital</div>
                </div>
              </div>
            </div>

            <div className="md:w-1/2 md:px-4 mt-6">
              <div className="testimonial p-6 border shadow flex hover:border-brand hover:bg-brand  duration-300 hover:text-white">
                <div className="w-40 rounded  overflow-hidden mr-4 md:mr-6 flex-shrink-0">
                  <img src={client4} className="w-full h-full object-cover" />
                </div>
                <div>
                  <p className="">
                    "This is simply unbelievable! I use FWR Bootstrap Blocks
                    often. You've saved our business! No matter where you go,
                    FWR Bootstrap Blocks is the coolest, most happening thing
                    around! this time."
                  </p>
                  <div className=" font-bold uppercase mt-6">- Joe H.</div>
                  <div className="">Weero digital</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testomonal;
