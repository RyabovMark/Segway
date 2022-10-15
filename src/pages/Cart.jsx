import React from 'react';
import ShopCartCart from "../components/ShopCartCart";
import {
  Backdrop,
  Box,
  Button, CircularProgress,
  Divider,
  Typography
} from "@mui/material";
import {useNavigate} from 'react-router-dom';
import {useDispatch, useSelector} from "react-redux";
import {
  setClearCart,
  setIsLoading, setSnackBar
} from "../features/projectSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {cart, isLoading} = useSelector(state => state.project)

  const totalValue = () => {
    let value = 0;
    for (const cartElement of cart) {
      let num = cartElement.cost * cartElement.count
      value += num;
    }
    return value.toFixed(2)
  }

  const handlerCheckout = () => {
    dispatch(setIsLoading(false));
    navigate('/');
    dispatch(setClearCart([]));
    dispatch(setSnackBar(true));
  }

  const setTimer = () => {
    dispatch(setIsLoading(true))
    setTimeout(() => handlerCheckout(), 2000)
  }

  return (
    <>
      <Backdrop
        sx={{color: 'primary.main', zIndex: (theme) => theme.zIndex.drawer + 1}}
        open={isLoading}
      >
        <CircularProgress color="inherit"/>
      </Backdrop>
      {cart.length ?
        <Box width='100%' bgcolor='text.white' p='10px'
             sx={{flex: '1 1 auto'}}>
          <Box width='80%' mx='auto' my='-10px'>
            <Typography variant='h4' lineHeight={2.5} fontWeight={600}
                        color='text.primary'>Your
              shopping cart</Typography>
            <Divider/>
            {cart.map(item => (
              <ShopCartCart props={item}/>
            ))}
            <Divider/>
            <Box width='50%' display='flex' justifyContent='space-between'
                 alignItems='center' my='10px' marginLeft='auto'>
              <Typography
                sx={{fontSize: {md: '15px', lg: '18px'}}}
                color='text.primary'>Total
                value: {totalValue()}</Typography>
              <Button variant='outlined' sx={{
                borderColor: 'primary.main',
                ':hover': {
                  bgcolor: 'primary.main',
                  borderColor: 'primary.main',
                  color: 'text.white'
                }
              }}
                      onClick={() => setTimer()}
              >Checkout</Button>
            </Box>
          </Box>
        </Box> :
        <Box display='flex' alignItems='center' justifyContent='center'
             sx={{flex: '1 1 auto'}}>
          <Typography variant='h4' color='text.primary'>Your shop cart is
            empty</Typography>
        </Box>
      }
    </>
  );
}

export default Cart