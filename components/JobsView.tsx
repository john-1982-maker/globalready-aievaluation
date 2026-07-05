import React, { useState } from "react";
import { 
  Search, SlidersHorizontal, ArrowRight, ExternalLink, Share2, 
  Sparkles, Check, Edit3, AlertCircle, Briefcase, 
  ChevronRight, Info, Globe, Award, HelpCircle, X, DollarSign, Users, MessageSquare,
  Activity, ShieldCheck, Lock, Sparkle, ArrowLeft
} from "lucide-react";
import { UserStats } from "../types";

interface JobOpportunity {
  id: string;
  title: string;
  payRate: string;
  referralReward: string;
  badge?: string;
  hiredText?: string;
  category: "project-based" | "one-time" | "talent-network";
  field: "Generalist" | "AI Safety" | "Coding & SWE" | "Medical & Bio" | "Consulting" | "Other";
  avatars?: string[];
  requiredLessonId?: string;
  requiredLessonName?: string;
  description: string;
  skillsNeeded: string[];
}

interface JobsViewProps {
  stats: UserStats;
  onBack: () => void;
  setActiveTab?: (tab: string) => void;
  setSimSubMode?: (mode: "sandbox" | "exam") => void;
}

const DEFAULT_JOBS: JobOpportunity[] = [
  {
    id: "generalist-expert",
    title: "Generalist Expert",
    payRate: "$70 / hour",
    referralReward: "$280",
    badge: "Submitted on 06/11/26",
    hiredText: "New opportunity",
    category: "project-based",
    field: "Generalist",
    requiredLessonId: "lesson-intro",
    requiredLessonName: "Introduction to Evaluation Models",
    description: "Review and refine model outputs for reasoning, logical flow, and factuality. Perfect for skilled generalists with high attention to detail.",
    skillsNeeded: ["Logical Reasoning", "Fact-Checking", "Constructive Criticism", "Prompt Optimization"]
  },
  {
    id: "gamers",
    title: "Gamers",
    payRate: "$11 - $12 / hour",
    referralReward: "$60",
    hiredText: "1035 hired this month",
    category: "project-based",
    field: "Other",
    avatars: ["F", "A", "P"],
    description: "Evaluate gaming AI agents, dialogue responses, and behavior in roleplay games. Help developers train more engaging NPC systems.",
    skillsNeeded: ["Gameplay Mechanics", "Dialogue Evaluation", "Creative Roleplay", "Bug Reporting"]
  },
  {
    id: "management-consultants",
    title: "Management & Strategy Consultants (MBB/Big 5)",
    payRate: "$100 / hour",
    referralReward: "$400",
    hiredText: "2073 hired this month",
    category: "project-based",
    field: "Consulting",
    avatars: ["B", "R", "K"],
    requiredLessonId: "lesson-reasoning",
    requiredLessonName: "Mathematical & Logical Reasoning",
    description: "High-tier advisory role evaluating AI decision-making models. Assess complex strategy proposals, financial models, and business logic frameworks.",
    skillsNeeded: ["Financial Modeling", "Strategic Frameworks", "Executive Communication", "Data Synthesis"]
  },
  {
    id: "internal-medicine-expert",
    title: "Internal Medicine Expert",
    payRate: "$130 - $180 / hour",
    referralReward: "$1200",
    badge: "1-click apply",
    hiredText: "878 hired this month",
    category: "project-based",
    field: "Medical & Bio",
    avatars: ["L", "F", "A"],
    description: "Review clinical diagnoses, medical summaries, and patient communication modules. Verify medical accuracy against certified clinical guidelines.",
    skillsNeeded: ["Clinical Diagnostics", "Medical Terminology", "HIPAA Awareness", "Expert Review"]
  },
  {
    id: "cybersecurity-swe",
    title: "Cybersecurity SWE — AI Safety",
    payRate: "$60 - $90 / hour",
    referralReward: "$360",
    hiredText: "9 hired this month",
    category: "project-based",
    field: "AI Safety",
    avatars: ["K", "E", "V"],
    requiredLessonId: "lesson-safety",
    requiredLessonName: "RLHF Safety & Red Teaming Techniques",
    description: "Red-team critical code generation pipelines. Identify security vulnerabilities, memory leaks, and sandbox evasion attempts in model-generated software.",
    skillsNeeded: ["Penetration Testing", "Vulnerability Research", "Secure Coding", "Red Teaming"]
  },
  {
    id: "biology-expert-phd",
    title: "Biology Expert (PhD) — AI Safety",
    payRate: "$65 - $70 / hour",
    referralReward: "$280",
    badge: "1-click apply",
    hiredText: "7 hired this month",
    category: "project-based",
    field: "AI Safety",
    avatars: ["S", "L", "F"],
    description: "Guard models against CBRN biological risks. Evaluate responses concerning molecular biology, epidemiology, and high-consequence laboratory protocols.",
    skillsNeeded: ["Molecular Biology", "Bio-Safety Assessment", "Academic Research", "CBRN Red Teaming"]
  },
  {
    id: "chemistry-expert-phd",
    title: "Chemistry Expert (PhD) — AI Safety",
    payRate: "$65 - $70 / hour",
    referralReward: "$280",
    badge: "1-click apply",
    hiredText: "9 hired this month",
    category: "project-based",
    field: "AI Safety",
    avatars: ["C", "S", "L"],
    description: "Perform strict safety evaluations for chemistry instruction sets. Identify chemical synthesis hazards, hazardous compound formulas, and safety guardrails.",
    skillsNeeded: ["Organic Chemistry", "Chemical Safety", "Data Verification", "Synthesis Safeguards"]
  },
  {
    id: "cuda-engineering-expert",
    title: "CUDA Engineering Expert",
    payRate: "$80 - $100 / hour",
    referralReward: "$480",
    hiredText: "63 hired this month",
    category: "project-based",
    field: "Coding & SWE",
    avatars: ["B", "R", "K"],
    requiredLessonId: "lesson-coding",
    requiredLessonName: "Programming & Code Evaluation Standards",
    description: "Benchmark and evaluate low-level GPU acceleration libraries and CUDA kernel generations. Provide precise feedback on memory optimization.",
    skillsNeeded: ["CUDA C/C++", "GPU Architecture", "Kernel Optimization", "Parallel Programming"]
  },
  {
    id: "medical-expert",
    title: "Medical Expert",
    payRate: "$130 - $180 / hour",
    referralReward: "$1200",
    badge: "1-click apply",
    hiredText: "47 hired this month",
    category: "project-based",
    field: "Medical & Bio",
    avatars: ["F", "A", "P"],
    description: "Provide high-fidelity expert reviews on medical research papers, pharmacology tables, and clinical guidelines generated by medical AI systems.",
    skillsNeeded: ["Pharmacology", "Literature Review", "Clinical Research", "Pathology Assessment"]
  },
  {
    id: "biology-research-scientist",
    title: "Biology Research Scientist (BA, MS, PhD)",
    payRate: "$50 - $70 / hour",
    referralReward: "$280",
    badge: "1-click apply",
    hiredText: "1 hired this month",
    category: "project-based",
    field: "Medical & Bio",
    avatars: ["R"],
    description: "Verify complex ecological, cellular, and microbiological explanations. Guide systems to teach core biological sciences correctly and contextually.",
    skillsNeeded: ["Microbiology", "Ecology", "Data Extraction", "Scientific Writing"]
  },
  {
    id: "devops-sre-cloud",
    title: "DevOps / SRE / Cloud Engineer (Coding Agent Exp...)",
    payRate: "$85 / hour",
    referralReward: "$340",
    hiredText: "New opportunity",
    category: "project-based",
    field: "Coding & SWE",
    description: "Assess self-executing cloud container tools and Kubernetes deployment automations. Guide autonomous development agents to safely orchestrate clouds.",
    skillsNeeded: ["Docker", "Kubernetes", "CI/CD Pipelines", "System Architecture"]
  },
  {
    id: "backend-engineer",
    title: "Backend Engineer (Coding Agent Experience)",
    payRate: "$85 / hour",
    referralReward: "$340",
    hiredText: "New opportunity",
    category: "project-based",
    field: "Coding & SWE",
    requiredLessonId: "lesson-coding",
    requiredLessonName: "Programming & Code Evaluation Standards",
    description: "Provide rigorous feedback on backend database structures, system design proposals, and API routing schemas written by AI systems.",
    skillsNeeded: ["Node.js / Go / Python", "Database Design", "API Performance", "Distributed Systems"]
  },
  {
    id: "video-game-annotator",
    title: "Video Game Annotator",
    payRate: "$16 - $17 / hour",
    referralReward: "$80",
    hiredText: "98 hired this month",
    category: "project-based",
    field: "Other",
    avatars: ["V", "N", "H"],
    description: "Record game walkthroughs and annotate level details, quest trees, and game scripts to construct structured training corpora.",
    skillsNeeded: ["Level Navigation", "Video Logging", "Quest Script Analysis", "Attention to Detail"]
  },
  {
    id: "frontend-engineer",
    title: "Frontend Engineer (Coding Agent Experience)",
    payRate: "$85 / hour",
    referralReward: "$340",
    hiredText: "New opportunity",
    category: "project-based",
    field: "Coding & SWE",
    description: "Verify design systems, Tailwind compliance, and interactive components. Work with web design models to achieve standard-compliant pixel perfection.",
    skillsNeeded: ["React / Vue / Svelte", "Tailwind CSS", "Accessibility (a11y)", "Responsive Design"]
  },
  {
    id: "investment-banking-expert",
    title: "Investment Banking Expert",
    payRate: "$100 - $130 / hour",
    referralReward: "$520",
    hiredText: "1352 hired this month",
    category: "project-based",
    field: "Consulting",
    avatars: ["V", "N", "H"],
    description: "Evaluate quantitative modeling, algorithmic strategies, valuation spreadsheets, and mergers analysis from next-generation financial co-pilots.",
    skillsNeeded: ["M&A Valuations", "Excel Formulas", "Corporate Finance", "Quantitative Analysis"]
  },
  {
    id: "data-engineer",
    title: "Data Engineer (Coding Agent Experience)",
    payRate: "$80 / hour",
    referralReward: "$320",
    hiredText: "New opportunity",
    category: "project-based",
    field: "Coding & SWE",
    description: "Provide critical feedback on data science models, heavy SQL data warehouse schema generation, and stream pipeline integrity evaluations.",
    skillsNeeded: ["SQL Performance", "ETL Pipelines", "Pandas & Numpy", "Apache Spark"]
  },
  {
    id: "onetime-consulting",
    title: "Fast-Track LLM Prompt Audit",
    payRate: "$150 / task",
    referralReward: "$50",
    badge: "Urgent",
    hiredText: "Completed in 1 hour",
    category: "one-time",
    field: "AI Safety",
    description: "A quick, high-priority sweep of prompt injection vectors on a newly deployed chat endpoint. Spot immediate security leaks and fix model parameters.",
    skillsNeeded: ["Prompt Hacking", "Adversarial Inputs", "WAF Configuration"]
  },
  {
    id: "talent-network-expert",
    title: "Senior Technical Review Committee",
    payRate: "$120 / hour",
    referralReward: "$500",
    badge: "Elite Access",
    hiredText: "Join Network",
    category: "talent-network",
    field: "Consulting",
    description: "Exclusive vetted network for verified experts. Serve as a final-tier quality checker for professional curricula and multi-turn coding outputs.",
    skillsNeeded: ["Expert Verification", "Curriculum Design", "Architect Review"]
  }
];

export default function JobsView({ stats, onBack, setActiveTab, setSimSubMode }: JobsViewProps) {
  // Active Tab: project-based, one-time, talent-network
  const [activeSubTab, setActiveSubTab] = useState<"project-based" | "one-time" | "talent-network">("project-based");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedField, setSelectedField] = useState<string>("All Fields");
  const [sortBy, setSortBy] = useState<"priority" | "pay-high" | "reward-high">("priority");
  
  // Track which job is expanded inline. Default to the first one so they see the gorgeous layout!
  const [expandedJobId, setExpandedJobId] = useState<string | null>("generalist-expert");

  // Referral links state - saved to localStorage so the owner/contractor can customize them
  const [referralLinks, setReferralLinks] = useState<Record<string, string>>(() => {
    const saved = localStorage.getItem("academy_referral_links");
    if (saved) {
      try { return JSON.parse(saved); } catch (e) { return {}; }
    }
    return {
      "generalist-expert": "https://outlier.ai/expert-roles/?ref=academy",
      "cybersecurity-swe": "https://outlier.ai/software-engineering/?ref=academy",
      "cuda-engineering-expert": "https://outlier.ai/cuda/?ref=academy"
    };
  });

  const getJobSkillKey = (jobId: string): keyof UserStats["skills"] => {
    switch (jobId) {
      case "generalist-expert":
        return "responseRanking";
      case "gamers":
        return "annotation";
      case "management-consultants":
        return "reasoningEvaluation";
      case "internal-medicine-expert":
        return "factChecking";
      case "cybersecurity-swe":
        return "safetyReview";
      case "biology-expert-phd":
        return "safetyReview";
      case "chemistry-expert-phd":
        return "safetyReview";
      case "cuda-engineering-expert":
        return "reasoning";
      case "medical-expert":
        return "factChecking";
      case "biology-research-scientist":
        return "factChecking";
      case "devops-sre-cloud":
        return "instructionFollowing";
      case "backend-engineer":
        return "reasoning";
      case "video-game-annotator":
        return "annotation";
      case "frontend-engineer":
        return "instructionFollowing";
      case "investment-banking-expert":
        return "reasoning";
      case "data-engineer":
        return "instructionFollowing";
      case "onetime-consulting":
        return "promptEvaluation";
      case "talent-network-expert":
        return "reasoningEvaluation";
      default:
        return "promptEvaluation";
    }
  };

  const getJobReadiness = (job: JobOpportunity) => {
    const skillKey = getJobSkillKey(job.id);
    const skillValue = stats.skills[skillKey] || 0;
    
    // Base: 60% from the specific skill value, 20% from total lessons, 10% from completed req-lesson, 10% passedExams
    const lessonProgress = Math.min(100, (stats.completedLessons.length / 5) * 100);
    const hasReqLesson = job.requiredLessonId ? stats.completedLessons.includes(job.requiredLessonId) : true;
    const examPassed = stats.passedExams.length > 0;
    
    let score = Math.round(skillValue * 0.6 + lessonProgress * 0.2 + (hasReqLesson ? 10 : 0) + (examPassed ? 10 : 0));
    score = Math.max(15, Math.min(100, score));
    return score;
  };

  // Filter and sort logic
  const filteredJobs = DEFAULT_JOBS.filter(job => {
    const matchesTab = job.category === activeSubTab;
    const matchesSearch = job.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          job.field.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          job.skillsNeeded.some(s => s.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesField = selectedField === "All Fields" || job.field === selectedField;
    return matchesTab && matchesSearch && matchesField;
  }).sort((a, b) => {
    if (sortBy === "pay-high") {
      const getNum = (str: string) => {
        const matches = str.match(/\$(\d+)/);
        return matches ? parseInt(matches[1], 10) : 0;
      };
      return getNum(b.payRate) - getNum(a.payRate);
    }
    if (sortBy === "reward-high") {
      const getNum = (str: string) => {
        const matches = str.match(/\$(\d+)/);
        return matches ? parseInt(matches[1], 10) : 0;
      };
      return getNum(b.referralReward) - getNum(a.referralReward);
    }
    return 0;
  });

  const getRequiredSkillMet = (job: JobOpportunity) => {
    if (!job.requiredLessonId) return true;
    
    // Check direct matching
    if (stats.completedLessons.includes(job.requiredLessonId)) return true;
    
    // Check mapped matching from training activities
    if (job.requiredLessonId === "lesson-intro" && (stats.completedLessons.includes("l1") || stats.completedLessons.includes("les_foundations"))) return true;
    if (job.requiredLessonId === "lesson-reasoning" && (stats.completedLessons.includes("l2") || stats.completedLessons.includes("les_ranking") || stats.completedLessons.includes("m4_l1"))) return true;
    if (job.requiredLessonId === "lesson-safety" && (stats.completedLessons.includes("l3") || stats.completedLessons.includes("les_safety"))) return true;
    if (job.requiredLessonId === "lesson-coding" && (stats.completedLessons.includes("l5") || stats.completedLessons.includes("les_instruction_following"))) return true;

    return false;
  };

  return (
    <div className="space-y-6 max-w-7xl mx-auto pl-1">
      {/* Back Button */}
      <div className="flex justify-start">
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-xs font-bold text-slate-500 hover:text-indigo-600 dark:text-slate-400 dark:hover:text-white transition-colors uppercase tracking-wider cursor-pointer font-sans"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Dashboard
        </button>
      </div>

      {/* Top Header Row */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-lg font-black text-slate-900 dark:text-white uppercase tracking-tight flex items-center gap-2">
            <Briefcase className="w-5 h-5 text-indigo-500" />
            Explore Opportunities
          </h1>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 max-w-2xl leading-normal">
            Transition directly from training to high-paying remote contracts. Click any card to expand details and configure your personal affiliate or referral links.
          </p>
        </div>
      </div>

      {/* Practice Boost Alert Banner */}
      {setActiveTab && (
        <div className="bg-gradient-to-r from-indigo-500/10 to-emerald-500/10 dark:from-indigo-500/5 dark:to-emerald-500/5 border border-indigo-500/15 rounded-2xl p-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 animate-fade-in">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="bg-indigo-100 dark:bg-indigo-950/60 text-indigo-750 dark:text-indigo-400 text-[9px] font-black uppercase px-2 py-0.5 rounded">
                PRO TIP
              </span>
              <h4 className="text-xs font-black text-slate-900 dark:text-white uppercase tracking-tight">
                Boost Your Success Chance to 95%+
              </h4>
            </div>
            <p className="text-xs text-slate-650 dark:text-slate-450 leading-relaxed">
              Platform entry tests are single-attempt and heavily audited. We highly recommend completing the simulated workspace exams and case studies in each part before clicking apply!
            </p>
          </div>
          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={() => {
                if (setSimSubMode) setSimSubMode("sandbox");
                if (setActiveTab) setActiveTab("simulations");
              }}
              className="bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl px-4 py-2 text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer shadow-xs hover:shadow-sm"
            >
              <span>Practice Tests</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={() => {
                if (setSimSubMode) setSimSubMode("exam");
                if (setActiveTab) setActiveTab("simulations");
              }}
              className="bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-850 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800 rounded-xl px-4 py-2 text-xs font-bold transition-all cursor-pointer"
            >
              Exams
            </button>
          </div>
        </div>
      )}

      {/* Sub-Tabs Selector matching the Inspiration image */}
      <div className="border-b border-slate-200 dark:border-slate-800">
        <div className="flex gap-8">
          <button
            onClick={() => { setActiveSubTab("project-based"); setSelectedField("All Fields"); }}
            className={`pb-3 text-xs font-bold uppercase tracking-wider transition-all relative cursor-pointer ${
              activeSubTab === "project-based" 
                ? "text-indigo-650 dark:text-indigo-400" 
                : "text-slate-400 hover:text-slate-600 dark:hover:text-slate-300"
            }`}
          >
            Project-based
            {activeSubTab === "project-based" && (
              <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-indigo-600 dark:bg-indigo-500 rounded-full"></span>
            )}
          </button>
          <button
            onClick={() => { setActiveSubTab("one-time"); setSelectedField("All Fields"); }}
            className={`pb-3 text-xs font-bold uppercase tracking-wider transition-all relative cursor-pointer ${
              activeSubTab === "one-time" 
                ? "text-indigo-650 dark:text-indigo-400" 
                : "text-slate-400 hover:text-slate-600 dark:hover:text-slate-300"
            }`}
          >
            One-time
            {activeSubTab === "one-time" && (
              <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-indigo-600 dark:bg-indigo-500 rounded-full"></span>
            )}
          </button>
          <button
            onClick={() => { setActiveSubTab("talent-network"); setSelectedField("All Fields"); }}
            className={`pb-3 text-xs font-bold uppercase tracking-wider transition-all relative cursor-pointer ${
              activeSubTab === "talent-network" 
                ? "text-indigo-650 dark:text-indigo-400" 
                : "text-slate-400 hover:text-slate-600 dark:hover:text-slate-300"
            }`}
          >
            Talent Network
            {activeSubTab === "talent-network" && (
              <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-indigo-600 dark:bg-indigo-500 rounded-full"></span>
            )}
          </button>
        </div>
      </div>

      {/* Controls Bar: Search, Filters, Sort */}
      <div className="flex flex-col md:flex-row gap-3">
        {/* Search Input */}
        <div className="relative flex-1">
          <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
            <Search className="w-4 h-4" />
          </span>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Type to search..."
            className="w-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl pl-10 pr-4 py-2.5 text-xs text-slate-900 dark:text-white focus:outline-hidden focus:ring-1 focus:ring-indigo-500 shadow-xs"
          />
        </div>

        {/* Filters */}
        <div className="flex gap-2 flex-wrap sm:flex-nowrap">
          {/* Field filter */}
          <div className="relative">
            <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
              <SlidersHorizontal className="w-3.5 h-3.5" />
            </span>
            <select
              value={selectedField}
              onChange={(e) => setSelectedField(e.target.value)}
              className="appearance-none bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl pl-9 pr-8 py-2.5 text-xs text-slate-700 dark:text-slate-300 focus:outline-hidden cursor-pointer shadow-xs min-w-[140px]"
            >
              <option value="All Fields">All Fields</option>
              <option value="AI Safety">AI Safety</option>
              <option value="Coding & SWE">Coding & SWE</option>
              <option value="Medical & Bio">Medical & Bio</option>
              <option value="Consulting">Consulting</option>
              <option value="Generalist">Generalist</option>
              <option value="Other">Other</option>
            </select>
          </div>

          {/* Sort selection */}
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as any)}
            className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl px-4 py-2.5 text-xs text-slate-700 dark:text-slate-300 focus:outline-hidden cursor-pointer shadow-xs min-w-[120px]"
          >
            <option value="priority">Priority</option>
            <option value="pay-high">Pay: High to Low</option>
            <option value="reward-high">Referral Reward</option>
          </select>
        </div>
      </div>

      {/* Stack of Opportunity Cards inline expanded */}
      {filteredJobs.length === 0 ? (
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-12 text-center shadow-xs">
          <Briefcase className="w-12 h-12 text-slate-300 dark:text-slate-700 mx-auto mb-3" />
          <p className="text-sm font-bold text-slate-950 dark:text-white">No opportunities match your filter</p>
          <p className="text-xs text-slate-400 mt-1">Try resetting your filters or modifying the search query.</p>
        </div>
      ) : (
        <div className="space-y-4">
          {filteredJobs.map((job) => {
            const isExpanded = expandedJobId === job.id;
            const hasRequiredSkill = getRequiredSkillMet(job);
            const userLink = referralLinks[job.id] || "https://outlier.ai/?ref=academy";
            const firstLetter = job.title.charAt(0);

            // Compute precise readiness
            const skillKey = getJobSkillKey(job.id);
            const skillValue = stats.skills[skillKey] || 0;
            const skillLabel = skillKey.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase());
            const readiness = getJobReadiness(job);

            let readinessColor = "text-amber-650 bg-amber-50 border-amber-150 dark:bg-amber-950/20 dark:text-amber-400 dark:border-amber-900/30";
            let readinessLabel = "Moderate Prep";
            let readinessAdvisory = "⚠️ Your readiness is moderate. We highly recommend completing more practice labs to boost your scores. Insider referrals are best used when you're fully prepared, as platforms allow only one entry test attempt.";

            if (readiness >= 80) {
              readinessColor = "text-emerald-650 bg-emerald-50 border-emerald-150 dark:bg-emerald-950/20 dark:text-emerald-400 dark:border-emerald-900/30";
              readinessLabel = "Highly Prepared";
              readinessAdvisory = "🚀 Perfect Match! Your practice metrics exceed the entry threshold. Insider experts confidently refer you for this role, as your scores show a high pass probability on their entrance exam.";
            } else if (readiness < 50) {
              readinessColor = "text-rose-650 bg-rose-50 border-rose-150 dark:bg-rose-950/20 dark:text-rose-400 dark:border-rose-900/30";
              readinessLabel = "Training Advised";
              readinessAdvisory = "🔒 Additional training is strongly advised. Platform qualification tests are single-attempt and very strict. Please complete relevant course lessons and practice simulations to unlock safe referrals.";
            }

            return (
              <div 
                key={job.id}
                id={`job-row-${job.id}`}
                className={`bg-white dark:bg-slate-900 border rounded-2xl transition-all duration-350 shadow-xs hover:shadow-md flex flex-col ${
                  isExpanded 
                    ? "border-indigo-500 dark:border-indigo-600 ring-1 ring-indigo-500/10" 
                    : "border-slate-200 dark:border-slate-800/80 hover:border-slate-300 dark:hover:border-slate-700"
                }`}
              >
                {/* COMPACT TOP ROW (Visible always, toggles state on click) */}
                <div 
                  onClick={() => setExpandedJobId(isExpanded ? null : job.id)}
                  className="p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 cursor-pointer select-none"
                >
                  <div className="flex items-center gap-4 min-w-0">
                    {/* Circle icon with first letter */}
                    <div className="w-12 h-12 rounded-full border border-slate-200 dark:border-slate-850 bg-slate-50 dark:bg-slate-950 flex items-center justify-center text-sm font-black text-slate-700 dark:text-slate-300 shrink-0 animate-pulse-subtle">
                      {firstLetter}
                    </div>

                    <div className="min-w-0">
                      <div className="flex flex-wrap items-center gap-2 mb-1">
                        <h2 className="text-xs font-black text-slate-900 dark:text-white uppercase tracking-normal">
                          {job.title}
                        </h2>
                        {job.badge && (
                          <span className="text-[9px] font-black uppercase px-2 py-0.5 rounded-full bg-indigo-50 text-indigo-600 border border-indigo-100 dark:bg-indigo-950/20 dark:text-indigo-400 dark:border-indigo-900/30">
                            {job.badge}
                          </span>
                        )}
                        {hasRequiredSkill && job.requiredLessonId && (
                          <span className="bg-emerald-50 dark:bg-emerald-950/20 text-emerald-600 dark:text-emerald-400 text-[9px] font-extrabold px-1.5 py-0.5 rounded border border-emerald-150 dark:border-emerald-900/30 flex items-center gap-1">
                            <Check className="w-2.5 h-2.5 text-emerald-500" />
                            CORE MET
                          </span>
                        )}
                        {!hasRequiredSkill && (
                          <span className="bg-amber-50 dark:bg-amber-950/20 text-amber-600 dark:text-amber-400 text-[9px] font-extrabold px-1.5 py-0.5 rounded border border-amber-150 dark:border-amber-900/30">
                            PREREQ NOT MET
                          </span>
                        )}
                      </div>
                      
                      {/* Entire Job Description displayed directly on the card */}
                      <p className="text-xs text-slate-650 dark:text-slate-300 my-2 leading-relaxed">
                        {job.description}
                      </p>

                      <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-slate-500 dark:text-slate-400 text-[11px] font-medium">
                        <span className="font-bold text-indigo-650 dark:text-indigo-400">{job.field}</span>
                        <span className="text-slate-300 dark:text-slate-750">•</span>
                        <span>{job.payRate}</span>
                        <span className="text-slate-300 dark:text-slate-750">•</span>
                        <span className={`inline-flex items-center gap-1 text-[10px] font-black px-2 py-0.5 rounded-md border ${readinessColor}`}>
                          <span className="w-1.5 h-1.5 rounded-full bg-current"></span>
                          Readiness: {readiness}% ({readinessLabel})
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 self-end sm:self-center shrink-0">
                    <span className="text-xs font-bold text-indigo-600 dark:text-indigo-400">
                      {isExpanded ? "Show Less" : "Details & Apply"}
                    </span>
                    <ChevronRight className={`w-4 h-4 text-slate-400 transition-transform duration-305 ${isExpanded ? "rotate-90 text-indigo-500" : ""}`} />
                  </div>
                </div>

                {/* EXPANDED PANEL INLINE */}
                {isExpanded && (
                  <div className="px-5 pb-5 pt-2 border-t border-slate-100 dark:border-slate-850 animate-fade-in bg-slate-50/50 dark:bg-slate-950/20">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 pt-3">
                      
                      {/* Left Column: Description & Skills */}
                      <div className="lg:col-span-8 space-y-4">
                        <div className="space-y-1">
                          <span className="text-[10px] text-slate-400 dark:text-slate-500 font-extrabold uppercase tracking-wider block">Role Description</span>
                          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                            {job.description}
                          </p>
                        </div>
                        
                        <div className="space-y-1">
                          <span className="text-[10px] text-slate-400 dark:text-slate-500 font-extrabold uppercase tracking-wider block">Target Skills Required</span>
                          <div className="flex flex-wrap gap-1.5">
                            {job.skillsNeeded.map((skill) => (
                              <span 
                                key={skill} 
                                className="text-[10px] text-slate-500 dark:text-slate-400 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 px-2.5 py-0.5 rounded-md font-medium"
                              >
                                {skill}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Right Column: Rate & Custom Apply CTA */}
                      <div className="lg:col-span-4 self-start flex flex-col p-4 bg-slate-100/50 dark:bg-slate-950/40 border border-slate-200/40 dark:border-slate-850 rounded-2xl space-y-4">
                        <div className="space-y-3">
                          <div className="flex justify-between items-center text-xs">
                            <span className="text-slate-450 font-extrabold uppercase tracking-wider">Contract Rate:</span>
                            <span className="text-sm font-black text-slate-900 dark:text-white">{job.payRate}</span>
                          </div>
                        </div>

                        <div className="space-y-2">
                          <a
                            href={userLink}
                            target="_blank"
                            rel="noreferrer noopener"
                            className="w-full font-black py-2.5 px-4 rounded-xl text-xs text-center flex items-center justify-center gap-2 cursor-pointer shadow-xs transition-all bg-indigo-600 hover:bg-indigo-700 text-white shadow-indigo-500/10"
                          >
                            <span>Apply Now</span>
                            <ExternalLink className="w-3.5 h-3.5" />
                          </a>
                        </div>

                        {setActiveTab && (
                          <div className="pt-2 border-t border-slate-200/60 dark:border-slate-850/60 space-y-1.5">
                            <p className="text-[10px] text-slate-400 dark:text-slate-500 font-extrabold uppercase tracking-widest text-center">
                              🚀 Boost Pass Chance to 95%+
                            </p>
                            <div className="grid grid-cols-2 gap-2">
                              <button
                                onClick={() => {
                                  if (setSimSubMode) setSimSubMode("sandbox");
                                  if (setActiveTab) setActiveTab("simulations");
                                }}
                                className="font-bold py-2 px-3 rounded-lg text-[10px] text-center flex items-center justify-center gap-1 cursor-pointer transition-all bg-emerald-50 hover:bg-emerald-100 text-emerald-700 dark:bg-emerald-950/20 dark:hover:bg-emerald-950/40 dark:text-emerald-400 border border-emerald-150/40 dark:border-emerald-900/30"
                              >
                                <span>Practice Sim</span>
                              </button>
                              <button
                                onClick={() => {
                                  if (setSimSubMode) setSimSubMode("exam");
                                  if (setActiveTab) setActiveTab("simulations");
                                }}
                                className="font-bold py-2 px-3 rounded-lg text-[10px] text-center flex items-center justify-center gap-1 cursor-pointer transition-all bg-indigo-50 hover:bg-indigo-100 text-indigo-750 dark:bg-indigo-950/20 dark:hover:bg-indigo-950/40 dark:text-indigo-400 border border-indigo-150/40 dark:border-indigo-900/30"
                              >
                                <span>Exam Prep</span>
                              </button>
                            </div>
                          </div>
                        )}
                      </div>

                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
