import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
    registerSchema,
    type RegisterFormData,
} from "../schemas/auth.schema";

import { useAuthStore } from "../store/auth.store";

import Input from "../../../components/ui/Input";
import FormField from "../../../components/ui/FormField";
import Button from "../../../components/ui/Button";

function RegisterPage() {
    const navigate = useNavigate();

    const registerUser = useAuthStore((state) => state.register);
    const loading = useAuthStore((state) => state.loading);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<RegisterFormData>({
        resolver: zodResolver(registerSchema),
    });

    const onSubmit = async (data: RegisterFormData) => {
        try {
            await registerUser(data);

            navigate("/");
        } catch (error) {
            console.error(error);
            alert("Registration failed");
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
            <div className="mx-auto flex min-h-screen max-w-7xl items-center justify-center px-6 py-12">

                <div className="w-full max-w-lg rounded-3xl border border-white/20 bg-white p-10 shadow-2xl">

                    <div className="text-center">

                        <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
                            Join Vivaah Bio AI
                        </span>

                        <h1 className="mt-6 text-4xl font-bold text-slate-900">
                            Create Account
                        </h1>

                        <p className="mt-3 text-slate-500">
                            Create your account and start building premium marriage biodatas in minutes.
                        </p>

                    </div>

                    <form
                        onSubmit={handleSubmit(onSubmit)}
                        className="mt-10 space-y-6"
                    >
                        <FormField
                            label="Full Name"
                            error={errors.name?.message}
                        >
                            <Input
                                placeholder="Enter your full name"
                                {...register("name")}
                            />
                        </FormField>

                        <FormField
                            label="Email Address"
                            error={errors.email?.message}
                        >
                            <Input
                                type="email"
                                placeholder="Enter your email"
                                {...register("email")}
                            />
                        </FormField>

                        <FormField
                            label="Mobile Number"
                            error={errors.mobile?.message}
                        >
                            <Input
                                placeholder="Enter your mobile number"
                                {...register("mobile")}
                            />
                        </FormField>

                        <FormField
                            label="Password"
                            error={errors.password?.message}
                        >
                            <Input
                                type="password"
                                placeholder="Create a strong password"
                                {...register("password")}
                            />
                        </FormField>

                        <Button
                            type="submit"
                            disabled={loading}
                            className="h-12 w-full rounded-xl text-base font-semibold"
                        >
                            {loading
                                ? "Creating Account..."
                                : "Create Account"}
                        </Button>
                    </form>

                    <div className="mt-8 border-t border-slate-200 pt-6 text-center space-y-4">

                        <Link
                            to="/"
                            className="inline-flex items-center text-sm font-medium text-slate-500 transition hover:text-blue-600"
                        >
                            ← Back to Home
                        </Link>

                        <div>

                            <p className="text-slate-600">
                                Already have an account?
                            </p>

                            <Link
                                to="/login"
                                className="mt-2 inline-block font-semibold text-blue-600 transition hover:text-blue-700"
                            >
                                Login →
                            </Link>

                        </div>

                    </div>

                </div>

            </div>
        </div>
    );
}

export default RegisterPage;