import { Box } from "@mui/system";
import React, { useState } from "react";
import MyCarousel from "../../Components/Carousel/MyCarousel";
import HorizontalScroll from "../../Components/HorizontalScroll/HorizontalScroll";
import { useSelector } from "react-redux";
import {
  BottomNavigation,
  BottomNavigationAction,
  Button,
  Card,
  CardMedia,
  Chip,
  Link,
  Typography,
} from "@mui/material";
import FemaleIcon from "@mui/icons-material/Female";
import MaleIcon from "@mui/icons-material/Male";
import BedroomBabyIcon from "@mui/icons-material/BedroomBaby";
import SportsCricketIcon from "@mui/icons-material/SportsCricket";
import BakeryDiningIcon from "@mui/icons-material/BakeryDining";
import DiamondIcon from "@mui/icons-material/Diamond";
import AddOne from "../../Components/Add/AddOne";
import AddTwo from "../../Components/Add/AddTwo";
import {useNavigate ,Link as MyLink} from 'react-router-dom'

const data = [
  {
    id: 1,
    src: "https://chisnghiax.com/ciseco/static/media/1.a586787f3de7735e65d3.png",
    color: "#F4F2DF",
  },
  {
    id: 2,
    src: "https://chisnghiax.com/ciseco/static/media/5.46eedaa5a6a199045d6d.png",
    color: "#F4E9E9",
  },
  {
    id: 3,
    src: "https://chisnghiax.com/ciseco/static/media/4.452d9d5088a11b0c0d6a.png",
    color: "#EfF6FF",
  },
  {
    id: 4,
    src: "https://chisnghiax.com/ciseco/static/media/3.dea1e24d9b1c408e5839.png",
    color: "#F0F2DF",
  },
];

function Home() {
  const { darkTheme } = useSelector((state) => state.customReducer);
  const [value, setValue] = useState('women');
  const navigate = useNavigate()
  return (
    <Box>
      <MyCarousel />
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
        <HorizontalScroll
          object={1}
          data={data}
          title1={"Discover more."}
          title2={"Good things are waiting for you"}
        />

        <Box
          sx={{
            display: "flex",
            paddingY: 20,
            justifyContent: "space-evenly",
            borderTopWidth: 1,
            borderTopColor: "gray",
            borderTopStyle: "solid",
            borderBottomWidth: 1,
            borderBottomColor: "gray",
            borderBottomStyle: "solid",
            backgroundImage: {
              xl: `url("https://chisnghiax.com/ciseco/static/media/VectorHIW.1a377ddaa77cc48b5b38a6739a397aff.svg")`,
            },
            backgroundRepeat: "no-repeat",
            backgroundPositionY: 200,
            flexWrap:{
              xs:'wrap',
              md:'nowrap'
            },
            alignItems: "center",
          }}
        >
          <Box
            component={"div"}
            sx={{ textAlign: "center", width: 250, margin: 5 }}
          >
            <img
              style={{
                borderRadius: 10,
              }}
              src="https://chisnghiax.com/ciseco/static/media/HIW1img.0a618bef4b830b5c682b.png"
              alt=""
              width={150}
            />
            <Box sx={{ marginY: 2 }}>
              <Chip
                size="small"
                label="step 1"
                sx={{ backgroundColor: "#FEE2E2", color: "black" }}
                component={"div"}
              />
            </Box>
            <Typography variant="h6">Filter & Discover</Typography>
            <Typography variant="body2">
              Smart filtering and suggestions make it easy to find
            </Typography>
          </Box>
          <Box
            component={"div"}
            sx={{ textAlign: "center", width: 250, margin: 5 }}
          >
            <img
              style={{
                borderRadius: 10,
              }}
              src="https://chisnghiax.com/ciseco/static/media/HIW2img.3d1e1bf2693a9272e96a.png"
              alt=""
              width={150}
            />
            <Box sx={{ marginY: 2 }}>
              <Chip
                size="small"
                label="step 1"
                sx={{ backgroundColor: "#E0E7FF", color: "black" }}
                component={"div"}
              />
            </Box>
            <Typography variant="h6">Add to bag</Typography>
            <Typography variant="body2">
              Easily select the correct items and add them to the cart
            </Typography>
          </Box>
          <Box
            component={"div"}
            sx={{ textAlign: "center", width: 250, margin: 5 }}
          >
            <img
              style={{
                borderRadius: 10,
              }}
              src="https://chisnghiax.com/ciseco/static/media/HIW3img.8b344c9a046e6b85a9ab.png"
              alt=""
              width={150}
            />
            <Box sx={{ marginY: 2 }}>
              <Chip
                size="small"
                label="step 1"
                sx={{ backgroundColor: "#FEF9C3", color: "black" }}
                component={"div"}
              />
            </Box>
            <Typography variant="h6">Fast shipping</Typography>
            <Typography variant="body2">
              The carrier will confirm and ship quickly to you
            </Typography>
          </Box>
          <Box
            component={"div"}
            sx={{ textAlign: "center", width: 250, margin: 5 }}
          >
            <img
              style={{
                borderRadius: 10,
              }}
              src="https://chisnghiax.com/ciseco/static/media/HIW4img.c6a12d19e09f27d32678.png"
              alt=""
              width={150}
            />
            <Box sx={{ marginY: 2 }}>
              <Chip
                size="small"
                label="step 1"
                sx={{ backgroundColor: "#F3E8FF", color: "black" }}
                component={"div"}
              />
            </Box>
            <Typography variant="h6">Enjoy the product</Typography>
            <Typography variant="body2">
              Have fun and enjoy your 5-star quality products
            </Typography>
          </Box>
        </Box>

        <AddTwo />

        <Box
          sx={{
            background: !darkTheme ? "#F7F7F9" : "#0C1222",
            borderRadius: 5,
            padding: {
              md: 10,
            },
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Typography variant="h3" sx={{ textAlign: "center" }}>
            Start exploring.
          </Typography>
          <Box
            sx={{
              display: {
                md: "flex",
                xs: "none",
              },
              justifyContent: "center",
            }}
          >
            <BottomNavigation
              sx={{
                background: !darkTheme ? "white" : "#1F2937",
                marginTop: 5,
                borderRadius: 10,
                padding: 0.5,
              }}
              showLabels
              value={value}
              onChange={(event, newValue) => {
                setValue(newValue);
              }}
            >
              <BottomNavigationAction
                label="Women"
                onClick={()=>navigate('/categories' , { state: { title: 'women' } })}
                icon={<FemaleIcon />}
                value="Women"
                sx={{
                  borderRadius: 10,
                  backgroundColor:
                    value === "women" && darkTheme
                      ? "#0C1222"
                      : value === "women" && !darkTheme
                      ? "#1F2937"
                      : "inherit",
                  display: "flex",
                }}
              >
                </BottomNavigationAction>
              
              <BottomNavigationAction
                label="Man"
                icon={<MaleIcon />}
                value="man"
                onClick={()=>navigate('/categories' , { state: { title: 'man' } })}
                sx={{
                  borderRadius: 10,
                  backgroundColor:
                    value === "man" && darkTheme
                      ? "#0C1222"
                      : value === "man" && !darkTheme
                      ? "#1F2937"
                      : "inherit",
                }}
              />
              <BottomNavigationAction
                label="Kids"
                onClick={()=>navigate('/categories' , { state: { title: 'Kids' } })}
                icon={<BedroomBabyIcon />}
                value="kids"
                sx={{
                  borderRadius: 10,
                  backgroundColor:
                    value === "kids" && darkTheme
                      ? "#0C1222"
                      : value === "kids" && !darkTheme
                      ? "#1F2937"
                      : "inherit",
                }}
              />
              <BottomNavigationAction
                label="Sports"
                icon={<SportsCricketIcon />}
                onClick={()=>navigate('/categories' , { state: { title: 'Sports' } })}
                value="sports"
                sx={{
                  borderRadius: 10,
                  backgroundColor:
                    value === "sports" && darkTheme
                      ? "#0C1222"
                      : value === "sports" && !darkTheme
                      ? "#1F2937"
                      : "inherit",
                }}
              />
              <BottomNavigationAction
                label="Beauty"
                onClick={()=>navigate('/categories' , { state: { title: 'Beauty' } })}
                icon={<BakeryDiningIcon />}
                value="beauty"
                sx={{
                  borderRadius: 10,
                  backgroundColor:
                    value === "beauty" && darkTheme
                      ? "#0C1222"
                      : value === "beauty" && !darkTheme
                      ? "#1F2937"
                      : "inherit",
                }}
              />
              <BottomNavigationAction
                label="Jewelry"
                onClick={()=>navigate('/categories' , { state: { title: 'Jewelry' } })}
                icon={<DiamondIcon />}
                value="jewelry"
                sx={{
                  borderRadius: 10,
                  backgroundColor:
                    value === "jewelry" && darkTheme
                      ? "#0C1222"
                      : value === "jewelry" && !darkTheme
                      ? "#1F2937"
                      : "inherit",
                }}
              />
            </BottomNavigation>
          </Box>
          <Box
            sx={{
              display: {
                md: "none",
                xs: "flex",
              },
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            <Button
              variant="contained"
              startIcon={<FemaleIcon />}
              sx={{ textTransform: "capitalize", margin: 1 }}
              onClick={()=>navigate('/categories' , { state: { title: 'Women' } })}
            >
              Women
            </Button>
            <Button
              variant="contained"
              startIcon={<MaleIcon />}
              sx={{ textTransform: "capitalize", margin: 1 }}
              onClick={()=>navigate('/categories' , { state: { title: 'Man' } })}
            >
              Man
            </Button>
            <Button
              variant="contained"
              startIcon={<BedroomBabyIcon />}
              sx={{ textTransform: "capitalize", margin: 1 }}
              onClick={()=>navigate('/categories' , { state: { title: 'Kids' } })}
            >
              Kids
            </Button>
            <Button
              variant="contained"
              startIcon={<SportsCricketIcon />}
              sx={{ textTransform: "capitalize", margin: 1 }}
              onClick={()=>navigate('/categories' , { state: { title: 'Sports' } })}
            >
              Sports
            </Button>
            <Button
              variant="contained"
              startIcon={<BakeryDiningIcon />}
              sx={{ textTransform: "capitalize", margin: 1 }}
              onClick={()=>navigate('/categories' , { state: { title: 'Beauty' } })}
            >
              Beauty
            </Button>
            <Button
              variant="contained"
              startIcon={<DiamondIcon />}
              sx={{ textTransform: "capitalize", margin: 1 }}
              onClick={()=>navigate('/categories' , { state: { title: 'Jewelry' } })}
            >
              Jewelry
            </Button>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: {lg:'left',xs:'center'},
              flexWrap: "wrap",
              gap:{md:5 }
            }}
          >
            <Card
              sx={{
                marginY: 5,
                background: !darkTheme ? "white" : "#1F2937",
                borderRadius: 5,
                width: 250,
                padding: 2,
                "&:hover": { cursor: "pointer" },
                backgroundImage: `url("https://chisnghiax.com/ciseco/static/media/explore1.775937cb2511726e48c3fc70025fab60.svg")`,
                backgroundPositionX: 300,
              }}
            >
              <Box
                display={"flex"}
                justifyContent={"space-between"}
                alignItems={"center"}
              >
                <CardMedia
                  image="	https://chisnghiax.com/ciseco/static/media/explore1.3017824afbd558dae323.png"
                  sx={{
                    width: 50,
                    height: 50,
                    backgroundColor: "#F7F7F9",
                    borderRadius: 100,
                  }}
                />
                <Typography>200</Typography>
              </Box>
              <Box marginTop={10}>
                <Box>
                  <Typography color={"gray"}>Manufacturar</Typography>
                  <Typography variant="h4">Backpack</Typography>
                </Box>

                <Link
                  component="button"
                  variant="body2"
                  onClick={() => {
                    console.info("I'm a button.");
                  }}
                  sx={{ textDecoration: "none", marginTop: 15 }}
                >
                  Button Link
                </Link>
              </Box>
            </Card>
            <Card
              sx={{
                marginY: 5,
                background: !darkTheme ? "white" : "#1F2937",
                borderRadius: 5,
                width: 250,
                padding: 2,
                "&:hover": { cursor: "pointer" },
                backgroundImage: `url("https://chisnghiax.com/ciseco/static/media/explore2.1ceb7512bd65219296c27bc4ecc85ff6.svg")`,
                backgroundPositionX: 300,
              }}
            >
              <Box
                display={"flex"}
                justifyContent={"space-between"}
                alignItems={"center"}
              >
                <CardMedia
                  image="https://chisnghiax.com/ciseco/static/media/explore2.63762511959d452238b7.png"
                  sx={{
                    width: 50,
                    height: 50,
                    backgroundColor: "#F7F7F9",
                    borderRadius: 100,
                  }}
                />
                <Typography>200</Typography>
              </Box>
              <Box marginTop={10}>
                <Box>
                  <Typography color={"gray"}>Manufacturar</Typography>
                  <Typography variant="h4">Backpack</Typography>
                </Box>

                <Link
                  component="button"
                  variant="body2"
                  onClick={() => {
                    console.info("I'm a button.");
                  }}
                  sx={{ textDecoration: "none", marginTop: 15 }}
                >
                  Button Link
                </Link>
              </Box>
            </Card>
            <Card
              sx={{
                marginY: 5,
                background: !darkTheme ? "white" : "#1F2937",
                borderRadius: 5,
                width: 250,
                padding: 2,
                "&:hover": { cursor: "pointer" },
                backgroundImage: `url("https://chisnghiax.com/ciseco/static/media/explore3.94b86e236316334ee0f6d22e7c41e3bc.svg")`,
                backgroundPositionX: 300,
              }}
            >
              <Box
                display={"flex"}
                justifyContent={"space-between"}
                alignItems={"center"}
              >
                <CardMedia
                  image="	https://chisnghiax.com/ciseco/static/media/explore3.c9517d184abb769a2ac9.png"
                  sx={{
                    width: 50,
                    height: 50,
                    backgroundColor: "#F7F7F9",
                    borderRadius: 100,
                  }}
                />
                <Typography>200</Typography>
              </Box>
              <Box marginTop={10}>
                <Box>
                  <Typography color={"gray"}>Manufacturar</Typography>
                  <Typography variant="h4">Backpack</Typography>
                </Box>

                <Link
                  component="button"
                  variant="body2"
                  onClick={() => {
                    console.info("I'm a button.");
                  }}
                  sx={{ textDecoration: "none", marginTop: 15 }}
                >
                  Button Link
                </Link>
              </Box>
            </Card>
            <Card
              sx={{
                marginY: 5,
                background: !darkTheme ? "white" : "#1F2937",
                borderRadius: 5,
                width: 250,
                padding: 2,
                "&:hover": { cursor: "pointer" },
                backgroundImage: `url("https://chisnghiax.com/ciseco/static/media/explore9.9cb58d1f5a9bf47be0be877012199caa.svg")`,
                backgroundPositionX: 300,
              }}
            >
              <Box
                display={"flex"}
                justifyContent={"space-between"}
                alignItems={"center"}
              >
                <CardMedia
                  image="	https://chisnghiax.com/ciseco/static/media/explore9.d3120ad348b834b14970.png"
                  sx={{
                    width: 50,
                    height: 50,
                    backgroundColor: "#F7F7F9",
                    borderRadius: 100,
                  }}
                />
                <Typography>200</Typography>
              </Box>
              <Box marginTop={10}>
                <Box>
                  <Typography color={"gray"}>Manufacturar</Typography>
                  <Typography variant="h4">Backpack</Typography>
                </Box>

                <Link
                  component="button"
                  variant="body2"
                  onClick={() => {
                    console.info("I'm a button.");
                  }}
                  sx={{ textDecoration: "none", marginTop: 15 }}
                >
                  Button Link
                </Link>
              </Box>
            </Card>
            <Card
              sx={{
                marginY: 5,
                background: !darkTheme ? "white" : "#1F2937",
                borderRadius: 5,
                width: 250,
                padding: 2,
                "&:hover": { cursor: "pointer" },
                backgroundImage: `url("https://chisnghiax.com/ciseco/static/media/explore6.d820796c6233d6fd068004c49905dda6.svg")`,
                backgroundPositionX: 300,
              }}
            >
              <Box
                display={"flex"}
                justifyContent={"space-between"}
                alignItems={"center"}
              >
                <CardMedia
                  image="https://chisnghiax.com/ciseco/static/media/explore6.329a9a9286612cf4e1b5.png"
                  sx={{
                    width: 50,
                    height: 50,
                    backgroundColor: "#F7F7F9",
                    borderRadius: 100,
                  }}
                />
                <Typography>200</Typography>
              </Box>
              <Box marginTop={10}>
                <Box>
                  <Typography color={"gray"}>Manufacturar</Typography>
                  <Typography variant="h4">Backpack</Typography>
                </Box>

                <Link
                  component="button"
                  variant="body2"
                  onClick={() => {
                    console.info("I'm a button.");
                  }}
                  sx={{ textDecoration: "none", marginTop: 15 }}
                >
                  Button Link
                </Link>
              </Box>
            </Card>
            <Card
              sx={{
                marginY: 5,
                background: !darkTheme ? "white" : "#1F2937",
                borderRadius: 5,
                width: 250,
                padding: 2,
                "&:hover": { cursor: "pointer" },
                backgroundImage: `url("https://chisnghiax.com/ciseco/static/media/explore5.31cdd38104cf6ff9b87f13d23831c063.svg")`,
                backgroundPositionX: 300,
              }}
            >
              <Box
                display={"flex"}
                justifyContent={"space-between"}
                alignItems={"center"}
              >
                <CardMedia
                  image="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKgAAACoCAYAAAB0S6W0AAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAACYWSURBVHgB7X0LkCXVed5/uu9rdmZnZ3d2tcBqBUZICFCkIGSk8BIoMmRBkWARiIoMOCWVIHHhSlVkyomSQms5QRZJKhFxXMKpilKqQgpKYqqMlze2LJANEgJRFtayC2jRLgv7mPfO3Ed3H5/H///n754Bmyo/5k6fD+7Ovf2+t7/+3+c/ABERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERfz+47bbbkre6/S233DIOERF/m9Baq/POu/CXzzjjjD8788wzv/DZz35205ttf+utt66/6KKLPnHa6affe9ppp+0172/4whe+MAoRbxkKIt4Ul1566fbXXz98+8LC8asXFhc6g34fJjdOvrp+fOyesfGNz27dsumFpN1e7B/vrT86fey03uLCR7q9/iXdbnfb9Mx0I1EpTE5OFutHR57cNDFx++4HH7xPKaUh4q+FSNA3gFHPrYcffvjGY8emb+9n2WSeZZDlORw/fhw6nQ4o88tZ8qVJAio1L7tAa2jYz0kKhS5gdm4OUrNuw/i42S6FZrO5NDIy8ujY2Lq7zz333Ae+8pWvTEPEmyIStIIbbrhh29PPPPtfDSEvzAbZ1iIvQJv/BoacloDdXteQrmHe2+XgiJmmqSFr4v4qtywBbd7Mzs5Cu92GsbFRsDJT2f/M9r1+F1qt9uKmTRP/e9NJm3579//fvR8iVkQkKOKyyy7bNH306FVTs7O/2e8PTjJi0EhDIwntL2SIWZiXNqQcDDLDzcLapY64FpZ0DUPOhiWuRaIcSaenp2HDhnFot1r2EP7HNv/0jJlgCd1sNmCk0z64bt3Y77zrXf/gG9/85tdfi+q/jNoT1KjyxiOPPLLz2NT0Hd3F7jvAaWrLJq+ylSGehaWNJWSv13Pv8yJ3UtKtM9s6CZp4yZkqr/aPHZuCLVs2Q2KWI5fdsa25YBY6Uivcv9VqHhgfX/+tk08++c5vf/vbP4cIh9oS9JprrkkPHz58+bEjU/92sbv0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TpI7p5C8goxkiuRF/RhaCwm6bdu2BROZ7HIQXfuRnEmpo5gSw4qXQ7a7sXOyW5I6gou+9joEQyFN/bNvt7MOmm8qhv3rUdeT6RBm9yidER0l0TFUx0D9msQdd9yxlCa+O7GsXl/pdrMtadOR7uU/W5JZYmbZwP112wKqeZzbvcCIQJEXMBhkZts8ePvmP78sc/tr81Jm3xy0IDamS/Eaibgap6Qx8dvaOUm1+MJf+tKXsD2c8K5NetOVtXEes2BVLSWtd6poL82V8ibkw2ZCqlJH1KSBneiMlLTkzpHoss7TSeCsKLUBs9cipXmipYmBMVXzLtVqq9lf1Wkyr1oQdGpqal2eZRNSRfpWMqjSFTWdYxfGIeFZir054D8D7uPf23/tTMRbNky4qtOjx44qm6S3q93eaUqhfJSwhZ9AQZNkthLXyFGzjzcLaJobnFwBe9Xbz42sMQk1Qy0IunPnzsU/3L17Xg/01sRJKxSolHs3KpmyOkSSBAPyXpIluXYT1um5NEkLs/+sLvLZVqN5zGwxawj63MTG8T2tkdZE9/j8O9E6aJmjThrT4G1mxw3mYdicJmqTHTpsVHzTjqB3s8slXoU7ohZ+1GiCEyfYmoHczhdv/mbmgIMsDppbk7j44ovzNG1MWannhFPu6UieuyGANpxdME7MVCNN95vXTww/Xm4mzZcbo40DraQ1vbi4uNRut5cMOXWn0+mdddZZ3a9//esZqds///PnVjy3VcnXXnttsmfPno4dXdpuw1ieNLZmS/oEY4y+M9P9s/JcnZHn2XZzbRNZkduhxUqj3evL+3yiv46tb2rzRL7n9HffPzu/8EuJSuaMhDpirMjXCpX/vJE0Xmi3Oz/udJp/cdFFF+2/8847e/B3DEviq666asPevXtPNg/ANuNAnWnM1NMGWf/EPNdbDDE3GYk91mo1k3379m2rkw1aG4KeffbZ/9h40GpycvKnH/nIR17btWvX0KRliMDdbnfigQce+BlERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERESsFfwlSmzgF7bMLE8AAAAASUVORK5CYII="
                  sx={{
                    width: 50,
                    height: 50,
                    backgroundColor: "#F7F7F9",
                    borderRadius: 100,
                  }}
                />
                <Typography>200</Typography>
              </Box>
              <Box marginTop={10}>
                <Box>
                  <Typography color={"gray"}>Manufacturar</Typography>
                  <Typography variant="h4">Backpack</Typography>
                </Box>

                <Link
                  component="button"
                  variant="body2"
                  onClick={() => {
                    console.info("I'm a button.");
                  }}
                  sx={{ textDecoration: "none", marginTop: 15 }}
                >
                  Button Link
                </Link>
              </Box>
            </Card>
          </Box>
        </Box>
        <Box height={10}></Box>
      
<AddOne />
        
      </Box>
    </Box>
  );
}

export default Home;
