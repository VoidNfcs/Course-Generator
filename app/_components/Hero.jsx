import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <section>
      <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:items-center">
        <div className="mx-auto max-w-xl text-center">
          <h1 className="text-3xl font-extrabold sm:text-5xl">
            AI Course Generator
            <strong className="font-extrabold text-blue-800 text-4xl sm:block">
              Custom Learning Paths, Powered by AI
            </strong>
          </h1>

          <p className="mt-4 sm:text-xl/relaxed">
            Unlock personalized education with AI-driven course <br /> creation.
            Tailor your learning journey to fit your unique goals and pace
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              className="block w-full rounded bg-red-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-red-700 focus:outline-none focus:ring active:bg-red-500 sm:w-auto"
              href="/dashboard"
            >
              Get Started
            </Link>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
