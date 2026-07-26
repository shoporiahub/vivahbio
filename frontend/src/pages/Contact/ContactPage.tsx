import Layout from "../../components/layout/Layout";

function ContactPage() {
    return (
        <Layout>

            {/* Hero */}

            <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 py-28">

                <div className="mx-auto max-w-4xl px-8 text-center">

                    <span className="rounded-full bg-blue-500/20 px-4 py-2 text-sm font-semibold text-blue-200">
                        Contact Us
                    </span>

                    <h1 className="mt-6 text-5xl font-extrabold text-white lg:text-6xl">
                        We'd Love to
                        <span className="text-blue-300"> Hear From You</span>
                    </h1>

                    <p className="mt-8 text-lg leading-8 text-slate-300">
                        Have a question, suggestion, or need help creating your
                        marriage biodata? Our team is here to assist you.
                    </p>

                </div>

            </section>

            {/* Contact Section */}

            <section className="bg-slate-50 py-28">

                <div className="mx-auto grid max-w-7xl gap-12 px-8 lg:grid-cols-2">

                    {/* Left */}

                    <div>

                        <h2 className="text-4xl font-bold text-slate-900">
                            Get In Touch
                        </h2>

                        <p className="mt-6 leading-8 text-slate-600">
                            Whether you have questions about templates,
                            payments, your account, or simply want to share
                            feedback, we'd love to hear from you.
                        </p>

                        <div className="mt-10 space-y-8">

                            <div className="flex items-start gap-4">

                                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100 text-2xl">
                                    📧
                                </div>

                                <div>

                                    <h3 className="text-xl font-bold">
                                        Email
                                    </h3>

                                    <p className="mt-2 text-slate-600">
                                        support@vivaahbio.ai
                                    </p>

                                </div>

                            </div>

                            <div className="flex items-start gap-4">

                                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100 text-2xl">
                                    📍
                                </div>

                                <div>

                                    <h3 className="text-xl font-bold">
                                        Location
                                    </h3>

                                    <p className="mt-2 text-slate-600">
                                        India
                                    </p>

                                </div>

                            </div>

                            <div className="flex items-start gap-4">

                                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100 text-2xl">
                                    ⏰
                                </div>

                                <div>

                                    <h3 className="text-xl font-bold">
                                        Support Hours
                                    </h3>

                                    <p className="mt-2 text-slate-600">
                                        Monday - Saturday
                                    </p>

                                    <p className="text-slate-600">
                                        9:00 AM – 6:00 PM
                                    </p>

                                </div>

                            </div>

                        </div>

                    </div>

                    {/* Contact Form */}

                    <div className="rounded-3xl bg-white p-10 shadow-xl">

                        <h2 className="text-3xl font-bold text-slate-900">
                            Send us a Message
                        </h2>

                        <form className="mt-8 space-y-6">

                            <div>

                                <label className="mb-2 block font-medium">
                                    Full Name
                                </label>

                                <input
                                    type="text"
                                    placeholder="Enter your name"
                                    className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-500"
                                />

                            </div>

                            <div>

                                <label className="mb-2 block font-medium">
                                    Email Address
                                </label>

                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-500"
                                />

                            </div>

                            <div>

                                <label className="mb-2 block font-medium">
                                    Subject
                                </label>

                                <input
                                    type="text"
                                    placeholder="How can we help?"
                                    className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-500"
                                />

                            </div>

                            <div>

                                <label className="mb-2 block font-medium">
                                    Message
                                </label>

                                <textarea
                                    rows={6}
                                    placeholder="Write your message..."
                                    className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-500"
                                />

                            </div>

                            <button
                                type="submit"
                                className="w-full rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 py-4 text-lg font-semibold text-white transition hover:scale-[1.02]"
                            >
                                Send Message
                            </button>

                        </form>

                    </div>

                </div>

            </section>

        </Layout>
    );
}

export default ContactPage;