import React, { useState } from "react";
import { Header } from "../../components/layout/Header";
import { Footer } from "../../components/layout/Footer";
import RequestOTP from "../../components/reset-password/RequestOTP";
import PasswordOTP from "../../components/reset-password/PasswordOTP";
import { resetPassAction } from "../../components/admin-signup/adminAction";
import { useNavigate } from "react-router-dom";

const ResetPassword = () => {
  const [form, setForm] = useState("otp");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleResetPassword = async ({ confirmPassword, ...rest }) => {
    console.log(rest);
    const data = { ...rest, email: email };
    const resp = await resetPassAction(data);
    resp === "success" && navigate("/");
  };

  const forms = {
    otp: <RequestOTP setForm={setForm} setEmail={setEmail} />,
    password: <PasswordOTP handleReset={handleResetPassword} />,
  };

  return (
    <div>
      <Header />
      <main className="p-5 main reset-password">{forms[form]}</main>
      <Footer />
    </div>
  );
};

export default ResetPassword;
