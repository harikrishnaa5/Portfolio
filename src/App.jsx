import "./App.css";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Experience from "./components/workExperience/Experience";
import Contact from "./components/contact/Contact";
import Skills from "./components/skills/Skills";
import { Routes, Route, useLocation } from "react-router-dom";
import { useState } from "react";
import BottomNav from "./components/BottomNav";

function App() {
    const [open, setOpen] = useState(false);
    const [contactSelected, setContactSelected] = useState(false);
    const location = useLocation();

    const handleContactClick = () => {
        setOpen(true);
        setContactSelected(true);
    };

    return (
        <div className="app min-h-screen pb-24 sm:pb-12">
            <Header
                open={open}
                setOpen={setOpen}
                handleContactClick={handleContactClick}
                contactSelected={contactSelected}
                setContactSelected={setContactSelected}
            />
            <main
                key={location.pathname}
                className="page-enter mx-auto max-w-6xl pt-[calc(5.5rem+env(safe-area-inset-top,0px))] sm:pt-0"
            >
                <Routes location={location}>
                    <Route path="/" element={<Home />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/experience" element={<Experience />} />
                    <Route path="/skills" element={<Skills />} />
                </Routes>
            </main>
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
