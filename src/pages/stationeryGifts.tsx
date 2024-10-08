import Link from "next/link";

import Layout from "@/components/Layout";
import Carousel from "@/components/Slider/Carousel";
import { SLIDES } from "@/const";

export default function StationeryGifts() {
  return (
    <>
      <Layout>
        <section className="mb-10 w-full flex justify-center items-center relative">
          <Link
            className="absolute z-10 text-[#f9b407] text-6xl font-bold text-center top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rotate-[-10deg]"
            href="/"
          >
            страница Stationery & Gifts находится в разработке, приносим
            извинения
          </Link>
          <Carousel slides={SLIDES} />
        </section>
      </Layout>
    </>
  );
}
