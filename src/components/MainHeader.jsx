import React from 'react';
import {Avatar, Box, Typography} from "@mui/material";
import Logo from "../data/images/LOGO.png";
import MaxNiklsen from '../data/images/team/Max Niklsen.png'

const MainHeader = () => {

  return (
    <Box width='80%' display='flex' alignItems='center' m='15px auto'
         justifyContent='space-between' maxHeight='160px'
         sx={{flexDirection: {xs: 'column', md: 'row'}}}>
      <img src={Logo} alt='logo'/>
      <Box display='flex'
           alignItems='center' flexDirection='row'>
        <Avatar src={MaxNiklsen} alt='shop-assistant'
                sx={{height: '63px', width: '63px', mr: '15px'}}/>
        <Box>
          <Typography fontWeight={700} color='secondary.main'
                      textTransform='uppercase'
                      fontSize='13px'>Max Niklsen</Typography>
          <Typography color='text.blue' fontSize='13px'>Ask a question<br/>
            to the sales manager</Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default MainHeader