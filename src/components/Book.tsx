import Image from "next/image";

interface Props {
  imageUrl: string;
  alt: string;
  title: string;
  author: string;
  description: string;
  amount: string | undefined;
  currencyCode: string | undefined;
}

export const Book = ({
  imageUrl,
  alt,
  title,
  author,
  description,
  amount,
  currencyCode,
}: Props) => {
  function truncateText(text: string, limit: number) {
    return (
      text.split(" ").slice(0, limit).join(" ") +
      (text.split(" ").length > limit ? "..." : "")
    );
  }
  return (
    <div className="flex gap-[36px]">
      <Image
        src={imageUrl}
        alt={truncateText(alt, 2)}
        width={212}
        height={300}
        className="w-[212px] h-[300px] shadow-[0_24px_36px_0_#35315447]"
      />
      <div className="flex flex-col justify-around">
        <p className="font-secondary text-[10px] text-[#5C6A79]">{author[0]}</p>
        <h5 className="font-primary font-bold text-base text-[#1C2A39]">
          {truncateText(title, 5)}
        </h5>
        <p className="text-[10px] font-secondary text-[#5C6A79]">
          {truncateText(description, 15)}
        </p>
        <p className="font-primary font-bold text-base text-[#1C2A39]">
          {currencyCode}
          {amount}
        </p>
        <button className="text-[8px] text-[#4C3DB2] border-[1px] border-[#4C3DB2] w-[176px] h-[45px] flex justify-center items-center hover:bg-[#4C3DB2] hover:text-white active:bg-[#4C3DB2] transition-all uppercase font-bold">
          buy now
        </button>
      </div>
    </div>
  );
};
