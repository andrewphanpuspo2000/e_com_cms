import { Container } from "react-bootstrap";
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
        <Container className="main-category  pt-4">
          {/* // <div className="page-content pt-4"> */}
          <h2>{title}</h2>
          <hr />
          {children}
        </Container>
        <Footer />
      </main>
    </div>
  );
};
