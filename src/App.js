import About from "./components/About.jsx";
import Home from "./components/Home.jsx";
import "./App.css";
import Project from "./components/Project.jsx";
import Navbar from "./components/Navbar.jsx";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Project />
    </div>
  );
}

export default App;
