import Footer from '@/components/Footer';
import Navbar from '@/components/navbar/Navbar';
import { ArrowUp } from 'lucide-react';
import { Outlet } from 'react-router-dom';
import ScrollToTop from 'react-scroll-to-top';
import { Toaster } from '@/components/ui/toaster';

const Layout = () => {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <Outlet />
      <ScrollToTop
        smooth
        className='w-12 h-12 flex justify-center items-center text-white bg-[#512D6D]'
        component={<ArrowUp />}
      />
      <Footer />
      <Toaster />
    </>
  );
};

export default Layout;
