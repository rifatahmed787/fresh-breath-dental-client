import pic from "../../../assets/image/weeroDental.jpg"

const AppointmentForm = () => {
    return (
        <>
           <div className=" text-gray-100 px-8 py-8 ">
        <div className="text-center w-full">
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold leading-tight text-brand">
              Contact us and get more update!
            </h2>
            <div className="text-gray-500 font-bold mt-8">
              The way to get started is to quit talking and begin doing
            </div>
          </div>
        </div>
        <div className="max-w-screen-xl px-8 grid gap-8 grid-cols-1 md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 py-16 mx-auto text-gray-900 rounded-lg">
          <div className="flex flex-col justify-between">
            <div className="text-center">
              <img src={pic} alt="" />

              {/* payment card */}
              <div className=" mt-8 ">
        <div className="circles">
            <div className="circle circle-1"></div>
            <div className="circle circle-2"></div>
          </div>
          
        <div className="card-visa bg-brand">
            <div className="visa_logo">
                <img src="https://raw.githubusercontent.com/muhammederdem/credit-card-form/master/src/assets/images/visa.png" alt=""/>
            </div>
            <div className="visa_info">
                <img src="https://raw.githubusercontent.com/muhammederdem/credit-card-form/master/src/assets/images/chip.png" alt=""/>
                <p>4586 7985 9271 6388</p>
            </div>
            <div className="visa_crinfo">
                <p>02/12</p>
                <p>Nikhil Bobade</p>
            </div>
        </div>
    </div>
            </div>
          </div>
          <div className="">
            <div className="w-full mr-0 mb-0 ml-0 relative space-y-8">
              <div className="relative">
                <p
                  className="bg-white pt-0 pr-2 pb-0 pl-2 -mt-3 mr-0 mb-0 ml-2 font-medium text-brand
            absolute"
                >
                  Full Name
                </p>
                <input
                  placeholder="John"
                  type="text"
                  className="border placeholder-gray-500 focus:outline-none
            focus:border-black w-full pt-4 pr-4 pb-4 pl-4 mt-2 mr-0 mb-0 ml-0 text-base block bg-white
            border-brand rounded-md"
                />
              </div>
              <div className="relative">
                <p className="bg-white pt-0 pr-2 pb-0 pl-2 -mt-3 mr-0 mb-0 ml-2 font-medium text-brand absolute">
                  Email Address
                </p>
                <input
                  placeholder="abc123@ex.com"
                  type="text"
                  className="border placeholder-gray-500 focus:outline-none
            focus:border-black w-full pt-4 pr-4 pb-4 pl-4 mt-2 mr-0 mb-0 ml-0 text-base block bg-white
            border-brand rounded-md"
                />
              </div>
              <div className="relative">
                <p
                  className="bg-white pt-0 pr-2 pb-0 pl-2 -mt-3 mr-0 mb-0 ml-2 font-medium text-brand
            absolute"
                >
                  Phone Number
                </p>
                <input
                  placeholder="+880..."
                  type="tel"
                  className="border placeholder-gray-500 focus:outline-none
            focus:border-black w-full pt-4 pr-4 pb-4 pl-4 mt-2 mr-0 mb-0 ml-0 text-base block bg-white
            border-brand rounded-md"
                />
              </div>

              <div className="relative">
                <p
                  className="bg-white pt-0 pr-2 pb-0 pl-2 -mt-3 mr-0 mb-0 ml-2 font-medium text-brand
            absolute"
                >
                  Booking Date
                </p>
                <input
                  placeholder="Booking Date"
                  type="date"
                  className="border placeholder-gray-500 focus:outline-none
            focus:border-black w-full pt-4 pr-4 pb-4 pl-4 mt-2 mr-0 mb-0 ml-0 text-base block bg-white
            border-brand rounded-md"
                />
              </div>
                   

              <div className="relative">
              <p
                className="bg-white pt-0 pr-2 pb-0 pl-2 -mt-3 mr-0 mb-0 ml-2 font-medium text-brand
            absolute"
              >
                Department
              </p>
              <div>
                <select
                  className="border placeholder-gray-500 focus:outline-none
            focus:border-black w-full pt-4 pr-4 pb-4 pl-4 mt-2 mr-0 mb-0 ml-0 text-base block bg-white
            border-brand rounded-md"
                  id="location"
                >
                    <option value="Cardiology">Cardiology</option>
  <option value="Oncology">Oncology</option>
  <option value="Neurology">Neurology</option>
  <option value="Orthopedics">Orthopedics</option>
  <option value="Gastroenterology">Gastroenterology</option>
  <option value="Endocrinology">Endocrinology</option>
  <option value="Nephrology">Nephrology</option>
  <option value="Hematology">Hematology</option>
  <option value="Pulmonology">Pulmonology</option>
  <option value="Dermatology">Dermatology</option>
  <option value="Infectious Diseases">Infectious Diseases</option>
  <option value="Rheumatology">Rheumatology</option>
  <option value="Allergy and Immunology">Allergy and Immunology</option>
  <option value="Pediatrics">Pediatrics</option>
  <option value="Geriatrics">Geriatrics</option>
  <option value="Obstetrics and Gynecology">Obstetrics and Gynecology</option>
  <option value="Psychiatry">Psychiatry</option>
  <option value="Radiology">Radiology</option>
  <option value="Ophthalmology">Ophthalmology</option>
  <option value="Urology">Urology</option>
  <option value="Otolaryngology">Otolaryngology</option>
  <option value="Emergency Medicine">Emergency Medicine</option>
  <option value="Physical Medicine and Rehabilitation">Physical Medicine and Rehabilitation</option>
  <option value="Pain Medicine">Pain Medicine</option>
  <option value="Sleep Medicine">Sleep Medicine</option>
  <option value="Addiction Medicine">Addiction Medicine</option>
  <option value="Sports Medicine">Sports Medicine</option>
  <option value="Critical Care Medicine">Critical Care Medicine</option>
  <option value="Nuclear Medicine">Nuclear Medicine</option>
  <option value="Anesthesiology">Anesthesiology</option>
  <option value="Family Medicine">Family Medicine</option>
  <option value="Internal Medicine">Internal Medicine</option>
  <option value="Surgery">Surgery</option>
  <option value="Pathology">Pathology</option>
  <option value="Genetics">Genetics</option>
  <option value="Public Health">Public Health</option>
  <option value="Forensic Medicine">Forensic Medicine</option>
  <option value="Occupational Medicine">Occupational Medicine</option>
  <option value="Medical Education">Medical Education</option>
  <option value="Palliative Care">Palliative Care</option>
  <option value="Reproductive Medicine">Reproductive Medicine</option>
  <option value="Clinical Pharmacology">Clinical Pharmacology</option>
  <option value="Toxicology">Toxicology</option>
  <option value="Nutrition">Nutrition</option>
  <option value="Alternative Medicine">Alternative Medicine</option>
  <option value="Travel Medicine">Travel Medicine</option>
  <option value="Aerospace Medicine">Aerospace Medicine</option>
  <option value="Environmental Medicine">Environmental Medicine</option>
  <option value="Medical Genetics">Medical Genetics</option>
                </select>
              </div>
              </div>

              <div className="relative">
              <p
                className="bg-white pt-0 pr-2 pb-0 pl-2 -mt-3 mr-0 mb-0 ml-2 font-medium text-brand
            absolute"
              >
                Doctors
              </p>
              <div>
                <select
                  className="border placeholder-gray-500 focus:outline-none
            focus:border-black w-full pt-4 pr-4 pb-4 pl-4 mt-2 mr-0 mb-0 ml-0 text-base block bg-white
            border-brand rounded-md"
                  id="location"
                >
                  <option value="Dr. Anthony Fauci">
                    Dr. Anthony Fauci - Immunology and infectious diseases
                  </option>
                  <option value="Dr. Atul Gawande">
                    Dr. Atul Gawande - General and endocrine surgery
                  </option>
                  <option value="Dr. Sanjay Gupta">
                    Dr. Sanjay Gupta - Neurosurgery and medical journalism
                  </option>
                  <option value="Dr. Mehmet Oz">
                    Dr. Mehmet Oz - Cardiothoracic surgery and medical
                    journalism
                  </option>
                  <option value="Dr. Deepak Chopra">
                    Dr. Deepak Chopra - Integrative medicine and mind-body
                    health
                  </option>
                  <option value="Dr. Eric Topol">
                    Dr. Eric Topol - Cardiology and digital health
                  </option>
                  <option value="Dr. Paul Farmer">
                    Dr. Paul Farmer - Infectious diseases and global health
                  </option>
                  <option value="Dr. Siddhartha Mukherjee">
                    Dr. Siddhartha Mukherjee - Oncology and medical journalism
                  </option>
                  <option value="Dr. Vivek Murthy">
                    Dr. Vivek Murthy - Public health and preventative medicine
                  </option>
                  <option value="Dr. Jane Goodall">
                    Dr. Jane Goodall - Primatology and conservation
                  </option>
                  <option value="Dr. William Harvey">
                    Dr. William Harvey - Cardiovascular medicine
                  </option>
                  <option value="Dr. Jonas Salk">
                    Dr. Jonas Salk - Virology and vaccine research
                  </option>
                  <option value="Dr. Albert Schweitzer">
                    Dr. Albert Schweitzer - Medicine and humanitarianism
                  </option>
                  <option value="Dr. Paul Ehrlich">
                    Dr. Paul Ehrlich - Immunology and chemotherapy
                  </option>
                  <option value="Dr. Michael DeBakey">
                    Dr. Michael DeBakey - Cardiovascular surgery
                  </option>
                  <option value="Dr. Elizabeth Blackwell">
                    Dr. Elizabeth Blackwell - Obstetrics and gynecology
                  </option>
                  <option value="Dr. Rene Favaloro">
                    Dr. Rene Favaloro - Cardiovascular surgery and research
                  </option>
                  <option value="Dr. Christian Barnard">
                    Dr. Christian Barnard - Cardiothoracic surgery and
                    transplantation
                  </option>
                  <option value="Dr. Charles Mayo">
                    Dr. Charles Mayo - Surgery and medical education
                  </option>
                  <option value="Dr. Gazi Yasargil">
                    Dr. Gazi Yasargil - Neurosurgery
                  </option>
                  <option value="Dr. Margaret Chan">
                    Dr. Margaret Chan - Public health and disease control
                  </option>
                  <option value="Dr. Ben Carson">
                    Dr. Ben Carson - Neurosurgery and politics
                  </option>
                  <option value="Dr. Robert Jarvik">
                    Dr. Robert Jarvik - Cardiology and artificial heart research
                  </option>
                  <option value="Dr. Patch Adams">
                    Dr. Patch Adams - Medicine and social activism
                  </option>
                  <option value="Dr. Michael Roizen">
                    Dr. Michael Roizen - Preventative medicine and aging
                  </option>
                  <option value="Dr. Sydney Brenner">
                    Dr. Sydney Brenner - Genetics and molecular biology
                  </option>
                  <option value="Dr. Robert Gallo">
                    Dr. Robert Gallo - Virology and HIV/AIDS research
                  </option>
                  <option value="Dr. Harvey Cushing">
                    Dr. Harvey Cushing - Neurosurgery and endocrinology
                  </option>
                  <option value="Dr. Joseph Murray">
                    Dr. Joseph Murray - Transplant surgery and research
                  </option>
                </select>
              </div>
              </div>
             

             
            </div>

            <div className="mt-8">
              <button className="uppercase text-sm font-bold tracking-wide bg-brand text-gray-100 p-3 rounded-lg transform hover:scale-105 duration-300 ease-in-out  w-full focus:outline-none focus:shadow-outline">
                Confirm Booking
              </button>
            </div>
          </div>
        </div>
      </div> 
        </>
    );
};

export default AppointmentForm;