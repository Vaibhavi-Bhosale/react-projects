import React, { useState } from "react";

export const CardContext = React.createContext();

const CardContextProvider = ({children})=>{
    const [data, setData] = useState([])
    return(
        <CardContext.Provider value={{data , setData}}>
             {children}
        </CardContext.Provider>
    )
}

export default CardContextProvider ;