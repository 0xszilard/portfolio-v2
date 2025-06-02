"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Navbar() {
  const [show, setShow] = useState(true);
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
      className="fixed top-0 left-0 z-50 flex w-full items-center justify-between bg-white px-6 py-4 shadow"
    >
      <Link href="/" className="text-xl font-bold">
        MySite
      </Link>
      <div className="space-x-6 text-sm">
        <Link className="font-medium hover:underline" href="/about">
          About
        </Link>
        <Link className="font-medium hover:underline" href="/projects">
          Projects
        </Link>
      </div>
    </motion.nav>
  );
}
