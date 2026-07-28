import { Link } from "react-router-dom";
import { templates } from "../../constants/templates";

function TemplatePreview() {
    return (
        <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 py-28">
            <div className="mx-auto max-w-7xl px-8">

                {/* Header */}

                <div className="mx-auto max-w-3xl text-center">

                    <span className="rounded-full bg-blue-500/20 px-4 py-2 text-sm font-semibold text-blue-200">
                        Premium Designs
                    </span>

                    <h2 className="mt-6 text-5xl font-extrabold text-white">
                        Choose Your Perfect
                        <span className="text-blue-300">
                            {" "}Marriage Biodata Template
                        </span>
                    </h2>

                    <p className="mt-6 text-lg leading-8 text-slate-300">
                        Select from our collection of beautifully crafted
                        marriage biodata templates designed to leave a lasting
                        impression.
                    </p>

                </div>

                {/* Templates */}

                <div className="mt-20 grid gap-10 md:grid-cols-2 xl:grid-cols-3">

                    {templates.map((template) => (
                        <Link
                            key={template.id}
                            to={`/templates/${template.slug}`}
                            className="group overflow-hidden rounded-3xl bg-white/10 shadow-2xl backdrop-blur-md transition-all duration-300 hover:-translate-y-3 hover:shadow-blue-500/30"
                        >
                            {/* Image */}

                            <div className="overflow-hidden">
                                <img
                                    src={template.image}
                                    alt={template.name}
                                    className="h-[460px] w-full object-cover transition duration-500 group-hover:scale-105"
                                />
                            </div>

                            {/* Content */}

                            <div className="p-8">
                                <h3 className="text-3xl font-bold text-white">
                                    {template.name}
                                </h3>

                                <div className="mt-4 flex items-center justify-between">
                                    <span className="text-xl font-bold text-blue-300">
                                        {template.price}
                                    </span>

                                    <span className="rounded-full bg-yellow-400 px-3 py-1 text-sm font-bold text-slate-900">
                                        ★ 5.0
                                    </span>
                                </div>

                                <div className="mt-8 flex items-center justify-center rounded-xl bg-white py-4 text-lg font-bold text-blue-800 transition group-hover:bg-slate-100">
                                    Preview Template
                                </div>
                            </div>
                        </Link>
                    ))}

                </div>

            </div>
        </section>
    );
}

export default TemplatePreview;