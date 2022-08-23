import Head from "next/head";
import Link from "next/link";
import styles from "../../styles/OnDemand.module.css";

export default function Home() {
  return (
    <div className="bg-neutral-50 px-8">
      <Head>
        <title>Livepeer Studio App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title} s>
          Welcome to On Demand Videos SDK 🧰
        </h1>

        <div className={styles.grid}>
          <Link href="onDemandSDK/useAsset">
            <a className={styles.card}>
              <h2>Use Asset &rarr;</h2>
              <p>Gets all assets from your account</p>
            </a>
          </Link>

          <Link href="onDemandSDK/useCreateAsset">
            <a className={styles.card}>
              <h2>Use Create Asset &rarr;</h2>
              <p>Creates an asset by uploading a local file using resumable uploads</p>
            </a>
          </Link>

          <Link href="onDemandSDK/useUpdateAsset">
            <a className={styles.card}>
              <h2>Update Asset&rarr;</h2>
              <p>Updates a specific asset by ID</p>
            </a>
          </Link>
        </div>
      </main>

      <footer className={styles.footer}></footer>
    </div>
  );
}