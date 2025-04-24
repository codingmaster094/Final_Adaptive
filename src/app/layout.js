import { Geist, Geist_Mono } from "next/font/google";
import "../../public/fonts/inter.css";
import "../../public/fonts/Ivyfont.css";
import "../../public/fonts/overpassfont.css";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { TransitionProvider } from "../../utile/transition-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Adaptive",
  description: "Adaptive",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <TransitionProvider>
          <main>{children}</main>
        </TransitionProvider>
        <Footer />
      </body>
    </html>
  );
}
