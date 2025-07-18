import HomeImage from "../../../public/Harikrishna.png";
import Node from "../../../public/node.js logo.png";
import React from "../../../public/React logo.png";

import SocialMedia from "../SocialMedia";

const Home = () => {
    return (
        <section className="w-screen px-12 pt-16 md:pt-0 flex flex-col justify-center md:flex-row gap-10 md:gap-16">
            <div className="w-2/3 sm:w-1/3 rounded-full self-center">
                <img className="rounded-full" src={HomeImage} alt="img" />
            </div>
            <div className="flex flex-col gap-2 md:pt-10 md:pl-10 items-center md:items-start">
                <h2 className="text-2xl font-medium">Hi, I'm </h2>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold">Harikrishna N</h1>
                <hr className="w-1/3 h-1 border-0 bg-yellow-700" />
                <h3 className="text-2xl md:text-4xl">Software Engineer</h3>
                <p className=" flex flex-col md:flex-row md:gap-4 md:items-center leading-normal">Working primarily with</p>
                <span className="flex text-1xl gap-4 items-center">
                    <img className="w-24 md:w-33 md:h-9 mb-2 md:mt-0" src={Node} alt="" />
                    and <img className="w-22 md:w-28 " src={React} alt="" />
                </span>
                <div className="md:w-1/2 mt-2 hidden md:flex justify-center md:justify-start gap-5">
                    <SocialMedia />
                </div>
            </div>
        </section>
    );
};

export default Home;
