import Link from "next/link";
import React from "react";
import Particles from "./components/Particles";
import Image from "next/image";
import { BrandName } from "./components/BrandName";

const navigation = [
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
];

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black">
      <Image
        className="rounded-full w-[65px] h-[65px] sm:w-[100px] sm:h-[100px] grayscale transition-all duration-700 hover:grayscale-0 animate-fade-in"
        src={"https://avatars.githubusercontent.com/u/95471659?v=4"}
        alt="Hudy9x"
        width={100}
        height={100}
      />
      <nav className="my-12 sm:my-16 animate-fade-in">
        <ul className="flex items-center justify-center gap-4">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="uppercase text-xs sm:text-base duration-500 text-zinc-500 hover:text-zinc-300"
            >
              {item.name}
            </Link>
          ))}
        </ul>
      </nav>
      <Particles
        className="absolute inset-0 -z-10 animate-fade-in-1000"
        quantity={100}
      />
      <BrandName />

      <div className="my-16 text-center animate-fade-in mx-10 space-y-3 sm:mx-0 text-sm sm:text-xl">
        <h2 className="text-zinc-500 ">
          I speak web languages. Turning ideas into apps for customers and
          myself. Always coding, always learning.
        </h2>
        <h2 className="text-zinc-500 ">
          {"I'm building "}
          <Link
            href="/projects/namviek"
            className="underline duration-500 hover:text-zinc-300"
          >
            namviek.com
          </Link>{" "}
          to help small startups managing tasks with points easily.
        </h2>
      </div>
    </div>
  );
}
