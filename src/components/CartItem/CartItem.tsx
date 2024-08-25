import { useAppDispatch } from "@/hooks/redux";
import { cartSlice } from "../../store/cartSlice";
import formatAvRate from "../../utils/formatAvRate";
import Image from "next/image";
import { CartItemType } from "../../types";

interface CartItemProps {
  item: CartItemType;
}

const CartItem: React.FC<CartItemProps> = ({ item }) => {
  const dispatch = useAppDispatch();

  function getRandomRating(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  return (
    <>
      <section className="mt-[30px] mb-10 w-full flex justify-center items-center justify-between font-primary font-bold">
        <div className="flex w-full items-center">
          <div className="flex gap-[16px] items-center w-[300px]">
            <Image
              src={
                item.book.imageUrl
                  ? item.book.imageUrl
                  : "images/placeholderImg.png"
              }
              alt="book"
              width={102}
              height={145}
            />
            <div className="flex flex-col items-start">
              <h2 className="font-primary font-bold text-base text-[#1C2A39]">
                {item.book.title && item.book.title}
              </h2>
              <p className="font-secondary text-[10px] text-[#5C6A79]">
                {item.book.authors && item.book.authors}
              </p>
              <div className="mb-[16px] flex items-center wrap">
                {formatAvRate(
                  item.book.averageRating
                    ? item.book.averageRating
                    : getRandomRating(1, 5)
                )}
                <span className="font-secondary text-[13px] ml-[6px]">
                  {item.book.ratingCount
                    ? item.book.ratingCount
                    : getRandomRating(100, 10000)}{" "}
                  reviews
                </span>
              </div>
            </div>
          </div>
          <div className="border border-[#5C6A79] w-[176px] h-[45px] flex justify-around items-center gap-[10px] ml-[40px]">
            <button
              onClick={() => {
                dispatch(cartSlice.actions.changeQantity(["minus", item.id]));
              }}
              type="button"
              className="text-5xl font-secondary font-normal flex justify-center items-center"
            >
              <Image
                src="/icons/minus.png"
                alt="button minus"
                width={20}
                height={20}
              />
            </button>
            <span>{item.qantity}</span>
            <button
              onClick={() => {
                dispatch(cartSlice.actions.changeQantity(["plus", item.id]));
              }}
              type="button"
              className="text-5xl font-secondary font-normal"
            >
              <Image
                src="/icons/plus.png"
                alt="button plus"
                width={20}
                height={20}
              />
            </button>
          </div>
          <div className="ml-[180px]">
            {item.book.currencyCode === "RUB" ? (
              <span>&#8381;</span>
            ) : (
              item.book.currencyCode
            )}{" "}
            {item.book.amount ? item.book.amount : "Not price"}
          </div>
          <div className="text-[#5C6A79] text-[12px] ml-[250px]">
            Shipping: {item.delivery}
          </div>
        </div>
      </section>
    </>
  );
};

export default CartItem;
