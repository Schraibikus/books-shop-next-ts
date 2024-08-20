import CartItem from "@/components/CartItem";
import Layout from "@/components/Layout";

export default function Cart() {
  return (
    <>
      <Layout>
        <section className="mt-[87px] mb-10 w-full flex justify-center items-center font-primary font-bold">
          <section>
            <h1 className="text-2xl mb-[19px]">SHOPPING CART</h1>
            <div className="flex text-[10px] font-bold">
              <p className="mr-[380px]">ITEM</p>
              <p className="mr-[210px]">QUANTITY</p>
              <p className="mr-[220px]">PRICE</p>
              <p>DELIVERY</p>
            </div>
            <CartItem />
            <div className="flex flex-col gap-[19px]">
              <h3 className="text-2xl">TOTAL PRICE: $30.58</h3>
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
