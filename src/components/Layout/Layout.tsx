import Head from "next/head";
import { useRouter } from "next/router";
import clsx from "clsx";
import Link from "next/link";
import { PropsWithChildren } from "react";
import Image from "next/image";

import styles from "./Layout.module.scss";
import Navigation from "../Navigation/navigation";
import Carousel from "../carousel/Carousel";

const SLIDES: string[] = [
  "/images/img_slide_01.jpg",
  "/images/img_slide_02.jpg",
  "/images/img_slide_03.jpg",
];

export default function Layout({ children }: PropsWithChildren) {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>Books Shop</title>
        <meta name="description" content="SkillFactory Next.js project" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="max-w-[1440px] flex flex-col min-h-screen bg-white">
        <header className="h-[116px] flex justify-center gap-[248px] items-center bg-white">
          <Link
            href="/"
            className={clsx(styles.logo, {
              [styles.disabled]: router.pathname === "/",
            })}
          >
            Bookshop
          </Link>
          <Navigation />
          <div className="flex gap-[95px]">
            <Link href="/user">
              <Image
                src="/icons/user_icon.svg"
                alt="user"
                width={12}
                height={15}
              />
            </Link>
            <Link href="/cart">
              <Image
                src="/icons/bag_icon.svg"
                alt="cart"
                width={14}
                height={17}
              />
            </Link>
          </div>
        </header>
        <section className="mb-10 w-full flex justify-center items-center relative">
          <Link href="/">
            <Image
              className="absolute z-10 right-[-86px] top-[79px] w-[149px] h-[204px] shadow-[0_24px_36px_0_#35315447]"
              src="/images/promo_01.png"
              alt="promo-01"
              width={149}
              height={204}
            />
          </Link>
          <Link href="/">
            <Image
              className="absolute z-10 right-[-181px] bottom-[70px] w-[158px] h-[273px] shadow-[0_24px_36px_0_#35315447]"
              src="/images/promo_02.png"
              alt="promo-02"
              width={158}
              height={273}
            />
          </Link>
          <Carousel slides={SLIDES} />
        </section>

        <main className={styles.main}>{children}</main>
      </div>
    </>
  );
}
