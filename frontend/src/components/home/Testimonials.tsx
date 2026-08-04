import { Link } from "react-router-dom";

const testimonials = [
    {
        id: 1,
        name: "Rahul Sharma",
        city: "Delhi",
        image: "/testimonials/user1.jpg",
        review:
            "Creating my marriage biodata was incredibly simple. The templates looked professional, and the final PDF was exactly what I needed.",
    },
    {
        id: 2,
        name: "Priya Patel",
        city: "Ahmedabad",
        image: "/testimonials/user2.jpg",
        review:
            "I created a beautiful biodata in less than five minutes. The PDF quality was excellent and looked professionally designed.",
    },
    {
        id: 3,
        name: "Aman Verma",
        city: "Lucknow",
        image: "/testimonials/user3.jpg",
        review:
            "The AI-generated layout saved me so much time. I didn't have to edit anything—just filled in my details and downloaded it.",
    },
];

function Testimonials() {
    return (
        <section className="bg-slate-100 py-28">
            <div className="mx-auto max-w-7xl px-8">

                {/* Header */}

                <div className="mx-auto max-w-3xl text-center">

                    <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
                        Customer Reviews
                    </span>

                    <h2 className="mt-6 text-5xl font-extrabold text-slate-900">
                        Trusted by
                        <span className="text-blue-600">
                            {" "}Thousands of Users
                        </span>
                    </h2>

                    <p className="mt-6 text-lg leading-8 text-slate-600">
                        Users across India use VivahCraft to create
                        professional marriage biodata PDFs in minutes.
                    </p>

                </div>

                {/* Testimonial Cards */}

                <div className="mt-20 grid gap-10 md:grid-cols-2 xl:grid-cols-3">

                    {testimonials.map((testimonial) => (
                        <div
                            key={testimonial.id}
                            className="rounded-3xl bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
                        >

                            {/* Stars */}

                            <div className="mb-6 text-xl text-yellow-400">
                                ★★★★★
                            </div>

                            {/* Review */}

                            <p className="text-lg leading-8 text-slate-600">
                                "{testimonial.review}"
                            </p>

                            {/* User */}

                            <div className="mt-8 flex items-center">

                                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-blue-100 text-xl font-bold text-blue-700">
                                    {testimonial.name.charAt(0)}
                                </div>

                                <div className="ml-4">

                                    <h4 className="text-lg font-bold text-slate-900">
                                        {testimonial.name}
                                    </h4>

                                    <p className="text-slate-500">
                                        {testimonial.city}
                                    </p>

                                </div>

                            </div>

                        </div>
                    ))}

                </div>

                {/* Review CTA */}

                <div className="mt-20 rounded-3xl bg-white p-10 text-center shadow-lg">

                    <h3 className="text-3xl font-bold text-slate-900">
                        Created Your Biodata with VivahCraft?
                    </h3>

                    <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-slate-600">
                        We'd love to hear about your experience. Your feedback
                        helps us improve VivahCraft and helps others learn about
                        our marriage biodata creation service.
                    </p>

                    <Link
                        to="/writeReview"
                        className="mt-8 inline-flex items-center rounded-xl bg-blue-600 px-8 py-4 text-lg font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-blue-700 hover:shadow-xl"
                    >
                        ⭐ Share Your Experience
                    </Link>

                </div>

                {/* Bottom Stats */}

                <div className="mt-24 grid gap-8 rounded-3xl bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 p-10 text-center text-white md:grid-cols-4">

                    <div>
                        <h3 className="text-4xl font-extrabold">
                            2K+
                        </h3>

                        <p className="mt-2 text-slate-300">
                            Biodatas Created
                        </p>
                    </div>

                    <div>
                        <h3 className="text-4xl font-extrabold">
                            4.9★
                        </h3>

                        <p className="mt-2 text-slate-300">
                            Average Rating
                        </p>
                    </div>

                    <div>
                        <h3 className="text-4xl font-extrabold">
                            10+
                        </h3>

                        <p className="mt-2 text-slate-300">
                            Premium Templates
                        </p>
                    </div>

                    <div>
                        <h3 className="text-4xl font-extrabold">
                            99%
                        </h3>

                        <p className="mt-2 text-slate-300">
                            Customer Satisfaction
                        </p>
                    </div>

                </div>

            </div>
        </section>
    );
}

export default Testimonials;