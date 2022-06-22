import About from "./components/About.jsx";
import Home from "./components/Home.jsx";
import "./App.css";
import Project from "./components/Project.jsx";
import Navbar from "./components/Navbar.jsx";

function App() {
  return (
    <div className="">
      {/* <Navbar />
      <Home />
      <About />
      <Project /> */}
      <Navbar />
      <section id="home">
        <Home />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="project">
        <Project />
      </section>
    </div>
  );
}

export default App;
