import Link from "next/link";

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

        <button
          className="px-5 py-2"
        >
          Dark mode
        </button>

      </header>

      <main className="bg-black min-h-dvh flex flex-col items-center justify-center">

        <section className="bg-white p-10 flex flex-col gap-10 rounded-2xl shadow-white shadow-lg  md:min-w-1/2 sm:max-w-100">
          <p className="text-center px-10 py-3 bg-green-200 text-green-500 rounded-4xl text-xl">
            Item Added To The List
          </p>

          <h1 className="text-center text-fuchsia-900 font-bold text-5xl tracking-widest">
            ToDo List
          </h1>

          <div className=" flex flex-row justify-center text-2xl">
            <input
              className="flex flex-1 text-2xl pl-5 py-2 rounded-l-2xl"
              placeholder="eg. tool" 
              type="text" 
            />

            <button className=" cursor-pointer bg-fuchsia-900 text-white px-5 rounded-r-2xl border-2 border-fuchsia-900 hover:bg-white hover:text-fuchsia-900 active:bg-fuchsia-900 active:text-white transition ease duration-250"
            >
              Submit
            </button>
          </div>

          <div className="flex flex-col gap-6 px-5 text-2xl max-h-50 overflow-x-hidden overflow-y-auto overflow-scroll">

            <div className="flex flex-row gap-5">

              <p className="flex-1">
                vejce mam rad
              </p>

              <button
                className="cursor-pointer"
              >
                update
              </button>

              <button
                className="cursor-pointer"
              >
                remove
              </button>

            </div>

            <div className="flex flex-row gap-5">

              <p className="flex-1">
                vejce mam rad
              </p>

              <button
                className="cursor-pointer"
              >
                update
              </button>

              <button
                className="cursor-pointer"
              >
                remove
              </button>

            </div>

            <div className="flex flex-row gap-5">

              <p className="flex-1">
                vejce mam rad
              </p>

              <button
                className="cursor-pointer"
              >
                update
              </button>

              <button
                className="cursor-pointer"
              >
                remove
              </button>

            </div>

            <div className="flex flex-row gap-5">

              <p className="flex-1">
                vejce mam rad
              </p>

              <button
                className="cursor-pointer"
              >
                update
              </button>

              <button
                className="cursor-pointer"
              >
                remove
              </button>

            </div>

            <div className="flex flex-row gap-5">

              <p className="flex-1">
                vejce mam rad
              </p>

              <button
                className="cursor-pointer"
              >
                update
              </button>

              <button
                className="cursor-pointer"
              >
                remove
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