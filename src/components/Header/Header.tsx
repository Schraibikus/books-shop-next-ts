import Link from "next/link";
import clsx from "clsx";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";

import Navigation from "../Navigation/Navigation";
import styles from "./header.module.scss";
import LoginUser from "./LoginUser";
import { useAppDispatch } from "@/hooks/redux";

function Header() {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const [selected, setSelected] = useState(false);

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
    setSelected(false);
  };

  return (
    <>
      <header className="h-[116px] flex justify-center gap-[248px] items-center bg-white">
        <Link
          href="/"
          className={clsx(styles.logo, {
            [styles.disabled]: router.pathname === "/",
          })}
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
          <Link href="/cart">
            <Image
              src="/icons/bag_icon.svg"
              alt="cart"
              width={14}
              height={17}
            />
          </Link>
        </div>
      </header>
    </>
  );
}

export default Header;
