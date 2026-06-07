import {Link} from "react-router-dom";
import EventCard from "./EventCard";

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

export default function EventsPreview() {
    return (
        <section className="mt-14">

            <div className="mb-6 flex items-center justify-between">

                <div>

                    <h2 className="text-2xl font-bold text-gray-800">
                        आगामी कार्यक्रमहरू
                    </h2>

                    <p className="text-sm text-gray-500 mt-1">
                        विद्यालयका कार्यक्रम तथा गतिविधिहरूको जानकारी
                    </p>

                </div>

                <Link
                    to="/events"
                    className="rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 transition"
                >
                    सबै हेर्नुहोस् →
                </Link>

            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {events.slice(0, 3).map((event, index) => (
                    <EventCard key={index} event={event}/>
                ))}
            </div>

        </section>
    );
}