import { NextPage } from 'next';
import Footer from 'components/Footer';
import Navbar from 'components/Navbar';
import styles from './index.module.scss';
import { ReactElement } from 'react';

interface IProp {
  children: ReactElement;
}
const Layout = ({ children }: IProp) => {
  return (
    <div>
      <Navbar />
      <main className={styles.content}>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
