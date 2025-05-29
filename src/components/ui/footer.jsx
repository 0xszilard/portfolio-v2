import React from "react";
import { ThemeToggle } from "./theme-toggle";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-muted flex items-center justify-between p-8">
      <div className="flex items-center gap-4">
        <ThemeToggle />
        <span className="text-muted-foreground">
          InfoBridge S.r.o. All Rights Reserved
        </span>
      </div>
      <div className="flex items-center gap-4">
        <Link className="text-muted-foreground" href="/imprint">
          Imprint
        </Link>
        <Link className="text-muted-foreground" href="/privacy">
          Privacy
        </Link>
      </div>
    </footer>
  );
}
