import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

import Navigation from "@/components/Navigation";
import LoginUser from "@/components/Header/LoginUser";
import { useAppSelector } from "@/hooks/redux";

function Header() {
  const [selected, setSelected] = useState(false);
  const curCart = useAppSelector((state) => state.cart.items);

  return (
    <>
      <header className="h-[116px] flex justify-center gap-[248px] items-center bg-white">
        <Link
          href="/"
          className="text-[24px] font-bold text-[#1c2a39] transition-all hover:opacity-70"
        >
          Bookshop
        </Link>
        <Navigation />
        <div className="flex gap-[95px] relative">
          <Link href="/user">
            <Image
              src="/icons/user_icon.svg"
              alt="user"
              width={12}
              height={15}
              onClick={() => setSelected(!selected)}
            />
            {selected && <LoginUser />}
          </Link>
          <Link href="/cart" className="relative">
            <Image
              src="/icons/bag_icon.svg"
              alt="cart"
              width={14}
              height={17}
            />
            {curCart.length > 0 && (
              <span className="absolute top-[10px] left-[5px] text-[10px] text-white bg-red-500 rounded-full w-[13px] h-[13px] flex justify-center items-center font-primary">
                {curCart.length}
              </span>
            )}
          </Link>
        </div>
      </header>
    </>
  );
}

export default Header;
