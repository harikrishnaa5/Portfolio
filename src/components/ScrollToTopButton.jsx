import { useCallback, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const SCROLL_THRESHOLD = 200;

const ScrollToTopButton = () => {
    const { pathname } = useLocation();
    const [visible, setVisible] = useState(false);

    const updateVisibility = useCallback(() => {
        const canScroll = document.documentElement.scrollHeight > window.innerHeight + 48;
        const hasScrolled = window.scrollY > SCROLL_THRESHOLD;
        setVisible(canScroll && hasScrolled);
    }, []);

    useEffect(() => {
        updateVisibility();
        const timer = setTimeout(updateVisibility, 100);

        window.addEventListener("scroll", updateVisibility, { passive: true });
        window.addEventListener("resize", updateVisibility, { passive: true });

        return () => {
            clearTimeout(timer);
            window.removeEventListener("scroll", updateVisibility);
            window.removeEventListener("resize", updateVisibility);
        };
    }, [pathname, updateVisibility]);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <button
            type="button"
            onClick={scrollToTop}
            aria-label="Scroll to top"
            className={`fixed right-5 z-40 flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border border-[var(--border)] bg-[var(--surface)] text-[var(--accent)] shadow-[var(--shadow-lg)] transition-all duration-300 hover:border-[var(--accent)] hover:bg-[var(--accent-muted)] active:scale-95 sm:right-8 sm:h-12 sm:w-12 ${
                visible
                    ? "bottom-20 translate-y-0 opacity-100 sm:bottom-8"
                    : "pointer-events-none bottom-20 translate-y-2 opacity-0 sm:bottom-8"
            }`}
        >
            <i className="fa-solid fa-arrow-up text-sm sm:text-base" />
        </button>
    );
};

export default ScrollToTopButton;
