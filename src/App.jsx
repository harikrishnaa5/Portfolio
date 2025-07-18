import "./App.css";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Experience from "./components/workExperience/Experience";
import Contact from "./components/contact/Contact";
import Skills from "./components/skills/Skills";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";

function App() {
    const [open, setOpen] = useState(false);
    return (
        <div className="min-h-screen pb-12">
            <Header open={open} setOpen={setOpen} />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/experience" element={<Experience />} />
                <Route path="/skills" element={<Skills />} />
            </Routes>
            <Contact open={open} setOpen={setOpen} />
        </div>
    );
}

export default App;
