"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

export default function TopNav() {
  const pathName = usePathname();
  return (
    <nav className="flex fixed w-screen p-4 items-center font-semibold justify-between bg-black text-white lg:px-60">
      <Link href="/" className={clsx("hover:text-red-500 text-xl")}>
        Dungeon Forged
      </Link>
      <Link
        href="/about"
        className={clsx("hover:text-red-500 sm:text-sm lg:text-xl", {
          "text-red-500": pathName === "/about",
        })}
      >
        About
      </Link>
      <Link
        href="/contact"
        className={clsx("hover:text-red-500 sm:text-sm lg:text-xl", {
          "text-red-500": pathName === "/contact",
        })}
      >
        Contact
      </Link>
    </nav>
  );
}
