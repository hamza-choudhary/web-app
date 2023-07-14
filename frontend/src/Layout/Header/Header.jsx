import React, { useEffect, useState } from "react";
import AppBar from "@mui/material/AppBar";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  Box,
  Toolbar,
  Button,
  IconButton,
  Container,
  InputBase,
  Drawer,
  List,
  Typography,
  Menu,
  MenuItem,
  Avatar,
} from "@mui/material";
import logo_black from "../../Common/images/logo_black.png";
import SearchIcon from "@mui/icons-material/Search";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import Badge from "@mui/material/Badge";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import MenuIcon from "@mui/icons-material/Menu";
import { useDispatch, useSelector } from "react-redux";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import logo_blue from "../../Common/images/logo_blue.png";
import CloseIcon from "@mui/icons-material/Close";
import YouTubeIcon from "@mui/icons-material/YouTube";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import TelegramIcon from "@mui/icons-material/Telegram";
import { useNavigate } from "react-router-dom";
import { userAbout } from "../../Services/services";
import ToasterContainer from "../../Components/ToasterContainer/ToasterContainer";
import { myToast } from "../../Components/ToasterContainer/tostify";
function Header() {
  const dispatch = useDispatch();
  const { darkTheme, userData } = useSelector((state) => state.customReducer);
  const [open, setOpen] = useState(false);

  const [anchorEl, setAnchorEl] = useState(null);

  const [menu, setMenu] = useState(false);
  const changeTheme = () => {
    dispatch({
      type: "changeTheme",
    });
  };
  const navigate = useNavigate();
  const goToLogin = () => {
    navigate("/login");
  };
  const goToHome = () => {
    navigate("/");
  };
  const [search, setSearch] = useState(false);
  useEffect(() => {
    userAbout(
      (res) => {
        if (res.status === 200) {
          dispatch({ type: "setUser", payload: res.data.user });
          myToast("success", "login Successfully");
        } else {
          myToast("error", res.data.message);
        }
      },
      (err) => {
        myToast("warn", "Please Login");
      }
    );
  }, []);
  return (
    <AppBar
      position="sticky"
      sx={{ backgroundColor: !darkTheme ? "white" : "#0F172A" }}
      color="inherit"
    >
      <ToasterContainer />
      <Container>
        <Toolbar
          sx={{
            justifyContent: "space-between",
            marginY: 1,
            display: { xs: "none", lg: "flex" },
          }}
        >
          <Box
            onClick={() => {
              goToHome();
            }}
            sx={{ "&:hover": { cursor: "pointer" } }}
          >
            <img src={!darkTheme ? logo_black : logo_blue} alt="logo-black" />
          </Box>
          <Box sx={{ display: !search ? "flex" : "none" }}>
          <Button
            onClick={()=>navigate('/categories' , { state: { title: 'Women' } })}
              sx={{
                borderRadius: 100,
                padding: 1,
                margin: 1,
                textTransform: "none",
                fontSize: 18,
              }}
              variant="text"
            >
              Women
            </Button>
            <Button
            onClick={()=>navigate('/categories' , { state: { title: 'Men' } })}
              sx={{
                borderRadius: 100,
                padding: 1,
                margin: 1,
                textTransform: "none",
                fontSize: 18,
              }}
              variant="text"
            >
              Men
            </Button>
            <Button
            onClick={()=>navigate('/categories' , { state: { title: 'Beauty' } })}
              sx={{
                borderRadius: 100,
                padding: 1,
                margin: 1,
                textTransform: "none",
                fontSize: 18,
              }}
              variant="text"
            >
              Beauty
            </Button>
            <Button
            onClick={()=>navigate('/categories' , { state: { title: 'Sport' } })}
              sx={{
                borderRadius: 100,
                padding: 1,
                margin: 1,
                textTransform: "none",
                fontSize: 18,
              }}
              variant="text"
            >
              Sport
            </Button>
            <Button
              onClick={(event) => {
                setAnchorEl(event.currentTarget);
                setMenu(!menu);
              }}
              sx={{
                borderRadius: 100,
                padding: 1,
                margin: 1,
                textTransform: "none",
                fontSize: 18,
              }}
              variant="text"
              endIcon={<ExpandMoreIcon />}
            >
              Explore
              <Menu
                open={menu}
                anchorEl={anchorEl}
                onClose={(event) => {
                  setAnchorEl(event.currentTarget);
                }}
              >
                <MenuItem>profile</MenuItem>
              </Menu>
            </Button>
          </Box>
          <Box
            sx={{
              display: search ? "flex" : "none",
              border: 1,
              borderRadius: 2,
            }}
          >
            <IconButton>
              <SearchIcon />
            </IconButton>
            <InputBase placeholder="Search" />
            <IconButton
              onClick={() => {
                setSearch(!search);
              }}
            >
              <CloseIcon />
            </IconButton>
          </Box>

          <Box>
            <IconButton
              size="large"
              onClick={() => {
                setSearch(!search);
              }}
            >
              <SearchIcon fontSize="large" />
            </IconButton>
            <IconButton
              size="large"
              onClick={() => {
                userData ? navigate('/me') : goToLogin()
              }}
            >
              {userData ? (
                <Avatar alt={userData.name[0]} src={userData.avatar.url} />
              ) : (
                <PersonOutlineIcon fontSize="large" />
              )}
            </IconButton>
            <IconButton size="large">
              <Badge badgeContent={4} color={"error"}>
                <ShoppingCartOutlinedIcon fontSize="large" />
              </Badge>
            </IconButton>
            <IconButton size="large" onClick={changeTheme}>
              {darkTheme ? (
                <LightModeOutlinedIcon fontSize="large" />
              ) : (
                <DarkModeOutlinedIcon fontSize="large" />
              )}
            </IconButton>
          </Box>
        </Toolbar>

        <Toolbar
          sx={{
            justifyContent: "space-between",
            marginY: 1,
            display: { xs: "flex", lg: "none" },
          }}
        >
          <Box>
            <IconButton
              onClick={() => {
                setOpen(!open);
              }}
            >
              <MenuIcon />
            </IconButton>
            <Drawer variant="persistent" anchor="left" open={open}>
              <List sx={{ width: 300, marginX: 2 }}>
                <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                  <IconButton
                    onClick={() => {
                      setOpen(!open);
                    }}
                  >
                    <CloseIcon />
                  </IconButton>
                </Box>
                <Box display={"flex"}>
                  <img
                    src={!darkTheme ? logo_black : logo_blue}
                    alt="logo-black"
                    style={{ width: 100 }}
                  />
                </Box>

                <Box sx={{ marginY: 2 }}>
                  <Typography
                    variant="body1"
                    sx={{ textAlign: "left", fontSize: 10 }}
                  >
                    Discover the most outstanding articles on all topics of
                    life. Write your stories and share them
                  </Typography>
                </Box>
                <Box
                  display={"flex"}
                  justifyContent={"space-between"}
                  marginY={2}
                >
                  <Box>
                    <IconButton
                      sx={{ backgroundColor: "skyblue", marginX: 1 }}
                      size={"small"}
                    >
                      <FacebookIcon sx={{ color: "white" }} />
                    </IconButton>
                    <IconButton
                      sx={{ backgroundColor: "lightblue", marginX: 1 }}
                      size={"small"}
                    >
                      <TwitterIcon sx={{ color: "white" }} />
                    </IconButton>
                    <IconButton
                      sx={{ backgroundColor: "red", marginX: 1 }}
                      size={"small"}
                    >
                      <YouTubeIcon sx={{ color: "white" }} />
                    </IconButton>
                    <IconButton
                      sx={{ backgroundColor: "lightblue", marginX: 1 }}
                      size={"small"}
                    >
                      <TelegramIcon sx={{ color: "white" }} />
                    </IconButton>
                  </Box>
                  <IconButton onClick={changeTheme}>
                    {darkTheme ? (
                      <LightModeOutlinedIcon />
                    ) : (
                      <DarkModeOutlinedIcon />
                    )}
                  </IconButton>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    border: 1,
                    borderRadius: 2,
                  }}
                >
                  <IconButton>
                    <SearchIcon />
                  </IconButton>
                  <InputBase placeholder="Search" />
                </Box>
                <Box
                  sx={{
                    borderTop: 1,
                    marginTop: 2,
                    borderColor: "gray",
                    paddingY: 2,
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <Button sx={{ textTransform: "none" }}>Men</Button>
                  <Button sx={{ textTransform: "none" }}>Women</Button>
                  <Button sx={{ textTransform: "none" }}>Beauty</Button>
                  <Button sx={{ textTransform: "none" }}>Sport</Button>
                  <Button
                    sx={{ textTransform: "none" }}
                    endIcon={<ExpandMoreIcon />}
                  >
                    Explore
                  </Button>
                </Box>
              </List>
            </Drawer>
          </Box>

          <Box>
            <img
              onClick={goToHome}
              src={!darkTheme ? logo_black : logo_blue}
              alt="logo-black"
            />
          </Box>
          <Box sx={{ display: "flex" }}>
            <IconButton>
              <PersonOutlineIcon />
            </IconButton>
            <IconButton>
              <Badge badgeContent={4} color={"error"}>
                <ShoppingCartOutlinedIcon />
              </Badge>
            </IconButton>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Header;
