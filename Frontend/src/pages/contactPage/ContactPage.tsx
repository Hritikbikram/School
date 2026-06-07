import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import FacebookIcon from "@mui/icons-material/Facebook";
import SchoolIcon from "@mui/icons-material/School";
import AgricultureIcon from "@mui/icons-material/Agriculture";

export default function ContactPage() {
    return (
        <section className="bg-gray-50 py-12">
            <div className="mx-auto max-w-6xl px-4">

                {/* PAGE TITLE */}
                <div className="text-center mb-12">

                    <h1 className="text-4xl font-bold text-gray-900">
                        सम्पर्क
                    </h1>

                    <p className="mt-3 text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        विद्यालय सम्बन्धी जानकारी, भर्ना, शैक्षिक कार्यक्रम,
                        सुझाव तथा अन्य जिज्ञासाका लागि हामीलाई सम्पर्क गर्न सक्नुहुन्छ।
                    </p>

                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

                    {/* CONTACT INFORMATION */}
                    <div className="bg-white rounded-2xl shadow-sm border p-8">

                        <h2 className="text-2xl font-bold text-gray-800 mb-8">
                            सम्पर्क जानकारी
                        </h2>

                        <div className="space-y-8">

                            {/* ADDRESS */}
                            <div className="flex items-start gap-4">

                                <div className="text-blue-600 mt-1">
                                    <LocationOnIcon fontSize="medium"/>
                                </div>

                                <div>
                                    <h3 className="font-semibold text-gray-800">
                                        ठेगाना
                                    </h3>

                                    <p className="text-gray-600 text-sm mt-2 leading-7">
                                        श्री ज्वाला माध्यमिक विद्यालय
                                        <br/>
                                        भगवतीमाई गाउँपालिका–०१
                                        <br/>
                                        बेस्तडा, दैलेख
                                    </p>
                                </div>

                            </div>

                            {/* PRINCIPAL */}
                            <div className="flex items-start gap-4">

                                <div className="text-blue-600 mt-1">
                                    <SchoolIcon fontSize="medium"/>
                                </div>

                                <div>
                                    <h3 className="font-semibold text-gray-800">
                                        प्रधानाध्यापक
                                    </h3>

                                    <p className="text-gray-600 text-sm mt-2">
                                        राम बहादुर थापा
                                    </p>

                                    <a
                                        href="tel:9858050613"
                                        className="text-blue-600 hover:text-blue-700 font-medium"
                                    >
                                        ९८५८०५०६१३
                                    </a>
                                </div>

                            </div>

                            {/* AGRICULTURE COORDINATOR */}
                            <div className="flex items-start gap-4">

                                <div className="text-green-600 mt-1">
                                    <AgricultureIcon fontSize="medium"/>
                                </div>

                                <div>
                                    <h3 className="font-semibold text-gray-800">
                                        ९–१२ कृषि कार्यक्रम संयोजक
                                    </h3>

                                    <p className="text-gray-600 text-sm mt-2">
                                        मनसुन दाहाल
                                    </p>

                                    <a
                                        href="tel:9848100304"
                                        className="text-blue-600 hover:text-blue-700 font-medium"
                                    >
                                        ९८४८१००३०४
                                    </a>
                                </div>

                            </div>

                            {/* PHONE */}
                            <div className="flex items-start gap-4">

                                <div className="text-blue-600 mt-1">
                                    <PhoneIcon fontSize="medium"/>
                                </div>

                                <div>
                                    <h3 className="font-semibold text-gray-800">
                                        फोन सम्पर्क
                                    </h3>

                                    <p className="text-gray-600 text-sm mt-2">
                                        विद्यालय प्रशासनसँग सम्पर्क गर्न सक्नुहुन्छ।
                                    </p>
                                </div>

                            </div>

                            {/* EMAIL */}
                            <div className="flex items-start gap-4">

                                <div className="text-red-500 mt-1">
                                    <EmailIcon fontSize="medium"/>
                                </div>

                                <div>
                                    <h3 className="font-semibold text-gray-800">
                                        इमेल
                                    </h3>

                                    <a
                                        href="mailto:jwalass2041@gmail.com"
                                        className="text-blue-600 hover:text-blue-700 text-sm"
                                    >
                                        jwalass2041@gmail.com
                                    </a>
                                </div>

                            </div>

                            {/* FACEBOOK */}
                            <div className="flex items-start gap-4">

                                <div className="text-blue-600 mt-1">
                                    <FacebookIcon fontSize="medium"/>
                                </div>

                                <div>
                                    <h3 className="font-semibold text-gray-800">
                                        फेसबुक पेज
                                    </h3>

                                    <a
                                        href="#"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-block mt-2 text-blue-600 hover:text-blue-700 text-sm font-medium"
                                    >
                                        हाम्रो फेसबुक पेज हेर्नुहोस् →
                                    </a>
                                </div>

                            </div>

                        </div>

                    </div>

                    {/* CONTACT FORM */}
                    <div className="bg-white rounded-2xl shadow-sm border p-8">

                        <h2 className="text-2xl font-bold text-gray-800 mb-6">
                            सन्देश पठाउनुहोस्
                        </h2>

                        <form className="space-y-5">

                            {/* NAME */}
                            <div>

                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    पूरा नाम
                                </label>

                                <input
                                    type="text"
                                    placeholder="आफ्नो नाम लेख्नुहोस्"
                                    className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                                />

                            </div>

                            {/* EMAIL */}
                            <div>

                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    इमेल
                                </label>

                                <input
                                    type="email"
                                    placeholder="आफ्नो इमेल लेख्नुहोस्"
                                    className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                                />

                            </div>

                            {/* SUBJECT */}
                            <div>

                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    विषय
                                </label>

                                <input
                                    type="text"
                                    placeholder="विषय लेख्नुहोस्"
                                    className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                                />

                            </div>

                            {/* MESSAGE */}
                            <div>

                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    सन्देश
                                </label>

                                <textarea
                                    rows={5}
                                    placeholder="आफ्नो सन्देश लेख्नुहोस्..."
                                    className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none resize-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                                />

                            </div>

                            {/* SUBMIT BUTTON */}
                            <button
                                type="submit"
                                className="w-full rounded-lg bg-blue-600 px-5 py-3 text-white font-medium hover:bg-blue-700 transition duration-200 shadow-sm"
                                onClick={() => {
                                    alert('Functionality coming soon!')
                                }}
                            >
                                सन्देश पठाउनुहोस्
                            </button>

                        </form>

                    </div>

                </div>

                {/* MAP SECTION */}
                <div className="mt-10 bg-white rounded-2xl shadow-sm border p-8">

                    <h2 className="text-2xl font-bold text-gray-800 mb-6">
                        हाम्रो स्थान
                    </h2>

                    <div className="w-full h-[400px] rounded-xl overflow-hidden border">

                        <iframe
                            title="School Location"
                            src="https://maps.google.com/maps?q=Dailekh,Nepal&t=&z=13&ie=UTF8&iwloc=&output=embed"
                            width="100%"
                            height="100%"
                            style={{border: 0}}
                            loading="lazy"
                        />

                    </div>

                </div>

            </div>
        </section>
    );
}