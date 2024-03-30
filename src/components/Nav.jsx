import {} from 'react';
import { Link } from 'react-router-dom';
import '../css/estilo.css';
import logo from "../assets/MINOTAURO.png"

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
                Produtos
              </Link>{' '}
              {''}
              <Link to="/sobre" className="tlink">
                Contato
              </Link>
              <Link to="/portifolio" className="tlink">
                Sobre
              </Link>
            </ul>
        </nav>
      </header>
    </>
  );
}
export default Nav;