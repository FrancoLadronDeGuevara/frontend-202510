import Footer from "./Footer/Footer";
import Navbar from "./Navbar/Navbar";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
