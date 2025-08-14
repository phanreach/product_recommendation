import { Outlet } from 'react-router-dom';
import Navbar from '../components/nav-bar';
import Footer from '../components/footer';
import Breadcrumb from '../components/breadcrumb';

const MainLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Fixed/Sticky Navbar */}
      <div className="sticky top-0 z-40 bg-white shadow-sm">
        <Navbar />
      </div>
      <Breadcrumb />
      <main className="flex-grow pb-10">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
