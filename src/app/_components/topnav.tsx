"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

export default function TopNav() {
  const pathName = usePathname();
  return (
    <nav className="flex fixed w-screen p-4 items-center text-xl font-semibold justify-between bg-black text-white">
      <Link href="/" className={clsx("hover:text-red-500")}>
        Dungeon Forged
      </Link>
      <Link
        href="/about"
        className={clsx("hover:text-red-500", {
          "text-red-500": pathName === "/about",
        })}
      >
        About
      </Link>
    </nav>
  );
}
