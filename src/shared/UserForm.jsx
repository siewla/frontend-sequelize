import React, { useState } from "react";
import { FormControl, InputLabel, Input, Button } from "@mui/material";

const UserForm = ({ setEmail, setPassword, handleSubmit, buttonSubmitLabel }) => {
  return (
    <React.Fragment>
      <FormControl>
        <InputLabel htmlFor="email">Email</InputLabel>
        <Input id="email" onChange={(e) => setEmail(e.target.value)} />
      </FormControl>
      <FormControl>
        <InputLabel htmlFor="password">Password</InputLabel>
        <Input id="password" onChange={(e) => setPassword(e.target.value)} />
      </FormControl>
      <Button onClick={handleSubmit}>{buttonSubmitLabel}</Button>
    </React.Fragment>
  );
};

export default UserForm;
