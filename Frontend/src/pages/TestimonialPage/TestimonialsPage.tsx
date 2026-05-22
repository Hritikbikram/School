import TestimonialCard from "./components/TestimonialCard.tsx";

const testimonialsPage = [
    {
        name: "Student",
        position: "Grade 10 Student",
        image: "https://i.pravatar.cc/100?img=12",
        message: "This school helped me improve my confidence and academic performance.",
    },
    {
        name: "Parent",
        position: "Parent",
        image: "https://i.pravatar.cc/100?img=32",
        message: "Excellent teaching environment and caring staff.",
    },
    {
        name: "Alumni",
        position: "Old Student",
        image: "https://i.pravatar.cc/100?img=45",
        message: "Great foundation for my career and discipline.",
    },
    {
        name: "Guardian",
        position: "Parent",
        image: "https://i.pravatar.cc/100?img=50",
        message: "Very satisfied with school environment and teaching quality.",
    },
];

export default function TestimonialsPage() {
    return (
        <section className="py-12 bg-gray-50">
            <div className="max-w-6xl mx-auto px-4">

                <div className="text-center mb-10">
                    <h2 className="text-2xl font-bold text-gray-800">
                        All Testimonials
                    </h2>
                    <p className="text-gray-500 text-sm mt-2">
                        What students, parents and alumni say about us
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {testimonialsPage.map((item, index) => (
                        <TestimonialCard key={index} item={item}/>
                    ))}
                </div>

            </div>
        </section>
    );
}