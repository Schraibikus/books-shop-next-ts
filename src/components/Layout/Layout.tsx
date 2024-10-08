import Head from "next/head";
import { PropsWithChildren } from "react";

import Header from "@/components/Header";

function Layout({ children }: PropsWithChildren) {
  return (
    <>
      <Head>
        <title>Books Shop</title>
        <meta name="description" content="Next.js TypeScript project" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="max-w-[1440px] flex flex-col min-h-screen bg-white">
        <Header />
        <main className="flex-1">{children}</main>
      </div>
    </>
  );
}

export default Layout;
