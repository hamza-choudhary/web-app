import { Box } from "@mui/system";
import React from "react";

import { useSelector } from "react-redux";
import { Button, CardMedia, Typography } from "@mui/material";
import logo_blue from "../../Common/images/logo_blue.png";
import logo_black from "../../Common/images/logo_black.png";

function AddOne() {
  const { darkTheme } = useSelector((state) => state.customReducer);
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: {
          xs: "column",
          md: "row",
        },
        justifyContent: {
          md: "space-around",
        },
        alignItems: "center",
        paddingY: 20,
      }}
    >
      <CardMedia
        alt=""
        image="https://chisnghiax.com/ciseco/static/media/promo2.9278c86b3a2f01d6666e.png"
        sx={{ width: { xs: 300, md: 500 }, height: { xs: 300, md: 500 } }}
      />
      <Box>
        <img src={!darkTheme ? logo_black : logo_blue} alt="logo-black" />
        <Typography sx={{ marginTop: 5 }} variant="h3">
          Earn free money with Ciseco
        </Typography>
        <Typography variant="body1">
          With Ciseco you will get freeship & savings combo...
        </Typography>
        <Button
          variant="contained"
          sx={{
            marginY: 5,
            borderRadius: 10,
            fontSize: { xs: 12, md: 16 },
            textTransform: "capitalize",
            backgroundColor: !darkTheme ? "white" : "black",
            color: darkTheme ? "white" : "black",
            "&:hover": {
              backgroundColor: !darkTheme ? "white" : "black",
              color: darkTheme ? "white" : "black",
            },
          }}
        >
          Discover more
        </Button>
      </Box>
    </Box>
  );
}

export default AddOne;
