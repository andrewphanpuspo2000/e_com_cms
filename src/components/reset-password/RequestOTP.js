import React, { useRef } from "react";
import { Button, Form } from "react-bootstrap";
import { CustomInput } from "../user-input/CustomInput";
import { reqOTPAction } from "../admin-signup/adminAction";

const RequestOTP = ({ setForm, setEmail }) => {
  const emailRef = useRef();
  const handleSendOTP = async () => {
    const { value } = emailRef.current;
    console.log(value);
    if (value.includes("@") && value.includes(".")) {
      const result = await reqOTPAction(value);

      if (result === "success") {
        setForm("password");
        setEmail(value);
      }
    }
  };
  return (
    <Form>
      <h3>Request OTP</h3>
      <hr />
      <CustomInput
        emailRef={emailRef}
        fieldName="Email"
        placeholder="sam@gmail.com"
      />
      <Button className="w-100" variant="dark" onClick={handleSendOTP}>
        Request OTP
      </Button>
    </Form>
  );
};

export default RequestOTP;
