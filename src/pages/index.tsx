import Link from "next/link";
import Image from "next/image";

import Carousel from "@/components/Carousel/Carousel";
import Layout from "@/components/Layout/Layout";
import { SLIDES } from "../../const";

export default function Home() {
  return (
    <>
      <Layout>
        <section className="mb-10 w-full flex justify-center items-center relative">
          <Carousel slides={SLIDES} />
        </section>
      </Layout>
    </>
  );
}
