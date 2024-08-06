import { createContext } from "react";
export const AppContext = createContext();

const ContextProvider = (props) => {
    const phone = "135847534887875";
    const name = "ravi";
    return (
        <AppContext.Provider value={{ phone, name }}>

            {props.children}
        </AppContext.Provider>
    )
}

export default ContextProvider;
