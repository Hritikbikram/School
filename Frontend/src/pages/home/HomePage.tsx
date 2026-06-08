import HomeSlider from "./components/HomeSlider.tsx";
import {Box} from "@mui/material";
import TeamCard from "../teamPage/TeamCard.tsx";
import {Link} from "react-router-dom";
import NoticesPreview from "../noticePage/components/NoticePreview.tsx";
import EventsPreview from "../eventPage/components/EventPreview.tsx";
import principal from "../../assets/principal.jpeg";
import agriculture from "../../assets/agriculture.jpg";
import accounting from "../../assets/accounting.jpg";

const teamMembers = [
    {
        name: "राम बहादुर थापा",
        position: "प्रधानाध्यापक",
        phone: "९८५८०५०६१३",
        image: principal,
    },
    {
        name: "मनसुन दाहाल",
        position: "९–१२ कृषि कार्यक्रम संयोजक",
        phone: "९८४८१००३०४",
        image: agriculture,
    },

    {
        name: "तेज बहादुर थापा",
        position: "लेखापाल",
        phone: "९८५८०६१७२०",
        image: accounting,
    },
];

export default function HomePage() {
    return (
        <section className="mx-auto max-w-7xl px-4 py-10">

            {/* HERO SLIDER */}
            <HomeSlider/>

            {/* TESTIMONIALS + UPDATES */}
            <Box className="my-6 grid grid-cols-1 md:grid-cols-1 gap-6 items-stretch">

                {/* LEFT - TESTIMONIALS */}
                <div>
                    {/* <TestimonialsSlider/> */}
                </div>

                {/* RIGHT - UPDATES PANEL */}
                <div className="bg-white shadow-md rounded-xl p-6 border">

                    <h2 className="text-lg font-bold text-gray-800 mb-4">
                        नवीनतम अपडेटहरू
                    </h2>

                    <div className="space-y-4 text-sm text-gray-700">

                        <div className="p-3 bg-blue-50 rounded-md">
                            📢 २०२६ शैक्षिक सत्रका लागि भर्ना खुला
                        </div>

                        <div className="p-3 bg-gray-50 rounded-md">
                            🏫 नर्सरी देखि कक्षा १० सम्म अध्ययन सुविधा
                        </div>

                        <div className="p-3 bg-gray-50 rounded-md">
                            📅 वार्षिक खेलकुद सप्ताह चाँडै हुँदैछ
                        </div>

                        <div className="p-3 bg-gray-50 rounded-md">
                            📞 सम्पर्क: ९८१२३४५६७८
                        </div>

                    </div>

                </div>

            </Box>

            {/* NOTICES */}
            <NoticesPreview/>

            {/* EVENTS */}
            <EventsPreview/>

            {/* TEAM PREVIEW */}
            <div className="mt-12">

                <div className="flex justify-between items-center mb-6">

                    <h2 className="text-xl font-bold text-gray-800">
                        विद्यालय टोली
                    </h2>

                    <Link
                        to="/team"
                        className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 transition"
                    >
                        सबै हेर्नुहोस् →
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