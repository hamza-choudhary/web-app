import { Box, Button , Typography } from "@mui/material";
import React from "react";

import { logout } from "../../Services/services";
import { useDispatch, useSelector } from "react-redux";
import ToasterContainer from "../../Components/ToasterContainer/ToasterContainer";
import { myToast } from "../../Components/ToasterContainer/tostify";
function UserDetails() {
  const { darkTheme, userData } = useSelector((state) => state.customReducer);
  const dispatch = useDispatch();
  const onSubmit = () => {
    logout(
      (res) => {
        if (res.status === 200) {
          dispatch({ type: "setUser", payload: undefined });
          myToast("success", "logout successfully");
        } else {
          myToast("error", res.data.message);
        }
      },
      (err) => {
        myToast("error", err.message);
      }
    );
  }
  
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        paddingY: 20,
        backgroundColor: darkTheme ? "#0F172A" : "#fff",
        color: !darkTheme ? "#000" : "#fff",
      }}
    >
      <ToasterContainer />
      <Typography sx={{marginY:10}}>Underdevelopment</Typography>
      <Button variant="contained" onClick={onSubmit}>Logout</Button>
      
    </Box>
  );
}

export default UserDetails;
