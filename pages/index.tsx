import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Delivery App</title>
        <meta name="description" content="Delivery PWA App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="#">Delivery PWA App!</a>
        </h1>

        <nav className={styles.nav}>
          <ul>
            <li>
              <Link href="/">
                <a>Home</a>
              </Link>
            </li>
            <li>
              <Link href="/requests">
                <a>View Requests</a>
              </Link>
            </li>
            <li>
              <Link href="/profile">
                <a>Your Profile</a>
              </Link>
            </li>
          </ul>
        </nav>
      </main>
    </div>
  );
};

export default Home;
