import "@/styles/globals.css";
import Header from "@/components/Header";
import MobileHead from "@/components/MobileHeader";
import Footer from "@/components/Footer";
import "@fortawesome/fontawesome-free/css/all.min.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Header className="navHdr" />
      <MobileHead className="mobHdr" />
      <main>
        <Component {...pageProps} />
      </main>
      <Footer />
    </>
  );
}
