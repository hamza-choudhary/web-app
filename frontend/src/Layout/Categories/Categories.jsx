import { Box, Typography } from "@mui/material";
import React, { useEffect } from "react";
import AddTwo from "../../Components/Add/AddTwo";
import ProductTwo from "../../Components/Product/ProductTwo";
import { useDispatch, useSelector } from "react-redux";
import { getCategoricalProduct } from "../../Services/services";
import ToasterContainer from "../../Components/ToasterContainer/ToasterContainer";
import { myToast } from "../../Components/ToasterContainer/tostify";
import {useLocation} from 'react-router-dom';
function Categories() {
  const { product, darkTheme } = useSelector((state) => state.customReducer);
  const dispatch = useDispatch();
  const location = useLocation();
  const title = location.state.title
  useEffect(() => {
    getCategoricalProduct(
      title.toLowerCase(),
      (res) => {
        if (res.data.success) {
          dispatch({ type: "getFilteredProducts", payload: res.data.product });
          myToast("success", "data get Successfully");
        } else {
          myToast("error", res.data.message);
        }
      },
      (err) => {
        myToast("error", err.message);
      }
    );
  },[]);

  return (
    <Box
      sx={{
        backgroundColor: !darkTheme ? "#fff" : "#0F172A",
        color: darkTheme ? "#fff" : "#000",
        paddingX: {
          md: 25,
          xs: 5,
        },
        paddingY: {
          xs: 5,
          md: 15,
        },
      }}
    >
      <ToasterContainer />
      <Typography variant="h4" marginY={1} sx={{textTransform:'capitalize'}}>
      {title} Collection
      </Typography>
      <Typography
        variant="subtitle1"
        sx={{ width: { md: window.innerWidth / 3 }, marginBottom: 10 }}
      >
        We not only help you design exceptional products, but also make it easy
        for you to share your designs with more like-minded people.
      </Typography>
      <Box
        sx={{
          borderTopWidth: 1,
          borderTopColor: "gray",
          borderTopStyle: "solid",
          marginY: 4,
        }}
      ></Box>

      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: 2,
          justifyContent: "center",
        }}
      >
        {product.map((data , key) => {
          return(
            <ProductTwo key={key} data={data}/>
          )
        })}
        
      </Box>
      <AddTwo/>
    </Box>
  );
}

export default Categories;
