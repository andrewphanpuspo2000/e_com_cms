import { useDispatch, useSelector } from "react-redux";
import { AdminLayout } from "../../components/adminLayout/AdminLayout";
import { Button, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { getAllAdminAction } from "../../components/admin-signup/adminAction";
import defaultProfile from "../../assets/default-profile.jpeg";
import { BsFillCircleFill } from "react-icons/bs";
export const Profile = () => {
  const { user } = useSelector((state) => state.userData);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllAdminAction());
  }, [dispatch]);
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
            <Link to={`/edit-profile`}>
              <Button>Edit Profile</Button>
            </Link>
          </div>
        </div>
        <div
          className="w-100 bg-white d-flex justify-content-around align-items-center"
          style={{ minHeight: "50vh" }}
        >
          <div>
            <p>
              <b>Status</b>
            </p>
            <p>
              {user?.status}
              {user?.status === "active" ? (
                <BsFillCircleFill color="green" />
              ) : (
                <BsFillCircleFill color="red" />
              )}
            </p>
          </div>
          <div>
            <p>
              <b>Address</b>
            </p>
            <p>{user?.address}</p>
          </div>
          <div>
            <b>Last Name</b>
            <p>{user?.lName}</p>
          </div>

          <div>
            <b>Role</b>
            <p>{user?.role}</p>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};
