import Head from "next/head";
import SearchBar from "../components/SearchBar";
import Catalog from "./catalog";
import styles from "/styles/home.module.scss";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1 className={styles.headline}>Popular Stock Vectors</h1>
        <p className={styles.tagline}>
          High quality vectors with worry-free licensing for personal and
          commercial use
        </p>
        <SearchBar />
        <Catalog />
      </main>
    </div>
  );
}
