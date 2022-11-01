import React, { useState } from "react";
import UserForm from "../shared/UserForm";
import axios from "axios";

const BACKEND_URL_REGISTER = process.env.REACT_APP_BACKEND_URL + "users/register";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async () => {
    try {
      const resp = await axios.post(BACKEND_URL_REGISTER, {
        email,
        password,
        firstName: "john",
        lastName: "doe",
      });
      console.log(resp.data.message);
    } catch (err) {
      console.log(err.response.data.message);
    }
  };

  return (
    <React.Fragment>
      <h2>Register Form</h2>
      <UserForm
        setEmail={setEmail}
        setPassword={setPassword}
        buttonSubmitLabel={"Register"}
        handleSubmit={handleSubmit}
      />
    </React.Fragment>
  );
};

export default Login;
