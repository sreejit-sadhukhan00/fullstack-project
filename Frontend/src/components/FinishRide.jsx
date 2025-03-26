import {useNavigate} from 'react-router-dom'
import axios from 'axios';

function FinishRide({setfinishRidePanel,ride}) {
  
const navigate=useNavigate();


const endRide=async()=>{
  const response=await axios.post(`${import.meta.env.VITE_BASE_URL}/rides/end-ride`,
    {rideId:ride?.ride._id
     },
    {
      headers:{
        Authorization:`Bearer ${localStorage.getItem('captainToken')}`
      }
    })
    if(response.status===200){
      navigate('/captain-home');
    }
}
  return (
    <div className=''>
        <h5 className='text-center cursor-pointer'
    onClick={(e)=>{
        e.stopPropagation();
        setfinishRidePanel(false);
    }}
    >
    <i className="ri-arrow-down-wide-line text-2xl font-bold text-gray-400"></i>
    </h5>
     <div className='flex ml-6 items-center'>
     <img src="https://cdn-icons-png.flaticon.com/512/2344/2344011.png" alt=""  width={40} className='font-bold'/>
     <h3 className='text-2xl font-semibold mb-1 ml-6'>Finish the Ride</h3>
     </div>
      
    <div className='flex items-center justify-between mr-4 ml-4  rounded-lg p-2 '>
        <div className='flex items-center justify-center gap-3'>
            <img src="https://cdn.pixabay.com/photo/2015/03/04/22/35/avatar-659652_640.png" alt="" className='h-12 rounded-full object-cover'/>
            <h2 className='text-lg font-medium'>{ride?.ride.user.fullname.firstname+" "+ride?.ride.user.fullname.lastname}</h2>
        </div>
        <h5 className='text-xl text-gray-700'>Reached Destination</h5>
    </div>
    <div className='flex gap-2 justify-between items-center flex-col'>
    <img src="" alt="" width={220} />
    <div className="details w-full flex flex-col gap-2 mt-2 lg:h-1/2">
      {/* user destination location */}
           <div 
           className='flex gap-4 items-center address  p-1 border-b-2 border-gray-300'>
           <i className="ri-map-pin-line text-xl font-bold"></i>
           <div>
            {/* <h3 className='text-lg font-medium text-zinc-700'>567-43/A</h3> */}
            <p className='text-base text-zinc-600 '>{ride?.ride.pickup}</p>
           </div>
           </div>
           {/* user current location */}
           <div 
           className='flex gap-4 items-center p-2 border-b-2 border-gray-300 currentaddress '>
           <i className="ri-map-pin-5-fill text-xl font-bold"></i>
           <div>
            {/* <h3 className='text-lg font-medium text-zinc-700'>567-43/A</h3> */}
            <p className='text-base text-zinc-600 -mt-1'>{ride?.ride.destination}</p>
           </div>
           </div>
           <div
           className='flex gap-4 items-center p-2   paynment '
           >
            <i className="ri-cash-line text-[#6bd192] text-2xl font-bold"></i>
           <div>
            <h3 className='text-lg font-medium text-zinc-700'>₹{ride?.ride.fare}</h3>
            <p className='text-base text-zinc-600 -mt-1'>Cash only</p>
           </div>
           </div>
    </div>
{/* form for otp */}

{/* buttons */}
    <div className='flex flex-col'>
        
         <button
         onClick={endRide}
    className='min-w-2xl text-center bg-green-500 p-1 rounded-3xl  cursor-pointer text-xl text-white font-medium lg:min-w-md'>
      Finish Ride
    </button>
 
 <p className='mt-2 ml-2 text-sm text-gray-400'>Click on finish ride if you have recieved the payment</p>
       
   
    </div>

    </div>
    </div>
  )
}

export default FinishRide