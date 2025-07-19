"use client";
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from "@headlessui/react";
import SocialMedia from "../SocialMedia";
import { connectMe } from "../../constants";
import { Link } from "react-router-dom";

const Contact = ({ open, setOpen }) => {
    return (
        <Dialog open={open} onClose={() => setOpen(false)} className="relative z-10">
            <DialogBackdrop
                transition
                className="fixed inset-0 bg-gray-500/75 transition-opacity data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in"
            />

            <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                <div className="flex min-h-full justify-center p-4 text-center items-center sm:p-0">
                    <DialogPanel
                        transition
                        className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all data-closed:translate-y-4 data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in sm:my-8 sm:w-full sm:max-w-lg data-closed:sm:translate-y-0 data-closed:sm:scale-95 p-6"
                    >
                        <div className="flex px-4 sm:p-6 sm:pb-4 flex-col gap-4">
                            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-shadow-lg">Connect me</h1>
                            {Object.entries(connectMe).map(([key, value]) => (
                                <p className="text-sm sm:text-base" key={key}>
                                    {key}:{" "}
                                    {key.toLowerCase() === "email" ? (
                                        <Link
                                            to={`https://mail.google.com/mail/?view=cm&fs=1&to=${value}`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            {value}
                                        </Link>
                                    ) : (
                                        value
                                    )}
                                </p>
                            ))}
                            <p className="flex gap-5 items-center text-sm sm:text-base">
                                Social media: <SocialMedia />
                            </p>
                        </div>
                    </DialogPanel>
                </div>
            </div>
        </Dialog>
    );
};

export default Contact;
