import React, { useContext } from 'react'
import { AppContext } from './AppContext'

const Contact = () => {
    const { phone, name } = useContext(AppContext);

    return (
        <div>
            <h1>Contact</h1>
            <h2>name:{name}</h2>
            <h2>phone:{phone}</h2>
        </div>
    )
}

export default Contact
