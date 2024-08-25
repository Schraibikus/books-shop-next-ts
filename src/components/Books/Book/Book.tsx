import Image from "next/image";

import formatAvRate from "../../../utils/formatAvRate";
import { useState } from "react";

interface BookProps {
  id: string;
  imageUrl: string;
  alt: string;
  title: string;
  author: string;
  description: string;
  averageRating: number;
  ratingCount: number;
  amount: string | undefined;
  currencyCode: string | undefined;
  buyNowHandler: (id: string) => void;
}

const Book = ({
  id,
  imageUrl,
  alt,
  title,
  author,
  description,
  averageRating,
  ratingCount,
  amount,
  currencyCode,
  buyNowHandler,
}: BookProps) => {
  const [isInCart, setIsInCart] = useState(false);

  const handleBuyNow = () => {
    buyNowHandler(id);
    setIsInCart(true);
  };

  function truncateText(text: string, limit: number): string {
    return (
      text.split(" ").slice(0, limit).join(" ") +
      (text.split(" ").length > limit ? "..." : "")
    );
  }

  function getRandomRating(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  return (
    <div className="flex gap-[36px]">
      <Image
        src={imageUrl ? imageUrl : "images/placeholderImg.png"}
        alt={truncateText(alt, 2)}
        width={212}
        height={300}
        style={{ width: "212px", height: "300px" }}
        className="w-[212px] h-[300px] shadow-[0_24px_36px_0_#35315447]"
      />
      <div className="flex flex-col justify-around">
        <p className="font-secondary text-[10px] text-[#5C6A79]">{author[0]}</p>
        <h5 className="font-primary font-bold text-base text-[#1C2A39]">
          {truncateText(title, 5)}
        </h5>
        <div className="mb-[16px] flex items-center wrap">
          {formatAvRate(averageRating ? averageRating : getRandomRating(1, 5))}
          <span className="font-secondary text-[13px] ml-[6px]">
            {ratingCount ? ratingCount : getRandomRating(0, 10000)} reviews
          </span>
        </div>
        <p className="text-[10px] font-secondary text-[#5C6A79]">
          {truncateText(description, 15)}
        </p>
        <p className="font-primary font-bold text-base text-[#1C2A39]">
          {currencyCode}
          {amount}
        </p>
        <button
          onClick={handleBuyNow}
          className={
            isInCart
              ? "text-[8px] text-[#5C6A79] border-[1px] border-[#5C6A79] w-[176px] h-[45px] flex justify-center items-center hover:bg-[#5C6A79] hover:text-white active:bg-[#5C6A79] transition-all uppercase font-bold"
              : "text-[8px] text-[#4C3DB2] border-[1px] border-[#4C3DB2] w-[176px] h-[45px] flex justify-center items-center hover:bg-[#4C3DB2] hover:text-white active:bg-[#4C3DB2] transition-all uppercase font-bold"
          }
        >
          {isInCart ? "In the cart" : "buy now"}
        </button>
      </div>
    </div>
  );
};

export { Book };
