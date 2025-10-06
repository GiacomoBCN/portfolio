import type { Metadata } from "next";
import "./globals.css";
import SiteShell from "@/app/SiteShell";

export const metadata: Metadata = {
  title: "Giacomo Bianchi — Portfolio",
  description: "Product & Design Leader portfolio",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
