import React from "react";
import { Avatar, Box, Grid, Tab, Tabs, Typography } from "@mui/material";
import aboutOne from "../data/images/about-1.png";
import aboutTwo from "../data/images/about-2.jpg";
import { aboutUs, benefits, reviewsData } from "../data/data";
import CallOutlinedIcon from "@mui/icons-material/CallOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import { useDispatch, useSelector } from "react-redux";
import { setTabsReview } from "../features/projectSlice";
import FiberManualRecordRoundedIcon from "@mui/icons-material/FiberManualRecordRounded";

const About = () => {
  const dispatch = useDispatch();
  const { tabsReview } = useSelector((state) => state.project);

  const TabPanel = (props) => {
    const { children, value, index, ...other } = props;

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`full-width-tabpanel-${index}`}
        aria-labelledby={`full-width-tab-${index}`}
        {...other}
      >
        {value === index && <Box>{children}</Box>}
      </div>
    );
  };

  const handleChange = (event, newValue) => {
    dispatch(setTabsReview(newValue));
  };

  return (
    <Box sx={{ flex: "1 0 auto" }}>
      <Box display="flex" flexDirection="column" width="90%" mx="auto">
        <Typography
          textTransform="uppercase"
          textAlign="center"
          fontWeight={700}
          color="text.primary"
          my="30px"
          sx={{ fontSize: { xs: "25px", md: "50px" } }}
        >
          About us
        </Typography>
        <Box
          display="flex"
          mx="-20px"
          sx={{ flexDirection: { xs: "", md: "row" } }}
        >
          <Box mx="20px" sx={{ width: { xs: "35%", md: "35%" } }}>
            <Typography
              textTransform="capitalize"
              textAlign="right"
              color="text.primary"
              fontWeight={700}
              sx={{
                mb: { xs: "10px", md: "20px" },
                fontSize: { xs: "15px", md: "25px" },
              }}
            >
              we are SegWay
            </Typography>
            <Typography
              color="text.primary"
              textAlign="right"
              xs={{ fontSize: { xs: "10px", md: "20px" } }}
            >
              Tough EVA material, suitable for the entire Ninebot KickScooter by
              Segway line. 3L capacity gives you plenty of room to carry your
              phone, charger, bottled water, and other personal items.
            </Typography>
          </Box>
          <Box
            position="relative"
            mx="20px"
            sx={{
              display: "flex",
              flexDirection: "column",
              width: { xs: "65%", md: "65%" },
            }}
          >
            <img
              className=" md:sm:absolute md:w-[60%] md:top-[35%] md:z-20 duration-1000 hover:scale-125"
              src={aboutOne}
              alt="about"
            />
            <img
              className="md:absolute md:w-[60%] md:top-0 md:left-[35%] md:z-10 duration-1000 md:hover:z-30 hover:scale-125"
              src={aboutTwo}
              alt="about"
            />
          </Box>
        </Box>
        <Grid
          container
          sx={{ mt: { xs: "30px", md: "100px" }, mb: "30px", mx: "-15px" }}
        >
          {benefits.map((item) => (
            <Grid item key={item.id} xs={4}>
              <Box
                sx={{
                  height: "90%",
                  display: "flex",
                  flexDirection: "column",
                  bgcolor: "secondary.greyOpacity",
                  borderRadius: "10px",
                  p: "15px",
                  m: "15px",
                }}
              >
                <Typography
                  color="text.primary"
                  textAlign="center"
                  textTransform="capitalize"
                  sx={{
                    pb: "10px",
                    fontSize: { xs: "12px", md: "25px" },
                  }}
                >
                  {item.icon} {item.title}
                </Typography>
                <Typography
                  color="text.primary"
                  textAlign="justify"
                  sx={{
                    flex: "1 0 auto",
                    fontSize: { xs: "10px", md: "20px" },
                  }}
                >
                  {item.text}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
        <Box sx={{ mb: "30px" }}>
          <Typography
            textTransform="capitalize"
            textAlign="center"
            color="text.primary"
            fontWeight={700}
            sx={{
              mb: { xs: "10px", md: "30px" },
              fontSize: "25px",
            }}
          >
            Our specialists
          </Typography>
          <Grid container sx={{ mx: "-15px" }}>
            {aboutUs.map((item) => (
              <Grid item key={item.id} xs={6} md={4}>
                <Box
                  display="flex"
                  flexDirection="column"
                  alignItems="center"
                  m="15px"
                  p="20px"
                >
                  <Avatar
                    src={item.avatar}
                    sx={{ width: "100px", height: "100px", mb: "10px" }}
                  />
                  <Typography color="text.primary" mb="10px" fontSize="25px">
                    {item.nane}
                  </Typography>
                  <Typography
                    color="text.secondary"
                    textTransform="capitalize"
                    fontSize="15px"
                  >
                    {item.job}
                  </Typography>
                  <Typography color="text.secondary" my="5px" fontSize="15px">
                    <CallOutlinedIcon /> {item.phone}
                  </Typography>
                  <Typography color="text.secondary" fontSize="15px">
                    <EmailOutlinedIcon /> {item.mail}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
        <Box sx={{ mb: "30px" }}>
          <Typography
            textTransform="capitalize"
            textAlign="center"
            color="text.primary"
            fontWeight={700}
            sx={{
              mb: { xs: "10px", md: "30px" },
              fontSize: "25px",
            }}
          >
            Latest Review
          </Typography>
          <Box>
            {reviewsData.map((item) => (
              <TabPanel key={item.id} value={tabsReview} index={item.id}>
                <Box
                  display="flex"
                  flexDirection="column"
                  p="20px"
                  borderRadius="20px"
                  bgcolor="secondary.greyOpacity"
                >
                  <Box
                    display="flex"
                    flexDirection="row"
                    alignItems="center"
                    justifyContent="flex-start"
                    mb="20px"
                  >
                    <Avatar
                      src={item.avatar}
                      sx={{ width: "70px", height: "70px", mr: "20px" }}
                    />
                    <Typography
                      color="text.primary"
                      fontWeight={700}
                      fontSize="25px"
                    >
                      {item.writer}
                    </Typography>
                  </Box>
                  <Box height="140px" overflow="hidden" mb="10px">
                    <Typography
                      color="text.primary"
                      textAlign="justify"
                      fontSize="15px"
                    >
                      {item.review}
                    </Typography>
                  </Box>
                  <Typography
                    color="text.primary"
                    fontSize="15px"
                    fontStyle="italic"
                  >
                    {item.date}
                  </Typography>
                </Box>
              </TabPanel>
            ))}
          </Box>
          <Tabs value={tabsReview} onChange={handleChange} centered>
            {reviewsData.map((item) => (
              <Tab
                key={item.id}
                sx={{ p: "0px", minWidth: "0px" }}
                icon={<FiberManualRecordRoundedIcon />}
              />
            ))}
          </Tabs>
        </Box>
      </Box>
    </Box>
  );
};

export default About;
