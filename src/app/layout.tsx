import "~/styles/globals.css";

import { Inter } from "next/font/google";

import { TRPCReactProvider } from "~/trpc/react";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "Trabajos",
  description: "Búsqueda de empleo",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

// A header component to be used in all pages with three links to home, job and profile pages.
export function Header() {
  return (
    <div className="flex items-center justify-between p-4">
      <div className="flex items-center space-x-4">
        <a className="text-xl font-bold" href="/">
          Trabajos
        </a>
      </div>
      <div className="flex items-center space-x-4">
        <a className="text-xl font-bold" href="/trabajo">
          Trabajo
        </a>
        <a className="text-xl font-bold" href="/perfil">
          Perfil
        </a>
      </div>
    </div>
  );
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`min-h-screen bg-background font-sans antialiased ${inter.variable}`}
      >
        <Header />
        <TRPCReactProvider>{children}</TRPCReactProvider>
      </body>
    </html>
  );
}
