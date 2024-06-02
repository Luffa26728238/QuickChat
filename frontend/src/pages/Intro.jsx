import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import Features from "../components/Features"
import Contact from "../components/Contact"

function Intro() {
  return (
    <div className="bg-black">
      <Navbar />
      <Hero />
      <Features />
      <Contact />
    </div>
  )
}

export default Intro
