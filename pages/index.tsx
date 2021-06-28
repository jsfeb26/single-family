import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useUser } from '@auth0/nextjs-auth0';

import styles from '../styles/Home.module.css';

export default function Home() {
  const { user, error, isLoading } = useUser();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  return (
    <div className={styles.container}>
      <Head>
        <title>Single Family App</title>
        <meta name="description" content="Single family app wip" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://www.getdone.com/">Getdone's</a> Single
          Family App
        </h1>
        <p>
          {!user && (
            <Link href="/api/auth/login">
              <a>Login</a>
            </Link>
          )}
          {user && (
            <Link href="/api/auth/logout">
              <a>Logout</a>
            </Link>
          )}
        </p>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
}
