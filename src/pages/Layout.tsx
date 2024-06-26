import Footer from '@/components/Footer';
import Navbar from '@/components/navbar/Navbar';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <header>
      <Navbar />
      <Outlet />
      <Footer />
    </header>
  );
};

export default Layout;
