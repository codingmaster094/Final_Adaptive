'use client'
import "../../public/fonts/inter.css";
import "../../public/fonts/Ivyfont.css";
import "../../public/fonts/overpassfont.css";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { TransitionProvider } from "../../utile/transition-provider";
import { usePathname } from "next/navigation";

// export const metadata = {
//   title: "Adaptive",
//   description: "Adaptive",
// };

export default function RootLayout({ children }) {
  const pathname = usePathname();
  const hideRoutes = ["/client-portfolios-unlock-hidden-income"]; 

  const shouldHide = hideRoutes.includes(pathname);

  return (
    <html lang="en">
      <body>
        {!shouldHide && <Header />}
        <TransitionProvider>
          <main>{children}</main>
        </TransitionProvider>
        {!shouldHide && <Footer />}
      </body>
    </html>
  );
}
