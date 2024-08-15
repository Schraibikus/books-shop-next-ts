import Image from "next/image";

import Layout from "@/components/Layout/Layout";

export default function User() {
  return (
    <>
      <Layout>
        <section className="mt-[87px] mb-10 w-full flex justify-center items-center justify-between font-primary font-bold">
          <section>
            <h1 className="text-2xl">PROFILE</h1>
            <div className="flex gap-[17px]">
              <Image
                src="/images/profile.png"
                alt="profile"
                width={235}
                height={235}
              />
              <div className="flex flex-col items-start">
                <h3 className="mb-2">YOUR NAME</h3>
                <p className="text-2xl mb-[25px]">John Smith</p>
                <h3 className="mb-2">YOUR EMAIL</h3>
                <p className="text-2xl mb-[41px]">example@mail.com</p>
                <button className="text-[8px] text-[#4C3DB2] border-[1px] border-[#4C3DB2] w-[176px] h-[45px] flex justify-center items-center hover:bg-[#4C3DB2] hover:text-white active:bg-[#4C3DB2] transition-all uppercase font-bold">
                  EDIT PROFILE
                </button>
              </div>
            </div>
          </section>
          <div className="w-[353px] h-[345px] bg-[#FFE0E2] flex flex-col items-center shadow-[0_24px_36px_0_#35315447]">
            <h3 className="font-bold text-[12px] mt-[17px] mb-[29px]">
              ABOUT ME
            </h3>
            <textarea
              placeholder="Введите информацию о себе"
              className="bg-[#FFE0E2] w-[353px] h-[345px] resize-none px-5 font-semibold text-[12px] placeholder:text-[#5C6A79]"
            ></textarea>
          </div>
        </section>
      </Layout>
    </>
  );
}
