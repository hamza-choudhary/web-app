import {
  Button,
  FormControl,
  IconButton,
  InputBase,
  Link,
  TextField,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import GoogleIcon from "@mui/icons-material/Google";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { login } from "../../Services/services";
import { useDispatch, useSelector } from "react-redux";
import ToasterContainer from "../../Components/ToasterContainer/ToasterContainer";
import { myToast } from "../../Components/ToasterContainer/tostify";
function Login() {
  const dispatch = useDispatch();
  const { darkTheme } = useSelector((state) => state.customReducer);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    login(
      data,
      (res) => {
        if (res.status === 200) {
          dispatch({ type: "setUser", payload: res.data.user });
          myToast("success", "login Successfully");
        } else {
          myToast("error", res.data.message);
        }
      },
      (err) => {
        myToast("error", err.message);
      }
    );
  };

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        paddingY: 20,
        backgroundColor: darkTheme ? "#0F172A" : "#fff",
        color: !darkTheme ? "#000" : "#fff",
      }}
    >
      <ToasterContainer />
      <Box
        sx={{
          border: 5,
          paddingY: 10,
          paddingX: { md: 20, xs: 5 },
          borderRadius: 10,
          borderColor: "",
        }}
      >
        <Typography variant="h3" sx={{ marginBottom: 4, textAlign: "center" }}>
          Login
        </Typography>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
          <Button
            variant="outlined"
            sx={{ textTransform: "capitalize" }}
            startIcon={<FacebookIcon />}
          >
            Continue with Facebook
          </Button>
          <Button
            variant="outlined"
            sx={{ textTransform: "capitalize" }}
            startIcon={<TwitterIcon />}
          >
            Continue with Twitter
          </Button>
          <Button
            variant="outlined"
            sx={{ textTransform: "capitalize" }}
            startIcon={<GoogleIcon />}
          >
            Continue with google
          </Button>
          <Box sx={{ position: "relative", textAlign: "center" }}>
            <Box sx={{ height: 2, backgroundColor: "#F0F9FF" }}></Box>
            <Typography
              component={"span"}
              sx={{
                position: "absolute",
                top: -10,
                backgroundColor: darkTheme ? "#0F172A" : "#fff",
                paddingX: 0.5,
              }}
            >
              OR
            </Typography>
          </Box>
          <FormControl variant="standard">
            <Typography>Email address</Typography>
            <TextField
              placeholder="ahsan.nuix@gmail.com"
              {...register("email")}
            defaultValue="ahsan.nuix@gmail.com"
            />
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                marginTop: 2,
              }}
            >
              <Typography>Password</Typography>
              <Typography>
                <Link
                  sx={{
                    "&:hover": { cursor: "pointer" },
                    color: "#16A372",
                    textDecoration: "none",
                  }}
                >
                  Forget Password
                </Link>
              </Typography>
            </Box>
            <Box
              sx={{
                border: 1,
                borderRadius: 1,

                padding: 1,
                display: "flex",
              }}
            >
              <InputBase
                type={!showPassword ? "password" : "text"}
                {...register("password")}
                defaultValue='admin@123'
              />
              <IconButton
                onClick={() => {
                  setShowPassword(!showPassword);
                }}
              >
                <RemoveRedEyeIcon />
              </IconButton>
            </Box>
            <Button
              onClick={handleSubmit(onSubmit)}
              variant="contained"
              sx={{ marginY: 2, padding: 2, borderRadius: 10 }}
            >
              Continue
            </Button>
          </FormControl>
          <Typography>
            New user?{" "}
            <Link
              sx={{
                "&:hover": { cursor: "pointer" },
                color: "#16A372",
                textDecoration: "none",
              }}
              onClick={() => {
                navigate("/signup");
              }}
            >
              Create an account
            </Link>
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default Login;
