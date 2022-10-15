import React from 'react';
import {accessories} from '../data/data'
import {Box, Button, Card, CardContent, Grid, Typography} from "@mui/material";
import {useDispatch} from "react-redux";
import {setCart} from "../features/projectSlice";

const Accessories = () => {
  const dispatch = useDispatch();

  const handlerDevices = (item) => {
    dispatch(setCart({...item, accessories: true}))
  }

  return (
    <Box width='90%' mx='auto'>
      <Typography textTransform='uppercase' textAlign='center'
                  fontSize='50px' fontWeight={700}
                  color='text.primary'>accessories</Typography>
      <Box my='30px'>
        <Grid container rowGap={2}>
          {accessories.map(item => (
            <Grid item key={item.id} xs={12} sm={6} md={4}>
              <Card sx={{
                height: '100%',
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'center',
                p: '10px',
                boxShadow: 'none'
              }}>
                <img className='h-24' src={item.imageURL} alt={item.name}/>
                <Box sx={{display: 'flex', flexDirection: 'column'}}>
                  <CardContent sx={{flex: '1 1 auto'}}>
                    <Typography textTransform='uppercase' fontSize='24px'
                                fontWeight={700} textAlign='center'
                                color='text.primary'
                                py='10px'>{item.name}</Typography>
                    <Typography textAlign='center' color='text.secondary'
                                fontSize='13px'>{item.description}</Typography>
                  </CardContent>
                  <Typography textAlign='center' fontSize='18px'
                              color='text.primary'
                              p='10px'>${item.cost}</Typography>
                </Box>
                <Button onClick={() => handlerDevices(item)}
                        variant='outlined'
                        size='small'
                        sx={{
                          color: 'text.secondary',
                          borderColor: 'text.secondary',
                          ':hover': {
                            bgcolor: 'primary.main',
                            borderColor: 'primary.main',
                            color: 'text.white'
                          }
                        }}>Add To Card</Button>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}

export default Accessories