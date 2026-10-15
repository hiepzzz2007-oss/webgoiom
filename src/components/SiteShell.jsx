"use client";

import { usePathname } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CartDrawer from "@/components/CartDrawer";

export default function SiteShell({ children }) {
  const pathname = usePathname();
  return <><Header /><main key={pathname}>{children}</main><Footer /><CartDrawer /></>;
}
