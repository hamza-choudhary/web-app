import { Box, IconButton, Typography,} from "@mui/material";
import { useRef, useState } from "react";
import EastIcon from '@mui/icons-material/East';
import ProductOne from "../Product/ProductOne";
import WestIcon from '@mui/icons-material/West';
import ProductTwo from "../Product/ProductTwo";

function HorizontalScroll(props) {
  const ref = useRef(null)
  const [pos , setPos] = useState()
  const scrollRight = () => {
    setPos(ref.current.scrollLeft)
    ref.current.scrollLeft += 300
    if(pos ===ref.current.scrollLeft){
      ref.current.scrollLeft += -(pos)
    }
  };
  const scrollLeft = () => {
      ref.current.scrollLeft += -300
  };

  return (
    
    <Box paddingY={15}>
      <Box sx={{display:'flex' , justifyContent:'space-between' , flexDirection:{xs:'column' , xl:'row'}}}>
        <Box>
        <Typography component={'span'} variant="h4">{props.title1}</Typography>
        <Typography component={'span'} variant="h4" color={'gray'}>{props.title2}</Typography>
        </Box>
        <Box sx={{display:'flex' , justifyContent:'flex-end'}}>
          <IconButton onClick={scrollLeft}>
          <WestIcon />
          </IconButton>
          <IconButton onClick={scrollRight}>
          <EastIcon />
          </IconButton>
        </Box>
      </Box>
      
      <Box sx={{overflowX:'scroll' , '&::-webkit-scrollbar': { width: 0, } , scrollBehavior:'smooth'}} ref={ref} >
      <Box sx={{display:"inline-flex" }}  >
      {props.object===1&&props.data.map((data , index) => (
          <ProductOne key={index} src={data.src} color={data.color}/>
          ))}
          {props.object===2&&props.data.map((data , index) => (
          <ProductTwo />
          ))}
      
      </Box>
    </Box>
    </Box>
  );
}

export default HorizontalScroll;
