import React, { useState } from 'react'

function Two() {
    const [count, setCount] = useState(0);

    const changeColor = () => {
        // setCount(count + 1);
        // setCount(count + 1);
        // setCount(count + 1);
        // setCount(count + 1);

        setCount((prev) => prev + 1);
        setCount((prev) => prev + 1); setCount((prev) => prev + 1); setCount((prev) => prev + 2);

    };
    return (
        <div>
            <h1>count:{count}</h1>
            <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' onClick={changeColor}>Blue</button>
        </div>
    )
}

export default Two
