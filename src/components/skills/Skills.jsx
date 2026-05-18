import SkillsCard from "../skillsCard/SkillsCard";
import { frontEnd, backEnd } from "../../constants";

const SkillSection = ({ title, iconClass, skills }) => (
    <div className="mt-12 first:mt-8">
        <div className="mb-6 flex items-center justify-center gap-3 md:justify-start">
            <i className={`${iconClass} text-2xl text-[var(--accent)] sm:text-3xl`} aria-hidden />
            <h2 className="text-xl font-semibold tracking-tight text-[var(--text)] sm:text-2xl">{title}</h2>
        </div>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 lg:gap-5">
            {skills?.map((skill) => (
                <SkillsCard key={skill?.key} skill={skill} />
            ))}
        </div>
    </div>
);

const Skills = () => {
    return (
        <section className="px-6 py-8 md:px-10">
            <h1 className="text-center text-3xl font-bold tracking-tight text-[var(--text)] sm:text-4xl">Skills</h1>
            <SkillSection title="Front-end" iconClass="fa-solid fa-display" skills={frontEnd} />
            <SkillSection title="Back-end" iconClass="fa-solid fa-server" skills={backEnd} />
        </section>
    );
};

export default Skills;
