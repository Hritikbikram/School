import HomeSlider from "./components/HomeSlider.tsx";
import {Box} from "@mui/material";
import TeamCard from "../teamPage/TeamCard.tsx";
import {Link} from "react-router-dom";
import TestimonialsSlider from "../TestimonialPage/components/TestimonialSlider.tsx";
import NoticesPreview from "../noticePage/components/NoticePreview.tsx";
import EventsPreview from "../eventPage/components/EventPreview.tsx";

const teamMembers = [
    {name: "Dr. Sita Sharma", position: "Principal", image: "https://i.pravatar.cc/300?img=47"},
    {name: "Ram Bahadur", position: "Vice Principal", image: "https://i.pravatar.cc/300?img=12"},
    {name: "Anita Koirala", position: "Science Teacher", image: "https://i.pravatar.cc/300?img=25"},
    {name: "Suresh Yadav", position: "Math Teacher", image: "https://i.pravatar.cc/300?img=33"},
];


export default function HomePage() {
    return (
        <section className="mx-auto max-w-7xl px-4 py-10">
            <HomeSlider/>
            <Box className="my-6 grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">

                {/* LEFT - TESTIMONIALS */}
                <div>
                    <TestimonialsSlider/>
                </div>

                {/* RIGHT - INFO PANEL */}
                <div className="bg-white shadow-md rounded-xl p-6 border">

                    <h2 className="text-lg font-bold text-gray-800 mb-4">
                        Latest Updates
                    </h2>

                    <div className="space-y-4 text-sm text-gray-700">

                        <div className="p-3 bg-blue-50 rounded-md">
                            📢 Admission Open for 2026 Session
                        </div>

                        <div className="p-3 bg-gray-50 rounded-md">
                            🏫 Classes from Nursery to Grade 10
                        </div>

                        <div className="p-3 bg-gray-50 rounded-md">
                            📅 Annual Sports Week coming soon
                        </div>

                        <div className="p-3 bg-gray-50 rounded-md">
                            📞 Contact: 9812345678
                        </div>

                    </div>

                </div>

            </Box>
            <NoticesPreview/>

            <EventsPreview/>

            {/* TEAM PREVIEW SECTION */}
            <div className="mt-12">
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-xl font-bold text-gray-800">School Team</h2>

                    <Link to="/team"
                          className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 ">
                        View All →
                    </Link>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {teamMembers.slice(0, 3).map((member, index) => (
                        <TeamCard key={index} member={member}/>
                    ))}
                </div>
            </div>


        </section>
    );
}