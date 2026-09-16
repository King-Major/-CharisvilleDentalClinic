import Nav from "./components/Nav.jsx";
import Hero from "./components/Hero.jsx";
import Philosophy from "./components/Philosophy.jsx";
import Sanctum from "./components/Sanctum.jsx";
import About from "./components/About.jsx";
import Services from "./components/Services.jsx";
import FAQs from "./components/FAQs.jsx";
import Access from "./components/Access.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  return (
    <div className="relative bg-cream text-navy min-h-screen">
      <Nav />
      <main>
        <Hero />
        <Philosophy />
        <About />
        <Services />
        <Sanctum />
        <FAQs />
        <Access />
      </main>
      <Footer />
    </div>
  );
}
