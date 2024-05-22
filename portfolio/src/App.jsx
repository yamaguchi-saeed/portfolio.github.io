import "./app.scss"
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/navbar";
//import Navbar from "./components/navbar/Navbar";
import Parallax from "./components/parallax/Parallax";

const App = () => {
  return <div>
    <section id="Homepage">
      <Navbar />
      <Hero />
    </section>
    <section id="Services"><Parallax type="services" /></section>
    <section><a href="#">Services</a></section>
    <section id="Portfolio"><Parallax type="portfolio" /></section>
    <section><a href="#">Portfolio1</a></section>
    <section><a href="#">Portfolio2</a></section>
    <section><a href="#">Portfolio3</a></section>
    <section id="Contact"><a href="#">Contact</a></section>

  </div>;
}
export default App;