import {createBrowserRouter} from "react-router-dom";
import PageLayout from "../layouts/pageLayout/PageLayout.tsx";
import HomePage from "../pages/home/HomePage.tsx";
import AboutPage from "../pages/aboutPage/AboutPage.tsx";
import ContactPage from "../pages/contactPage/ContactPage.tsx";
import GalleryPage from "../pages/gallery/GalleryPage.tsx";
import NotFoundPage from "../shared/NotFoundPage.tsx";
import TestimonialsPage from "../pages/TestimonialPage/TestimonialsPage.tsx";
import Team from "../pages/teamPage/Team.tsx";
import NoticesPage from "../pages/noticePage/NoticePage.tsx";
import EventsPage from "../pages/eventPage/EventPage.tsx";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <PageLayout/>,
        children: [
            {index: true, element: <HomePage/>},
            {path: "about", element: <AboutPage/>},
            {path: "contact", element: <ContactPage/>},
            {path: "gallery", element: <GalleryPage/>},
            {path: "testimonials", element: <TestimonialsPage/>},
            {path: "team", element: <Team/>},
            {path: "notices", element: <NoticesPage/>},
            {path: "events", element: <EventsPage/>}


        ],
    },
    {
        path: "*",
        element: <NotFoundPage/>
    }
]);