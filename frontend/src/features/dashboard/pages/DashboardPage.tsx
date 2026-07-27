import { useNavigate } from "react-router-dom";
import {
    Plus,
    User,
    FileText,
    LogOut,
} from "lucide-react";

import Card from "../../../components/ui/Card";
import Button from "../../../components/ui/Button";
import { useAuthStore } from "../../auth/store/auth.store";

function DashboardPage() {
    const navigate = useNavigate();

    const user = useAuthStore((state) => state.user);
    const logout = useAuthStore((state) => state.logout);

    const handleLogout = () => {
        logout();
        navigate("/login");
    };

    return (
        <div className="mx-auto max-w-5xl px-4 py-8 sm:px-6 lg:py-10">

            <h1 className="text-3xl font-bold">
                Welcome back, {user?.name} 👋
            </h1>

            <p className="mt-2 text-slate-600">
                Manage your profile and create beautiful marriage biodatas.
            </p>

            <Card className="mt-8 p-6">

                <div className="mb-6 flex items-center gap-3">

                    <div className="rounded-full bg-blue-100 p-3">
                        <User className="text-blue-700" size={22} />
                    </div>

                    <h2 className="text-xl font-semibold">
                        Profile
                    </h2>

                </div>

                <div className="space-y-4">

                    <div>
                        <p className="text-sm text-slate-500">
                            Name
                        </p>

                        <p className="font-medium">
                            {user?.name}
                        </p>
                    </div>

                    <div>
                        <p className="text-sm text-slate-500">
                            Email
                        </p>

                        <p className="font-medium">
                            {user?.email}
                        </p>
                    </div>

                    <div>
                        <p className="text-sm text-slate-500">
                            Mobile
                        </p>

                        <p className="font-medium">
                            {user?.mobile}
                        </p>
                    </div>

                </div>

            </Card>

            <Card className="mt-6 p-6">

                <h2 className="mb-5 text-xl font-semibold">
                    Quick Actions
                </h2>

                <div className="flex flex-wrap gap-4">

                    <Button
                        onClick={() => navigate("/biodata")}
                    >
                        <Plus size={18} />
                        Create Biodata
                    </Button>

                    <Button
                        variant="outline"
                        onClick={() => navigate("/my-biodatas")}
                    >
                        <FileText size={18} />
                        My Biodatas
                    </Button>

                    <Button
                        variant="outline"
                        onClick={handleLogout}
                    >
                        <LogOut size={18} />
                        Logout
                    </Button>

                </div>

            </Card>

        </div>
    );
}

export default DashboardPage;