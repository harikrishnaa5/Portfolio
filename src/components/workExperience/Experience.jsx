import { Link } from "react-router-dom";
import { workExperience } from "../../constants";
import ExperienceCard from "./ExperienceCard";

const Experience = () => {
    return (
        <div className="px-12">
            <h1 className="text-3xl sm:text-4xl font-bold text-center mb-12">Work Experience</h1>
            {workExperience?.map((data) => {
                return (
                    <div key={data?.id} className="flex gap-10 sm:gap-16 justify-center mb-6">
                        <div className="relative flex justify-center">
                            <div className="h-auto min-h-[1em] w-px self-stretch bg-gray-300"></div>
                            <div className="p-0.5 absolute top-4 w-9 h-9 md:w-13 md:h-13 bg-white rounded-full border-2 border-gray-300 flex items-center justify-center cursor-pointer">
                                <Link to={data.website} {...(data.website && { target: "_blank" })}>
                                    <img src={data.logo} alt="logo" className="rounded-full object-contain" />
                                </Link>
                            </div>
                        </div>
                        <ExperienceCard data={data} />
                    </div>
                );
            })}
        </div>
    );
};

export default Experience;
