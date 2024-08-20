import Link from "next/link";
import clsx from "clsx";
import { useRouter } from "next/router";

import styles from "./navigation.module.scss";

export default function Navigation() {
  const router = useRouter();
  return (
    <nav>
      <ul className="flex gap-[40px] items-center font-primary">
        <li
          className={clsx(styles.item, {
            [styles.active]: router.pathname === "/books",
          })}
        >
          <Link href="/">books</Link>
        </li>
        <li
          className={clsx(styles.item, {
            [styles.active]: router.pathname === "/audiobooks",
          })}
        >
          <Link href="/audiobooks">audiobooks</Link>
        </li>
        <li
          className={clsx(styles.item, {
            [styles.active]: router.pathname === "/stationeryGifts",
          })}
        >
          <Link href="/stationeryGifts">Stationery & gifts</Link>
        </li>
        <li
          className={clsx(styles.item, {
            [styles.active]: router.pathname === "/blog",
          })}
        >
          <Link href="/blog">blog</Link>
        </li>
      </ul>
    </nav>
  );
}
