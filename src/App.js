import logo from "./logo.svg";
import "./App.css";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Route, Routes } from "react-router-dom";
import { Signin } from "./page/signIn/Signin";
import { Signup } from "./page/signup/Signup";
import { Verification } from "./page/verification/Verification";
import { Dashboard } from "./page/dashboard/Dashboard";
import { Category } from "./page/category/Category";
import { Product } from "./page/product/Product";
import { Payment } from "./page/payment/Payment";
import { Order } from "./page/order/Order";
import { Customer } from "./page/customer/Customer";
import { Profile } from "./page/profile/Profile";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

import PrivateRouter from "./components/private/PrivateRouter";
import NewProduct from "./page/product/NewProduct";
import EditProduct from "./page/product/EditProduct";
import ResetPassword from "./page/resetPassword/ResetPassword";
import EditProfile from "./page/profile/EditProfile";

function App() {
  const dispatch = useDispatch();

  return (
    <div className="">
      <Routes>
        <Route path="/" element={<Signin />} />
        <Route path="/new-admin" element={<Signup />} />
        <Route path="/admin-verification" element={<Verification />} />
        <Route path="/password-reset" element={<ResetPassword />} />

        {/* private router */}
        <Route
          path="/dashboard"
          element={
            <PrivateRouter>
              <Dashboard />
            </PrivateRouter>
          }
        />
        <Route
          path="/category"
          element={
            <PrivateRouter>
              <Category />
            </PrivateRouter>
          }
        />
        <Route
          path="/product"
          element={
            <PrivateRouter>
              <Product />
            </PrivateRouter>
          }
        />
        <Route
          path="/new-product"
          element={
            <PrivateRouter>
              <NewProduct />
            </PrivateRouter>
          }
        />
        <Route
          path="/editProduct/:id"
          element={
            <PrivateRouter>
              <EditProduct />
            </PrivateRouter>
          }
        />
        <Route
          path="/payment-option"
          element={
            <PrivateRouter>
              <Payment />
            </PrivateRouter>
          }
        />
        <Route
          path="/order"
          element={
            <PrivateRouter>
              <Order />
            </PrivateRouter>
          }
        />
        <Route
          path="/add-admin"
          element={
            <PrivateRouter>
              <Dashboard />
            </PrivateRouter>
          }
        />
        <Route
          path="/customer"
          element={
            <PrivateRouter>
              <Customer />
            </PrivateRouter>
          }
        />
        <Route
          path="/profile"
          element={
            <PrivateRouter>
              <Profile />
            </PrivateRouter>
          }
        />
        <Route
          path="/edit-profile"
          element={
            <PrivateRouter>
              <EditProfile />
            </PrivateRouter>
          }
        />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
