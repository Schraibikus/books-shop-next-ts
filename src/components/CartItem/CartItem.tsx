import Image from "next/image";

function CartItem() {
  return (
    <>
      <section className="mt-[30px] mb-10 w-full flex justify-center items-center justify-between font-primary font-bold">
        <div>
          <div>
            <Image
              src="/mockImages/01.png"
              alt="book"
              width={102}
              height={145}
            />
          </div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </section>
    </>
  );
}

export default CartItem;
