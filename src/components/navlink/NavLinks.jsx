// import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import './navlinks.scss';

const links = [
  { id: 1, url: '/', text: 'home' },
  { id: 2, url: 'create-hotel', text: 'Add-Hotel' },
];

const NavLinks = () => {
  return (
    <>
      {links.map((link) => {
        const { id, url, text } = link;
        return (
          <li key={id}>
            <NavLink className='listItem' activeClassName='active' end to={url}>
              {text}
            </NavLink>
          </li>
        );
      })}
    </>
  );
};
export default NavLinks;
