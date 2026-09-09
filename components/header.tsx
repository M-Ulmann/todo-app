import Link from "next/link";
import clsx from "clsx";
import { Dispatch, SetStateAction } from "react";

export function Header({isOpenHamburger, setIsDark, isDark}: {
  isOpenHamburger: boolean
  setIsDark: Dispatch<SetStateAction<boolean>>
  isDark: boolean
}){

  return(
    <header className={clsx("bg-cyan-500 rounded-b-2xl flex flex-row items-center px-5 py-5 gap-7 text-lg justify-between tracking-wider md:text-2xl md:px-15", isOpenHamburger && " hidden")}>

      <div className="flex flex-row gap-7">
        <Link
          className=" hover:text-blue-800 active:text-black transition duration-200"
          href={'/'}
        >
          ToDo      
        </Link>

        <Link 
          className="hover:text-blue-800 active:text-black transition duration-200"
          href={'/nothing-here'}
        >
          NothingHere
        </Link>
      </div>

      <div className="flex flex-row gap-13 items-center">
        <button 
          className="cursor-pointer"
          onClick={() => {
            setIsDark(false)
          }}  
        >
          Light mode
        </button>
        <div className={clsx("bg-black w-5 h-5 rounded-4xl transition ease-out duration-300", !isDark && "bg-white -translate-x-10", isDark && "translate-x-10")}>

        </div>
        <button 
          className="cursor-pointer"
          onClick={() => {
            setIsDark(true)
          }}  
        >
          Dark mode
        </button>
      </div>

  </header>
  );
}