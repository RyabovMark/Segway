import React, {useEffect} from 'react';
import {Alert, Snackbar} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {setSnackBar} from "../features/projectSlice";

const SnackBar = () => {
  const dispatch = useDispatch()
  const {snackbar} = useSelector(state => state.project)

  useEffect(() => {
    if (snackbar)
      setTimeout(() => dispatch(setSnackBar(false)), 5000)
  }, [dispatch, snackbar])

  return (
    <Snackbar open={snackbar}
              anchorOrigin={{vertical: 'bottom', horizontal: 'left'}}>
      <Alert severity="success" sx={{width: '100%'}}>
        Congratulation, your order has been registered
      </Alert>
    </Snackbar>
  );
}

export default SnackBar