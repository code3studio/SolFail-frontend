import { Box, Container, Divider, Grid, Typography, styled } from '@mui/material'
import ExplorerInput from './ExploerInput'
import solLogo from '../../assets/solPriceLogo.webp'

type Props = {}

const RootHeader=styled(Box)(({}) => ({
   
        backgroundImage:'url(banner-header-1.svg)',
        backgroundPosition:'center',
        backgroundRepeat:"no-repeat",
        // minHeight:200,
        position:'absolute',
        top:0,
        right:0,
        left:0,
        // width:"100vw",
        padding:'0.5rem'
    
}))

const Header = (_props: Props) => {
  return (
    <RootHeader> 
        <Container maxWidth="xl">
          <Grid container >

          <Typography variant="h6" color={"azure"}>FailSol </Typography>
          <Box sx={{width: "fit-content",height:'fit-content',bgcolor:"#ffffff33",borderRadius:2,backdropFilter:'blue(15px)',display:'flex',justifyContent:'center',alignItems:'center', ml:4,px:2}}>
            <img src={solLogo} width={20}/> 
            <Typography mx={1}  variant='caption' color={"azure"}>$172.02</Typography>
            <Divider sx={{ height: 28, m: 0.5,bgcolor:"white" }} orientation="vertical" />
            <Typography mx={1} variant='caption'  color={"azure"}>MC: $76.91 B</Typography>
          </Box>
          </Grid>
          <ExplorerInput/>
     
        </Container>
    </RootHeader>
  )
}

export default Header