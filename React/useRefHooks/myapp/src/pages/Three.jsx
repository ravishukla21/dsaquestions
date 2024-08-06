import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

export const Three = () => {
    const [count, setCount] = useState(0);
    const [check, setCheck] = useState(0);

    useEffect(() => {
        const interval = setTimeout(() => {
            console.log("useeffect runs")
            //console.log("Current count:", count);
            // Using count + 1
            // setCount(count + 1);

            // Uncomment the line below and comment out the line above to see the difference
            setCount((prev) => {
                console.log("Previous count:", prev);
                return prev + 1;
            });
        }, 2000);

        return () => clearTimeout(interval); // Cleanup the interval on component unmount
    }, [count]);

    const handleIncrease = () => {
        console.log("Increased check");
        setCheck((prev) => prev + 1);
    };

    return (
        <div>
            <h1>Three</h1>
            <h1>Text I have rendered {count} times</h1>
            <button onClick={handleIncrease}>Click me {check}</button>
        </div>
    );
};
