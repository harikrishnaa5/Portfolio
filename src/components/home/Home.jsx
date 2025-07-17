import HomeImage from "../../../public/Harikrishna.png";
import Node from "../../../public/node.js logo.png";
import React from "../../../public/React logo.png";
import Twitter from "../../../public/twitter-icon.png";
import LinkedIn from "../../../public/linkedin-icon.png";
import GitHub from "../../../public/github-icon.png";
import { Link } from "react-router-dom";
import { github, linkedin, twitter } from "../../constants";

const Home = () => {
    return (
        <section className="w-screen px-12 flex gap-16 mt-14">
            <div className="w-1/3 rounded-full">
                <img className="rounded-full" src={HomeImage} alt="img" />
            </div>
            <div className="flex flex-col gap-2 pt-10 pl-10">
                <h2 className="text-2xl font-medium">Hi, I'm </h2>
                <h1 className="text-6xl font-bold">Harikrishna N</h1>
                <hr className="w-1/3 h-1 border-0 bg-yellow-700" />
                <h3 className="text-4xl">Software Engineer</h3>
                <h3 className="text-1xl flex gap-4 items-center">
                    Working primarily with <img className="w-33 h-9 mb-3" src={Node} alt="" /> and{" "}
                    <img className="w-28 " src={React} alt="" />
                </h3>
                <div className="w-1/2 mt-2 flex justify-start gap-5">
                    <Link to={linkedin} target="_blank">
                        <img className="w-7 h-7 cursor-pointer" src={LinkedIn} alt="linkedin" />
                    </Link>
                    <Link to={github} target="_blank">
                        <img className="w-7 h-7 cursor-pointer" src={GitHub} alt="github" />
                    </Link>
                    <Link to={twitter} target="_blank">
                        <img className="w-7 h-7 cursor-pointer" src={Twitter} alt="twitter" />
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Home;
