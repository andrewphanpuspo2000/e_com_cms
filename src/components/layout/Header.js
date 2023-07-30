import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import { Link } from "react-router-dom";

import { useDispatch } from "react-redux";

export const Header = () => {
  const dispatch = useDispatch();
  const signOut = () => {
    //log out from server by removing the access and refresh JWTs
    //clear storage
    //reset store
  };
  return (
    <div>
      <Navbar expand="md" variant="dark" className="bg-dark">
        <Container>
          <Navbar.Brand href="/">Bros</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Link className="nav-link" to="/dashboard">
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
