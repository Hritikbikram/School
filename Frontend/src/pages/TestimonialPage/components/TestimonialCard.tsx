export default function TestimonialCard({item}: any) {
    return (
        <div className="bg-white shadow-md rounded-xl p-6 border-t-4 border-b-4 border-blue-500 text-center">

            <img
                src={item.image}
                alt={item.name}
                className="w-16 h-16 mx-auto rounded-full object-cover border"
            />

            <h3 className="mt-3 text-lg font-semibold text-gray-800">
                {item.name}
            </h3>

            <p className="text-sm text-gray-500">{item.position}</p>

            <p className="mt-4 text-gray-600 text-sm leading-relaxed">
                “{item.message}”
            </p>

        </div>
    );
}