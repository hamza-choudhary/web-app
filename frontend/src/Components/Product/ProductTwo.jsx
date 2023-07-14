import React, { useState } from 'react'
import {Box, Button, Card, CardMedia, Typography} from '@mui/material'
import { useSelector } from "react-redux";
import FadeIn from 'react-fade-in/lib/FadeIn';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import FeedIcon from '@mui/icons-material/Feed';
import GradeIcon from '@mui/icons-material/Grade';
import { useNavigate } from 'react-router-dom'; 
function ProductTwo(props) {
    const navigate = useNavigate()
    const[mouseEnter , setMouseEnter]=useState(false)
    const { darkTheme } = useSelector((state) => state.customReducer);
  return (
   <Box sx={{width:250,backgroundColor:'transparent' , padding:2, "&:hover":{cursor:'pointer'}}} >
    <Card onClick={()=>{navigate('/product')}} sx={{ backgroundColor: !darkTheme?'#F8FAFC':'#CBDFE1' , boxShadow:'none' , height:320 , borderRadius:10 }}component={'div'} onMouseOver={()=>{setMouseEnter(true)}} onMouseOut={()=>{setMouseEnter(false)}}>
        <CardMedia 
         component="img"
         image={props.data.images[0].url}
         alt=" "
        />
        {mouseEnter&&<FadeIn delay={200}>
           <Box sx={{display:'flex' ,justifyContent:'space-around'}}>
           <Button startIcon={<LocalMallIcon />} variant='contained'sx={{backgroundColor:'white' , color:'black'  , borderRadius:5 , "&:hover":{backgroundColor:'white' , color:'black' } , fontSize:10}}>add to bag</Button>
           <Button startIcon={<FeedIcon />} variant='contained' sx={{backgroundColor:'black' , color:'white' , borderRadius:5 ,fontSize:10}}>quick view</Button>
            
           </Box>
        </FadeIn>}
    </Card>
    <Box sx={{marginTop:2 , color:!darkTheme?'black':'white'}}>
        <Typography variant='h5' sx={{marginLeft:2}}>{props.data.name}</Typography>
        <Box sx={{display:'flex' , justifyContent:'space-between' , marginTop:2}}>
        <Box sx={{color:'#1FAB56' , borderColor:'#1FAB56' ,fontWeight:800 , borderWidth:2,borderRadius:3 ,border:3 , padding:1}}>$ {props.data.price}</Box>
        <Box  sx={{display:'flex' , alignItems:'center'}}>
        <GradeIcon sx={{color:'#FFCF00'}}/>
        <Typography>{props.data.ratings?props.data.ratings :"No Rating"}</Typography>
        </Box>
        </Box>

    </Box>
   </Box>
  )
}

export default ProductTwo