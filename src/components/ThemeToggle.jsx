import { useTheme } from "../context/ThemeContext";

const ThemeToggle = ({ className = "" }) => {
    const { theme, toggleTheme } = useTheme();
    const isDark = theme === "dark";

    return (
        <button
            type="button"
            onClick={toggleTheme}
            aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
            className={`group flex h-9 w-9 cursor-pointer items-center justify-center rounded-full border border-[var(--border)] bg-[var(--surface)] text-[var(--muted)] transition-all duration-300 hover:border-[var(--accent)] hover:text-[var(--accent)] active:scale-95 ${className}`}
        >
            <i
                className={`fa-solid text-sm transition-transform duration-500 group-hover:rotate-12 ${
                    isDark ? "fa-sun" : "fa-moon"
                }`}
            />
        </button>
    );
};

export default ThemeToggle;
