/* eslint-disable no-unused-vars */
import {
  About,
  AcceptedCarrencies,
  Bulletproofing,
  Downoald,
  Features,
  Footer,
  Header,
  Hero,
  Marque,
  Partners,
  Questions,
  Support,
  SupportedChains,
  Testimonials,
} from "./components/layout";
import Card from "./components/layout/Card";
import { cards } from "./constant";

const App = () => {
  return (
    <main>
      <Header />
      <section
        className="home min-h-screen -z-[1] relative"
        id="home">
        <Hero />
        <Marque />
      </section>
      <section
        id="features"
        className="section">
        <Features />
      </section>
      <section className="section">
        <SupportedChains />
      </section>
      <section
        id="about"
        className="section">
        <About />
      </section>
      <section
        id="coins"
        className="section">
        <AcceptedCarrencies />
      </section>
      <section
        id="security"
        className="section">
        <Bulletproofing />
      </section>
      <div className="section">
        <Partners />
      </div>
      <div className="section">
        <Testimonials />
      </div>
      <div className="section">
        <Questions />
      </div>
      <div
        className="section"
        id="downoald">
        <Downoald />
        <Marque />
      </div>
      <div
        className="section"
        id="support">
        <Support />
      </div>
      <div className="section pb-12">
        <Footer />
      </div>
    </main>
  );
};

export default App;
