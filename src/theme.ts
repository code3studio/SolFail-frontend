import { createTheme } from "@mui/material";

export const theme = createTheme({breakpoints:{
    values :{
        // extra-small
        xs: 0,
        // small
        sm: 600,
        // medium
        md: 900,
        // large
        lg: 1200,
        // extra-large
        xl: 1400,
        },
        
},
palette: {
    primary:{
        main:"#c74ae3"
    }
},
typography:{
    caption:{fontWeight:900},
    h6:{
        fontWeight:900,
       fontSize:"26px"
    },
    body1:{
        fontSize:"14px",
        lineHeight:'24px',
        fontWeight:400
    },
    body2:{
        fontSize:"20px",
        fontWeight: 700,
    }
    
},components:{
    MuiButton:{
        styleOverrides:{
            root:{
                ":focus":{
                    outline:'none'
                },
                minWidth:'0 !important'
            }
        }
    }
}
})