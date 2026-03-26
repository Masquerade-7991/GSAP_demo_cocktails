import { ScrollTrigger, SplitText } from "gsap/all"
import gsap from "gsap"
import Hero from "./components/Hero.jsx"
import Navbar from "./components/Tempnav.jsx"
import Cocktails from './components/Cocktails.jsx'
import About from "./components/About.jsx"
import Art from "./components/Art.jsx"
import Menu from "./components/Menu.jsx"
import Contact from "./components/Contacts.jsx"

import { useEffect } from "react";
import { track } from "./analytics.js"; 

gsap.registerPlugin(ScrollTrigger, SplitText)

const App = () => {
  useEffect(() => {
    track("page_view", {
      url: window.location.href,
      title: document.title,
    });
  }, []); 

  return (
    <main>
      <Navbar />
      <Hero />
      <Cocktails />
      <About />
      <Art />
      <Menu />
      <Contact />
    </main>
  );
}

export default App