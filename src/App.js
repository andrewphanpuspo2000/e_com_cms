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

function App() {
  return (
    <div className="">
      <Routes>
        <Route path="/" element={<Signin />} />
        <Route path="/new-admin" element={<Signup />} />
        <Route path="/admin-verification" element={<Verification />} />

        {/* private router */}
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/category" element={<Category />} />
        <Route path="/product" element={<Product />} />
        <Route path="/payment-option" element={<Payment />} />
        <Route path="/order" element={<Order />} />
        <Route path="/add-admin" element={<Dashboard />} />
        <Route path="/customer" element={<Customer />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
