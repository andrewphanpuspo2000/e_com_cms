import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import { Link } from "react-router-dom";
import { persistor } from "../../store";
import { useDispatch } from "react-redux";
import { setUser } from "../admin-signin/adminSlice";

export const Header = () => {
  const dispatch = useDispatch();
  const signOut = () => {
    persistor.purge().then(() => {
      console.log("log out");
    });
    dispatch(setUser({}));
  };
  return (
    <div>
      <Navbar expand="md" variant="dark" className="bg-dark">
        <Container>
          <Navbar.Brand href="/">Bros</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Link className="nav-link" to="/admin-dashboard">
                Dashboard
              </Link>
              <Link className="nav-link" to="/">
                Sign In
              </Link>
              <Link className="nav-link" to="/new-admin">
                Sign Up
              </Link>
              <Link className="nav-link" to="/" onClick={signOut}>
                Sign Out
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};
