import SkillsCard from "../skillsCard/SkillsCard";
import { frontEnd, backEnd } from "../../constants";
import FrontendLogo from "../../assets/frontend-logo.png";
import BackendLogo from "../../assets/server-logo.png";

const Skills = () => {
    return (
        <div className="px-12">
            <h1 className="text-3xl sm:text-4xl font-bold text-center text-shadow-lg">Skills</h1>
            <span className="flex justify-center md:justify-start gap-2 mt-3 items-center">
                <h2 className="text-xl sm:text-2xl mt-1.5 font-medium text-center md:ml-6 md:text-start text-shadow-md">
                    Front-end
                </h2>
                <img className="w-9 h-8" src={FrontendLogo} alt="front-end" />
            </span>

            <span className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
                {frontEnd?.map((skill) => (
                    <SkillsCard key={skill?.key} skill={skill} />
                ))}
            </span>
            <span className="flex justify-center md:justify-start gap-2 mt-16 items-center">
                <h2 className="text-xl sm:text-2xl font-medium text-center md:ml-6 md:text-start text-shadow-md mt-1.5">
                    Back-end
                </h2>
                <img className="w-9 h-8" src={BackendLogo} alt="back-end" />
            </span>
            <span className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
                {backEnd?.map((skill) => (
                    <SkillsCard key={skill?.key} skill={skill} />
                ))}
            </span>
        </div>
    );
};

export default Skills;
