import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home1 from "../pages/Home/Home1/Home1";
import Home2 from "../pages/Home/Home2/Home2";
import ErrorPage from "../pages/Pages/ErrorPage/ErrorPage";
import Faq from "../pages/Pages/FAQs/Faq";
import Contact from "../pages/Contact/Contact";
import About from "../pages/Pages/About us/About";
import Services from "../pages/Pages/Services/Services";
import ServiceDetails from "../pages/Pages/ServiceDetails/ServiceDetails";
import Appointment from "../pages/Pages/Appointment/Appointment";
import BlogStandard from "../pages/Blog/BlogStandard";
import BlogGrid from "../pages/Blog/BlogGrid";
import GetQuote from "../shared/Navbar/GetQuote";
import ClinicGrid from "../pages/Clinics/ClinicsGrid/ClinicGrid";
import ClinicsList from "../pages/Clinics/ClinicsList/ClinicsList";
import ClinicsDetails from "../pages/Clinics/ClinicsDetails/ClinicsDetails";
import DoctorList from "../pages/Doctors/DoctorList/DoctorList";
import DoctorGrid from "../pages/Doctors/DoctorGrid/DoctorGrid";
import DoctorDetails from "../pages/Doctors/DoctorDetails/DoctorDetails";
import BlogDetails from "../pages/Blog/BlogDetails";

export const router=createBrowserRouter([
    {path:"/",
     element:<Main/>,
     errorElement:<ErrorPage/>,
     children:[
       {
        path:"/", 
        element:<Home1/>
       },
       {
        path:"/home2",
        element:<Home2/>
       },
       {
        path:"/error",
        element:<ErrorPage/>
       },
       {
        path:"/about",
        element:<About/>
       },
       {
        path:"/services",
        element:<Services/>
       },
       {
        path:"/servicesdetail",
        element:<ServiceDetails/>
       },
       {
        path:"/book",
        element:<Appointment/>
       },
       {
        path:"/faq",
        element:<Faq/>
       },
       {
        path:"/blogstandard",
        element:<BlogStandard/>
       },
       {
        path:"/bloggrid",
        element:<BlogGrid/>
       },
       {
        path:"/blogdetails",
        element:<BlogDetails/>
       },
       {
        path:"/contact",
        element:<Contact/>
       },
       {
        path:"/quote",
        element:<GetQuote/>
       },
       {
        path:"/clinicsgrid",
        element:<ClinicGrid/>
       },
       {
        path:"/clinicslist",
        element:<ClinicsList/>
       },
       {
        path:"/clinicsdetails",
        element:<ClinicsDetails/>
       },
       {
        path:"/doctorslist",
        element:<DoctorList/>
       },
       {
        path:"/doctorsgrid",
        element:<DoctorGrid/>
       },
       {
        path:"/doctorsdetails",
        element:<DoctorDetails/>
       }
     ]
    }
])