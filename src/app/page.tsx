import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import WhySpain from "../components/WhySpain";
import Products from "../components/Products";
import WhyTopicals from "../components/WhyTopicals";
import Trust from "../components/Trust";
import Compliance from "../components/Compliance";
import Faq from "../components/Faq";
import Waitlist from "../components/Waitlist";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <WhySpain />
        <Products />
        <WhyTopicals />
        <Trust />
        <Compliance />
        <Faq />
        <Waitlist />
      </main>
      <Footer />
    </>
  );
}
