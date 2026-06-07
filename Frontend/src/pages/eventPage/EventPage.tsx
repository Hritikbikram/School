import EventCard from "./components/EventCard";

const events = [
    {
        title: "वार्षिक खेलकुद सप्ताह",
        date: "--/--/----",
        location: "विद्यालय मैदान",
        image: "https://images.unsplash.com/flagged/photo-1556802675-82b01f03ae15?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        description:
            "विद्यार्थीहरूले विभिन्न खेलकुद प्रतियोगिता तथा गतिविधिहरूमा भाग लिनेछन्।",
    },
    {
        title: "विद्यालय प्रदर्शनी",
        date: "--/--/----",
        location: "मुख्य हल",
        image: "https://images.unsplash.com/photo-1763735134267-87caa7ad59db?q=80&w=1219&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA4fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        description:
            "विद्यार्थीहरूले आफ्ना नवीन परियोजना तथा प्रयोगहरू प्रदर्शन गर्नेछन्।",
    },
    {
        title: "अभिभावक बैठक",
        date: "--/--/----",
        location: "मुख्य हल",
        image: "https://images.unsplash.com/photo-1529209076408-5a115ec9f1c6?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA4fDB8MHxwaG90by1lfHx8fGVufDB8fHx8fA%3D%3D",
        description:
            "विद्यार्थीहरूको प्रगति तथा विद्यालय गतिविधिहरू सम्बन्धी छलफल गरिनेछ।",
    },
];

export default function EventsPage() {
    return (
        <section className="bg-gray-50 py-12">

            <div className="mx-auto max-w-7xl px-4">

                {/* TITLE */}
                <div className="text-center mb-10">

                    <h1 className="text-4xl font-bold text-gray-900">
                        विद्यालय कार्यक्रमहरू
                    </h1>

                    <p className="mt-3 text-gray-600">
                        आगामी तथा विगतका विद्यालय गतिविधिहरू हेर्नुहोस्
                    </p>

                </div>

                {/* EVENTS GRID */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

                    {events.map((event, index) => (
                        <EventCard key={index} event={event}/>
                    ))}

                </div>

            </div>

        </section>
    );
}