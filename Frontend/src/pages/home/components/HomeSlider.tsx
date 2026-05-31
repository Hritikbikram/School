import {useEffect, useState} from "react";
import pic1 from "../../../assets/Pic1.jpg";
import pic2 from "../../../assets/Pic2.jpg";
import pic3 from "../../../assets/Pic3.jpg";
import pic4 from "../../../assets/Pic4.jpg";

const images = [pic1, pic2, pic3, pic4];

export default function HomeSlider() {
    const [current, setCurrent] = useState(0);

    // Auto slide (optional)
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
        }, 4000);

        return () => clearInterval(timer);
    }, []);

    const prevSlide = () => {
        setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    };

    const nextSlide = () => {
        setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    };

    return (
        <div className="relative w-full  mx-auto overflow-hidden rounded-xl shadow-lg">

            {/* SLIDES */}
            <div
                className="flex transition-transform duration-700 ease-in-out"
                style={{transform: `translateX(-${current * 100}%)`}}
            >
                {images.map((img, index) => (
                    <img
                        key={index}
                        src={img}
                        alt={`slide-${index}`}
                        className="w-full flex-shrink-0 h-[400px] object-cover"
                    />
                ))}
            </div>

            {/* LEFT BUTTON */}
            <button
                onClick={prevSlide}
                className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black"
            >
                ‹
            </button>

            {/* RIGHT BUTTON */}
            <button
                onClick={nextSlide}
                className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black"
            >
                ›
            </button>

            {/* DOTS */}
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
                {images.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrent(index)}
                        className={`w-2.5 h-2.5 rounded-full transition ${
                            current === index ? "bg-white" : "bg-white/50"
                        }`}
                    />
                ))}
            </div>
        </div>
    );
}