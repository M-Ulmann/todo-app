import Link from "next/link";
import Bin from "@/public/bin.png"
import Edit from "@/public/edit.png"
import Hamburger from "@/public/hamburger.png"
import Image from "next/image";

export default function Todo(){
  return(
    <>
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

        <div className="flex flex-row gap-15 bg-amber-800">
          <p>Light mode</p>
          <button className=" translate-x-10 hover:-translate-x-10 transition ease">
            .
          </button>
          <p>Dark mode</p>
        </div>

      </header>

      <main className="bg-black min-h-dvh flex flex-col items-center justify-center relative">

        <button className="bg-white absolute text-7xl self-end justify-self-end top-5 right-5 cursor-pointer transition duration-250 ease-out rounded-md hover:rotate-90 active:opacity-50">
          <Image 
            src={Hamburger}
            height={60}
            alt="hamburger"
          />
        </button>

        <section className="bg-white p-10 flex flex-col gap-10 rounded-2xl w-11/12 shadow-white shadow-lg xl:min-w-3/5 sm:min-w-3/4 sm:w-0">
          <p className="text-center px-10 py-3 bg-green-200 text-green-500 rounded-4xl text-xl">
            Item Added To The List
          </p>

          <h1 className="text-center text-fuchsia-900 font-bold text-5xl tracking-widest">
            ToDo List
          </h1>

          <div className=" flex flex-col gap-5 justify-center text-2xl sm:flex-row sm:gap-0">
            <input
              className="flex flex-1 text-2xl pl-5 py-2 rounded-2xl  sm:rounded-l-2xl sm:rounded-r-none focus:outline-cyan-500 focus:outline-2 focus:placeholder:none"
              placeholder="eg. tool" 
              type="text"
              maxLength={40}
            />

            <button className=" cursor-pointer bg-fuchsia-900 text-white px-5 border-2 rounded-2xl border-fuchsia-900 hover:bg-white hover:text-fuchsia-900 active:bg-fuchsia-900 active:text-white transition ease duration-250 sm:rounded-r-2xl sm:rounded-l-none sm:justify-self-center"
            >
              Submit
            </button>
          </div>

          <div className="flex flex-col gap-6 px-5 text-2xl max-h-50 overflow-x-hidden overflow-y-auto overflow-scroll">

            <div className="flex flex-row gap-5 items-center">

              <p className="flex-1">
                vejce dhbkh jkhkjsdh bhdkjha
              </p>

              <button
                className="cursor-pointer p-1 rounded-md  hover:bg-gray-200 hover:outline-2 hover:outline-blue-500 active:opacity-70"
              >
                <Image 
                  src={Edit}
                  width={40}
                  alt="Edit image"
                />
              </button>

              <button
                className="cursor-pointer p-1 rounded-md hover:bg-gray-200 hover:outline-2 hover:outline-red-500 active:opacity-70"
              >
                <Image 
                  src={Bin}
                  width={40}
                  alt="picture" 
                />
              </button>

            </div>

          </div>

          <button
            className="cursor-pointer text-red-600 text-3xl self-center px-8 py-3 rounded-4xl hover:bg-red-500 hover:text-white active:bg-red-800 transition ease duration-250"
          >
            Clear Items
          </button>
        </section>

      </main>
    </>

    
  );
}