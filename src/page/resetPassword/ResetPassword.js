import React, { useState } from "react";
import { Header } from "../../components/layout/Header";
import { Footer } from "../../components/layout/Footer";
import RequestOTP from "../../components/reset-password/RequestOTP";
import PasswordOTP from "../../components/reset-password/PasswordOTP";

const ResetPassword = () => {
  const [form, setForm] = useState("otp");

  const forms = {
    otp: <RequestOTP setForm={setForm} />,
    password: <PasswordOTP />,
  };

  return (
    <div>
      <Header />
      <main className="p-5">{forms[form]}</main>
      <Footer />
    </div>
  );
};

export default ResetPassword;
