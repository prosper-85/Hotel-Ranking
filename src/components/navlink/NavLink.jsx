// import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import './navlink.scss';
import { useSelector } from 'react-redux';

const links = [
  { id: 1, url: '/', text: 'home' },
  { id: 2, url: 'create-hotel', text: 'Add-Hotel' },
];

const NavLinks = () => {
  const user = useSelector((state) => state.user);
  console.log(user);
  return (
    <>
      {links.map((link) => {
        const { id, url, text } = link;
        if (url === 'create-hotel' && !user) return null;
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
