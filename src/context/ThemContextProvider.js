import React, { createContext, useEffect, useState } from 'react'

export const ThemContext = createContext()

function ThemContextProvider({ children }) {

    const [them, setThem] = useState('light');

    console.log('dark context');
    useEffect(() => {

        localStorage.getItem('dark-them') ? setThem(localStorage.getItem('dark-them')) : localStorage.setItem('dark-them', them)
    }, [])

    return (
        <ThemContext.Provider value={[them, setThem]}>
            {children}
        </ThemContext.Provider>
    )
}

export default ThemContextProvider