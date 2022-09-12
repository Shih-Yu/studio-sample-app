import Head from 'next/head';
import Link from 'next/link';
import styles from '../../styles/OnDemand.module.css';

export default function Home() {
  return (
    <div className='bg-neutral-50 px-8'>
      <Head>
        <title>Livepeer Studio App</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title} s>
          Welcome to Livestreamming 📺
        </h1>

        <div className={styles.grid}>
          <Link href='livestream/getStream'>
            <a className={styles.card}>
              <h2>Get a stream by Id &rarr;</h2>
              <p>Gets a specific stream by Id</p>
            </a>
          </Link>

          <Link href='livestream/getStreams'>
            <a className={styles.card}>
              <h2>Get All streams &rarr;</h2>
              <p>Gets all streams from the account</p>
            </a>
          </Link>
        </div>
        <div className={styles.grid}>
          <Link href='livestream/createStream'>
            <a className={styles.card}>
              <h2>Create a Stream &rarr;</h2>
              <p>Create a new stream</p>
            </a>
          </Link>
        </div>
      </main>

      <footer className={styles.footer}></footer>
    </div>
  );
}