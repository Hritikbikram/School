export default function TeamCard({member}: any) {
    return (
        <div
            className="bg-white rounded-xl shadow-sm hover:shadow-md transition p-6 text-center border-t-4 border-b-4 border-blue-500">
            <img
                src={member.image}
                alt={member.name}
                className="w-24 h-24 mx-auto rounded-full object-cover border-4 border-blue-100"
            />

            <h3 className="mt-4 text-lg font-semibold text-gray-800">
                {member.name}
            </h3>

            <p className="text-sm text-gray-500">{member.position}</p>
        </div>
    );
}