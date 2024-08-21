import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "@/hooks/useRedux";

import CartItem from "@/components/CartItem";
import Layout from "@/components/Layout";
import { cartSlice } from "@/store/cartSlice";

export default function Cart() {
  const dispatch = useAppDispatch();
  const { items, total } = useAppSelector((state) => state.cartTotal);
  // console.log(items);

  useEffect(() => {
    const LSstate = localStorage.getItem("persist:root");
    const parsedLSstate = LSstate ? JSON.parse(LSstate) : {};
    const curCart = JSON.parse(parsedLSstate.cartTotal);
    dispatch(cartSlice.actions.getCartItems(curCart.items));
  }, [dispatch]);

  console.log();
  return (
    <>
      <Layout>
        <section className="mt-[87px] mb-10 w-full flex justify-center items-center font-primary font-bold">
          <section className="w-full">
            <h1 className="text-2xl mb-[19px]">SHOPPING CART</h1>
            <ul className="flex text-[10px] font-bold justify-between w-full">
              <li>ITEM</li>
              <li>QUANTITY</li>
              <li>PRICE</li>
              <li>DELIVERY</li>
            </ul>
            <ul>
              {+items.length ? (
                items.map((item) => <CartItem key={item.id} item={item} />)
              ) : (
                <p>Cart empty</p>
              )}
            </ul>

            <div className="flex flex-col gap-[19px]">
              <h3 className="text-2xl">TOTAL PRICE: {total.toFixed(2)}</h3>
              <button className="text-[8px] text-[#4C3DB2] border-[1px] border-[#4C3DB2] w-[176px] h-[45px] flex justify-center items-center hover:bg-[#4C3DB2] hover:text-white active:bg-[#4C3DB2] transition-all">
                CHECKOUT
              </button>
            </div>
          </section>
        </section>
      </Layout>
    </>
  );
}
