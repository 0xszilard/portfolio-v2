import React from "react";
import { ThemeToggle } from "./theme-toggle";
import { Button } from "./button";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 z-50 w-full p-4">
      <nav className="bg-background/50 m-auto flex max-w-lg items-center justify-between rounded-full border p-2 backdrop-blur-md">
        <span className="ml-3 text-sm font-semibold">Website</span>
        <div className="flex items-center gap-1">
          <Button variant="ghost">Home</Button>
          <Button variant="ghost">Home</Button>
          <Button variant="ghost">Home</Button>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}
