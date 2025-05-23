import React from "react";
import { ThemeToggle } from "./theme-toggle";

export default function Footer() {
  return (
    <footer className="bg-muted flex items-center justify-between p-8">
      <span className="text-muted-foreground">
        InfoBridge S.r.o. All Rights Reserved
      </span>
      <ThemeToggle />
    </footer>
  );
}
