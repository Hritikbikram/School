export default function AboutPage() {
    return (
        <section className="bg-gray-50 py-12">
            <div className="mx-auto max-w-6xl px-4 space-y-16">

                {/* HERO SECTION */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

                    {/* TEXT */}
                    <div>
                        <h1 className="text-4xl font-bold text-gray-900">
                            About Our School
                        </h1>

                        <p className="mt-5 text-gray-600 leading-relaxed">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                            nisi ut aliquip ex ea commodo consequat.
                        </p>

                        <p className="mt-4 text-gray-600 leading-relaxed">
                            Duis aute irure dolor in reprehenderit in voluptate velit esse
                            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                            cupidatat non proident, sunt in culpa qui officia deserunt mollit
                            anim id est laborum.
                        </p>
                    </div>

                    {/* IMAGE */}
                    <div>
                        <img
                            src="https://images.unsplash.com/photo-1727947248592-77b80a8d3a3a?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt="School"
                            className="rounded-2xl shadow-lg object-cover w-full h-[350px]"
                        />
                    </div>

                </div>

                {/* SCHOOL HISTORY */}
                <div className="bg-white rounded-2xl shadow-sm p-8 border">
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">
                        School History
                    </h2>

                    <p className="text-gray-600 leading-relaxed">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.
                        Sed nisi. Nulla quis sem at nibh elementum imperdiet.
                    </p>

                    <p className="mt-4 text-gray-600 leading-relaxed">
                        Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue
                        semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla.
                    </p>
                </div>

                {/* VISION + MISSION */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                    {/* VISION */}
                    <div className="bg-white rounded-2xl shadow-sm p-8 border">
                        <div className="text-4xl mb-4">🎯</div>

                        <h2 className="text-2xl font-bold text-gray-800 mb-3">
                            Our Vision
                        </h2>

                        <p className="text-gray-600 leading-relaxed">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Pellentesque habitant morbi tristique senectus et netus et malesuada.
                        </p>
                    </div>

                    {/* MISSION */}
                    <div className="bg-white rounded-2xl shadow-sm p-8 border">
                        <div className="text-4xl mb-4">📘</div>

                        <h2 className="text-2xl font-bold text-gray-800 mb-3">
                            Our Mission
                        </h2>

                        <p className="text-gray-600 leading-relaxed">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet.
                        </p>
                    </div>

                </div>

                {/* SCHOOL AREA / FACILITIES */}
                <div>
                    <div className="text-center mb-10">
                        <h2 className="text-3xl font-bold text-gray-800">
                            School Facilities
                        </h2>

                        <p className="mt-3 text-gray-500">
                            Providing students with a complete learning environment
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">

                        <div className="bg-white p-6 rounded-xl shadow-sm border text-center">
                            <div className="text-4xl mb-3">🏫</div>
                            <h3 className="font-semibold text-gray-800">
                                Spacious
                            </h3>
                        </div>

                        <div className="bg-white p-6 rounded-xl shadow-sm border text-center">
                            <div className="text-4xl mb-3">📚</div>
                            <h3 className="font-semibold text-gray-800">
                                Library
                            </h3>
                        </div>

                        <div className="bg-white p-6 rounded-xl shadow-sm border text-center">
                            <div className="text-4xl mb-3">⚽</div>
                            <h3 className="font-semibold text-gray-800">
                                Sports Ground
                            </h3>
                        </div>

                        <div className="bg-white p-6 rounded-xl shadow-sm border text-center">
                            <div className="text-4xl mb-3">💻</div>
                            <h3 className="font-semibold text-gray-800">
                                Computer Lab
                            </h3>
                        </div>

                    </div>
                </div>

            </div>
        </section>
    );
}