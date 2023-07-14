import { Box } from "@mui/system";
import React from "react";
import Avatar from "@mui/material/Avatar";
import { Typography } from "@mui/material";
import Rating from "@mui/material/Rating";
function Review() {
  return (
    <Box sx={{marginY:5 ,marginX:{md:5}}}>
      <Box sx={{display:'flex' , justifyContent:'space-between' ,}}>
        <Box sx={{display:'flex'}}>
        <Avatar src="https://chisnghiax.com/ciseco/static/media/Image-9.d879028d45de09c9ca3b.png" />
        <Box marginLeft={2}>
          <Typography variant="body1">Gropishta keo</Typography>
          <Typography variant="body2" color={"gray"}>
            August 15, 2022
          </Typography>
        </Box>
        </Box>
        <Rating name="read-only" value={5} readOnly />
      </Box>
      <Box>
        <Typography variant="body1">
          The quality and sizing mentioned were accurate and really happy with
          the purchase. Such a cozy and comfortable hoodie. Now that it’s
          colder, my husband wears his all the time. I wear hoodies all the
          time.
        </Typography>
      </Box>
    </Box>
  );
}

export default Review;
