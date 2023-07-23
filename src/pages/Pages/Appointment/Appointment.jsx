import  { useState } from "react";
import AppointmentBanner from "./AppointmentBanner";
import AppointmentForm from "./AppointmentForm";
import { useEffect } from "react";



const Appointment = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  useEffect(()=>{
    window.scrollTo(0, 0)
  }, [])

  return (
    <div>
      <AppointmentBanner selectedDate={selectedDate} setSelectedDate={setSelectedDate}/>
      <AppointmentForm/>
    </div>
  );
};

export default Appointment;