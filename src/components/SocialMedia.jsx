import { github, linkedin, twitter } from "../constants";

const links = [
    { href: linkedin, icon: "fa-brands fa-linkedin", label: "LinkedIn", color: "#0A66C2" },
    { href: github, icon: "fa-brands fa-github", label: "GitHub", color: "var(--text)" },
    { href: twitter, icon: "fa-brands fa-x-twitter", label: "Twitter", color: "var(--text)" },
];

const SocialMedia = () => {
    return (
        <div className="flex items-center gap-3 sm:gap-4">
            {links.map(({ href, icon, label, color }) => (
                <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--surface)] text-xl transition-all duration-300 hover:border-[var(--accent)] hover:bg-[var(--accent-muted)] active:scale-95 sm:h-12 sm:w-12 sm:text-2xl"
                >
                    <i className={icon} style={{ color }} aria-hidden />
                </a>
            ))}
        </div>
    );
};

export default SocialMedia;
