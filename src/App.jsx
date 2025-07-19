import "./App.css";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Experience from "./components/workExperience/Experience";
import Contact from "./components/contact/Contact";
import Skills from "./components/skills/Skills";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import BottomNav from "./components/BottomNav";

function App() {
    const [open, setOpen] = useState(false);
    const [contactSelected, setContactSelected] = useState(false);
    const handleContactClick = () => {
        setOpen(true);
        setContactSelected(true);
    };
    return (
        <div className="min-h-screen pt-10 pb-22 sm:pt-0 sm:pb-12">
            <Header
                open={open}
                setOpen={setOpen}
                handleContactClick={handleContactClick}
                contactSelected={contactSelected}
                setContactSelected={setContactSelected}
            />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/experience" element={<Experience />} />
                <Route path="/skills" element={<Skills />} />
            </Routes>
            <Contact open={open} setOpen={setOpen} />
            <BottomNav
                open={open}
                setOpen={setOpen}
                handleContactClick={handleContactClick}
                contactSelected={contactSelected}
                setContactSelected={setContactSelected}
            />
        </div>
    );
}

export default App;
