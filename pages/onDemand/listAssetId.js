import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "../../public/studioLogo.png";
import styles from "../../styles/Assets.module.css";

export async function getServerSideProps({ query }) {
  const { id } = query;
  const res = await fetch(`https://livepeer.studio/api/asset/${id}`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${process.env.API_KEY}`,
      "Content-Type": "application/json",
    },
  });

  const data = await res.json();

  return {
    props: {
      asset: data,
    },
  };
}

export default function ListAssetByID(asset) {
  // Gets asset from user input
  const [assetId, setAssetId] = useState("");
  // Gets specific asset from ServerSideProps

  async function fetchAsset(e) {
    e.preventDefault();
    // console.log(assetId);
  }

  return (
    <main className={styles.main}>
      <h1 className={styles.title}>Get Assets By Id</h1>
      <form onSubmit={fetchAsset} method="GET" className={styles.card}>
        <label htmlFor="asset">Asset ID: </label>
        <input
          type="search"
          name="query"
          value={assetId}
          required
          onChange={(e) => setAssetId(e.target.value)}
        />
        <button type="submit">Get Asset</button>
      </form>

      {/* <div className={styles.grid}> */}
        {/* <div className={styles.card} key={asset.id}> */}
        {/* <Image
              src={ logo }
              alt="Livepeer Studio Logo"
              width="256"
              height="256"
         /> */}
        {/* <h3 className={styles.title2}> {asset.name} </h3> */}
        {/* <p>Id:</p>
          { assets.id } */}
        {/* </Link> */}
        {/* </div> */}
      {/* </div> */}

      <h3>
        <Link href="/onDemand">
          <a>&larr; Back to OnDemand Page </a>
        </Link>
      </h3>
    </main>
  );
}