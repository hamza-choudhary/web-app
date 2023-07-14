import React, { useState } from 'react'
import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { Carousel } from 'react-responsive-carousel';
import FadeIn from "react-fade-in";
import "react-responsive-carousel/lib/styles/carousel.min.css";
function MyCarousel() {
  const [change , setChange] = useState(0)
  return (
    <Box sx={{ backgroundColor: "#E3FFE6", paddingY: 5 }}>
       <Carousel showThumbs={false} autoPlay={true} infiniteLoop={true} interval={4000} showStatus={false} stopOnHover={false} showArrows={false} showIndicators={false} onChange={(index)=>{setChange(index)}}>
       <Box sx={{display:'flex' , flexDirection:{xs:'column',lg:'row'} , alignItems:'center' , justifyContent:"center"}}>
           { change===0?(<FadeIn>
              <img
                style={{ height: 400 }}
                src="https://chisnghiax.com/ciseco/static/media/hero-right-2.cb4660d930692248be75.png"
                alt=""
              />
            </FadeIn>):null}
            <Box sx={{margin:2 , textAlign:{lg:'left', xs:'center'}}}>
              {change===0?(<FadeIn delay={500}>
                <Typography variant="body1" >
                  🔥 In this season, find the best{" "}
                </Typography >
                <Typography variant="h2"  >
                  Exclusive collection for everyone
                </Typography>
                <Button variant="contained" color="secondary" sx={{marginY:2}}>
                  Explore now
                </Button>
              </FadeIn>):null}
            </Box>
          </Box>
          <Box sx={{display:'flex' , flexDirection:{xs:'column',lg:'row'} , alignItems:'center' , justifyContent:"center"}}>
            {change===1?(<FadeIn>
              <img
                style={{ height: 400 }}
                src="https://chisnghiax.com/ciseco/static/media/hero-right-3.3563ead7c7be2a32eb30.png"
                alt=""
              />
            </FadeIn>):null}
            <Box sx={{margin:2 , textAlign:{lg:'left', xs:'center'}}}>
              {change===1?(<FadeIn delay={500}>
                <Typography variant="body1" >
                  🔥 In this season, find the best{" "}
                </Typography >
                <Typography variant="h2"  >
                  Exclusive collection for everyone
                </Typography>
                <Button variant="contained" color="secondary" sx={{marginY:2}}>
                  Explore now
                </Button>
              </FadeIn>):null}
            </Box>
          </Box>
          <Box sx={{display:'flex' , flexDirection:{xs:'column',lg:'row'} , alignItems:'center' , justifyContent:"center"}}>
         {change===2?(   <FadeIn>
              <img
                style={{ height: 400 }}
                src="https://chisnghiax.com/ciseco/static/media/hero-right.e5d2705b7e98564ab738.png"
                alt=""
              />
            </FadeIn>):null}
            <Box sx={{margin:2 , textAlign:{lg:'left', xs:'center'}}}>
            {change===2?(<FadeIn delay={500}>
                <Typography variant="body1" >
                  🔥 In this season, find the best{" "}
                </Typography >
                <Typography variant="h2"  >
                  Exclusive collection for everyone
                </Typography>
                <Button variant="contained" color="secondary" sx={{marginY:2}}>
                  Explore now
                </Button>
              </FadeIn>):null}
            </Box>
          </Box>
       </Carousel>
      </Box>
  )
}

export default MyCarousel