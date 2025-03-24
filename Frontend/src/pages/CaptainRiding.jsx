import React, { useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import FinishRide from '../components/FinishRide';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

function CaptainRiding() {
  const location = useLocation();
  const { ride } = location.state || {}; // Access the ride data from state
  const [finishRidePanel, setfinishRidePanel] = useState(false);
  const finishRidePanelref = useRef();

  // animation
  useGSAP(() => {
    if (finishRidePanel) {
      gsap.to(finishRidePanelref.current, {
        height: '100%',
        opacity: 1,
        padding: 24,
        duration: 0.3,
        ease: "power2.out",
        overflow: "hidden",
        transform: "translateY(0%)",
      });
    } else {
      gsap.to(finishRidePanelref.current, {
        height: 0,
        opacity: 0,
        padding: 0,
        duration: 0.3,
        ease: "power2.in",
        transform: "translateY(100%)",
        clearProps: "overflow", // Ensure no scroll issues stay
      });
    }
  }, [finishRidePanel]);

  return (
    <div>
      <div className='overflow-hidden h-screen'>
        {/* Top Navbar with logo and logout icon */}
        <div className='fixed h-12 text-3xl mt-3 ml-3 rounded-full flex items-center justify-between w-full p-4'>
          <img src="https://png.pngtree.com/png-vector/20241009/ourmid/pngtree-black-and-yellow-motorcycle-icon-png-image_14003057.png" alt="" width={68} />
          <Link to='/captain-home'>
            <i className='ri-logout-box-line font-bold mr-8'></i>
          </Link>
        </div>

        {/* Main layout container */}
        <div className='h-screen flex flex-col lg:flex-row lg:justify-end '>
          {/* Left Side: Large banner image */}
          <div className='h-4/5 lg:h-full w-full lg:w-[70%]'>
            <img
              className='h-full w-full object-cover'
              src='https://simonpan.com/wp-content/themes/sp_portfolio/assets/uber-challenge.jpg'
              alt='Ride start banner'
            />
          </div>

          <div className='bg-yellow-400 h-1/5 lg:h-[30%] w-full lg:w-[30%] p-6 relative bottom-0 lg:top-60  rounded-lg'>
            <h5 className='text-center cursor-pointer'>
              <i className="ri-arrow-up-wide-line text-2xl font-bold text-black"></i>
            </h5>
            <div className=' flex  justify-between items-center  '>
              <div className='flex flex-col items-start justify-around  gap-3'>
              <h4 className='text-xl font-semibold'>{ride?.distanceTime.distance.text} Km Away</h4>
              <h4 className='text-md text-white font-semibold'>{ride?.distanceTime.duration.text} left to reach destination</h4>
              </div>
              <button className='w-[40%] h-fit bg-green-500 p-2 px-4 
                 rounded-3xl cursor-pointer text-xl text-white 
                 font-medium text-center 
                 lg:w-[50%] xl:w-[50%]'
                onClick={() => {
                  setfinishRidePanel(true);
                }}
              >Complete Ride</button>
            </div>
          </div>
        </div>
      </div>
      <div ref={finishRidePanelref} className='fixed bottom-0 z-[10] bg-[#eee] w-full py-4 h-screen
  lg:fixed lg:w-[30%] lg:left-[70%] left-0 overflow-hidden'>
        <FinishRide 
        ride={ride}
        setfinishRidePanel={setfinishRidePanel} />
      </div>
    </div>
  );
}

export default CaptainRiding;