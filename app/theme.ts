'use client';
import { createTheme } from "@mui/material";
import { Poppins } from "next/font/google";
import { colors } from "@mui/material";

const poppins = Poppins({
    weight: ["100","200", "300", "400", "500", "600", "700",],
    subsets: ['latin']
    } )
    
const theme = createTheme(
    { typography: {
        fontFamily: poppins.style.fontFamily,
        button : {
            fontFamily: poppins.style.fontFamily,
            color: "#212121"
        }

        
    }
},
    { palette: {
        primary: {
            main: "#1B2430"
        },
        secondary:{
            main: "#F6FAF7"
        },
        iconColor: {
            main: "#383838"
        }
    }}
    
)

export default theme