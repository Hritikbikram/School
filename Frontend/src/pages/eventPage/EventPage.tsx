import EventCard from "./components/EventCard";

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

export default function EventsPage() {
    return (
        <section className="bg-gray-50 py-12">

            <div className="mx-auto max-w-7xl px-4">

                <div className="text-center mb-10">
                    <h1 className="text-4xl font-bold text-gray-900">
                        School Events
                    </h1>

                    <p className="mt-3 text-gray-600">
                        Explore upcoming and recent school activities
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {events.map((event, index) => (
                        <EventCard key={index} event={event}/>
                    ))}
                </div>

            </div>

        </section>
    );
}