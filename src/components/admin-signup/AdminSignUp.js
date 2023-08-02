import { Button, Form } from "react-bootstrap";
import { CustomInput } from "../user-input/CustomInput";
import { useState } from "react";
import { addUserAction } from "./adminAction";
import { toast } from "react-toastify";
export const AdminSignUp = () => {
  const [form, setForm] = useState({});

  const inputFields = [
    {
      fieldName: "First Name",
      type: "text",
      placeholder: "Input first name",
      required: true,
      name: "fName",
    },
    {
      fieldName: "Last Name",
      type: "text",
      placeholder: "Input last name",
      required: true,
      name: "lName",
    },
    {
      fieldName: "Email Name",
      type: "email",
      placeholder: "Input email ",
      required: true,
      name: "email",
    },
    {
      fieldName: "Address",
      type: "text",
      placeholder: "Input address ",
      required: true,
      name: "address",
    },
    {
      fieldName: " Password",
      type: "password",
      placeholder: "Input password ",
      required: true,
      name: "password",
      minLength: "6",
    },
    {
      fieldName: " Confirm Password",
      type: "password",
      placeholder: "Confirm password",
      required: true,
      name: "confirm",
    },
  ];
  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({ ...form, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const { confirm, ...rest } = form;
    if (confirm === form.password) {
      addUserAction({ role: "admin", ...rest });
    } else {
      toast.error("Confirm password is wrong");
    }
  };
  return (
    <div>
      <Form
        className="p-5 shadow-lg rounded "
        style={{ width: "600px" }}
        onSubmit={handleSubmit}
      >
        <h2>Admin Sign Up</h2>
        <hr />
        {inputFields.map((item, i) => (
          <CustomInput key={i} {...item} handleOnChange={handleChange} />
        ))}
        <Button type="submit" className="w-100">
          Sign up
        </Button>
      </Form>
    </div>
  );
};
