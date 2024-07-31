import React, { useRef, useState } from 'react'
import ExampleRef from './ExampleRef';
import StopWatch from './StopWatch';

const Home = () => {
    const [state,setState]=useState("");
    const firstInput=useRef();
    const secondInput=useRef();
    const handleClick=()=>{
console.log('====================================');
console.log(state,"state");
console.log('====================================');
firstInput.current.style.width="100px";
firstInput.current.style.height="150px";
secondInput.current.style.height="200px";
    }
  return (
    <div>
      <h1>this is home page</h1>
      <input className='w-20 px-4 py-2 border border-red-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition ease-in-out duration-150' ref={firstInput} type="text" onChange={(e)=>{setState(e.target.value)}}/>
      <button className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition ease-in-out duration-150" onClick={()=>handleClick()}>click</button>
      <input  className='w-20 px-4 py-2 border border-red-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition ease-in-out duration-150' ref={secondInput} type="number" onChange={(e)=>{
        setState(e.target.value)
      }}/>
      {/* <ExampleRef/> */}
      <StopWatch/>
    </div>
  )
}

export default Home
