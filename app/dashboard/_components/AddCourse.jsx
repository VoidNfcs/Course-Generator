"use client";
import { Button } from "@/components/ui/button";
import { useUser } from "@clerk/nextjs";
import Link from "next/link";
import React from "react";

const AddCourse = () => {
  const { user } = useUser();
  return (
    <div className="flex md:items-center md:flex-row flex-col md:justify-between">
      <div>
        <h2 className="text-3xl">
          Hello,
          <span className="font-bold">{user?.fullName}</span>
          <p className="text-sm text-gray-500">
            Create new course with AI, Share with friend and Earn from it
          </p>
        </h2>
      </div>
      <Link href="/create-course" className="my-5 md:my-0">
        <Button>+ Create AI Course</Button>
      </Link>
    </div>
  );
};

export default AddCourse;
