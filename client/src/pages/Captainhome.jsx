import React, { useRef, useState,useContext,useEffect} from 'react'
import axios from "axios";
import { Link } from 'react-router-dom';
import CaptainDetails from '../components/CaptainDetails';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import CaptainPopUp from '../components/CaptainPopUp';
import ConfirmedRidePopup from '../components/ConfirmedRidePopup';
import { SocketContext } from '../context/SocketContext';
import { CaptainDataContext } from '../context/Captaincontext';
import LiveTracking from '../components/LiveTracking.jsx';

function Captainhome() {
  const [captainpopup, setcaptainpopup] = useState(false);
  const [confirmridepopup, setconfirmridepopup] = useState(false);
 
  const captainpopuppanelref=useRef(null);
  const confirmridepopuppanelref=useRef(null);
  const {captain}=useContext(CaptainDataContext);
   const { sendMessage, socket,setSocket,receiveMessage }=useContext(SocketContext);
   const [ride, setride] = useState(null)
 // socketio handling

 useEffect(()=>{
     sendMessage('join',{
       userId:captain._id,
       userType:'captain'
     });

    const updatelocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
          sendMessage('update-location-captain', {
            userId: captain._id,
            location:{
            ltd: position.coords.latitude,
            lng: position.coords.longitude,
          }});
        });
      }
    };
     const locationInterval=setInterval(updatelocation, 10000);
     updatelocation();

     const handleNewRide = (data) => {
      const parsedData = JSON.parse(data);
      console.log('New Ride Received:', parsedData);
      setride(parsedData);
      setcaptainpopup(true);
    };
  
    socket.on('new-ride', handleNewRide);
   
    // Cleanup on component unmount to prevent multiple listeners
  return () => {
    clearInterval(locationInterval);
  };
 },[]);
   
async function confirmRide(){
  
  const response=await axios.post(`${import.meta.env.VITE_BASE_URL}/rides/confirm`,{
       rideId:ride._id
  },{
    headers:{
      Authorization:`Bearer ${localStorage.getItem('captainToken')}`
    }
  })
  setride(response.data.data);
  setcaptainpopup(false);
}    

// gsap animation
useGSAP(() => {
  const screenHeight = window.innerHeight;

  let targetHeight;
  if (screenHeight <= 480) targetHeight = "65%"; // Small phones
  else if (screenHeight <= 768) targetHeight = "70%"; // Tablets
  else if (screenHeight <= 1024) targetHeight = "60%"; // Small laptops
  else targetHeight = "55%"; // Large screens

  if (captainpopup) {
    gsap.to(captainpopuppanelref.current, {
      height: targetHeight,
      opacity: 1,
      padding: 24,
      duration: 0.3,
      ease: "power2.out",
      overflow: "hidden",
      transform: "translateY(0%)",
    });
  } else {
    gsap.to(captainpopuppanelref.current, {
      height: 0,
      opacity: 0,
      padding: 0,
      duration: 0.3,
      ease: "power2.in",
      transform: "translateY(100%)",
      clearProps: "overflow", // Ensure no scroll issues stay
    });
  }
}, [captainpopup]);

// GSAP animations 2
useGSAP(() => {

  if (confirmridepopup) {
    gsap.to(confirmridepopuppanelref.current, {
      height: '100%',
      opacity: 1,
      padding: 24,
      duration: 0.3,
      ease: "power2.out",
      overflow: "hidden",
      transform: "translateY(0%)",
    });
  } else {
    gsap.to(confirmridepopuppanelref.current, {
      height: 0,
      opacity: 0,
      padding: 0,
      duration: 0.3,
      ease: "power2.in",
      transform: "translateY(100%)",
      clearProps: "overflow", // Ensure no scroll issues stay
    });
  }
}, [confirmridepopup]);




  return (
     <div className='lg:overflow-hidden'>
        {/* Top Navbar with logo and logout icon */}
        <div className='fixed h-12 text-3xl mt-3 ml-3 rounded-full flex items-center justify-between w-full p-4'>
          <img src="https://png.pngtree.com/png-vector/20241009/ourmid/pngtree-black-and-yellow-motorcycle-icon-png-image_14003057.png" alt="" width={68} />
          <Link to='/home'>
            <i className='ri-logout-box-line font-bold mr-8'></i>
          </Link>
        </div>

        {/* Main layout container */}
        <div className='h-screen flex flex-col lg:flex-row lg:justify-end '>
          {/* Left Side: Large banner image */}
          <div className='h-3/5 lg:h-full w-full lg:w-[70%]'>
            <LiveTracking/>
          </div>
    
          {/* Right Side: Driver Info and Stats */}
          <div className='bg-gray-100 h-2/5 lg:h-full w-full lg:w-[30%] p-6 flex flex-col justify-start
          lg:justify-center
          items-stretch  rounded-xl'>
            <CaptainDetails/>
          </div>

          {/* pop ups */}
{/* pop up when any ride booking come */}
    <div ref={captainpopuppanelref} className='fixed bottom-0 z-[10] bg-[#eee] w-full py-4 
  h-[65%] sm:h-[70%] md:h-[60%] lg:h-[55%] 
  lg:fixed lg:w-[30%] lg:left-[70%] left-0 overflow-hidden'
      >
         <CaptainPopUp setcaptainpopup={setcaptainpopup} 
          setconfirmridepopup={setconfirmridepopup}
          ride={ride}
          confirmRide={confirmRide}
         />
    </div> 
    {/* popup after acceptance of ride */}
    <div ref={confirmridepopuppanelref} className='fixed bottom-0 z-[10] bg-[#eee] w-full py-4 h-screen
   
  lg:fixed lg:w-[30%] lg:left-[70%] left-0 overflow-hidden'
      >
         <ConfirmedRidePopup setconfirmridepopup={setconfirmridepopup} setcaptainpopup={setcaptainpopup}
          ride={ride}
         />
    </div> 
        </div>
    </div>
  )
}

export default Captainhome;


