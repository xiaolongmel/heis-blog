import { NextPage } from 'next';
import Link from 'next/link';
import { navs } from './config';
import styles from './index.module.scss';

const Navbar: NextPage = () => {
  return (
    <div className={styles.navbar}>
      <section className={styles.logArea}>BLOG-c</section>
      <section className={styles.linkArea}>
        {navs?.map((nav) => (
          <Link key={nav?.label} href={nav?.value}>
            {nav?.label}
          </Link>
        ))}
      </section>
    </div>
  );
};

export default Navbar;
