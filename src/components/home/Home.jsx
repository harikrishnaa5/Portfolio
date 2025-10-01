import { useState } from "react";
import HomeImage from "../../assets/Profile-pic.jpg";
import Node from "../../assets/node.js-logo.png";
import React from "../../assets/react-logo.png";

import SocialMedia from "../SocialMedia";

const Home = () => {
    const [toast, setToast] = useState(false)
    const handleDownload = () => {
        const link = document.createElement("a");
        link.href = "/Harikrishna_N_Resume.pdf";
        link.download = "Harikrishna_N_Resume.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        setToast(true)
        setTimeout(() => {
            setToast(false)
        }, 4000);

    };
    return (
        <section className="w-screen px-12 pt-6 md:pt-0 flex flex-col justify-center md:flex-row gap-10 md:gap-16">
            <div className="w-2/3 sm:w-1/3 rounded-full shadow-2xl self-center">
                <img className="rounded-full" src={HomeImage} alt="img" />
            </div>
            <div className="flex flex-col gap-2 md:pt-10 md:pl-10 items-center md:items-start">
                <h2 className="text-2xl text-shadow-md font-medium">Hi, I'm </h2>
                <h1 className="text-4xl text-shadow-lg sm:text-5xl lg:text-6xl font-bold">Harikrishna N</h1>
                <h3 className="text-2xl text-shadow-md md:text-4xl">Software Engineer</h3>
                <p className=" flex flex-col md:flex-row md:gap-4 md:items-center leading-normal">Working primarily with</p>
                <span className="flex text-1xl gap-4 items-center">
                    <img className="w-24 md:w-33 md:h-9 mb-2 md:mt-0" src={Node} alt="" />
                    and <img className="w-22 md:w-28 " src={React} alt="" />
                </span>
                <div className="md:w-1/2 mt-2 hidden md:flex justify-center md:justify-start gap-5">
                    <SocialMedia />
                </div>
                <span className="flex gap-4 py-6 items-center">
                    Here is my resume
                    <button
                        onClick={handleDownload}
                        className="flex gap-2 cursor-pointer hover:bg-amber-400 transition-colors duration-200 bg-amber-300 border-0 rounded-xl py-2 px-3 active:scale-97"
                    >
                        Download <i className="fa-solid fa-download pt-0.5"></i>
                    </button>
                </span>
            </div>
        </section>
    );
};

export default Home;
