import pic1 from '../../assets/Pic1.jpg';
import pic2 from '../../assets/Pic2.jpg';
import AgricultureIcon from "@mui/icons-material/Agriculture";
import {Business, ChildCare, Flight, SportsVolleyball, Work} from "@mui/icons-material";
import SchoolIcon from "@mui/icons-material/School";

export default function AboutPage() {
    const history = [
        {
            year: "२०३४",
            title: "महादेव निम्न माध्यमिक विद्यालय स्थापना",
            description:
                "स्थानीय समुदायको सक्रियतामा श्री महादेव निम्न माध्यमिक विद्यालय स्थापना गरियो।",
        },
        {
            year: "२०४१",
            title: "श्री ज्वाला माध्यमिक विद्यालय स्थापना",
            description:
                "बेस्तडा क्षेत्रमा जग्गादान तथा स्थानीय जनप्रतिनिधिहरूको पहलमा विद्यालय स्थापना गरियो।",
        },
        {
            year: "२०४५",
            title: "अस्थायी स्वीकृति",
            description:
                "विद्यालयले औपचारिक रूपमा अस्थायी स्वीकृति प्राप्त गर्‍यो।",
        },
        {
            year: "२०४७",
            title: "स्थायी स्वीकृति",
            description:
                "विद्यालयले स्थायी स्वीकृति प्राप्त गरी नियमित रूपमा सञ्चालन हुन थाल्यो।",
        },
        {
            year: "२०५८",
            title: "उच्च माध्यमिक विद्यालय",
            description:
                "शिक्षा, मानविकी तथा व्यवस्थापन संकाय सहित कक्षा ११–१२ सञ्चालन सुरु गरियो।",
        },
        {
            year: "२०७६",
            title: "विद्यालय मर्ज तथा विस्तार",
            description:
                "श्री बालकल्याण प्राथमिक विद्यालय र सरस्वती प्राथमिक विद्यालयलाई मर्ज गरी नमूना विद्यालयको अवधारणा अनुसार विस्तार गरियो।",
        },
        {
            year: "२०७६ देखि हालसम्म",
            title: "बाली विज्ञान प्राविधिक शिक्षा",
            description:
                "कक्षा ९–१२ मा बाली विज्ञान विषयको प्राविधिक धार सञ्चालन भइरहेको छ।",
        },
    ];

    const programs = [
        {
            icon: <ChildCare sx={{fontSize: 55}} className="text-pink-600"/>,
            title: "बाल विकास",
        },
        {
            icon: <SchoolIcon sx={{fontSize: 55}} className="text-blue-600"/>,
            title: "औपचारिक शिक्षा",
        },
        {
            icon: <AgricultureIcon sx={{fontSize: 55}} className="text-green-600"/>,
            title: "बाली विज्ञान",
        },
        {
            icon: <SportsVolleyball sx={{fontSize: 55}} className="text-orange-600"/>,
            title: "सहक्रियाकलाप",
        },
    ];

    return (
        <section className="bg-gray-50">

            {/* HERO */}
            <div className="relative h-[450px] overflow-hidden">
                <img
                    src={pic1}
                    alt="School"
                    className="absolute inset-0 w-full h-full object-cover"
                />

                <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
                    <div className="text-center text-white px-4">
                        <h1 className="text-4xl md:text-6xl font-bold">
                            श्री ज्वाला माध्यमिक विद्यालय
                        </h1>

                        <p className="mt-4 text-lg md:text-xl">
                            भगवतीमाई गाउँपालिका – १, बेस्तडा, दैलेख
                        </p>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 py-16 space-y-16">

                {/* INTRODUCTION */}
                <section className="bg-white rounded-3xl shadow-sm p-8 md:p-12">
                    <h2 className="text-3xl font-bold text-gray-800 mb-6">
                        विद्यालयको ऐतिहासिक पृष्ठभूमि
                    </h2>

                    <p className="text-gray-600 leading-8">
                        शिक्षा क्षेत्रमा देखा परेका विभिन्न समस्यालाई समाधान गरी शिक्षालाई सही दिशा निर्देश गर्न र देशमा
                        दक्ष जनशक्ति उत्पादन गरी सामाजिक तथा आर्थिक विकासका माध्यमबाट राष्ट्रको उन्नति प्राप्त गर्ने
                        ध्ययेले तत्कालिन सरकारले रा.शि.प.यो. २०२८ घोषणा गरे पश्चात देशका सवै क्षेत्रहरुमा विद्यालयहरु
                        स्थापना गरी सञ्चालन हुन थाले । यसै क्रममा जनताले पनि शिक्षा प्राप्तीको भोक जगाए ।शिक्षा प्रदान
                        गर्ने परम्परागत शिक्षण संस्थाले जनताको शिक्षा हासिल गर्ने चाहना पूर्ति गर्न सकिरहेको थिएन । यसै
                        सन्दर्भमा वि.स.२०३४ सालमा तत्कालिन समयका पगनाथ वासीहरुको सक्रियतामा पगनाथ गाउँ पंचायतको वडा नं.३
                        मा उनीहरुले पुजा आजा गर्ने महादेवको नामबाट श्री महादेव निम्न माध्यमिक विद्यालयको स्थापना गरियो ।
                        तत्कालिन अवस्थाका स्थानीय स्रोत साधनको उपयोग गर्दै सो विद्यालयले शिक्षा प्रदान गर्ने प्रयत्न
                        गरेकै थियो । त्यति बेला निम्न माद्यमिक तहसम्मको शिक्षा लिन साविकका अन्य वडाबाट पनि सोही
                        विद्यालयमा जाने गर्दथे । तत्कालिन समयमा यस बेस्तडा बजारमा हालको जस्तो बसोबास नभएता पनि शिक्षाको
                        अवसर यस दराका सबै सर्वसाधारण सम्मको पहुँच पु¥याउने लक्ष्यका आधारमा पगनाथ निवासी समाजसेवी तथा हाल
                        संघीय सांसद प्रतिनिधि सभाका माननीय सांसद श्री अम्मर बहादुर थापाको पहलमा यस क्षेत्रका सवै जनताको
                        पायक पर्ने साविक पगनाथ कट्टी निवासी जग्गादाताको जग्गा दानबाट गा. वि. स. को वडा नं. १ , पगनाथको
                        बेस्तडामा वि सं २०४१ साल पौष १४ गत्तेका दिन महादेव नि मा वि पगनाथको कक्षा ६ र ७ लाई आधार बनाई
                        श्री ज्वाला माध्यमिक विद्यालय बेस्तडाको स्थापना भएको हो ।
                    </p>

                    <p className="mt-4 text-gray-600 leading-8">
                        विद्यालयको स्थापना भई सञ्चालन गर्दा देखा परेका थुप्रै चुनौतीहरुको सामनागर्दै यस विद्यालयको
                        संस्थापक श्री अम्मर ब. थापा तथा स्थापनाकालका प्रधानाध्यापक दैलेख जाहरकोट निवासी श्री सहित किशोर
                        के सी तत्कालिन समयका पगनाथ,मेहेल्तोली,रुम,जगनाथ,कट्टी र वडाभैरवका तत्कालिन प्रधानपञ्चज्यूहरुको
                        सक्रियतामा वि सं २०४५ भाद्र ५ गते अस्थायी स्वीकृति र वि सं २०४७ पौष ५ गते स्थायी स्वीकृतिप्राप्त
                        गरेको थियो ।
                    </p>
                    <p className="mt-4 text-gray-600 leading-8">
                        समाजको विकास र उच्च शिक्षा प्रतिको बढ्दो माग र आवश्यक्तालाई मध्यनजर गरी साविक इलाका नं.४ का
                        तत्कालिन समयका जनप्रतिनिधिहरु, विद्यालय व्यवश्थापन समिति र अभिभावकहरुको सक्रियतामा वि.सं २०५८
                        सालमा विद्यालयको स्तर वृद्दि हुनगई श्री ज्वाला उच्च माध्यमिक विद्यालयको रुपमा सम्बन्धन प्राप्त
                        गरी शिक्षा, मानविकी र व्यवश्थापन संकाय संचालन भई कक्षा (११ र १२) को रुपमा आफ्नो स्तर वृद्दि
                        गरेको थियो ।देशमा आएको राजनीतिक परिवर्तन सँगै देश संघीय संरचनामा गयो । संघीय व्यवस्था भइसकेपछि
                        स्थानीय सरकारको गठन भए पश्चात विद्यालयलाई नमूना विद्यालयको रुपमा स्थापना गर्नलाई विद्यालय
                        कम्तिमा बालविकास देखि कक्षा १२ सम्म सञ्चालन भएको हुनुपर्ने मापदण्ड अनुसार विद्यालयको नजिकै रहेको
                        श्री बालकल्याण प्राथमिक विद्यालय खोलेघाडी र र साविक वडा नं १ को श्री सरस्वती प्राथमिक विद्यालय
                        बागडाँडा दैलेखलाई २०७६ सालमा यस मा. वि मा औपचारिक रुपमा मर्ज गरियो । हाल यस विद्यालयमा कक्षा
                        वि.सं. २०७६ सालदेखि शिक्षा तथा मानव स्रोत विकास सानोठिमी भक्तपुरबाट अनुमति प्राप्त गरी कक्षा ९
                        देखि १२ सम्म बालीविज्ञान विषयमा प्राविधिक धार पनि सञ्चालन भइरहेको छ ।यस गाउँपालिकाका
                        विद्यार्थीहरु कक्षा ११ र १२ मा विज्ञान संकायमा अध्ययन गर्न पालिका बाहिर जानुपर्ने बाध्यता भएकोले
                        गाउँपालिकाको सहयोगमा यस विद्यालयमा विज्ञान संकाय पठनपाठन गर्ने व्यवस्था गर्नुपर्ने देखिन्छ ।
                    </p>

                </section>

                {/* QUICK STATS */}
                <section>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

                        <div className="bg-white p-6 rounded-2xl shadow-sm text-center">
                            <h3 className="text-3xl font-bold text-blue-600">
                                २०४१
                            </h3>

                            <p className="mt-2 text-gray-600">
                                स्थापना वर्ष
                            </p>
                        </div>

                        <div className="bg-white p-6 rounded-2xl shadow-sm text-center">
                            <h3 className="text-3xl font-bold text-green-600">
                                कक्षा बाल विकासदेखि १२ सम्म
                            </h3>

                            <p className="mt-2 text-gray-600">
                                शैक्षिक तह
                            </p>
                        </div>

                        <div className="bg-white p-6 rounded-2xl shadow-sm text-center">
                            <h3 className="text-3xl font-bold text-orange-600">
                                🌾
                            </h3>

                            <p className="mt-2 text-gray-600">
                                बाली विज्ञान
                            </p>
                        </div>

                        <div className="bg-white p-6 rounded-2xl shadow-sm text-center">
                            <h3 className="text-3xl font-bold text-purple-600">
                                १०००m
                            </h3>

                            <p className="mt-2 text-gray-600">
                                समुद्री सतहबाट उचाइ
                            </p>
                        </div>

                    </div>
                </section>

                {/* HISTORY */}
                <section>
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-800">
                            विद्यालयको इतिहास
                        </h2>

                        <p className="text-gray-500 mt-3">
                            स्थापना देखि हालसम्मको यात्रा
                        </p>
                    </div>

                    <div className="space-y-6">
                        {history.map((item, index) => (
                            <div
                                key={index}
                                className="bg-white p-6 rounded-2xl shadow-sm border-l-4 border-blue-600"
                            >
                                <div className="text-blue-600 font-bold text-xl">
                                    {item.year}
                                </div>

                                <h3 className="text-xl font-semibold mt-2">
                                    {item.title}
                                </h3>

                                <p className="text-gray-600 mt-2">
                                    {item.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* LOCATION */}
                <section className="grid md:grid-cols-2 gap-8 items-center">

                    <div className="bg-white rounded-2xl p-8 shadow-sm">
                        <h2 className="text-3xl font-bold mb-5">
                            भौगोलिक अवस्था
                        </h2>

                        <p className="text-gray-600 leading-8">
                            यो विद्यालय दैलेख जिल्लाको पूर्वी भागमा रहेको श्री भगवतीमाई गाउँपालिका १ बेस्तडामा अवस्थित छ
                            । यो विद्यालयको पूर्वमा जगनाथ र मेहेलतोली, उत्तरमा रुम र पगनाथ, दक्षिणमा कट्टी र पश्चिममा
                            वडाभैरव गाउँहरु रहेका छन् ।
                        </p>

                        <p className="text-gray-600 leading-8 mt-4">
                            समुद्र सतहदेखि करिब १००० मिटर उचाईंमा चारैतिरबाट डाँडा र भिरालो भूसतहको बेसीमा छ ।
                            यो विद्यालय उत्तरमा मध्य पहाडी राजमार्ग नजिक र दक्षिणमा कट्टी खोलाको किनारमा अवस्थित छ ।
                        </p>
                    </div>

                    <div>
                        <img
                            src={pic2}
                            alt="Location"
                            className="rounded-2xl shadow-lg h-[350px] w-full object-cover"
                        />
                    </div>

                </section>

                {/* COMMUNITY */}
                <section>
                    <div className="text-center mb-10">
                        <h2 className="text-3xl font-bold">
                            समुदायको परिचय
                        </h2>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

                        <div className="bg-white p-6 rounded-2xl text-center shadow-sm">
                            <AgricultureIcon
                                sx={{fontSize: 55}}
                                className="text-green-600 mb-3"
                            />
                            <h3 className="font-semibold">कृषि</h3>
                        </div>

                        <div className="bg-white p-6 rounded-2xl text-center shadow-sm">
                            <Business
                                sx={{fontSize: 55}}
                                className="text-blue-600 mb-3"
                            />
                            <h3 className="font-semibold">व्यापार</h3>
                        </div>

                        <div className="bg-white p-6 rounded-2xl text-center shadow-sm">
                            <Work
                                sx={{fontSize: 55}}
                                className="text-orange-600 mb-3"
                            />
                            <h3 className="font-semibold">रोजगारी</h3>
                        </div>

                        <div className="bg-white p-6 rounded-2xl text-center shadow-sm">
                            <Flight
                                sx={{fontSize: 55}}
                                className="text-purple-600 mb-3"
                            />
                            <h3 className="font-semibold">वैदेशिक रोजगार</h3>
                        </div>

                    </div>
                </section>

                {/* SERVICE AREA */}
                <section className="bg-white rounded-3xl shadow-sm p-8">
                    <h2 className="text-3xl font-bold mb-5">
                        विद्यालयको सेवा क्षेत्र
                    </h2>

                    <ul className="space-y-3 text-gray-600">
                        <li>✓ वडा नं. १ बेस्तडा</li>
                        <li>✓ वडा नं. २</li>
                        <li>✓ गाउँपालिकाका अन्य वडाहरू</li>
                        <li>✓ बाल शिक्षा देखि कक्षा १२ सम्म</li>
                    </ul>
                </section>

                {/* PROGRAMS */}
                <section>

                    <div className="text-center mb-10">
                        <h2 className="text-3xl font-bold">
                            विद्यालयमा सञ्चालित कार्यक्रम
                        </h2>

                        <p className="text-gray-500 mt-2">
                            विद्यार्थीको समग्र विकासका लागि
                        </p>
                    </div>

                    <div className="grid md:grid-cols-4 gap-6">

                        {programs.map((program, index) => (
                            <div
                                key={index}
                                className="bg-white p-8 rounded-2xl shadow-sm text-center"
                            >
                                <div className="text-5xl mb-4">
                                    {program.icon}
                                </div>

                                <h3 className="font-semibold text-lg">
                                    {program.title}
                                </h3>
                            </div>
                        ))}

                    </div>

                </section>

            </div>

        </section>
    );
}