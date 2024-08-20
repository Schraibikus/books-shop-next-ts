"use client";
import { useState } from "react";

function LoginUser() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <form
      action={`http://localhost:3000/api/auth`}
      method="post"
      className="font-primary font-bold absolute bg-[#fff]
       pt-17px pb-[36px] w-[240px] right-0 mt-[10px] drop-shadow-[0_4px_4px_0_rgba(0,0,0,0.25)]"
    >
      <h2 className="font-primary font-bold text-base text-[#1c2a39] text-center">
        Log in
      </h2>
      <label
        className="block text-xs capitalize text-[#000] mb-[10px] mt-[15px] pl-[26px] pr-[39px]"
        htmlFor="email"
      >
        email
      </label>
      <input
        className="block w-[176px] border-solid border border-[#4C3DB2] text-xs text-[#4C3DB2] p-2.5 placeholder-[#4C3DB2] mb-[10px] mt-[15px] ml-[26px]"
        name="email"
        onChange={(e) => setEmail(e.target.value)}
        id="email"
        placeholder="Enter your email"
        type="email"
        value={email}
        required
      />
      <label
        className="block text-xs capitalize text-[#000] mb-[10px] mt-[15px] pl-[26px] pr-[39px]"
        htmlFor="pass"
      >
        password
      </label>
      <input
        className={
          password.length > 6
            ? "block w-[176px] border-solid border border-[#4C3DB2] text-xs text-[#4C3DB2] p-2.5 placeholder-[#4C3DB2] mb-[10px] mt-[15px] ml-[26px]"
            : "block w-[176px] text-xs p-2.5 border-[#ff353a] border text-[#ff353a] placeholder-[#ff353a] ml-[26px]"
        }
        name="password"
        onChange={(e) => setPassword(e.target.value)}
        id="pass"
        placeholder="Enter your password"
        type="password"
        value={password}
        required
      />
      {password.length < 6 && (
        <p className="w-full text-[8px] text-[#ff353a] mt-[10px] text-center">
          Your password must be at least 6 characters long
        </p>
      )}
      <button
        className="w-[176px] bg-[#9e98dc] text-[#fff] py-[8px] mt-[50px] uppercase ml-[26px]"
        type="submit"
      >
        Log in
      </button>
    </form>
  );
}

export default LoginUser;
