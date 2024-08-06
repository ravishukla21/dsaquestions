import React, { useMemo, useState } from 'react'

const Five = () => {
    const [number, setNumber] = useState(0);
    const [counter, setCounter] = useState(0);

    function cubeNum(num) {
        console.log("calculation done")
        return Math.pow(num, 3)
    }
    const result = useMemo(() => { return cubeNum(number) }, [number]);
    return (
        <div>
            <div className="color-red">
                <h1>five.jsx use memo</h1>
            </div>
            <input className='border border-gray-300 rounded-md p-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500' type="number" onChange={(e) => setNumber(e.target.value)} value={number} />
            <h1>Cube of this number:{result}</h1>
            <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' onClick={() => setCounter((prev) => prev + 1)}>Counter++</button>
            <h1>Counter:{counter}</h1>
        </div>
    )
}

export default Five
