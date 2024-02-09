import MockUp from "@/components/MockUp";
import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-gradient-to-tr from-slate-900 to-slate-700 h-screen p-5 grid place-items-center" >
      <MockUp />
    </main>
  );
}
