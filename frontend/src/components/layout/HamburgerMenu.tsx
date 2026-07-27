import { useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import {
    X,
    Home,
    FileText,
    Sparkles,
    BadgeDollarSign,
    Mail,
    CircleHelp,
} from "lucide-react";

import { useAuthStore } from "../../features/auth/store/auth.store";

type Props = {
    isOpen: boolean;
    onClose: () => void;
};

const navigation = [
    {
        label: "Home",
        href: "/",
        icon: Home,
    },
    {
        label: "Templates",
        href: "/templates",
        icon: FileText,
    },
    {
        label: "Pricing",
        href: "/pricing",
        icon: BadgeDollarSign,
    },
    {
        label: "FAQ",
        href: "/faq",
        icon: CircleHelp,
    },
    {
        label: "Contact",
        href: "/contact",
        icon: Mail,
    },
];

function HamburgerMenu({ isOpen, onClose }: Props) {
    const navigate = useNavigate();

    const isAuthenticated = useAuthStore(
        (state) => state.isAuthenticated
    );

    const user = useAuthStore(
        (state) => state.user
    );

    const logout = useAuthStore(
        (state) => state.logout
    );

    useEffect(() => {
        document.body.style.overflow = isOpen
            ? "hidden"
            : "auto";

        return () => {
            document.body.style.overflow = "auto";
        };
    }, [isOpen]);

    const handleLogout = () => {
        logout();
        onClose();
        navigate("/");
    };

    return (
        <div
            className={`fixed inset-0 z-[100] transition-all duration-300 ${isOpen
                    ? "visible opacity-100"
                    : "invisible opacity-0"
                }`}
        >
            {/* Overlay */}

            <div
                onClick={onClose}
                className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            />

            {/* Drawer */}

            <aside
                className={`absolute right-0 top-0 flex h-full w-80 max-w-[88vw] flex-col overflow-hidden bg-white shadow-2xl transition-transform duration-300 ${isOpen
                        ? "translate-x-0"
                        : "translate-x-full"
                    }`}
            >
                {/* Header */}

                <div className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 px-6 pb-8 pt-6 text-white">

                    <div className="mb-8 flex justify-end">

                        <button
                            onClick={onClose}
                            className="rounded-lg p-2 transition hover:bg-white/10"
                        >
                            <X size={24} />
                        </button>

                    </div>

                    <h2 className="text-3xl font-extrabold">
                        Vivaah{" "}
                        <span className="text-blue-300">
                            Bio AI
                        </span>
                    </h2>

                    <p className="mt-2 text-sm text-slate-300">
                        AI Marriage Biodata Generator
                    </p>

                    <div className="mt-5 inline-flex rounded-full bg-white/10 px-4 py-2 text-xs font-semibold tracking-wide">
                        Beautiful • Fast • Premium
                    </div>

                </div>

                {/* Navigation */}

                <div className="flex-1 space-y-2 overflow-y-auto px-4 py-6">

                    {navigation.map((item) => {

                        const Icon = item.icon;

                        return (
                            <NavLink
                                key={item.href}
                                to={item.href}
                                onClick={onClose}
                                className={({ isActive }) =>
                                    `flex items-center gap-4 rounded-2xl px-4 py-3 text-base font-semibold transition-all duration-200 ${isActive
                                        ? "bg-blue-600 text-white shadow-lg"
                                        : "text-slate-700 hover:bg-slate-100"
                                    }`
                                }
                            >
                                <Icon size={20} />

                                <span>
                                    {item.label}
                                </span>
                            </NavLink>
                        );
                    })}
                </div>
                {/* Footer */}

                <div className="border-t border-slate-200 bg-slate-50 p-5">

                    {!isAuthenticated ? (

                        <div className="space-y-3">

                            <button
                                onClick={() => {
                                    onClose();
                                    navigate("/login");
                                }}
                                className="w-full rounded-xl border border-slate-300 bg-white py-3 font-semibold text-slate-800 transition-all duration-200 hover:bg-slate-100 active:scale-95"
                            >
                                Login
                            </button>

                            <button
                                onClick={() => {
                                    onClose();
                                    navigate("/register");
                                }}
                                className="w-full rounded-xl bg-blue-600 py-3 font-semibold text-white shadow-lg transition-all duration-200 hover:bg-blue-700 active:scale-95"
                            >
                                Create Free Account
                            </button>

                        </div>

                    ) : (

                        <div className="space-y-4">

                            {/* User Card */}

                            <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">

                                <div className="flex items-center gap-4">

                                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-blue-800 text-xl font-bold text-white">

                                        {user?.name
                                            ?.charAt(0)
                                            .toUpperCase()}

                                    </div>

                                    <div className="min-w-0">

                                        <p className="truncate text-lg font-semibold text-slate-900">
                                            {user?.name}
                                        </p>

                                        <p className="truncate text-sm text-slate-500">
                                            {user?.email}
                                        </p>

                                    </div>

                                </div>

                            </div>

                            <button
                                onClick={handleLogout}
                                className="w-full rounded-xl bg-red-500 py-3 font-semibold text-white transition-all duration-200 hover:bg-red-600 active:scale-95"
                            >
                                Logout
                            </button>

                        </div>

                    )}

                </div>

            </aside>

        </div>
    );
}

export default HamburgerMenu;