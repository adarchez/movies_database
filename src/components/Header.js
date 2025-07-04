import { Link } from 'react-router-dom';
import Buscador from './Buscador';

function Header () {
    return(
        <header>
            <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
                <div className="container">
                    <Link className="navbar-brand" to="/">MoviesDB</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className='navbar-nav'>
                            <li className="nav-item">
                                <Link to="/" className='nav-link' aria-current="page">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/listado" className='nav-link'>Listado</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/favoritos" className='nav-link'>Favoritos</Link>
                            </li>
                        </ul>
                    </div>
                    <Buscador />
                </div>
            </nav>
        </header>
    )
}

export default Header;