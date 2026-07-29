import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import Layout from "../../components/layout/Layout";
import type { Template } from "../../constants/templates";
import { getTemplateBySlug } from "../../services/template.service";

function TemplateDetailsPage() {
    const { slug } = useParams();

    const [template, setTemplate] = useState<Template>();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function loadTemplate() {
            if (!slug) {
                setLoading(false);
                return;
            }

            const data = await getTemplateBySlug(slug);

            setTemplate(data);
            setLoading(false);
        }

        loadTemplate();
    }, [slug]);

    if (loading) {
        return (
            <Layout>
                <div className="flex min-h-[70vh] items-center justify-center bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
                    <h2 className="text-3xl font-bold text-white">
                        Loading Template...
                    </h2>
                </div>
            </Layout>
        );
    }

    if (!template) {
        return (
            <Layout>
                <div className="flex min-h-[70vh] items-center justify-center bg-slate-50">
                    <div className="text-center">

                        <h1 className="text-5xl font-bold text-red-600">
                            Template Not Found
                        </h1>

                        <p className="mt-6 text-lg text-slate-600">
                            We couldn't find the template you're looking for.
                        </p>

                        <Link
                            to="/templates"
                            className="mt-8 inline-block rounded-xl bg-blue-600 px-8 py-4 font-semibold text-white"
                        >
                            Browse Templates
                        </Link>

                    </div>
                </div>
            </Layout>
        );
    }

    return (
        <Layout>

            {/* Hero */}

            <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 py-24">

                <div className="mx-auto max-w-6xl px-8 text-center">

                    <span className="rounded-full bg-blue-500/20 px-4 py-2 text-sm font-semibold text-blue-200">
                        Premium Marriage Biodata Template
                    </span>

                    <h1 className="mt-6 text-5xl font-extrabold text-white lg:text-6xl">
                        {template.name}
                    </h1>

                    <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-slate-300">
                        {template.description}
                    </p>

                </div>

            </section>

            {/* Main */}

            <section className="bg-slate-50 py-24">

                <div className="mx-auto grid max-w-7xl gap-16 px-8 lg:grid-cols-[1.2fr_0.8fr]">

                    {/* Preview */}

                    <div className="sticky top-28 self-start">

                        <div className="overflow-hidden rounded-3xl bg-white shadow-2xl">

                            <img
                                src={template.image}
                                alt={template.name}
                                className="w-full object-cover"
                            />

                        </div>

                    </div>

                    {/* Details */}

                    <div>

                        <div className="flex items-center gap-3">

                            <span className="rounded-full bg-yellow-400 px-3 py-1 text-sm font-bold text-slate-900">
                                ★ 5.0
                            </span>

                            <span className="text-slate-500">
                                Trusted by thousands of families
                            </span>

                        </div>

                        <h2 className="mt-6 text-5xl font-bold text-slate-900">
                            {template.name}
                        </h2>

                        {template.price > 0 && <p className="mt-8 text-5xl font-extrabold text-blue-600">
                            ₹{template.price}
                        </p>}

                        <p className="mt-8 text-lg leading-8 text-slate-600">
                            {template.description}
                        </p>

                        {/* Features */}

                        <div className="mt-12 space-y-5">

                            <div className="flex items-center gap-4">
                                <span className="text-2xl">✅</span>
                                <span>Premium professionally designed layout</span>
                            </div>

                            <div className="flex items-center gap-4">
                                <span className="text-2xl">✅</span>
                                <span>AI-generated biodata</span>
                            </div>

                            <div className="flex items-center gap-4">
                                <span className="text-2xl">✅</span>
                                <span>High-quality printable PDF</span>
                            </div>

                            <div className="flex items-center gap-4">
                                <span className="text-2xl">✅</span>
                                <span>Mobile & desktop friendly</span>
                            </div>

                            <div className="flex items-center gap-4">
                                <span className="text-2xl">✅</span>
                                <span>Unlimited downloads</span>
                            </div>

                            <div className="flex items-center gap-4">
                                <span className="text-2xl">✅</span>
                                <span>Perfect for marriage proposals</span>
                            </div>

                        </div>

                        {/* Buttons */}

                        <div className="mt-14 space-y-4">

                            <Link
                                to={`/biodata?template=${template.slug}`}
                                className="block w-full rounded-2xl bg-blue-600 py-5 text-center text-lg font-bold text-white transition hover:bg-blue-700"
                            >
                                Create Biodata with This Template
                            </Link>

                            <Link
                                to="/templates"
                                className="block w-full rounded-2xl border border-slate-300 py-5 text-center text-lg font-semibold transition hover:bg-slate-100"
                            >
                                Back to Templates
                            </Link>

                        </div>

                    </div>

                </div>

            </section>

            {/* Included */}

            <section className="bg-white py-24">

                <div className="mx-auto max-w-7xl px-8">

                    <div className="text-center">

                        <h2 className="text-4xl font-extrabold text-slate-900">
                            What's Included
                        </h2>

                        <p className="mt-5 text-lg text-slate-600">
                            Everything you need to create a beautiful marriage biodata.
                        </p>

                    </div>

                    <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

                        {[
                            "Premium Design",
                            "HD PDF Download",
                            "Print Ready",
                            "Unlimited Downloads",
                            "Modern Typography",
                            "Instant AI Generation",
                        ].map((item) => (

                            <div
                                key={item}
                                className="rounded-3xl border border-slate-200 bg-slate-50 p-8 shadow-sm transition hover:-translate-y-2 hover:shadow-lg"
                            >
                                <div className="text-4xl">
                                    ✨
                                </div>

                                <h3 className="mt-6 text-2xl font-bold">
                                    {item}
                                </h3>

                            </div>

                        ))}

                    </div>

                </div>

            </section>

            {/* CTA */}

            <section className="bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 py-24">

                <div className="mx-auto max-w-4xl px-8 text-center">

                    <h2 className="text-5xl font-extrabold text-white">
                        Ready to Build Your Marriage Biodata?
                    </h2>

                    <p className="mt-6 text-lg leading-8 text-slate-300">
                        Complete your biodata in minutes and download a
                        professionally designed PDF instantly.
                    </p>

                    <Link
                        to={`/biodata?template=${template.slug}`}
                        className="mt-10 inline-block rounded-2xl bg-white px-10 py-5 text-lg font-bold text-blue-800 transition hover:scale-105"
                    >
                        Start Creating Now
                    </Link>

                </div>

            </section>

        </Layout>
    );
}

export default TemplateDetailsPage;