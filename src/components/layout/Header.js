import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import { Link, useNavigate } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { logOutAxios } from "../../helper/axios";
import { setUser } from "../admin-signin/adminSlice";
import { BiSolidUser } from "react-icons/bi";

export const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.userData);
  const signOut = () => {
    //log out from server by removing the access and refresh JWTs
    logOutAxios(user._id);
    //clear storage
    localStorage.removeItem("refreshJWT");
    sessionStorage.removeItem("accessJWT");
    //reset store
    dispatch(setUser({}));
    navigate("/");
  };
  return (
    <div>
      <Navbar expand="md" variant="dark" className="bg-dark">
        <Container>
          <Navbar.Brand href="/">Bros</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              {!user?._id ? (
                <>
                  <Link className="nav-link" to="/">
                    Sign In
                  </Link>
                  <Link className="nav-link" to="/new-admin">
                    Sign Up
                  </Link>
                </>
              ) : (
                <div className="d-flex align-items-center">
                  <Link className="nav-link" to="/dashboard">
                    Dashboard
                  </Link>
                  <Link className="nav-link" to="/" onClick={signOut}>
                    Sign Out
                  </Link>
                  {!user?.image?.length ? (
                    <div
                      style={{ fontSize: "20px", color: "black" }}
                      className="nav-link p-2 bg-light rounded-circle"
                    >
                      <BiSolidUser />
                    </div>
                  ) : (
                    <div
                      style={{
                        width: "60px",
                        height: "60px",
                      }}
                      className="rounded-circle"
                    >
                      <img
                        src={
                          process.env.REACT_APP_ROOTAPI + user?.image?.slice(10)
                        }
                        className="w-100 h-100 rounded-circle"
                      />
                    </div>
                  )}
                </div>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};
