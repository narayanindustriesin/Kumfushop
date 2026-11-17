import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: { default: "KUMFU Shop — Wallpapers", template: "%s | KUMFU Shop" },
  description: "Explore curated KUMFU Shop wallpaper previews for mobile, desktop, tablet and ultrawide displays.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
