import { NavLink } from "react-router-dom"

export const Link1 = () => {
    return (
        <>
            <div
                style={{
                    display: "flex",
                    background: "black",
                    padding: "5px 0 5px 5px",
                    fontSize: "20px",
                }}
            >

                <div style={{ margin: "10px" }}>
                    <NavLink
                        to="/"
                        style={({ isActive }) => ({
                            color: isActive
                                ? "greenyellow"
                                : "white",
                        })}
                    >
                        Home
                    </NavLink>
                </div>
                <div style={{ margin: "10px" }}>
                    <NavLink
                        to="/one"
                        style={({ isActive }) => ({
                            color: isActive
                                ? "greenyellow"
                                : "white",
                        })}
                    >
                        One
                    </NavLink>
                </div>
                <div style={{ margin: "10px" }}>
                    <NavLink
                        to="/two"
                        style={({ isActive }) => ({
                            color: isActive
                                ? "greenyellow"
                                : "white",
                        })}
                    >
                        usestate
                    </NavLink>
                </div>
                <div style={{ margin: "10px" }}>
                    <NavLink
                        to="/three"
                        style={({ isActive }) => ({
                            color: isActive
                                ? "greenyellow"
                                : "white",
                        })}
                    >
                        useEffect
                    </NavLink>
                </div>
                <div style={{ margin: "10px" }}>
                    <NavLink
                        to="/four"
                        style={({ isActive }) => ({
                            color: isActive
                                ? "greenyellow"
                                : "white",
                        })}
                    >
                        useRef
                    </NavLink>
                </div>
                <div style={{ margin: "10px" }}>
                    <NavLink
                        to="/five"
                        style={({ isActive }) => ({
                            color: isActive
                                ? "greenyellow"
                                : "white",
                        })}
                    >
                        useMemo
                    </NavLink>
                </div>
                <div style={{ margin: "10px" }}>
                    <NavLink
                        to="/six"
                        style={({ isActive }) => ({
                            color: isActive
                                ? "greenyellow"
                                : "white",
                        })}
                    >
                        useCallback
                    </NavLink>
                </div>
                <div style={{ margin: "10px" }}>
                    <NavLink
                        to="/seven"
                        style={({ isActive }) => ({
                            color: isActive
                                ? "greenyellow"
                                : "white",
                        })}
                    >
                        useContext
                    </NavLink>
                </div>
            </div>


        </>
    )
}