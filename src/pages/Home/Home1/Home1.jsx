import { useEffect } from "react";
import Carousel from "./Carousel/Carousel";
import Choose from "./Choose/Choose";
import Connect from "./Connect/Connect";
import Services from "./Services/Services";
import Team from "./Team/Team";
import Testimonial from "./Testimonial/Testimonial";
import ServiceItem from "./ServicesItem/ServiceItem";

const Home1 = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Carousel />
      <ServiceItem />
      <Choose />
      <Services />
      <Team />
      <Testimonial />
      <Connect />
    </div>
  );
};

export default Home1;
