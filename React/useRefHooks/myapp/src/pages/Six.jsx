import React, { useCallback, useState } from 'react'
import Header from '../components/Header';

const Six = () => {
    const [count, setCount] = useState(0);
    const newFn = useCallback(() => {
        console.log("callback")
    }, [count])

    return (
        <div>
            <h1>usecallback hook sixjs</h1>
            <Header newFn={newFn} />
            <h1>{count}</h1>
            <button onClick={() => setCount((prev) => prev + 1)
            }>Click here</button>

        </div>
    )
}

export default Six
