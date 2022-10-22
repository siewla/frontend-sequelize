import React, { useState } from "react";
import UserForm from "../shared/UserForm";
import axios from "axios";
import { Button } from "@mui/material";

const BACKEND_URL_LOGIN = "http://localhost:4000/users/login";
const BACKEND_URL_CHECK_SESSION = "http://localhost:4000/users/checksession";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async () => {
    try {
      const resp = await axios.post(
        BACKEND_URL_LOGIN,
        {
          email,
          password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      console.log(resp.data.message);
    } catch (err) {
      console.log(err.response.data.message);
    }
  };

  const checkSession = async () => {
    try {
      const resp = await axios.get(BACKEND_URL_CHECK_SESSION, {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      });
      console.log(resp.data.message); // you can see in console
    } catch (err) {
      console.log(err.response.data.message);
    }
  };

  return (
    <React.Fragment>
      <h2>Login Form</h2>
      <UserForm
        setEmail={setEmail}
        setPassword={setPassword}
        buttonSubmitLabel={"Login"}
        handleSubmit={handleSubmit}
      />

      <Button onClick={checkSession}>Check Session</Button>
    </React.Fragment>
  );
};

export default Login;
