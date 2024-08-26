import axios from "axios";

import Carousel from "@/components/Slider/Carousel";
import Layout from "@/components/Layout";
import Books from "@/components/Books";
import { API_KEY, API_URL, CATEGORIES, SLIDES } from "@/const";
import { BookItem } from "@/types";

export async function getServerSideProps() {
  const booksReaponse = await axios.get(
    `${API_URL}?q=subject=${
      CATEGORIES[0]
    }&key=${API_KEY}&printType=books&startIndex=${0}&maxPesult=6&langRestrict=en`
  );
  console.log(booksReaponse);
  return {
    props: {
      books: booksReaponse.data.items,
    },
  };
}

export default function Home({ books }: { books: BookItem[] }) {
  return (
    <>
      <Layout>
        <section className="mb-[180px] w-full flex justify-center items-center relative">
          <Carousel slides={SLIDES} />
        </section>
        <Books books={books} />
      </Layout>
    </>
  );
}
