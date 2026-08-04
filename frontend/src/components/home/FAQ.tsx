import { useState } from "react";
import { FAQS } from "../../constants/faq";

function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    function toggleFAQ(index: number) {
        setOpenIndex(openIndex === index ? null : index);
    }

    return (
        <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 py-28">
            <div className="mx-auto max-w-5xl px-8">

                {/* Header */}

                <div className="mx-auto max-w-3xl text-center">

                    <span className="rounded-full bg-blue-500/20 px-4 py-2 text-sm font-semibold text-blue-200">
                        Frequently Asked Questions
                    </span>

                    <h2 className="mt-6 text-5xl font-extrabold text-white">
                        Frequently Asked
                        <span className="text-blue-300">
                            {" "}Questions
                        </span>
                    </h2>

                    <p className="mt-6 text-lg leading-8 text-slate-300">
                        Find answers to common questions about creating,
                        customizing, downloading, and printing your marriage
                        biodata PDF.
                    </p>

                </div>

                {/* FAQ Items */}

                <div className="mt-20 space-y-6">

                    {FAQS.map((faq, index) => (
                        <div
                            key={faq.question}
                            className="overflow-hidden rounded-2xl border border-white/10 bg-white/10 backdrop-blur-md shadow-lg transition duration-300 hover:border-blue-400/40"
                        >
                            <button
                                onClick={() => toggleFAQ(index)}
                                className="flex w-full items-center justify-between px-8 py-6 text-left"
                            >
                                <span className="pr-6 text-xl font-semibold text-white">
                                    {faq.question}
                                </span>

                                <div className="cursor-pointer flex h-10 w-10 items-center justify-center rounded-full bg-blue-500 text-2xl font-bold text-white transition duration-300">
                                    {openIndex === index ? "−" : "+"}
                                </div>
                            </button>

                            <div
                                className={`overflow-hidden transition-all duration-300 ${
                                    openIndex === index
                                        ? "max-h-96"
                                        : "max-h-0"
                                }`}
                            >
                                <div className="border-t border-white/10 px-8 py-6 text-lg leading-8 text-slate-300">
                                    {faq.answer}
                                </div>
                            </div>

                        </div>
                    ))}

                </div>

            </div>
        </section>
    );
}

export default FAQ;