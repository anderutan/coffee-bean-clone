import Navbar from '@/components/navbar/Navbar';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <header>
      <Navbar />
      <Outlet />
    </header>
  );
};

export default Layout;
