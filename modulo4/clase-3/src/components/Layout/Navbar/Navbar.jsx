import "./Navbar.css";
import Logo from "../../../assets/react.svg";

const Navbar = () => {
  return (
    <nav className="navbar">
      <img src={Logo} alt="" />
      <button className="login-button">Iniciar Sesión</button>
    </nav>
  );
};

export default Navbar;
