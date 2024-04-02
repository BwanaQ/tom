import Navbar from "./components/NavBar/navbar";
import Hero from "./components/Hero/hero"
import Skills from "./components/Skills/skills"
import Works from "./components/Works/works"
import Contact from "./components/Contact/contact"
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      <Skills />
      <Works />
      <Contact />
    </div>
  );
}

export default App;
