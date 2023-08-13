import React from "react";
import { Button, Form } from "react-bootstrap";
import { CustomInput } from "../user-input/CustomInput";

const PasswordOTP = () => {
  return (
    <Form className="p-4 border shadow-lg">
      <h3>Request OTP</h3>
      <hr />
      <CustomInput fieldName="Email" placeholder="sam@gmail.com" />
      <CustomInput fieldName="Password" placeholder="******" />
      <CustomInput fieldName="Confirm Password" placeholder="******" />
      <Button className="w-100" variant="dark">
        Confirm OTP
      </Button>
    </Form>
  );
};

export default PasswordOTP;
