import { useNavigate } from "react-router-dom";

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
        <div className="mx-auto max-w-5xl px-6 py-10">

            <h1 className="mb-2 text-4xl font-bold">
                Welcome 👋
            </h1>

            <p className="mb-8 text-gray-600">
                Glad to see you again.
            </p>

            <Card className="mb-8 p-6">

                <h2 className="mb-5 text-2xl font-semibold">
                    Profile
                </h2>

                <div className="space-y-3">

                    <div>
                        <strong>Name:</strong> {user?.name}
                    </div>

                    <div>
                        <strong>Email:</strong> {user?.email}
                    </div>

                    <div>
                        <strong>Mobile:</strong> {user?.mobile}
                    </div>

                </div>

            </Card>

            <Card className="p-6">

                <h2 className="mb-5 text-2xl font-semibold">
                    Quick Actions
                </h2>

                <div className="flex gap-4">

                    <Button
                        onClick={() => navigate("/biodata")}
                    >
                        Create Biodata
                    </Button>

                    <Button
                        onClick={handleLogout}
                        variant="outline"
                    >
                        Logout
                    </Button>

                </div>

            </Card>

        </div>
    );
}

export default DashboardPage;