// import "@/styles/globals.css";
// import MobileHead from "@/components/MobileHeader";
// import Footer from "@/components/Footer";
// import MegaMenu from "@/components/MegaMenu";
// import "@fortawesome/fontawesome-free/css/all.min.css";
// import CookieConsent from "react-cookie-consent"; // Add this line to import the cookie consent component
// import "bootstrap/dist/css/bootstrap.min.css";
// import 'animate.css';
// import { FaArrowRightLong } from "react-icons/fa6";
// import Link from "next/link";
// export default function App({ Component, pageProps }) {
//   return (
//     <>
//       <MobileHead className="mobHdr" />
//       <MegaMenu />
//       <CookieConsent
//         location="bottom"
//         buttonText="I accept"
//         cookieName="userConsent"
//         style={{ background: "#2B373B", color: "#fff" }}
//         buttonStyle={{ color: "#E87354", fontSize: "16px" }}
//         expires={150}
//       >
//         This website uses cookies to enhance the user experience.{" "}
//         <a
//           href="/cookie-policy"
//           style={{ color: "#fff", textDecoration: "underline" }}
//         >
//           Learn more
//         </a>
//       </CookieConsent>

//       <main>
//         <Component {...pageProps} />
//       </main>
//       <div className="ctaButton">
//         <Link href="https://calendly.com/ron-wilsonbdm/service" target="_blank" title="Let's Discuss">
//           {"Let's Discuss"} <FaArrowRightLong />
//         </Link>
//       </div>
//       <Footer />
//     </>
//   );
// }

import "@/styles/globals.css";
import MobileHead from "@/components/MobileHeader";
import Footer from "@/components/Footer";
import MegaMenu from "@/components/MegaMenu";
import "@fortawesome/fontawesome-free/css/all.min.css";
import CookieConsent from "react-cookie-consent";
import "bootstrap/dist/css/bootstrap.min.css";
import "animate.css";
import { FaArrowRightLong } from "react-icons/fa6";
import Link from "next/link";
import { useRouter } from "next/router"; // Import useRouter
import { useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";

export default function App({ Component, pageProps }) {
  const router = useRouter(); // Get router instance
  const isLandingPage = router.pathname === "/landing-page"; // Check if current page is the landing page
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <MobileHead className="mobHdr" />
      {!isLandingPage && <MegaMenu />}{" "}
      {/* Show MegaMenu only if not on the landing page */}
      <CookieConsent
        location="bottom"
        buttonText="I accept"
        cookieName="userConsent"
        style={{ background: "#2B373B", color: "#fff" }}
        buttonStyle={{ color: "#E87354", fontSize: "16px" }}
        expires={150}
      >
        This website uses cookies to enhance the user experience.{" "}
        <a
          href="/cookie-policy"
          style={{ color: "#fff", textDecoration: "underline" }}
        >
          Learn more
        </a>
      </CookieConsent>
      <main>
        <Component {...pageProps} />
      </main>
      <div className="ctaButton">
        <Link
          href="https://calendly.com/ron-wilsonbdm/service"
          target="_blank"
          title="Let's Discuss"
        >
          {"Let's Discuss"} <FaArrowRightLong />
        </Link>
      </div>
      {!isLandingPage && <Footer />}{" "}
      {/* Show Footer only if not on the landing page */}
    </>
  );
}
