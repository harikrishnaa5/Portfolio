import { Link } from "react-router-dom";
import { workExperience } from "../../constants";
import ExperienceCard from "./ExperienceCard";
import BrandLogo from "../ui/BrandLogo";

const Experience = () => {
    return (
        <section className="px-6 py-8 md:px-10">
            <h1 className="mb-12 text-center text-3xl font-bold tracking-tight text-[var(--text)] sm:text-4xl">
                Work Experience
            </h1>
            <div className="mx-auto max-w-3xl">
                {workExperience?.map((data, index) => (
                    <div key={data?.id} className="relative flex gap-6 pb-10 last:pb-0 sm:gap-10">
                        {index < workExperience.length - 1 && (
                            <div className="absolute left-[22px] top-14 h-[calc(100%-2.5rem)] w-px bg-[var(--border)] sm:left-[27px] md:left-[31px]" />
                        )}
                        <div className="relative z-10 shrink-0 pt-1">
                            <div className="flex h-11 w-11 items-center justify-center overflow-hidden rounded-full border-2 border-[var(--border)] bg-[var(--surface)] shadow-[var(--shadow)] transition-transform duration-300 hover:scale-105 sm:h-14 sm:w-14 md:h-16 md:w-16">
                                <Link
                                    to={data.website || "#"}
                                    {...(data.website && { target: "_blank", rel: "noopener noreferrer" })}
                                    className="flex h-full w-full items-center justify-center"
                                >
                                    <BrandLogo
                                        src={data.logo}
                                        alt={data.companyName}
                                        size="sm"
                                        variant={data.logoVariant ?? "color"}
                                        className="!h-full !w-full !max-h-[2.25rem] !max-w-[2.25rem] sm:!max-h-[2.75rem] sm:!max-w-[2.75rem] md:!max-h-[3.25rem] md:!max-w-[3.25rem]"
                                    />
                                </Link>
                            </div>
                        </div>
                        <ExperienceCard data={data} />
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Experience;
