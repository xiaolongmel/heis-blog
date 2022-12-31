import { NextPage } from 'next';
import Footer from '../Footer';
import Navbar from '../Navbar';

const Layout: NextPage = ({ children }) => {
  return (
    <div>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
