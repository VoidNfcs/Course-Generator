import { UserInputContext } from "@/app/_context/UserInputContext";
import {CategoryListMenu} from "@/app/_shared/CategoryList";
import Image from "next/image";
import React, { useContext } from "react";


const SelectCategory = () => {
  const { userCourseInput, setUserCourseInput } = useContext(UserInputContext);

  const handleChategoryChange = (category) => {
    setUserCourseInput((prev) => ({
      ...prev,
      category: category,
    }));
  };

  return (
    <div className="px-10 md:px-20">
      <h2 className="my-5">Select the Course Chategory</h2>
      <div className="grid grid-cols-3 gap-10 ">
        {CategoryListMenu.map((item, index) => (
          <div
            key={index}
            className={`flex flex-col p-5 border items-center rounded-xl hover:border-black hover:bg-blue-50 cursor-pointer ${
              userCourseInput?.category == item.name &&
              "bg-blue-50 border-black"
            }`}
            onClick={() => handleChategoryChange(item.name)}
          >
            <Image src={item.icon} width={50} height={50} alt="..." />
            <h2>{item.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SelectCategory;
