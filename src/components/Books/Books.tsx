import axios from "axios";
import { useEffect, useState } from "react";

import Layout from "../Layout/Layout";
import { API_KEY, API_URL, CATEGORIES, SLIDES } from "../../../const";
import { Book } from "../Books/Book";
import { useAppDispatch } from "../../hooks/redux";
import { BookItem } from "../../types";

import { cartSlice } from "@/store/cartSlice";

function Books({ books }: { books: BookItem[] }): JSX.Element {
  const dispatch = useAppDispatch();
  const [currentBooks, setCurrentBooks] = useState<BookItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [categoryEvent, setCategoryEvent] = useState(CATEGORIES[0]);
  const [nextBooks, setNextBooks] = useState(0);
  const [activeCategory, setActiveCategory] = useState(categoryEvent);

  function getParams(categoryTag: string, startIndex: number) {
    const params = new URLSearchParams(window.location.search);
    params.append("q", `subject:${categoryTag}`);
    params.append("key", `${API_KEY}`);
    params.append("printType", "books");
    params.append("startIndex", `${startIndex}`);
    params.append("maxResults", "6");
    params.append("langRestrict", "en");
    return params;
  }

  useEffect(() => {
    async function fetchData(params: URLSearchParams) {
      try {
        const booksReaponse = await axios.get(`${API_URL}?${params}`);
        setCurrentBooks(booksReaponse.data.items);
      } catch (error) {
        alert("Ошибка при запросе данных ;(");
        console.error(error);
      } finally {
        setLoading(false);
      }
    }
    fetchData(getParams(categoryEvent, nextBooks));
  }, []);

  useEffect(() => {
    async function fetchData(params: URLSearchParams) {
      try {
        const booksReaponse = await axios.get(`${API_URL}?${params}`);
        setCurrentBooks(booksReaponse.data.items);
      } catch (error) {
        alert("Ошибка при запросе данных ;(");
        console.error(error);
      } finally {
        setLoading(false);
      }
    }
    fetchData(getParams(categoryEvent, 0));
  }, [categoryEvent]);

  useEffect(() => {
    async function fetchData(params: URLSearchParams) {
      try {
        const booksReaponse = await axios.get(`${API_URL}?${params}`);
        setCurrentBooks(booksReaponse.data.items);
      } catch (error) {
        alert("Ошибка при запросе данных ;(");
        console.error(error);
      } finally {
        setLoading(false);
      }
    }
    fetchData(getParams(categoryEvent, nextBooks));
  }, [nextBooks]);

  function changeCategory(event: React.MouseEvent<HTMLLIElement, MouseEvent>) {
    let category = (event.target as HTMLElement).textContent;
    if (category !== null) {
      setCategoryEvent(category);
      setActiveCategory(category);
    }
    return category;
  }

  async function showNextBooks() {
    setNextBooks((prev) => prev + 6);
    const newBooks = await axios.get(
      `${API_URL}?${getParams(categoryEvent, nextBooks + 6)}`
    );
    setCurrentBooks([...newBooks.data.items]);
  }

  const buyNowHandler = (id: string) => {
    const clickedBook = currentBooks.find((book: BookItem) => book.id === id);
    dispatch(cartSlice.actions.addCartItem(clickedBook));
  };

  if (loading) {
    return <Layout>... Loading ...</Layout>;
  }

  return (
    <>
      <section className="relative w-full h-full pl-[196px] mb-[96px]">
        <aside className="absolute w-[416px] h-[710px] bg-[#EFEEF6] left-[-160px] top-[-46px] font-primary">
          <ul className="pl-[158px] pt-[45px] flex flex-col gap-[20px]">
            {CATEGORIES.map((category, index) => (
              <li
                key={index}
                className={
                  activeCategory === category
                    ? "list-disc marker:text-[#756AD3] text-[#1C2A39] text-[16px] font-bold cursor-pointer"
                    : "hover:list-disc list-outside marker:text-[#756AD3] text-[#5C6A79] text-[12px] active:text-[16px] hover:text-[16px] active:font-bold hover:font-bold active:text-[#1C2A39] hover:text-[#1C2A39] transition-all cursor-pointer"
                }
                onClick={changeCategory}
              >
                {category}
              </li>
            ))}
          </ul>
        </aside>
        <div className="grid grid-cols-2 bg-transparent gap-[60px] absolute left-[196px] top-0">
          {currentBooks.length > 0 &&
            currentBooks.map((book: BookItem, index) => (
              <Book
                key={book.id}
                id={book.id}
                imageUrl={book.volumeInfo.imageLinks.thumbnail}
                alt={book.volumeInfo.description ?? `book-${index}`}
                title={book.volumeInfo.title}
                author={book.volumeInfo.authors ?? ""}
                averageRating={book.volumeInfo.averageRating ?? 0}
                ratingCount={book.volumeInfo.ratingCount ?? 0}
                description={book.volumeInfo.description ?? "No Description"}
                amount={
                  book.saleInfo?.listPrice?.amount?.toString() ?? "No sale"
                }
                currencyCode={book.saleInfo?.listPrice?.currencyCode ?? ""}
                buyNowHandler={buyNowHandler}
              />
            ))}
          <div className="py-10 col-span-2">
            <button
              onClick={showNextBooks}
              className="text-[8px] text-[#4C3DB2] border-[1px] border-[#4C3DB2] w-[176px] h-[45px] flex justify-center items-center hover:bg-[#4C3DB2] hover:text-white active:bg-[#4C3DB2] transition-all mx-auto uppercase font-bold"
            >
              load more
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

export default Books;
