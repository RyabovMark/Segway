import React from 'react';
import {Box, Tab, Tabs, Typography} from "@mui/material";
import {description} from "../data/data";
import {useDispatch, useSelector} from "react-redux";
import {setDescriptionTabsValue} from "../features/projectSlice";

const DescriptionSection = () => {
  const dispatch = useDispatch()
  const {descriptionTabsValue} = useSelector(state => state.project)

  const tabsDescriptionChange = (event, newValue) => {
    dispatch(setDescriptionTabsValue(newValue));
  };

  function TabPanel(props) {
    const {children, value, index, ...other} = props;

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{p: 3}}>
            <Box>{children}</Box>
          </Box>
        )}
      </div>
    );
  }

  return (
    <Box sx={{width: '100%'}}>
      <Box sx={{borderBottom: 1, borderColor: 'divider'}}>
        <Tabs variant='fullWidth' value={descriptionTabsValue}
              onChange={tabsDescriptionChange}>
          {description.map(item => (
            <Tab sx={{
              fontSize: {xs: '6px', md: '14px'},
              px: {xs: '8px', md: '16px'},
              minWidth: {xs: '0px', md: '90px'}
            }} key={item.id} icon={item.icon} iconPosition='start'
                 label={item.title}/>
          ))}
        </Tabs>
      </Box>
      {description.map((item, index) => (
        <TabPanel key={item.id} value={descriptionTabsValue} index={index}>
          <Box display='flex' justifyContent='space-between' mx='-24px'
               height='200px' p='20px' bgcolor='secondary.greyOpacity'>
            <Box width='65%'>
              <Typography color='text.primary' textTransform='uppercase'
                          fontWeight={700}
                          sx={{fontSize: {xs: '13px', md: '18px'}}}>
                {item.subTitle}</Typography>
              <Typography color='text.primary'
                          sx={{
                            fontSize: {
                              xs: '8px',
                              md: '13px'
                            }
                          }}>{item.text}</Typography>
            </Box>
            <Box alignItems='center' sx={{width: {sx: '45%', md: '35%'}}}>
              <img className='h-full mx-auto' src={item.subImage}
                   alt={item.title}/>
            </Box>
          </Box>
        </TabPanel>
      ))
      }
    </Box>
  );
}

export default DescriptionSection