import NoticeCard from "./components/NoticeCard.tsx";

const notices = [
    {
        title: "वार्षिक परीक्षाको तालिका प्रकाशित",
        image: "https://images.unsplash.com/photo-1529209076408-5a115ec9f1c6?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        title: "शैक्षिक सत्र २०८३ को भर्ना खुला",
        image: "https://images.unsplash.com/photo-1727947248592-77b80a8d3a3a?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        title: "खेलकुद सप्ताह सम्बन्धी सूचना",
        image: "https://images.unsplash.com/photo-1521412644187-c49fa049e84d",
    },
    {
        title: "सार्वजनिक बिदा सम्बन्धी सूचना",
        image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b",
    },
];

export default function NoticesPage() {
    return (
        <section className="py-12 bg-gray-50">

            <div className="max-w-6xl mx-auto px-4">

                {/* TITLE */}
                <div className="text-center mb-10">

                    <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
                        सूचना पाटी
                    </h1>

                    <p className="text-gray-500 mt-3">
                        विद्यालयका नवीनतम सूचना तथा घोषणाहरू
                    </p>

                </div>

                {/* GRID */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">

                    {notices.map((item, index) => (
                        <NoticeCard
                            key={index}
                            item={item}
                        />
                    ))}

                </div>

            </div>

        </section>
    );
}