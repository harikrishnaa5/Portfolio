import { useState } from "react";
import HomeImage from "../../assets/Profile-pic.jpeg";
import SocialMedia from "../SocialMedia";

const Home = () => {
    const [toast, setToast] = useState(false);

    const handleDownload = () => {
        const link = document.createElement("a");
        link.href = "/Harikrishna_N_Resume.pdf";
        link.download = "Harikrishna_N_Resume.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        setToast(true);
        setTimeout(() => setToast(false), 3000);
    };

    return (
        <section className="flex flex-col items-center gap-12 px-6 py-8 md:flex-row md:items-center md:gap-16 md:px-10 md:py-12">
            <div className="relative shrink-0">
                <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-[var(--accent)] to-transparent opacity-40 blur-xl" />
                <div className="relative h-48 w-48 overflow-hidden rounded-full border-2 border-[var(--border)] shadow-[var(--shadow-lg)] sm:h-56 sm:w-56 md:h-64 md:w-64">
                    <img className="h-full w-full object-cover" src={HomeImage} alt="Harikrishna N" />
                </div>
            </div>

            <div className="flex max-w-xl flex-col items-center gap-4 text-center md:items-start md:text-left">
                <p className="text-sm font-medium uppercase tracking-widest text-[var(--muted)]">Hi, I&apos;m</p>
                <h1 className="text-4xl font-bold tracking-tight text-[var(--text)] sm:text-5xl lg:text-6xl">
                    Harikrishna N
                </h1>
                <h2 className="text-xl font-medium text-[var(--accent)] sm:text-2xl">Full-Stack Engineer</h2>
                <p className="text-[var(--text-secondary)] leading-relaxed">
                    Building scalable web applications with modern JavaScript ecosystems.
                </p>

                <div className="flex flex-wrap items-center justify-center gap-3 md:justify-start">
                    <span className="text-sm text-[var(--muted)]">Working with</span>
                    <div className="flex items-center gap-4 rounded-xl border border-[var(--border)] bg-[var(--surface)] px-5 py-3 shadow-[var(--shadow)]">
                        <i
                            className="fa-brands fa-node-js text-3xl sm:text-4xl md:text-5xl"
                            style={{ color: "#339933" }}
                            aria-label="Node.js"
                        />
                        <span className="text-base text-[var(--muted)]">&</span>
                        <i
                            className="fa-brands fa-react text-3xl sm:text-4xl md:text-5xl"
                            style={{ color: "#61DAFB" }}
                            aria-label="React"
                        />
                    </div>
                </div>

                <div className="flex justify-center md:justify-start">
                    <SocialMedia />
                </div>

                <div className="flex flex-wrap items-center justify-center gap-4 pt-2 md:justify-start">
                    <button
                        type="button"
                        onClick={handleDownload}
                        className="inline-flex cursor-pointer items-center gap-2 rounded-xl bg-[var(--accent)] px-5 py-2.5 text-sm font-medium text-white shadow-[var(--shadow)] transition-all duration-300 hover:bg-[var(--accent-hover)] active:scale-[0.98]"
                    >
                        <i className="fa-solid fa-download text-xs" />
                        Download Resume
                    </button>
                </div>
            </div>

            {toast && (
                <div className="toast-enter fixed bottom-20 left-1/2 z-50 -translate-x-1/2 rounded-xl border border-[var(--border)] bg-[var(--surface)] px-4 py-3 text-sm font-medium text-[var(--text)] shadow-[var(--shadow-lg)] sm:bottom-8">
                    <i className="fa-solid fa-check mr-2 text-[var(--accent)]" />
                    Resume downloaded
                </div>
            )}
        </section>
    );
};

export default Home;
