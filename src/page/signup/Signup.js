import { Form } from "react-bootstrap";
import { Footer } from "../../components/layout/Footer";
import { Header } from "../../components/layout/Header";
import { AdminSignUp } from "../../components/admin-signup/AdminSignUp";

export const Signup = () => {
  return (
    <div>
      <Header />
      <main className="main p-5 d-flex justify-content-center">
        <AdminSignUp />
      </main>
      <Footer />
    </div>
  );
};
