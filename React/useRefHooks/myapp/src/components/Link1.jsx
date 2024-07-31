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
            </div>


        </>
    )
}