import { Button, Form } from "react-bootstrap";
import { CustomInput } from "../user-input/CustomInput";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { autoLogin, loginAction } from "../admin-signup/adminAction";
import { useDispatch, useSelector } from "react-redux";

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
  const { user } = useSelector((state) => state.userData);
  const navigate = useNavigate();
  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setForm({ ...form, [name]: value });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    dispatch(loginAction(form));
  };

  useEffect(() => {
    user?._id && navigate("/dashboard");
    dispatch(autoLogin());
  }, [user, navigate, dispatch]);
  return (
    <>
      <Form
        className="p-5 shadow-lg d-flex flex-column signin-form"
        style={{ width: "400px" }}
        onSubmit={handleOnSubmit}
      >
        <h2>Admin Login</h2>
        <hr />
        {inputs.map((item, i) => (
          <CustomInput key={i} handleOnChange={handleOnChange} {...item} />
        ))}
        <Link to="reset-pass-otp">
          <p>Forget password</p>
        </Link>
        <Button className="align-self-end" type="submit">
          Login
        </Button>
      </Form>
    </>
  );
};
