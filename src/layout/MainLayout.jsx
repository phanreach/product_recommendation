import { Outlet } from 'react-router-dom';
import Navbar from '../components/nav-bar';
import Footer from '../components/footer';

const MainLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow pb-10">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
