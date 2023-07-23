// import "./Services.css";
import service1 from "../../../../assets/service/doc1.jpg";
import service2 from "../../../../assets/service/doc2.jpg";
import service3 from "../../../../assets/service/doc3.jpg";
import service4 from "../../../../assets/service/service (1).jpg";
import service5 from "../../../../assets/service/service (2).jpg";
import service6 from "../../../../assets/service/service (3).jpg";

const HomeTwoService = () => {
    return (
        <div>
      <div className="mx-auto max-w-screen-xl">
     <div className="text-center">
     <p className="text-base font-bold bg-gray-200 py-1 px-5 inline-block text-secondary ">Top service</p>
     </div>
        <h1 className="text-4xl lg:text-6xl font-bold text-brand text-center">
          Our Services
        </h1>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 py-20 gap-y-5">
          <div className="column">
            <div className="card-hover">
              <div className="p-1 mx-auto ">
                <img src={service1} alt="" className="rounded" />
              </div>
              <h3 className="text-2xl font-bold mb-2 text-brand pt-3">
                Dentistry
              </h3>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Quisquam consequatur necessitatibus eaque.
              </p>
            </div>
          </div>
          <div className="column">
            <div className="card-hover">
              <div className="p-1 mx-auto ">
                <img src={service4} alt="" className="rounded" />
              </div>
              <h3 className="text-2xl font-bold mb-2 text-brand pt-3">
                Researches
              </h3>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Quisquam consequatur necessitatibus eaque.
              </p>
            </div>
          </div>
          <div className="column">
            <div className="card-hover">
              <div className="p-1 mx-auto ">
                <img src={service2} alt="" className="rounded" />
              </div>
              <h3 className="text-2xl font-bold mb-2 text-brand pt-3">
                Cardiology
              </h3>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Quisquam consequatur necessitatibus eaque.
              </p>
            </div>
          </div>
          <div className="column">
            <div className="card-hover">
              <div className="p-1 mx-auto">
                <img src={service5} alt="" className="rounded" />
              </div>
              <h3 className="text-2xl font-bold mb-2 text-brand pt-3">
                Therapiya
              </h3>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Quisquam consequatur necessitatibus eaque.
              </p>
            </div>
          </div>
          <div className="column">
            <div className="card-hover">
              <div className="p-1 mx-auto ">
                <img src={service3} alt="" className="rounded" />
              </div>
              <h3 className="text-2xl font-bold mb-2 text-brand pt-3">
                Virusology
              </h3>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Quisquam consequatur necessitatibus eaque.
              </p>
            </div>
          </div>
          <div className="column">
            <div className="card-hover">
              <div className="p-1 mx-auto">
                <img src={service6} alt="" className="rounded" />
              </div>
              <h3 className="text-2xl font-bold mb-2 text-brand pt-3">
                Pharmocology
              </h3>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Quisquam consequatur necessitatibus eaque.
              </p>
            </div>
          </div>
        </div>
 
      </div>
    </div>
    );
};

export default HomeTwoService;