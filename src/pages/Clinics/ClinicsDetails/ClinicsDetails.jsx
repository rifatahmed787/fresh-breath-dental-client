
import { useEffect } from "react";
import ClinicDetails from "./ClinicsDetails/ClinicDetails";


const ClinicsDetails = () => {
    useEffect(()=>{
        window.scrollTo(0, 0)
      }, [])
    return (
        <div>
            
            <ClinicDetails/>
        </div>
    );
};

export default ClinicsDetails;