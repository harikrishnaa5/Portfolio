import { Dialog, DialogBackdrop, DialogPanel } from "@headlessui/react";
import SocialMedia from "../SocialMedia";
import { connectMe } from "../../constants";

const Contact = ({ open, setOpen }) => {
    return (
        <Dialog open={open} onClose={() => setOpen(false)} className="relative z-50">
            <DialogBackdrop
                transition
                className="fixed inset-0 bg-[var(--backdrop)] backdrop-blur-sm transition-opacity data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in"
            />

            <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                <div className="flex min-h-full items-center justify-center p-4">
                    <DialogPanel
                        transition
                        className="w-full max-w-md transform overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-8 shadow-[var(--shadow-lg)] transition-all data-closed:scale-95 data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in"
                    >
                        <div className="mb-6 flex items-center justify-between">
                            <h2 className="text-2xl font-bold tracking-tight text-[var(--text)]">Contact</h2>
                            <button
                                type="button"
                                onClick={() => setOpen(false)}
                                aria-label="Close"
                                className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full text-[var(--muted)] transition-colors hover:bg-[var(--accent-muted)] hover:text-[var(--text)]"
                            >
                                <i className="fa-solid fa-xmark" />
                            </button>
                        </div>

                        <div className="flex flex-col gap-5">
                            {Object.entries(connectMe).map(([key, value]) => (
                                <div key={key} className="flex flex-col gap-1">
                                    <span className="text-xs font-medium uppercase tracking-wider text-[var(--muted)]">
                                        {key}
                                    </span>
                                    {key.toLowerCase() === "email" ? (
                                        <a
                                            href={`mailto:${value}`}
                                            className="text-[var(--text)] transition-colors hover:text-[var(--accent)]"
                                        >
                                            {value}
                                        </a>
                                    ) : (
                                        <span className="text-[var(--text)]">{value}</span>
                                    )}
                                </div>
                            ))}

                            <div className="mt-2 border-t border-[var(--border)] pt-5">
                                <span className="mb-3 block text-xs font-medium uppercase tracking-wider text-[var(--muted)]">
                                    Social
                                </span>
                                <SocialMedia />
                            </div>
                        </div>
                    </DialogPanel>
                </div>
            </div>
        </Dialog>
    );
};

export default Contact;
