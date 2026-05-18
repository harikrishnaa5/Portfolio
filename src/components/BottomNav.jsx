import { Link, useLocation } from "react-router-dom";
import { navMenu } from "../constants";
import { useEffect } from "react";
import ThemeToggle from "./ThemeToggle";

const BottomNav = ({ open, contactSelected, setContactSelected, handleContactClick }) => {
    const location = useLocation();

    useEffect(() => {
        if (!open) {
            setContactSelected(false);
        }
    }, [open, setContactSelected]);

    const iconClass = (active) =>
        `flex h-10 w-10 items-center justify-center rounded-full transition-all duration-300 ${
            active
                ? "bg-[var(--accent)] text-white shadow-[var(--shadow)]"
                : "text-[var(--muted)] hover:bg-[var(--accent-muted)] hover:text-[var(--accent)]"
        }`;

    return (
        <nav className="nav-glass fixed bottom-0 left-0 z-50 w-full border-t border-[var(--nav-glass-border)] px-6 py-2 sm:hidden">
            <div className="mx-auto flex h-14 max-w-lg items-center justify-around">
                {navMenu?.map((menu) => {
                    const isActive =
                        !open &&
                        (location.pathname === `/${menu.key}` ||
                            (location.pathname === "/" && menu.key === "home"));
                    return (
                        <Link key={menu.id} to={`/${menu.key}`} className="flex justify-center">
                            <div className={iconClass(isActive)}>
                                <i className={menu.icon} />
                            </div>
                        </Link>
                    );
                })}
                <button type="button" onClick={handleContactClick} className={iconClass(contactSelected)}>
                    <i className="fa-solid fa-address-card" />
                </button>
                <ThemeToggle className="!h-10 !w-10" />
            </div>
        </nav>
    );
};

export default BottomNav;
