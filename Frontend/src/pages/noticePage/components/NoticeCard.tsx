export default function NoticeCard({item}: any) {
    return (
        <div className="relative rounded-xl overflow-hidden shadow-md group">

            {/* IMAGE */}
            <img
                src={item.image}
                alt={item.title}
                className="w-full h-48 object-cover group-hover:scale-105 transition duration-300"
            />

            {/* DARK OVERLAY */}
            <div className="absolute inset-0 bg-black/40"></div>

            {/* TITLE ON TOP */}
            <div className="absolute bottom-0 left-0 right-0 p-4">
                <h3 className="text-white font-semibold text-sm md:text-base">
                    {item.title}
                </h3>
            </div>

        </div>
    );
}