import Link from "next/link";

import Layout from "../components/Layout/Layout";
import Carousel from "../components/Slider/Carousel";
import { SLIDES } from "../../const";

export default function Audiobooks() {
  return (
    <>
      <Layout>
        <section className="mb-10 w-full flex justify-center items-center relative">
          <Link
            className="absolute z-10 text-red-500 text-6xl font-bold text-center top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rotate-[30deg]"
            href="/"
          >
            страница Audiobooks находится в разработке, приносим извинения
          </Link>
          <Carousel slides={SLIDES} />
        </section>
      </Layout>
    </>
  );
}
