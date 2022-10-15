import React from 'react';
import {Paper, Stack, Box} from "@mui/material";
import {footerItems} from "../data/data";
import {styled} from '@mui/material/styles'
import {useSelector} from "react-redux";

const Item = styled(Paper)(({theme}) => ({
  backgroundColor: theme.palette.secondary.main,
  textAlign: 'center',
  color: theme.palette.text.secondary,
  boxShadow: 'none',
  textTransform: 'uppercase',
  fontSize: '13px',
}));

const Footer = () => {
  const {windowWidth} = useSelector(state => state.project)
  return (
    <Box width='100%' bgcolor='secondary.main' display='flex'
         alignItems='center' justifyContent='center'
         p={windowWidth <= 1050 ? '10px' : '30px'}>
      <Stack direction={windowWidth <= 1050 ? 'column' : 'row'}
             spacing={windowWidth <= 1050 ? 1 : 4}>
        {footerItems.map((item) => (
          <Item key={item.id}>
            {item.title}
          </Item>
        ))}
      </Stack>
    </Box>
  );
}

export default Footer