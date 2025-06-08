"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "./button";
import { Sheet, SheetClose, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "./sheet";
import { MenuIcon, X } from "lucide-react";

export default function Navbar() {
  const [show, setShow] = useState(true);
  const [open, setOpen] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;

      if (currentY > lastScrollY && currentY > 50) {
        setShow(false); // scrolling down
      } else {
        setShow(true); // scrolling up
      }

      setLastScrollY(currentY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <motion.nav
      initial={{ y: 0 }}
      animate={{ y: show ? 0 : -80 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className="bg-background fixed top-0 left-0 z-50 flex w-full items-center justify-between border-b px-6 py-4 shadow"
    >
      <Link href="/" className="cursor-pointer text-xl font-bold duration-150 hover:scale-102">
        InfoBridge
      </Link>
      <div className="hidden items-center gap-6 text-sm md:flex">
        <Link className="font-medium hover:underline" href="/about">
          About
        </Link>
        <Link className="font-medium hover:underline" href="/projects">
          Projects
        </Link>
        <Link className="font-medium hover:underline" href="/blog">
          Blog
        </Link>
        <Button size="sm" className="h-8 text-sm font-medium" asChild>
          <Link href="/booking">Work with Us</Link>
        </Button>
      </div>
      <Sheet open={open}>
        <SheetTrigger onClick={() => setOpen(true)} className="md:hidden" asChild>
          <button className="grid size-10 place-content-center rounded-md border p-1">
            <MenuIcon size={16} />
          </button>
        </SheetTrigger>
        <SheetContent onClick={() => setOpen(false)}>
          <SheetHeader>
            <SheetTitle className="sr-only">Navigation menu</SheetTitle>
            <SheetClose className="bg-background absolute top-2 right-3 z-10 rounded-md" onClick={() => setOpen(false)}>
              <X />
            </SheetClose>
          </SheetHeader>

          <div className="mb-4 flex flex-col space-y-2 p-4">
            <Button variant="link" className="text-lg font-bold" asChild>
              <Link href="/booking">Booking</Link>
            </Button>
            <Button variant="link" className="text-lg font-bold" asChild>
              <Link href="/about">About</Link>
            </Button>
            <Button variant="link" className="text-lg font-bold" asChild>
              <Link href="/projects">Projects</Link>
            </Button>
            <Button variant="link" className="text-lg font-bold" asChild>
              <Link href="/blog">Blog</Link>
            </Button>
            <Button className="h-8 text-sm font-medium" asChild>
              <Link href="/booking">Work with Us</Link>
            </Button>
          </div>
        </SheetContent>
      </Sheet>
    </motion.nav>
  );
}
