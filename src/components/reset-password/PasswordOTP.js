import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { CustomInput } from "../user-input/CustomInput";

const PasswordOTP = ({ handleReset }) => {
  const [form, setForm] = useState({});
  const [error, setError] = useState("");
  const handleOnChange = (e) => {
    setError("");
    const { name, value } = e.target;
    if (name === "confirmPassword") {
      value === form.password
        ? setForm("")
        : setForm("Password and confirm password are not match");
    }
    if (name === "password") {
      value.length < 6 &&
        setError("password should be more than 6 number digits or letters ");
      !/[0-9]/.test(value) && setError("Please input number");
      !/[A-Z]/.test(value) && setError("Please input capital letter");
      !/[a-z]/.test(value) && setError("Please input small letter");
    }
    setForm({ ...form, [name]: value });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    handleReset(form);
  };

  useEffect(() => {
    console.log(form);
  }, [form]);
  return (
    <Form className="p-4 border shadow-lg" onSubmit={handleOnSubmit}>
      <h3>Request OTP</h3>
      <hr />
      <CustomInput
        name="otp"
        fieldName="OTP"
        placeholder="OTP Number...."
        type="number"
        handleOnChange={handleOnChange}
      />
      <CustomInput
        fieldName="Password"
        placeholder="******"
        name="password"
        type="password"
        handleOnChange={handleOnChange}
      />
      <CustomInput
        fieldName="Confirm Password"
        placeholder="******"
        name="confirmPassword"
        type="password"
        handleOnChange={handleOnChange}
      />

      <Button type="submit" className="w-100" variant="dark">
        Confirm OTP
      </Button>
      <div className="py-3 text-danger fw-bolder">{error}</div>
    </Form>
  );
};

export default PasswordOTP;
