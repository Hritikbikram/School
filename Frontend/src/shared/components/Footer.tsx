export default function Footer() {
    return (
        <footer className="bg-gray-900 text-gray-300 mt-16">
            <div className="max-w-7xl mx-auto px-6 py-12">

                {/* TOP GRID */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

                    {/* BRAND */}
                    <div>
                        <h2 className="text-white text-lg font-semibold">
                             Shree Jwala Secondary School                        </h2>
                        <p className="mt-3 text-sm text-gray-400 leading-relaxed">
                            Providing quality education with a focus on academic excellence,
                            discipline, and holistic development.
                        </p>
                    </div>

                    {/* QUICK LINKS */}
                    <div>
                        <h3 className="text-white font-medium mb-4">Quick Links</h3>
                        <ul className="space-y-2 text-sm">
                            <li><a className="hover:text-white transition" href="/">Home</a></li>
                            <li><a className="hover:text-white transition" href="/about">About</a></li>
                            <li><a className="hover:text-white transition" href="/gallery">Gallery</a></li>
                            <li><a className="hover:text-white transition" href="/contact">Contact</a></li>
                        </ul>
                    </div>

                    {/* CONTACT */}
                    <div>
                        <h3 className="text-white font-medium mb-4">Contact</h3>
                        <ul className="space-y-2 text-sm">
                            <li>📍  Nepal</li>
                            <li>📞 083-123456</li>
                            <li>📞 9876543210</li>
                            <li>✉️ info@name_school.com</li>
                        </ul>
                    </div>

                </div>

                {/* BOTTOM BAR */}
                <div className="mt-10 border-t border-gray-700 pt-6 flex flex-col md:flex-row items-center justify-between text-sm text-gray-500">

                    <p>© {new Date().getFullYear()} School_name. All rights reserved.</p>

                    <div className="flex gap-4 mt-4 md:mt-0">
                        <a className="hover:text-white transition" href="#">Privacy Policy</a>
                        <a className="hover:text-white transition" href="#">Terms</a>
                        <a className="hover:text-white transition" href="#">Support</a>
                    </div>

                </div>
            </div>
        </footer>
    );
}