import {Link} from "react-router-dom";

function NotFoundPage() {
    return (
        <section className="mx-auto max-w-6xl px-4 py-10 text-center">
            <h1 className="text-4xl font-bold">404</h1>
            <p className="mt-2 text-gray-700">Page not found.</p>
            <Link
                to="/"
                className="mt-6 inline-block rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
            >
                Back to Home
            </Link>
        </section>
    );
}

export default NotFoundPage;