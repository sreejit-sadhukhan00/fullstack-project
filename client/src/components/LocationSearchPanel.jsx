import React from 'react'

function LocationSearchPanel({setinputboxpos,setvehiclepanel,suggetions,activefield,setpickup,setdestination}) {
    const handleClick=(location)=>{
        if(activefield==='pickup'){
          setpickup(location.description);
        }
        else{
          setdestination(location.description);
        }
    }
  return (
    <div className='pl-6  overflow-scroll '>
        {/* this is just a sample data */}

        {suggetions.map((location,index)=>(
           <div key={index} className='flex border-2 border-transparent active:border-black p-2 rounded-2xl items-center gap-6 cursor-pointer 3 my-2 '
           onClick={()=>{
            handleClick(location);
           }}
           >
           <h2 className='bg-[#eee] h-10 w-10 min-w-10 lg:w-12 lg:h-12 lg:min-w-12 rounded-full flex items-center justify-center'>
     <i className="ri-map-pin-line text-xl lg:text-2xl"></i>
       </h2>
       <h4 className='text-lg font-medium '>{location.description}</h4>
           </div>
        ))}
        
        
       
        
    </div>
  )
}

export default LocationSearchPanel