import {Link} from "react-router-dom";
import EventCard from "./EventCard";

const events = [
    {
        title: "Annual Sports Week",
        date: "August 20, 2026",
        location: "School Ground",
        image: "https://images.unsplash.com/flagged/photo-1556802675-82b01f03ae15?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        description:
            "Students will participate in different sports competitions and activities.",
    },
    {
        title: "Exhibition",
        date: "September 10, 2026",
        location: "Main Hall",
        image: "https://images.unsplash.com/photo-1763735134267-87caa7ad59db?q=80&w=1219&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        description:
            "Students showcase innovative projects and experiments.",
    },
    {
        title: "Parents Meeting",
        date: "October 5, 2026",
        location: "Main Hall",
        image: "https://images.unsplash.com/photo-1529209076408-5a115ec9f1c6?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        description:
            "Discussion regarding student progress and school activities.",
    },
];

export default function EventsPreview() {
    return (
        <section className="mt-14">

            <div className="mb-6 flex items-center justify-between">

                <div>
                    <h2 className="text-2xl font-bold text-gray-800">
                        Upcoming Events
                    </h2>

                    <p className="text-sm text-gray-500 mt-1">
                        Stay updated with school programs and activities
                    </p>
                </div>

                <Link
                    to="/events"
                    className="rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700"
                >
                    View All →
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