import Image from "next/image";
import hamburgerImg from "@/public/hamburger.png"

export function Hamburger(){
  return(
    <button className="bg-white absolute text-7xl self-end justify-self-end top-5 right-5 cursor-pointer transition duration-250 ease-out rounded-md hover:rotate-90 active:opacity-50">
      <Image 
        src={hamburgerImg}
        height={60}
        alt="hamburger"
      />
    </button>
  );
}