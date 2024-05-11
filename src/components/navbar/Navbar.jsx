import './navbar.css';
import logo from '../../img/travel.webp';
import NavLinks from '../navlink/NavLink';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='navContainer'>
        <span className='logo'>Hotel Ranking</span>
        <div className='navLinkWrap'>
          <ul className='navLinks'>
            <NavLinks />
          </ul>
        </div>
        <div className='navItems'>
          <Link to={'/register'}>
            <button className='navButton'>Register</button>
          </Link>
          <Link to={'/login'}>
            <button className='navButton'>Login</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
