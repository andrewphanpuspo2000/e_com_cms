import { AdminSignin } from "../../components/admin-signin/AdminSignin";
import { Footer } from "../../components/layout/Footer";
import { Header } from "../../components/layout/Header";

export const Signin = () => {
  return (
    <div>
      <Header />
      <main className="main p-5 d-flex justify-content-center align-items-center gap-5">
        <div className="welcome-signin">
          <h1>
            Welcome to <br /> BROS
          </h1>
        </div>
        <AdminSignin />
      </main>
      <Footer />
    </div>
  );
};
