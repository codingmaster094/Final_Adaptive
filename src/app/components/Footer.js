import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer
      className="footer lg:py[100px] md:py-[80px] py-[50px] bg-white-100"
    >
      <div className="container">
        <div className="inner flex justify-start items-start gap-8 xlg:gap-[48px] xl:gap-[64px]  flex-wrap *:xl:w-[calc(25%-126px)] *:xlg:w-[calc(25%-93px)] *:md:w-[calc(33%-20px)] *:w-full" >
          <div className="foot-col">
            <div className="footlogo">
              <Link href="" role="link">
                <Image
                  src="/img/Logo.svg"
                  width={159}
                  height={44}
                  alt="company logo"
                />
              </Link>
            </div>
          </div>

          <div className="foot-col space-y-4">
            <div className="title text-smtitle *:text-black font-bold font-overpass">
              <p>Services for</p>
            </div>
            <div className="foot-menu">
              <ul className="list-none p-0 space-y-4 font-inter text-black-100 font-normal">
                <li>
                  <a href="#" role="link">
                    Advisors & Wealth Managers
                  </a>
                </li>
                <li>
                  <a href="#" role="link">
                    Retail Investors
                  </a>
                </li>
                <li>
                  <a href="#" role="link">
                    Enterprises
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="foot-col space-y-4">
            <div className="title text-smtitle *:text-black font-bold font-overpass">
              <p>Company</p>
            </div>
            <div className="foot-menu">
              <ul className="list-none p-0 space-y-4 font-inter text-black-100 font-normal">
                <li>
                  <a href="#" role="link">
                    About Adaptive
                  </a>
                </li>
                <li>
                  <a href="#" role="link">
                    Resources
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="foot-col space-y-4">
            <div className="title text-smtitle *:text-black font-bold font-overpass">
              <p>Products</p>
            </div>
            <div className="foot-menu">
              <ul className="list-none p-0 space-y-4 font-inter text-black-100 font-normal">
                <li>
                  <a href="#" role="link">
                    Adaptive Shield
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="foot-col space-y-4 lg:w-[calc(25%-126px)] md:w-[calc(25%-100px)]">
            <div className="title text-smtitle *:text-black font-bold font-overpass">
              <p>Tools</p>
            </div>
            <div className="foot-menu">
              <ul className="list-none p-0 space-y-4 font-inter text-black-100 font-normal">
                <li>
                  <Link href="/PortfolioProtectionCalculator" role="link">
                    Protection Calculator
                  </Link>
                </li>
                <li>
                  <Link href="/" role="link">
                    Risk Contribution
                  </Link>
                </li>
                <li>
                  <Link href="/" role="link">
                    Forward Test
                  </Link>
                </li>
                <li>
                  <Link href="/" role="link">
                    Risk Weather
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
