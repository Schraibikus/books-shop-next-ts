import Link from "next/link";
import clsx from "clsx";
import { useRouter } from "next/router";

import styles from "./navigation.module.scss";

export default function Navigation() {
  const router = useRouter();
  return (
    <nav>
      <ul className="list flex gap-[40px] items-center">
        <li
          className={clsx(styles.item, {
            [styles.disabled]: router.pathname === "/",
          })}
        >
          <Link href="/">books</Link>
        </li>
        <li className={styles.item}>
          <Link href="/audiobooks">audiobooks</Link>
        </li>
        <li className={styles.item}>
          <Link href="/stationery&gifts">Stationery & gifts</Link>
        </li>
        <li className={styles.item}>
          <Link href="/blog">blog</Link>
        </li>
      </ul>
    </nav>
  );
}
