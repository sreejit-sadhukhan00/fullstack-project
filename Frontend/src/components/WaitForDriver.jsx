import React from 'react'

function WaitForDriver({image="",setwaitfordriver}) {
  
  return (
    <div>
    <h5 className='text-center cursor-pointer'
    onClick={(e)=>{
        e.stopPropagation();
        setwaitfordriver(false);
    }}
    >
    <i className="ri-arrow-down-wide-line text-3xl font-bold text-gray-400"></i>
    </h5>
    
    <h3 className='text-2xl font-semibold mb-5'>Meet Driver At Pick-up Loaction</h3>
    
    <div className='flex gap-2 justify-between items-center flex-col'>
        
        <div className='flex justify-between pr-8 pl-8 items-center w-full'>
        <div>
        <img src="download.png" alt="" width={80} className='rounded-full ' />
        </div>
        <div className='text-right '>
          <h1 className='text-xl font-semibold'>Driver name</h1>
          <h4 className='text-lg font-bold ml-6'>car number</h4>
          <p className='text-base ml-6 text-gray-500'>car name</p>
        </div>
        </div>
    
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

export default WaitForDriver;