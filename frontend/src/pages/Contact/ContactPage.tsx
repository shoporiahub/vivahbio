import { useState } from "react";
import { useForm } from "react-hook-form";

import Layout from "../../components/layout/Layout";
import { createContact } from "../../services/contact.service";

type ContactFormData = {
    fullName: string;
    email: string;
    subject: string;
    message: string;
};

function ContactPage() {
    const [showToast, setShowToast] = useState(false);

    const {
        register,
        handleSubmit,
        reset,
        formState: {
            errors,
            isSubmitting,
        },
    } = useForm<ContactFormData>();

    const onSubmit = async (data: ContactFormData) => {
        try {
            await createContact({
                full_name: data.fullName,
                email: data.email,
                subject: data.subject,
                message: data.message,
            });

            reset();
            setShowToast(true);

            setTimeout(() => {
                setShowToast(false);
            }, 4000);
        } catch (error) {
            console.error(error);
            alert("Failed to send message.");
        }
    };

    return (
        <Layout>

            {/* Success Toast */}

            {showToast && (
                <div className="fixed right-6 top-6 z-50">
                    <div className="rounded-2xl border border-green-200 bg-white px-6 py-4 shadow-2xl">
                        <div className="flex items-start gap-3">

                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100">
                                ✅
                            </div>

                            <div>

                                <h3 className="font-semibold text-slate-900">
                                    Message Sent
                                </h3>

                                <p className="mt-1 text-sm text-slate-600">
                                    Thank you for contacting us. We'll get back
                                    to you as soon as possible.
                                </p>

                            </div>

                        </div>
                    </div>
                </div>
            )}

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
                                        support@vivahcraft.com
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

                        <form
                            onSubmit={handleSubmit(onSubmit)}
                            className="mt-8 space-y-6"
                        >

                            <div>

                                <label className="mb-2 block font-medium">
                                    Full Name
                                </label>

                                <input
                                    {...register("fullName", {
                                        required: "Full name is required",
                                    })}
                                    type="text"
                                    placeholder="Enter your full name"
                                    className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-500"
                                />

                                {errors.fullName && (
                                    <p className="mt-2 text-sm text-red-500">
                                        {errors.fullName.message}
                                    </p>
                                )}

                            </div>

                            <div>

                                <label className="mb-2 block font-medium">
                                    Email Address
                                </label>

                                <input
                                    {...register("email", {
                                        required: "Email is required",
                                    })}
                                    type="email"
                                    placeholder="Enter your email"
                                    className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-500"
                                />

                                {errors.email && (
                                    <p className="mt-2 text-sm text-red-500">
                                        {errors.email.message}
                                    </p>
                                )}

                            </div>

                            <div>

                                <label className="mb-2 block font-medium">
                                    Subject
                                </label>

                                <input
                                    {...register("subject", {
                                        required: "Subject is required",
                                    })}
                                    type="text"
                                    placeholder="How can we help?"
                                    className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-500"
                                />

                                {errors.subject && (
                                    <p className="mt-2 text-sm text-red-500">
                                        {errors.subject.message}
                                    </p>
                                )}

                            </div>

                            <div>

                                <label className="mb-2 block font-medium">
                                    Message
                                </label>

                                <textarea
                                    {...register("message", {
                                        required: "Message is required",
                                    })}
                                    rows={6}
                                    placeholder="Write your message..."
                                    className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-500"
                                />

                                {errors.message && (
                                    <p className="mt-2 text-sm text-red-500">
                                        {errors.message.message}
                                    </p>
                                )}

                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 py-4 text-lg font-semibold text-white transition hover:scale-[1.02] disabled:cursor-not-allowed disabled:opacity-60"
                            >
                                {isSubmitting
                                    ? "Sending..."
                                    : "Send Message"}
                            </button>

                        </form>

                    </div>

                </div>

            </section>

        </Layout>
    );
}

export default ContactPage;