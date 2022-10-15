import React from 'react';
import {Box, Tab, Tabs, Typography} from "@mui/material";
import {newCollectionScooters} from "../data/data";
import FiberManualRecordRoundedIcon
  from "@mui/icons-material/FiberManualRecordRounded";
import {useDispatch, useSelector} from "react-redux";
import {setNewCollectionTabsValue} from "../features/projectSlice";
import {Link} from "react-router-dom";


const NewCollectionSlider = () => {
  const dispatch = useDispatch();
  const {newCollectionTabsValue} = useSelector(state => state.project)

  const tabsNewCollectionChange = (event, newValue) => {
    dispatch(setNewCollectionTabsValue(newValue));
  };

  function TabPanel(props) {
    const {children, value, index, ...other} = props;
    return (
      <Box
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && children}
      </Box>
    );
  }

  return (
    <Box display='flex' justifyContent='end' flexDirection='column'
         sx={{width: {xs: '100%', md: '50%'}}}>
      {newCollectionScooters.map(item => (
        <TabPanel key={item.id} value={newCollectionTabsValue} index={item.id}>
          <Box height={{xs:'300px',md:'500px'}} mx='auto'>
            <Link to={`catalog/${item.id}`}>
              <img className='h-full mx-auto' src={item.imageURL}
                   alt={item.title}/>
            </Link>
          </Box>
        </TabPanel>
      ))}
      <Tabs centered value={newCollectionTabsValue}
            onChange={tabsNewCollectionChange}>
        {newCollectionScooters.map(item => (
          <Tab key={item.id} sx={{p: '0px', minWidth: '0px'}}
               icon={<FiberManualRecordRoundedIcon/>}/>
        ))}
      </Tabs>
    </Box>
  );
}

export default NewCollectionSlider