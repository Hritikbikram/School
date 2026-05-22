const images = [
    "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1727947248592-77b80a8d3a3a?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1200&auto=format&fit=crop",
];

export default function GalleryPage() {
    return (
        <section className="mx-auto max-w-6xl px-4 py-10">
            <h1 className="text-3xl font-bold">Gallery</h1>
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