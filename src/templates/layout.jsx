import Grid from '@mui/material/Unstable_Grid2';
import {Box, CssBaseline} from '@mui/material';

function Layout({children}) {
    return (
      <Box style={{display: "flex", textAlign: "center", height: "100vh"}}>
        <CssBaseline />
        <Grid container style={{paddingLeft: "50px", paddingRight: "50px"}} sx={{ flexgrow: 1 }} spcing={2}>
            <Grid item flexBasis={100} > NAVIGATION</Grid>
            <Grid item flex={2} spacing={20}>
                <Grid xs={4}>HEADER</Grid>
                <Grid xs={4}>USER INPUT</Grid>
                <Grid xs={4}>THREAD</Grid>
            </Grid>
            <Grid item flex={1}> 
                <Grid xs={3} >SEARCH</Grid>
                <Grid xs={3} > CONTAINER 1</Grid>
                <Grid xs={3} > CONTAINER 2</Grid>
                <Grid xs={3} > CONTAINER 3</Grid>
            </Grid>
        </Grid>
      </Box>
    );
}

export default Layout;