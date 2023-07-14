import { Box } from "@mui/system";
import React from "react";

import { useSelector } from "react-redux";
import { Button,  CardMedia,  Typography } from "@mui/material";
import logo_blue from "../../Common/images/logo_blue.png";
import logo_black from "../../Common/images/logo_black.png";

function AddTwo() {
  const { darkTheme } = useSelector((state) => state.customReducer);
  return (
<Box
          sx={{
            display: {
              lg: "flex",
            },
            justifyContent: "space-around",
            paddingY: 20,
          }}
        >
          <Box>
          
            <img src={!darkTheme ? logo_black : logo_blue} alt="logo-black" />
            <Typography sx={{ marginTop: 5 }} variant="h3">
              Earn free money with Ciseco
            </Typography>
            <Typography variant="body1">
              With Ciseco you will get freeship & savings combo...
            </Typography>
            <Box sx={{ display: "flex", gap: 5, marginY: 5 }}>
              <Button
                variant="contained"
                sx={{
                  borderRadius: 10,
                  textTransform: "capitalize",
                  fontSize: { xs: 12, md: 16 },
                }}
              >
                Saving combo
              </Button>
              <Button
                variant="contained"
                sx={{
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
          <CardMedia 
          alt=""
          image="https://chisnghiax.com/ciseco/static/media/rightLargeImg.dd2356513f3941fd1981.png"
          sx={{ width: { xs: 280, md: 560 }, height: { xs: 200, md: 400 } }}
          />
        </Box>
  );
}

export default AddTwo;
