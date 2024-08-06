import React, { useEffect, useRef, useState } from 'react'

const Four = () => {

    const inputElement = useRef();
    const btnClicked = () => {
        console.log(inputElement.current);
        inputElement.current.style.background = "blue";
    }
    return (
        <div>
            <h1>four use ref hook</h1>
            <input ref={inputElement} type="text" className='border border-gray-300 rounded-md p-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500' />
            <button onClick={btnClicked}> Click Here</button>

        </div>
    )
}

export default Four
