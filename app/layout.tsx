import type { Metadata } from "next";

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
      <body>{children}</body>
    </html>
  );
}
