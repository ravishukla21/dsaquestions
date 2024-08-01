import React, { useEffect, useRef, useState } from 'react'

const ExampleRef = () => {
    const [state,setState]=useState(0)
    let ref = useRef(state || 0);
console.log('====================================');
console.log(ref,"ref times");
console.log('====================================');
    function handleClick() {
        ref.current = ref.current + 1;
        // setState((prev)=>prev+1);
        alert('You clicked ' + ref.current + ' times!');
    }
    useEffect(()=>{
        console.log('====================================');
        console.log(ref,"first time");
        console.log('====================================');
        return ()=>{
            console.log(ref,"ref last time")
        }
    },[])

    return (
        <div>
            <h1>This component uses a ref to keep track of how many times the button was clicked. Note that it’s okay to use a ref instead of state here because the click count is only read and written in an event handler.</h1>


<h1>on click alert will be shown how many times you clicked the button this will not rerender the compoent</h1>
            <button className='p-2 bg-blue-500' onClick={handleClick}>
                Click me!
            </button>

        </div>
    )
}

export default ExampleRef
