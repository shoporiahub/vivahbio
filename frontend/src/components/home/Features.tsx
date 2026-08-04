import { features } from "../../constants/features";

function Features() {
    return (
        <section className="bg-slate-50 py-28">
            <div className="mx-auto max-w-7xl px-8">

                {/* Section Header */}
                <div className="mx-auto max-w-3xl text-center">

                    <h2 className="mt-6 text-5xl font-extrabold tracking-tight text-slate-900">
                        Create Your Professional
                        <span className="text-blue-600">
                            {" "}Marriage Biodata in 3 Easy Steps
                        </span>
                    </h2>

                    <p className="mt-6 text-lg leading-8 text-slate-600">
                        Design a professional marriage biodata in just a few
                        simple steps. Enter your details, select your preferred
                        template, and download a high-quality PDF that's ready
                        to print or share digitally.
                    </p>

                </div>

                {/* Cards */}

                <div className="mt-20 grid gap-10 md:grid-cols-3">

                    {features.map((feature, index) => (
                        <div
                            key={feature.title}
                            className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-10 shadow-sm transition-all duration-300 hover:-translate-y-3 hover:shadow-2xl"
                        >

                            {/* Step Number */}

                            <div className="absolute right-8 top-8 text-6xl font-extrabold text-slate-100">
                                0{index + 1}
                            </div>

                            {/* Icon */}

                            <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-600 text-4xl shadow-lg transition-transform duration-300 group-hover:scale-110">
                                {feature.icon}
                            </div>

                            {/* Title */}

                            <h3 className="mt-8 text-2xl font-bold text-slate-900">
                                {feature.title}
                            </h3>

                            {/* Description */}

                            <p className="mt-5 leading-8 text-slate-600">
                                {feature.description}
                            </p>

                        </div>
                    ))}

                </div>

            </div>
        </section>
    );
}

export default Features;