"use client";

import { Progress } from "@/components/ui/progress";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import {
  HiOutlineHome,
  HiOutlinePower,
  HiOutlineShieldCheck,
  HiOutlineSquare3Stack3D,
} from "react-icons/hi2";

const Sidebar = () => {
  const Menu = [
    {
      id: 1,
      name: "Home",
      icon: <HiOutlineHome />,
      path: "/dashboard",
    },
    {
      id: 2,
      name: "Explore",
      icon: <HiOutlineSquare3Stack3D />,
      path: "/dashboard/explore",
    },
    {
      id: 3,
      name: "Upgrade",
      icon: <HiOutlineShieldCheck />,
      path: "/dashboard/upgrade",
    },
    {
      id: 4,
      name: "Logout",
      icon: <HiOutlinePower />,
      path: "/dashboard/logout",
    },
  ];

  const path = usePathname();

  return (
    <div className="fixed h-full md:w-64 p-5 shadow-md">
      <Image src={"/logo.svg"} width={100} height={160} alt="logo" />
      <hr className="my-3" />

      <ul>
        {Menu.map((item, index) => (
          <Link href={item.path}>
            <div
              key={item.id}
              className={`flex items-center gap-2 text-gray-600 mb-3xs p-3 cursor-pointer hover:bg-g-gray-100 hover:text-black rounded-lg ${
                item.path == path && "bg-g-gray-100 text-black"
              }`}
            >
              <div className="text-2xl">{item.icon}</div>
              <h2 className="ml-2">{item.name}</h2>
            </div>
          </Link>
        ))}
      </ul>

      <div className="absolute bottom-10 w-[80%]">
        <Progress value={33} />
        <h2 className="text-sm my-2">3 out of 5 Course created</h2>
        <h2 className="text-xs text-gray-500">Upgrade your plan to get unlimited course generate</h2>
      </div>
    </div>
  );
};

export default Sidebar;
