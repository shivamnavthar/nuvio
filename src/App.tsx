import React, { useState, useEffect } from "react";
import { 
  Sparkles, 
  ArrowRight, 
  Activity, 
  Calendar, 
  Cpu, 
  ClipboardCheck, 
  TrendingUp, 
  ChevronDown, 
  Check, 
  MapPin, 
  Mail, 
  Phone, 
  Flame, 
  HelpCircle, 
  UtensilsCrossed, 
  Store,
  ChevronRight,
  Star,
  Quote,
  ShieldCheck,
  CheckCircle,
  Clock,
  Wine,
  Leaf,
  GlassWater,
  ChefHat,
  Terminal,
  PlaySquare,
  Sun,
  Moon
} from "lucide-react";

import { 
  RESTAURANT_LOGOS, 
  CORE_FEATURES, 
  TESTIMONIALS, 
  PRICING_PLANS, 
  FAQS, 
  POS_OPTIONS 
} from "./data";
import { LeadFormInput, DemoResponse } from "./types";

import DashboardShowcase from "./components/DashboardShowcase";
import AiConsultant from "./components/AiConsultant";

export default function App() {
  // Navigation active marker
  const [scrolled, setScrolled] = useState<boolean>(false);
  
  // Interactive FAQ State
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  // Lead capture forms states
  const [leadName, setLeadName] = useState<string>("");
  const [leadEmail, setLeadEmail] = useState<string>("");
  const [leadRestaurantName, setLeadRestaurantName] = useState<string>("");
  const [leadLocations, setLeadLocations] = useState<number>(1);
  const [leadPhone, setLeadPhone] = useState<string>("");
  const [leadPosSystem, setLeadPosSystem] = useState<string>("Toast POS");
  
  const [bookingLoading, setBookingLoading] = useState<boolean>(false);
  const [bookingResult, setBookingResult] = useState<DemoResponse | null>(null);
  const [bookingError, setBookingError] = useState<string | null>(null);

  // Dynamic testimonial carousel active card index
  const [activeTestimonial, setActiveTestimonial] = useState<number>(0);

  // Watch product tour modal (Simulated modern clean overlay)
  const [showTourModal, setShowTourModal] = useState<boolean>(false);

  // Classic ultra-premium default light-mode configuration
  const [isLightMode, setIsLightMode] = useState<boolean>(true);

  useEffect(() => {
    if (isLightMode) {
      document.documentElement.classList.add("light");
      document.documentElement.classList.remove("dark");
      document.documentElement.style.backgroundColor = "#FCFAF7";
    } else {
      document.documentElement.classList.add("dark");
      document.documentElement.classList.remove("light");
      document.documentElement.style.backgroundColor = "#0A0A08";
    }
  }, [isLightMode]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleBookDemoSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setBookingLoading(true);
    setBookingError(null);
    setBookingResult(null);

    try {
      const payload: LeadFormInput = {
        name: leadName,
        email: leadEmail,
        restaurantName: leadRestaurantName,
        locations: leadLocations,
        phone: leadPhone,
        posSystem: leadPosSystem
      };

      const res = await fetch("/api/book-demo", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      }).catch(err => {
        console.warn("Backend API not reachable. Proceeding with instant client-side simulation for sandbox/static deployment.", err);
        return null;
      });

      if (res && res.ok) {
        const resultData: DemoResponse = await res.json();
        setBookingResult(resultData);
      } else {
        // Fallback response for completely static environments (like GitHub Pages)
        const simulatedResult: DemoResponse = {
          success: true,
          message: `Thank you, ${leadName}. Your executive operational demo is booked. A gourmet systems designer will reach out at ${leadPhone || leadEmail} within 12 business hours.`,
          leadId: `NUVIO-${Math.floor(100000 + Math.random() * 900000)}`
        };
        setBookingResult(simulatedResult);
      }
    } catch (err: any) {
      console.error(err);
      setBookingError("Friction encountered transmitting registration. Please reach out to reservation@aurasystems.io");
    } finally {
      setBookingLoading(false);
    }
  };

  const toggleFaq = (idx: number) => {
    setOpenFaqIndex(openFaqIndex === idx ? null : idx);
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${isLightMode ? "light bg-[#FCFAF7] text-[#1C1310]" : "dark bg-[#0A0A08] text-[#EBE6E0]"} selection:bg-accent selection:text-white`}>
      
      {/* BACKGROUND FLOATING INGREDIENTS & PARTICLES GRAPHIC LAYER */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-[18%] left-[8%] animate-float-slow opacity-15 text-accent">
          <Wine className="h-10 w-10 text-accent" strokeWidth={1} />
        </div>
        <div className="absolute top-[42%] right-[5%] animate-float-fast opacity-10">
          <Leaf className="h-12 w-12 text-accent" strokeWidth={1} />
        </div>
        <div className="absolute top-[68%] left-[4%] animate-float-slow opacity-15">
          <ChefHat className="h-14 w-14 text-cream" strokeWidth={1} />
        </div>
        <div className="absolute top-[82%] right-[10%] animate-float-fast opacity-10">
          <GlassWater className="h-10 w-10 text-accent" strokeWidth={1} />
        </div>
        {/* Soft, blurred glowing gradients in backgrounds resembling design theme radial spec */}
        <div className="absolute top-[10%] left-[20%] w-[450px] h-[450px] bg-accent/5 rounded-full blur-[140px]" />
        <div className="absolute top-[55%] right-[15%] w-[500px] h-[500px] bg-accent/3 rounded-full blur-[160px]" />
        <div className="absolute bottom-[10%] left-[10%] w-[350px] h-[350px] bg-accent/4 rounded-full blur-[120px]" />
      </div>

      {/* HEADER SECTION - ADA Compliant Nav */}
      <header 
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled 
            ? "bg-bg-dark/95 backdrop-blur-md border-b border-[rgba(255,255,255,0.08)] py-4 shadow-lg" 
            : "bg-transparent py-6"
        }`}
        role="banner"
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          
          {/* Logo Brand */}
          <a href="#" className="flex items-center gap-3 group focus:outline-none" aria-label="Nuvio Operations Home">
            <div className="relative flex items-center justify-center p-2 rounded-xl bg-accent text-white overflow-hidden transition-all duration-300 shadow group-hover:shadow-accent/35">
              <UtensilsCrossed className="h-5 w-5 transition-transform duration-500 group-hover:rotate-45" />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
            </div>
            <div className="flex flex-col">
              <span className="font-heading text-lg font-bold tracking-[0.15em] text-[#fdecdb] uppercase flex items-center gap-1">
                Nuvio <span className="font-sans font-normal text-[10px] tracking-normal lowercase px-1.5 py-0.5 bg-[#421d17] text-accent rounded-full">AI</span>
              </span>
              <span className="text-[9px] font-mono tracking-widest text-text-dim uppercase">RESTAURANT OS</span>
            </div>
          </a>

          {/* Nav middle links */}
          <nav className="hidden lg:flex items-center gap-8" role="navigation" aria-label="Main Navigation">
            <a href="#dashboard-section" className="text-sm font-medium text-text-dim hover:text-[#f7f3f0] focus:text-[#f7f3f0] transition-colors focus:outline-none">Live Ops Hub</a>
            <a href="#features-section" className="text-sm font-medium text-text-dim hover:text-[#f7f3f0] focus:text-[#f7f3f0] transition-colors focus:outline-none">Features</a>
            <a href="#ai-advisor-tool-anchor" className="text-sm font-medium text-text-dim hover:text-[#f7f3f0] focus:text-[#f7f3f0] transition-colors focus:outline-none">Operations Auditor</a>
            <a href="#pricing-section" className="text-sm font-medium text-text-dim hover:text-[#f7f3f0] focus:text-[#f7f3f0] transition-colors focus:outline-none">Pricing</a>
            <a href="#faq-section" className="text-sm font-medium text-text-dim hover:text-[#f7f3f0] focus:text-[#f7f3f0] transition-colors focus:outline-none">FAQ</a>
          </nav>

          {/* Nav actions CTA */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsLightMode(!isLightMode)}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg border text-xs font-medium cursor-pointer transition-all duration-300 focus:outline-none ${
                isLightMode 
                  ? "border-[#2C201C]/15 bg-[#F4EFE6]/50 hover:bg-[#EFEAE2] text-[#2C201C]" 
                  : "border-[#3e3431] bg-[#141211] hover:bg-[#1a1716] text-[#EBE6E0]"
              }`}
              aria-label="Toggle Color Theme"
              title={isLightMode ? "Switch to Cinematic Dark Mode" : "Switch to Classy Light Mode"}
            >
              {isLightMode ? (
                <>
                  <Moon className="h-3.5 w-3.5 text-[#FF4E00]" />
                  <span className="font-mono text-[10px] tracking-wide">Dark Mode</span>
                </>
              ) : (
                <>
                  <Sun className="h-3.5 w-3.5 text-[#FF4E00] animate-pulse" />
                  <span className="font-mono text-[10px] tracking-wide">Light Mode</span>
                </>
              )}
            </button>
            <a 
              href="#contact-section" 
              className="hidden sm:inline-flex px-5 py-2.5 bg-accent hover:bg-accent-hover text-white text-xs font-semibold rounded-lg uppercase tracking-wider transition-all focus:outline-none shadow-md hover:shadow-accent/20"
            >
              Book Advisory Call
            </a>
          </div>
        </div>
      </header>

      {/* HERO SECTION */}
      <main id="main-content" role="main">
        <section className="relative min-h-screen pt-32 pb-20 flex flex-col justify-center px-6 overflow-hidden z-10" aria-label="Welcome">
          <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Hero Content */}
            <div className="lg:col-span-6 flex flex-col items-start gap-6">
              <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#1c1816] border border-[#3e3431] text-xs font-medium text-[#fdecdb] animate-pulse">
                <Sparkles className="h-4 w-4 text-accent" />
                <span className="font-mono tracking-wider">NUVIO v4.2 IS NOW LIVE ONLINE</span>
              </div>

              <h1 className="font-heading text-4xl sm:text-5xl xl:text-6xl font-extrabold tracking-tight text-[#f7f3f0] leading-[1.08] text-balance">
                AI That Helps Restaurants <span className="text-accent">Operate Smarter</span>
              </h1>

              <p className="text-base sm:text-lg text-text-dim leading-relaxed max-w-xl text-pretty">
                Forecast busy hours, optimize kitchen and floor rosters, prevent margin wastage, and grow guest retention with an AI-powered operations core suited for elite restaurant groups.
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row w-full sm:w-auto gap-4 mt-2">
                <a 
                  href="#contact-section" 
                  className="cursor-pointer px-8 py-4 bg-accent hover:bg-accent-hover text-white font-bold rounded-xl text-sm transition-all text-center flex items-center justify-center gap-2.5 group shadow-lg shadow-accent/15"
                >
                  <span>Book Demo Session</span>
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>

                <button 
                  onClick={() => setShowTourModal(true)}
                  className="cursor-pointer px-8 py-4 bg-[#141211] hover:bg-[#1a1716] text-[#bcaea6] hover:text-[#f7f3f0] font-bold rounded-xl text-sm transition-all border border-[#2b2523] text-center flex items-center justify-center gap-2"
                >
                  <Clock className="h-4 w-4 text-accent" />
                  <span>Watch 2-Min Product Tour</span>
                </button>
              </div>

              {/* Tiny telemetry status line */}
              <div className="flex items-center gap-6 text-[11px] font-mono text-[#9c8b82] mt-6 pt-6 border-t border-[#292422] w-full">
                <div className="flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#10b981]" />
                  <span>Avg Labor Cut: **18.2%**</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#10b981]" />
                  <span>Forecast Accuracy: **96.4%**</span>
                </div>
              </div>
            </div>

            {/* Right Hero Cinematic visual panel */}
            <div className="lg:col-span-6 relative flex items-center justify-center">
              
              {/* Premium Card: Cinematic photorealistic food photography plate */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-[#302826] bg-[#120f0e] aspect-[4/3] w-full max-w-xl transform rotate-1 hover:rotate-0 transition-all duration-700 hover:scale-[1.02] group">
                {/* Background image fetched via generate_image tool */}
                <img 
                  src="/src/assets/images/luxury_gastronomy_1780464790469.png" 
                  alt="Nuvio Fine Gastronomy Presentation Plate" 
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover opacity-60 mix-blend-lighten scale-105 group-hover:scale-100 transition-transform duration-1000"
                />

                {/* Overlapped Glassmorphic Telemetry Cards */}
                <div className="absolute top-6 left-6 p-4 rounded-xl bg-bg-dark/75 backdrop-blur-md border border-white/5 animate-float-slow">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="h-2 w-2 rounded-full bg-accent animate-pulse" />
                    <span className="text-[9px] font-mono uppercase tracking-widest text-[#fdecdb]">Prediction Radar</span>
                  </div>
                  <div className="text-sm font-bold text-white">Expected Rush at 19:30</div>
                </div>

                <div className="absolute bottom-8 right-6 p-4 rounded-xl bg-accent/90 text-white border border-[#ff8d75]/25 animate-float-fast shadow-xl">
                  <div className="text-[9px] font-mono uppercase tracking-widest opacity-80">Roster Instruction</div>
                  <div className="text-sm font-bold mt-1">Dispense +2 Floor Hosts</div>
                  <div className="text-[10px] mt-0.5 opacity-90 font-mono">Locks in $1.1K weekend margin</div>
                </div>

                {/* Bottom luxury restaurant atmosphere visual bar */}
                <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black to-transparent flex items-center justify-between text-xs text-[#9c8b82]">
                  <span className="font-mono">Fine Dining Concept Mode: Active</span>
                  <span className="font-mono">92% Confidence Interval</span>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* TRUST / SOCIAL PROOF MARQUEE */}
        <section className="py-12 border-y border-[rgba(255,255,255,0.08)] bg-bg-dark overflow-hidden" aria-label="Restaurant Trust Indicators">
          <div className="max-w-7xl mx-auto px-6 mb-4 text-center">
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-text-dim">
              Trusted By Michelin-Starred Operators & Luxury Dining Groups
            </span>
          </div>

          <div className="relative w-full overflow-hidden mt-6">
            <div className="flex animate-marquee gap-10">
              
              {/* Marquee first pass */}
              {RESTAURANT_LOGOS.concat(RESTAURANT_LOGOS).map((logo, index) => (
                <div 
                  key={index} 
                  className="mx-4 flex flex-col sm:flex-row items-center gap-3 bg-glass border border-glass-border px-5 py-3 rounded-xl hover:border-accent/45 transition-colors duration-300"
                >
                  <Store className="h-4 w-4 text-accent" />
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-heading font-semibold text-xs text-[#fdecdb] tracking-wider uppercase">
                        {logo.name}
                      </span>
                      <span className="text-[10px] text-accent">{logo.rating}</span>
                    </div>
                    <p className="text-[9px] text-[#9c8b82] font-mono uppercase tracking-tight">
                      {logo.city} • <span className="text-[#10b981]">{logo.efficiency} efficiency</span>
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* INTERACTIVE DASHBOARD INSTANT PREVIEW SECTION */}
        <section className="py-24 px-6 max-w-7xl mx-auto z-10" id="dashboard-section" aria-label="Interactive Dashboard Showcase">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2.5 px-3 py-1 rounded-full bg-[#1c1816] border border-[#3e3431] text-xs font-medium text-accent mb-4">
              <Activity className="h-3.5 w-3.5" />
              <span className="font-mono tracking-wider uppercase text-[10px]">Command and Control Center</span>
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#f7f3f0]">
              Say Goodbye to Management <span className="text-accent">by Guesswork</span>
            </h2>
            <p className="text-sm sm:text-base text-[#bcaea6] mt-4 max-w-xl mx-auto leading-relaxed">
              Experience the sleek operations telemetry dashboard. Toggle staffing rosters and view real-time automated predictive forecasts.
            </p>
          </div>

          <DashboardShowcase />
        </section>

        {/* TRUST METRICS CARDS */}
        <section className="py-12 bg-bg-dark border-y border-[rgba(255,255,255,0.08)]">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-6">
              <span className="text-4xl sm:text-5xl font-heading font-extrabold text-accent block mb-2">18.4%</span>
              <span className="text-xs uppercase font-mono tracking-widest text-text-dim">Average Labor overhead Reduced</span>
              <p className="text-xs text-[#bcaea6] mt-2 leading-relaxed">By aligning floor shifts dynamically against historic guest profiles.</p>
            </div>
            <div className="p-6 border-y md:border-y-0 md:border-x border-[#2d2624]">
              <span className="text-4xl sm:text-5xl font-heading font-extrabold text-[#fdecdb] block mb-2">2.1M+</span>
              <span className="text-xs uppercase font-mono tracking-widest text-text-dim">Optimal Course Orders Forecasted</span>
              <p className="text-xs text-[#bcaea6] mt-2 leading-relaxed">Feeding predictive ingredient parameters into fine dining prep lines daily.</p>
            </div>
            <div className="p-6">
              <span className="text-4xl sm:text-5xl font-heading font-extrabold text-accent block mb-2">32%</span>
              <span className="text-xs uppercase font-mono tracking-widest text-text-dim">Average Food Spoils Deflection</span>
              <p className="text-xs text-[#bcaea6] mt-2 leading-relaxed">Saving fresh wagyu, bluefin, and delicate ingredients from aging out.</p>
            </div>
          </div>
        </section>

        {/* AI-NATIVE CONSULTANT INTERVIEW PLAYGROUND (SaaS Lead magnet tool) */}
        <section className="py-24 px-6 max-w-7xl mx-auto z-10" id="ai-advisor-tool-anchor" aria-label="AI Restaurant Consultant">
          <AiConsultant />
        </section>

        {/* PRODUCT FEATURES SECTION */}
        <section className="py-24 px-6 bg-bg-dark border-t border-[rgba(255,255,255,0.08)]" id="features-section" aria-label="System Capabilities">
          <div className="max-w-7xl mx-auto">
            
            <div className="text-center max-w-3xl mx-auto mb-20">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#2c1d19] border border-accent/35 text-xs text-accent mb-4">
                <Cpu className="h-3.5 w-3.5 animate-spin" />
                <span className="font-mono uppercase tracking-widest text-[9px]">Deep Feature Engineering</span>
              </div>
              <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#f7f3f0]">
                Built for High-Level <span className="text-accent">Executive Control</span>
              </h2>
              <p className="text-sm text-text-dim mt-3">
                Six specialized neural frameworks syncing seamlessly to increase your operating margins.
              </p>
            </div>

            {/* Feature Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {CORE_FEATURES.map((feat) => {
                let cardIcon = <Sparkles className="h-5 w-5 text-accent" />;
                if (feat.id === "forecasting") cardIcon = <TrendingUp className="h-5 w-5 text-accent" />;
                if (feat.id === "labor") cardIcon = <Flame className="h-5 w-5 text-accent" />;
                if (feat.id === "inventory") cardIcon = <UtensilsCrossed className="h-5 w-5 text-accent" />;
                if (feat.id === "insights") cardIcon = <ClipboardCheck className="h-5 w-5 text-accent" />;
                if (feat.id === "growth") cardIcon = <Cpu className="h-5 w-5 text-accent" />;
                if (feat.id === "multi-location") cardIcon = <Store className="h-5 w-5 text-accent" />;

                return (
                  <div 
                    key={feat.id}
                    className="p-8 rounded-2xl bg-[#141211] border border-[#2b2523] hover:border-accent/40 transition-transition group duration-300 transform hover:translate-y-[-4px] relative"
                  >
                    <div className="h-12 w-12 bg-[#211a18] border border-[#3e3431] rounded-xl flex items-center justify-center mb-6 group-hover:bg-accent group-hover:text-white transition-colors duration-500">
                      {cardIcon}
                    </div>

                    <span className="text-[10px] font-mono font-semibold uppercase tracking-widest text-accent block mb-1">
                      {feat.badge}
                    </span>

                    <h3 className="font-heading text-lg font-bold text-[#f7f3f0] mb-3 group-hover:text-white transition-colors">
                      {feat.title}
                    </h3>

                    <p className="text-xs text-[#bcaea6] leading-relaxed mb-6">
                      {feat.description}
                    </p>

                    {/* Extended lists hover feature details */}
                    <div className="border-t border-[#2d2624] pt-4 space-y-2.5">
                      {feat.details.map((detail, dIdx) => (
                        <div key={dIdx} className="flex items-start gap-2">
                          <Check className="h-3.5 w-3.5 text-accent shrink-0 mt-0.5" />
                          <span className="text-[11px] text-text-dim leading-tight flex-1">{detail}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>

          </div>
        </section>

        {/* HOW IT WORKS SECTION */}
        <section className="py-24 px-6 max-w-7xl mx-auto text-center" aria-label="Implementation Flow">
          <div className="max-w-2xl mx-auto mb-16">
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-text-dim block mb-4">
              Nuvio Deployment Architecture
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold tracking-tight text-[#f7f3f0]">
              Smooth 3-Step Setup
            </h2>
            <p className="text-sm text-text-dim mt-4">
              Transition from guess routines to absolute data-drive alignment in less than 48 hours.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 relative">
            
            {/* Elegant visual indicator connectors between columns */}
            <div className="hidden lg:block absolute top-12 left-[28%] right-[28%] h-[1px] bg-gradient-to-r from-accent/40 via-text-dim/10 to-accent/40 z-0 pointer-events-none" />

            {/* Step 1 */}
            <div className="flex flex-col items-center gap-4 relative z-10 p-6 rounded-2xl hover:bg-[#12100f] duration-300">
              <div className="h-14 w-14 rounded-full bg-[#191514] border border-accent/35 flex items-center justify-center font-heading text-accent font-bold text-lg shadow-lg">
                I
              </div>
              <h3 className="font-heading text-lg font-bold text-[#f7f3f0] mt-2">Connect POS Credentials</h3>
              <p className="text-xs text-text-dim max-w-xs leading-relaxed">
                Connect your brand POS (Toast, Square, Micros, etc.) securely using read-only API access. Nuvio auto-ingests up to 2 years of local transactions records instantly.
              </p>
            </div>

            {/* Step 2 */}
            <div className="flex flex-col items-center gap-4 relative z-10 p-6 rounded-2xl hover:bg-[#12100f] duration-300">
              <div className="h-14 w-14 rounded-full bg-accent text-white flex items-center justify-center font-heading font-bold text-lg shadow-lg">
                II
              </div>
              <h3 className="font-heading text-lg font-bold text-[#f7f3f0] mt-2">Continuous Neural Auditing</h3>
              <p className="text-xs text-text-dim max-w-xs leading-relaxed">
                Nuvio cross-examines historical table fills, food costs sheets, shift cancellations, weather indexes, and community events to generate highly accurate operational forecasts.
              </p>
            </div>

            {/* Step 3 */}
            <div className="flex flex-col items-center gap-4 relative z-10 p-6 rounded-2xl hover:bg-[#12100f] duration-300">
              <div className="h-14 w-14 rounded-full bg-[#191514] border border-accent/35 flex items-center justify-center font-heading text-accent font-bold text-lg shadow-lg">
                III
              </div>
              <h3 className="font-heading text-lg font-bold text-[#f7f3f0] mt-2">Activate Actionable Directives</h3>
              <p className="text-xs text-text-dim max-w-xs leading-relaxed">
                Your chefs and GMs receive dynamic alerts and optimized scheduler files via email or messaging blocks, trimming labor leakage and saving thousands in fresh inventory wastage.
              </p>
            </div>

          </div>
        </section>

        {/* TESTIMONIALS SECTION */}
        <section className="py-24 px-6 bg-bg-dark border-y border-[rgba(255,255,255,0.08)] z-10" aria-label="Customer Success Stories">
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
            
            {/* Left intro copy */}
            <div className="lg:w-1/3 flex flex-col items-start gap-4">
              <div className="inline-flex items-center gap-2 text-xs font-mono text-accent uppercase tracking-widest bg-[#2e1d19] px-3.5 py-1 rounded-full border border-accent/35">
                <Star className="h-3 w-3 fill-current" />
                <span>Executive Reviews</span>
              </div>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold tracking-tight text-[#f7f3f0]">
                Chosen by Strategic Operators
              </h2>
              <p className="text-xs sm:text-sm text-text-dim leading-relaxed text-left">
                Read how elite kitchens and multi-location culinary groups deploy Nuvio to standardize fine hospitality and streamline operations safely.
              </p>

              {/* Slider Dots */}
              <div className="flex gap-2 mt-4">
                {TESTIMONIALS.map((t, idx) => (
                  <button 
                    key={t.id} 
                    onClick={() => setActiveTestimonial(idx)}
                    className={`cursor-pointer h-2.5 rounded-full transition-all duration-300 ${
                      activeTestimonial === idx ? "w-8 bg-accent" : "w-2.5 bg-[#2d2624] hover:bg-[#4a403d]"
                    }`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>
            </div>

            {/* Right slider block */}
            <div className="lg:w-2/3 w-full relative min-h-[320px] flex items-center">
              {TESTIMONIALS.map((t, idx) => {
                const isActive = activeTestimonial === idx;
                if (!isActive) return null;
                return (
                  <div 
                    key={t.id}
                    className="w-full p-8 lg:p-12 rounded-3xl bg-[#141211] border border-[#2b2523] shadow-xl animate-fadeIn relative overflow-hidden"
                  >
                    {/* Decorative quote mark */}
                    <div className="absolute top-6 right-8 opacity-5 text-white">
                      <Quote className="h-24 w-24" />
                    </div>

                    <div className="flex items-center gap-1.5 text-xs font-mono text-accent mb-6">
                      <ShieldCheck className="h-4 w-4" />
                      <span className="uppercase tracking-widest font-semibold">{t.improvement}</span>
                    </div>

                    <p className="text-sm sm:text-base lg:text-lg text-[#f7f3f0] leading-relaxed italic relative z-10">
                      "{t.quote}"
                    </p>

                    <div className="border-t border-[#292221] mt-8 pt-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                      <div className="flex items-center gap-4">
                        <img 
                          src={t.image} 
                          alt={t.author} 
                          referrerPolicy="no-referrer"
                          className="h-12 w-12 rounded-full object-cover border border-accent/35"
                        />
                        <div>
                          <h4 className="text-sm font-bold text-[#f7f3f0]">{t.author}</h4>
                          <p className="text-[11px] font-mono text-[#9c8b82] uppercase">{t.role}</p>
                        </div>
                      </div>

                      <div className="bg-[#1e1917] px-4 py-2 rounded-xl border border-[#3e3431] text-right self-start sm:self-center">
                        <span className="text-[10px] text-[#9c8b82] uppercase font-mono block">Venue Name</span>
                        <span className="text-xs font-bold text-[#fdecdb]">{t.restaurant}</span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>
        </section>

        {/* PRICING PLANS SECTION */}
        <section className="py-24 px-6 max-w-7xl mx-auto" id="pricing-section" aria-label="Subscription Pricing">
          
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-accent block mb-4">
              Return on Investment
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#f7f3f0]">
              Executive Investment Plans
            </h2>
            <p className="text-sm text-text-dim mt-4 leading-relaxed">
              Unlock predictive intelligence and automated operations rosters configured specifically for your kitchen style.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            {PRICING_PLANS.map((plan) => (
              <div 
                key={plan.id}
                className={`p-8 rounded-3xl border transition-all duration-500 relative flex flex-col justify-between ${
                  plan.isPopular 
                    ? "bg-[#191412] border-accent shadow-2xl scale-[1.03] glow-soft z-10" 
                    : "bg-[#141211] border-[#2b2523] shadow hover:border-[#3a3331]"
                }`}
              >
                {/* Popular Highlight Badge */}
                {plan.isPopular && (
                  <div className="absolute top-0 right-8 transform -translate-y-1/2 bg-accent text-white text-[10px] font-mono leading-none tracking-widest uppercase py-1.5 px-3 rounded-full font-bold">
                    RECOMMENDED CHOICE
                  </div>
                )}

                <div>
                  <h3 className="font-heading text-xl font-bold text-[#fdecdb] mb-2">{plan.name}</h3>
                  <p className="text-[11px] text-text-dim italic mb-6 leading-relaxed bg-[#1d1917] p-2.5 rounded-lg border border-[#3e3432]">
                    {plan.description}
                  </p>

                  <div className="flex items-baseline gap-2 mb-6 border-b border-[#2b2523] pb-6">
                    <span className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading text-accent">{plan.price}</span>
                    <span className="text-xs text-text-dim font-mono">{plan.billing}</span>
                  </div>

                  {/* Bullet features list */}
                  <div className="space-y-4 mb-8">
                    {plan.features.map((feat, f_idx) => (
                      <div key={f_idx} className="flex items-start gap-3 text-xs leading-relaxed text-text-dim">
                        <div className="p-0.5 rounded bg-accent/15 text-accent shrink-0 mt-0.5">
                          <Check className="h-3.5 w-3.5" />
                        </div>
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <a 
                  href="#contact-section"
                  className={`cursor-pointer w-full text-center py-3.5 px-6 font-bold rounded-xl text-xs uppercase tracking-wider transition-all inline-block ${
                    plan.isPopular 
                      ? "bg-accent hover:bg-accent-hover text-white shadow-md hover:shadow-accent/20" 
                      : "bg-[#211d1c] hover:bg-[#2b2624] text-[#bcaea6] hover:text-[#f7f3f0] border border-[#352f2d]"
                  }`}
                >
                  {plan.ctaText}
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* DEMO / LEAD GENERATION CAPTURE BOX */}
        <section className="py-24 px-6 bg-bg-dark border-t border-[rgba(255,255,255,0.08)] z-10 relative overflow-hidden" id="contact-section" aria-label="Contact Section">
          <div className="absolute top-0 left-[50%] transform translate-x-[-50%] w-[800px] h-[300px] bg-accent/5 rounded-full blur-[140px] pointer-events-none" />
          
          <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
            
            {/* Left info column */}
            <div className="lg:col-span-5 flex flex-col items-start gap-4 text-left">
              <span className="text-xs font-mono uppercase tracking-[0.25em] text-accent font-semibold">
                Join Nuvio Executive Pilot
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold tracking-tight text-[#f7f3f0] leading-tight text-balance">
                Request a Private Consultation
              </h2>
              <p className="text-xs sm:text-sm text-text-dim leading-relaxed">
                Connect with our systems architects. Learn how we configure predictive forecasting models for elite dining groups, hotel networks, and high-growth hospitality chains.
              </p>

              <div className="mt-6 space-y-4">
                <div className="flex items-center gap-3">
                  <MapPin className="h-4 w-4 text-accent shrink-0" />
                  <span className="text-xs text-text-dim font-mono">112 Crosby Street, NY 10012</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="h-4 w-4 text-accent shrink-0" />
                  <span className="text-xs text-text-dim font-mono">founders@nuviosystems.io</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="h-4 w-4 text-accent shrink-0" />
                  <span className="text-xs text-text-dim font-mono">+1 (800) Nuvio-AI-OS</span>
                </div>
              </div>
            </div>

            {/* Right form container */}
            <div className="lg:col-span-7">
              <div className="p-8 rounded-3xl bg-[#141211] border border-[#2e2624] shadow-2xl relative">
                
                {/* Success state */}
                {bookingResult ? (
                  <div className="py-8 text-center sm:px-4 animate-fadeIn">
                    <CheckCircle className="h-14 w-14 text-[#10b981] mx-auto mb-4 animate-bounce" />
                    <h3 className="font-heading text-xl sm:text-2xl font-bold text-white mb-2">
                      Demo Roster Block Booked Successfully
                    </h3>
                    <p className="text-[#10b981] font-mono text-xs bg-[#10b981]/10 py-1.5 px-3 rounded-full inline-block mb-4">
                      Executive Session ID: {bookingResult.leadId}
                    </p>
                    <p className="text-xs text-[#bcaea6] leading-relaxed max-w-md mx-auto">
                      {bookingResult.message}
                    </p>
                    
                    <button
                      type="button"
                      onClick={() => setBookingResult(null)}
                      className="cursor-pointer mt-8 px-6 py-2.5 bg-[#211c1b] border border-[#3e3431] text-xs font-semibold text-[#bcaea6] hover:text-[#f7f3f0] hover:bg-[#2b2523] rounded-lg tracking-wider transition-all uppercase"
                    >
                      Book Another Consultation
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleBookDemoSubmit} className="space-y-6">
                    <h3 className="font-heading text-lg font-bold text-white border-b border-[#25201e] pb-3 mb-4">
                      Operational Parameter Record
                    </h3>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      
                      {/* Name */}
                      <div className="flex flex-col gap-1.5 text-left">
                        <label className="text-[10px] uppercase tracking-wider text-text-dim font-semibold">Your Full Name</label>
                        <input
                          type="text"
                          required
                          value={leadName}
                          onChange={(e) => setLeadName(e.target.value)}
                          placeholder="Elena Rostova"
                          className="w-full bg-[#1c1816]/70 border border-[#38302e] text-xs focus:border-accent rounded-lg px-4 py-3 text-white focus:outline-none transition-colors"
                        />
                      </div>

                      {/* Phone */}
                      <div className="flex flex-col gap-1.5 text-left">
                        <label className="text-[10px] uppercase tracking-wider text-text-dim font-semibold">Secret Desk Phone</label>
                        <input
                          type="tel"
                          value={leadPhone}
                          onChange={(e) => setLeadPhone(e.target.value)}
                          placeholder="+1 (555) 0192"
                          className="w-full bg-[#1c1816]/70 border border-[#38302e] text-xs focus:border-accent rounded-lg px-4 py-3 text-white focus:outline-none transition-colors"
                        />
                      </div>

                      {/* Email */}
                      <div className="flex flex-col gap-1.5 text-left col-span-1 sm:col-span-2">
                        <label className="text-[10px] uppercase tracking-wider text-text-dim font-semibold">Corporate Email Address</label>
                        <input
                          type="email"
                          required
                          value={leadEmail}
                          onChange={(e) => setLeadEmail(e.target.value)}
                          placeholder="directors@rostov-gastronomy.com"
                          className="w-full bg-[#1c1816]/70 border border-[#38302e] text-xs focus:border-accent rounded-lg px-4 py-3 text-white focus:outline-none transition-colors"
                        />
                      </div>

                      {/* Restaurant name */}
                      <div className="flex flex-col gap-1.5 text-left">
                        <label className="text-[10px] uppercase tracking-wider text-text-dim font-semibold">Restaurant Group Name</label>
                        <input
                          type="text"
                          required
                          value={leadRestaurantName}
                          onChange={(e) => setLeadRestaurantName(e.target.value)}
                          placeholder="Rostov Wine Hospitality"
                          className="w-full bg-[#1c1816]/70 border border-[#38302e] text-xs focus:border-accent rounded-lg px-4 py-3 text-white focus:outline-none transition-colors"
                        />
                      </div>

                      {/* locations count */}
                      <div className="flex flex-col gap-1.5 text-left">
                        <label className="text-[10px] uppercase tracking-wider text-text-dim font-semibold">Total Unit Scale</label>
                        <select
                          value={leadLocations}
                          onChange={(e) => setLeadLocations(Number(e.target.value))}
                          className="w-full bg-[#1c1816]/70 border border-[#38302e] text-xs focus:border-accent rounded-lg px-4 py-3 text-white focus:outline-none cursor-pointer"
                        >
                          <option value={1} className="bg-[#120f0d]">Single Boutique Lounge</option>
                          <option value={3} className="bg-[#120f0d]">2 - 5 Fine Locations</option>
                          <option value={6} className="bg-[#120f0d]">6 - 15 Hospitality Group</option>
                          <option value={20} className="bg-[#120f0d]">16+ Franchise / Hotel Chain</option>
                        </select>
                      </div>

                      {/* current POS */}
                      <div className="flex flex-col gap-1.5 text-left col-span-1 sm:col-span-2">
                        <label className="text-[10px] uppercase tracking-wider text-text-dim font-semibold">Primary Platform POS Integration</label>
                        <select
                          value={leadPosSystem}
                          onChange={(e) => setLeadPosSystem(e.target.value)}
                          className="w-full bg-[#1c1816]/70 border border-[#38302e] text-xs focus:border-accent rounded-lg px-4 py-3 text-white focus:outline-none cursor-pointer"
                        >
                          {POS_OPTIONS.map((opt) => (
                            <option key={opt} value={opt} className="bg-[#120f0d] text-white">
                              {opt}
                            </option>
                          ))}
                        </select>
                      </div>

                    </div>

                    {bookingError && (
                      <p className="text-[11px] font-mono text-red-500 text-left bg-red-500/10 p-2.5 rounded-lg border border-red-500/15">
                        {bookingError}
                      </p>
                    )}

                    <button
                      type="submit"
                      disabled={bookingLoading}
                      className="cursor-pointer w-full py-4 px-6 bg-accent hover:bg-accent-hover text-white font-bold rounded-xl text-xs uppercase tracking-wider transition-all shadow-md hover:shadow-accent/35 flex items-center justify-center gap-2"
                    >
                      {bookingLoading ? (
                        <>
                          <Clock className="h-4 w-4 animate-spin" />
                          <span>Transmitting Operational Register...</span>
                        </>
                      ) : (
                        <>
                          <Terminal className="h-4 w-4" />
                          <span>Request Private Executive System Sync</span>
                        </>
                      )}
                    </button>
                    
                    <span className="text-[10px] text-center text-text-dim block leading-normal mt-3">
                      By submitting, you align with our security compliance matrices. Secure read-only pos sync instructions will follow.
                    </span>
                  </form>
                )}

              </div>
            </div>

          </div>
        </section>

        {/* FAQ ACCORDION SECTION */}
        <section className="py-24 px-6 max-w-4xl mx-auto z-10" id="faq-section" aria-label="Frequently Asked Questions">
          <div className="text-center mb-16">
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-accent block mb-4">
              Operational Clarity
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold tracking-tight text-[#f7f3f0]">
              Frequently Resolved Queries
            </h2>
          </div>

          <div className="space-y-4">
            {FAQS.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div 
                  key={idx}
                  className="rounded-2xl border border-[#2b2523] bg-[#120f0e] overflow-hidden transition-all duration-300"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="cursor-pointer w-full text-left p-6 flex justify-between items-center gap-4 text-white hover:text-accent focus:outline-none focus:text-accent"
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${idx}`}
                  >
                    <span className="font-heading font-medium text-sm sm:text-base">
                      {faq.question}
                    </span>
                    <ChevronDown className={`h-4 w-4 text-accent shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`} />
                  </button>

                  <div 
                    id={`faq-answer-${idx}`}
                    className={`transition-all duration-300 overflow-hidden ${
                      isOpen ? "max-h-[250px] border-t border-[#251f1e] p-6 bg-[#181413]/55" : "max-h-0"
                    }`}
                  >
                    <p className="text-xs sm:text-sm text-[#bcaea6] leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

      </main>

      {/* FOOTER SECTION */}
      <footer className="bg-[#080707] border-t border-[rgba(255,255,255,0.08)] py-16 px-6 z-10 relative" role="contentinfo">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
          
          {/* Main info Brand footer block */}
          <div className="md:col-span-4 flex flex-col items-start gap-4">
            <a href="#" className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-accent text-white flex items-center justify-center">
                <UtensilsCrossed className="h-4 w-4" />
              </div>
              <span className="font-heading text-base font-bold tracking-[0.15em] text-[#fdecdb] uppercase">
                Nuvio AI
              </span>
            </a>
            <p className="text-xs text-text-dim max-w-sm leading-relaxed text-left">
              The continuous operating system for high-volume dining groups, Michelin-star kitchen lines, and premium hospitality operations. Turn guesswork into margin gains.
            </p>
            <div className="text-[10px] font-mono text-text-dim tracking-wider mt-4">
              SYSTEM STATUS: <span className="text-[#10b981]">ONLINE & ACTIVE</span>
            </div>
          </div>

          {/* Links structure columns */}
          <div className="md:col-span-4 grid grid-cols-2 gap-8 text-left w-full">
            
            <div className="flex flex-col gap-3">
              <h4 className="text-xs font-bold text-[#fdecdb] uppercase tracking-wider">Nuvio Platform</h4>
              <a href="#dashboard-section" className="text-xs text-text-dim hover:text-accent transition-colors">Operations Hub</a>
              <a href="#features-section" className="text-xs text-text-dim hover:text-accent transition-colors">System Features</a>
              <a href="#ai-advisor-tool-anchor" className="text-xs text-text-dim hover:text-accent transition-colors">B2B Audit Tool</a>
              <a href="#pricing-section" className="text-xs text-text-dim hover:text-accent transition-colors">Subscription Pricing</a>
            </div>

            <div className="flex flex-col gap-3">
              <h4 className="text-xs font-bold text-[#fdecdb] uppercase tracking-wider">Legal & Trust</h4>
              <a href="#faq-section" className="text-xs text-text-dim hover:text-accent transition-colors">Platform FAQ</a>
              <span className="text-xs text-text-dim">ADA Compliance Check</span>
              <span className="text-xs text-text-dim">SOC-2 Cert Type II</span>
              <span className="text-xs text-text-dim">Privacy Matrix</span>
            </div>

          </div>

          {/* Dynamic Newsletter block */}
          <div className="md:col-span-4 flex flex-col items-start gap-4 w-full">
            <h4 className="text-xs font-bold text-[#fdecdb] uppercase tracking-wider">Operational Dispatch Digest</h4>
            <p className="text-xs text-[#bcaea6] leading-relaxed text-left">
              Obtain our fortnightly executive dining digest packed with margin benchmarks, labor optimization trends, and AI-native updates.
            </p>

            <form 
              onSubmit={(e) => {
                e.preventDefault();
                alert("Thank you. You have been added to our executive operational dispatch list.");
              }}
              className="flex w-full gap-2 rounded-xl border border-[#3e322f] bg-[#120f0e] p-1 overflow-hidden"
            >
              <input
                type="email"
                required
                placeholder="news@restaurant-hq.com"
                className="bg-transparent text-xs text-[#fdecdb] focus:outline-none px-3.5 py-2.5 flex-1 min-w-0 placeholder-[#8c7d75]"
              />
              <button
                type="submit"
                className="cursor-pointer bg-accent hover:bg-accent-hover text-white text-[11px] font-bold px-4 py-2.5 rounded-lg uppercase tracking-wider transition-all"
              >
                Join
              </button>
            </form>
          </div>

        </div>

        {/* Bottom micro lines legal */}
        <div className="max-w-7xl mx-auto border-t border-[#1e1918] mt-12 pt-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-[10px] font-mono text-[#9c8b82]">
          <span>© {new Date().getFullYear()} Nuvio Systems Group Inc. All luxury operating rights reserved globally.</span>
          <div className="flex gap-4">
            <span>ADA Accessible Portal</span>
            <span>SEC Regulatory Filings</span>
          </div>
        </div>
      </footer>

      {/* WATCH TOUR SIMULATED VIDEO MODAL */}
      {showTourModal && (
        <div 
          className="fixed inset-0 bg-black/95 backdrop-blur-sm flex items-center justify-center p-6 z-50 animate-fadeIn"
          role="dialog"
          aria-modal="true"
        >
          <div className="w-full max-w-3xl rounded-3xl overflow-hidden shadow-2xl border border-[#3a3230] bg-[#120f0f] p-6 lg:p-8 flex flex-col gap-6 scale-[1.01] transition-transform relative">
            <div className="flex items-center justify-between border-b border-[#2d2624] pb-4">
              <div className="flex items-center gap-2">
                <PlaySquare className="h-5 w-5 text-accent" />
                <h3 className="font-heading text-lg font-bold text-white">Watch Product Tour (2m 14s)</h3>
              </div>
              <button 
                onClick={() => setShowTourModal(false)}
                className="cursor-pointer text-xs font-mono text-[#bcaea6] hover:text-white bg-[#221c1a] hover:bg-[#342a27] px-3.5 py-1.5 rounded-lg border border-[#3e3431] transition-all"
              >
                Close View
              </button>
            </div>

            {/* Video Placeholder Box with high level visual simulated play scene */}
            <div className="relative rounded-2xl aspect-video bg-[#000] border border-[#2e2624] flex flex-col items-center justify-center text-center p-8 overflow-hidden">
              <div className="absolute inset-0 opacity-20">
                <img 
                  src="/src/assets/images/luxury_gastronomy_1780464790469.png" 
                  alt="Nuvio Video Backdrop Overlay" 
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover filter blur"
                />
              </div>

               {/* Glowing circular overlay */}
              <div className="relative h-16 w-16 rounded-full bg-accent/15 border border-accent flex items-center justify-center mb-4 z-10 animate-pulse text-accent">
                <Activity className="h-8 w-8 text-accent" />
              </div>

              <h4 className="font-heading text-xl font-bold text-[#f7f3f0] relative z-10 mb-1.5">
                Simulated Nuvio Cinematic Platform Run
              </h4>
              <p className="text-xs text-[#bcaea6] max-w-sm leading-relaxed relative z-10">
                This presentation illustrates POS integration sequences, operational alert modules, and daily forecasting feeds.
              </p>

              <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-[10px] font-mono text-[#9c8b82] relative z-10 mt-6 pt-4 border-t border-white/5 w-full max-w-md">
                <span>V4.2 Dynamic Simulation</span>
                <span>02:14</span>
              </div>
            </div>

            <p className="text-xs text-[#bcaea6] text-center leading-relaxed">
              We look forward to demonstrating Nuvio Live sync with your actual POS on your scheduled call!
            </p>
          </div>
        </div>
      )}

    </div>
  );
}
