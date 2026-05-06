import "./globals.css";
import { ReactNode } from "react";
import ClientWrapper from "@/components/ClientWrapper";

export const metadata = {
  title: "HBD OM MARHABANG",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="id">
      <body className="bg-black text-white antialiased overflow-x-hidden selection:bg-purple-500/30">
        <ClientWrapper>
          {children}
        </ClientWrapper>
      </body>
    </html>
  );
}