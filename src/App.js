import logo from "./logo.svg";
import "./App.css";
import { Button } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Route, Routes } from "react-router-dom";
import { Signin } from "./page/signIn/Signin";
import { Signup } from "./page/signup/Signup";
function App() {
  return (
    <div className="">
      <Routes>
        <Route path="/" element={<Signin />} />
        <Route path="/new-admin" element={<Signup />} />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
