import SkillsCard from "../skillsCard/SkillsCard";
import { frontEnd, backEnd } from "../../constants";

const Skills = () => {
    return (
        <div className="px-12">
            <h1 className="text-3xl sm:text-4xl font-bold text-center">Skills</h1>
            <h2 className="text-xl sm:text-2xl font-medium mt-3 text-center md:text-start">Front-end</h2>
            <span className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
                {frontEnd?.map((skill) => (
                    <SkillsCard key={skill?.key} skill={skill} />
                ))}
            </span>
            <h2 className="text-xl sm:text-2xl font-medium mt-16 text-center md:text-start">Back-end</h2>
            <span className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
                {backEnd?.map((skill) => (
                    <SkillsCard key={skill?.key} skill={skill} />
                ))}
            </span>
        </div>
    );
};

export default Skills;
