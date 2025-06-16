import { Link } from 'react-router-dom';
import '../styles/components.css';
import logo from '../assets/logo.png';

const Header = () => (
  <header className="header">
    <div className="logo">  <Link to="/">
    <img src={logo} alt="Logo SoundSpot" className="logo" />
    </Link>
    </div>
    <nav>
      <Link to="/">Início</Link>
      <Link to="/musicas">Músicas</Link>
    </nav>
  </header>
);

export default Header;
