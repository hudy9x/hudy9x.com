import Link from "next/link";
import React from "react";
import Particles from "./components/Particles";
import Image from "next/image";

const navigation = [
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
];

const words = 'hudy9x'.split('')

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black">
      <Image className="rounded-full grayscale transition-all duration-700 hover:grayscale-0 animate-fade-in" src={'https://avatars.githubusercontent.com/u/95471659?v=4'} alt="Hudy9x" width={100} height={100} />
      <nav className="my-16 animate-fade-in">
        <ul className="flex items-center justify-center gap-4">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="uppercase duration-500 text-zinc-500 hover:text-zinc-300"
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
      <div>
        <h1 className=" z-10 font-extrabold text-5xl text-transparent duration-1000 bg-white cursor-default text-edge-outline font-display sm:text-6xl md:text-9xl whitespace-nowrap bg-clip-text">
          {words.map((w, widx) => {
            const extra = widx ? widx * 0.4 : 0
            const duration = 3 + extra + 's'

            return <span className="animate-title" style={{ animationDuration: duration }} key={w}>{w}</span>
          })}
        </h1>

      </div>

      <div className="my-16 text-center animate-fade-in mx-10 space-y-3 sm:mx-0 text-sm sm:text-xl">
        <h2 className="text-zinc-500 ">I speak web languages. Turning ideas into apps for customers and myself. Always coding, always learning.</h2>
        <h2 className="text-zinc-500 ">
          {"I'm building "}
          <Link

            href="/projects/namviek"
            className="underline duration-500 hover:text-zinc-300"
          >
            namviek.com
          </Link> to help small startups managing tasks with points easily.
        </h2>
      </div>
    </div>
  );

}

