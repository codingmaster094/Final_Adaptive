import "../../public/fonts/inter.css";
import "../../public/fonts/Ivyfont.css";
import "../../public/fonts/overpassfont.css";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { TransitionProvider } from "../../utile/transition-provider";

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
