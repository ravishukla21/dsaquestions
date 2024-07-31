import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "../components/Home"
import One from "../pages/One"

export const NavigationFull = () => {  
    return (
        <Routes>

            <Route path="/" element={<Home/>} />
            <Route path="/one" element={<One/>} />
        </Routes>
    )
}