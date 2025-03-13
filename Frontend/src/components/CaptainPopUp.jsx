import React from 'react'
import "@fontsource/poppins"; 

function CaptainPopUp({setcaptainpopup}) {
  return (
    <div className='font-poppins'>
        <h5 className='text-center cursor-pointer'
    onClick={(e)=>{
        e.stopPropagation();
        setcaptainpopup(false);
    }}
    >
    <i className="ri-arrow-down-wide-line text-2xl font-bold text-gray-400"></i>
    </h5>
    <h3 className='text-2xl font-semibold mb-1 ml-6'>New Ride Available</h3>
    <div className='flex items-center justify-between mr-4 ml-4  rounded-lg p-2 '>
        <div className='flex items-center justify-center gap-3'>
            <img src="https://cdn.pixabay.com/photo/2015/03/04/22/35/avatar-659652_640.png" alt="" className='h-12 rounded-full object-cover'/>
            <h2 className='text-lg font-medium'>Sayan Patel</h2>
        </div>
        <h5 className='text-base text-gray-500'>2.2km Away</h5>
    </div>
    <div className='flex gap-2 justify-between items-center flex-col'>
    <img src="" alt="" width={220} />
    <div className="details w-full flex flex-col gap-2 mt-2 lg:h-1/2">
      {/* user destination location */}
           <div 
           className='flex gap-4 items-center address  p-1 border-b-2 border-gray-300'>
           <i className="ri-map-pin-line text-xl font-bold"></i>
           <div>
            <h3 className='text-lg font-medium text-zinc-700'>567-43/A</h3>
            <p className='text-base text-zinc-600 '>Lorem ipsum dolor sit amet.</p>
           </div>
           </div>
           {/* user current location */}
           <div 
           className='flex gap-4 items-center p-2 border-b-2 border-gray-300 currentaddress '>
           <i className="ri-map-pin-5-fill text-xl font-bold"></i>
           <div>
            <h3 className='text-lg font-medium text-zinc-700'>567-43/A</h3>
            <p className='text-base text-zinc-600 -mt-1'>Lorem ipsum dolor sit amet.</p>
           </div>
           </div>
           <div
           className='flex gap-4 items-center p-2   paynment '
           >
            <i className="ri-cash-line text-[#6bd192] text-2xl font-bold"></i>
           <div>
            <h3 className='text-lg font-medium text-zinc-700'>₹198.20</h3>
            <p className='text-base text-zinc-600 -mt-1'>Cash only</p>
           </div>
           </div>
    </div>
{/* buttons */}
    <button 
    onClick={(e)=>{
      e.stopPropagation();
  }}
    className='min-w-2xl mt- bg-green-500 p-1 rounded-3xl  cursor-pointer text-xl text-white font-medium lg:min-w-md'>
      Accept
    </button>
    <button 
    onClick={(e)=>{
      e.stopPropagation();
      setcaptainpopup(false);
  }}
    className='min-w-2xl mt-2 bg-[#D71611] p-1 rounded-3xl  cursor-pointer text-xl text-white font-medium lg:min-w-md'>
      Ignore
    </button>


    </div>
    </div>
  )
}

export default CaptainPopUp