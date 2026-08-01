import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Menu } from "lucide-react";

import { NAVIGATION } from "../../constants/navigation";
import { useAuthStore } from "../../features/auth/store/auth.store";
import HamburgerMenu from "./HamburgerMenu";
import logo from "../../assets/vivahcraftlogo.png";

function Navbar() {
    const navigate = useNavigate();

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const isAuthenticated = useAuthStore(
        (state) => state.isAuthenticated
    );

    const user = useAuthStore((state) => state.user);

    const logout = useAuthStore((state) => state.logout);

    const handleLogout = () => {
        logout();
        navigate("/");
    };

    return (
        <>
            <nav className="sticky top-0 z-50 bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 shadow-xl">
                <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">

                    {/* Logo */}

                    <NavLink
                        to="/"
                        className="flex items-center gap-3 transition hover:opacity-90"
                    >
                        <img
                            src={logo}
                            alt="VivahCraft Logo"
                            className="h-10 w-10 md:h-12 md:w-12 object-contain"
                        />

                        <div className="text-2xl font-extrabold tracking-tight text-white md:text-3xl">
                            Vivah{" "}
                            <span className="text-blue-300">
                                Craft
                            </span>
                        </div>
                    </NavLink>

                    {/* Desktop Navigation */}

                    <div className="hidden items-center gap-8 md:flex">

                        {NAVIGATION.map((item) => (

                            <NavLink
                                key={item.href}
                                to={item.href}
                                className={({ isActive }) =>
                                    `text-base font-semibold transition-colors duration-200 ${isActive
                                        ? "text-white"
                                        : "text-slate-300 hover:text-white"
                                    }`
                                }
                            >
                                {item.label}
                            </NavLink>

                        ))}

                    </div>

                    {/* Desktop Auth */}

                    <div className="hidden items-center gap-4 md:flex">

                        {!isAuthenticated ? (

                            <>

                                <button
                                    onClick={() =>
                                        navigate("/login")
                                    }
                                    className="rounded-xl border border-white/20 bg-white/10 px-5 py-2.5 font-semibold text-white transition hover:bg-white/20"
                                >
                                    Login
                                </button>

                                <button
                                    onClick={() =>
                                        navigate("/register")
                                    }
                                    className="rounded-xl bg-white px-6 py-2.5 font-bold text-blue-800 shadow-md transition hover:bg-slate-100"
                                >
                                    Register
                                </button>

                            </>

                        ) : (

                            <>

                                <button
                                    onClick={() => navigate("/dashboard")}
                                    className="cursor-pointer rounded-full bg-white/10 px-4 py-2 transition hover:bg-white/20"
                                >
                                    <span className="font-semibold text-white">
                                        Hi, {user?.name}
                                    </span>
                                </button>

                                <button
                                    onClick={handleLogout}
                                    className="cursor-pointer rounded-xl border border-white/20 bg-white/10 px-5 py-2.5 font-semibold text-white transition hover:border-red-500 hover:bg-red-500"
                                >
                                    Logout
                                </button>

                            </>

                        )}

                    </div>

                    {/* Mobile Button */}

                    <button
                        onClick={() => setIsMenuOpen(true)}
                        className="rounded-lg p-2 text-white transition hover:bg-white/10 md:hidden"
                    >
                        <Menu size={30} />
                    </button>

                </div>
            </nav>

            <HamburgerMenu
                isOpen={isMenuOpen}
                onClose={() => setIsMenuOpen(false)}
            />
        </>
    );
}

export default Navbar;