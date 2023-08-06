import React, { useEffect, useState } from "react";
import { CustomInput } from "../user-input/CustomInput";
import { Button, Form } from "react-bootstrap";
import {
  addMethodAction,
  deletePaymentAction,
  updateOptionAction,
} from "./paymentAction";
import { useDispatch } from "react-redux";
import { setEditSystem } from "../modal/modalSlice";

const PaymentEdit = ({ option }) => {
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
    const { _id, status, option, description } = form;
    dispatch(updateOptionAction({ id: _id, status, option, description }));
    dispatch(setEditSystem(false));
    setForm(initialState);
  };

  const handleOnDelete = (e) => {
    e.preventDefault();
    dispatch(deletePaymentAction(option._id));
    dispatch(setEditSystem(false));
  };
  useEffect(() => {
    setForm(option);
    console.log(option);
  }, [dispatch, option]);
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
      <Button type="submit" className="w-100" variant="warning">
        Edit Option
      </Button>
      <br />
      <Button className="w-100 mt-2" variant="danger" onClick={handleOnDelete}>
        Delete
      </Button>
    </Form>
  );
};

export default PaymentEdit;
