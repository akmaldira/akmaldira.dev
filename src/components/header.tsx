"use client";

import { useMediaQuery } from "@/hooks/use-media-query";
import Navbar from "./navbar";
import Sidebar from "./sidebar";

export default function Header() {
  const isMd = useMediaQuery("(min-width: 768px)");

  if (!isMd) return <Navbar />;

  return <Sidebar />;
}
