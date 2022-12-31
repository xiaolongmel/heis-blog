import { NextPage } from 'next';
import Footer from 'components/Footer';
import Navbar from 'components/Navbar';
import styles from './index.module.scss';

const Layout: NextPage = ({ children }) => {
  return (
    <div>
      <Navbar />
      <main className={styles.content}>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
