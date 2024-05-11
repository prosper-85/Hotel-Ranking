import { NavLinks } from '@/components';
import './navbar.scss';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='navContainer'>
        <span>Hotel Ranking</span>
        <ul>
          <NavLinks />
        </ul>
        <div className='navItems'>
          <Link to={'/login'}>
            <button>Login</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
