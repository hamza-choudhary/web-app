import {
  Box,
  Button,

  CardMedia,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import AddOne from "../../Components/Add/AddOne";
import GradeIcon from "@mui/icons-material/Grade";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import StarIcon from "@mui/icons-material/Star";
import Review from "../../Components/Review/Review";
import LoopIcon from '@mui/icons-material/Loop';
import LanguageIcon from '@mui/icons-material/Language';
import BookmarkAddedIcon from '@mui/icons-material/BookmarkAdded';
function ProductDetails() {
  const { darkTheme } = useSelector((state) => state.customReducer);
  const [expanded, setExpanded] = useState(false);
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <Box
      sx={{
        backgroundColor: !darkTheme ? "#fff" : "#0F172A",
        color: darkTheme ? "#fff" : "#000",
        paddingX: {
          md: 25,
          xs: 5,
        },
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "space-around",
          paddingY: 5,
          gap: 5,
        }}
      >
        <Box>
          <CardMedia
            alt=" "
            image="https://chisnghiax.com/ciseco/static/media/detail1.f45e3a4d9bfeafd2f70b.jpg"
            sx={{
              width: { xs: 300, md: 800 },
              height: { xs: 300, md: 800 },
              borderRadius: 5,
              marginBottom: 5,
            }}
          />
          <Box sx={{ display: "flex", justifyContent: "space-around" }}>
            <CardMedia
              alt=" "
              image="https://chisnghiax.com/ciseco/static/media/detail2.15a523b16c02d0246953.jpg"
              sx={{
                width: { xs: 150, lg: 300 },
                height: { xs: 200, lg: 350 },
                borderRadius: 5,
                marginX: 1,
              }}
            />
            <CardMedia
              alt=" "
              image="https://chisnghiax.com/ciseco/static/media/detail3.5a27cd1769627a6e4f5d.jpg"
              sx={{
                width: { xs: 150, lg: 300 },
                height: { xs: 200, lg: 350 },
                borderRadius: 5,
                marginX: 1,
              }}
            />
          </Box>
        </Box>
        <Box>
          <Typography
            variant="h4"
            sx={{ textAlign: { xs: "center", md: "left" } }}
          >
            Heavy Weight Shoes
          </Typography>
          <Box display={"flex"} justifyContent={"space-between"} marginY={5}>
            <Box
              sx={{
                color: "#1FAB56",
                borderColor: "#1FAB56",
                fontWeight: 800,
                borderWidth: 2,
                borderRadius: 3,
                border: 3,
                padding: 1,
              }}
            >
              RS.200
            </Box>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <GradeIcon sx={{ color: "#FFCF00" }} />
              <Typography>4.5(36 reviews)</Typography>
            </Box>
          </Box>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 2,
              flexDirection: 'column'
            }}
          >
            <Box
              sx={{
                backgroundColor: !darkTheme ? "#F5F8FB" : "#192436",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: 1,
                borderRadius: 10,
                width: "100%",
              }}
            >
              <IconButton>
                <AddIcon />
              </IconButton>
              <Typography sx={{ marginX: 4 }}>20</Typography>
              <IconButton>
                <RemoveIcon />
              </IconButton>
            </Box>
            <Button
              variant="contained"
              sx={{ width: "100%", borderRadius: 10, padding: 2 }}
              startIcon={<LocalMallIcon />}
            >
              Add to cart
            </Button>
          </Box>
          <Box sx={{ marginY: 5 }}>
            <Accordion
              expanded={expanded === "panel1"}
              onChange={handleChange("panel1")}
              sx={{ backgroundColor: !darkTheme ? "#F5F8FB" : "#192436" }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1bh-content"
                id="panel1bh-header"
              >
                <Typography>General settings</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Nulla facilisi. Phasellus sollicitudin nulla et quam mattis
                  feugiat. Aliquam eget maximus est, id dignissim quam.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion
             expanded={expanded === 'panel2'} onChange={handleChange('panel2')}
              sx={{ backgroundColor: !darkTheme ? "#F5F8FB" : "#192436" }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1bh-content"
                id="panel1bh-header"
              >
                <Typography>General settings</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Nulla facilisi. Phasellus sollicitudin nulla et quam mattis
                  feugiat. Aliquam eget maximus est, id dignissim quam.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion
             expanded={expanded === 'panel3'} onChange={handleChange('panel3')}
              sx={{ backgroundColor: !darkTheme ? "#F5F8FB" : "#192436" }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1bh-content"
                id="panel1bh-header"
              >
                <Typography>General settings</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Nulla facilisi. Phasellus sollicitudin nulla et quam mattis
                  feugiat. Aliquam eget maximus est, id dignissim quam.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion
          expanded={expanded === 'panel4'} onChange={handleChange('panel4')}
              sx={{ backgroundColor: !darkTheme ? "#F5F8FB" : "#192436" }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1bh-content"
                id="panel1bh-header"
              >
                <Typography>General settings</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Nulla facilisi. Phasellus sollicitudin nulla et quam mattis
                  feugiat. Aliquam eget maximus est, id dignissim quam.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: {md:'left' , xs:'center'},
              gap: 2,
              color: "black",
            }}
          >
             <Box
              sx={{
                backgroundColor: "#FFFBEB",
                borderRadius: 5,
                paddingX: 5,
                paddingY: 2,
              }}
            >
              <LocalShippingIcon />
              <Typography variant="h6">Free shipping</Typography>
              <Typography variant="body2">On orders over $50.00</Typography>
            </Box>
            <Box
              sx={{
                backgroundColor: "#FEF2F2",
                borderRadius: 5,
                paddingX: 5,
                paddingY: 2,
              }}
            >
             <LoopIcon />
              <Typography variant="h6">Free shipping</Typography>
              <Typography variant="body2">On orders over $50.00</Typography>
            </Box>
            <Box
              sx={{
                backgroundColor: "#F0F9FF",
                borderRadius: 5,
                paddingX: 5,
                paddingY: 2,
              }}
            >
              <LanguageIcon />
              <Typography variant="h6">Free shipping</Typography>
              <Typography variant="body2">On orders over $50.00</Typography>
            </Box>
            <Box
              sx={{
                backgroundColor: "#F0FDF4",
                borderRadius: 5,
                paddingX: 5,
                paddingY: 2,
              }}
            >
            <BookmarkAddedIcon />
              <Typography variant="h6">Free shipping</Typography>
              <Typography variant="body2">On orders over $50.00</Typography>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box sx={{ borderTop: 0.5, paddingY: 5, marginY: 5 }}>
        <Typography variant="h5" sx={{ display: "flex", gap: 2 ,fontWeight:800 }}>
          <StarIcon fontSize="large"/>
          4,87 · 142 Reviews
        </Typography>
        <Grid container>
          <Grid item xs={12} md={6}>
            <Review />
          </Grid>
          <Grid item xs={12} md={6}>
            <Review />
          </Grid>
          <Grid item xs={12} md={6}>
            <Review />
          </Grid>
          <Grid item xs={12} md={6}>
            <Review />
          </Grid>
        </Grid>
        <Button variant="contained" sx={{borderRadius:10 , fontSize:16 , textTransform:"capitalize"}}>Show me all 200</Button>
      </Box>
      <AddOne />
    </Box>
  );
}

export default ProductDetails;
