import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';


const ResponsiveAppBar = () => {

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
          >
         <Avatar sx={{ bgcolor:'rgb(13,188,202)' }} alt="Asmae Loussaoui" src="/static/images/avatar/2.jpg" style={{marginRight:'10px'}} /> <div style={{marginTop:'5px'}} > Loussaoui Asmae </div> 
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;