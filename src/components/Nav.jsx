import {} from 'react';
import { Link } from 'react-router-dom';
import '../css/estilo.css';
import logo from "../assets/MINOTAURO.svg"

function Nav() {
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
              </Link>{' '}
              <Link to="/produtos" className="tlink">
                Produtos
              </Link>{' '}
              {''}
              <Link to="/sobre" className="tlink">
                Sobre
              </Link>
              <Link to="/portifolio" className="tlink">
                Contato
              </Link>
            </ul>
        </nav>
      </header>
    </>
  );
}
export default Nav;