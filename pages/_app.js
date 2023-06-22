import '../styles/globals.css';
import { Navbar, Footer } from '../components/';
function MyApp({ Component, pageProps }) {
  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Antic+Didone&family=Noto+Sans:ital,wght@1,200&family=Playfair+Display&display=swap"
        rel="stylesheet"
      />
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
