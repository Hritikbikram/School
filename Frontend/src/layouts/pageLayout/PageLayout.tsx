import {Outlet} from "react-router-dom";
import Header from "../../shared/components/Header.tsx";
import Footer from "../../shared/components/Footer.tsx";
import TopBar from "../TopBar.tsx";

export default function PageLayout() {
    return (
        <div className="min-h-screen bg-gray-50">
            <TopBar/>
            <Header/>
            <main>
                <Outlet/>
            </main>
            <Footer/>
        </div>
    );
}