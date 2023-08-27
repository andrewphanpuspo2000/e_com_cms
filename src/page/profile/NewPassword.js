import { useDispatch, useSelector } from "react-redux";
import { AdminLayout } from "../../components/adminLayout/AdminLayout";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import defaultProfile from "../../assets/default-profile.jpeg";
import { useState } from "react";
import { toast } from "react-toastify";
import { newPasswordAction } from "../../components/admin-signup/adminAction";
export const NewPassword = () => {
  const initialState = {
    isActive: false,
  };
  const { user } = useSelector((state) => state.userData);
  const [form, setForm] = useState({});
  const [error, setError] = useState(initialState);

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
    console.log(form);
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();
    setError({ isActive: false });
    if (form.confirmPassword !== form.newPassword) {
      setError({
        isActive: true,
        errorMessage: "New Password and Confirm Password are not match",
      });
      return toast.error("New Password and Confirm Password are not match");
    }
    const { confirmPassword, ...rest } = form;
    const obj = {
      ...rest,
    };
    const result = newPasswordAction(obj);
  };
  return (
    <AdminLayout title="Profile">
      <div className="p-4">
        <div
          className="bg-info d-flex p-3 gap-2 shadow-lg"
          style={{ width: "100%", height: "30vh", position: "relative" }}
        >
          <div
            className=" rounded-circle shadow-lg"
            style={{
              width: "12rem",
              height: "12rem",
              position: "relative",
              top: "3rem",
            }}
          >
            <img
              src={
                user.image
                  ? process.env.REACT_APP_ROOTAPI + user?.image?.slice(10)
                  : defaultProfile
              }
              className="w-100 h-100 rounded-circle"
            />
          </div>
          <div className="align-self-center text-light">
            <h1>{user.fName}</h1>
            <h6>{user.email}</h6>
          </div>
          <div style={{ position: "absolute", right: "1rem", bottom: "1rem" }}>
            <Link to={`/profile`}>
              <Button variant="dark"> Profile</Button>
            </Link>
            <Link to={`/edit-profile`}>
              <Button variant="dark">Edit Profile</Button>
            </Link>
          </div>
        </div>
        <div
          className="w-100 bg-light py-5 d-flex flex-column justify-content-center align-items-center"
          style={{ minHeight: "40vh" }}
        >
          <h2>New Password</h2>
          <div className="shadow-lg p-5 w-50">
            <Form onSubmit={handleOnSubmit}>
              <Form.Label>Current Password</Form.Label>
              <Form.Control
                type="password"
                name="currentPassword"
                onChange={handleOnChange}
              />
              <Form.Label>New Password</Form.Label>
              <Form.Control
                type="password"
                name="newPassword"
                onChange={handleOnChange}
                style={{ borderColor: error.isActive ? "red" : "" }}
              />
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                type="password"
                name="confirmPassword"
                onChange={handleOnChange}
                style={{ borderColor: error.isActive ? "red" : "" }}
              />
              {error?.isActive && (
                <Form.Text className="text-danger">
                  <b> {error.errorMessage}</b>
                </Form.Text>
              )}
              <Button className="mt-3 w-100" type="submit">
                Submit
              </Button>
            </Form>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};
