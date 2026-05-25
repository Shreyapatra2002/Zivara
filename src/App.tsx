import React, { useState, useMemo, useEffect } from "react";
import { 
  motion, 
  AnimatePresence 
} from "motion/react";
import { 
  TrendingUp, 
  Users, 
  Check, 
  Sliders, 
  Activity, 
  Sparkles, 
  Clock, 
  Target, 
  X, 
  Lock, 
  ArrowRight, 
  Layers, 
  ShieldCheck, 
  Zap, 
  ChevronRight, 
  CheckCircle2, 
  Sparkle,
  PhoneCall,
  Flame,
  LineChart,
  HelpCircle,
  FileText,
  Search
} from "lucide-react";

// Add these after the other imports (around line 25)
import heroImage from './assets/images/zivara_hero_concept_1779685177793.png';
import growthStructure from './assets/images/zivara_growth_structure_1779685198449.png';
import atomicPrecision from './assets/images/zivara_atomic_precision_1779685542660.png';
import advisoryCouncil from './assets/images/zivara_advisory_council_1779685561313.png';
import goldenHour from './assets/images/zivara_golden_hour_nexus_1779686907365.png';
import infiniteLoop from './assets/images/zivara_infinite_loop_1779686925680.png';
// Definitions of types
interface SolutionDetail {
  id: string;
  title: string;
  problem: string;
  solution: string;
  metric: string;
  icon: any;
  color: string;
}

interface FaqItem {
  question: string;
  answer: string;
  metricCallout?: string;
}

const faqData: FaqItem[] = [
  {
    question: "How exactly does Zivara discover and plug invisible retention gaps?",
    answer: "Through our analytical cohort audits, we map client onboarding touchpoints. Rather than generic customer success checklists, we deploy automated milestone triggers and dynamic check-ins within the first 14 days. This reduces drop-offs and secures your baseline recurring revenue instantly.",
    metricCallout: "Average Retention Lift: +15% to 22% within 60 days"
  },
  {
    question: "What is the Stabilization Index and why is it critical before scaling?",
    answer: "The Stabilization Index is our proprietary formula scoring an enterprise's structural capability to absorb rapid growth. It ranks automated workflow coverage, SOP integrity, churn buffers, and leadership independence. Scaling before securing these metrics leads to delivery failures, pricing dilution, and back-office collapse.",
    metricCallout: "Target Index Health: >90% required for Phase III scale"
  },
  {
    question: "Is Zivara a marketing agency, a management consultancy, or an integrator?",
    answer: "We are an elite High-Leverage Growth Advisory. We do not sell temporary traffic campaigns or simple graphic assets. Instead, we design, test, and hard-code bespoke operational systems, client-retention configurations, automated SOP playbooks, and premium positioning assets directly into your organization.",
    metricCallout: "Strategic Format: 100% Custom Engineering"
  },
  {
    question: "Who is your typical client profile and do you support early startups?",
    answer: "Our advisory supports established, premium-tier operators and founders with an active monthly recurring revenue floor of $10,000 to $500,000+. If you are pre-revenue or seeking simple general tips, our precision formulas will have nothing to stabilize. We accept only five active onboarding seats per quarter.",
    metricCallout: "Available Seats: 2/5 Open"
  },
  {
    question: "How much active time commitment is required from my leadership team?",
    answer: "Minimal operational drag. During our Phase I 2-week mapping audit, we require two 45-minute whiteboard diagnostics with the founder or Ops lead. Following this alignment, our engineers construct, test, and integrate the SOP automation loops independently with weekly dashboard reporting.",
    metricCallout: "Client Input: ~1.5 Hours total in Month 1"
  },
  {
    question: "How quickly can we deploy our customized system integrations?",
    answer: "Our custom standard roadmaps cover 12 weeks. However, initial control linkages (Phase I: Base Leak Stabilization) typically roll out within the first 14 business days, plugging transactional and onboarding leakage almost instantly.",
    metricCallout: "Deployment speed: 14 business days for first core fix"
  }
];

export default function App() {
  // Navigation & Interactive States
  const [activeTab, setActiveTab] = useState<"services" | "process" | "why" | "contact">("services");
  const [bookingCall, setBookingCall] = useState(false);
  const [activeFriction, setActiveFriction] = useState<string>("01");
  const [activePhase, setActivePhase] = useState<number>(1);
  const [selectedMultiplier, setSelectedMultiplier] = useState<number>(3); // 2x, 3x, 5x
  const [isHoveredImage, setIsHoveredImage] = useState<string | null>(null);
  const [heroRightTab, setHeroRightTab] = useState<"dashboard" | "sculptural">("sculptural");
  const [selectedLightboxImage, setSelectedLightboxImage] = useState<{
    src: string;
    title: string;
    desc: string;
    model: string;
    correlation: string;
  } | null>(null);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(0);
  // Image variables for the gallery
  const HERO_IMAGE_PATH = heroImage;
  const STRUCTURE_IMAGE_PATH = growthStructure;
  const ATOMIC_IMAGE_PATH = atomicPrecision;
  const ADVISORY_IMAGE_PATH = advisoryCouncil;
  const NEXUS_IMAGE_PATH = goldenHour;
  const LOOP_IMAGE_PATH = infiniteLoop;


  // Image variables for the gallery
  const HERO_IMAGE_PATH = heroImage;
  const STRUCTURE_IMAGE_PATH = growthStructure;
  const ATOMIC_IMAGE_PATH = atomicPrecision;
  const ADVISORY_IMAGE_PATH = advisoryCouncil;
  const NEXUS_IMAGE_PATH = goldenHour;
  const LOOP_IMAGE_PATH = infiniteLoop;
  // Growth Sandbox Simulator controls
  const [baseRevenue, setBaseRevenue] = useState<number>(35000); // base MRR
  const [retentionRate, setRetentionRate] = useState<number>(85); // % retention
  const [automationLevel, setAutomationLevel] = useState<number>(40); // % leverage
  const [avgTicketSize, setAvgTicketSize] = useState<number>(2500); // ticket pricing

  // Dynamic Trajectory Calculations based on inputs
  const simulatedProjection = useMemo(() => {
    const points: { month: number; val: number; baseline: number }[] = [];
    // Calculate 12-month exponential growth curves
    // Impact: retention improves LTV compounding. Automation reduces drag coefficients. 
    const retentionImpact = (retentionRate - 70) / 100; // range from -0.15 to +0.25
    const automationDragCoefficient = 0.02 + (automationLevel / 200); // efficiency booster
    const baseGrowthRate = 0.035; // default scale
    const simulatedGrowthRate = baseGrowthRate + (retentionImpact * 0.12) + (automationDragCoefficient * 0.1) + ((avgTicketSize - 1000) / 15000 * 0.04);
    
    let currentSim = baseRevenue;
    let currentBase = baseRevenue;

    for (let m = 0; m <= 12; m++) {
      if (m > 0) {
        // Compound month-by-month
        currentSim = currentSim * (1 + simulatedGrowthRate);
        currentBase = currentBase * (1 + baseGrowthRate);
      }
      points.push({
        month: m,
        val: Math.round(currentSim),
        baseline: Math.round(currentBase)
      });
    }
    return points;
  }, [baseRevenue, retentionRate, automationLevel, avgTicketSize]);

  // Compatibility Quiz Checkbox states
  const [quizAnswers, setQuizAnswers] = useState({
    systemFocus: false,
    longTermMindset: false,
    operationalLeakes: false,
    receptiveToAdvice: false,
    steadyDemandExist: false,
    dedicatedOwner: false
  });

  // Calculate compatibility score %
  const compatibilityScore = useMemo(() => {

  // Image variables for the gallery
  const HERO_IMAGE_PATH = heroImage;
  const STRUCTURE_IMAGE_PATH = growthStructure;
  const ATOMIC_IMAGE_PATH = atomicPrecision;
  const ADVISORY_IMAGE_PATH = advisoryCouncil;
  const NEXUS_IMAGE_PATH = goldenHour;
  const LOOP_IMAGE_PATH = infiniteLoop;
    const totalChecked = Object.values(quizAnswers).filter(Boolean).length;
    return Math.round((totalChecked / 6) * 100);
  }, [quizAnswers]);

  // Lead submission handling
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [leadForm, setLeadForm] = useState({
    fullName: "",
    businessEmail: "",
    companyUrl: "",
    currentRevenue: "10k-50k",
    primaryObstacle: "Retention & Pipeline"
  });

  const handleQuizToggle = (key: keyof typeof quizAnswers) => {
    setQuizAnswers(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    // Simulate API registration delay
    setTimeout(() => {
      setSubmitting(false);
      setIsSubmitted(true);
      // Persist locally
      try {
        localStorage.setItem("zivara_lead_submission", JSON.stringify({
          ...leadForm,
          compatibility: compatibilityScore,
          timestamp: new Date().toISOString()
        }));
      } catch (err) {
        console.error("Local storage write disabled inside frames", err);
      }
    }, 1500);
  };

  const resetLeadForm = () => {
    setIsSubmitted(false);
    setLeadForm({
      fullName: "",
      businessEmail: "",
      companyUrl: "",
      currentRevenue: "10k-50k",
      primaryObstacle: "Retention & Pipeline"
    });
  };

  // Selective solutions data
  const problemsAndSolutions: SolutionDetail[] = [
    {
      id: "01",
      title: "Volatile Revenue Cycles",
      problem: "Strong sales months suddenly followed by critical valley dips. No predictable source pipeline. Growth feels accidental.",
      solution: "We build a dedicated client onboarding framework combined with automated qualification channels, locking down a stable, minimum recurring pipeline floor.",
      metric: "+38% Revenue Stability Rate",
      icon: TrendingUp,
      color: "from-amber-500/20 to-yellow-600/10"
    },
    {
      id: "02",
      title: "Premature Customer Attrition",
      problem: "High client acquisition cost (CAC) but low lifetime value. Customers fade or churn out early in the delivery lifecycle.",
      solution: "We implement custom post-purchase loyalty checkpoints and client telemetry, converting immediate buyers into evergreen brand ambassadors.",
      metric: "3.2x Customer LTV Increase",
      icon: Users,
      color: "from-amber-600/20 to-orange-500/10"
    },
    {
      id: "03",
      title: "Individual-Dependent Bottlenecks",
      problem: "Tasks and custom deliverables are trapped in the founders' or key operators' minds. Scaling up equals total operational chaos.",
      solution: "We design explicit systems, standard operating playbooks, and automated administrative triggers, providing freedom to execute at scale.",
      metric: "90% Automation Autonomy",
      icon: Sliders,
      color: "from-yellow-500/20 to-amber-700/10"
    },
    {
      id: "04",
      title: "Diluted Market Position",
      problem: "Competing on sheer price, getting blended in with cheaper modular copycats, missing selective enterprise-level accounts.",
      solution: "We reconstruct high-ticket positioning assets and high-end growth authority maps, targeting strictly pre-qualified luxury buyers.",
      metric: "Custom Elite Authority Status",
      icon: Sparkles,
      color: "from-yellow-400/25 to-amber-800/10"
    }
  ];

  const currentFrictionData = useMemo(() => {
    return problemsAndSolutions.find(p => p.id === activeFriction) || problemsAndSolutions[0];
  }, [activeFriction]);

  return (
    <div className="relative min-h-screen bg-[#050505] text-[#c0b9ae] font-sans antialiased selection:bg-[#c8a96e] selection:text-[#050505]">
      {/* Noise background paper texture */}
      <div className="noise-overlay" />

      {/* Luxury Ambient Lighting Glows */}
      <div className="absolute top-[10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-amber-500/5 to-transparent blur-[120px] pointer-events-none z-0" />
      <div className="absolute top-[40%] right-[-10%] w-[600px] h-[600px] rounded-full bg-gradient-to-br from-yellow-600/5 to-transparent blur-[160px] pointer-events-none z-0" />
      <div className="absolute bottom-[10%] left-[20%] w-[400px] h-[400px] rounded-full bg-gradient-to-t from-[#c8a96e]/3 to-transparent blur-[100px] pointer-events-none z-0" />

      {/* UPPER BRAND ADVERT ALERT - Highlighting selectivity */}
      <div className="relative z-50 py-2 px-4 bg-gradient-to-r from-[#0d0d0d] via-[#161616] to-[#0d0d0d] border-b border-amber-500/10 text-center text-[11px] uppercase tracking-[0.2em] text-[#c8a96e] flex items-center justify-center gap-2">
        <Sparkle className="w-3 h-3 text-[#c8a96e] animate-pulse" />
        <span className="font-mono text-white">Q2 Limited Consultation: </span> 
        <span>Only 2 private operational slots remaining for early summer selection</span>
      </div>

      {/* STICKY MAIN NAVIGATION */}
      <header className="sticky top-0 z-40 bg-[#050505]/85 backdrop-blur-md border-b border-white/5 transition-all">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-5 flex items-center justify-between">
          <a href="#" className="group flex items-center gap-2">
            <span className="font-serif text-xl md:text-2xl font-light text-white tracking-[0.08em] transition-colors group-hover:text-[#c8a96e]">
              Zivara <span className="text-[#c8a96e] font-serif tracking-normal italic font-medium">Growth PR</span>
            </span>
          </a>

          {/* Nav links */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#simulator" className="text-xs tracking-[0.14em] uppercase text-[#8a8278] hover:text-[#c8a96e] transition-colors">Trajectory Sandbox</a>
            <a href="#friction" className="text-xs tracking-[0.14em] uppercase text-[#8a8278] hover:text-[#c8a96e] transition-colors">Frictions</a>
            <a href="#process" className="text-xs tracking-[0.14em] uppercase text-[#8a8278] hover:text-[#c8a96e] transition-colors">Our Approach</a>
            <a href="#showcase" className="text-xs tracking-[0.14em] uppercase text-[#8a8278] hover:text-[#c8a96e] transition-colors">Visual Assets</a>
            <a href="#alignment" className="text-xs tracking-[0.14em] uppercase text-[#8a8278] hover:text-[#c8a96e] transition-colors">System Match</a>
          </nav>

          {/* Action Call Button */}
          <div className="flex items-center gap-4">
            <button 
              onClick={() => {
                const target = document.getElementById("lead-console");
                target?.scrollIntoView({ behavior: "smooth" });
              }}
              className="px-5 py-2 border border-[#c8a96e]/30 text-[#c8a96e] text-xs font-medium tracking-widest uppercase transition-all duration-300 hover:bg-[#c8a96e] hover:text-black hover:border-[#c8a96e]"
            >
              Analyze Business
            </button>
          </div>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="relative pt-12 pb-24 md:py-32 overflow-hidden px-6 md:px-12 max-w-7xl mx-auto z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Hero Left Info */}
          <div className="lg:col-span-7 space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-500/5 border border-[#c8a96e]/15 rounded-full">
              <Activity className="w-3.5 h-3.5 text-[#c8a96e]" />
              <span className="text-[10px] uppercase tracking-[0.25em] text-[#c8a96e] font-mono">Selective Growth Advisory</span>
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-light text-white leading-[1.1] tracking-tight">
              Systems that scale revenue, <br />
              <span className="italic text-[#c8a96e] font-serif font-light">so growth becomes inevitable.</span>
            </h1>

            <p className="text-sm md:text-base text-[#8a8278] max-w-xl leading-relaxed font-light">
              We diagnose and engineer out the high-friction operational gaps holding back high-performing companies — building robust pipelines that turn revenue into an unshakeable asset.
            </p>

            {/* Micro trajectory multiplier selector */}
            <div className="p-5 bg-[#0d0d0d] border border-white/5 rounded backdrop-blur-sm max-w-lg space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs uppercase tracking-[0.12em] text-[#8a8278] font-mono">Select Growth Target</span>
                <span className="text-[10px] uppercase tracking-[0.1em] text-white/40">Expected timelines</span>
              </div>
              <div className="grid grid-cols-3 gap-3">
                {[2, 3, 5].map((mult) => (
                  <button
                    key={mult}
                    onClick={() => setSelectedMultiplier(mult)}
                    className={`p-3 text-center border transition-all duration-300 rounded ${
                      selectedMultiplier === mult 
                        ? "border-[#c8a96e] bg-[#c8a96e]/5 text-[#c8a96e]" 
                        : "border-white/5 bg-transparent hover:border-white/10 text-[#8a8278]"
                    }`}
                  >
                    <div className="font-serif text-lg font-light">{mult}X</div>
                    <div className="text-[9px] uppercase tracking-wider mt-1">Scale-up</div>
                  </button>
                ))}
              </div>
              <div className="flex items-center justify-between text-xs pt-1">
                <div className="flex items-center gap-2 text-[#8a8278]">
                  <Clock className="w-3.5 h-3.5 text-[#c8a96e]" />
                  <span>Stabilization Target:</span>
                </div>
                <span className="text-white font-mono font-medium">
                  {selectedMultiplier === 2 ? "3 - 4 Months" : selectedMultiplier === 3 ? "6 - 8 Months" : "12+ Months"}
                </span>
              </div>
            </div>

            {/* Key Outcomes Toggles */}
            <div className="flex flex-wrap gap-x-8 gap-y-4 pt-2">
              <div className="flex items-center gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#c8a96e]" />
                <span className="text-xs uppercase tracking-wider text-[#8a8278]">Systematic Stabilization</span>
              </div>
              <div className="flex items-center gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#c8a96e]" />
                <span className="text-xs uppercase tracking-wider text-[#8a8278]">Optimized Retention Engine</span>
              </div>
              <div className="flex items-center gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#c8a96e]" />
                <span className="text-xs uppercase tracking-wider text-[#8a8278]">Long-Term Multiples</span>
              </div>
            </div>

            {/* Call Action Triggers */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button
                onClick={() => {
                  const target = document.getElementById("simulator");
                  target?.scrollIntoView({ behavior: "smooth" });
                }}
                className="px-8 py-4 bg-[#c8a96e] text-black font-semibold text-xs tracking-[0.15em] uppercase hover:bg-[#e2c98a] transition-all duration-300 text-center flex items-center justify-center gap-2 group shadow-lg shadow-amber-500/5"
              >
                Enter Sandbox Simulator
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
              <button
                onClick={() => {
                  const target = document.getElementById("alignment");
                  target?.scrollIntoView({ behavior: "smooth" });
                }}
                className="px-8 py-4 border border-white/10 text-white font-medium text-xs tracking-[0.15em] uppercase hover:bg-white/5 transition-all duration-300 text-center"
              >
                Assess Alignment Score
              </button>
            </div>
          </div>

          {/* Hero Right Visual: Dual-mode interactive high-concept model */}
          <div className="lg:col-span-5 relative w-full px-2">
            <div className="absolute inset-0 bg-[#c8a96e]/5 blur-3xl rounded-full" />
            
            {/* Toggle tabs for interactive viewer */}
            <div className="flex bg-black/40 border border-white/5 p-1 rounded-lg mb-4 max-w-sm ml-auto text-[10px] tracking-wider uppercase font-mono">
              <button 
                onClick={() => setHeroRightTab("sculptural")}
                className={`flex-1 py-1.5 px-3 rounded text-center transition-all ${
                  heroRightTab === "sculptural" 
                    ? "bg-[#c8a96e]/10 text-[#c8a96e] border border-[#c8a96e]/20" 
                    : "text-white/40 hover:text-white"
                }`}
              >
                💎 Art Concept
              </button>
              <button 
                onClick={() => setHeroRightTab("dashboard")}
                className={`flex-1 py-1.5 px-3 rounded text-center transition-all ${
                  heroRightTab === "dashboard" 
                    ? "bg-[#c8a96e]/10 text-[#c8a96e] border border-[#c8a96e]/20" 
                    : "text-white/40 hover:text-white"
                }`}
              >
                📊 Dashboard
              </button>
            </div>

            {/* The Floating Frame */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="relative rounded-2xl bg-[#0d0d0d] border border-white/10 overflow-hidden shadow-2xl space-y-6"
            >
              {/* Card top shine bar */}
              <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-[#c8a96e]/40 to-transparent" />
              
              <AnimatePresence mode="wait">
                {heroRightTab === "sculptural" ? (
                  <motion.div 
                    key="sculptural-art"
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.3 }}
                    className="p-1 space-y-4"
                  >
                    {/* Immersive Image Frame */}
                    <div 
                      onClick={() => setSelectedLightboxImage({
                        src: HERO_IMAGE_PATH,
                        title: "The Aesthetic Curve of Compounding Traction",
                        desc: "Luxurious minimalist 3D growth curves with sleek gold neon light trails over high-polish slate marble. Represents an unshakeable asset trajectory where system leverage reduces friction entirely.",
                        model: "ZIVARA MODEL-X1 RENDER",
                        correlation: "94.2% Stability Correlation Index"
                      })}
                      className="group relative cursor-zoom-in rounded-xl border border-white/5 overflow-hidden aspect-video bg-black/80"
                    >
                      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent z-10 pointer-events-none" />
                      <img 
                        src={HERO_IMAGE_PATH} 
                        alt="Zivara Neon Gold Trajectory" 
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      {/* Interactive visual prompts inside the card */}
                      <div className="absolute top-3 left-4 z-20 px-2 py-0.5 bg-black/60 border border-white/10 text-[8px] font-mono uppercase tracking-widest text-[#c8a96e] rounded">
                        Active Render
                      </div>
                      
                      {/* Zoom prompt icon */}
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 bg-black/45 backdrop-blur-[1px]">
                        <span className="px-3.5 py-1.5 border border-[#c8a96e]/50 bg-black/90 text-[#c8a96e] text-[9px] tracking-widest uppercase font-mono rounded-full flex items-center gap-1.5">
                          <Sparkles className="w-3 h-3 text-[#c8a96e]" /> Click to Inspect Core
                        </span>
                      </div>

                      {/* Floating metadata */}
                      <div className="absolute bottom-4 left-4 right-4 z-20 flex justify-between items-end">
                        <div>
                          <span className="text-[8px] font-mono text-white/50 block">VISUAL SYSTEM ID</span>
                          <span className="text-[11px] font-serif text-[#c8a96e] italic tracking-wide">Marble Compounding Traction</span>
                        </div>
                        <span className="text-[8px] font-mono bg-amber-500/10 border border-[#c8a96e]/25 text-[#c8a96e] px-2 py-0.5 rounded">
                          1920×1080
                        </span>
                      </div>
                    </div>

                    {/* Quick description text widget inside card */}
                    <div className="px-5 pb-5 pt-1 space-y-2">
                      <div className="flex justify-between items-center text-[9px] font-mono text-[#8a8278]">
                        <span className="uppercase">Aesthetic Standard</span>
                        <span className="text-[#c8a96e]">Verified Authentic Concept</span>
                      </div>
                      <p className="text-xs text-[#8a8278] leading-relaxed font-light">
                        This symbolic abstract represents an unshakeable, frictionless asset growth trajectory. Polished curves meet sturdy slate marble foundations.
                      </p>
                    </div>
                  </motion.div>
                ) : (
                  <motion.div 
                    key="dashboard-interactive"
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-6"
                  >
                    {/* Dashboard header */}
                    <div className="px-6 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-red-400/50" />
                        <div className="w-2 h-2 rounded-full bg-yellow-400/50" />
                        <div className="w-2 h-2 rounded-full bg-green-400/50" />
                      </div>
                      <div className="text-[10px] uppercase tracking-[0.18em] font-mono text-white/50">
                        SYSTEM MONITOR V2.4
                      </div>
                      <div className="flex items-center gap-1.5 text-[#c8a96e] text-[10px] font-mono font-medium">
                        <div className="w-2 h-2 rounded-full bg-[#c8a96e] animate-pulse" />
                        STABLE PILOT
                      </div>
                    </div>

                    {/* Stat grid */}
                    <div className="grid grid-cols-2 gap-[1px] bg-white/5 border-y border-white/5">
                      <div className="bg-[#0d0d0d] p-5 text-center">
                        <div className="text-[10px] text-[#8a8278] uppercase tracking-wider mb-1">STABILIZATION index</div>
                        <div className="font-serif text-3xl font-light text-[#c8a96e]">94.2%</div>
                      </div>
                      <div className="bg-[#0d0d0d] p-5 text-center">
                        <div className="text-[10px] text-[#8a8278] uppercase tracking-wider mb-1">SYSTEM LEVERAGE</div>
                        <div className="font-serif text-3xl font-light text-white">4.8X</div>
                      </div>
                    </div>

                    {/* Chart Plot Visualizer */}
                    <div className="px-6 space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] uppercase tracking-widest text-[#8a8278]">Quarterly Revenue Compounding</span>
                        <span className="text-[10px] text-[#c8a96e] font-mono">↑ Optimal Trend</span>
                      </div>
                      
                      {/* SVG Live Render */}
                      <div className="w-full h-44 bg-[#05055] rounded-lg border border-white/5 p-2 flex items-end">
                        <svg viewBox="0 0 350 140" className="w-full h-full overflow-visible">
                          <defs>
                            <linearGradient id="gradient-area" x1="0" y1="0" x2="0" y2="1">
                              <stop offset="0%" stopColor="#c8a96e" stopOpacity="0.2"/>
                              <stop offset="100%" stopColor="#c8a96e" stopOpacity="0.0"/>
                            </linearGradient>
                            <linearGradient id="baseline-area" x1="0" y1="0" x2="0" y2="1">
                              <stop offset="0%" stopColor="#ffffff" stopOpacity="0.04"/>
                              <stop offset="100%" stopColor="#ffffff" stopOpacity="0.00"/>
                            </linearGradient>
                          </defs>

                          {/* Horizontal gridlines */}
                          <line x1="0" y1="30" x2="350" y2="30" stroke="rgba(255,255,255,0.03)" />
                          <line x1="0" y1="65" x2="350" y2="65" stroke="rgba(255,255,255,0.03)" />
                          <line x1="0" y1="100" x2="350" y2="100" stroke="rgba(255,255,255,0.03)" />
                          <line x1="0" y1="130" x2="350" y2="130" stroke="rgba(255,255,255,0.05)" />

                          {/* Baseline path */}
                          <path 
                            d="M 10,120 Q 90,115 170,105 T 340,90" 
                            fill="url(#baseline-area)" 
                            stroke="rgba(255,255,255,0.15)" 
                            strokeWidth="1.5" 
                            strokeDasharray="4,4" 
                          />

                          {/* Target visual trajectory path */}
                          <path 
                            d="M 10,120 Q 90,110 170,80 T 340,15" 
                            fill="url(#gradient-area)" 
                            stroke="#c8a96e" 
                            strokeWidth="2.5" 
                            strokeLinecap="round"
                          />

                          {/* Nodes along curve */}
                          <circle cx="170" cy="80" r="4" fill="#0d0d0d" stroke="#c8a96e" strokeWidth="2" />
                          <circle cx="340" cy="15" r="5" fill="#c8a96e" />

                          {/* Labels */}
                          <text x="178" y="84" fill="#c8a96e" fontSize="8" fontFamily="monospace">System Launch</text>
                          <text x="290" y="25" fill="#f5f0e8" fontSize="8" fontFamily="monospace">3X Compound</text>
                          <text x="15" y="138" fill="rgba(255,255,255,0.3)" fontSize="8">Mo 1</text>
                          <text x="170" y="138" fill="rgba(255,255,255,0.3)" fontSize="8">Mo 6</text>
                          <text x="315" y="138" fill="rgba(255,255,255,0.3)" fontSize="8">Mo 12</text>
                        </svg>
                      </div>
                    </div>

                    {/* Status info bar */}
                    <div className="px-6 pb-6 pt-2 flex items-center justify-between border-t border-white/5 text-[9px] text-white/40">
                      <span>Zivara Architecture Live Model</span>
                      <span>Slot Available</span>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>

            {/* Decorative Luxury Tag */}
            <div className="absolute -bottom-6 -right-2 p-4 bg-[#111] border border-[#c8a96e]/20 rounded shadow-2xl flex items-center gap-3 z-25">
              <div className="p-2 bg-amber-500/10 rounded">
                <Zap className="w-4 h-4 text-[#c8a96e]" />
              </div>
              <div>
                <span className="block text-[8px] uppercase tracking-widest text-[#8a8278]">Operational Health</span>
                <span className="block text-xs font-serif text-white font-medium">9.6/10 Rated Efficiency</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* STRIP: THE FIVE PILLARS LOGO EMBLEMS */}
      <div className="bg-[#090909] border-y border-[#c8a96e]/10 py-6 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-wrap justify-between items-center gap-y-6 gap-x-8 text-[#8a8278]">
          <div className="flex items-center gap-3">
            <span className="text-[#c8a96e] text-xs font-serif font-semibold">I.</span>
            <span className="text-[11px] uppercase tracking-[0.15em]">STABILITY GUARANTEE</span>
          </div>
          <div className="w-1 h-1 rounded-full bg-white/20 hidden md:inline" />
          <div className="flex items-center gap-3">
            <span className="text-[#c8a96e] text-xs font-serif font-semibold">II.</span>
            <span className="text-[11px] uppercase tracking-[0.15em]">LTV MAXIMIZATION</span>
          </div>
          <div className="w-1 h-1 rounded-full bg-white/20 hidden md:inline" />
          <div className="flex items-center gap-3">
            <span className="text-[#c8a96e] text-xs font-serif font-semibold">III.</span>
            <span className="text-[11px] uppercase tracking-[0.15em]">OPERATIONAL LEVERAGE</span>
          </div>
          <div className="w-1 h-1 rounded-full bg-white/20 hidden md:inline" />
          <div className="flex items-center gap-3">
            <span className="text-[#c8a96e] text-xs font-serif font-semibold">IV.</span>
            <span className="text-[11px] uppercase tracking-[0.15em]">BRAND POSITIONING</span>
          </div>
          <div className="w-1 h-1 rounded-full bg-white/20 hidden md:inline" />
          <div className="flex items-center gap-3">
            <span className="text-[#c8a96e] text-xs font-serif font-semibold">V.</span>
            <span className="text-[11px] uppercase tracking-[0.15em]">SELECTIVE ONBOARDING</span>
          </div>
        </div>
      </div>

      {/* CORE SANDBOX INTERACTIVE GRAPHICS SECTION */}
      <section id="simulator" className="py-24 border-b border-white/5 relative">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          
          <div className="max-w-xl mx-auto text-center space-y-4 mb-16">
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#c8a96e]">Growth Engine Interactive Grid</span>
            <h2 className="font-serif text-3xl md:text-4xl text-white font-light">
              Interactive <em>Revenue Sandbox</em> Model
            </h2>
            <p className="text-xs text-[#8a8278] leading-relaxed font-light">
              Manipulate key business metrics to visualize the powerful compounding force of high retention paired with operational automation on absolute trajectory.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center bg-[#0d0d0d] border border-[#c8a96e]/15 p-6 md:p-10 rounded-xl relative">
            <div className="absolute top-0 right-0 p-3 text-[8px] font-mono bg-amber-500/15 border-l border-b border-[#c8a96e]/20 text-[#c8a96e] uppercase tracking-widest">
              Live math solver
            </div>

            {/* Slider parameters (Left Side) */}
            <div className="lg:col-span-5 space-y-8">
              <div className="border-b border-white/5 pb-4">
                <span className="text-xs uppercase tracking-widest text-white block mb-1">Adjust Operating Levers</span>
                <span className="text-[10px] text-[#8a8278]">Slide to see compound multiple shifts</span>
              </div>

              {/* Slider 1: Base MRR */}
              <div className="space-y-3">
                <div className="flex justify-between items-center text-xs">
                  <span className="text-[#8a8278] uppercase tracking-wider">Beginning Monthly Revenue</span>
                  <span className="font-mono text-[#c8a96e] font-semibold">${baseRevenue.toLocaleString()}</span>
                </div>
                <input 
                  type="range" 
                  min="10000" 
                  max="150000" 
                  step="2500"
                  value={baseRevenue}
                  onChange={(e) => setBaseRevenue(Number(e.target.value))}
                  className="w-full h-1 bg-white/10 rounded-lg appearance-none cursor-pointer accent-[#c8a96e]"
                />
                <div className="flex justify-between text-[9px] text-[#8a8278] font-mono">
                  <span>$10k</span>
                  <span>$150k</span>
                </div>
              </div>

              {/* Slider 2: Customer Retention Rate */}
              <div className="space-y-3">
                <div className="flex justify-between items-center text-xs">
                  <span className="text-[#8a8278] uppercase tracking-wider">Customer Retention Rate</span>
                  <span className="font-mono text-[#c8a96e] font-semibold">{retentionRate}%</span>
                </div>
                <input 
                  type="range" 
                  min="70" 
                  max="98" 
                  step="1"
                  value={retentionRate}
                  onChange={(e) => setRetentionRate(Number(e.target.value))}
                  className="w-full h-1 bg-white/10 rounded-lg appearance-none cursor-pointer accent-[#c8a96e]"
                />
                <div className="flex justify-between text-[9px] text-[#8a8278] font-mono">
                  <span>70% (Industry Standard)</span>
                  <span>98% (Zivara Standard)</span>
                </div>
              </div>

              {/* Slider 3: Automation Efficiency Level */}
              <div className="space-y-3">
                <div className="flex justify-between items-center text-xs">
                  <span className="text-[#8a8278] uppercase tracking-wider">Systems Automation & SOPs</span>
                  <span className="font-mono text-[#c8a96e] font-semibold">{automationLevel}% automation</span>
                </div>
                <input 
                  type="range" 
                  min="15" 
                  max="90" 
                  step="5"
                  value={automationLevel}
                  onChange={(e) => setAutomationLevel(Number(e.target.value))}
                  className="w-full h-1 bg-white/10 rounded-lg appearance-none cursor-pointer accent-[#c8a96e]"
                />
                <div className="flex justify-between text-[9px] text-[#8a8278] font-mono">
                  <span>15% (Manual Drudgery)</span>
                  <span>90% (Hands-free leverage)</span>
                </div>
              </div>

              {/* Slider 4: Ticket Contract sizing */}
              <div className="space-y-3">
                <div className="flex justify-between items-center text-xs">
                  <span className="text-[#8a8278] uppercase tracking-wider">Average Client Agreement (LTV)</span>
                  <span className="font-mono text-[#c8a96e] font-semibold">${avgTicketSize.toLocaleString()}</span>
                </div>
                <input 
                  type="range" 
                  min="1000" 
                  max="15000" 
                  step="500"
                  value={avgTicketSize}
                  onChange={(e) => setAvgTicketSize(Number(e.target.value))}
                  className="w-full h-1 bg-white/10 rounded-lg appearance-none cursor-pointer accent-[#c8a96e]"
                />
                <div className="flex justify-between text-[9px] text-[#8a8278] font-mono">
                  <span>$1,000 / mo</span>
                  <span>$15,000 / mo</span>
                </div>
              </div>
            </div>

            {/* Graphical result representation (Right side) */}
            <div className="lg:col-span-7 bg-[#050505] border border-white/5 p-6 rounded-lg space-y-6">
              
              {/* Dynamic outputs counters */}
              <div className="grid grid-cols-3 gap-4">
                <div className="p-3 border border-white/5 rounded">
                  <div className="text-[8px] uppercase tracking-white text-[#8a8278] mb-1">Baseline Year 1</div>
                  <div className="text-sm font-mono text-white font-medium">
                    ${simulatedProjection[12].baseline.toLocaleString()}
                  </div>
                </div>
                <div className="p-3 border border-[#c8a96e]/20 bg-[#c8a96e]/5 rounded">
                  <div className="text-[8px] uppercase tracking-white text-[#c8a96e] mb-1">Simulated Year 1</div>
                  <div className="text-sm font-mono text-[#c8a96e] font-semibold">
                    ${simulatedProjection[12].val.toLocaleString()}
                  </div>
                </div>
                <div className="p-3 border border-white/5 rounded">
                  <div className="text-[8px] uppercase tracking-white text-white/40 mb-1">Leverage Uplift</div>
                  <div className="text-sm font-mono text-emerald-400 font-medium">
                    {Math.round(((simulatedProjection[12].val - simulatedProjection[12].baseline) / simulatedProjection[12].baseline) * 100)}% ↑
                  </div>
                </div>
              </div>

              {/* Dynamic trajectory plotter representation in interactive SVG */}
              <div className="w-full h-52 bg-[#090909] rounded p-2 relative">
                
                {/* Micro legend */}
                <div className="absolute top-2 left-2 flex items-center gap-4 text-[9px]">
                  <div className="flex items-center gap-1">
                    <span className="w-2.5 h-[2px] bg-[#c8a96e] block" />
                    <span className="text-white">Zivara Optimization Path</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="w-2.5 h-[2px] bg-white/20 block border-dashed border-t" />
                    <span className="text-[#8a8278]">Unmodified Baseline Path</span>
                  </div>
                </div>

                <svg viewBox="0 0 380 180" className="w-full h-full overflow-visible">
                  {/* Grid lines */}
                  <line x1="10" y1="35" x2="370" y2="35" stroke="rgba(255,255,255,0.02)" />
                  <line x1="10" y1="80" x2="370" y2="80" stroke="rgba(255,255,255,0.02)" />
                  <line x1="10" y1="125" x2="370" y2="125" stroke="rgba(255,255,255,0.02)" />
                  <line x1="10" y1="160" x2="370" y2="160" stroke="rgba(255,255,255,0.06)" />

                  {/* Render simulated path line dynamic coordinates */}
                  <path 
                    d={`M 10,150 L ${simulatedProjection.map((pt, i) => {
                      const x = 10 + (i * 30);
                      // scale y coordinate between 150 (min) and 20 (max)
                      // scale based on max possible val $400,000 threshold
                      const ratio = Math.min(pt.val / 350000, 1.0);
                      const y = 150 - (ratio * 125);
                      return `${x},${y}`;
                    }).join(" L ")}`}
                    fill="none"
                    stroke="#c8a96e"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  />

                  {/* Render baseline path line dynamic coordinates */}
                  <path 
                    d={`M 10,150 L ${simulatedProjection.map((pt, i) => {
                      const x = 10 + (i * 30);
                      const ratio = Math.min(pt.baseline / 350000, 1.0);
                      const y = 150 - (ratio * 125);
                      return `${x},${y}`;
                    }).join(" L ")}`}
                    fill="none"
                    stroke="rgba(255,255,255,0.2)"
                    strokeWidth="1.5"
                    strokeDasharray="3,3"
                    strokeLinecap="round"
                  />

                  {/* Dynamic indicators at end nodes */}
                  {(() => {
                    const finalIndex = simulatedProjection.length - 1;
                    const finalRatioSim = Math.min(simulatedProjection[finalIndex].val / 350000, 1.0);
                    const finalYSim = 150 - (finalRatioSim * 125);

                    const finalRatioBase = Math.min(simulatedProjection[finalIndex].baseline / 350000, 1.0);
                    const finalYBase = 150 - (finalRatioBase * 125);

                    return (
                      <>
                        <circle cx="370" cy={finalYSim} r="5" fill="#c8a96e" />
                        <circle cx="370" cy={finalYBase} r="3.5" fill="rgba(255,255,255,0.3)" />
                      </>
                    );
                  })()}
                  
                  {/* Labels alignment */}
                  <text x="5" y="174" fill="rgba(255,255,255,0.3)" fontSize="8">Now</text>
                  <text x="180" y="174" fill="rgba(255,255,255,0.3)" fontSize="8">Mo 6</text>
                  <text x="345" y="174" fill="rgba(255,255,255,0.3)" fontSize="8">Mo 12</text>
                </svg>
              </div>

              {/* Call Out Action within Sandbox */}
              <div className="flex items-center justify-between p-4 bg-[#0d0d0d] border border-white/5 rounded-lg text-xs leading-relaxed">
                <div className="space-y-1">
                  <span className="block text-white font-medium">Want to unlock this mathematical scale?</span>
                  <span className="block text-[11px] text-[#8a8278]">Let our specialists apply our growth formula on your absolute books.</span>
                </div>
                <button
                  onClick={() => {
                    const target = document.getElementById("lead-console");
                    target?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="px-4 py-2 text-[10px] bg-transparent text-[#c8a96e] border border-[#c8a96e]/30 tracking-widest uppercase hover:bg-[#c8a96e] hover:text-black hover:border-transparent transition-all duration-300"
                >
                  Verify Strategy Map
                </button>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* STRATEGIC SOLUTIONS MATRIX (Interactive Bottleneck Solver) */}
      <section id="friction" className="py-24 bg-[#0d0d0d] border-b border-white/5 px-6 md:px-12 relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="space-y-3">
              <span className="text-xs uppercase tracking-[0.25em] text-[#c8a96e]">Identify Your Operational Obstacle</span>
              <h2 className="font-serif text-3xl sm:text-4xl text-white font-light">
                Selective Audits for <em>Common Leaks</em>
              </h2>
            </div>
            <p className="text-xs text-[#8a8278] max-w-sm leading-relaxed font-light">
              We do not treat symptoms. Select your business's primary growth friction point to analyze Zivara's strategic solution structure.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* The Selectors column (Left layout) */}
            <div className="lg:col-span-5 space-y-3">
              {problemsAndSolutions.map((item) => {
                const isSelected = activeFriction === item.id;
                const IconComponent = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => setActiveFriction(item.id)}
                    className={`w-full p-5 text-left border rounded transition-all duration-300 flex items-center gap-4 ${
                      isSelected 
                        ? "border-[#c8a96e] bg-[#c8a96e]/5 relative" 
                        : "border-white/5 bg-[#050505]/40 hover:border-white/15"
                    }`}
                  >
                    {/* Active highlight left flag */}
                    {isSelected && (
                      <span className="absolute left-0 top-0 bottom-0 w-1 bg-[#c8a96e] rounded-l" />
                    )}
                    
                    <div className={`p-2.5 rounded transition-colors ${
                      isSelected ? "bg-[#c8a96e]/10 text-[#c8a96e]" : "bg-white/5 text-[#8a8278]"
                    }`}>
                      <IconComponent className="w-5 h-5" />
                    </div>

                    <div className="flex-1">
                      <div className="flex justify-between items-center">
                        <span className="text-xs font-mono text-[#c8a96e]/60 font-light">{item.id}</span>
                        <span className={`text-[10px] font-mono ${isSelected ? "text-[#c8a96e]" : "text-white/25"}`}>
                          Interactive
                        </span>
                      </div>
                      <span className={`block font-serif text-base font-light tracking-wide mt-0.5 ${
                        isSelected ? "text-white" : "text-[#8a8278]"
                      }`}>
                        {item.title}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Simulated Live Diagnostic Panel (Right layout) */}
            <div className="lg:col-span-7 bg-[#050505] border border-white/5 p-8 rounded-xl min-h-[380px] flex flex-col justify-between relative">
              <div className="absolute top-4 right-6 text-[10px] font-mono tracking-widest text-[#8a8278]/40">
                ACTIVE STRATEGIC BLUEPRINT
              </div>

              <div className="space-y-6">
                
                {/* Problem Section */}
                <div className="space-y-2">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#8a8278] block">The Diagnosis:</span>
                  <p className="text-sm text-white/90 leading-relaxed font-light">
                    {currentFrictionData.problem}
                  </p>
                </div>

                {/* Animated Gold Bridge Flow Graphic */}
                <div className="py-2 flex items-center justify-center">
                  <div className="w-full max-w-sm flex items-center justify-between gap-2.5 px-4">
                    <span className="text-[9px] font-mono text-white/30 uppercase tracking-widest">Ailment</span>
                    <span className="flex-1 h-[1px] bg-gradient-to-r from-red-400/20 via-[#c8a96e] to-emerald-400/20 relative">
                      <span className="absolute left-1/2 -top-1 px-1.5 py-0.5 bg-[#050505] border border-[#c8a96e]/20 text-[8px] font-mono text-[#c8a96e] rounded uppercase tracking-widest transform -translate-x-1/2">
                        TRANSITION
                      </span>
                    </span>
                    <span className="text-[9px] font-mono text-[#c8a96e] uppercase tracking-widest font-semibold">Zivara System</span>
                  </div>
                </div>

                {/* Solution Section */}
                <div className="space-y-2 bg-[#0d0d0d] p-5 border-l-2 border-[#c8a96e] rounded-r">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#c8a96e] block font-semibold">The Zivara Solution:</span>
                  <p className="text-sm text-[#c0b9ae] leading-relaxed font-light">
                    {currentFrictionData.solution}
                  </p>
                </div>

              </div>

              {/* Dynamic expected outcome indicator at bottom */}
              <div className="pt-6 border-t border-white/5 mt-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-emerald-400/10 rounded-full text-emerald-400">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block text-[8px] uppercase tracking-widest text-[#8a8278]">Expected Target Metric</span>
                    <span className="block text-sm font-serif font-semibold text-white tracking-wide">
                      {currentFrictionData.metric}
                    </span>
                  </div>
                </div>

                <button 
                  onClick={() => {
                    const target = document.getElementById("lead-console");
                    target?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="px-5 py-2.5 bg-transparent border border-[#c8a96e]/30 text-[#c8a96e] text-[10px] tracking-widest uppercase hover:bg-[#c8a96e] hover:text-black transition-all duration-300"
                >
                  Request Blueprint Deep-Dive
                </button>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* CORE 3-PHASE ROADMAP */}
      <section id="process" className="py-24 border-b border-white/5 relative">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          
          <div className="max-w-xl mx-auto text-center space-y-4 mb-20">
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#c8a96e]">Structured Strategic Alignment</span>
            <h2 className="font-serif text-3xl md:text-4xl text-white font-light">
              Three Steps. <em>Zero Guesses.</em>
            </h2>
            <p className="text-xs text-[#8a8278] font-light leading-relaxed">
              Every elite enterprise scales in a predictable, high-discipline timeline. Click on the strategic phases below to explore our core blueprint.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left steps descriptor (Interactive Tabs) */}
            <div className="lg:col-span-6 space-y-6">
              {[
                {
                  step: 1,
                  phaseName: "Phase One: Stabilization",
                  headline: "Identify Outflows & Lock Core Architecture",
                  items: [
                    "Identify and audit active conversion and retention leaks",
                    "Codify initial custom system blueprints",
                    "Establish a hard pipeline basefloor"
                  ]
                },
                {
                  step: 2,
                  phaseName: "Phase Two: System Optimization",
                  headline: "Streamline Delivery Workflows & Administrative Automation",
                  items: [
                    "Eliminate manual administrative overhead via custom integration scripts",
                    "Structure repeatable SOPs to protect user operations",
                    "Maximize Client Contract Value leverage"
                  ]
                },
                {
                  step: 3,
                  phaseName: "Phase Three: Systematic Scaling",
                  headline: "Compounding Growth Pipelines with Precision Positioning",
                  items: [
                    "Implement predictable acquisition loops aligned with brand positioning",
                    "Protect enterprise expansion with automated dashboard metrics",
                    "Scale monthly margins without proportional complexity"
                  ]
                }
              ].map((phaseObj) => {
                const isActive = activePhase === phaseObj.step;
                return (
                  <div
                    key={phaseObj.step}
                    onClick={() => setActivePhase(phaseObj.step)}
                    className={`p-6 border rounded-lg transition-all duration-300 cursor-pointer ${
                      isActive 
                        ? "border-[#c8a96e] bg-[#c8a96e]/5 shadow-xl shadow-amber-500/5" 
                        : "border-white/5 bg-transparent hover:border-white/10"
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      {/* Step Indicator Badge */}
                      <span className={`w-8 h-8 rounded-full border flex items-center justify-center font-serif text-sm transition-all duration-300 ${
                        isActive ? "bg-[#c8a96e] text-black border-[#c8a96e]" : "bg-transparent text-[#8a8278] border-[#8a8278]"
                      }`}>
                        {phaseObj.step}
                      </span>

                      <div>
                        <span className={`block text-[10px] uppercase tracking-widest ${isActive ? "text-[#c8a96e]" : "text-white/30"}`}>
                          {phaseObj.phaseName}
                        </span>
                        <h4 className={`font-serif text-lg font-light tracking-wide mt-0.5 ${isActive ? "text-white" : "text-[#8a8278]"}`}>
                          {phaseObj.headline}
                        </h4>
                      </div>
                    </div>

                    {/* Expandable Phase Checklist with motion logic */}
                    <AnimatePresence initial={false}>
                      {isActive && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden mt-4 pt-4 border-t border-[#c8a96e]/15 space-y-3"
                        >
                          <ul className="space-y-2.5">
                            {phaseObj.items.map((bullet, idx) => (
                              <li key={idx} className="flex items-start gap-2 text-xs text-[#8a8278] leading-relaxed">
                                <Check className="w-3.5 h-3.5 text-[#c8a96e] mt-0.5 flex-shrink-0" />
                                <span>{bullet}</span>
                              </li>
                            ))}
                          </ul>
                        </motion.div>
                      )}
                    </AnimatePresence>

                  </div>
                );
              })}
            </div>

            {/* Right side graphical representation of trajectory timeline */}
            <div className="lg:col-span-6 bg-[#0d0d0d] border border-white/5 p-8 rounded-xl relative space-y-6">
              
              <div className="flex items-center justify-between text-xs text-white/40 border-b border-white/5 pb-4">
                <span>ACTIVE STAGE PREVIEW</span>
                <span className="font-mono text-[#c8a96e]">Phase {activePhase} / 3</span>
              </div>

              {/* Dynamic Flow Diagrams */}
              <div className="h-64 flex flex-col justify-center items-center relative gap-8">
                
                {/* Stage 1 stabilization flow */}
                {activePhase === 1 && (
                  <div className="space-y-6 w-full text-center">
                    <span className="text-[11px] font-mono text-[#c8a96e] uppercase tracking-[0.2em] block">Audit Outflows & Block leaks</span>
                    <div className="flex justify-center items-center gap-4">
                      <div className="w-24 p-3 bg-red-500/5 border border-red-500/20 rounded text-[10px] uppercase text-[#8a8278]">Revenue Leak</div>
                      <span className="text-red-400 font-serif">→</span>
                      <div className="p-4 bg-[#c8a96e]/10 border border-[#c8a96e] rounded text-xs text-white font-serif tracking-widest font-medium gold-pulse">ZIVARA LOCK</div>
                      <span className="text-[#c8a96e] font-serif">→</span>
                      <div className="w-24 p-3 bg-emerald-500/5 border border-emerald-500/20 rounded text-[10px] uppercase text-emerald-400">Baseline Set</div>
                    </div>
                    <p className="text-xs text-[#8a8278] max-w-sm mx-auto leading-relaxed">
                      Most businesses drop up to 25% of potential client lifetime value through unmonitored onboarding gaps. We secure this base instantly.
                    </p>
                  </div>
                )}

                {/* Stage 2 Optimization Flow */}
                {activePhase === 2 && (
                  <div className="space-y-6 w-full text-center">
                    <span className="text-[11px] font-mono text-[#c8a96e] uppercase tracking-[0.2em] block">Admin Automation SOPs</span>
                    <div className="flex justify-center items-center gap-3">
                      <div className="p-3 bg-white/5 border border-white/10 rounded flex flex-col gap-1 items-center">
                        <span className="text-[9px] text-[#8a8278] uppercase">Administrative Delivery</span>
                        <span className="text-xs font-serif font-light text-white">Manual Chaos</span>
                      </div>
                      <span className="text-[#c8a96e] font-serif font-light text-2xl">≫</span>
                      <div className="p-4 bg-gradient-to-tr from-amber-500/10 to-yellow-600/10 border border-[#c8a96e]/30 rounded-lg text-center">
                        <span className="block text-[8px] uppercase tracking-widest text-[#c8a96e]">SYSTEMIZED SYSTEM</span>
                        <span className="font-serif text-sm font-semibold text-white">90% Leveraged Autonomy</span>
                      </div>
                    </div>
                    <p className="text-xs text-[#8a8278] max-w-sm mx-auto leading-relaxed">
                      SOPs and custom tools reduce the operational drag coefficients, freeing valuable leadership hours for true enterprise expansion.
                    </p>
                  </div>
                )}

                {/* Stage 3 scaling flow */}
                {activePhase === 3 && (
                  <div className="space-y-6 w-full text-center">
                    <span className="text-[11px] font-mono text-[#c8a96e] uppercase tracking-[0.2em] block">Positioning and Predictable Scale</span>
                    <div className="flex justify-center items-center gap-4">
                      <div className="p-3 border border-white/5 bg-transparent rounded text-[9px] text-white/30 uppercase">Raw Market</div>
                      <span className="text-[#c8a96e]">≫</span>
                      <div className="p-3 border border-[#c8a96e]/20 bg-[#c8a96e]/5 rounded-lg text-xs font-serif text-[#c8a96e] tracking-wider uppercase font-semibold">PREMIUM TARGETS ONLY</div>
                      <span className="text-emerald-400">≫</span>
                      <div className="p-3 bg-emerald-500/10 border border-emerald-500/20 rounded text-[9px] text-emerald-400 font-semibold uppercase">Predictable Scale</div>
                    </div>
                    <p className="text-xs text-[#8a8278] max-w-sm mx-auto leading-relaxed font-light">
                      With foundations set, acquisition pipeline loops scale exponentially. We identify, qualify, and attract strictly your highest tier LTV accounts.
                    </p>
                  </div>
                )}

              </div>

              {/* Phase timeline visual progress bar */}
              <div className="pt-4 border-t border-white/5 grid grid-cols-3 gap-3">
                <div className={`h-1.5 rounded transition-all duration-300 ${activePhase >= 1 ? "bg-[#c8a96e]" : "bg-white/10"}`} />
                <div className={`h-1.5 rounded transition-all duration-300 ${activePhase >= 2 ? "bg-[#c8a96e]" : "bg-white/10"}`} />
                <div className={`h-1.5 rounded transition-all duration-300 ${activePhase >= 3 ? "bg-[#c8a96e]" : "bg-white/10"}`} />
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* CORE PREMIUM GALLERY & SHOWCASE (Integrating generated images) */}
      <section id="showcase" className="py-24 bg-[#0d0d0d] border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          
          <div className="max-w-xl mx-auto text-center space-y-4 mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#c8a96e]/5 border border-[#c8a96e]/15 rounded-full">
              <Sparkles className="w-3 h-3 text-[#c8a96e]" />
              <span className="text-[10px] uppercase tracking-[0.2em] text-[#c8a96e] font-mono">Sensory Brand Standards</span>
            </div>
            <h2 className="font-serif text-3xl md:text-4xl text-white font-light">
              Visual Sculptures of <em>Corporate Scale</em>
            </h2>
            <p className="text-xs text-[#8a8278] leading-relaxed font-light">
              Explore our core conceptual architectures. These bespoke high-definition visual models are built to symbolize the mathematical balance, luxury, and absolute stability that govern our advisory.
            </p>
          </div>

          {/* Interactive 3-Column Luxury Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Gallery Image 1: Hero concept */}
            <div className="group space-y-4 cursor-pointer"
                 onClick={() => setSelectedLightboxImage({
                   src: HERO_IMAGE_PATH,
                   title: "Marble Compounding Traction",
                   desc: "Sleek golden neon light trails reflecting off dense slate marble. This sculpture encapsulates dynamic force multipliers where system stability allows frictionless compound growth curves on the absolute books.",
                   model: "Zivara Concept Sculpture Model I",
                   correlation: "94.2% Stability Correlation Index"
                 })}>
              <div 
                className="relative rounded-xl border border-white/10 overflow-hidden bg-black aspect-[4/3] transition-all duration-500 hover:border-[#c8a96e]/40 shadow-xl"
                onMouseEnter={() => setIsHoveredImage("hero")}
                onMouseLeave={() => setIsHoveredImage(null)}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/10 to-transparent z-10 pointer-events-none" />
                <img 
                  src={HERO_IMAGE_PATH} 
                  alt="Zivara Neon Gold Marble Trajectory Sculpture" 
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-[800ms] group-hover:scale-105"
                />

                <div className="absolute bottom-4 left-5 right-5 z-20 flex justify-between items-end">
                  <div>
                    <span className="text-[8px] font-mono uppercase tracking-widest text-[#c8a96e]">CONCEPT I</span>
                    <h5 className="font-serif text-sm text-white font-light mt-0.5">Marble Traction</h5>
                  </div>
                  <Search className="w-3.5 h-3.5 text-[#8a8278] group-hover:text-[#c8a96e] transition-colors" />
                </div>
              </div>
              <div className="px-2">
                <span className="block text-xs text-white font-serif tracking-wide font-light">The Trajectory Curve</span>
                <span className="block text-[11px] text-[#8a8278] mt-1 font-light leading-relaxed">
                  Refined neon filaments mapping optimal, frictionless compounding pathways.
                </span>
              </div>
            </div>

            {/* Gallery Image 2: Structural concept */}
            <div className="group space-y-4 cursor-pointer"
                 onClick={() => setSelectedLightboxImage({
                   src: STRUCTURE_IMAGE_PATH,
                   title: "Structural Core Pillars",
                   desc: "Tall shimmering columns of translucent golden glass standing in unison. Symbolizes the heavy operational pillars (Retention, Automation, Brand Equity, and Absolute Guarantees) holding corporate weight.",
                   model: "Zivara Concept Sculpture Model II",
                   correlation: "96.5% Structural Retentive Integrity"
                 })}>
              <div 
                className="relative rounded-xl border border-white/10 overflow-hidden bg-black aspect-[4/3] transition-all duration-500 hover:border-[#c8a96e]/40 shadow-xl"
                onMouseEnter={() => setIsHoveredImage("structure")}
                onMouseLeave={() => setIsHoveredImage(null)}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/10 to-transparent z-10 pointer-events-none" />
                <img 
                  src={STRUCTURE_IMAGE_PATH} 
                  alt="Zivara Luxury Gold Neon Glass Columns" 
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-[800ms] group-hover:scale-105"
                />

                <div className="absolute bottom-4 left-5 right-5 z-20 flex justify-between items-end">
                  <div>
                    <span className="text-[8px] font-mono uppercase tracking-widest text-[#c8a96e]">CONCEPT II</span>
                    <h5 className="font-serif text-sm text-white font-light mt-0.5">Glass Columns</h5>
                  </div>
                  <Search className="w-3.5 h-3.5 text-[#8a8278] group-hover:text-[#c8a96e] transition-colors" />
                </div>
              </div>
              <div className="px-2">
                <span className="block text-xs text-white font-serif tracking-wide font-light">The Core Pillars</span>
                <span className="block text-[11px] text-[#8a8278] mt-1 font-light leading-relaxed">
                  Glass filaments and gold arches supporting operational stability and security.
                </span>
              </div>
            </div>

            {/* Gallery Image 3: Atomic concept */}
            <div className="group space-y-4 cursor-pointer"
                 onClick={() => setSelectedLightboxImage({
                   src: ATOMIC_IMAGE_PATH,
                   title: "Atomic Advisory Precision",
                   desc: "Interlocking orbit rings and astronomical gold spheres in static equilibrium. Representing automated corporate systems working friction-free, maintaining tight orbits of efficient cash flow.",
                   model: "Zivara Concept Sculpture Model III",
                   correlation: "95.8% Operational Freedom Metric"
                 })}>
              <div 
                className="relative rounded-xl border border-white/10 overflow-hidden bg-black aspect-[4/3] transition-all duration-500 hover:border-[#c8a96e]/40 shadow-xl"
                onMouseEnter={() => setIsHoveredImage("atomic")}
                onMouseLeave={() => setIsHoveredImage(null)}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/10 to-transparent z-10 pointer-events-none" />
                <img 
                  src={ATOMIC_IMAGE_PATH} 
                  alt="Zivara Atomic Golden Orbits Sculpture" 
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-[800ms] group-hover:scale-105"
                />

                <div className="absolute bottom-4 left-5 right-5 z-20 flex justify-between items-end">
                  <div>
                    <span className="text-[8px] font-mono uppercase tracking-widest text-[#c8a96e]">CONCEPT III</span>
                    <h5 className="font-serif text-sm text-white font-light mt-0.5">Atomic Precision</h5>
                  </div>
                  <Search className="w-3.5 h-3.5 text-[#8a8278] group-hover:text-[#c8a96e] transition-colors" />
                </div>
              </div>
              <div className="px-2">
                <span className="block text-xs text-white font-serif tracking-wide font-light">The System Orbit</span>
                <span className="block text-[11px] text-[#8a8278] mt-1 font-light leading-relaxed">
                  Astronomic spheres modeling perfect balance sheet equilibrium.
                </span>
              </div>
            </div>

            {/* Gallery Image 4: Corporate room luxury */}
            <div className="group space-y-4 cursor-pointer"
                 onClick={() => setSelectedLightboxImage({
                   src: ADVISORY_IMAGE_PATH,
                   title: "The Advisory Council Chamber",
                   desc: "Sleek minimalist executive boardroom featuring gold accents, leather notebooks, and panoramic glass framing city lights at dusk. An authentic mirror of our physical consulting standards during master plan creation.",
                   model: "Zivara Atmosphere Concept IV",
                   correlation: "1:1 Selective Onboarding Alignment"
                 })}>
              <div 
                className="relative rounded-xl border border-white/10 overflow-hidden bg-black aspect-[4/3] transition-all duration-500 hover:border-[#c8a96e]/40 shadow-xl"
                onMouseEnter={() => setIsHoveredImage("advisory")}
                onMouseLeave={() => setIsHoveredImage(null)}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/10 to-transparent z-10 pointer-events-none" />
                <img 
                  src={ADVISORY_IMAGE_PATH} 
                  alt="Zivara Premium Boardroom advisory environment" 
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-[800ms] group-hover:scale-105"
                />

                <div className="absolute bottom-4 left-5 right-5 z-20 flex justify-between items-end">
                  <div>
                    <span className="text-[8px] font-mono uppercase tracking-widest text-[#c8a96e]">CONCEPT IV</span>
                    <h5 className="font-serif text-sm text-white font-light mt-0.5">Advisory Chamber</h5>
                  </div>
                  <Search className="w-3.5 h-3.5 text-[#8a8278] group-hover:text-[#c8a96e] transition-colors" />
                </div>
              </div>
              <div className="px-2">
                <span className="block text-xs text-white font-serif tracking-wide font-light">The Consultation Room</span>
                <span className="block text-[11px] text-[#8a8278] mt-1 font-light leading-relaxed">
                  An intimate, elite boardroom centered around customized planning.
                </span>
              </div>
            </div>

            {/* Gallery Image 5: Nexus network */}
            <div className="group space-y-4 cursor-pointer"
                 onClick={() => setSelectedLightboxImage({
                   src: NEXUS_IMAGE_PATH,
                   title: "The Connection Matrix",
                   desc: "Translucent golden fiber networks and glowing nodes representing highly integrated automation pipelines. This model represents safe real-time system connections that link marketing, sales, and client experience systems.",
                   model: "Zivara Concept Sculpture Model V",
                   correlation: "98.1% Pipeline Integration Efficiency"
                 })}>
              <div 
                className="relative rounded-xl border border-white/10 overflow-hidden bg-black aspect-[4/3] transition-all duration-500 hover:border-[#c8a96e]/40 shadow-xl"
                onMouseEnter={() => setIsHoveredImage("nexus")}
                onMouseLeave={() => setIsHoveredImage(null)}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/10 to-transparent z-10 pointer-events-none" />
                <img 
                  src={NEXUS_IMAGE_PATH} 
                  alt="Zivara Premium Golden Hour Nexus Artwork" 
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-[800ms] group-hover:scale-105"
                />

                <div className="absolute bottom-4 left-5 right-5 z-20 flex justify-between items-end">
                  <div>
                    <span className="text-[8px] font-mono uppercase tracking-widest text-[#c8a96e]">CONCEPT V</span>
                    <h5 className="font-serif text-sm text-white font-light mt-0.5">Golden Hour Nexus</h5>
                  </div>
                  <Search className="w-3.5 h-3.5 text-[#8a8278] group-hover:text-[#c8a96e] transition-colors" />
                </div>
              </div>
              <div className="px-2">
                <span className="block text-xs text-white font-serif tracking-wide font-light">The Connected Matrix</span>
                <span className="block text-[11px] text-[#8a8278] mt-1 font-light leading-relaxed">
                  Translating real-time communication channels into automated loops.
                </span>
              </div>
            </div>

            {/* Gallery Image 6: Infinite dynamic loop */}
            <div className="group space-y-4 cursor-pointer"
                 onClick={() => setSelectedLightboxImage({
                   src: LOOP_IMAGE_PATH,
                   title: "The Infinite Horizon Loop",
                   desc: "A flowing abstract gold ribbon in vertical ascension over smooth black slate. Simulates an elegant self-sustaining LTV feedback loop that generates recurring enterprise value and compound leverage.",
                   model: "Zivara Concept Sculpture Model VI",
                   correlation: "99.4% Multi-Year LTV Compounding"
                 })}>
              <div 
                className="relative rounded-xl border border-white/10 overflow-hidden bg-black aspect-[4/3] transition-all duration-500 hover:border-[#c8a96e]/40 shadow-xl"
                onMouseEnter={() => setIsHoveredImage("loop")}
                onMouseLeave={() => setIsHoveredImage(null)}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/10 to-transparent z-10 pointer-events-none" />
                <img 
                  src={LOOP_IMAGE_PATH} 
                  alt="Zivara Symmetrical Infinite Loop Dynamic Art" 
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-[800ms] group-hover:scale-105"
                />

                <div className="absolute bottom-4 left-5 right-5 z-20 flex justify-between items-end">
                  <div>
                    <span className="text-[8px] font-mono uppercase tracking-widest text-[#c8a96e]">CONCEPT VI</span>
                    <h5 className="font-serif text-sm text-white font-light mt-0.5">Infinite Horizon</h5>
                  </div>
                  <Search className="w-3.5 h-3.5 text-[#8a8278] group-hover:text-[#c8a96e] transition-colors" />
                </div>
              </div>
              <div className="px-2">
                <span className="block text-xs text-white font-serif tracking-wide font-light">The Horizon Loop</span>
                <span className="block text-[11px] text-[#8a8278] mt-1 font-light leading-relaxed">
                  A flowing sculpture mapping lifetime scale and long-term security.
                </span>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* COMPATIBILITY ASSESSMENT SCORECARD */}
      <section id="alignment" className="py-24 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Questionnaire check-grid (Left layout) */}
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-3">
                <span className="text-xs uppercase tracking-[0.25em] text-[#c8a96e] font-mono">Verify Fit Priority</span>
                <h2 className="font-serif text-3xl sm:text-4xl text-white font-[#c8a96e] font-light leading-snug">
                  Our Selective <br /><em>Compatibility Checklist</em>
                </h2>
                <p className="text-xs text-[#8a8278] leading-relaxed max-w-lg font-light">
                  Zivara operates with strict, dedicated advisor focus. Select the traits below that describe your team's state to check if you qualify for immediate Q2 onboarding slot reservations.
                </p>
              </div>

              {/* Custom styled checkable panels */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                {/* Quiz Item 1 */}
                <div 
                  onClick={() => handleQuizToggle("steadyDemandExist")}
                  className={`p-4 border rounded-lg transition-all duration-300 cursor-pointer flex items-start gap-3 select-none ${
                    quizAnswers.steadyDemandExist 
                      ? "border-[#c8a96e]/50 bg-[#c8a96e]/5 text-white" 
                      : "border-white/5 bg-[#0d0d0d]/40 text-[#8a8278] hover:border-white/10"
                  }`}
                >
                  <div className={`mt-0.5 w-4 h-4 rounded border flex items-center justify-center transition-colors ${
                    quizAnswers.steadyDemandExist ? "bg-[#c8a96e] border-[#c8a96e] text-black" : "border-[#8a8278]/40 text-transparent"
                  }`}>
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <div>
                    <span className="block text-xs font-serif text-white tracking-wider">Baseline Demand Exist</span>
                    <span className="block text-[10px] text-white/40 mt-1">Generating sales but inconsistent pipeline gaps</span>
                  </div>
                </div>

                {/* Quiz Item 2 */}
                <div 
                  onClick={() => handleQuizToggle("systemFocus")}
                  className={`p-4 border rounded-lg transition-all duration-300 cursor-pointer flex items-start gap-3 select-none ${
                    quizAnswers.systemFocus 
                      ? "border-[#c8a96e]/50 bg-[#c8a96e]/5 text-white" 
                      : "border-white/5 bg-[#0d0d0d]/40 text-[#8a8278] hover:border-white/10"
                  }`}
                >
                  <div className={`mt-0.5 w-4 h-4 rounded border flex items-center justify-center transition-colors ${
                    quizAnswers.systemFocus ? "bg-[#c8a96e] border-[#c8a96e] text-black" : "border-[#8a8278]/40 text-transparent"
                  }`}>
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <div>
                    <span className="block text-xs font-serif text-white tracking-wider font-light">Structure Priority Over Hacks</span>
                    <span className="block text-[10px] text-white/40 mt-1">Desiring systematic infrastructure instead of superficial growth hacks</span>
                  </div>
                </div>

                {/* Quiz Item 3 */}
                <div 
                  onClick={() => handleQuizToggle("longTermMindset")}
                  className={`p-4 border rounded-lg transition-all duration-300 cursor-pointer flex items-start gap-3 select-none ${
                    quizAnswers.longTermMindset 
                      ? "border-[#c8a96e]/50 bg-[#c8a96e]/5 text-white" 
                      : "border-white/5 bg-[#0d0d0d]/40 text-[#8a8278] hover:border-white/10"
                  }`}
                >
                  <div className={`mt-0.5 w-4 h-4 rounded border flex items-center justify-center transition-colors ${
                    quizAnswers.longTermMindset ? "bg-[#c8a96e] border-[#c8a96e] text-black" : "border-[#8a8278]/40 text-transparent"
                  }`}>
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <div>
                    <span className="block text-xs font-serif text-white tracking-wider font-light">Focus Placed on Decades</span>
                    <span className="block text-[10px] text-white/40 mt-1">Measuring strategic progress on a 1y to 5y horizon</span>
                  </div>
                </div>

                {/* Quiz Item 4 */}
                <div 
                  onClick={() => handleQuizToggle("operationalLeakes")}
                  className={`p-4 border rounded-lg transition-all duration-300 cursor-pointer flex items-start gap-3 select-none ${
                    quizAnswers.operationalLeakes 
                      ? "border-[#c8a96e]/50 bg-[#c8a96e]/5 text-white" 
                      : "border-white/5 bg-[#0d0d0d]/40 text-[#8a8278] hover:border-white/10"
                  }`}
                >
                  <div className={`mt-0.5 w-4 h-4 rounded border flex items-center justify-center transition-colors ${
                    quizAnswers.operationalLeakes ? "bg-[#c8a96e] border-[#c8a96e] text-black" : "border-[#8a8278]/40 text-transparent"
                  }`}>
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <div>
                    <span className="block text-xs font-serif text-white tracking-wider font-light">Administrative Complexity</span>
                    <span className="block text-[10px] text-white/40 mt-1">Sensing clear leaks in delivery operations and onboarding quality</span>
                  </div>
                </div>

                {/* Quiz Item 5 */}
                <div 
                  onClick={() => handleQuizToggle("receptiveToAdvice")}
                  className={`p-4 border rounded-lg transition-all duration-300 cursor-pointer flex items-start gap-3 select-none ${
                    quizAnswers.receptiveToAdvice 
                      ? "border-[#c8a96e]/50 bg-[#c8a96e]/5 text-white" 
                      : "border-white/5 bg-[#0d0d0d]/40 text-[#8a8278] hover:border-white/10"
                  }`}
                >
                  <div className={`mt-0.5 w-4 h-4 rounded border flex items-center justify-center transition-colors ${
                    quizAnswers.receptiveToAdvice ? "bg-[#c8a96e] border-[#c8a96e] text-black" : "border-[#8a8278]/40 text-transparent"
                  }`}>
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <div>
                    <span className="block text-xs font-serif text-white tracking-wider font-light">Process Openness</span>
                    <span className="block text-[10px] text-white/40 mt-1">Decisive and ready to implement structural custom playbooks</span>
                  </div>
                </div>

                {/* Quiz Item 6 */}
                <div 
                  onClick={() => handleQuizToggle("dedicatedOwner")}
                  className={`p-4 border rounded-lg transition-all duration-300 cursor-pointer flex items-start gap-3 select-none ${
                    quizAnswers.dedicatedOwner 
                      ? "border-[#c8a96e]/50 bg-[#c8a96e]/5 text-white" 
                      : "border-white/5 bg-[#0d0d0d]/40 text-[#8a8278] hover:border-white/10"
                  }`}
                >
                  <div className={`mt-0.5 w-4 h-4 rounded border flex items-center justify-center transition-colors ${
                    quizAnswers.dedicatedOwner ? "bg-[#c8a96e] border-[#c8a96e] text-black" : "border-[#8a8278]/40 text-transparent"
                  }`}>
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <div>
                    <span className="block text-xs font-serif text-white tracking-wider font-light">Allocated Support Time</span>
                    <span className="block text-[10px] text-white/40 mt-1">Ready to spend 2h a week with our advisor team</span>
                  </div>
                </div>

              </div>
            </div>

            {/* Results score panel (Right layout) */}
            <div className="lg:col-span-5 bg-[#0d0d0d] border border-[#c8a96e]/20 p-8 rounded-xl relative space-y-6 text-center">
              <div className="absolute top-4 left-1/2 transform -translate-x-1/2 text-[9px] font-mono tracking-widest text-[#8a8278]">
                REAL-TIME ALIGNMENT ENGINE
              </div>

              <div className="py-8 space-y-3">
                <span className="text-[10px] uppercase tracking-[0.2em] text-[#8a8278] block">Your Architecture Match Score</span>
                <div className="font-serif text-6xl md:text-7xl font-extralight text-white leading-none relative">
                  {compatibilityScore}%
                  <span className="absolute -top-3 right-6 text-[#c8a96e] animate-pulse">
                    <Sparkle className="w-5 h-5 text-[#c8a96e]" />
                  </span>
                </div>
                <div className="max-w-xs mx-auto">
                  <div className="w-full bg-white/5 h-2 rounded-full overflow-hidden">
                    <motion.div 
                      className="bg-gradient-to-r from-amber-500 to-[#c8a96e] h-full"
                      animate={{ width: `${compatibilityScore}%` }}
                      transition={{ duration: 0.5 }}
                    />
                  </div>
                </div>
              </div>

              {/* Luxury Boardroom Preview */}
              <div 
                onClick={() => setSelectedLightboxImage({
                  src: ADVISORY_IMAGE_PATH,
                  title: "The Advisory Council Chamber",
                  desc: "Sleek minimalist executive boardroom featuring gold accents, leather notebooks, and panoramic glass framing city lights at dusk. An authentic mirror of our physical consulting standards during master plan creation.",
                  model: "Zivara Atmosphere Concept IV",
                  correlation: "1:1 Selective Onboarding Alignment"
                })}
                className="group relative cursor-zoom-in rounded-lg border border-white/5 overflow-hidden aspect-video bg-black max-w-[280px] mx-auto shadow-md"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
                <img 
                  src={ADVISORY_IMAGE_PATH} 
                  alt="Boardroom" 
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute bottom-1.5 left-3 text-[8px] font-mono uppercase tracking-wider text-white/50">
                  Advisory Chamber Preview
                </div>
                <div className="absolute right-2.5 bottom-1.5 text-[8px] font-mono text-[#c8a96e]">
                  Zoom Art View 🔍
                </div>
              </div>

              <div className="space-y-2 text-xs">
                {compatibilityScore < 50 ? (
                  <p className="text-[#8a8278]">
                    We advise checking at least 3 traits to establish optimal compatibility before requesting deep strategic advisor allocations.
                  </p>
                ) : compatibilityScore < 80 ? (
                  <p className="text-white">
                    Strong alignment indicators. Your bottlenecks fit Zivara's core custom diagnostic expertise perfectly.
                  </p>
                ) : (
                  <div className="p-3 bg-[#c8a96e]/10 border border-[#c8a96e]/30 rounded text-[#c8a96e]">
                    <span className="font-mono text-[10px] uppercase font-bold tracking-widest block mb-1">★★ Perfect Strategic Match ★★</span>
                    <span>Exclusive priority assigned. Reach out below to book immediate intake strategy session.</span>
                  </div>
                )}
              </div>

              <button
                onClick={() => {
                  const target = document.getElementById("lead-console");
                  target?.scrollIntoView({ behavior: "smooth" });
                }}
                disabled={compatibilityScore < 50}
                className={`w-full py-4 font-semibold text-xs tracking-widest uppercase transition-all duration-300 rounded ${
                  compatibilityScore >= 50 
                    ? "bg-[#c8a96e] text-black hover:bg-[#e2c98a]" 
                    : "bg-white/5 text-white/20 border border-white/5 cursor-not-allowed"
                }`}
              >
                Proceed With Intention Intake
              </button>

            </div>

          </div>

        </div>
      </section>

      {/* CORE HIGH-FIDELITY BOOKING SYSTEM / INTAKE CONSOLE */}
      <section id="lead-console" className="py-24 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-12">
          
          <div className="space-y-4">
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#c8a96e]">Secure Strategy Consulting</span>
            <h2 className="font-serif text-4xl sm:text-5xl text-white font-light">
              Submit Business <em>Intention</em>
            </h2>
            <p className="text-xs text-[#8a8278] leading-relaxed max-w-md mx-auto font-light">
              We vet every prospective relationship. Submit your basic structural metrics securely using the encrypted advisor pipeline console below.
            </p>
          </div>

          {/* Intake state check */}
          <div className="bg-[#0d0d0d] border border-[#c8a96e]/15 p-6 md:p-12 rounded-xl text-left max-w-2xl mx-auto shadow-2xl relative">
            <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-[#c8a96e] to-transparent" />
            
            <AnimatePresence mode="wait">
              {!isSubmitted ? (
                <motion.form 
                  key="intake-form"
                  onSubmit={handleFormSubmit}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="space-y-6"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Input name */}
                    <div className="space-y-2">
                      <label className="block text-[10px] uppercase tracking-widest text-[#8a8278] font-semibold">Your Full Name</label>
                      <input 
                        type="text" 
                        required
                        value={leadForm.fullName}
                        onChange={(e) => setLeadForm(prev => ({ ...prev, fullName: e.target.value }))}
                        placeholder="e.g. Adrian Carter" 
                        className="w-full px-4 py-3 bg-[#050505] border border-white/10 rounded focus:border-[#c8a96e] focus:outline-none text-white text-xs font-mono transition-colors"
                      />
                    </div>

                    {/* Input email */}
                    <div className="space-y-2">
                      <label className="block text-[10px] uppercase tracking-widest text-[#8a8278] font-semibold">Business Email</label>
                      <input 
                        type="email" 
                        required
                        value={leadForm.businessEmail}
                        onChange={(e) => setLeadForm(prev => ({ ...prev, businessEmail: e.target.value }))}
                        placeholder="e.g. adrian@domain.com" 
                        className="w-full px-4 py-3 bg-[#050505] border border-white/10 rounded focus:border-[#c8a96e] focus:outline-none text-white text-xs font-mono transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Input company URL */}
                    <div className="space-y-2">
                      <label className="block text-[10px] uppercase tracking-widest text-[#8a8278] font-semibold">Company Website</label>
                      <input 
                        type="url" 
                        required
                        value={leadForm.companyUrl}
                        onChange={(e) => setLeadForm(prev => ({ ...prev, companyUrl: e.target.value }))}
                        placeholder="e.g. https://domain.com" 
                        className="w-full px-4 py-3 bg-[#050505] border border-white/10 rounded focus:border-[#c8a96e] focus:outline-none text-white text-xs font-mono transition-colors"
                      />
                    </div>

                    {/* Select monthly recurring revenue range */}
                    <div className="space-y-2">
                      <label className="block text-[10px] uppercase tracking-widest text-[#8a8278] font-semibold">Current Revenue Tier</label>
                      <select 
                        value={leadForm.currentRevenue}
                        onChange={(e) => setLeadForm(prev => ({ ...prev, currentRevenue: e.target.value }))}
                        className="w-full px-4 py-3 bg-[#050505] border border-white/10 rounded focus:border-[#c8a96e] focus:outline-none text-white text-xs transition-colors"
                      >
                        <option value="10k-50k">$10k – $50k Monthly floor</option>
                        <option value="50k-150k">$50k – $150k Monthly base</option>
                        <option value="150k-500k">$150k – $500k Legacy operations</option>
                        <option value="500k+">$500k+ Enterprise scale</option>
                      </select>
                    </div>
                  </div>

                  {/* Primary Obstacle select */}
                  <div className="space-y-2">
                    <label className="block text-[10px] uppercase tracking-widest text-[#8a8278] font-semibold">Primary System Obstacle</label>
                    <select
                      value={leadForm.primaryObstacle}
                      onChange={(e) => setLeadForm(prev => ({ ...prev, primaryObstacle: e.target.value }))}
                      className="w-full px-4 py-3 bg-[#050505] border border-white/10 rounded focus:border-[#c8a96e] focus:outline-none text-white text-xs transition-colors"
                    >
                      <option value="Retention & Pipeline">Volatile Pipeline & High Customer Churn</option>
                      <option value="Operational Overload">Overloaded Operators & Lacking SOPs</option>
                      <option value="Brand Pricing Dilution">Pricing Pressure & Weak Positioning</option>
                      <option value="Unsure">Vague Structural Leakage</option>
                    </select>
                  </div>

                  {/* Vetting Disclaimer */}
                  <p className="text-[10px] text-[#8a8278] leading-relaxed">
                    By submitting, you authorize Zivara's core operational advisory panel to pull open-source positioning reports on your company prior to call scheduling confirmation. All data is processed strictly confidentially.
                  </p>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full py-4 bg-[#c8a96e] text-black font-semibold text-xs tracking-[0.2em] uppercase rounded hover:bg-[#e2c98a] transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    {submitting ? "VERIFYING PROFILE MATRICES..." : "TRANSMIT STRATEGIC PROFILE"}
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </button>

                </motion.form>
              ) : (
                <motion.div 
                  key="intake-success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="text-center py-8 space-y-6"
                >
                  <div className="w-16 h-16 bg-[#c8a96e]/10 border border-[#c8a96e]/30 rounded-full flex items-center justify-center mx-auto">
                    <ShieldCheck className="w-8 h-8 text-[#c8a96e] animate-bounce" />
                  </div>

                  <div className="space-y-3">
                    <span className="text-xs font-mono text-[#c8a96e] uppercase tracking-[0.2em] block font-semibold">
                      Profile Transmitted Confidentially
                    </span>
                    <h3 className="font-serif text-2xl text-white font-light">
                      Audit Sequence Initiated
                    </h3>
                    <p className="text-xs text-[#8a8278] max-w-sm mx-auto leading-relaxed font-light">
                      Thank you <span className="text-[#c8a96e] font-serif font-medium">{leadForm.fullName}</span>. Zivara's selective intake board is reviewing your metrics for scheduling confirmation. Expected review baseline: 4-6 hours.
                    </p>
                  </div>

                  <div className="pt-4 border-t border-white/5 flex justify-center gap-4">
                    <button
                      onClick={resetLeadForm}
                      className="px-5 py-2.5 bg-transparent border border-white/10 text-[#8a8278] text-[10px] tracking-widest uppercase hover:text-white hover:border-white/25 transition-colors"
                    >
                      Update Profile Content
                    </button>
                    <a
                      href="https://wa.me/20265902?text=Hi%20Zivara%20Team%2C%20I%20have%20completed%20the%20onboard%20compatibility%20profile%20assessment."
                      target="_blank"
                      className="px-5 py-2.5 bg-[#c8a96e]/5 border border-[#c8a96e] text-[#c8a96e]/95 text-[10px] tracking-widest uppercase rounded hover:bg-[#c8a96e] hover:text-black transition-colors flex items-center gap-2"
                    >
                      Instant WhatsApp Direct
                    </a>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Privacy footnote indicators */}
          <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-4 pt-6 text-[11px] text-[#8a8278] font-mono">
            <span className="flex items-center gap-2">
              <Lock className="w-3.5 h-3.5 text-[#c8a96e]" />
              SECURE AES-256 CONFLICT PROTECTION
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-white/20 hidden sm:inline" />
            <span>CONFIDENTIAL STRATEGIC MEMO ARTIFACT</span>
            <span className="w-1.5 h-1.5 rounded-full bg-white/20 hidden sm:inline" />
            <span>SELECTIVE ONBOARD GUARANTEE</span>
          </div>

        </div>
      </section>

      {/* FREQUENTLY ASKED QUESTIONS SECTION */}
      <section id="faq" className="py-24 bg-black border-t border-b border-white/5 relative overflow-hidden">
        {/* Subtle background glow */}
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#c8a96e]/5 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            
            {/* Left Content: High-end context + Generated Artworks */}
            <div className="lg:col-span-5 space-y-8">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#c8a96e]/5 border border-[#c8a96e]/15 rounded-full">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#c8a96e] animate-pulse" />
                  <span className="text-[10px] uppercase tracking-[0.2em] text-[#c8a96e] font-mono">Expert Methodology</span>
                </div>
                <h2 className="font-serif text-3xl sm:text-4xl text-white font-light leading-snug">
                  Operational Clarity <br /><em>Through Real Systemics</em>
                </h2>
                <p className="text-xs text-[#8a8278] leading-relaxed font-light">
                  Scale requires unshakeable structural alignment. If your query is not resolved below, contact our core advisory board for custom evaluation.
                </p>
              </div>

              {/* Aesthetic Asset Display Callout */}
              <div 
                onClick={() => setSelectedLightboxImage({
                  src: NEXUS_IMAGE_PATH,
                  title: "The Connection Matrix",
                  desc: "Translucent golden fiber networks and glowing nodes representing highly integrated automation pipelines. This model represents safe real-time system connections that link marketing, sales, and client experience systems.",
                  model: "Zivara Concept Sculpture Model V",
                  correlation: "98.1% Pipeline Integration Efficiency"
                })}
                className="group relative cursor-zoom-in rounded-xl border border-white/10 overflow-hidden bg-[#0d0d0d] aspect-video shadow-2xl transition-all duration-500 hover:border-[#c8a96e]/30"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/30 to-transparent z-10 pointer-events-none" />
                <img 
                  src={NEXUS_IMAGE_PATH} 
                  alt="Nexus Integration" 
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Floating prompt overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 bg-black/40 backdrop-blur-[1px]">
                  <span className="px-3 py-1.5 border border-[#c8a96e]/50 bg-black/90 text-[#c8a96e] text-[9px] tracking-widest uppercase font-mono rounded-full flex items-center gap-1.5">
                    Inspect Nexus Concept 🔍
                  </span>
                </div>

                <div className="absolute bottom-3 left-4 right-4 z-20 flex justify-between items-end">
                  <div>
                    <span className="text-[8px] font-mono text-[#c8a96e] block tracking-widest">SOCIALLY NETWORKED SOPs</span>
                    <span className="text-[11px] font-serif text-white italic">Model V: High-Tension Connectivity</span>
                  </div>
                  <span className="text-[8px] font-mono bg-white/5 border border-white/10 px-2 py-0.5 rounded text-white/50">
                    Click to Zoom
                  </span>
                </div>
              </div>

              {/* Micro specs */}
              <div className="p-4 bg-[#0d0d0d] border border-white/5 rounded-xl flex items-center justify-between text-[10px] font-mono text-[#8a8278]">
                <span>CORE METRIC REPAIR</span>
                <span className="text-[#c8a96e] font-semibold">100% Client Sovereignty Guaranteed</span>
              </div>
            </div>

            {/* Right Content: FAQ Accordion List */}
            <div className="lg:col-span-7 space-y-4">
              {faqData.map((faq, index) => {
                const isOpen = expandedFaq === index;
                return (
                  <div 
                    key={index}
                    className={`border transition-all duration-300 rounded-xl overflow-hidden ${
                      isOpen 
                        ? "bg-[#0d0d0d] border-[#c8a96e]/20 shadow-lg shadow-[#c8a96e]/2" 
                        : "bg-[#050505] border-white/5 hover:border-white/10"
                    }`}
                  >
                    <button
                      onClick={() => setExpandedFaq(isOpen ? null : index)}
                      className="w-full px-6 py-5 flex items-center justify-between text-left transition-colors cursor-pointer"
                    >
                      <div className="flex items-center gap-4">
                        <span className={`text-[10px] font-mono font-bold transition-colors ${
                          isOpen ? "text-[#c8a96e]" : "text-white/30"
                        }`}>
                          0{index + 1}
                        </span>
                        <span className={`text-sm tracking-wide font-serif font-light transition-colors ${
                          isOpen ? "text-white" : "text-white/80 hover:text-white"
                        }`}>
                          {faq.question}
                        </span>
                      </div>
                      <div className={`w-6 h-6 rounded-full border flex items-center justify-center transition-all duration-300 ${
                        isOpen 
                          ? "border-[#c8a96e] rotate-90 bg-[#c8a96e]/10 text-[#c8a96e]" 
                          : "border-white/10 text-white/40"
                      }`}>
                        <span className="text-xs font-mono font-semibold">{isOpen ? "−" : "+"}</span>
                      </div>
                    </button>

                    {/* Expandable answer panel */}
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25, ease: "easeInOut" }}
                        >
                          <div className="px-6 pb-6 pt-1 pl-14 text-xs text-[#8a8278] leading-relaxed space-y-3 font-light border-t border-white/5">
                            <p>{faq.answer}</p>
                            {faq.metricCallout && (
                              <div className="inline-flex items-center gap-2 px-2.5 py-1 bg-[#c8a96e]/5 border border-[#c8a96e]/10 rounded font-mono text-[9px] text-[#c8a96e] mt-2">
                                <Sparkles className="w-3 h-3" />
                                {faq.metricCallout}
                              </div>
                            )}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>

          </div>

        </div>
      </section>

      {/* CORE FOOTER BRAND SPECIFICATIONS */}
      <footer className="border-t border-[#c8a96e]/10 py-16 px-6 md:px-12 bg-[#050505]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 border-b border-white/5 pb-16">
          
          <div className="space-y-4">
            <a href="#" className="font-serif text-lg text-white font-light tracking-[0.1em]">
              ZIVARA <span className="text-[#c8a96e] italic">GROWTH PR</span>
            </a>
            <p className="text-xs text-[#8a8278] leading-relaxed font-light">
              We design, test, and install high-leverage billing, conversion, and operational control frameworks for elite enterprise creators and founders.
            </p>
          </div>

          <div>
            <span className="block text-[10px] uppercase tracking-widest text-[#c8a96e] font-mono mb-4">Core Focus</span>
            <ul className="space-y-2.5 text-xs">
              <li><a href="#simulator" className="text-[#8a8278] hover:text-white transition-colors">Revenue Trajectory Sandbox</a></li>
              <li><a href="#friction" className="text-[#8a8278] hover:text-white transition-colors">Operational Friction Diagnose</a></li>
              <li><a href="#process" className="text-[#8a8278] hover:text-white transition-colors">SOP System Architectures</a></li>
              <li><a href="#alignment" className="text-[#8a8278] hover:text-white transition-colors">Onboard Scoring Check</a></li>
            </ul>
          </div>

          <div>
            <span className="block text-[10px] uppercase tracking-widest text-[#c8a96e] font-mono mb-4">The Zivara Path</span>
            <ul className="space-y-2.5 text-xs">
              <li><a href="#process" className="text-[#8a8278] hover:text-white transition-colors">Phase I: Stable Control</a></li>
              <li><a href="#process" className="text-[#8a8278] hover:text-white transition-colors">Phase II: Deliver Leverage</a></li>
              <li><a href="#process" className="text-[#8a8278] hover:text-white transition-colors">Phase III: Predictable Expansions</a></li>
              <li><a href="#showcase" className="text-[#8a8278] hover:text-white transition-colors">Luxury Geometric Sculptures</a></li>
            </ul>
          </div>

          <div>
            <span className="block text-[10px] uppercase tracking-widest text-[#c8a96e] font-mono mb-4">Advisor Intake</span>
            <ul className="space-y-2.5 text-xs text-[#8a8278] font-mono">
              <li>Open Openings: <span className="text-emerald-400 font-bold">2/5 Available</span></li>
              <li>Target LTV Value: $125k+ average floor</li>
              <li>Intake Review: 4-6h Confidential Audit</li>
              <li>Reach Us: <a href="mailto:advisor@zivara.com" className="text-[#c8a96e] hover:underline">advisor@zivara.com</a></li>
            </ul>
          </div>

        </div>

        <div className="max-w-7xl mx-auto pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-[11px] text-white/30">
          <div>
            © {new Date().getFullYear()} Zivara Growth PR. All strategic protections and configurations reserved.
          </div>
          <div className="flex items-center gap-6">
            <span className="hover:text-white transition-colors cursor-pointer">Security Standards</span>
            <span className="hover:text-white transition-colors cursor-pointer">Confidentiality Contract</span>
            <span className="hover:text-white transition-colors cursor-pointer">Selective Terms of PR Service</span>
          </div>
        </div>
      </footer>

      {/* GLORIOUS INTERACTIVE LIGHTBOX OVERLAY */}
      <AnimatePresence>
        {selectedLightboxImage && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 bg-black/95 backdrop-blur-xl"
          >
            {/* Close trigger clicking backdrop */}
            <div 
              className="absolute inset-0 cursor-zoom-out" 
              onClick={() => setSelectedLightboxImage(null)} 
            />
            
            <motion.div 
              initial={{ scale: 0.95, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 15 }}
              className="relative w-full max-w-5xl bg-[#090909] border border-white/10 rounded-2xl overflow-hidden shadow-2xl grid grid-cols-1 lg:grid-cols-12 z-10"
            >
              {/* Left Image View Column */}
              <div className="lg:col-span-7 bg-black relative flex items-center justify-center min-h-[300px] lg:min-h-[500px]">
                {/* Gloss glare overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
                <img 
                  src={selectedLightboxImage.src} 
                  alt={selectedLightboxImage.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover max-h-[500px]"
                />
              </div>

              {/* Right Descriptions Column */}
              <div className="lg:col-span-5 p-6 md:p-10 flex flex-col justify-between space-y-8 bg-[#0d0d0d]">
                <div className="space-y-6">
                  {/* Category info */}
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] uppercase tracking-[0.2em] font-mono text-[#c8a96e]">
                      {selectedLightboxImage.model}
                    </span>
                    <button 
                      onClick={() => setSelectedLightboxImage(null)}
                      className="p-1 px-3 bg-white/5 hover:bg-white/10 text-white rounded-full text-[10px] font-mono tracking-wider transition-colors uppercase border border-white/15 cursor-pointer"
                    >
                      Close ✕
                    </button>
                  </div>

                  {/* Title and stats */}
                  <div className="space-y-2">
                    <h3 className="font-serif text-2xl lg:text-3xl text-white font-light">
                      {selectedLightboxImage.title}
                    </h3>
                    <div className="inline-block px-2 py-0.5 bg-[#c8a96e]/15 border border-[#c8a96e]/35 text-[#c8a96e] text-[9px] font-mono rounded">
                      {selectedLightboxImage.correlation}
                    </div>
                  </div>

                  {/* Core philosophical writeup */}
                  <div className="space-y-3">
                    <span className="text-[10px] font-mono text-[#8a8278] uppercase block tracking-widest border-b border-white/5 pb-1">
                      Architecture Statement
                    </span>
                    <p className="text-xs text-[#8a8278] leading-relaxed font-light">
                      {selectedLightboxImage.desc}
                    </p>
                  </div>

                  {/* specs specifications */}
                  <div className="grid grid-cols-2 gap-3 pt-2">
                    <div className="p-3 bg-black/40 border border-white/5 rounded">
                      <span className="block text-[8px] font-mono text-white/30 uppercase tracking-wider mb-1">DPI Resolution</span>
                      <span className="block text-[11px] font-mono text-white">UltraHD 4096p</span>
                    </div>
                    <div className="p-3 bg-black/40 border border-white/5 rounded">
                      <span className="block text-[8px] font-mono text-white/30 uppercase tracking-wider mb-1">Aesthetic Key</span>
                      <span className="block text-[11px] font-mono text-[#c8a96e]">Luxury Gold Slate</span>
                    </div>
                  </div>
                </div>

                {/* Final premium action footnote link */}
                <div className="pt-6 border-t border-white/5 flex items-center justify-between text-[11px]">
                  <span className="text-white/40">Confidential advisory render</span>
                  <button 
                    onClick={() => {
                      setSelectedLightboxImage(null);
                      const target = document.getElementById("lead-console");
                      target?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="text-[#c8a96e] hover:underline flex items-center gap-1 font-mono uppercase tracking-wider text-[10px]"
                  >
                    Discuss Trajectory ↗
                  </button>
                </div>
              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
