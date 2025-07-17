import "./App.css";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Experience from "./components/workExperience/Experience";
import Contact from "./components/contact/Contact";
import Skills from "./components/skills/Skills";
import { Routes, Route } from "react-router-dom";

function App() {
    return (
        <div className="min-h-screen">
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/experience" element={<Experience />} />
                <Route path="/skills" element={<Skills />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </div>
    );
}

export default App;
