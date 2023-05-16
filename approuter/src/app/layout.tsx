import Header from "@/components/header";
import "./globals.css";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export const metadata = {
  title: "App route page example",
  description: "Just a example of new update",
  keywords:
    "next 13 new update, next.js, next 13 update, update app route, app route",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Header />
        <main className="mx-auto max-w-6xl">{children}</main>
      </body>
    </html>
  );
}
