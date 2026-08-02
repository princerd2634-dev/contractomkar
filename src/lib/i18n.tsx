import {
  createContext,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";

export type Lang = "en" | "hi" | "mr";

export const LANGS: { code: Lang; short: string; label: string }[] = [
  { code: "en", short: "EN", label: "English" },
  { code: "hi", short: "हिं", label: "हिंदी" },
  { code: "mr", short: "मरा", label: "मराठी" },
];

const en = {
  "nav.home": "Home",
  "nav.about": "About",
  "nav.services": "Services",
  "nav.gallery": "Gallery",
  "nav.why": "Why Us",
  "nav.contact": "Contact",
  "nav.quote": "Get a Quote",

  "hero.badge": "Government & Private Projects · Since 2015",
  "hero.tagline": "The Road to Safety Starts With U",
  "hero.title": "Omkar Enterprise",
  "hero.sub":
    "Manufacturer & supplier of road safety products and infrastructure / landscaping solutions — trusted by National Highways, PWD, Municipal Corporations and private clients across India.",
  "hero.cta1": "Get a Quote",
  "hero.cta2": "Our Products",
  "hero.stat1": "10+ Years of Experience",
  "hero.stat2": "20 TPD Automatic Plant",
  "hero.stat3": "NTL Delhi Certified",

  "about.kicker": "About Us",
  "about.title": "Built on trust, engineered for safety",
  "about.p1":
    "Omkar Enterprise began in 2015 as a family business and was formally incorporated in 2019. What started with a simple commitment to safer roads has grown into a complete manufacturing and supply operation serving government tenders and private contracts alike.",
  "about.p2":
    "Our fully automatic manufacturing unit at Kursi, Barabanki (Uttar Pradesh) runs at a capacity of 20 tons per day. Products are marketed under our brand ‘Top Marc’ and are tested and certified by the National Test Laboratory, Delhi.",
  "about.missionTitle": "Our Mission",
  "about.mission":
    "To make every road, junction and public space in India measurably safer through quality-certified products, honest pricing and on-time delivery.",
  "about.f1t": "Established 2015",
  "about.f1d": "Family business since 2015, incorporated in 2019.",
  "about.f2t": "20 TPD Plant",
  "about.f2d": "Fully automatic unit at Kursi, Barabanki (UP).",
  "about.f3t": "Brand: Top Marc",
  "about.f3d": "Our in-house road safety product brand.",
  "about.f4t": "Certified Quality",
  "about.f4d": "Tested & certified by National Test Laboratory, Delhi.",

  "services.kicker": "Products & Services",
  "services.title": "Complete road safety & infrastructure solutions",
  "services.sub":
    "From crash barriers to median landscaping — manufactured, supplied and installed by a single accountable partner.",
  "svc.1t": "Road Side Crash Barriers",
  "svc.1d":
    "Single faced, double faced and single/double barrier variants, galvanised to IRC standards for highways and ghat sections.",
  "svc.2t": "RPM Cat's Eye",
  "svc.2d":
    "Raised pavement markers with high-intensity retro reflective lenses for clear lane guidance at night.",
  "svc.3t": "Median Marker",
  "svc.3d":
    "Durable road studs for medians and dividers, resistant to heavy traffic loads and monsoon conditions.",
  "svc.4t": "Solar RPM",
  "svc.4d":
    "Solar-powered LED road markers offering active visibility in fog, rain and unlit stretches.",
  "svc.5t": "Delineators",
  "svc.5d":
    "Rigid retro reflective delineator posts marking road edges, curves and hazard zones.",
  "svc.6t": "Thermoplastic Road Marking",
  "svc.6d":
    "Thermoplast lane lines, zebra crossings, stop lines and legends applied with mechanised equipment.",
  "svc.7t": "FRP Playground Equipment",
  "svc.7d":
    "Outdoor FRP slides, swings and multiplay units for gardens, societies and municipal parks.",
  "svc.8t": "Landscaping & Gardening",
  "svc.8d":
    "Roadside plantation, median beautification and maintenance contracts for civic bodies and societies.",

  "gallery.kicker": "Project Gallery",
  "gallery.title": "Work delivered across India",
  "gallery.sub":
    "A selection of completed government tender and private projects. Real project photographs will be added here.",
  "gal.1": "Highway crash barrier installation",
  "gal.2": "City road marking — municipal project",
  "gal.3": "Airport runway markers",
  "gal.4": "Residential society parking zone",
  "gal.5": "Median beautification & plantation",
  "gal.6": "Thermoplastic zebra crossing",

  "why.kicker": "Why Choose Us",
  "why.title": "A supplier your tender committee can rely on",
  "why.1t": "Quality Certified",
  "why.1d": "Products tested and certified by National Test Laboratory, Delhi.",
  "why.2t": "Tender Experience",
  "why.2d": "Proven track record with VVCMC, PWD and highway authorities.",
  "why.3t": "On-Time Delivery",
  "why.3d": "20 TPD in-house capacity means schedules are met, not promised.",
  "why.4t": "ISO Standard Products",
  "why.4d": "Manufactured to IRC / ISO standard specifications.",
  "why.5t": "GST Registered",
  "why.5d": "GST 27AKAPG1826C1ZS — fully compliant documentation.",
  "why.6t": "End-to-End Execution",
  "why.6d": "Manufacturing, supply, installation and maintenance in one contract.",
  "why.clients": "Clients & sectors served",
  "why.clientList":
    "National Highway Projects · PWD State Highways · Municipal Corporations (VVCMC) · City Roads · Residential Societies · Parking Zones · Airport Runways",

  "contact.kicker": "Enquiry",
  "contact.title": "Request a quote or tender submission",
  "contact.sub":
    "Share your requirement and our team will respond with pricing, specifications and delivery timelines.",
  "form.name": "Full Name",
  "form.phone": "Phone Number",
  "form.email": "Email Address",
  "form.company": "Company / Organization (optional)",
  "form.type": "Project Type",
  "form.type1": "Government Tender",
  "form.type2": "Private Contract",
  "form.type3": "Product Inquiry",
  "form.message": "Message",
  "form.messagePh": "Tell us about your requirement, quantity and location…",
  "form.submit": "Send Enquiry",
  "form.note":
    "Your enquiry opens in your email app addressed to omkarenterprises@gmail.com. Prefer to talk? Call us directly.",
  "form.required": "Please fill in your name, phone and message.",

  "contact.address": "Address",
  "contact.phone": "Phone",
  "contact.email": "Email",
  "contact.gst": "GST No.",
  "contact.hours": "Mon – Sat, 9:00 AM – 7:00 PM",
  "contact.map": "Find us on the map",

  "footer.about":
    "Manufacturer and supplier of road safety products, FRP playground equipment and landscaping solutions.",
  "footer.quick": "Quick Links",
  "footer.rights": "All rights reserved.",
  "footer.unit": "Manufacturing Unit: Kursi, Barabanki, Uttar Pradesh — 20 TPD fully automatic plant",
  "float.call": "Call Now",
  "float.whatsapp": "WhatsApp",
};

type Dict = typeof en;

const hi: Dict = {
  "nav.home": "होम",
  "nav.about": "हमारे बारे में",
  "nav.services": "सेवाएं",
  "nav.gallery": "गैलरी",
  "nav.why": "क्यों चुनें",
  "nav.contact": "संपर्क",
  "nav.quote": "कोटेशन प्राप्त करें",

  "hero.badge": "सरकारी एवं निजी परियोजनाएं · 2015 से",
  "hero.tagline": "सुरक्षा का रास्ता आपसे शुरू होता है",
  "hero.title": "ओमकार एंटरप्राइज",
  "hero.sub":
    "सड़क सुरक्षा उत्पादों तथा इंफ्रास्ट्रक्चर / लैंडस्केपिंग समाधानों के निर्माता एवं आपूर्तिकर्ता — राष्ट्रीय राजमार्ग, PWD, नगर निगम एवं निजी ग्राहकों का भरोसा।",
  "hero.cta1": "कोटेशन प्राप्त करें",
  "hero.cta2": "हमारे उत्पाद",
  "hero.stat1": "10+ वर्षों का अनुभव",
  "hero.stat2": "20 TPD स्वचालित प्लांट",
  "hero.stat3": "NTL दिल्ली प्रमाणित",

  "about.kicker": "हमारे बारे में",
  "about.title": "भरोसे पर बना, सुरक्षा के लिए बना",
  "about.p1":
    "ओमकार एंटरप्राइज की शुरुआत 2015 में एक पारिवारिक व्यवसाय के रूप में हुई और 2019 में इसे विधिवत निगमित किया गया। सुरक्षित सड़कों के संकल्प से शुरू हुआ यह सफर आज सरकारी टेंडर एवं निजी अनुबंधों की पूर्ण निर्माण व आपूर्ति व्यवस्था बन चुका है।",
  "about.p2":
    "कुर्सी, बाराबंकी (उत्तर प्रदेश) स्थित हमारा पूर्णतः स्वचालित संयंत्र प्रतिदिन 20 टन क्षमता से कार्य करता है। हमारे उत्पाद ‘Top Marc’ ब्रांड के अंतर्गत उपलब्ध हैं तथा नेशनल टेस्ट लैबोरेटरी, दिल्ली से प्रमाणित हैं।",
  "about.missionTitle": "हमारा उद्देश्य",
  "about.mission":
    "गुणवत्ता-प्रमाणित उत्पादों, ईमानदार मूल्य निर्धारण और समय पर डिलीवरी के माध्यम से भारत की हर सड़क और सार्वजनिक स्थान को अधिक सुरक्षित बनाना।",
  "about.f1t": "स्थापना 2015",
  "about.f1d": "2015 से पारिवारिक व्यवसाय, 2019 में निगमित।",
  "about.f2t": "20 TPD प्लांट",
  "about.f2d": "कुर्सी, बाराबंकी (यूपी) में स्वचालित इकाई।",
  "about.f3t": "ब्रांड: Top Marc",
  "about.f3d": "हमारा अपना सड़क सुरक्षा उत्पाद ब्रांड।",
  "about.f4t": "प्रमाणित गुणवत्ता",
  "about.f4d": "नेशनल टेस्ट लैबोरेटरी, दिल्ली द्वारा प्रमाणित।",

  "services.kicker": "उत्पाद एवं सेवाएं",
  "services.title": "संपूर्ण सड़क सुरक्षा एवं इंफ्रास्ट्रक्चर समाधान",
  "services.sub":
    "क्रैश बैरियर से लेकर मीडियन लैंडस्केपिंग तक — निर्माण, आपूर्ति और स्थापना एक ही जिम्मेदार भागीदार से।",
  "svc.1t": "रोड साइड क्रैश बैरियर",
  "svc.1d":
    "सिंगल फेस्ड, डबल फेस्ड तथा सिंगल/डबल बैरियर वेरिएंट, IRC मानकों के अनुसार गैल्वनाइज्ड।",
  "svc.2t": "RPM कैट्स आई",
  "svc.2d": "रात में स्पष्ट लेन मार्गदर्शन हेतु उच्च तीव्रता वाले रेट्रो रिफ्लेक्टिव मार्कर।",
  "svc.3t": "मीडियन मार्कर",
  "svc.3d": "भारी ट्रैफिक और मानसून में टिकाऊ रोड स्टड्स।",
  "svc.4t": "सोलर RPM",
  "svc.4d": "कोहरे, वर्षा एवं अंधेरे मार्गों में सक्रिय दृश्यता देने वाले सोलर LED मार्कर।",
  "svc.5t": "डिलीनिएटर",
  "svc.5d": "सड़क किनारे, मोड़ एवं खतरे वाले क्षेत्रों हेतु रिजिड रेट्रो रिफ्लेक्टिव पोस्ट।",
  "svc.6t": "थर्मोप्लास्टिक रोड मार्किंग",
  "svc.6d": "मशीन द्वारा की गई लेन लाइन, ज़ेबरा क्रॉसिंग, स्टॉप लाइन एवं लेजेंड मार्किंग।",
  "svc.7t": "FRP प्लेग्राउंड उपकरण",
  "svc.7d": "उद्यानों, सोसाइटियों और नगरपालिका पार्कों हेतु FRP स्लाइड, झूले एवं मल्टीप्ले यूनिट।",
  "svc.8t": "लैंडस्केपिंग एवं गार्डनिंग",
  "svc.8d": "सड़क किनारे वृक्षारोपण, मीडियन सौंदर्यीकरण एवं रखरखाव अनुबंध।",

  "gallery.kicker": "प्रोजेक्ट गैलरी",
  "gallery.title": "पूरे भारत में पूर्ण की गई परियोजनाएं",
  "gallery.sub":
    "पूर्ण किए गए सरकारी टेंडर एवं निजी प्रोजेक्ट्स की झलक। वास्तविक प्रोजेक्ट फोटो शीघ्र जोड़े जाएंगे।",
  "gal.1": "हाईवे क्रैश बैरियर स्थापना",
  "gal.2": "सिटी रोड मार्किंग — नगरपालिका प्रोजेक्ट",
  "gal.3": "एयरपोर्ट रनवे मार्कर",
  "gal.4": "रेजिडेंशियल सोसाइटी पार्किंग ज़ोन",
  "gal.5": "मीडियन सौंदर्यीकरण एवं वृक्षारोपण",
  "gal.6": "थर्मोप्लास्टिक ज़ेबरा क्रॉसिंग",

  "why.kicker": "हमें क्यों चुनें",
  "why.title": "एक ऐसा आपूर्तिकर्ता जिस पर टेंडर समिति भरोसा कर सके",
  "why.1t": "प्रमाणित गुणवत्ता",
  "why.1d": "नेशनल टेस्ट लैबोरेटरी, दिल्ली से परीक्षित एवं प्रमाणित उत्पाद।",
  "why.2t": "टेंडर अनुभव",
  "why.2d": "VVCMC, PWD एवं हाईवे प्राधिकरणों के साथ सिद्ध रिकॉर्ड।",
  "why.3t": "समय पर डिलीवरी",
  "why.3d": "20 TPD की स्व-क्षमता से समय-सीमा का पालन।",
  "why.4t": "ISO मानक उत्पाद",
  "why.4d": "IRC / ISO मानक विशिष्टियों के अनुसार निर्मित।",
  "why.5t": "GST पंजीकृत",
  "why.5d": "GST 27AKAPG1826C1ZS — पूर्ण अनुपालन दस्तावेज़।",
  "why.6t": "संपूर्ण निष्पादन",
  "why.6d": "निर्माण, आपूर्ति, स्थापना एवं रखरखाव एक ही अनुबंध में।",
  "why.clients": "ग्राहक एवं क्षेत्र",
  "why.clientList":
    "राष्ट्रीय राजमार्ग · PWD राज्य राजमार्ग · नगर निगम (VVCMC) · शहरी सड़कें · रेजिडेंशियल सोसाइटी · पार्किंग ज़ोन · एयरपोर्ट रनवे",

  "contact.kicker": "पूछताछ",
  "contact.title": "कोटेशन या टेंडर हेतु संपर्क करें",
  "contact.sub":
    "अपनी आवश्यकता बताएं — हमारी टीम मूल्य, विशिष्टियां एवं डिलीवरी समय के साथ उत्तर देगी।",
  "form.name": "पूरा नाम",
  "form.phone": "फ़ोन नंबर",
  "form.email": "ईमेल पता",
  "form.company": "कंपनी / संस्था (वैकल्पिक)",
  "form.type": "प्रोजेक्ट प्रकार",
  "form.type1": "सरकारी टेंडर",
  "form.type2": "निजी अनुबंध",
  "form.type3": "उत्पाद पूछताछ",
  "form.message": "संदेश",
  "form.messagePh": "अपनी आवश्यकता, मात्रा एवं स्थान बताएं…",
  "form.submit": "पूछताछ भेजें",
  "form.note":
    "आपकी पूछताछ omkarenterprises@gmail.com पते के साथ आपके ईमेल ऐप में खुलेगी। बात करना चाहें तो सीधे कॉल करें।",
  "form.required": "कृपया नाम, फ़ोन और संदेश भरें।",

  "contact.address": "पता",
  "contact.phone": "फ़ोन",
  "contact.email": "ईमेल",
  "contact.gst": "GST नंबर",
  "contact.hours": "सोम – शनि, सुबह 9:00 – शाम 7:00",
  "contact.map": "मानचित्र पर देखें",

  "footer.about":
    "सड़क सुरक्षा उत्पाद, FRP प्लेग्राउंड उपकरण एवं लैंडस्केपिंग समाधानों के निर्माता एवं आपूर्तिकर्ता।",
  "footer.quick": "त्वरित लिंक",
  "footer.rights": "सर्वाधिकार सुरक्षित।",
  "footer.unit": "निर्माण इकाई: कुर्सी, बाराबंकी, उत्तर प्रदेश — 20 TPD पूर्णतः स्वचालित प्लांट",
  "float.call": "अभी कॉल करें",
  "float.whatsapp": "व्हाट्सएप",
};

const mr: Dict = {
  "nav.home": "मुख्यपृष्ठ",
  "nav.about": "आमच्याविषयी",
  "nav.services": "सेवा",
  "nav.gallery": "गॅलरी",
  "nav.why": "आम्हीच का",
  "nav.contact": "संपर्क",
  "nav.quote": "कोटेशन मिळवा",

  "hero.badge": "शासकीय व खाजगी प्रकल्प · 2015 पासून",
  "hero.tagline": "सुरक्षेचा रस्ता तुमच्यापासून सुरू होतो",
  "hero.title": "ओमकार एंटरप्राइज",
  "hero.sub":
    "रस्ता सुरक्षा उत्पादने आणि पायाभूत सुविधा / लँडस्केपिंग उपायांचे उत्पादक व पुरवठादार — राष्ट्रीय महामार्ग, PWD, महानगरपालिका व खाजगी ग्राहकांचा विश्वास.",
  "hero.cta1": "कोटेशन मिळवा",
  "hero.cta2": "आमची उत्पादने",
  "hero.stat1": "10+ वर्षांचा अनुभव",
  "hero.stat2": "20 TPD स्वयंचलित प्लांट",
  "hero.stat3": "NTL दिल्ली प्रमाणित",

  "about.kicker": "आमच्याविषयी",
  "about.title": "विश्वासावर उभारलेले, सुरक्षेसाठी घडवलेले",
  "about.p1":
    "ओमकार एंटरप्राइजची सुरुवात 2015 मध्ये कौटुंबिक व्यवसाय म्हणून झाली आणि 2019 मध्ये कंपनी अधिकृतपणे नोंदणीकृत झाली. सुरक्षित रस्त्यांच्या संकल्पातून सुरू झालेला प्रवास आज शासकीय निविदा व खाजगी करारांसाठी संपूर्ण उत्पादन व पुरवठा व्यवस्था बनला आहे.",
  "about.p2":
    "कुर्सी, बाराबंकी (उत्तर प्रदेश) येथील आमचा पूर्णतः स्वयंचलित प्रकल्प दररोज 20 टन क्षमतेने कार्यरत आहे. आमची उत्पादने ‘Top Marc’ या ब्रँडखाली उपलब्ध असून नॅशनल टेस्ट लॅबोरेटरी, दिल्ली येथून प्रमाणित आहेत.",
  "about.missionTitle": "आमचे ध्येय",
  "about.mission":
    "दर्जेदार प्रमाणित उत्पादने, प्रामाणिक दर आणि वेळेवर पुरवठा यातून भारतातील प्रत्येक रस्ता व सार्वजनिक जागा अधिक सुरक्षित करणे.",
  "about.f1t": "स्थापना 2015",
  "about.f1d": "2015 पासून कौटुंबिक व्यवसाय, 2019 मध्ये नोंदणी.",
  "about.f2t": "20 TPD प्लांट",
  "about.f2d": "कुर्सी, बाराबंकी (यूपी) येथे स्वयंचलित युनिट.",
  "about.f3t": "ब्रँड: Top Marc",
  "about.f3d": "आमचा स्वतःचा रस्ता सुरक्षा उत्पादन ब्रँड.",
  "about.f4t": "प्रमाणित दर्जा",
  "about.f4d": "नॅशनल टेस्ट लॅबोरेटरी, दिल्ली प्रमाणित.",

  "services.kicker": "उत्पादने व सेवा",
  "services.title": "संपूर्ण रस्ता सुरक्षा व पायाभूत सुविधा उपाय",
  "services.sub":
    "क्रॅश बॅरियरपासून मीडियन लँडस्केपिंगपर्यंत — उत्पादन, पुरवठा व उभारणी एकाच जबाबदार भागीदाराकडून.",
  "svc.1t": "रोड साइड क्रॅश बॅरियर",
  "svc.1d": "सिंगल फेस्ड, डबल फेस्ड व सिंगल/डबल बॅरियर प्रकार, IRC मानकानुसार गॅल्वनाइज्ड.",
  "svc.2t": "RPM कॅट्स आय",
  "svc.2d": "रात्री स्पष्ट लेन मार्गदर्शनासाठी उच्च तीव्रतेचे रेट्रो रिफ्लेक्टिव्ह मार्कर.",
  "svc.3t": "मीडियन मार्कर",
  "svc.3d": "जड वाहतूक व पावसाळ्यात टिकाऊ रोड स्टड्स.",
  "svc.4t": "सोलर RPM",
  "svc.4d": "धुके, पाऊस व अंधाऱ्या रस्त्यांवर सक्रिय दृश्यमानता देणारे सोलर LED मार्कर.",
  "svc.5t": "डिलिनिएटर",
  "svc.5d": "रस्त्याच्या कडा, वळणे व धोकादायक भागांसाठी रिजिड रेट्रो रिफ्लेक्टिव्ह पोस्ट.",
  "svc.6t": "थर्मोप्लास्टिक रोड मार्किंग",
  "svc.6d": "यंत्राद्वारे केलेली लेन लाईन, झेब्रा क्रॉसिंग, स्टॉप लाईन व लेजेंड मार्किंग.",
  "svc.7t": "FRP प्लेग्राउंड साहित्य",
  "svc.7d": "उद्याने, सोसायट्या व महापालिका पार्कसाठी FRP घसरगुंडी, झोपाळे व मल्टीप्ले युनिट.",
  "svc.8t": "लँडस्केपिंग व बागकाम",
  "svc.8d": "रस्त्याकडेची वृक्षलागवड, मीडियन सुशोभीकरण व देखभाल करार.",

  "gallery.kicker": "प्रकल्प गॅलरी",
  "gallery.title": "भारतभर पूर्ण केलेली कामे",
  "gallery.sub":
    "पूर्ण झालेल्या शासकीय निविदा व खाजगी प्रकल्पांची झलक. प्रत्यक्ष प्रकल्प फोटो लवकरच जोडले जातील.",
  "gal.1": "महामार्ग क्रॅश बॅरियर उभारणी",
  "gal.2": "शहरी रस्ता मार्किंग — महापालिका प्रकल्प",
  "gal.3": "विमानतळ धावपट्टी मार्कर",
  "gal.4": "रहिवासी सोसायटी पार्किंग झोन",
  "gal.5": "मीडियन सुशोभीकरण व लागवड",
  "gal.6": "थर्मोप्लास्टिक झेब्रा क्रॉसिंग",

  "why.kicker": "आम्हीच का",
  "why.title": "निविदा समितीचा विश्वास मिळवणारा पुरवठादार",
  "why.1t": "प्रमाणित दर्जा",
  "why.1d": "नॅशनल टेस्ट लॅबोरेटरी, दिल्ली येथून तपासलेली व प्रमाणित उत्पादने.",
  "why.2t": "निविदा अनुभव",
  "why.2d": "VVCMC, PWD व महामार्ग प्राधिकरणांसोबत सिद्ध कामगिरी.",
  "why.3t": "वेळेवर पुरवठा",
  "why.3d": "20 TPD स्वतःची क्षमता म्हणजे वेळापत्रकाचे पालन.",
  "why.4t": "ISO मानक उत्पादने",
  "why.4d": "IRC / ISO मानकांनुसार उत्पादित.",
  "why.5t": "GST नोंदणीकृत",
  "why.5d": "GST 27AKAPG1826C1ZS — संपूर्ण अनुपालन कागदपत्रे.",
  "why.6t": "संपूर्ण अंमलबजावणी",
  "why.6d": "उत्पादन, पुरवठा, उभारणी व देखभाल एकाच करारात.",
  "why.clients": "ग्राहक व क्षेत्रे",
  "why.clientList":
    "राष्ट्रीय महामार्ग · PWD राज्य महामार्ग · महानगरपालिका (VVCMC) · शहरी रस्ते · रहिवासी सोसायट्या · पार्किंग झोन · विमानतळ धावपट्टी",

  "contact.kicker": "चौकशी",
  "contact.title": "कोटेशन किंवा निविदेसाठी संपर्क करा",
  "contact.sub":
    "तुमची गरज कळवा — आमची टीम दर, तपशील व पुरवठा वेळेसह उत्तर देईल.",
  "form.name": "पूर्ण नाव",
  "form.phone": "फोन नंबर",
  "form.email": "ईमेल पत्ता",
  "form.company": "कंपनी / संस्था (ऐच्छिक)",
  "form.type": "प्रकल्प प्रकार",
  "form.type1": "शासकीय निविदा",
  "form.type2": "खाजगी करार",
  "form.type3": "उत्पादन चौकशी",
  "form.message": "संदेश",
  "form.messagePh": "तुमची गरज, प्रमाण व ठिकाण सांगा…",
  "form.submit": "चौकशी पाठवा",
  "form.note":
    "तुमची चौकशी omkarenterprises@gmail.com या पत्त्यासह तुमच्या ईमेल अ‍ॅपमध्ये उघडेल. बोलायचे असल्यास थेट कॉल करा.",
  "form.required": "कृपया नाव, फोन व संदेश भरा.",

  "contact.address": "पत्ता",
  "contact.phone": "फोन",
  "contact.email": "ईमेल",
  "contact.gst": "GST क्रमांक",
  "contact.hours": "सोम – शनि, सकाळी 9:00 – सायं 7:00",
  "contact.map": "नकाशावर पहा",

  "footer.about":
    "रस्ता सुरक्षा उत्पादने, FRP प्लेग्राउंड साहित्य व लँडस्केपिंग उपायांचे उत्पादक व पुरवठादार.",
  "footer.quick": "जलद दुवे",
  "footer.rights": "सर्व हक्क राखीव.",
  "footer.unit": "उत्पादन युनिट: कुर्सी, बाराबंकी, उत्तर प्रदेश — 20 TPD पूर्णतः स्वयंचलित प्लांट",
  "float.call": "आता कॉल करा",
  "float.whatsapp": "व्हॉट्सअ‍ॅप",
};

const dicts: Record<Lang, Dict> = { en, hi, mr };

type Ctx = { lang: Lang; setLang: (l: Lang) => void; t: (k: keyof Dict) => string };

const I18nContext = createContext<Ctx>({ lang: "en", setLang: () => {}, t: (k) => en[k] });

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("en");
  const value = useMemo<Ctx>(
    () => ({ lang, setLang, t: (k) => dicts[lang][k] ?? en[k] }),
    [lang],
  );
  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export const useI18n = () => useContext(I18nContext);
