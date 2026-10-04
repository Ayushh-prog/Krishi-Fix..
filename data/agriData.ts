export interface CropRecommendation {
  id: string;
  name: string;
  hindiName: string;
  category: "Cereal" | "Pulses" | "Cash Crop" | "Vegetable" | "Oilseed";
  matchScore: number;
  durationDays: string;
  expectedProfitPerHa: string;
  waterNeed: "Low" | "Medium" | "High";
  soilSuitability: string;
  keyReason: string;
  npkRatio: string;
  icon: string;
}

export interface DiseaseInfo {
  id: string;
  crop: string;
  diseaseName: string;
  pathogen: string;
  confidence: number;
  severity: "Low" | "Moderate" | "High" | "None";
  symptoms: string[];
  chemicalRemedy: string;
  organicRemedy: string;
  prevention: string[];
  idealConditions: {
    temp: string;
    humidity: string;
    action: string;
  };
  sampleSvg: string;
}

export const SOIL_TYPES = [
  { id: "loam", label: "Loamy Soil (दोमट मिट्टी)", ph: "6.0 - 7.5", description: "Fertile, balanced moisture retention, ideal for most crops" },
  { id: "clay", label: "Clay Soil (चिकनी मिट्टी)", ph: "6.5 - 8.0", description: "High water holding, dense, rich in minerals" },
  { id: "sandy", label: "Sandy Soil (बलुई मिट्टी)", ph: "5.5 - 7.0", description: "Quick drainage, warms fast, requires frequent irrigation" },
  { id: "black", label: "Black Soil / Regur (काली मिट्टी)", ph: "7.0 - 8.5", description: "High clay content, excellent moisture retention for cotton/soybean" },
  { id: "red", label: "Red & Yellow Soil (लाल मिट्टी)", ph: "5.0 - 6.5", description: "Porous, rich in iron, good with proper fertilizer" },
];

export const SEASONS = [
  { id: "kharif", label: "Kharif (खरीफ - Monsoon)", months: "June – October", description: "Sown at onset of monsoon: Paddy, Maize, Cotton, Pulses" },
  { id: "rabi", label: "Rabi (रबी - Winter)", months: "October – March", description: "Sown in winter: Wheat, Mustard, Gram, Barley, Peas" },
  { id: "zaid", label: "Zaid (जायद - Summer)", months: "March – June", description: "Short summer crop: Watermelon, Cucumber, Fodder, Moong" },
];

export const IRRIGATION_LEVELS = [
  { id: "rainfed", label: "Rainfed / Low (वर्षा आधारित)", desc: "Dependent on rain or scarce water" },
  { id: "medium", label: "Medium Irrigation (नहर / बोरवेल - मध्यम)", desc: "1-2 waterings available via tube-well / canal" },
  { id: "high", label: "Full Irrigation / Drip (ड्रिप / पर्याप्त पानी)", desc: "Consistent round-the-clock water availability" },
];

export const CROPS_DB: Record<string, CropRecommendation[]> = {
  "loam-kharif-medium": [
    {
      id: "maize",
      name: "Maize (मक्का)",
      hindiName: "मक्का",
      category: "Cereal",
      matchScore: 97,
      durationDays: "85 - 105 days",
      expectedProfitPerHa: "₹45,000 - ₹62,000",
      waterNeed: "Medium",
      soilSuitability: "Excellent in fertile well-drained loam",
      keyReason: "Optimal nitrogen uptake in loam soil; low risk under moderate irrigation.",
      npkRatio: "120:60:40 kg/ha",
      icon: "🌽",
    },
    {
      id: "pulses",
      name: "Pulses / Arhar / Moong (दालें)",
      hindiName: "अरहर / मूंग दाल",
      category: "Pulses",
      matchScore: 94,
      durationDays: "70 - 120 days",
      expectedProfitPerHa: "₹40,000 - ₹55,000",
      waterNeed: "Medium",
      soilSuitability: "Naturally fixes atmospheric nitrogen in loamy ground",
      keyReason: "High market rate, enriches soil health for next Rabi crop.",
      npkRatio: "20:50:20 kg/ha",
      icon: "🫘",
    },
    {
      id: "soybean",
      name: "Soybean (सोयाबीन)",
      hindiName: "सोयाबीन",
      category: "Oilseed",
      matchScore: 91,
      durationDays: "90 - 100 days",
      expectedProfitPerHa: "₹38,000 - ₹50,000",
      waterNeed: "Medium",
      soilSuitability: "Prefers well-aerated loam with good organic matter",
      keyReason: "Strong commercial processing demand and guaranteed MSP.",
      npkRatio: "30:60:40 kg/ha",
      icon: "🌱",
    },
  ],
  "loam-rabi-high": [
    {
      id: "wheat",
      name: "Wheat (गेहूं - HD 2967 / 3086)",
      hindiName: "गेहूं",
      category: "Cereal",
      matchScore: 98,
      durationDays: "120 - 135 days",
      expectedProfitPerHa: "₹55,000 - ₹75,000",
      waterNeed: "High",
      soilSuitability: "Perfect match for rich loam soil during cool winter",
      keyReason: "Highest yield potential with 4-5 timely irrigations.",
      npkRatio: "120:60:40 kg/ha",
      icon: "🌾",
    },
    {
      id: "mustard",
      name: "Mustard (सरसों / राई)",
      hindiName: "सरसों",
      category: "Oilseed",
      matchScore: 93,
      durationDays: "110 - 125 days",
      expectedProfitPerHa: "₹48,000 - ₹68,000",
      waterNeed: "Medium",
      soilSuitability: "Thrives in loam with high oil content yield",
      keyReason: "Lower input cost and high edible oil market prices.",
      npkRatio: "80:40:40 kg/ha",
      icon: "🌻",
    },
  ],
  "clay-kharif-high": [
    {
      id: "paddy",
      name: "Paddy / Rice (धान)",
      hindiName: "धान (चावल)",
      category: "Cereal",
      matchScore: 99,
      durationDays: "125 - 140 days",
      expectedProfitPerHa: "₹50,000 - ₹72,000",
      waterNeed: "High",
      soilSuitability: "Clay holds stagnant water perfectly for paddy roots",
      keyReason: "Maximum water retention capacity prevents percolation loss.",
      npkRatio: "120:50:50 kg/ha",
      icon: "🌾",
    },
  ],
};

export const DEFAULT_CROPS: CropRecommendation[] = [
  {
    id: "maize",
    name: "Maize (मक्का / Hybrid Corn)",
    hindiName: "मक्का",
    category: "Cereal",
    matchScore: 95,
    durationDays: "90 - 105 days",
    expectedProfitPerHa: "₹45,000 - ₹62,000",
    waterNeed: "Medium",
    soilSuitability: "Rich loamy soil with proper drainage",
    keyReason: "Resilient crop with quick returns and industrial fodder market.",
    npkRatio: "120:60:40 kg/ha",
    icon: "🌽",
  },
  {
    id: "pulses",
    name: "Pulses / Pigeon Pea (अरहर दाल)",
    hindiName: "दालें / अरहर",
    category: "Pulses",
    matchScore: 92,
    durationDays: "100 - 120 days",
    expectedProfitPerHa: "₹42,000 - ₹58,000",
    waterNeed: "Medium",
    soilSuitability: "Loamy to sandy loam, pH 6.5 - 7.5",
    keyReason: "Fixes atmospheric nitrogen and reduces fertilizer bill.",
    npkRatio: "25:50:25 kg/ha",
    icon: "🫘",
  },
  {
    id: "vegetables",
    name: "Seasonal Vegetables (टमाटर / शिमला मिर्च)",
    hindiName: "सब्जियां",
    category: "Vegetable",
    matchScore: 88,
    durationDays: "60 - 90 days",
    expectedProfitPerHa: "₹70,000 - ₹1,10,000",
    waterNeed: "Medium",
    soilSuitability: "Well drained, organic rich topsoil",
    keyReason: "High market cash flow on weekly harvest cycles.",
    npkRatio: "100:60:60 kg/ha",
    icon: "🍅",
  },
];

export const SAMPLE_LEAF_DISEASES: DiseaseInfo[] = [
  {
    id: "tomato-blight",
    crop: "Tomato (टमाटर)",
    diseaseName: "Tomato Early Blight (अल्टरनेरिया पत्ती झुलसा)",
    pathogen: "Fungal - Alternaria solani",
    confidence: 96,
    severity: "Moderate",
    symptoms: [
      "Dark concentric brown rings ('target board' pattern) on older leaves",
      "Yellow chlorotic halo around leaf spots",
      "Premature leaf drop starting from lower canopy",
      "Stem collar rot in severe cases",
    ],
    chemicalRemedy: "Spray Mancozeb 75% WP @ 2.5g/L or Chlorothalonil 75% WP @ 2g/L of water at 10-day intervals.",
    organicRemedy: "Spray Neem Seed Kernel Extract (NSKE 5%) or Trichoderma viride bio-fungicide @ 5g/L. Remove lower infected leaves.",
    prevention: [
      "Practice 3-year crop rotation with non-solanaceous crops",
      "Water strictly at root base; avoid overhead sprinkler wetting",
      "Mulch soil around plants with straw to stop spore splashing",
      "Stake plants to maximize air circulation",
    ],
    idealConditions: {
      temp: "24°C - 29°C",
      humidity: "> 80% with warm wet leaves",
      action: "Immediate copper spray & removal of infected debris",
    },
    sampleSvg: "tomato_blight",
  },
  {
    id: "corn-leaf-blight",
    crop: "Maize / Corn (मक्का)",
    diseaseName: "Northern Corn Leaf Blight (मक्का पत्ती झुलसा)",
    pathogen: "Fungal - Exserohilum turcicum",
    confidence: 94,
    severity: "Moderate",
    symptoms: [
      "Long, elliptical, grayish-green or tan lesions (1 to 6 inches long)",
      "Cigar-shaped spots developing parallel to leaf veins",
      "Lesions merge causing entire leaf death in warm damp weather",
    ],
    chemicalRemedy: "Foliar spray of Azoxystrobin 18.2% + Difenoconazole 11.4% SC @ 1 ml/L or Propiconazole 25% EC @ 1 ml/L.",
    organicRemedy: "Spray Pseudomonas fluorescens liquid culture @ 10 ml/L. Ensure balanced potassium fertilization.",
    prevention: [
      "Select resistant hybrid seeds (e.g. Pioneer / Syngenta certified)",
      "Deep summer ploughing to bury crop residue and fungal spores",
      "Avoid excessive density; maintain 60cm x 20cm plant spacing",
    ],
    idealConditions: {
      temp: "18°C - 27°C",
      humidity: "Extended dew periods",
      action: "Spray at first sign before tasseling stage",
    },
    sampleSvg: "corn_blight",
  },
  {
    id: "wheat-rust",
    crop: "Wheat (गेहूं)",
    diseaseName: "Yellow / Stripe Rust (गेहूं का पीला रतुआ)",
    pathogen: "Fungal - Puccinia striiformis",
    confidence: 97,
    severity: "High",
    symptoms: [
      "Bright yellow powdery pustules arranged in parallel stripes along leaves",
      "Yellow powder comes off on hands or clothes when touched",
      "Leaves turn chlorotic and desiccate rapidly",
    ],
    chemicalRemedy: "Immediate spray of Propiconazole 25% EC (Tilt) @ 1 ml/L (200 ml in 200 L water per acre). Repeat after 15 days if stripe expands.",
    organicRemedy: "Immediate isolation of field block. Apply bio-control Trichoderma harzianum and dilute cow urine spray (10%).",
    prevention: [
      "Sow certified rust-resistant varieties like DBW 187, DBW 222, HD 3226",
      "Timely sowing before 15th November in Northern plains",
      "Avoid excess nitrogen fertilizer which increases leaf susceptibility",
    ],
    idealConditions: {
      temp: "10°C - 15°C with high morning humidity / fog",
      humidity: "Dense morning fog & cool wind",
      action: "Urgent notification to local KVK / Agriculture Officer",
    },
    sampleSvg: "wheat_rust",
  },
  {
    id: "healthy-leaf",
    crop: "General Crop (स्वस्थ पौधा)",
    diseaseName: "Healthy Crop Leaf (पूर्णतः स्वस्थ पत्ती)",
    pathogen: "None (Healthy Tissue)",
    confidence: 99,
    severity: "None",
    symptoms: [
      "Uniform lush green coloration",
      "No spotting, chlorosis, or necrotic tissue",
      "Turgid and vigorous photosynthetic surface",
    ],
    chemicalRemedy: "No chemical treatment required. Maintain standard NPK schedule.",
    organicRemedy: "Apply Panchagavya or Jeevamrutha @ 3% every 15 days to maintain plant immunity.",
    prevention: [
      "Continue regular scouting every 4-5 days",
      "Keep soil aerated and mulch intact",
      "Monitor weather warnings on AgriMind Smart Stream",
    ],
    idealConditions: {
      temp: "Optimal 22°C - 28°C",
      humidity: "Balanced 55% - 70%",
      action: "Keep monitoring weekly",
    },
    sampleSvg: "healthy_leaf",
  },
];

export const SMART_WEATHER_DATA = {
  current: {
    temp: 28,
    condition: "Partly Cloudy with Humidity",
    humidity: 78,
    windSpeed: "14 km/h (East-North-East)",
    rainChanceNext24h: 85,
    rainfallExpected: "35 mm",
  },
  forecast: [
    { day: "Today", temp: "29°C / 22°C", rain: "65%", icon: "🌦️", summary: "Overcast with afternoon drizzle" },
    { day: "Tomorrow", temp: "27°C / 21°C", rain: "85%", icon: "⛈️", summary: "Heavy thunderstorm & rain (35mm)" },
    { day: "Day 3", temp: "28°C / 20°C", rain: "25%", icon: "⛅", summary: "Clearing up, pleasant breeze" },
    { day: "Day 4", temp: "31°C / 22°C", rain: "10%", icon: "☀️", summary: "Clear sunny skies, dry ground" },
  ],
  smartAlerts: [
    {
      type: "spraying",
      title: "Pesticide Spray Decision: HOLD SPRAY",
      status: "WARNING",
      badgeColor: "bg-red-50 text-red-700 border-red-200",
      icon: "alert",
      message: "Rain expected tomorrow (85% probability). Hold all chemical & fertilizer sprays today to prevent costly runoff and chemical waste. Saves approx ₹1,200/acre in washed chemicals.",
      actionText: "Reschedule spray to Day 4 (Clear skies window)",
    },
    {
      type: "irrigation",
      title: "Irrigation Management: DELAY PUMP",
      status: "COST SAVING",
      badgeColor: "bg-blue-50 text-blue-700 border-blue-200",
      icon: "droplet",
      message: "Natural precipitation of 35mm will replenish root zone tomorrow. Turn off electrical tube-wells and drip pump cycles to conserve electricity and avoid root waterlogging.",
      actionText: "Tube-well pump standby recommended",
    },
    {
      type: "harvesting",
      title: "Sowing & Harvesting: UPCOMING DRY WINDOW",
      status: "PLANNED WINDOW",
      badgeColor: "bg-emerald-50 text-emerald-700 border-emerald-200",
      icon: "sun",
      message: "Day 3 and Day 4 present a 48-hour dry sun window with under 15% rain risk. Ideal for operating combine harvesters, tractor threshing, or field bed preparation.",
      actionText: "Book farm equipment for Day 3 afternoon",
    },
  ],
};

export const REAL_EXAMPLE_PRESET = {
  inputs: {
    soilType: "Loamy Soil",
    soilHindi: "दोमट मिट्टी",
    watering: "Medium Irrigation (Tube-well / Canal)",
    season: "Kharif Season (Monsoon)",
    leafStatus: "Sample leaf attached (Yellow fringe spots)",
    area: "2.5 Hectares",
  },
  outputs: {
    crop: {
      recommendation: "Maize or Pulses (Hybrid Corn / Arhar)",
      reason: "Optimal match for loamy soil with medium water retention during Kharif.",
    },
    yield: {
      forecast: "~3.8 Tons / Hectare",
      totalProduction: "9.5 Tons (95 Quintals)",
      estRevenue: "₹2,18,500 (at MSP ₹2,300/Q)",
    },
    weather: {
      alert: "Advises to delay fertilizer application due to rain alert tomorrow.",
      impact: "Prevents nutrient leaching into groundwater.",
    },
    health: {
      diagnosis: "Minor Zinc / Potassium nutrient deficiency on leaf edges.",
      advice: "Suggests bio-booster / micro-nutrient spray rather than toxic chemicals.",
    },
  },
};

export const FAQ_CHAT_KNOWLEDGE = [
  {
    keywords: ["wheat", "loam", "sow", "time", "गेहूं", "दोमट", "बुवाई", "ਕਣਕ"],
    answer: "For loamy soil, the best time to sow wheat is when temperature drops to around 20°C - 22°C, usually between late October and mid-November. Use certified seeds like HD 2967 or DBW 187 with 100 kg seed/ha rate and balanced NPK 120:60:40.",
  },
  {
    keywords: ["urea", "paddy", "rice", "fertilizer", "खाद", "यूरिया", "धान"],
    answer: "For paddy, apply Nitrogen in 3 split doses: 1/3rd as basal at transplanting along with full P and K, 1/3rd at active tillering (21-25 days), and remaining 1/3rd at panicle initiation (40-45 days). Never apply urea when standing water is deep or when rain is expected.",
  },
  {
    keywords: ["weather", "rain", "alert", "spray", "बारिश", "मौसम", "मीਂਹ"],
    answer: "AgriMind Smart Alert: High rain probability (85%) tomorrow! Do not spray pesticides or urea today as it will be washed away into field runoff. Wait for the upcoming dry window on Day 3 & 4.",
  },
  {
    keywords: ["pm-kisan", "scheme", "subsidy", "bima", "योजना", "बीमा"],
    answer: "Under PM-Kisan Samman Nidhi, eligible farmers receive ₹6,000 annually in 3 installments of ₹2,000. For crop insurance, PM Fasal Bima Yojana (PMFBY) covers crop loss due to non-preventable natural risks with farmer premium of only 2% for Kharif and 1.5% for Rabi crops.",
  },
  {
    keywords: ["aphid", "pest", "organic", "neem", "कीड़ा", "माहू", "कीटनाशक"],
    answer: "For organic aphid / whitefly control: Spray 5% Neem Seed Kernel Extract (NSKE) or Neem Oil 10,000 ppm @ 3ml/L with 0.5g detergent powder. Yellow sticky traps (10-12 per acre) are also highly effective.",
  },
];
