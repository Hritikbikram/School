import TeamCard from "./TeamCard";

const teamMembers = [
    {name: "Dr. Sita Sharma", position: "Principal", image: "https://i.pravatar.cc/300?img=47"},
    {name: "Ram Bahadur", position: "Vice Principal", image: "https://i.pravatar.cc/300?img=12"},
    {name: "Anita Koirala", position: "Science Teacher", image: "https://i.pravatar.cc/300?img=25"},
    {name: "Suresh Yadav", position: "Math Teacher", image: "https://i.pravatar.cc/300?img=33"},
];

export default function Team() {
    return (
        <section className="py-12 bg-gray-50">
            <div className="max-w-6xl mx-auto px-4">

                <div className="text-center mb-10">
                    <h2 className="text-2xl font-bold text-gray-800">School Team</h2>
                    <p className="text-gray-500 text-sm mt-2">
                        Dedicated professionals shaping the future of students
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                    {teamMembers.map((member, index) => (
                        <TeamCard key={index} member={member}/>
                    ))}
                </div>

            </div>
        </section>
    );
}