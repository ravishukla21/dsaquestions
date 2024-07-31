import React, { useState, useRef, useEffect, useCallback } from 'react'

const One = () => {
    const [state, setState] = useState(10);
    const passwordRef = useRef(null);
    const [length, setLength] = useState(6);
    const [numberAllowed, setNumberAllowed] = useState(false);
    const [charAllowed, setCharAllowed] = useState(false);
    const [Password, setPassword] = useState("");

    const handleClick = () => {
        //copy password to clipboard
        window.navigator.clipboard.writeText(Password);
        passwordRef.current.style.backgroundColor = "gray";
        passwordRef.current.select();
        alert("text copied");
        console.log("button click")

    }
    const generatePassword = useCallback(() => {
        //logic what is memoization
        let pass = { passwordRef };
        let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
        if (numberAllowed) str += "0123456789";
        if (charAllowed) str += "!@#$%^&*()_+";
        for (let i = 1; i < length; i++) {
            const char = Math.floor(Math.random() * str.length + 1);
            pass += str.charAt(char);

        }
        setPassword(pass);

    }, [length, numberAllowed, charAllowed])

    useEffect(() => {

        generatePassword()
    }, [length, numberAllowed, charAllowed])
    return (
        <div>
            <h1>Password generator</h1>
            <div className='flex items-center' >
                <div>

                    <img src="./logo192.png"></img>
                </div>
                <div className='my-2  '>

                    <div className='py-2'>

                        <input className='w-auto px-4 py-2 border border-red-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition ease-in-out duration-150' type="text"
                            ref={passwordRef}
                            value={Password}
                            readOnly

                            placeholder='Password'
                            onChange={(e) => { console.log(e.target.value) }} />
                    </div>
                    <div className='py-2'>


                        <button className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition ease-in-out duration-150" onClick={() => handleClick()}>Copy</button>
                        <div>


                            <input type="range" name="length"
                                id=""
                                min={6}
                                max={20}
                                value={length}
                                onChange={(e) => setLength(e.target.value)}
                            />
                            <label htmlFor="length">Length:{length}</label>
                        </div>

                        <div>
                            <input type="checkbox" name="number"
                                id=""
                                defaultChecked={numberAllowed}
                                onChange={() => {
                                    setNumberAllowed((prev) => !prev)
                                }}
                            />
                            <label htmlFor="number">Numbers</label>
                        </div>
                        <div>
                            <input type="checkbox" name="charinput"
                                id=""
                                defaultChecked={charAllowed}
                                onChange={() => {
                                    setCharAllowed((prev) => !prev)
                                }}
                            />
                            <label htmlFor="charinput">Characters</label>
                        </div>
                    </div>
                </div>
            </div>



        </div>
    )
}

export default One
