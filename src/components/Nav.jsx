import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../css/estilo.css';
import logo from "../assets/MINOTAURO.svg";

function Nav() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const usuario = sessionStorage.getItem('usuario');
    const senha = sessionStorage.getItem('senha');
    if (usuario && senha) {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogout = () => {
    sessionStorage.clear();
    setIsLoggedIn(false);
    navigate('/');
  };

  return (
    <>
      <header className="menu">
        <nav className="nav-menu">
          <Link to="/" className="tlink">
            <img src={logo} alt="" />
          </Link>
          <ul>
            <Link to="/" className="tlink">
              Home
            </Link>
            <Link to="/produtos" className="tlink">
              Produtos
            </Link>
            <Link to="/contato" className="tlink">
              Contato
            </Link>
            <Link to="/sobre" className="tlink">
              Sobre
            </Link>
            {isLoggedIn ? (
              <Link onClick={handleLogout} className="tlink">
                Logout
              </Link>
            ) : (
              <Link to="/login" className="tlink">
                Login
              </Link>
            )}
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Nav;
