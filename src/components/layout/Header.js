import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import { Link, useNavigate } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { logOutAxios } from "../../helper/axios";
import { setUser } from "../admin-signin/adminSlice";

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
      <Navbar expand="md" variant="dark" className="bg-primary">
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
                <>
                  <Link className="nav-link" to="/dashboard">
                    Dashboard
                  </Link>
                  <Link className="nav-link" to="/" onClick={signOut}>
                    Sign Out
                  </Link>
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};
