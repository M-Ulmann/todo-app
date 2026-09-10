'use client'

import Bin from "@/public/bin.png"
import Edit from "@/public/edit.png"
import Image from "next/image";
import { Header } from "@/components/header";
import { Hamburger } from "@/components/hamburger";
import { useEffect, useRef, useState } from "react";
import clsx from "clsx";

//import { Items } from "@/components/items";

export default function Todo(){

  const [isOpenHamburger, setIsOpenHamburger] = useState(true);
  const [isDark, setIsDark] = useState(true);
  const [itemName, setItemName] = useState("");
  const [todo, setTodo] = useState<string[]>([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editingIndex, setEditingIndex] = useState(Number);
  const focusInput = useRef<HTMLInputElement>(null);
  const scrollDown = useRef<HTMLInputElement>(null);
  const [info, setInfo] = useState('');

  useEffect(() => {
    scrollDown.current?.scrollIntoView();
  },[todo]);

  return(
    <>

      <Header isOpenHamburger={isOpenHamburger} setIsDark={setIsDark} isDark={isDark}/>

      <main className={clsx("bg-black min-h-dvh flex flex-col items-center justify-center relative transition ease-out duration-300", !isDark && "bg-white")}>

        <Hamburger setIsOpenHamburger={setIsOpenHamburger} isOpenHamburger={isOpenHamburger} />

        <section className="bg-white p-10 flex flex-col gap-10 rounded-2xl w-11/12 shadow-white shadow-lg xl:min-w-3/5 sm:min-w-3/4 sm:w-0">
          <p className={clsx("text-center h-10 rounded-4xl text-xl flex items-center justify-center",
            info === "Item Added To The List" ? "bg-green-300 text-green-700" 
            : info === "Item Updated" ? "bg-cyan-300 text-blue-600"
            : info === "Item Removed" || info === "List Cleared" ? "bg-red-400 text-red-900" : "bg-transparent text-transparent"
          )}
               
          >
            {info}
          </p>

          <h1 className="text-center text-fuchsia-900 font-bold text-5xl tracking-widest">
            ToDo List
          </h1>

          <div className=" flex flex-col gap-5 justify-center text-2xl sm:flex-row sm:gap-0">
            <input
              className={"flex flex-1 text-2xl pl-5 py-2 rounded-2xl sm:rounded-l-2xl sm:rounded-r-none focus:outline-cyan-500 focus:outline-2 focus:placeholder:text-transparent"}
              placeholder="eg. tool"
              type="text"
              ref={focusInput}
              maxLength={40}
              onChange={(event) => {
                setItemName(event.target.value);
              }}
              value={itemName}
              onKeyDown={(stisk) =>{
                if(isEditing && stisk.key === 'Enter' && itemName.length > 1){
                  setTodo(editItem => editItem.map((item, index) => index === editingIndex ? itemName : item));
                  setIsEditing(false);
                  setItemName('');
                  setInfo("Item Updated");
                }

                else if (stisk.key === 'Enter' && itemName.length > 1){
                  setTodo([...todo, itemName]);
                  setItemName('');
                  setInfo("Item Added To The List");
                }
              }}
            />

            <button className=" cursor-pointer bg-fuchsia-900 text-white px-5 border-2 rounded-2xl border-fuchsia-900 hover:bg-white hover:text-fuchsia-900 active:bg-fuchsia-900 active:text-white transition ease duration-250 sm:rounded-r-2xl sm:rounded-l-none sm:justify-self-center"
              onClick={() => {
                if(isEditing && itemName.length > 1){
                  setTodo(editItem => editItem.map((item, index) => index === editingIndex ? itemName : item));
                  setIsEditing(false);
                  setItemName('');
                  setInfo("Item Updated");
                }

                else if(itemName.length > 1){
                  setTodo([...todo, itemName]);
                  setItemName('');
                  setInfo("Item Added To The List");
                }
              }}
            >
              Submit
            </button>
          </div>

          <div className="flex flex-col gap-6 p-5 text-2xl max-h-60 overflow-x-hidden overflow-y-auto overflow-scroll ">

            {todo.map((item, index) => (
              <div className="flex flex-row gap-5 items-center" key={index}>

                <p className="flex-1">
                  {item}
                </p>
          
                <button
                  className="cursor-pointer p-1 rounded-md  hover:bg-gray-200 hover:outline-2 hover:outline-blue-500 active:opacity-70"
                  onClick={() => {
                    setItemName(item);
                    setIsEditing(true);
                    setEditingIndex(index);
                    focusInput.current?.focus();
                  }}
                >
                  <Image 
                    src={Edit}
                    width={40}
                    alt="Edit image"
                  />
                </button>
          
                <button
                  className="cursor-pointer p-1 rounded-md hover:bg-gray-200 hover:outline-2 hover:outline-red-500 active:opacity-70"
                  onClick={() => {
                    setTodo(deleteItem => deleteItem.filter((_, safeItems) => safeItems !== index));
                    setIsEditing(false);
                    setItemName('');
                    setInfo("Item Removed");
                  }}
                >
                  <Image 
                    src={Bin}
                    width={40}
                    alt="Bin image" 
                  />
                </button>
          
                <div ref={scrollDown}></div>

              </div>
            ))}

          </div>

          <button
            className="cursor-pointer text-red-600 text-3xl self-center px-8 py-3 rounded-4xl hover:bg-red-500 hover:text-white active:bg-red-800 transition ease duration-250"
            onClick={() => {
              setTodo([]);
              setIsEditing(false);
              setItemName('');
              setInfo("List Cleared");
            }}
          >
            Clear Items
          </button>
        </section>

      </main>
    </>

    
  );
}