'use client'

import { Hamburger } from "@/components/hamburger";
import { Header } from "@/components/header";
import Link from "next/link";
import { useState } from "react";
import clsx from "clsx";

export default function NothingHere(){

  const [isOpenHamburger, setIsOpenHamburger] = useState(true);
  const [isDark, setIsDark] = useState(false);

  return(
    <>
      <Header isOpenHamburger={isOpenHamburger} setIsDark={setIsDark} isDark={isDark} />

      <main className={clsx("min-h-dvh relative flex flex-col items-center justify-center text-2xl gap-10 font-bold transition ease-out duration-300", 
        !isDark ? "bg-white text-black" : " bg-black text-white")}
      >

        <Hamburger setIsOpenHamburger={setIsOpenHamburger} isOpenHamburger={isOpenHamburger}/>

        <p className="text-4xl">Here is nothing... maybe</p>
        <p>
          You can go <Link className="text-blue-700 hover:text-blue-500" href={"/"}>back</Link> or watch this video instead.
        </p>

        <video controls width={500}>
          <source src="/Cat Open Mouth.mp4" type="video/mp4"/>
        </video>
      </main>
    </>

  );
}