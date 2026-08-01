import { NavLink } from "react-router-dom";
import { NAVIGATION } from "../../constants/navigation";

function Footer() {
    return (
        <footer className="bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 text-white">

            <div className="mx-auto max-w-7xl px-8 py-20">

                <div className="grid gap-16 md:grid-cols-2 lg:grid-cols-4">

                    {/* Brand */}

                    <div>

                        <h2 className="text-3xl font-extrabold">
                            Vivah craft
                            <span className="text-blue-400"> AI</span>
                        </h2>

                        <p className="mt-6 leading-8 text-slate-300">
                            Create beautiful marriage biodatas with the power of AI.
                            Simply fill in your details, choose a premium design,
                            and download a professional PDF in minutes.
                        </p>

                    </div>

                    {/* Quick Links */}

                    <div>

                        <h3 className="text-xl font-bold">
                            Quick Links
                        </h3>

                        <div className="mt-6 flex flex-col gap-4">

                            {NAVIGATION.map((item) => (
                                <NavLink
                                    key={item.href}
                                    to={item.href}
                                    className="text-slate-300 transition hover:text-blue-400"
                                >
                                    {item.label}
                                </NavLink>
                            ))}

                        </div>

                    </div>

                    {/* Contact */}

                    <div>

                        <h3 className="text-xl font-bold">
                            Contact
                        </h3>

                        <div className="mt-6 space-y-4 text-slate-300">

                            <p>
                                📧 support@vivahcraft.ai
                            </p>

                            <p>
                                📍 India
                            </p>

                            <p>
                                ⏰ Mon - Sat | 9:00 AM - 6:00 PM
                            </p>

                        </div>

                    </div>

                    {/* Follow Us */}

                    <div>

                        <h3 className="text-xl font-bold">
                            Follow Us
                        </h3>

                        <p className="mt-6 text-slate-300">
                            Stay connected for new templates,
                            updates, and product announcements.
                        </p>

                        <div className="mt-8 flex gap-4">

                            <a
                                href="#"
                                className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-xl transition hover:bg-blue-600"
                            >
                                📘
                            </a>

                            <a
                                href="#"
                                className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-xl transition hover:bg-pink-600"
                            >
                                📷
                            </a>

                            <a
                                href="#"
                                className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-xl transition hover:bg-sky-500"
                            >
                                🐦
                            </a>

                            <a
                                href="#"
                                className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-xl transition hover:bg-blue-700"
                            >
                                💼
                            </a>

                        </div>

                    </div>

                </div>

                {/* Bottom */}

                <div className="mt-16 border-t border-white/10 pt-8">

                    <div className="flex flex-col items-center justify-between gap-4 text-center text-sm text-slate-400 md:flex-row">

                        <p>
                            © 2026 Vivah Craft. All rights reserved.
                        </p>

                        <div className="flex gap-6">

                            <NavLink
                                to="/privacy-policy"
                                className="transition hover:text-white"
                            >
                                Privacy Policy
                            </NavLink>

                            <NavLink
                                to="/terms"
                                className="transition hover:text-white"
                            >
                                Terms of Service
                            </NavLink>

                            <NavLink
                                to="/contact"
                                className="transition hover:text-white"
                            >
                                Contact
                            </NavLink>

                        </div>

                    </div>

                </div>

            </div>

        </footer>
    );
}

export default Footer;