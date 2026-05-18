import BrandLogo from "../ui/BrandLogo";

const SkillsCard = ({ skill }) => {
    const hasFaIcon = Boolean(skill?.faIcon);

    return (
        <div className="group flex h-36 cursor-default flex-col items-center justify-center gap-3 rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5 shadow-[var(--shadow)] transition-all duration-300 hover:-translate-y-1 hover:border-[var(--accent)]/40 hover:shadow-[var(--shadow-lg)] sm:h-44 md:h-48">
            {hasFaIcon ? (
                <i
                    className={`${skill.faIcon} text-4xl transition-transform duration-300 group-hover:scale-110 sm:text-5xl md:text-6xl`}
                    style={{ color: skill.brandColor }}
                    aria-hidden
                />
            ) : (
                <BrandLogo
                    src={skill?.img}
                    alt={skill?.name}
                    size="lg"
                    variant={skill?.variant ?? "default"}
                    className="transition-transform duration-300 group-hover:scale-110"
                />
            )}
            <span className="text-center text-xs font-medium text-[var(--text-secondary)] transition-colors group-hover:text-[var(--accent)] sm:text-sm">
                {skill?.name}
            </span>
        </div>
    );
};

export default SkillsCard;
