import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import logo_blue from "../../Common/images/logo_blue.png";
import logo_black from "../../Common/images/logo_black.png";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TwitterIcon from "@mui/icons-material/Twitter";
import TelegramIcon from "@mui/icons-material/Telegram";
function Footer() {
  const { darkTheme } = useSelector((state) => state.customReducer);
  return (
    <Stack
      sx={{
        padding: 10,
        borderTop: 1,
        borderColor: "gray",
        backgroundColor: darkTheme ? "#0F172A" : "#fff",
        color: darkTheme ? "#fff" : "#000",
        alignItems:'center',
        flexDirection:{
            xs:'column',
            lg:'row'
        },
        justifyContent:'space-around'
      }}
    >
      <Box>
        <img src={!darkTheme ? logo_black : logo_blue} alt="logo-black" />
        <List>
          <ListItemButton>
            <ListItemIcon sx={{ color: "skyblue" }}>
              <FacebookRoundedIcon />
            </ListItemIcon>
            <ListItemText primary="Facebook" />
          </ListItemButton>
          <ListItemButton>
            <ListItemIcon sx={{ color: "red" }}>
              <YouTubeIcon />
            </ListItemIcon>
            <ListItemText primary="youtube" />
          </ListItemButton>
          <ListItemButton>
            <ListItemIcon sx={{ color: "skyblue" }}>
              <TwitterIcon />
            </ListItemIcon>
            <ListItemText primary="Twitter" />
          </ListItemButton>
          <ListItemButton>
            <ListItemIcon sx={{ color: "skyblue" }}>
              <TelegramIcon />
            </ListItemIcon>
            <ListItemText primary="Telegram" />
          </ListItemButton>
        </List>
      </Box>
      <Box>
        <List>
          <Typography sx={{fontWeight:800}}>Explore</Typography>
          <ListItem sx={{'&:hover':{cursor:'pointer'}}}>
            <ListItemText primary='Prototyping'/>
          </ListItem>
          <ListItem sx={{'&:hover':{cursor:'pointer'}}}>
            <ListItemText primary='Design systems'/>
          </ListItem>
          <ListItem sx={{'&:hover':{cursor:'pointer'}}}>
            <ListItemText primary='Pricing'/>
          </ListItem>
          <ListItem sx={{'&:hover':{cursor:'pointer'}}}>
            <ListItemText primary='Security'/>
          </ListItem>
        </List>
      </Box>
      <Box>
        <List>
          <Typography sx={{fontWeight:800}}>Resources</Typography>
          <ListItem sx={{'&:hover':{cursor:'pointer'}}}>
            <ListItemText primary='Best practices'/>
          </ListItem>
          <ListItem sx={{'&:hover':{cursor:'pointer'}}}>
            <ListItemText primary='Support'/>
          </ListItem>
          <ListItem sx={{'&:hover':{cursor:'pointer'}}}>
            <ListItemText primary='Developers'/>
          </ListItem>
          <ListItem sx={{'&:hover':{cursor:'pointer'}}}>
            <ListItemText primary='Learn design'/>
          </ListItem>
        </List>
      </Box>
      <Box>
        <List>
          <Typography sx={{fontWeight:800}}>Community</Typography>
          <ListItem sx={{'&:hover':{cursor:'pointer'}}}>
            <ListItemText primary='Discussion Forums'/>
          </ListItem>
          <ListItem sx={{'&:hover':{cursor:'pointer'}}}>
            <ListItemText primary='Code of Conduct'/>
          </ListItem>
          <ListItem sx={{'&:hover':{cursor:'pointer'}}}>
            <ListItemText primary='Contributing'/>
          </ListItem>
          <ListItem sx={{'&:hover':{cursor:'pointer'}}}>
            <ListItemText primary='API Reference'/>
          </ListItem>
        </List>
      </Box>
    </Stack>
  );
}

export default Footer;
