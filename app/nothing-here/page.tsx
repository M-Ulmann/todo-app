import Link from "next/link";

export default function NothingHere(){
  return(
    <main>
      <p>ahoj nic tu zatim neni</p>
      <p>
        Muzes se zatim vratit <Link href={"/"}>zpet</Link>, nez to bude hotove
      </p>
    </main>
  );
}