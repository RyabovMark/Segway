import React from 'react';
import {Box, Typography} from "@mui/material";

const descendingComparator = (a, b, orderBy) => {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0
}

// const getComparator=(order, orderBy)=>{
//   return order==='desc'
//   ?(a,b)=>descendingComparator(a,b,orderBy)
//   :(a,b)=>-descendingComparator(a,b,orderBy)
// }

const Compare = () => {

  return (
    <Box width='90%' mx='auto'>
      <Typography fontSize='50px' fontWeight={700} textTransform='uppercase'
                  textAlign='center' color='text.primary'>compare
        specifications</Typography>
      <Typography fontSize='24px' textAlign='center' color='text.primary'>Add
        model to compare</Typography>
      <Box my='30px'>

      </Box>
    </Box>
  );
}

export default Compare