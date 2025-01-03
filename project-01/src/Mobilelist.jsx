import React from 'react';

 function Mobilelist(props) {
   const {img,name}=props
   
  return (
    <div className='w-50 mr-3 pt-5 pr-1 ' >
    <div className='flex center items-center mt-5  border-2 rounded-lg mx-3 hover:shadow-md' >
    <div className='mx-5 w-20 rounded-full pt-4 pb-4'>
        <img src={img} />
    </div>
    <div className='' ><h2 className='mx-8 font-bold '>{name}</h2>
    <button className='rounded-full  border-2 w-40 mt-2 bg-violet-600 focus:outline-none focus:ring focus:ring-red-700 pt-1 pb-1 text-white  font-bold hover:shadow'>Add to Cart</button>
    </div>
    </div>
    </div>
  )
}
export default Mobilelist;
