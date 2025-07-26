import { ScrollTrigger, SplitText } from "gsap/all"
import gsap from "gsap"
import Hero from "./components/Hero.jsx"
import Navbar from "./components/Tempnav.jsx"
import Cocktails from './components/Cocktails.jsx'

gsap.registerPlugin(ScrollTrigger, SplitText)

const App = () => {
  return (
    <main>
      <Navbar/>
      <Hero />
      <Cocktails/>
    </main>
  );
}

export default App