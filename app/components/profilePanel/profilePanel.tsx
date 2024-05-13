import { Box } from "@mui/material"
import { AccountCircle } from "@mui/icons-material"

const ProfilePanel = () => {
    return(
        <Box>
        <Box sx={{height:"15vh", display:"flex", justifyContent:"center",}}> <AccountCircle sx={{fontSize:50, pt:5, color:"#7c4dff",}}/></Box>
        <Box sx={{height:"85vh", display:"flex", justifyContent:"center", }}>
          {/* <AccountCircle sx={{fontSize:50, color:"primary.main",}}/> */}
        </Box>
        </Box>
    )
}
export default ProfilePanel