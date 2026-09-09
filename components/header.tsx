import Link from "next/link";

export function Header(){
  return(
    <header className="bg-cyan-500 rounded-b-2xl flex flex-row items-center px-5 py-5 gap-7 text-lg justify-between tracking-wider md:text-2xl md:px-15">

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
        <button className="cursor-pointer">
          Light mode
        </button>
        <div className="bg-black w-5 h-5 rounded-4xl translate-x-10 hover:-translate-x-10 transition ease-out duration-300">

        </div>
        <button className="cursor-pointer">
          Dark mode
        </button>
      </div>

  </header>
  );
}