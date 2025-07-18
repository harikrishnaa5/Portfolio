const SkillsCard = ({ skill }) => {
    return (
        <div className="border border-amber-950 p-16 flex justify-center items-center w-full h-64 cursor-pointer transform transition-transform duration-300 ease-in-out hover:scale-110">
            <img className="max-w-full max-h-full object-contain" src={skill?.img} alt={skill?.name} />
        </div>
    );
};

export default SkillsCard;
