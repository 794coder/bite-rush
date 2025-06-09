"use client"



import {MyContext} from "@/context/ThemeContext";

const ThemeProvider=({children})=>{
    const values={}
    return(
        <MyContext.Provider value={values}>
            {children}
        </MyContext.Provider>
    )
}

export default ThemeProvider