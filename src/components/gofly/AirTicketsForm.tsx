import { useState } from "react";
import { ArrowRight } from "lucide-react";

const WHATSAPP = "923229606256";

const flightCountries = [
  "Afghanistan",
  "Albania",
  "Algeria",
  "Angola",
  "Argentina",
  "Armenia",
  "Australia",
  "Austria",
  "Azerbaijan",
  "Bahrain",
  "Bangladesh",
  "Belarus",
  "Belgium",
  "Belize",
  "Bolivia",
  "Bosnia and Herzegovina",
  "Brazil",
  "Bulgaria",
  "Cambodia",
  "Cameroon",
  "Canada",
  "Chile",
  "China",
  "Colombia",
  "Costa Rica",
  "Croatia",
  "Cuba",
  "Cyprus",
  "Czech Republic",
  "Denmark",
  "Djibouti",
  "Ecuador",
  "Egypt",
  "El Salvador",
  "Eritrea",
  "Ethiopia",
  "Fiji",
  "Finland",
  "France",
  "Georgia",
  "Germany",
  "Ghana",
  "Greece",
  "Guam",
  "Guatemala",
  "Guinea",
  "Haiti",
  "Honduras",
  "Hong Kong",
  "Hungary",
  "Iceland",
  "India",
  "Indonesia",
  "Iran",
  "Iraq",
  "Ireland",
  "Israel",
  "Italy",
  "Ivory Coast",
  "Jamaica",
  "Japan",
  "Jordan",
  "Kazakhstan",
  "Kenya",
  "Kosovo",
  "Kuwait",
  "Kyrgyzstan",
  "Laos",
  "Latvia",
  "Lebanon",
  "Lesotho",
  "Libya",
  "Lithuania",
  "Luxembourg",
  "Macau",
  "Madagascar",
  "Malawi",
  "Malaysia",
  "Maldives",
  "Mali",
  "Malta",
  "Mauritius",
  "Mexico",
  "Moldova",
  "Mongolia",
  "Montenegro",
  "Morocco",
  "Mozambique",
  "Myanmar",
  "Namibia",
  "Nepal",
  "Netherlands",
  "New Caledonia",
  "New Zealand",
  "Nicaragua",
  "Niger",
  "Nigeria",
  "North Macedonia",
  "Norway",
  "Oman",
  "Pakistan",
  "Panama",
  "Papua New Guinea",
  "Paraguay",
  "Peru",
  "Philippines",
  "Poland",
  "Portugal",
  "Qatar",
  "Reunion",
  "Romania",
  "Russia",
  "Rwanda",
  "Saudi Arabia",
  "Senegal",
  "Serbia",
  "Seychelles",
  "Sierra Leone",
  "Singapore",
  "Slovakia",
  "Slovenia",
  "Solomon Islands",
  "Somalia",
  "South Africa",
  "South Korea",
  "Spain",
  "Sri Lanka",
  "Sudan",
  "Sweden",
  "Switzerland",
  "Syria",
  "Taiwan",
  "Tajikistan",
  "Tanzania",
  "Timor-Leste",
  "Togo",
  "Tonga",
  "Trinidad and Tobago",
  "Tunisia",
  "Turkey",
  "Turkmenistan",
  "Uganda",
  "Ukraine",
  "United Arab Emirates",
  "United Kingdom",
  "United States",
  "Uruguay",
  "Uzbekistan",
  "Vanuatu",
  "Venezuela",
  "Vietnam",
  "Western Samoa",
  "Yemen",
  "Zambia",
  "Zimbabwe",
];

const internationalCities = [
  "Dubai (DXB)",
  "Abu Dhabi (AUH)",
  "Sharjah (SHJ)",
  "Al Ain (AAN)",
  "Ras Al Khaimah (RKT)",
  "Fujairah (FJR)",
  "Doha (DOH)",
  "Riyadh (RUH)",
  "Jeddah (JED)",
  "Medina (MED)",
  "Dammam (DMM)",
  "Abha (AHB)",
  "Taif (TIF)",
  "Tabuk (TUU)",
  "Hail (HAS)",
  "Najran (EAM)",
  "Jizan (GIZ)",
  "Yanbu (YNB)",
  "Qassim (ELQ)",
  "Kuwait City (KWI)",
  "Muscat (MCT)",
  "Salalah (SLL)",
  "Sohar (OHS)",
  "Duqm (DQM)",
  "Bahrain (BAH)",
  "Amman (AMM)",
  "Aqaba (AQJ)",
  "Beirut (BEY)",
  "Baghdad (BGW)",
  "Basra (BSR)",
  "Erbil (EBL)",
  "Najaf (NJF)",
  "Sulaymaniyah (ISU)",
  "Tehran (IKA)",
  "Shiraz (SYZ)",
  "Mashhad (MHD)",
  "Isfahan (IFN)",
  "Tabriz (TBZ)",
  "Ahvaz (AWZ)",
  "Sanaa (SAH)",
  "Aden (ADE)",
  "Damascus (DAM)",
  "Aleppo (ALP)",
  "Delhi (DEL)",
  "Mumbai (BOM)",
  "Bangalore (BLR)",
  "Chennai (MAA)",
  "Hyderabad (HYD)",
  "Kolkata (CCU)",
  "Ahmedabad (AMD)",
  "Pune (PNQ)",
  "Kochi (COK)",
  "Goa (GOI)",
  "Jaipur (JAI)",
  "Lucknow (LKO)",
  "Chandigarh (IXC)",
  "Amritsar (ATQ)",
  "Nagpur (NAG)",
  "Indore (IDR)",
  "Bhopal (BHO)",
  "Patna (PAT)",
  "Ranchi (IXR)",
  "Bhubaneswar (BBI)",
  "Visakhapatnam (VTZ)",
  "Coimbatore (CJB)",
  "Madurai (IXM)",
  "Trivandrum (TRV)",
  "Calicut (CCJ)",
  "Mangalore (IXE)",
  "Srinagar (SXR)",
  "Jammu (IXJ)",
  "Leh (IXL)",
  "Varanasi (VNS)",
  "Agra (AGR)",
  "Guwahati (GAU)",
  "Imphal (IMF)",
  "Dibrugarh (DIB)",
  "Dhaka (DAC)",
  "Chittagong (CGP)",
  "Sylhet (ZYL)",
  "Cox's Bazar (CXB)",
  "Colombo (CMB)",
  "Mattala (HRI)",
  "Kathmandu (KTM)",
  "Pokhara (PKR)",
  "Kabul (KBL)",
  "Kandahar (KDH)",
  "Herat (HEA)",
  "Mazar-i-Sharif (MZR)",
  "Male (MLE)",
  "Gan (GAN)",
  "Bangkok (BKK)",
  "Bangkok Don Mueang (DMK)",
  "Phuket (HKT)",
  "Chiang Mai (CNX)",
  "Chiang Rai (CEI)",
  "Koh Samui (USM)",
  "Singapore (SIN)",
  "Kuala Lumpur (KUL)",
  "Penang (PEN)",
  "Kota Kinabalu (BKI)",
  "Kuching (KCH)",
  "Langkawi (LGK)",
  "Johor Bahru (JHB)",
  "Jakarta (CGK)",
  "Bali (DPS)",
  "Surabaya (SUB)",
  "Medan (KNO)",
  "Makassar (UPG)",
  "Lombok (LOP)",
  "Yogyakarta (JOG)",
  "Manila (MNL)",
  "Cebu (CEB)",
  "Davao (DVO)",
  "Clark (CRK)",
  "Ho Chi Minh City (SGN)",
  "Hanoi (HAN)",
  "Da Nang (DAD)",
  "Nha Trang (CXR)",
  "Phnom Penh (PNH)",
  "Siem Reap (REP)",
  "Yangon (RGN)",
  "Mandalay (MDL)",
  "Naypyidaw (NYT)",
  "Vientiane (VTE)",
  "Luang Prabang (LPQ)",
  "Bandar Seri Begawan (BWN)",
  "Dili (DIL)",
  "Port Moresby (POM)",
  "Jayapura (DJJ)",
  "Beijing Capital (PEK)",
  "Beijing Daxing (PKX)",
  "Shanghai Pudong (PVG)",
  "Shanghai Hongqiao (SHA)",
  "Guangzhou (CAN)",
  "Shenzhen (SZX)",
  "Chengdu (CTU)",
  "Chongqing (CKG)",
  "Kunming (KMG)",
  "Xi'an (XIY)",
  "Wuhan (WUH)",
  "Hangzhou (HGH)",
  "Nanjing (NKG)",
  "Qingdao (TAO)",
  "Tianjin (TSN)",
  "Shenyang (SHE)",
  "Harbin (HRB)",
  "Dalian (DLC)",
  "Xiamen (XMN)",
  "Fuzhou (FOC)",
  "Urumqi (URC)",
  "Lhasa (LXA)",
  "Hong Kong (HKG)",
  "Macau (MFM)",
  "Taipei (TPE)",
  "Kaohsiung (KHH)",
  "Tokyo Narita (NRT)",
  "Tokyo Haneda (HND)",
  "Osaka (KIX)",
  "Nagoya (NGO)",
  "Fukuoka (FUK)",
  "Sapporo (CTS)",
  "Okinawa (OKA)",
  "Hiroshima (HIJ)",
  "Sendai (SDJ)",
  "Seoul Incheon (ICN)",
  "Seoul Gimpo (GMP)",
  "Busan (PUS)",
  "Jeju (CJU)",
  "Daegu (TAE)",
  "Tashkent (TAS)",
  "Samarkand (SKD)",
  "Almaty (ALA)",
  "Astana (NQZ)",
  "Baku (GYD)",
  "Tbilisi (TBS)",
  "Yerevan (EVN)",
  "Bishkek (FRU)",
  "Dushanbe (DYU)",
  "Ashgabat (ASB)",
  "Turkmenabat (CRZ)",
  "London Heathrow (LHR)",
  "London Gatwick (LGW)",
  "London Stansted (STN)",
  "London Luton (LTN)",
  "Manchester (MAN)",
  "Birmingham (BHX)",
  "Edinburgh (EDI)",
  "Glasgow (GLA)",
  "Bristol (BRS)",
  "Leeds (LBA)",
  "Newcastle (NCL)",
  "Liverpool (LPL)",
  "Belfast (BFS)",
  "Dublin (DUB)",
  "Shannon (SNN)",
  "Cork (ORK)",
  "Paris CDG (CDG)",
  "Paris Orly (ORY)",
  "Frankfurt (FRA)",
  "Munich (MUC)",
  "Berlin (BER)",
  "Hamburg (HAM)",
  "Dusseldorf (DUS)",
  "Cologne (CGN)",
  "Stuttgart (STR)",
  "Hanover (HAJ)",
  "Amsterdam (AMS)",
  "Rotterdam (RTM)",
  "Brussels (BRU)",
  "Liege (LGG)",
  "Madrid (MAD)",
  "Barcelona (BCN)",
  "Malaga (AGP)",
  "Alicante (ALC)",
  "Valencia (VLC)",
  "Seville (SVQ)",
  "Bilbao (BIO)",
  "Palma (PMI)",
  "Gran Canaria (LPA)",
  "Tenerife (TFS)",
  "Lisbon (LIS)",
  "Porto (OPO)",
  "Faro (FAO)",
  "Rome Fiumicino (FCO)",
  "Rome Ciampino (CIA)",
  "Milan Malpensa (MXP)",
  "Milan Linate (LIN)",
  "Venice (VCE)",
  "Naples (NAP)",
  "Catania (CTA)",
  "Palermo (PMO)",
  "Bologna (BLQ)",
  "Florence (FLR)",
  "Turin (TRN)",
  "Bari (BRI)",
  "Cagliari (CAG)",
  "Athens (ATH)",
  "Thessaloniki (SKG)",
  "Heraklion (HER)",
  "Rhodes (RHO)",
  "Corfu (CFU)",
  "Istanbul (IST)",
  "Istanbul Sabiha (SAW)",
  "Ankara (ESB)",
  "Izmir (ADB)",
  "Antalya (AYT)",
  "Bodrum (BJV)",
  "Dalaman (DLM)",
  "Trabzon (TZX)",
  "Adana (ADA)",
  "Copenhagen (CPH)",
  "Oslo (OSL)",
  "Stockholm Arlanda (ARN)",
  "Stockholm Bromma (BMA)",
  "Gothenburg (GOT)",
  "Helsinki (HEL)",
  "Reykjavik (KEF)",
  "Bergen (BGO)",
  "Trondheim (TRD)",
  "Stavanger (SVG)",
  "Riga (RIX)",
  "Tallinn (TLL)",
  "Vilnius (VNO)",
  "Kyiv Boryspil (KBP)",
  "Kyiv Igor Sikorsky (IEV)",
  "Moscow Sheremetyevo (SVO)",
  "Moscow Domodedovo (DME)",
  "St Petersburg (LED)",
  "Minsk (MSQ)",
  "Warsaw (WAW)",
  "Krakow (KRK)",
  "Prague (PRG)",
  "Budapest (BUD)",
  "Bucharest (OTP)",
  "Sofia (SOF)",
  "Belgrade (BEG)",
  "Zagreb (ZAG)",
  "Ljubljana (LJU)",
  "Sarajevo (SJJ)",
  "Skopje (SKP)",
  "Tirana (TIA)",
  "Podgorica (TGD)",
  "Chisinau (KIV)",
  "Zurich (ZRH)",
  "Geneva (GVA)",
  "Basel (BSL)",
  "Vienna (VIE)",
  "Salzburg (SZG)",
  "Innsbruck (INN)",
  "Nicosia (LCA)",
  "Paphos (PFO)",
  "Malta (MLA)",
  "Luxembourg (LUX)",
  "Nice (NCE)",
  "Lyon (LYS)",
  "Marseille (MRS)",
  "Toulouse (TLS)",
  "Bordeaux (BOD)",
  "Strasbourg (SXB)",
  "New York JFK (JFK)",
  "New York Newark (EWR)",
  "New York LaGuardia (LGA)",
  "Los Angeles (LAX)",
  "Chicago O'Hare (ORD)",
  "Chicago Midway (MDW)",
  "Houston Intercontinental (IAH)",
  "Houston Hobby (HOU)",
  "Washington Dulles (IAD)",
  "Washington Reagan (DCA)",
  "Miami (MIA)",
  "Fort Lauderdale (FLL)",
  "Dallas Fort Worth (DFW)",
  "Dallas Love (DAL)",
  "San Francisco (SFO)",
  "Oakland (OAK)",
  "San Jose (SJC)",
  "Boston (BOS)",
  "Seattle (SEA)",
  "Atlanta (ATL)",
  "Denver (DEN)",
  "Las Vegas (LAS)",
  "Phoenix (PHX)",
  "Orlando (MCO)",
  "Tampa (TPA)",
  "Minneapolis (MSP)",
  "Detroit (DTW)",
  "Philadelphia (PHL)",
  "Baltimore (BWI)",
  "Charlotte (CLT)",
  "Salt Lake City (SLC)",
  "Portland (PDX)",
  "San Diego (SAN)",
  "Nashville (BNA)",
  "Austin (AUS)",
  "Raleigh (RDU)",
  "Indianapolis (IND)",
  "Columbus (CMH)",
  "Kansas City (MCI)",
  "Sacramento (SMF)",
  "Honolulu (HNL)",
  "Anchorage (ANC)",
  "New Orleans (MSY)",
  "Memphis (MEM)",
  "Pittsburgh (PIT)",
  "Cincinnati (CVG)",
  "Toronto Pearson (YYZ)",
  "Toronto Island (YTZ)",
  "Vancouver (YVR)",
  "Montreal (YUL)",
  "Calgary (YYC)",
  "Ottawa (YOW)",
  "Edmonton (YEG)",
  "Winnipeg (YWG)",
  "Halifax (YHZ)",
  "Quebec City (YQB)",
  "Victoria (YYJ)",
  "Kelowna (YLW)",
  "Saskatoon (YXE)",
  "Regina (YQR)",
  "Mexico City (MEX)",
  "Cancun (CUN)",
  "Guadalajara (GDL)",
  "Monterrey (MTY)",
  "Los Cabos (SJD)",
  "Puerto Vallarta (PVR)",
  "Panama City (PTY)",
  "San Jose Costa Rica (SJO)",
  "Guatemala City (GUA)",
  "Tegucigalpa (TGU)",
  "San Salvador (SAL)",
  "Managua (MGA)",
  "Belize City (BZE)",
  "Havana (HAV)",
  "Santo Domingo (SDQ)",
  "San Juan (SJU)",
  "Kingston (KIN)",
  "Nassau (NAS)",
  "Port of Spain (POS)",
  "Bridgetown (BGI)",
  "Montego Bay (MBJ)",
  "Sao Paulo Guarulhos (GRU)",
  "Sao Paulo Congonhas (CGH)",
  "Rio de Janeiro (GIG)",
  "Brasilia (BSB)",
  "Salvador (SSA)",
  "Fortaleza (FOR)",
  "Recife (REC)",
  "Belo Horizonte (CNF)",
  "Buenos Aires Ezeiza (EZE)",
  "Buenos Aires Aeroparque (AEP)",
  "Bogota (BOG)",
  "Medellin (MDE)",
  "Cali (CLO)",
  "Cartagena (CTG)",
  "Lima (LIM)",
  "Santiago (SCL)",
  "Quito (UIO)",
  "Guayaquil (GYE)",
  "Caracas (CCS)",
  "Montevideo (MVD)",
  "Asuncion (ASU)",
  "La Paz (LPB)",
  "Santa Cruz (VVI)",
  "Cusco (CUZ)",
  "Punta Arenas (PUQ)",
  "Iquique (IQQ)",
  "Cairo (CAI)",
  "Alexandria (HBE)",
  "Hurghada (HRG)",
  "Sharm El Sheikh (SSH)",
  "Luxor (LXR)",
  "Casablanca (CMN)",
  "Marrakech (RAK)",
  "Agadir (AGA)",
  "Fes (FEZ)",
  "Tangier (TNG)",
  "Algiers (ALG)",
  "Oran (ORN)",
  "Constantine (CZL)",
  "Tunis (TUN)",
  "Tripoli (TIP)",
  "Benghazi (BEN)",
  "Khartoum (KRT)",
  "Nairobi (NBO)",
  "Mombasa (MBA)",
  "Addis Ababa (ADD)",
  "Dire Dawa (DIR)",
  "Dar es Salaam (DAR)",
  "Zanzibar (ZNZ)",
  "Kilimanjaro (JRO)",
  "Kampala (EBB)",
  "Kigali (KGL)",
  "Bujumbura (BJM)",
  "Djibouti (JIB)",
  "Mogadishu (MGQ)",
  "Asmara (ASM)",
  "Antananarivo (TNR)",
  "Mauritius (MRU)",
  "Seychelles (SEZ)",
  "Reunion (RUN)",
  "Comoros (HAH)",
  "Lagos (LOS)",
  "Abuja (ABV)",
  "Kano (KAN)",
  "Port Harcourt (PHC)",
  "Accra (ACC)",
  "Dakar (DKR)",
  "Abidjan (ABJ)",
  "Bamako (BKO)",
  "Ouagadougou (OUA)",
  "Niamey (NIM)",
  "Conakry (CKY)",
  "Freetown (FNA)",
  "Monrovia (ROB)",
  "Banjul (BJL)",
  "Bissau (OXB)",
  "Lome (LFW)",
  "Cotonou (COO)",
  "Douala (DLA)",
  "Yaounde (YAO)",
  "Libreville (LBV)",
  "Brazzaville (BZV)",
  "Kinshasa (FIH)",
  "Luanda (LAD)",
  "Johannesburg (JNB)",
  "Cape Town (CPT)",
  "Durban (DUR)",
  "Pretoria (PRY)",
  "Port Elizabeth (PLZ)",
  "East London (ELS)",
  "Lusaka (LUN)",
  "Harare (HRE)",
  "Bulawayo (BUQ)",
  "Maputo (MPM)",
  "Lilongwe (LLW)",
  "Blantyre (BLZ)",
  "Windhoek (WDH)",
  "Gaborone (GBE)",
  "Mbabane (SHO)",
  "Maseru (MSU)",
  "Sydney (SYD)",
  "Melbourne (MEL)",
  "Brisbane (BNE)",
  "Perth (PER)",
  "Adelaide (ADL)",
  "Gold Coast (OOL)",
  "Cairns (CNS)",
  "Darwin (DRW)",
  "Hobart (HBA)",
  "Canberra (CBR)",
  "Newcastle (NTL)",
  "Townsville (TSV)",
  "Auckland (AKL)",
  "Wellington (WLG)",
  "Christchurch (CHC)",
  "Queenstown (ZQN)",
  "Dunedin (DUD)",
  "Fiji Nadi (NAN)",
  "Noumea (NOU)",
  "Papeete (PPT)",
  "Samoa (APW)",
  "Tonga (TBU)",
  "Vanuatu (VLI)",
  "Solomon Islands (HIR)",
  "Guam (GUM)",
];

const flightDepartureCities = [
  "Islamabad – Islamabad International Airport (ISB)",
  "Karachi – Jinnah International Airport (KHI)",
  "Lahore – Allama Iqbal International Airport (LHE)",
  "Peshawar – Bacha Khan International Airport (PEW)",
  "Quetta – Quetta International Airport (UET)",
  "Faisalabad – Faisalabad International Airport (LYP)",
  "Multan – Multan International Airport (MUX)",
  "Sialkot – Sialkot International Airport (SKT)",
  "Rahim Yar Khan – Sheikh Zayed International Airport (RYK)",
  "Turbat – Turbat International Airport (TUK)",
  "Sukkur – Sukkur Airport (SKZ)",
  "Chitral – Chitral Airport (CJL)",
  "Gilgit – Gilgit Airport (GIL)",
  "Skardu – Skardu Airport (KDU)",
  "Gwadar – Gwadar International Airport (GWD)",
  "Bahawalpur – Bahawalpur Airport (BHV)",
  ...internationalCities,
];

const flightDestinationCities = [
  "Islamabad (ISB)",
  "Karachi (KHI)",
  "Lahore (LHE)",
  "Peshawar (PEW)",
  "Quetta (UET)",
  "Faisalabad (LYP)",
  "Multan (MUX)",
  "Sialkot (SKT)",
  "Rahim Yar Khan (RYK)",
  "Turbat (TUK)",
  "Sukkur (SKZ)",
  "Chitral (CJL)",
  "Gilgit (GIL)",
  "Skardu (KDU)",
  "Gwadar (GWD)",
  "Bahawalpur (BHV)",
  "Moenjodaro (MJD)",
  "Nawabshah (WNS)",
  "Zhob (PZH)",
  "Dir (DIR)",
  ...internationalCities,
];

const inputClass =
  "w-full rounded-xl border border-line bg-background px-4 py-3 text-sm text-title outline-none transition-colors focus:border-brand";

export function AirTicketsForm() {
  const [departureDate, setDepartureDate] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const [departureCountry, setDepartureCountry] = useState("");
  const [departureCity, setDepartureCity] = useState("");
  const [arrivalCountry, setArrivalCountry] = useState("");
  const [destinationCity, setDestinationCity] = useState("");
  const [tripType, setTripType] = useState("Round Trip");
  const [flexibleDates, setFlexibleDates] = useState("No");
  const [cabinClass, setCabinClass] = useState("Economy");
  const [directFlight, setDirectFlight] = useState("Yes");
  const [contactMethod, setContactMethod] = useState("WhatsApp");
  const [bestTime, setBestTime] = useState("Evening (4pm – 8pm)");
  const [passportName, setPassportName] = useState("");

  const message = [
    "Hi Travel Nest, I need help booking air tickets.",
    "",
    `Departure Date: ${departureDate || "Not selected"}`,
    `Return Date: ${returnDate || "Not selected"}`,
    `Departure Country: ${departureCountry || "Not selected"}`,
    `Departure City: ${departureCity || "Not selected"}`,
    `Arrival Country: ${arrivalCountry || "Not selected"}`,
    `Destination City: ${destinationCity || "Not selected"}`,
    `Trip Type: ${tripType}`,
    `Flexible Dates: ${flexibleDates}`,
    `Cabin Class: ${cabinClass}`,
    `Direct Flight Preferred: ${directFlight}`,
    `Preferred Contact: ${contactMethod}`,
    `Best Time to Contact: ${bestTime}`,
    `Passport Upload: ${passportName || "Not uploaded"}`,
  ].join("\n");

  const whatsappUrl = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(message)}`;

  return (
    <div className="rounded-2xl border border-line bg-card p-8 sm:p-12">
      <h2 className="text-center font-display text-2xl font-semibold text-title">
        Book Your Flight with Ease
      </h2>
      <p className="mx-auto mt-3 max-w-xl text-center text-sm text-body">
        Fill out the form below and let our team find the best options for you.
      </p>

      <div className="mx-auto mt-8 grid max-w-4xl gap-4 sm:grid-cols-2">
        <label className="block">
          <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-body">
            Departure Date *
          </span>
          <input
            type="date"
            value={departureDate}
            onChange={(e) => setDepartureDate(e.target.value)}
            className={inputClass}
          />
        </label>
        <label className="block">
          <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-body">
            Arrival / Return Date *
          </span>
          <input
            type="date"
            value={returnDate}
            onChange={(e) => setReturnDate(e.target.value)}
            className={inputClass}
          />
        </label>
        <label className="block">
          <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-body">
            Departure Country
          </span>
          <select
            value={departureCountry}
            onChange={(e) => setDepartureCountry(e.target.value)}
            className={inputClass}
          >
            <option value="">--- Select Departure Country ---</option>
            {flightCountries.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </label>
        <label className="block">
          <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-body">
            Departure City
          </span>
          <select
            value={departureCity}
            onChange={(e) => setDepartureCity(e.target.value)}
            className={inputClass}
          >
            <option value="">--- Select Departure City ---</option>
            {flightDepartureCities.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </label>
        <label className="block">
          <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-body">
            Arrival Country
          </span>
          <select
            value={arrivalCountry}
            onChange={(e) => setArrivalCountry(e.target.value)}
            className={inputClass}
          >
            <option value="">--- Select Arrival Country ---</option>
            {flightCountries.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </label>
        <label className="block">
          <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-body">
            Destination City
          </span>
          <select
            value={destinationCity}
            onChange={(e) => setDestinationCity(e.target.value)}
            className={inputClass}
          >
            <option value="">--- Select Destination City ---</option>
            {flightDestinationCities.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </label>
        <label className="block">
          <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-body">
            Trip Type (optional)
          </span>
          <select
            value={tripType}
            onChange={(e) => setTripType(e.target.value)}
            className={inputClass}
          >
            {["One Way", "Round Trip", "Multi-City"].map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </label>
        <label className="block">
          <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-body">
            Flexible Dates?
          </span>
          <select
            value={flexibleDates}
            onChange={(e) => setFlexibleDates(e.target.value)}
            className={inputClass}
          >
            {["Yes", "No"].map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </label>
        <label className="block">
          <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-body">
            Cabin Class (optional)
          </span>
          <select
            value={cabinClass}
            onChange={(e) => setCabinClass(e.target.value)}
            className={inputClass}
          >
            {["Economy", "Premium Economy", "Business", "First"].map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </label>
        <label className="block">
          <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-body">
            Direct Flight Preferred?
          </span>
          <select
            value={directFlight}
            onChange={(e) => setDirectFlight(e.target.value)}
            className={inputClass}
          >
            {["Yes", "No"].map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </label>
        <label className="block">
          <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-body">
            Preferred Contact Method (optional)
          </span>
          <select
            value={contactMethod}
            onChange={(e) => setContactMethod(e.target.value)}
            className={inputClass}
          >
            {["Call", "WhatsApp", "Email"].map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </label>
        <label className="block">
          <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-body">
            Best Time to Contact (optional)
          </span>
          <select
            value={bestTime}
            onChange={(e) => setBestTime(e.target.value)}
            className={inputClass}
          >
            {["Morning (9am – 12pm)", "Afternoon (12pm – 4pm)", "Evening (4pm – 8pm)"].map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </label>
        <label className="block sm:col-span-2">
          <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-body">
            Passport Upload — PDF Only (optional)
          </span>
          <input
            type="file"
            accept="application/pdf"
            onChange={(e) => setPassportName(e.target.files?.[0]?.name ?? "")}
            className={`${inputClass} cursor-pointer file:mr-3 file:rounded-lg file:border-0 file:bg-brand file:px-4 file:py-1.5 file:text-sm file:font-semibold file:text-white`}
          />
          <span className="mt-1.5 block text-xs text-body">
            Please scan and combine ALL passengers&apos; passports into a single PDF file before
            uploading.
          </span>
        </label>
      </div>

      <div className="mt-8 text-center">
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary"
        >
          Send Message <ArrowRight className="size-4" />
        </a>
      </div>
    </div>
  );
}
