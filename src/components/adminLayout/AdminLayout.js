import { Footer } from "../layout/Footer";
import { Header } from "../layout/Header";
import { Sidebar } from "../side-bar/Sidebar";

export const AdminLayout = ({ children, title }) => {
  return (
    <div className="admin-layout">
      <div className="side-bar bg-dark text-light">
        <Sidebar />
      </div>
      <main className="main">
        <Header />
        <div className="page-content">
          <h2>{title}</h2>
          {children}
        </div>
        <Footer />
      </main>
    </div>
  );
};
