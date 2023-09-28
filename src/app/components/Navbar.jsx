import React from "react";
import Image from "next/image";
import { UserButton } from "@clerk/nextjs";

function Navbar() {
  return (
    <nav className="flex justify-between items-center">
      <Image
        src="/logo.png"
        alt="logo"
        width={100}
        height={100}
        className="cursor-pointer"
      />
      <div className="flex gap-3">
        <h1
          className="
      
      hover:bg-sky-400 px-5 p-1 rounded-full cursor-pointer"
        >
          Nos services
        </h1>
        <h1
          className="
      hover:bg-sky-400 px-1 rounded-full cursor-pointer"
        >
          Contact
        </h1>
        {/* <h1>Connexion</h1> */}
        <div className="">
          <UserButton />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
