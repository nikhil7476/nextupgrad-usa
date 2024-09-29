import "@/styles/globals.css";
import Header from "@/components/Header";
import MobileHead from "@/components/MobileHeader";
import Footer from "@/components/Footer";
import "@fortawesome/fontawesome-free/css/all.min.css";
import CookieConsent from "react-cookie-consent"; // Add this line to import the cookie consent component

export default function App({ Component, pageProps }) {
  return (
    <>
      <Header className="navHdr" />
      <MobileHead className="mobHdr" />
      
      {/* Add Cookie Consent Banner */}
      <CookieConsent
        location="bottom"
        buttonText="I accept"
        cookieName="userConsent"
        style={{ background: "#2B373B", color: "#fff" }}
        buttonStyle={{ color: "#E87354", fontSize: "16px" }}
        expires={150} // Cookie expiration in days
      >
        This website uses cookies to enhance the user experience.{" "}
        <a href="/cookie-policy" style={{ color: "#fff", textDecoration: "underline" }}>
          Learn more
        </a>
      </CookieConsent>

      <main>
        <Component {...pageProps} />
      </main>
      <Footer />
    </>
  );
}
