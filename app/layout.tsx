import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "KUMFU Shop — Templates, Wallpapers & Digital Designs",
    template: "%s | KUMFU Shop",
  },
  description:
    "Explore KUMFU Shop wallpaper collections for desktop, tablet and mobile.",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/brand/favicon.png",
    apple: "/favicon.ico",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
