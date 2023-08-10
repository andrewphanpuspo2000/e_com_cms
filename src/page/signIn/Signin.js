import { AdminSignin } from "../../components/admin-signin/AdminSignin";
import { Footer } from "../../components/layout/Footer";
import { Header } from "../../components/layout/Header";
import Typewriter from "typewriter-effect";

export const Signin = () => {
  return (
    <div>
      <Header />
      <main className="main p-5 d-flex justify-content-center align-items-center  w-100">
        <div className="welcome-signin w-50">
          <h1>
            <Typewriter
              options={{
                strings: ["Welcome to Bros"],
                autoStart: true,
                delay: 70,
                loop: true,
              }}
            />
          </h1>
        </div>
        <AdminSignin />
      </main>
      <Footer />
    </div>
  );
};
