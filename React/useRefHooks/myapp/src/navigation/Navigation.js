import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "../components/Home"
import One from "../pages/One"
import Two from "../pages/Two"
import { Three } from "../pages/Three"
import Four from "../pages/Four"
import Five from "../pages/Five"
import Six from "../pages/Six"
import Seven from "../pages/Seven"





export const NavigationFull = () => {
    return (
        <Routes>

            <Route path="/" element={<Home />} />
            <Route path="/one" element={<One />} />
            <Route path="/two" element={<Two />} />
            <Route path="/three" element={<Three />} />
            <Route path="/four" element={<Four />} />
            <Route path="/five" element={<Five />} />
            <Route path="/six" element={<Six />} />
            <Route path="/seven" element={<Seven />} />
        </Routes>
    )
}