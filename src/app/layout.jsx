import "./globals.css";
import SiteShell from "@/components/SiteShell";

export const metadata = {
  title: { default: "Ôm Nhà — Gối ôm cho những giấc ngủ dịu dàng", template: "%s | Ôm Nhà" },
  description: "Gối ôm cotton mềm mại, thiết kế tối giản cho những giấc ngủ thật êm.",
};

export default function RootLayout({ children }) {
  return <html lang="vi"><body className="min-h-screen bg-[#fbfaf7] text-[#29332f]"><SiteShell>{children}</SiteShell></body></html>;
}
