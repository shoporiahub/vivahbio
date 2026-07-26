import { NavLink, useNavigate } from "react-router-dom";
import { NAVIGATION } from "../../constants/navigation";
import { useAuthStore } from "../../features/auth/store/auth.store";

function Navbar() {
    const navigate = useNavigate();

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
        <nav className="sticky top-0 z-50 bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 shadow-xl">
            <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-8">

                {/* Logo */}
                <NavLink
                    to="/"
                    className="text-3xl font-extrabold tracking-tight text-white transition hover:opacity-90"
                >
                    Vivaah <span className="text-blue-300">Bio AI</span>
                </NavLink>

                {/* Navigation */}
                <div className="flex items-center gap-8">
                    {NAVIGATION.map((item) => (
                        <NavLink
                            key={item.href}
                            to={item.href}
                            className={({ isActive }) =>
                                `text-base font-semibold transition-colors duration-200 ${
                                    isActive
                                        ? "text-white"
                                        : "text-slate-300 hover:text-white"
                                }`
                            }
                        >
                            {item.label}
                        </NavLink>
                    ))}
                </div>

                {/* Right Side */}
                {!isAuthenticated ? (
                    <div className="flex items-center gap-4">

                        <button
                            onClick={() => navigate("/login")}
                            className="rounded-xl border border-white/20 bg-white/10 px-5 py-2.5 font-semibold text-white transition hover:bg-white/20"
                        >
                            Login
                        </button>

                        <button
                            onClick={() => navigate("/register")}
                            className="rounded-xl bg-white px-6 py-2.5 font-bold text-blue-800 shadow-md transition hover:bg-slate-100"
                        >
                            Register
                        </button>

                    </div>
                ) : (
                    <div className="flex items-center gap-4">

                        <div className="rounded-full bg-white/10 px-4 py-2">
                            <span className="font-semibold text-white">
                                Hi, {user?.name}
                            </span>
                        </div>

                        <button
                            onClick={handleLogout}
                            className="rounded-xl border border-white/20 bg-white/10 px-5 py-2.5 font-semibold text-white transition hover:bg-red-500 hover:border-red-500"
                        >
                            Logout
                        </button>

                    </div>
                )}

            </div>
        </nav>
    );
}

export default Navbar;