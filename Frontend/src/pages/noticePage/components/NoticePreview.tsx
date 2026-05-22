import {Link} from "react-router-dom";
import NoticeCard from "./NoticeCard";

const notices = [
    {
        title: "Exam Routine Released",
        image: "https://images.unsplash.com/photo-1588072432836-e10032774350",
    },
    {
        title: "Admission Open 2026",
        image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644",
    },
    {
        title: "Sports Week Announcement",
        image: "https://images.unsplash.com/photo-1521412644187-c49fa049e84d",
    },
    {
        title: "Holiday Notice",
        image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b",
    },
];

export default function NoticesPreview() {
    return (
        <section className="py-12 bg-gray-50">
            <div className="max-w-6xl mx-auto px-4">

                {/* HEADER */}
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-xl font-bold text-gray-800">
                        Latest Notices
                    </h2>

                    <Link
                        to="/notices"
                        className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 "
                    >
                        View All →
                    </Link>
                </div>

                {/* GRID (LIMITED) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {notices.slice(0, 3).map((item, index) => (
                        <NoticeCard key={index} item={item}/>
                    ))}
                </div>

            </div>
        </section>
    );
}