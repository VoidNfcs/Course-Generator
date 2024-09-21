"use client";
import { Button } from "@/components/ui/button";
import React, { useContext, useEffect, useState } from "react";
import {
  HiMiniSquares2X2,
  HiLightBulb,
  HiDocumentCheck,
} from "react-icons/hi2";
import SelectCategory from "./_components/SelectCategory";
import TopicDescription from "./_components/TopicDescription";
import SelectOption from "./_components/SelectOption";
import { UserInputContext } from "../_context/UserInputContext";

const CreateCourse = () => {
  const StepperOptions = [
    {
      id: 1,
      name: "Category",
      icon: <HiMiniSquares2X2 />,
    },
    {
      id: 2,
      name: "Topic & Desc",
      icon: <HiLightBulb />,
    },
    {
      id: 3,
      name: "Options",
      icon: <HiDocumentCheck />,
    },
  ];

  const { userCourseInput, setUserCourseInput } = useContext(UserInputContext);

  useEffect(() => {
    console.log(userCourseInput);
  }, [userCourseInput]);

  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div>
      {/* Stepper */}
      <div className="flex flex-col justify-center items-center mt-10">
        <h2 className="text-4xl font-bold text-black">Create Course</h2>
        <div className="flex mt-10">
          {StepperOptions.map((item, index) => (
            <div key={item.id} className="flex items-center">
              <div className="flex flex-col w-[50px] items-center md:w-[100px]">
                <div
                  className={` text-white rounded-full p-3
                ${activeIndex >= index ? "bg-black" : "bg-gray-200"}`}
                >
                  {item.icon}
                </div>
                <h2 className="hidden md:block md:text-sm">{item.name}</h2>
              </div>
              {index != StepperOptions?.length - 1 && (
                <div
                  className={`h-1 w-[50px] md:w-[100px] rounded-lg lg:w-[170px] 
                ${activeIndex - 1 >= index ? "bg-black" : "bg-gray-300"}
                `}
                ></div>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="px-10 md:px-20 lg:px-44 mt-10">
        {/* Components */}

        {activeIndex == 0 ? (
          <SelectCategory />
        ) : activeIndex == 1 ? (
          <TopicDescription />
        ) : (
          <SelectOption />
        )}

        {/* Next Previous Button */}
        <div className="flex justify-between mt-10">
          <Button
            disabled={activeIndex == 0}
            onClick={() => setActiveIndex(activeIndex - 1)}
            variant="outline"
          >
            Previous
          </Button>
          {activeIndex < 2 && (
            <Button onClick={() => setActiveIndex(activeIndex + 1)}>
              Next
            </Button>
          )}
          {activeIndex == 2 && (
            <Button onClick={() => setActiveIndex(activeIndex + 1)}>
              Generate
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default CreateCourse;
