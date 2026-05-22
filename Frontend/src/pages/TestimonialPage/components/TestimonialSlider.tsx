import {useEffect, useState} from "react";
import {Link} from "react-router-dom";

const testimonials = [
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
];

export default function TestimonialsSlider() {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrent((prev) =>
                prev === testimonials.length - 1 ? 0 : prev + 1
            );
        }, 5000);

        return () => clearInterval(timer);
    }, []);

    const item = testimonials[current];

    return (
        <div className="max-w-xl mx-auto relative">

            <div className="bg-white shadow-md rounded-xl p-6 border-t-4 border-b-4 border-blue-500 text-center">

                <img
                    src={item.image}
                    className="w-16 h-16 mx-auto rounded-full object-cover border"
                />

                <h3 className="mt-3 text-lg font-semibold text-gray-800">
                    {item.name}
                </h3>

                <p className="text-sm text-gray-500">{item.position}</p>

                <p className="mt-4 text-gray-600 text-sm">
                    “{item.message}”
                </p>

            </div>

            {/* DOTS */}
            <div className="flex justify-center gap-2 mt-4">
                {testimonials.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrent(index)}
                        className={`w-2.5 h-2.5 rounded-full ${
                            current === index ? "bg-blue-600" : "bg-gray-300"
                        }`}
                    />
                ))}
            </div>

            {/* VIEW ALL BUTTON */}
            <div className="flex justify-center mt-4">
                <Link
                    to="/testimonials"
                    className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 transition"
                >
                    View All Testimonials
                </Link>
            </div>

        </div>
    );
}