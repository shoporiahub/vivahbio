import Layout from "../../components/layout/Layout";
import { Link } from "react-router-dom";
import { STEPS } from "../../components/how-it-works/steps";
import StepCard from "../../components/how-it-works/StepCard";

function HowItWorksPage() {
    return (
        <Layout>

            {/* Hero */}

            <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 py-28">

                <div className="mx-auto max-w-6xl px-8 text-center">

                    <span className="rounded-full bg-blue-500/20 px-4 py-2 text-sm font-semibold text-blue-200">
                        How It Works
                    </span>

                    <h1 className="mt-6 text-5xl font-extrabold text-white lg:text-6xl">
                        Create Your Marriage Biodata
                        <span className="text-blue-300">
                            {" "}in Just 3 Steps
                        </span>
                    </h1>

                    <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-slate-300">
                        Creating a professional marriage biodata has never been
                        easier. Fill in your details, choose a premium template,
                        and download a beautiful PDF within minutes.
                    </p>

                </div>

            </section>

            {/* Steps */}

            <section className="bg-slate-50 py-28">

                <div className="mx-auto max-w-7xl px-8">

                    <div className="grid gap-10 md:grid-cols-3">

                        {STEPS.map((step) => (
                            <StepCard
                                key={step.number}
                                {...step}
                            />
                        ))}

                    </div>

                </div>

            </section>

            {/* Why Choose Us */}

            <section className="bg-white py-28">

                <div className="mx-auto max-w-6xl px-8">

                    <div className="text-center">

                        <h2 className="text-4xl font-extrabold text-slate-900">
                            Why Choose Vivaah Bio AI?
                        </h2>

                        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
                            We combine elegant design with AI to help you
                            create a premium marriage biodata effortlessly.
                        </p>

                    </div>

                    <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-4">

                        <div className="rounded-3xl bg-slate-50 p-8 text-center shadow-md">
                            <div className="text-5xl">⚡</div>
                            <h3 className="mt-6 text-2xl font-bold">
                                Fast
                            </h3>
                            <p className="mt-4 text-slate-600">
                                Generate your biodata in just a few minutes.
                            </p>
                        </div>

                        <div className="rounded-3xl bg-slate-50 p-8 text-center shadow-md">
                            <div className="text-5xl">🎨</div>
                            <h3 className="mt-6 text-2xl font-bold">
                                Premium Designs
                            </h3>
                            <p className="mt-4 text-slate-600">
                                Beautiful templates crafted by professional designers.
                            </p>
                        </div>

                        <div className="rounded-3xl bg-slate-50 p-8 text-center shadow-md">
                            <div className="text-5xl">🤖</div>
                            <h3 className="mt-6 text-2xl font-bold">
                                AI Powered
                            </h3>
                            <p className="mt-4 text-slate-600">
                                Smart formatting and elegant layouts automatically.
                            </p>
                        </div>

                        <div className="rounded-3xl bg-slate-50 p-8 text-center shadow-md">
                            <div className="text-5xl">📄</div>
                            <h3 className="mt-6 text-2xl font-bold">
                                PDF Ready
                            </h3>
                            <p className="mt-4 text-slate-600">
                                Download and print high-quality PDF documents instantly.
                            </p>
                        </div>

                    </div>

                </div>

            </section>

            {/* CTA */}

            <section className="bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 py-24">

                <div className="mx-auto max-w-4xl px-8 text-center">

                    <h2 className="text-5xl font-extrabold text-white">
                        Ready to Create Your Biodata?
                    </h2>

                    <p className="mt-6 text-lg leading-8 text-slate-300">
                        Join thousands of families who trust Vivaah Bio AI
                        to create elegant marriage biodatas in minutes.
                    </p>

                    <Link
                        to="/biodata"
                        className="mt-10 inline-block rounded-2xl bg-white px-10 py-4 text-lg font-bold text-blue-800 transition hover:scale-105 hover:bg-slate-100"
                    >
                        Create Biodata
                    </Link>

                </div>

            </section>

        </Layout>
    );
}

export default HowItWorksPage;