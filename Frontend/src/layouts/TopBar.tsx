import {Link} from "react-router-dom";
import {Facebook, Instagram, YouTube} from "@mui/icons-material";

export default function TopBar() {
    return (
        <div className="w-full bg-black text-white text-sm">

            <div className="mx-auto max-w-7xl px-4 py-2 flex items-center justify-between">

                {/* LEFT - Social icons */}
                <div className="flex items-center gap-3">

                    <a href="#" className="hover:text-blue-400 transition">
                        <Facebook fontSize="small"/>
                    </a>

                    <a href="#" className="hover:text-pink-400 transition">
                        <Instagram fontSize="small"/>
                    </a>

                    <a href="#" className="hover:text-red-400 transition">
                        <YouTube fontSize="small"/>
                    </a>

                </div>

                {/* RIGHT - Quick links */}
                <div className="flex items-center gap-5 text-xs">
                    <Link to="/admission" className="hover:text-gray-300 transition">
                        भर्ना
                    </Link>

                    <Link to="/calendar" className="hover:text-gray-300 transition">
                        शैक्षिक पात्रो
                    </Link>

                    <Link to="/notices" className="hover:text-gray-300 transition">
                        सूचना
                    </Link>

                </div>

            </div>

        </div>
    );
}