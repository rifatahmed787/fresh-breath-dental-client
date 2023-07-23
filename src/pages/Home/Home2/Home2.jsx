import { useEffect } from "react";
import Connect from "../Home1/Connect/Connect";
import Header from "./Header/Header";
import MakeAppointment from "./MakeAppointment/MakeAppoinment";
import Team from "./Team/Team";
import ServicesItem2 from "./ServicesItem2/ServicesItem2";
import HomeTwoService from "./HomeTwoService/HomeTwoService";

const Home2 = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Header />
      <ServicesItem2 />
      <MakeAppointment />
      <HomeTwoService/>
      <Team />
      <Connect />
    </div>
  );
};

export default Home2;
