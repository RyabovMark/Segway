import React from 'react';
import {Box, Button, ButtonGroup, Chip, List, Typography} from "@mui/material";
import {payments, warrantyButtons, newCollectionScooters} from "../data/data";
import accessories from "../data/images/accessories.png";
import {useDispatch, useSelector} from "react-redux";
import {
  setBayNow,
  setCart,
  setWarrantyObj,
} from "../features/projectSlice";
import {Link, useNavigate} from "react-router-dom";

const OrderSection = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {
    warrantyObj,
    newCollectionTabsValue
  } = useSelector(state => state.project);

  const warrantyHandler = (item) => {
    warrantyObj.id === item.id ? dispatch(setWarrantyObj({})) : dispatch(setWarrantyObj(item))
  }

  const orderHandler = (item) => {
    dispatch(setBayNow({
      ...item, warrantyPeriod: warrantyObj.period,
      warrantyCost: warrantyObj.value
    }));
    navigate('/shop-cart');
  }

  const cartHandler = (item) => {
    warrantyObj ? dispatch(setCart({
      ...item, id: item.name + warrantyObj.value,
      warrantyPeriod: warrantyObj.period,
      warrantyCost: warrantyObj.value
    })) : dispatch(setCart({...item}));
    dispatch(setWarrantyObj({}));
  }

  return (
    <Box display='flex' flexDirection='column' mr='10px'
         sx={{width: {xs: '100%', md: '50%'}}}>
      <Chip label='In stock' color='success' variant='outlined'
            sx={{width: '100px'}}/>
      {
        newCollectionScooters
          .filter(item => item.id === newCollectionTabsValue).map(item => (
          <Box key={item.id} display='flex' alignItems='end'>
            <Typography textTransform='uppercase' textAlign='left'
                        fontSize={{xs: '2rem', md: '3rem', lg: '4rem'}}
                        fontWeight={700} my='11px'
                        color='secondary.main'>{item.name}</Typography>
          </Box>
        ))
      }
      <Box border='1px solid #999999' p='20px' display='flex'
           flexDirection='column' mb='11px'>
        <Typography color='secondary.main' variant='body1'
                    textAlign='left'>Add an extended warranty from <span
          className='font-bold'>Extend</span></Typography>
        <ButtonGroup orientation='horizontal' fullWidth={true}
                     size='small'>
          {warrantyButtons.map(items => (
            <Button key={items.id} sx={{
              borderColor: 'primary.main',
              bgcolor: `${warrantyObj?.id === items.id ? 'primary.main' : ''}`,
              color: `${warrantyObj?.id === items.id ? 'text.white' : 'text.blue'}`,
              ':hover': {
                bgcolor: 'primary.main',
                borderColor: 'primary.main',
                color: 'text.white'
              }
            }}
                    onClick={() => warrantyHandler(items)}>{items.title}</Button>
          ))}
        </ButtonGroup>
        {newCollectionScooters.filter(item => item.id === newCollectionTabsValue).map(item => (
          <Box key={item.id}>
            <Box display='flex' alignItems='center' my='19px' sx={{
              justifyContent: {
                xs: 'space-evenly',
                md: 'space-between'
              }
            }}>
              <Box display='flex' flexDirection='column'>
                <Typography color='secondary.main' variant='body1'
                            sx={{textDecoration: 'line-through'}}>${item.cost + 100}</Typography>
                <Typography color='secondary.main' fontWeight={700}
                            variant='h5'>${item.cost}</Typography>
              </Box>
              <Link to='/accessories'>
                <Typography variant='body1' color='text.blue'
                            fontSize={{xs: '10px', md: '15px'}} p='5px'
                            textAlign='left'
                            textTransform='capitalize'>Segway Protective<br/>Gear
                  Set as a gift</Typography>
              </Link>
              <img src={accessories} alt='accessories'/>
            </Box>
            <Box display='flex' flexDirection='row'
                 justifyContent='space-between'>
              <Button sx={{
                bgcolor: 'primary.main',
                color: 'text.white',
                textTransform: 'uppercase',
                fontSize: {xs: '11px', md: '14px'},
                width: '45%',
                ':hover': {bgcolor: 'primary.main'}
              }} onClick={() => orderHandler(item)}>Buy it now</Button>
              <Button sx={{
                bgcolor: 'primary.main',
                color: 'text.white',
                textTransform: 'uppercase',
                fontSize: {xs: '11px', md: '14px'},
                width: '45%',
                ':hover': {bgcolor: 'primary.main'}
              }} onClick={() => cartHandler(item)}
              >add to cart</Button>
            </Box>
          </Box>
        ))}
      </Box>
      <Box display='flex' flexDirection='row' justifyContent='flex-start'>
        <Typography color='text.secondary'>
          Payment Methods:
        </Typography>
        <Typography color='text.blue'>
          Starting at $55/mo.
        </Typography>
        <Typography color='text.green'>
          Prequalify now.
        </Typography>
      </Box>
      <List sx={{display: 'flex', flexDirection: 'row'}}>
        {payments.map(item => (
          <img key={item.id} width='7%' src={item.image} alt='payment'/>
        ))}
      </List>
    </Box>
  );
}

export default OrderSection