import React, { useState, useRef } from 'react'

const StopWatch = () => {
    const [startTime, setStartTime] = useState(null);
    const [now, setNow] = useState(null);
    const intervalRef = useRef(null);
    console.log(startTime, "starttime");
    console.log(now, "now");
    console.log(intervalRef, "intervalref");
    function handleStart() {
        // const now = new Date(); // Current date and time
        // console.log(now.toString()); // Human-readable format
        // console.log(now.toISOString()); // ISO 8601 format

        setStartTime(Date.now());
        setNow(Date.now());

        clearInterval(intervalRef.current);
        intervalRef.current = setInterval(() => {
            setNow(Date.now());
        }, 10);
    }

    function handleStop() {
        clearInterval(intervalRef.current);
    }

    let secondsPassed = 0;
    if (startTime != null && now != null) {
        secondsPassed = (now - startTime) / 1000;
        console.log('====================================');
        console.log(secondsPassed, "scondspassed");
        console.log('====================================');

    }

    return (
        <>
            <h1>Time passed: {secondsPassed.toFixed(3)}</h1>
            <button onClick={handleStart}>
                Start
            </button>
            <button onClick={handleStop}>
                Stop
            </button>
        </>
    );
}

export default StopWatch
