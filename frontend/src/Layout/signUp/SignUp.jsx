import {
  Button,
  FormControl,
  IconButton,
  InputBase,
  TextField,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import GoogleIcon from "@mui/icons-material/Google";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import { useForm } from "react-hook-form";
import { signUp } from "../../Services/services";
import { useDispatch, useSelector } from "react-redux";
import ToasterContainer from "../../Components/ToasterContainer/ToasterContainer";
import { myToast } from "../../Components/ToasterContainer/tostify";
function SignUp() {
  const { darkTheme } = useSelector((state) => state.customReducer);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setConfirmPassword] = useState(false);
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();
  const onSubmit = (data) => {
    signUp(
      data,
      (res) => {
        if (res.status === 201) {
          dispatch({ type: "setUser", payload: res.data.user });
          myToast("success", "account created and logged in successfully");
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
          Sign Up
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

          <Box>
            <Typography>Name</Typography>
            <TextField
              placeholder="Name."
              {...register("name")}
              sx={{ width: "100%" }}
            />
            <Typography marginTop={2}>Email address</Typography>
            <TextField
              sx={{ width: "100%" }}
              placeholder="example@example.com"
              {...register("email")}
            />
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                marginTop: 2,
              }}
            >
              <Typography>Password</Typography>
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
              />
              <IconButton
                onClick={() => {
                  setShowPassword(!showPassword);
                }}
              >
                <RemoveRedEyeIcon />
              </IconButton>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                marginTop: 2,
              }}
            >
              <Typography>Confirm Password</Typography>
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
                type={!showConfirmPassword ? "password" : "confirmPassword"}
                {...register("confirmPassword")}
              />
              <IconButton
                onClick={() => {
                  setConfirmPassword(!showConfirmPassword);
                }}
              >
                <RemoveRedEyeIcon />
              </IconButton>
            </Box>
            <Button
              onClick={handleSubmit(onSubmit)}
              variant="contained"
              sx={{ marginY: 2, padding: 2, borderRadius: 10, width: "100%" }}
            >
              Continue
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default SignUp;
