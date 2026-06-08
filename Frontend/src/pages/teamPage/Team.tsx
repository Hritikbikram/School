import principal from "../../assets/principal.jpeg"
import agriculture from "../../assets/agriculture.jpg"
import accounting from "../../assets/accounting.jpg"

const teamMembers = [
    {
        name: "राम बहादुर थापा",
        position: "प्रधानाध्यापक",
        phone: "९८५८०५०६१३",
        image: principal,
    },
    {
        name: "मनसुन दाहाल",
        position: "९–१२ कृषि कार्यक्रम संयोजक",
        phone: "९८४८१००३०४",
        image: agriculture,
    },

    {
        name: "तेज बहादुर थापा",
        position: "लेखापाल",
        phone: "९८५८०६१७२०",
        image: accounting,
    },
];

export default function Team() {
    return (
        <section className="py-12 bg-gray-50">

            <div className="max-w-5xl mx-auto px-4">

                {/* TITLE */}
                <div className="text-center mb-10">

                    <h1 className="text-3xl font-bold text-gray-800">
                        विद्यालय टोली
                    </h1>

                    <p className="text-gray-500 mt-3 text-sm">
                        विद्यालय सञ्चालन तथा शैक्षिक नेतृत्वमा संलग्न प्रमुख व्यक्ति
                    </p>

                </div>

                {/* TEAM GRID */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

                    {teamMembers.map((member, index) => (
                        <div
                            key={index}
                            className="bg-white border rounded-2xl shadow-sm p-6 flex items-center gap-5 hover:shadow-md transition"
                        >

                            {/* IMAGE */}
                            <img
                                src={member.image}
                                alt={member.name}
                                className="w-16 h-16 rounded-full object-cover border"
                            />

                            {/* INFO */}
                            <div>

                                <h2 className="text-lg font-semibold text-gray-800">
                                    {member.name}
                                </h2>

                                <p className="text-gray-600 text-sm mt-1">
                                    {member.position}
                                </p>

                                <a
                                    href={`tel:${member.phone}`}
                                    className="text-blue-600 text-sm mt-2 inline-block hover:text-blue-700"
                                >
                                    {member.phone}
                                </a>

                            </div>

                        </div>
                    ))}

                </div>

            </div>

        </section>
    );
}