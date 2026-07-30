import { useNavigate } from "react-router-dom";

import heroImage from "../../assets/biodata.png";

function Hero() {
    const navigate = useNavigate();

    return (
        <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">

            {/* Background Blur */}
            <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-blue-500/20 blur-3xl"></div>

            <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-indigo-500/20 blur-3xl"></div>

            <div className="relative mx-auto flex min-h-[85vh] max-w-7xl flex-col items-center gap-16 px-8 py-20 md:flex-row">

                {/* Left Side */}
                <div className="flex-1">


                    <h1 className="mt-8 text-6xl font-extrabold leading-tight text-white">
                        Create Stunning
                        <span className="text-blue-300">
                            {" "}Marriage Biodatas
                        </span>
                        <br />
                        Within Minutes
                    </h1>

                    <p className="mt-8 max-w-xl text-lg leading-8 text-slate-300">
                        Create a beautifully designed marriage biodata in just
                        a few simple steps. Enter your personal details, choose
                        a premium template, and download a professional PDF
                        ready to share with your family and prospective matches.
                    </p>

                    <div className="mt-10 flex flex-wrap gap-5">

                        <button
                            onClick={() => navigate("/biodata")}
                            className="cursor-pointer rounded-xl bg-white px-8 py-4 font-bold text-blue-800 shadow-xl transition hover:scale-105"
                        >
                            Create Biodata
                        </button>

                        <button
                            onClick={() => navigate("/templates")}
                            className="cursor-pointer rounded-xl border border-white/20 bg-white/10 px-8 py-4 font-semibold text-white transition hover:bg-white/20"
                        >
                            View Templates
                        </button>

                    </div>

                </div>

                {/* Right Side */}

                <div className="flex flex-1 justify-center">

                    <div className="relative">

                        {/* Glow */}
                        <div className="absolute inset-0 rounded-3xl bg-blue-500/30 blur-3xl"></div>

                        <div className="relative overflow-hidden rounded-3xl bg-white p-3 shadow-2xl">

                            {/* Replace with your image */}
                            <img
                                src={heroImage}
                                alt="Marriage Biodata Preview"
                                className="w-[550px] lg:w-[650px] xl:w-[700px] rounded-3xl object-cover drop-shadow-2xl transition duration-300 hover:scale-105"
                                onClick={() => navigate("/templates")}
                            />

                        </div>

                    </div>

                </div>

            </div>

        </section>
    );
}

export default Hero;