import { Outlet } from 'react-router-dom';
import { NavBar } from './navbar';

export const Layout = () => {
  return (
    <div>
      <NavBar />
      <div>
        <Outlet />
      </div>
    </div>
  );
};
