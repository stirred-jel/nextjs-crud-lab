import type { Metadata } from "next";
import Image from "next/image";
import "./globals.css";

export const metadata: Metadata = {
  title: "Next.js CRUD App",
  description: "Customer CRUD application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="flex items-center gap-4">
          <Image
            src="/fruit.jpg"
            alt="Favorite fruit"
            width={100}
            height={100}
          />

          <h1 className="mb-4 text-4xl font-bold tracking-tight">
            Next.js CRUD App
          </h1>
        </div>

        <hr />

        <p>&nbsp;</p>

        {children}

        <p>&nbsp;</p>

        <footer>Created by Jelani Sterling</footer>
      </body>
    </html>
  );
}