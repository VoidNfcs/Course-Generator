import { UserButton } from "@clerk/nextjs";
import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <div className="flex justify-between shadow-sm p-5 items-center">
      <Image src={"/favicon.ico"} width={40} height={40} alt="favico" priority={true} />
      <UserButton />
    </div>
  );
};

export default Header;
