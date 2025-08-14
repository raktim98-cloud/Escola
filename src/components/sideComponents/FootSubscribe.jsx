'use client';
import React, { useState } from "react";
import { BsSendFill } from "react-icons/bs";

function FootSubscribe() {
  const [email, setEmail] = useState("");
  const handleClick = () => {
    e.preventDefault();
    setEmail("");
  };
  return (
    <div className="px-[80px] py-[40px] bg-blue-600 rounded-[10px]">
      <form
        onSubmit={handleClick}
        className="flex items-center justify-between gap-20"
      >
        <div>
          <h3 className="text-[42px] leading-[54.1px] font-bold text-white">
            Newsletters
          </h3>
          <p className="text-[17px] leading-[26.1px] text-white pt-[13px]">Lorem Ipsum is simply dummy text of the printing</p>
        </div>
        <div className="flex items-center justify-between gap-20 border border-blue-400 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent px-4 py-3 rounded-md">
          <input
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            placeholder="Enter Email Address"
            className="text-white"
          />
          <button type="submit" className="group px-6 py-3 bg-transparent border-2 border-white text-white rounded-md hover:bg-white hover:text-blue-600 transition-colors duration-300 flex items-center gap-2">
            <span className="text-white group-hover:text-primary transition-colors"><BsSendFill/></span>
            Browse More
          </button>
        </div>
      </form>
    </div>
  );
}

export default FootSubscribe;
