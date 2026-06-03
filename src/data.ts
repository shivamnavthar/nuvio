import { FAQItem, Testimonial, PricingPlan, FeatureItem, MetricCard } from "./types";

export const RESTAURANT_LOGOS = [
  { name: "L'Ambroisie", rating: "★★★★★", city: "Paris", efficiency: "+22%" },
  { name: "Gilded Hearth", rating: "★★★★★", city: "New York", efficiency: "+18%" },
  { name: "Ten-Ku Sushi", rating: "★★★★★", city: "Tokyo", efficiency: "+26%" },
  { name: "Saffron & Sage", rating: "★★★★★", city: "London", efficiency: "+15%" },
  { name: "Dahlia Cellars", rating: "★★★★★", city: "Napa", efficiency: "+20%" },
  { name: "Onyx Room", rating: "★★★★★", city: "Singapore", efficiency: "+24%" }
];

export const MOCK_METRICS: MetricCard[] = [
  {
    id: "labor",
    label: "Average Weekly Labor Cost",
    value: "$14,820",
    change: "-18.4% Efficiency Gain",
    trend: "down"
  },
  {
    id: "waste",
    label: "Perishable Food Waste Ratio",
    value: "2.1%",
    change: "-32% Wastage Avoided",
    trend: "down"
  },
  {
    id: "revenue",
    label: "Dynamic Seats Margin",
    value: "+$3,440",
    change: "+12.1% RevPASH Increase",
    trend: "up"
  },
  {
    id: "tableTurns",
    label: "Average Saturday Turnover",
    value: "1.95h",
    change: "Optimized from 2.25h",
    trend: "down"
  }
];

export const CORE_FEATURES: FeatureItem[] = [
  {
    id: "forecasting",
    title: "AI Forecasting",
    badge: "Predictive Engines",
    description: "Forecast reservation densities, walk-in thresholds, and delivery volumes with up to 96% accuracy, hours or weeks in advance.",
    details: [
      "Weather, local events & search trend integration",
      "Dynamic menu item demand prep forecasts",
      "Walk-in wait time auto-calculations"
    ]
  },
  {
    id: "labor",
    title: "Labor Optimization",
    badge: "Automated Staffing",
    description: "Align floor and prep teams perfectly with anticipated rushes. Prevent expensive overstaffing or margin-damaging service friction.",
    details: [
      "Dynamic scheduling suggestions 7 days out",
      "Cross-location labor share analysis",
      "Overtime threshold notifications"
    ]
  },
  {
    id: "inventory",
    title: "Inventory Intelligence",
    badge: "Neural Supply Chains",
    description: "Automate stock reconciliation and trigger auto-replenishment thresholds. Drastically cut spoilage on premium ingredients.",
    details: [
      "Ingredient shelf-life degradation tracking",
      "Smart price-trend matching order sheets",
      "Direct supplier POS integration"
    ]
  },
  {
    id: "insights",
    title: "Automated Insights",
    badge: "Executive Summaries",
    description: "Receive natural-language digests of your restaurant group's financial, inventory, and floor performance directly to your inbox.",
    details: [
      "Daily Chef & GM performance summaries",
      "Margin leakage and food cost alerts",
      "Multi-restaurant group consolidation summaries"
    ]
  },
  {
    id: "growth",
    title: "Customer Growth Tools",
    badge: "Autonomous Retention",
    description: "Nuvio identifies tier-one regulars, dynamic dining preferences, and automatically activates personalized high-margin campaigns.",
    details: [
      "High-value VIP automated reservation pacing",
      "Personalized menu allergy matching",
      "Post-experience feedback auto-reconciliation"
    ]
  },
  {
    id: "multi-location",
    title: "Multi-Location Analytics",
    badge: "Enterprise Fleet Control",
    description: "Perfect for upscale restaurant groups. Overlay and benchmark efficiency, talent quality, and profit margins across properties.",
    details: [
      "Real-time inter-location shift rosters",
      "Global asset and equipment performance dashboards",
      "Unified B2B banking operations report"
    ]
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "1",
    quote: "Nuvio transitioned our operations from reactive stress to pure tactical foresight. We scaled from 2 to 5 locations in the NYC area, keeping labor costs standard at 24% lower levels.",
    author: "Elena Rostov",
    role: "Culinary Director",
    restaurant: "Gilded Hearth Group",
    improvement: "18.2% Labor Reduction",
    rating: 5,
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=150"
  },
  {
    id: "2",
    quote: "Before Nuvio, estimating prep volumes for Ten-Ku was guesswork, resulting in too much wasted fresh A5 Wagyu and bluefin tuna. Nuvio's item forecasts saved us more than $14,000 in raw stock in our first quarter.",
    author: "Hiroshi Sato",
    role: "Head Chef & Co-Owner",
    restaurant: "Ten-Ku Sushi",
    improvement: "32% Spoils Cut",
    rating: 5,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150"
  },
  {
    id: "3",
    quote: "With multiple Napa properties, we need perfect, unified control. Nuvio integrates smoothly with Toast to provide our GMs with dynamic staffing levels based on winery visitor trends.",
    author: "Charlotte Du Pont",
    role: "Managing Director",
    restaurant: "Dahlia Cellars Napa",
    improvement: "26% Faster Peak Turn Times",
    rating: 5,
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=150"
  }
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: "starter",
    name: "Nuvio Atelier",
    price: "$289",
    billing: "per month, billed annually",
    description: "For single-location culinary boutiques seeking elite forecasting and scheduling tools.",
    features: [
      "High-fidelity AI Occupancy Forecasting (7 days out)",
      "Smart Labor Optimization with automated shifts",
      "Core standard POS integration (Toast/Square/Aloha)",
      "SMS & Email team notifications",
      "Dynamic Margin insights & basic reporting",
      "Standard email customer support (24h SLA)"
    ],
    ctaText: "Start Atelier Trial"
  },
  {
    id: "growth",
    name: "Nuvio Premium",
    price: "$549",
    billing: "per month, billed annually",
    description: "Perfect for established dining venues and growing, ambitious culinary concepts.",
    features: [
      "Precision AI Occupancy & Demand Forecasting (14 days out)",
      "Autonomous supply chain and item-level inventory matching",
      "Multi-terminal staffing synchronizer",
      "Chef and GM email operational daily digest reports",
      "Autonomous client loyalty & regular tracking with VIP triggers",
      "Priority executive support with dedicated system engineer (4h SLA)"
    ],
    isPopular: true,
    ctaText: "Start Premium Trial"
  },
  {
    id: "enterprise",
    name: "Nuvio Grand Union",
    price: "Custom",
    billing: "bespoke institutional pricing",
    description: "Uncompromised fleet intelligence for multi-state brands, luxury hotel groups, and franchise chains.",
    features: [
      "Real-time Enterprise Forecasting covering unlimited properties",
      "Full API and database access for custom internal data tables",
      "Cross-location workforce routing and roster suggestions",
      "Premium custom ML models tuned specifically to your brand footprint",
      "Guaranteed uptime SLA (99.98%) and SOC-2 compliance audits",
      "White-labeled GM messaging applications and advisory service integrations",
      "24/7/365 Dedicated operational account management director"
    ],
    ctaText: "Book Executive Demo"
  }
];

export const FAQS: FAQItem[] = [
  {
    question: "Which POS and reservation systems are supported?",
    answer: "Nuvio integrates securely with all premium POS platforms including Toast, Micros Symphony, NCR Aloha, Clover, Square, and Lightspeed. We also sync with reservation engines such as OpenTable, Resy, and SevenRooms to map reservation schedules directly into labor plans."
  },
  {
    question: "How long does system onboarding and training take?",
    answer: "For standard locations, setup is completed in under 48 hours. Nuvio connects to your historic POS logs securely to seed the predictive model. No manual data entry or floor hardware is required."
  },
  {
    question: "Is Aura suitable for small, single-location bistros?",
    answer: "Yes. Our Atelier plan is scaled specifically for single-venue boutique restaurants. Owners save an average of 15 hours per week on staffing rosters, which quickly offsets the monthly investment."
  },
  {
    question: "How accurate are the staffing and inventory forecasts?",
    answer: "Most venues achieve 92%-96% accuracy within their first fortnight of deployment. The machine learning models continuously refine their output by ingesting real-time hyper-local variables, including local rain patterns, concert schedules, and competitor review velocity."
  },
  {
    question: "Can we support centralized operations for multiple locations?",
    answer: "Absolutely. Nuvio's Grand Union framework is designed specifically for multi-unit operators. It allows corporate executives and cluster GMs to standardise labor margins, audit inventory waste, and share top workforce performers across venues in real-time."
  }
];

export const POS_OPTIONS = [
  "Toast POS",
  "NCR Aloha",
  "Oracle Micros 3700 / Symphony",
  "Square for Restaurants",
  "Lightspeed Restaurant",
  "Clover Station",
  "Other POS / Proprietary System"
];

// Interactive Dashboard Simulated Data
export const CHART_DYNAMIC_DATA = [
  { hour: "11 AM", predictedGuests: 15, actualGuests: 12, recommendedStaff: 3, actualStaff: 4 },
  { hour: "12 PM", predictedGuests: 48, actualGuests: 52, recommendedStaff: 6, actualStaff: 5 },
  { hour: "1 PM", predictedGuests: 65, actualGuests: 60, recommendedStaff: 8, actualStaff: 8 },
  { hour: "2 PM", predictedGuests: 25, actualGuests: 22, recommendedStaff: 4, actualStaff: 5 },
  { hour: "3 PM", predictedGuests: 12, actualGuests: 10, recommendedStaff: 2, actualStaff: 3 },
  { hour: "4 PM", predictedGuests: 18, actualGuests: 15, recommendedStaff: 3, actualStaff: 3 },
  { hour: "5 PM", predictedGuests: 45, actualGuests: 42, recommendedStaff: 5, actualStaff: 6 },
  { hour: "6 PM", predictedGuests: 85, actualGuests: 88, recommendedStaff: 10, actualStaff: 8 },
  { hour: "7 PM", predictedGuests: 125, actualGuests: 128, recommendedStaff: 14, actualStaff: 13 },
  { hour: "8 PM", predictedGuests: 140, actualGuests: 138, recommendedStaff: 15, actualStaff: 15 },
  { hour: "9 PM", predictedGuests: 110, actualGuests: 115, recommendedStaff: 12, actualStaff: 14 },
  { hour: "10 PM", predictedGuests: 55, actualGuests: 58, recommendedStaff: 6, actualStaff: 8 },
  { hour: "11 PM", predictedGuests: 25, actualGuests: 20, recommendedStaff: 3, actualStaff: 5 },
];
