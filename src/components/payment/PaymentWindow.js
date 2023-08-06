import React, { useEffect, useState } from "react";
import { CustomInput } from "../user-input/CustomInput";
import { Button, Form } from "react-bootstrap";
import { addMethodAction } from "./paymentAction";
import { useDispatch } from "react-redux";
import { setSystem } from "../modal/modalSlice";

const PaymentWindow = () => {
  const [form, setForm] = useState({});
  const initialState = {
    status: "",
    option: "",
    description: "",
  };
  const inputs = [
    {
      type: "text",
      required: true,
      placeholder: "Payment option",
      name: "option",
      fieldName: "Option",
      value: form.option,
    },
    {
      as: "textarea",
      rows: 3,
      required: true,
      placeholder: "Payment description",
      name: "description",
      fieldName: "Description",
      value: form.description,
    },
  ];

  const dispatch = useDispatch();
  const handleOnChange = (e) => {
    const { name, value, checked } = e.target;
    setForm({
      ...form,
      [name]: value,
      status: checked ? "active" : "inActive",
    });
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();
    const { status, option, description } = form;
    dispatch(addMethodAction({ status, option, description }));
    dispatch(setSystem(false));
    setForm(initialState);
  };

  useEffect(() => {
    console.log(form);
  }, [form]);
  return (
    <Form onSubmit={handleOnSubmit}>
      <Form.Check
        type="switch"
        checked={form.status === "active"}
        onChange={handleOnChange}
      />
      {inputs.map((item, i) => (
        <CustomInput key={i} {...item} handleOnChange={handleOnChange} />
      ))}
      <Button type="submit">add payment method</Button>
    </Form>
  );
};

export default PaymentWindow;
