type EventProps = {
    event: {
        title: string;
        date: string;
        location: string;
        image: string;
        description: string;
    };
};

export default function EventCard({event}: EventProps) {
    return (
        <div className="overflow-hidden rounded-xl bg-white shadow-sm border hover:shadow-md transition">

            <img
                src={event.image}
                alt={event.title}
                className="h-48 w-full object-cover"
            />

            <div className="p-5">

                <h3 className="text-lg font-semibold text-gray-800">
                    {event.title}
                </h3>

                <p className="mt-2 text-sm text-blue-600 font-medium">
                    📅 {event.date}
                </p>

                <p className="text-sm text-gray-500 mt-1">
                    📍 {event.location}
                </p>

                <p className="mt-3 text-sm text-gray-600 line-clamp-3">
                    {event.description}
                </p>

            </div>
        </div>
    );
}