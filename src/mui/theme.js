import { createTheme } from "@mui/material";
const selected = "dark";
const theme = createTheme({
    palette: {
        mode: selected,
        // common:{
        //     black:'#232a3b',
        //     white:'#fff'
        // }
    },
    typography: {
        fontFamily: `"yekan","Roboto"`
    },
    direction: "rtl"

})

export { theme }