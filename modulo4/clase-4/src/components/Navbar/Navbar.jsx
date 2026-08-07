import "./Navbar.css";

const Navbar = () => {
  const isLogged = false;

  return (
    <nav className="navbar">
      <img
        src="https://www.adaitw.org/assets/logo-fucsia-DvSCzibg.png"
        alt="Logo ADA ITW"
      />
      <ul className="links">
        <li>
          <a href="#">Inicio</a>
        </li>
        <li>
          <a href="#">Acerca de</a>
        </li>
        <li>
          <a href="#">Contacto</a>
        </li>
      </ul>
      <div className="buttons">
        {!isLogged && (
          <>
            <button className="register-button">Registrarse</button>
            <button className="login-button">Iniciar Sesión</button>
          </>
        )}
        {isLogged && <button className="logout-button">Cerrar Sesión</button>}
        {/*
            isLogged ? (
                <button className="logout-button">Cerrar Sesión</button>
            ):
            (
            <>
                <button className="register-button">Registrarse</button>
                <button className="login-button">Iniciar Sesión</button>
            </>
            )
        */}
      </div>
    </nav>
  );
};

export default Navbar;
