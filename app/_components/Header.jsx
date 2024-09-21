import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <div className="flex items-center justify-between p-5 shadow-md">
      <Image src={"/logo.svg"} height={150} width={100} alt="logo" />
      <Button> Get Started</Button>
    </div>
  );
};

export default Header;
