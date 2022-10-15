import React from 'react';
import {
  Backdrop,
  Box, Button,
  Divider,
  Fade,
  Modal,
  TextField,
  Typography
} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {
  setBayNow,
  setCustomer,
  setWindowOrder,
  setModalOrderConfirm
} from "../features/projectSlice";

const OrderWindow = () => {
  const dispatch = useDispatch();
  const {windowOrder, buyNow, customer} = useSelector(state => state.project);

  // const handleClose = () => {
  //   dispatch(setWindowOrder(!windowOrder));
  //   dispatch(setBayNow({}));
  // }

  // const handleName = (event) => {
  //   dispatch(setCustomer({...customer, name: event.target.value}))
  // }

  // const handleSurname = (event) => {
  //   dispatch(setCustomer({...customer, surname: event.target.value}))
  // }

  // const handlePhoneNumber = (event) => {
  //   dispatch(setCustomer({...customer, phoneNumber: event.target.value}))
  // }

  // const handleBuy = () => {
  //   dispatch(setWindowOrder(false));
  //   dispatch(setBayNow({}));
  //   dispatch(setModalOrderConfirm(true));
  // }

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 500,
    borderRadius: '20px',
    bgcolor: 'background.default',
    border: '2px solid #323941',
    boxShadow: 24,
    p: 3,
  };

  return (
    <Box>
      <Modal
        open={windowOrder}
        // onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 1000,
        }}
      >
        <Fade in={windowOrder}>
          <Box sx={style}>
            <Typography variant='h5' fontWeight={700}
                        color='text.primary'>Checkout</Typography>
            <Divider textAlign='left'>Recipient:</Divider>
            <TextField
              id="outlined-name-input"
              label="Name"
              variant='standard'
              size='normal'
              margin='normal'
              // value={customer.name}
              // onChange={handleName}
            />
            <TextField
              id="outlined-surname-input"
              label="Surname"
              variant='standard'
              size='normal'
              margin='normal'
              // value={customer.surname}
              // onChange={handleSurname}
            />
            <TextField
              id="outlined-surname-input"
              label="Phone number"
              variant='standard'
              size='normal'
              margin='normal'
              // helperText={`${(!isNaN(parseFloat(customer.phoneNumber)) && isFinite(customer.phoneNumber)) ? '' : 'Not a number'}`}
              // value={customer.phoneNumber}
              // onChange={handlePhoneNumber}
            />
            <Box>
              <Typography>{buyNow.name}</Typography>
              <Typography>
                {`${buyNow.warrantyPeriod ?
                  `$${buyNow.warrantyCost} - ${buyNow.warrantyPeriod} ${buyNow.warrantyPeriod === 1 ?
                    'Year' :
                    'Years'}` :
                  'No warranty'}`}
              </Typography>
              <Typography>${buyNow.cost}</Typography>
              <Divider/>
              <Box display='flex' justifyContent='space-between'
                   mt='10px'>
                <Typography>
                  {`Total: $${buyNow.warrantyPeriod ?
                    buyNow.cost + buyNow.warrantyCost :
                    buyNow.cost}`}
                </Typography>
                <Button size='large' sx={{color: 'text.white'}}
                        variant='contained'
                        // onClick={() => handleBuy()}
                >Buy</Button>
              </Box>
            </Box>
          </Box>
        </Fade>
      </Modal>
    </Box>
  );
}

export default OrderWindow