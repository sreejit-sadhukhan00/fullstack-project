import React, { useState, useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import 'remixicon/fonts/remixicon.css';
import LocationSearchPanel from '../components/LocationSearchPanel';
import VehiclePanel from '../components/VehiclePanel';
import ConfirmedVehicle from '../components/ConfirmedVehicle';
import LookingForDriver from '../components/LookingForDriver';
import WaitForDriver from '../components/WaitForDriver';

function Home() {
  const [pickup, setpickup] = useState('');
  const [destination, setdestination] = useState('');
  const [inputboxpos, setinputboxpos] = useState(0);
  const destionoptionpanel = useRef(null);
  const panelcloseref = useRef(null);
  const [vehiclepanel, setvehiclepanel] = useState(false);
  const [confirmedvehiclepanel, setconfirmedvehiclepanel] = useState(false);
  const [vehicleFound, setvehicleFound] = useState(false);
  const [image, setimage] = useState();
  const [waitfordriver, setwaitfordriver] = useState(false);



  const confirmedvehiclepanelref=useRef(null);
  const vehiclepanelref=useRef(null);
  const vehiclefoundref=useRef(null);
  const waitingfordriveref=useRef(null);

  const submitHandler = (e) => {
    e.preventDefault();
  };
// 1st animation
  useGSAP(() => {
    if (inputboxpos) {
      gsap.to(destionoptionpanel.current, {
        height: '70%',
        opacity: 1,
        padding: 24,
        duration: 0.3,
        overflow:'auto'
      });
      gsap.to(panelcloseref.current, {
        opacity: 1,
      });
    } else {
      gsap.to(destionoptionpanel.current, {
        height: 0,
        opacity: 0,
        padding: 0,
        duration: 0.3,
      });
      gsap.to(panelcloseref.current, {
        opacity: 0,
      });
    }
  }, [inputboxpos]);
  // 2nd animation
  useGSAP(() => {
    if (confirmedvehiclepanel) {
      gsap.to(confirmedvehiclepanelref.current, {
        height: '70%',
        opacity: 1,
        padding: 24,
        duration: 0.3,
        overflow:'auto',
        transform:'translateY(0%)'
      });
    } else {
      gsap.to(confirmedvehiclepanelref.current, {
        height: 0,
        opacity: 0,
        padding: 0,
        duration: 0.3,
        transform:'translateY(100%)',
        overflow:'hidden'
      });
    }
  }, [confirmedvehiclepanel]);


  // 3rd animation
  useGSAP(() => {
    if (vehiclepanel) {
      gsap.to(vehiclepanelref.current, {
        transform: 'translateY(0)',
        opacity: 1,
        display: 'block', // Ensure it appears
        duration: 0.3,
      });
    } else {
      gsap.to(vehiclepanelref.current, {
        transform: 'translateY(100%)',
        opacity: 0,
        duration: 0.3,
        onComplete: () => {
          vehiclepanelref.current.style.display = 'none'; // Hide after animation
        },
      });
    }
  }, [vehiclepanel]);
  
// 4th animation
useGSAP(() => {
  if (vehicleFound) {
    gsap.to(vehiclefoundref.current, {
      height: '70%',
      opacity: 1,
      padding: 24,
      duration: 0.3,
      overflow:'auto',
      transform:'translateY(0%)'
    });
  } else {
    gsap.to(vehiclefoundref.current, {
      height: 0,
      opacity: 0,
      padding: 0,
      duration: 0.3,
      transform:'translateY(100%)',
      overflow:'hidden'
    });
  }
}, [vehicleFound]);

// 4th animation
useGSAP(() => {
  if (waitfordriver) {
    gsap.to(waitingfordriveref.current, {
      height: '70%',
      opacity: 1,
      padding: 24,
      duration: 0.3,
      overflow:'auto',
      transform:'translateY(0%)'
    });
  } else {
    gsap.to(waitingfordriveref.current, {
      height: 0,
      opacity: 0,
      padding: 0,
      duration: 0.3,
      transform:'translateY(100%)',
      overflow:'hidden'
    });
  }
}, [waitfordriver]);




  return (
    <div className='h-screen relative flex flex-col lg:flex-row lg:justify-end  overflow-hidden'>
      {/* Left Side: Image */}
      <div
      onClick={(e)=>{
        
        e.stopPropagation();//to prevent bubbling
        
      setinputboxpos(0);
      setvehiclepanel(false);
    }}
      className='h-screen w-screen lg:w-[70%]'>
        <h1 className="text-5xl font-bold absolute left-5 top-5 text-[#FFCA20]">TaxiGo</h1>
        <img   className='h-full w-full object-cover' src="https://simonpan.com/wp-content/themes/sp_portfolio/assets/uber-challenge.jpg" alt="" />
      </div>

      {/* Right Side: Form */}
      <div className='absolute top-0 h-screen w-full flex flex-col justify-end lg:relative lg:w-[30%] lg:h-full lg:flex lg:justify-center lg:bg-white '>

        {/* Form Container */}
        <div className='h-[30%] lg:h-auto p-8 bg-white relative  '>
          {/* Close Icon */}
          <h5 ref={panelcloseref} className='absolute top-6 left-1 text-xl font-semibold opacity-0 transition-opacity duration-300'>
            <i className="ri-arrow-down-wide-line cursor-pointer"
              onClick={() => setinputboxpos(0)}
            ></i>
          </h5>

          <h4 className='text-3xl font-semibold mb-4'>Find a Trip</h4>
          <form onSubmit={submitHandler}>
            <div className="line absolute h-18 w-[3px] top-[47%] left-14 bg-gray-800 rounded-full"></div>
            <input className='bg-[#eee] px-12 py-2 text-base rounded-lg w-full mb-2 placeholder-gray-500 focus:ring focus:ring-gray-700 outline-none cursor-pointer'
              type="text" placeholder='Add a pickup location'
              value={pickup}
              onChange={(e) => setpickup(e.target.value)}
              onClick={(e) => {
                e.stopPropagation();
                console.log(inputboxpos);
                setinputboxpos(1)
                setvehiclepanel(false)
              }}
            />
            <input className='bg-[#eee] px-12 py-2 text-base rounded-lg mt-4 w-full placeholder-gray-500 focus:ring focus:ring-gray-700 outline-none cursor-pointer'
              type="text" placeholder='Enter your destination'
              value={destination}
              onChange={(e) => setdestination(e.target.value)}
              onClick={() =>{
                e.stopPropagation();
                setinputboxpos(1)
                setvehiclepanel(false)
              }}
            />
          </form>

        </div>

        {/* Location Search Panel (Hidden by default) */}
        <div className='bg-white lg:bg-white ' ref={destionoptionpanel} style={{ height: 0, opacity: 0,overflow:'hidden' }}>
          <LocationSearchPanel setinputboxpos={setinputboxpos} setvehiclepanel={setvehiclepanel} />
        </div>

      </div>
     
    {/* vehicle section div  */}
      <div ref={vehiclepanelref} className='fixed bottom-0 z-[10] bg-white w-full px-3 py-6 lg:absolute lg:w-[30%] '
      >
        
         <VehiclePanel setconfirmedvehiclepanel={setconfirmedvehiclepanel} setimage={setimage} setvehiclepanel={setvehiclepanel}/>

    </div>   
      <div ref={confirmedvehiclepanelref} className='fixed bottom-0 z-[10] min-h-[60%] bg-white w-full px-1 py-6 lg:absolute lg:w-[30%] '
      >
         <ConfirmedVehicle image={image} setvehiclepanel={setvehiclepanel} setconfirmedvehiclepanel={setconfirmedvehiclepanel} setvehicleFound={setvehicleFound}/>

    </div>   
      <div ref={vehiclefoundref} className='fixed bottom-0 z-[10] min-h-[60%] bg-white w-full px-1 py-6 lg:absolute lg:w-[30%] '
      >
         <LookingForDriver image={image} setvehicleFound={setvehicleFound}/>

    </div>   
      <div ref={waitingfordriveref}  className='fixed bottom-0 z-[10] min-h-[60%] bg-white w-full px-1 py-6 lg:absolute lg:w-[30%] '
      >
         <WaitForDriver image={image} setwaitfordriver={setwaitfordriver}/>

    </div>   




    </div>
  );
}

export default Home;