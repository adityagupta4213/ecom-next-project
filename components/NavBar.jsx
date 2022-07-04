import Link from "next/link";
import styles from "/styles/NavBar.module.scss";
export default function NavBar() {
  return (
    <nav className={styles.NavBar}>
      <li>
        <Link href="/">
          <a>
            <img src="/static/logo.png" className={styles.logo}></img>
          </a>
        </Link>
      </li>
      <li>
        <Link
          href={{
            pathname: "/catalog",
            query: { type: "vector" },
          }}
        >
          <a className={styles.link}>Vectors</a>
        </Link>
      </li>
      <li>
        <Link
          href={{
            pathname: "/catalog",
            query: { type: "photo" },
          }}
        >
          <a className={styles.link}>Photos</a>
        </Link>
      </li>

      <li>
        <Link
          href={{
            pathname: "/catalog",
            query: { type: "psd" },
          }}
        >
          <a className={styles.link}>PSD</a>
        </Link>
      </li>

      <li>
        <Link
          href={{
            pathname: "/catalog",
            query: { type: "video" },
          }}
        >
          <a className={styles.link}>Video</a>
        </Link>
      </li>
    </nav>
  );
}
