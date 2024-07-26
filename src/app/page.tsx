import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <p className="text-xl font-bold fixed left-0 top-0 flex w-full justify-center pb-6 pt-8 lg:static lg:w-auto  lg:rounded-xl lg:border lg:p-4 ">
          Be Dungeon Forged
        </p>
      </div>

      <div className="grid gap-8 place-items-center">
        <img src="/construction.svg" alt="construction" className="max-w-40" />
        <p>Website under construction</p>
      </div>
      <div className="relative z-[-1] flex place-items-center before:absolute before:h-[300px] before:w-full before:-translate-x-1/2 before:rounded-full before:lg:h-[360px]"></div>
    </main>
  );
}
