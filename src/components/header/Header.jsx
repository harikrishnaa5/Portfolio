import { Link, useLocation } from "react-router-dom";
import { navMenu } from "../../constants";
import { useEffect } from "react";
import ThemeToggle from "../ThemeToggle";

const Header = ({ open, contactSelected, handleContactClick, setContactSelected }) => {
    const location = useLocation();

    useEffect(() => {
        if (!open) {
            setContactSelected(false);
        }
    }, [open, setContactSelected]);

    const navLinkClass = (active) =>
        `inline-flex cursor-pointer items-center border-0 bg-transparent px-3 py-1.5 font-inherit text-sm font-medium leading-none tracking-wide transition-colors duration-300 active:scale-95 ${
            active ? "text-[var(--accent)]" : "text-[var(--text-secondary)] hover:text-[var(--text)]"
        }`;

    return (
        <header className="nav-glass fixed inset-x-0 top-0 z-40 flex min-h-[5.5rem] items-center border-b border-[var(--nav-glass-border)] px-6 pb-4 pt-[calc(1rem+env(safe-area-inset-top,0px))] sm:sticky sm:mb-12 sm:block sm:min-h-0 sm:px-10 sm:py-6 md:px-14">
            <div className="mx-auto flex w-full max-w-6xl items-center justify-center sm:justify-between">
                <Link
                    to="/"
                    className="group flex items-center gap-0.5 text-xl font-semibold leading-none tracking-tight sm:text-2xl"
                >
                    <span className="text-[var(--text)] transition-colors duration-300 group-hover:text-[var(--accent)]">
                        portfolio
                    </span>
                    <span className="text-[var(--accent)]">.</span>
                </Link>

                <div className="hidden items-center gap-3 sm:flex sm:gap-4">
                    <nav className="nav-glass-pill flex items-center gap-0.5 rounded-full border border-[var(--nav-glass-border)] px-1.5 py-1 shadow-[var(--shadow)]">
                        {navMenu?.map((menu) => {
                            const isActive =
                                !open &&
                                (location.pathname === `/${menu.key}` ||
                                    (location.pathname === "/" && menu.key === "home"));
                            return (
                                <li className="flex list-none items-center" key={menu.id}>
                                    <Link to={`/${menu.key}`} className={navLinkClass(isActive)}>
                                        {menu.item}
                                    </Link>
                                </li>
                            );
                        })}
                        <li className="flex list-none items-center">
                            <button
                                type="button"
                                onClick={handleContactClick}
                                className={navLinkClass(contactSelected)}
                            >
                                Contact
                            </button>
                        </li>
                    </nav>
                    <ThemeToggle />
                </div>
            </div>
        </header>
    );
};

export default Header;
