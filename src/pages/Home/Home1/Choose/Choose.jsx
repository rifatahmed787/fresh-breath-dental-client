import dentalTeam from "../../../../assets/image/weeroDental.jpg"
import teeth1 from "../../../../assets/icon/teeth (3).png"
import teeth2 from "../../../../assets/icon/teeth (4).png"
import "../../Home2/Header/Header.css"



const Choose = () => {
  
    return (
        <div className="relative py-32 max-w-screen-xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 px-5">
            <div>
             <h1 className="text-4xl  font-bold text-brand pb-8 centring-text text-center">Why choose Weero Dental?</h1>
            <p className="text-lg text-gray-400  pb-8 text-hidden text-center">Our dedication to your health and wellness is what enables us to create long term professional relationships with our patients.</p> 
            <div className="flex flex-col lg:flex-row items-center gap-4 pb-8">
              <img src={teeth1} alt="" className="w-28"/> 
              <div className="text-center lg:text-left">
              <h3 className="text-xl font-bold text-brand">Highly experienced team.</h3>
              <p className="text-lg text-gray-400  mt-3">Our commitment is to deliver the best in healthcare to patients from anywhere in the world.</p>
              </div>
            </div>     
            <div className="flex flex-col lg:flex-row items-center gap-4">
              <img src={teeth2} alt="" className="w-28 mx-auto"/> 
              <div className="text-center lg:text-left">
              <h3 className="text-xl font-bold text-brand">Quality control system.</h3>
              <p className="text-lg text-gray-400 mt-3"> We pride ourselves on having given a new lease of life to numerous international patients.</p>
              </div>
            </div>  
            </div>
            <div>
              <img src={dentalTeam} alt="" className="shadow-md"/>
            </div>
          </div>
        
     </div>
    );
};

export default Choose;