export default function Footer() {
    return (
        <footer className="bg-gray-900 text-gray-300 mt-16">
            <div className="max-w-7xl mx-auto px-6 py-12">

                {/* TOP GRID */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

                    {/* SCHOOL INFO */}
                    <div>
                        <h2 className="text-white text-xl font-semibold">
                            श्री ज्वाला माध्यमिक विद्यालय
                        </h2>

                        <p className="mt-4 text-sm text-gray-400 leading-relaxed">
                            भगवतीमाई गाउँपालिका–०१, बेस्तडा, दैलेखमा
                            अवस्थित एक अग्रणी सामुदायिक विद्यालय।
                            विद्यालयमा बाल विकासदेखि कक्षा १२ सम्म
                            गुणस्तरीय शिक्षा प्रदान गरिन्छ। साथै
                            बाली विज्ञान (कृषि) प्राविधिक धार समेत
                            सञ्चालनमा रहेको छ।
                        </p>
                    </div>

                    {/* QUICK LINKS */}
                    <div>
                        <h3 className="text-white font-medium mb-4">
                            द्रुत लिङ्कहरू
                        </h3>

                        <ul className="space-y-3 text-sm">
                            <li>
                                <a
                                    href="/"
                                    className="hover:text-white transition"
                                >
                                    गृहपृष्ठ
                                </a>
                            </li>

                            <li>
                                <a
                                    href="/about"
                                    className="hover:text-white transition"
                                >
                                    हाम्रो बारेमा
                                </a>
                            </li>

                            <li>
                                <a
                                    href="/events"
                                    className="hover:text-white transition"
                                >
                                    कार्यक्रमहरू
                                </a>
                            </li>

                            <li>
                                <a
                                    href="/gallery"
                                    className="hover:text-white transition"
                                >
                                    ग्यालरी
                                </a>
                            </li>

                            <li>
                                <a
                                    href="/contact"
                                    className="hover:text-white transition"
                                >
                                    सम्पर्क
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* CONTACT INFO */}
                    <div>
                        <h3 className="text-white font-medium mb-4">
                            सम्पर्क जानकारी
                        </h3>

                        <ul className="space-y-3 text-sm text-gray-400">

                            <li>
                                📍 भगवतीमाई गाउँपालिका–०१,
                                बेस्तडा, दैलेख
                            </li>

                            <li>
                                👨‍🏫 <span className="font-medium text-gray-300">
                                    प्रधानाध्यापक:
                                </span>{" "}
                                राम बहादुर थापा
                            </li>

                            <li>
                                📞 ९८५८०५०६१३
                            </li>

                            <li>
                                🌾 <span className="font-medium text-gray-300">
                                    ९–१२ कृषि कार्यक्रम संयोजक:
                                </span>{" "}
                                मनसुन दाहाल
                            </li>

                            <li>
                                📞 ९८४८१००३०४
                            </li>

                            <li>
                                ✉️
                                <a
                                    href="mailto:jwalass2041@gmail.com"
                                    className="ml-2 hover:text-white transition"
                                >
                                    jwalass2041@gmail.com
                                </a>
                            </li>

                        </ul>
                    </div>

                </div>

                {/* DIVIDER */}
                <div className="mt-10 border-t border-gray-700 pt-6">

                    <div className="flex flex-col md:flex-row items-center justify-between gap-4">

                        <p className="text-sm text-gray-500 text-center md:text-left">
                            © {new Date().getFullYear()} श्री ज्वाला माध्यमिक विद्यालय ।
                            सर्वाधिकार सुरक्षित।
                        </p>

                        <div className="flex gap-6 text-sm text-gray-500">
                            <a
                                href="/about"
                                className="hover:text-white transition"
                            >
                                विद्यालय परिचय
                            </a>

                            <a
                                href="/contact"
                                className="hover:text-white transition"
                            >
                                सम्पर्क
                            </a>

                            <a
                                href="/gallery"
                                className="hover:text-white transition"
                            >
                                ग्यालरी
                            </a>
                        </div>

                    </div>

                </div>

            </div>
        </footer>
    );
}