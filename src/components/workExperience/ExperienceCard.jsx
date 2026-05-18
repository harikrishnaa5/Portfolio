const ExperienceCard = ({ data }) => {
    return (
        <article className="flex-1 rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5 shadow-[var(--shadow)] transition-all duration-300 hover:border-[var(--accent)]/30 hover:shadow-[var(--shadow-lg)] sm:p-6">
            <h3 className="text-base font-semibold text-[var(--text)] md:text-lg">{data.role}</h3>
            <p className="mt-0.5 text-sm font-medium text-[var(--accent)] md:text-base">{data.companyName}</p>
            <p className="mt-2 text-xs text-[var(--muted)] md:text-sm">{data.duration}</p>
            <p className="text-xs italic text-[var(--text-secondary)] md:text-sm">{data.location}</p>
            {data.description && (
                <p className="mt-3 text-sm leading-relaxed text-[var(--text-secondary)]">{data.description}</p>
            )}
            {data.techStack && (
                <p className="mt-3 rounded-lg bg-[var(--accent-muted)] px-3 py-2 text-xs leading-relaxed text-[var(--text-secondary)] md:text-sm">
                    <span className="font-medium text-[var(--text)]">Stack:</span> {data.techStack}
                </p>
            )}
        </article>
    );
};

export default ExperienceCard;
