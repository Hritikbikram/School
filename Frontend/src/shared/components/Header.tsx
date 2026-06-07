import {useState} from "react";
import {NavLink} from "react-router-dom";

const navLinkClass = ({isActive}: { isActive: boolean }) =>
    `rounded-md px-3 py-2 text-sm font-medium transition ${
        isActive
            ? "bg-blue-100 text-blue-800"
            : "text-gray-700 hover:bg-gray-100 hover:text-gray-900"
    }`;

const aboutItems = [
    {label: "विद्यालय परिचय", to: "/about"},
    {label: "विद्यालय परिवार", to: "/team"},
];

const pages = [
    {label: "गृहपृष्ठ", to: "/"},
    {label: "ग्यालरी", to: "/gallery"},
    {label: "कार्यक्रम", to: "/events"},
    {label: "सूचना पाटी", to: "/notices"},
    {label: "सम्पर्क", to: "/contact"},
];

export default function Header() {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [aboutOpen, setAboutOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/95 backdrop-blur">

            <div className="mx-auto flex h-16 w-full max-w-7xl items-center px-4 sm:px-6 lg:px-8">

                {/* LOGO */}
                <NavLink
                    to="/"
                    className="text-lg md:text-xl font-semibold tracking-tight text-gray-900"
                >
                    श्री ज्वाला माध्यमिक विद्यालय
                </NavLink>

                {/* DESKTOP MENU */}
                <div className="hidden md:flex flex-1 justify-center items-center gap-1">

                    {/* HOME */}
                    <NavLink to="/" className={navLinkClass} end>
                        गृहपृष्ठ
                    </NavLink>

                    {/* SCHOOL DROPDOWN */}
                    <div className="relative">

                        <button
                            type="button"
                            className="rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                            onClick={() => setAboutOpen((prev) => !prev)}
                        >
                            विद्यालय ▾
                        </button>

                        {aboutOpen && (
                            <div
                                className="absolute left-0 top-full mt-2 w-48 rounded-md border border-gray-200 bg-white p-1 shadow-lg z-50">

                                {aboutItems.map((item) => (
                                    <NavLink
                                        key={item.to}
                                        to={item.to}
                                        className="block rounded-md px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                                        onClick={() => setAboutOpen(false)}
                                    >
                                        {item.label}
                                    </NavLink>
                                ))}

                            </div>
                        )}

                    </div>

                    {/* OTHER PAGES */}
                    {pages
                        .filter((page) => page.to !== "/")
                        .map((page) => (
                            <NavLink
                                key={page.to}
                                to={page.to}
                                className={navLinkClass}
                            >
                                {page.label}
                            </NavLink>
                        ))}

                </div>

                {/* MOBILE BUTTON */}
                <button
                    type="button"
                    className="ml-auto inline-flex items-center rounded-md border border-gray-300 bg-white p-2 text-gray-700 md:hidden"
                    onClick={() => setMobileOpen((prev) => !prev)}
                >
                    <svg
                        className="h-5 w-5"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M4 6h16M4 12h16M4 18h16"
                        />
                    </svg>
                </button>

            </div>

            {/* MOBILE MENU */}
            {mobileOpen && (
                <nav className="border-t border-gray-200 bg-white px-4 pb-4 pt-3 md:hidden">

                    <div className="flex flex-col gap-1">

                        {/* HOME */}
                        <NavLink
                            to="/"
                            className={navLinkClass}
                            end
                            onClick={() => setMobileOpen(false)}
                        >
                            गृहपृष्ठ
                        </NavLink>

                        {/* SCHOOL DROPDOWN */}
                        <div className="border-t border-gray-200 pt-2 mt-2">

                            <button
                                className="w-full flex items-center justify-between px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-md"
                                onClick={() => setAboutOpen((prev) => !prev)}
                            >
                                विद्यालय
                                <span>{aboutOpen ? "−" : "+"}</span>
                            </button>

                            {aboutOpen && (
                                <div className="ml-3 flex flex-col">

                                    {aboutItems.map((item) => (
                                        <NavLink
                                            key={item.to}
                                            to={item.to}
                                            className={navLinkClass}
                                            onClick={() => {
                                                setMobileOpen(false);
                                                setAboutOpen(false);
                                            }}
                                        >
                                            {item.label}
                                        </NavLink>
                                    ))}

                                </div>
                            )}

                        </div>

                        {/* OTHER PAGES */}
                        {pages
                            .filter((page) => page.to !== "/")
                            .map((page) => (
                                <NavLink
                                    key={page.to}
                                    to={page.to}
                                    className={navLinkClass}
                                    onClick={() => setMobileOpen(false)}
                                >
                                    {page.label}
                                </NavLink>
                            ))}

                    </div>

                </nav>
            )}
        </header>
    );
}