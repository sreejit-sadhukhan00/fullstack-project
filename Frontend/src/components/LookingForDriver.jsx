import React from 'react'

function LookingForDriver({image="",setvehicleFound}) {
  return (
    <div>
    <h5 className='text-center cursor-pointer'
    onClick={(e)=>{
        e.stopPropagation();
        setvehicleFound(false);
    }}
    >
    <i className="ri-arrow-down-wide-line text-3xl font-bold text-gray-400"></i>
    </h5>
    <h3 className='text-2xl font-semibold mb-5'>Looking For a Driver</h3>
    
    <div className='flex gap-2 justify-between items-center flex-col'>
        
    <img src={image} alt="" width={220} />
    <div className="details w-full flex flex-col gap-8 mt-4 lg:h-1/2">
      {/* user destination location */}
           <div 
           className='flex gap-4 items-center address  p-2 border-b-2 border-gray-300'>
           <i className="ri-map-pin-line text-xl font-bold"></i>
           <div>
            <h3 className='text-lg font-medium text-zinc-700'>567-43/A</h3>
            <p className='text-base text-zinc-600 -mt-1'>Lorem ipsum dolor sit amet.</p>
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
    </div>
 
    </div>
  )
}

export default LookingForDriver