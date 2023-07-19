import { Button, Form } from "react-bootstrap";
import { CustomInput } from "../user-input/CustomInput";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { loginAction } from "../admin-signup/adminAction";
import { useDispatch } from "react-redux";

export const AdminSignin = () => {
  const dispatch = useDispatch();
  const inputs = [
    {
      fieldName: "Email",
      type: "email",
      name: "email",
      placeholder: "Email....",
      required: true,
    },
    {
      fieldName: "Password",
      type: "password",
      name: "password",
      placeholder: "Password....",
      required: true,
    },
  ];

  const [form, setForm] = useState({});

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setForm({ ...form, [name]: value });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    dispatch(loginAction(form));
  };

  useEffect(() => {
    console.log(form);
  }, [form]);
  return (
    <>
      <Form
        className="p-5 shadow-lg d-flex flex-column"
        style={{ width: "400px" }}
        onSubmit={handleOnSubmit}
      >
        <h2>Admin Login</h2>
        {inputs.map((item, i) => (
          <CustomInput key={i} handleOnChange={handleOnChange} {...item} />
        ))}
        <Link>
          <p>Forget password</p>
        </Link>
        <Button className="align-self-end" type="submit">
          Login
        </Button>
      </Form>
    </>
  );
};
