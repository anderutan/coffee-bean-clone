import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <header>
      <Outlet />
    </header>
  );
};

export default Layout;
