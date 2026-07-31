import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Link,
  useNavigate,
  useSearchParams,
} from "react-router-dom";

import {
  loginSchema,
  type LoginFormData,
} from "../schemas/auth.schema";

import { useAuthStore } from "../store/auth.store";

function LoginPage() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const redirect = searchParams.get("redirect");

  const login = useAuthStore((state) => state.login);
  const loading = useAuthStore((state) => state.loading);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data: LoginFormData) => {
    try {
      await login(data);

      navigate(redirect ?? "/");
    } catch (error) {
      console.error(error);

      alert("Invalid credentials");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">

      <div className="mx-auto flex min-h-screen max-w-7xl items-center justify-center px-6">

        <div className="w-full max-w-md rounded-3xl border border-white/20 bg-white p-10 shadow-2xl">

          <div className="text-center">

            <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
              Welcome Back
            </span>

            <h1 className="mt-6 text-4xl font-bold text-slate-900">
              Login
            </h1>

            <p className="mt-3 text-slate-500">
              Sign in to continue creating premium marriage biodatas.
            </p>

          </div>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="mt-10 space-y-6"
          >

            <div>

              <label className="mb-2 block font-medium text-slate-700">
                Mobile Number
              </label>

              <input
                {...register("mobile")}
                placeholder="Enter your mobile number"
                className="h-12 w-full rounded-xl border border-slate-300 px-4 outline-none transition focus:border-blue-600 focus:ring-4 focus:ring-blue-100"
              />

              {errors.mobile && (
                <p className="mt-2 text-sm text-red-500">
                  {errors.mobile.message}
                </p>
              )}

            </div>

            <div>

              <label className="mb-2 block font-medium text-slate-700">
                Password
              </label>

              <input
                type="password"
                {...register("password")}
                placeholder="Enter your password"
                className="h-12 w-full rounded-xl border border-slate-300 px-4 outline-none transition focus:border-blue-600 focus:ring-4 focus:ring-blue-100"
              />

              {errors.password && (
                <p className="mt-2 text-sm text-red-500">
                  {errors.password.message}
                </p>
              )}

            </div>

            <button
              type="submit"
              disabled={loading}
              className="h-12 w-full cursor-pointer rounded-xl bg-blue-600 text-lg font-semibold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-70"
            >
              {loading ? "Logging in..." : "Login"}
            </button>

          </form>

          <div className="mt-8 border-t border-slate-200 pt-6 text-center">

            <p className="text-slate-600">
              Don't have an account?
            </p>

            <Link
              to={
                redirect
                  ? `/register?redirect=${encodeURIComponent(redirect)}`
                  : "/register"
              }
              className="mt-2 inline-block font-semibold text-blue-600 hover:text-blue-700"
            >
              Create Account →
            </Link>

          </div>

        </div>

      </div>

    </div>
  );
}

export default LoginPage;