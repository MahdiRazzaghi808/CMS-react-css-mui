import React, { useEffect, useContext, useState } from 'react'
// mui setting rtl and them
import { ThemeProvider } from "@mui/material"
import { createTheme } from "@mui/material";
import rtlPlugin from 'stylis-plugin-rtl';
import { prefixer } from 'stylis';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
// context
import { ThemContext } from '../context/ThemContextProvider';

// setting 
const cacheRtl = createCache({
    key: 'muirtl',
    stylisPlugins: [prefixer, rtlPlugin],
});


const lightCommonState = {
    header: '#3f3f3f',
    odd: '#6a6a6a',
    even: '#545454',
    text: '#fff',
}

const darkCommonState = {
    header: '#1d202a',
    odd: '#232a3b',
    even: '#1e2533',
    text: '#fff',
}


function MuiProvider({ children }) {

    const [state, setState] = useContext(ThemContext)

    const [commonThem, serCommonThem] = useState(lightCommonState)


    useEffect(() => {
        (state === 'dark') ? serCommonThem(darkCommonState) : serCommonThem(lightCommonState)
    }, [state])



    const theme = createTheme({
        palette: {
            mode: state,

            common: commonThem

        },
        typography: {
            fontFamily: `"yekan","Roboto"`
        },
        direction: "rtl"

    })
console.log('mui setting');

    return (
        <CacheProvider value={cacheRtl}>
            <ThemeProvider theme={theme}>
                {children}
            </ThemeProvider>
        </CacheProvider>
    )
}

export default MuiProvider