import pic1 from "../../assets/Pic1.jpg";
import pic2 from "../../assets/Pic2.jpg";
import pic3 from "../../assets/Pic3.jpg";
import pic4 from "../../assets/Pic4.jpg";

const images = [pic1, pic2, pic3, pic4];

export default function GalleryPage() {
    return (
        <section className="mx-auto max-w-6xl px-4 py-10">
            <h1 className="text-3xl font-bold">ग्यालरी</h1>
            <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
                {images.map((src, index) => (
                    <img
                        key={src}
                        src={src}
                        alt={`School gallery ${index + 1}`}
                        className="h-56 w-full rounded object-cover"
                    />
                ))}
            </div>
        </section>
    );
}