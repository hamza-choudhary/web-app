import { Card, Typography,Box, Button, CardMedia } from '@mui/material'
import React from 'react'
function ProductOne(props) {

  return (
    <Card sx={{backgroundColor:props.color  , width:{md:500 , xs:300} , boxShadow:'none' , padding:2 ,marginRight:5 ,marginTop:5 , color:'black'}}>
        <Box display={'flex'}>
        <Box>
            <Typography color={'gray'} variant='body2'>Explore new arrivals</Typography>
            <Typography variant='h5'>Shop the latest from top Brands</Typography>
            
        </Box>
        
            <CardMedia 
            image={props.src}
            sx={{height:{
              md:200,
              xs:100
            } , width:{
              md:200,
              xs:150
            }}}
            />
        
        </Box>
        <Button variant='contained' sx={{borderRadius:10,backgroundColor:'white', color:'gray' , "&:hover":{backgroundColor:'white'}}}>Show me all</Button>
    </Card>
  )
}

export default ProductOne