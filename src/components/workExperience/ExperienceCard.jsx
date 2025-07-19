const ExperienceCard = ({ data }) => {
    return (
        <div className="w-3/4 lg:w-3/5 text-gray-500 shadow-lg p-6 flex flex-col justify-start">
            <h3 className="text-black text-base md:text-lg font-medium">{data.role}</h3>
            <h3 className="text-gray-800 text-sm md:text-base">{data.companyName}</h3>
            <h4 className="text-xs md:text-sm">{data.duration}</h4>
            <h4 className="italic text-xs md:text-sm">{data.location}</h4>
            <section className="p-2">
                <p className="text-xs md:text-sm">{data.description}</p>
                <h3 className="text-xs md:text-sm italic text-gray-800 mt-2">Technologies : {data.techStack}</h3>
            </section>
        </div>
    );
};

export default ExperienceCard;
