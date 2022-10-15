import React, {useEffect} from 'react';
import {
  Box,
  Button,
  FormControl,
  InputLabel, MenuItem, Select,
  Typography
} from "@mui/material";
import {warrantyButtons, scooters} from '../data/data'
import {useParams} from "react-router-dom";
import {
  setBayNow,
  setCart,
  setWarrantyObj,
  setFormValue
} from "../features/projectSlice";
import {useDispatch, useSelector} from "react-redux";
import OtherScooters from "../components/OtherScooters";

const KickScooterDetails = () => {
  const dispatch = useDispatch();
  const {id} = useParams();
  const {warrantyObj, formValue} = useSelector(state => state.project)
  const findItem = scooters.find(item => item.id === Number(id))

  const orderHandler = (item) => {
    dispatch(setBayNow({
      ...item, warrantyPeriod: warrantyObj.period,
      warrantyCost: warrantyObj.value
    }))
  }

  const cartHandler = (item) => {
    warrantyObj ? dispatch(setCart({
      ...item, id: item.name + warrantyObj.value,
      warrantyPeriod: warrantyObj.period,
      warrantyCost: warrantyObj.value
    })) : dispatch(setCart({...item}));
  }

  const handleChange = (event) => {
    dispatch(setFormValue(event.target.value));
  }

  useEffect(() => {
    const findItem = warrantyButtons.find(item => item.id === formValue);
    dispatch(setWarrantyObj(findItem))
  }, [dispatch, formValue])

  return (
    <Box sx={{flex: '1 1 auto', marginY:'30px'}}>
      <Box sx={{
        width: '80%',
        mx: 'auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: {xs: 'column', md: 'row'}
      }}>
        <Box sx={{width: {xs: '100%', md: '30%', margin:'30px 0'}}}>
          <img className='mx-auto my-5' src={findItem.imageURL} alt="kick-scooter"/>
        </Box>
        <Box sx={{width: {xs: '100%', md: '30%'}}}>
          <Typography variant='h4'
                      color='text.primary'>{findItem.name}</Typography>
          <Box display='flex' justifyContent='space-between'
               color='text.secondary' mt='15px'>
            <Typography fontSize='18px'>Age, years: </Typography>
            <Box width='20px' flex='0.9' mb='8px'
                 borderBottom='1px dashed #999999'></Box>
            <Typography fontSize='18px'>14-60</Typography>
          </Box>
          <Box display='flex' justifyContent='space-between'
               color='text.secondary'>
            <Typography fontSize='18px'>Max weight, kg: </Typography>
            <Box width='20px' flex='0.9' mb='8px'
                 borderBottom='1px dashed #999999'></Box>
            <Typography fontSize='18px'>{findItem.loadCapacity}</Typography>
          </Box>
          <Box display='flex' justifyContent='space-between'
               color='text.secondary'>
            <Typography fontSize='18px'>Max speed, mph: </Typography>
            <Box width='20px' flex='0.9' mb='8px'
                 borderBottom='1px dashed #999999'></Box>
            <Typography fontSize='18px'>{findItem.speed}</Typography>
          </Box>
          <Box display='flex' justifyContent='space-between'
               color='text.secondary'>
            <Typography fontSize='18px'>Max corner, dec: </Typography>
            <Box width='20px' flex='0.9' mb='8px'
                 borderBottom='1px dashed #999999'></Box>
            <Typography fontSize='18px'>{findItem.maxCorner}</Typography>
          </Box>
          <Box display='flex' justifyContent='space-between'
               color='text.secondary'>
            <Typography fontSize='18px'>Range, m: </Typography>
            <Box width='20px' flex='0.9' mb='8px'
                 borderBottom='1px dashed #999999'></Box>
            <Typography fontSize='18px'>{findItem.range}</Typography>
          </Box>
          <Box display='flex' justifyContent='space-between'
               color='text.secondary'>
            <Typography fontSize='18px'>Battery volume, mAh: </Typography>
            <Box width='20px' flex='0.9' mb='8px'
                 borderBottom='1px dashed #999999'></Box>
            <Typography fontSize='18px'>{findItem.battery}</Typography>
          </Box>
          <Box display='flex' justifyContent='space-between'
               color='text.secondary'>
            <Typography fontSize='18px'>Power, W: </Typography>
            <Box width='20px' flex='0.9' mb='8px'
                 borderBottom='1px dashed #999999'></Box>
            <Typography fontSize='18px'>{findItem.watt}</Typography>
          </Box>
        </Box>
        <Box sx={{width: {xs: '50%', md: '30%', margin:'30px 0'}}}>
          <Typography variant='h5' textAlign='center'>
            Price: ${findItem.cost}
          </Typography>
          <Box minWidth='150px' my='20px'>
            <FormControl fullWidth>
              <InputLabel>Warranty</InputLabel>
              <Select
                value={formValue}
                onChange={handleChange}
                label='Warranty'
              >
                {warrantyButtons.map(item => (
                  <MenuItem key={item.id}
                            value={item.id}>{item.title}</MenuItem>
                ))}
                <MenuItem value=''><em>None</em></MenuItem>
              </Select>
            </FormControl>
          </Box>
          <Box display='flex' flexDirection='row'
               justifyContent='space-between'>
            <Button sx={{
              bgcolor: 'primary.main',
              color: 'text.white',
              textTransform: 'uppercase',
              fontSize: {xs: '14px', md: '14px'},
              width: '45%',
              ':hover': {bgcolor: 'primary.main'}
            }} onClick={() => orderHandler(findItem)}>Buy it now</Button>
            <Button sx={{
              bgcolor: 'primary.main',
              color: 'text.white',
              textTransform: 'uppercase',
              fontSize: {xs: '14px', md: '14px'},
              width: '45%',
              ':hover': {bgcolor: 'primary.main'}
            }} onClick={() => cartHandler(findItem)}
            >add to cart</Button>
          </Box>
        </Box>
      </Box>
      <Box width='80%' mx='auto' color='text.primary' mb='30px'>
        <Typography variant='h6' lineHeight='2.5' textTransform='capitalize'>
          Quick Folding System
        </Typography>
        <Typography textAlign='justify'>
          {findItem.name} can be folded with ease in a mere 3 clicks. Easy to
          transport, store, and take to any destination.
        </Typography>
        <Typography variant='h6' lineHeight='2.5' textTransform='capitalize'>
          Highly Elevated Riding Experience
        </Typography>
        <Typography textAlign='justify'>
          Scooter is equipped with the newly
          upgraded Pneumatic tires, which provides an elevated driving
          experience with the combination of comfort and shock absorption
          features, designed to increase riding safety.
        </Typography>
        <Typography variant='h6' lineHeight='2.5' textTransform='capitalize'>
          Regenerative Braking System
        </Typography>
        <Typography textAlign='justify'>
          {findItem.name} features a regenerative braking system that turns the
          scooter into an electric vehicle powered by electricity and recycled
          energy from riding. Energy will be collected from regenerative braking
          and distributed when you need a boost, which enhances the user.
        </Typography>
        <Typography variant='h6' lineHeight='2.5' textTransform='capitalize'>
          Segway-Ninebot App Connectivity
        </Typography>
        <Typography textAlign='justify'>
          Connect the {findItem.name} with Segway-Ninebot app through
          Bluetooth to check your riding speed and remaining battery. You can
          also upgrade the scooter firmware over-the-air and monitor riding
          data, which enhances your overall riding experience.
        </Typography>
        <Typography variant='h6' lineHeight='2.5' textTransform='capitalize'>
          Extraordinary Functionality to Upgrade your Riding Experience
        </Typography>
        <Typography textAlign='justify'>
          {findItem.name} strives to reach new heights of performance. When you
          ride
          on the road, the stronger brushless direct current motor delivers a
          fast and sturdy riding experience.
        </Typography>
      </Box>
      <Box maxWidth='90%' mx='auto'>
        <OtherScooters displayedElementId={id}/>
      </Box>
    </Box>
  );
}

export default KickScooterDetails