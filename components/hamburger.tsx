import Image from "next/image";
import hamburgerImg from "@/public/hamburger.png"
import { SetStateAction } from "react";
import { Dispatch } from "react";

export function Hamburger({setIsOpenHamburger, isOpenHamburger}: {setIsOpenHamburger: Dispatch<SetStateAction<boolean>>, isOpenHamburger: boolean}){
  return(
    <button 
      className="bg-white absolute text-7xl self-end justify-self-end top-5 right-5 cursor-pointer transition duration-250 ease-out rounded-md hover:rotate-90 active:opacity-50"
      onClick={() => {
        setIsOpenHamburger(!isOpenHamburger);
      }}      
      >
      <Image 
        src={hamburgerImg}
        height={60}
        alt="hamburger"
      />
    </button>
  );
}