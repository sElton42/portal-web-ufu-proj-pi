import { Link } from 'react-router-dom';
import logoIcon from '../images/novo_logo.svg';
import './Navbar.css';

function Navbar() {
  return (
        <>
          <nav className="navbar">
              <div className="navbar-container">
                  <Link to="/paineladmin" className="navbar-logo">
                    <div className='navbar-logo-img-container'>
                            <img src={logoIcon} alt="Logo do Portal UFU" className='navbar-logo-img' />
                      </div>
                  </Link>

                  <ul className='nav-menu active'>
                    <li className='nav-item'>
                      <Link to='/' className='nav-links'>
                        HOME
                      </Link>
                    </li>

                    <li className='nav-item'>
                      <Link to='/noticias' className='nav-links'>
                        NOTÍCIAS
                      </Link>
                    </li>

                    <li className='nav-item'>
                      <Link to='/vagas' className='nav-links'>
                        VAGAS
                      </Link>
                    </li>

                    <li className='nav-item'>
                      <Link to='/classificados' className='nav-links'>
                        CLASSIFICADOS
                      </Link>
                    </li>

                    <li className='nav-item'>
                      <Link to='/projetos' className='nav-links'>
                        PROJETOS
                      </Link>
                    </li>

                  </ul>

                    <Link to="/login">
                      <div className='nav-logBut'>
                        <div className='nav-log-icon'></div>
                      </div>
                    </Link>
              </div>
          </nav>
        </>
  );
}

export default Navbar;
