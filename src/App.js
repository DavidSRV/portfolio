import { Route, Routes } from "react-router-dom";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import MainPage from "./pages/main/MainPage";
import Projects from "./pages/projects/Projects";
import Skills from "./pages/skills/Skills";
import "./style/style.scss";

function App() {
  return (
    <div className="App">
      <MainPage />
      <Routes>
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Projects" element={<Projects />} />
        <Route path="/Skills" element={<Skills />} />
      </Routes>
    </div>
  );
}

export default App;
