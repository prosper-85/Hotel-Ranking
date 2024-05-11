import { Navbar } from '@/components';
import './layout.scss';
import { Outlet } from 'react-router-dom';

function Layout() {
  return (
    <div className='layout'>
      <div className=''>
        <Navbar />
      </div>
      <div className=''>
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;
