import "@/styles/globals.css";
import Header from "@/components/Header";
import MobileHead from "@/components/MobileHeader";
import Footer from "@/components/Footer";
import Head from "next/head";
import "@fortawesome/fontawesome-free/css/all.min.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
          integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN"
          crossorigin="anonymous"
        />
        <link rel="icon" href="/logo.webp" />
      </Head>
      <Header className="navHdr" />
      <MobileHead className="mobHdr" />
      <main>
        <Component {...pageProps} />
      </main>
      <Footer />
    </>
  );
}
