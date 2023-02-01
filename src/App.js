import About from "./components/About";
import Contact from "./components/Contact";
import Education from "./components/Education";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";


function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <Projects />
      <About />
      <Education />
      <Skills />
      <Contact />

    </div>
  );
}

export default App;
