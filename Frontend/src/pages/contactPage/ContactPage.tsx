export default function ContactPage() {
    return (
        <section className="bg-gray-50 py-12">
            <div className="mx-auto max-w-6xl px-4">

                {/* PAGE TITLE */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-gray-900">
                        Contact Us
                    </h1>

                    <p className="mt-3 text-gray-600">
                        We'd love to hear from you. Reach out for admissions,
                        inquiries, or any school-related information.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

                    {/* LEFT SIDE - CONTACT INFO */}
                    <div className="bg-white rounded-2xl shadow-sm border p-8">

                        <h2 className="text-2xl font-bold text-gray-800 mb-6">
                            Get In Touch
                        </h2>

                        <div className="space-y-6">

                            {/* ADDRESS */}
                            <div className="flex items-start gap-4">
                                <div className="text-2xl">📍</div>

                                <div>
                                    <h3 className="font-semibold text-gray-800">
                                        Address
                                    </h3>

                                    <p className="text-gray-600 text-sm mt-1">
                                        Shree Jwala Secondary School <br/>
                                        Kathmandu, Nepal
                                    </p>
                                </div>
                            </div>

                            {/* PHONE */}
                            <div className="flex items-start gap-4">
                                <div className="text-2xl">📞</div>

                                <div>
                                    <h3 className="font-semibold text-gray-800">
                                        Phone Number
                                    </h3>

                                    <p className="text-gray-600 text-sm mt-1">
                                        +977 9812345678
                                    </p>
                                </div>
                            </div>

                            {/* EMAIL */}
                            <div className="flex items-start gap-4">
                                <div className="text-2xl">✉️</div>

                                <div>
                                    <h3 className="font-semibold text-gray-800">
                                        Email Address
                                    </h3>

                                    <p className="text-gray-600 text-sm mt-1">
                                        info@jwalaschool.edu.np
                                    </p>
                                </div>
                            </div>

                            {/* SOCIAL */}
                            <div className="flex items-start gap-4">
                                <div className="text-2xl">🌐</div>

                                <div>
                                    <h3 className="font-semibold text-gray-800">
                                        Social Media
                                    </h3>

                                    <a
                                        href="#"
                                        className="inline-block mt-2 text-blue-600 hover:text-blue-700 text-sm font-medium"
                                    >
                                        Facebook Page →
                                    </a>
                                </div>
                            </div>

                        </div>
                    </div>

                    {/* RIGHT SIDE - CONTACT FORM */}
                    <div className="bg-white rounded-2xl shadow-sm border p-8">

                        <h2 className="text-2xl font-bold text-gray-800 mb-6">
                            Send a Message
                        </h2>

                        <form className="space-y-5">

                            {/* NAME */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Full Name
                                </label>

                                <input
                                    type="text"
                                    placeholder="Enter your name"
                                    className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                                />
                            </div>

                            {/* EMAIL */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Email Address
                                </label>

                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                                />
                            </div>

                            {/* SUBJECT */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Subject
                                </label>

                                <input
                                    type="text"
                                    placeholder="Subject"
                                    className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                                />
                            </div>

                            {/* MESSAGE */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Message
                                </label>

                                <textarea
                                    rows={5}
                                    placeholder="Write your message..."
                                    className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                                />
                            </div>

                            {/* BUTTON */}
                            <button
                                type="submit"
                                className="w-full rounded-lg bg-blue-600 px-5 py-3 text-white font-medium hover:bg-blue-700 transition"
                            >
                                Send Message
                            </button>

                        </form>
                    </div>

                </div>
            </div>
        </section>
    );
}