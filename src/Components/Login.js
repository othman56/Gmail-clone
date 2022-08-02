import { Button } from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import Logo from "../Components/gmail-logo.png";
import { login } from "../features/userSlice";
import { auth, provider } from "../firebase";
import "./Login.css";

function Login() {
  const dispatch = useDispatch();
  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then(({ user }) => {
        dispatch(
          login({
            displayName: user.displayName,
            email: user.email,
            photoUrl: user.photoURL,
          })
        );
      })
      .catch((error) => alert(error.message));
  };
  return (
    <div className="login">
      <div className="login__container">
        <img src={Logo} alt="" />
        <Button
          variant="contained"
          color="primary"
          onClick={signIn}
          className="login__button"
        >
          Login
        </Button>
      </div>
    </div>
  );
}

export default Login;
