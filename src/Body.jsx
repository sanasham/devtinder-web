import { Outlet } from 'react-router';
import Footer from './Footer';
import NavBar from './NavBar';

const Body = () => {
  return (
    <div>
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Body;
