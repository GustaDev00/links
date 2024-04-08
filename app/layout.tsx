import type { Metadata } from "next";
import { GoogleTagManager } from "@next/third-parties/google";

import "@/styles/reset.css";

export const metadata: Metadata = {
  title: "Links Gusta.pt | Gustavo Pontes",
  description:
    "My personal links page, built with Next.js and TypeScript. Front-End Developer passionate about making the web more beautiful and accessible.....",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <GoogleTagManager gtmId="GTM-PN2BNKV6" />
      <body>{children}</body>
    </html>
  );
}
