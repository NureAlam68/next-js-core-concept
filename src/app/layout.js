import { Geist, Geist_Mono, Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const poppins = Poppins({
  weight: ["400", "600", "700"],
  subsets: ["latin"]
})

export const metadata = {
  title: {
    default: 'NextJs core concepts',
    template: '%s | NextJs core concepts'
  },
  keywords: ['Next.js', 'React', 'JavaScript', 'Learning', 'Playground'],
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className} antialiased`}
      >
        <Navbar></Navbar>
        <main className="min-h-screen">
        {children}
        </main>
        <footer className="bg-green-500 p-6 mt-10">
          Awesome NextJs project
        </footer>
      </body>
    </html>
  );
}
 