import React, { useState } from "react";
import { 
  ArrowLeft, ChevronRight, Check, BookOpen, CheckCircle2, ChevronLeft, Award, HelpCircle, Star, Sparkles, AlertTriangle
} from "lucide-react";

interface Part2Lesson7ViewProps {
  onBack: () => void;
  onComplete: (xpEarned: number) => void;
}

export default function Part2Lesson7View({ onBack, onComplete }: Part2Lesson7ViewProps) {
  // State for current pagination step (1 to 7)
  const [currentStep, setCurrentStep] = useState<number>(1); 
  // 1: Lecture & Worked Example
  // 2: Evaluation Project 1 (LearnSmart AI)
  // 3: Evaluation Project 2 (OfficeFlow AI)
  // 4: Evaluation Project 3 (CareerPath AI)
  // 5: Evaluation Project 4 (HealthAssist AI)
  // 6: Evaluation Project 5 (GlobalReady AI Calibration Challenge)
  // 7: Summary & Key Takeaways

  // Interactive exercises state
  const [rankings, setRankings] = useState<Record<string, string>>({});
  const [notes, setNotes] = useState<Record<string, Record<string, string>>>({});
  const [rationales, setRationales] = useState<Record<string, string>>({});
  const [reflections, setReflections] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState<Record<string, boolean>>({});

  const handleRankSelect = (projectId: string, rank: string) => {
    if (submitted[projectId]) return;
    setRankings(prev => ({ ...prev, [projectId]: rank }));
  };

  const handleNoteChange = (projectId: string, field: string, value: string) => {
    if (submitted[projectId]) return;
    setNotes(prev => ({
      ...prev,
      [projectId]: {
        ...prev[projectId],
        [field]: value
      }
    }));
  };

  const handleRationaleChange = (projectId: string, val: string) => {
    if (submitted[projectId]) return;
    setRationales(prev => ({ ...prev, [projectId]: val }));
  };

  const handleReflectionChange = (projectId: string, val: string) => {
    if (submitted[projectId]) return;
    setReflections(prev => ({ ...prev, [projectId]: val }));
  };

  const handleProjectSubmit = (projectId: string) => {
    if (!rankings[projectId]) {
      alert("Please select an Overall Ranking first!");
      return;
    }
    setSubmitted(prev => ({ ...prev, [projectId]: true }));
  };

  const handleFinishLesson = () => {
    onComplete(120); // Award 120 XP for Lesson 7 completion
  };

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-8 md:py-12 animate-fade-in pb-24">
      
      {/* Back and Page navigation header */}
      <div className="mb-10 flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-4">
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-xs font-bold text-slate-400 hover:text-indigo-600 dark:text-slate-500 dark:hover:text-indigo-400 transition-colors uppercase tracking-wider cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Part 2 Overview
        </button>
        
        <span className="text-xs font-mono text-slate-400 dark:text-slate-500 uppercase tracking-wider">
          Section {currentStep} of 7
        </span>
      </div>

      <article className="prose prose-slate dark:prose-invert max-w-none text-slate-700 dark:text-slate-350 font-sans">
        
        {/* Lesson Title */}
        <div className="mb-8">
          <span className="text-indigo-600 dark:text-indigo-400 text-xs font-mono uppercase tracking-widest font-extrabold block mb-2">
            Part 2 &bull; Lesson 7
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight">
            Response Ranking & Preference Evaluation
          </h1>
          <div className="h-1 w-20 bg-indigo-600 dark:bg-indigo-500 mt-4 rounded-full" />
        </div>

        {/* ================= STEP 1: LECTURE / THEORY & WORKED EXAMPLE ================= */}
        {currentStep === 1 && (
          <div className="space-y-8 animate-fade-in">
            {/* Objectives Box */}
            <div className="bg-indigo-50/20 dark:bg-indigo-950/5 p-6 rounded-2xl my-6 border-l-4 border-indigo-600">
              <h3 className="text-base font-bold text-slate-950 dark:text-white mt-0 mb-3 flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-indigo-500" />
                Learning Objectives
              </h3>
              <p className="text-sm text-slate-500 dark:text-slate-400 mt-0 mb-4">
                By the end of this lesson, you will be able to:
              </p>
              <ul className="space-y-2.5 my-0 pl-4 list-disc marker:text-indigo-500 text-sm">
                <li>Compare multiple AI responses objectively.</li>
                <li>Rank responses using project evaluation criteria rather than personal preference.</li>
                <li>Distinguish between major and minor response differences.</li>
                <li>Handle situations where both responses are good or both are poor.</li>
                <li>Write calibration-quality rationales that justify response rankings.</li>
              </ul>
            </div>

            <section className="space-y-5">
              <h2 className="text-xl font-bold text-slate-900 dark:text-white tracking-tight mt-8">
                What is Response Ranking?
              </h2>
              <p className="text-base leading-relaxed">
                Most professional AI evaluation projects do not ask: <span className="italic font-semibold text-slate-900 dark:text-white">&ldquo;Is this response good?&rdquo;</span>
              </p>
              <p className="text-base leading-relaxed">
                Instead they ask: <span className="font-bold text-indigo-600 dark:text-indigo-400">&ldquo;Which response is better?&rdquo;</span>
              </p>
              <p className="text-base leading-relaxed">
                That difference is important. Professional evaluators compare responses against each other using project-specific evaluation criteria.
              </p>
              <p className="text-base leading-relaxed">
                Sometimes the decision is easy. Sometimes both responses are excellent. Sometimes neither response is ideal. Your job is not to find the perfect response; your job is to identify <strong>which response best satisfies the project requirements.</strong>
              </p>
            </section>

            <section className="space-y-5">
              <h2 className="text-xl font-bold text-slate-900 dark:text-white tracking-tight">
                Preference Ranking
              </h2>
              <p className="text-base leading-relaxed">
                Preference Ranking is the process of deciding which AI response should be preferred. A ranking is based on evidence—not personal taste.
              </p>
              <p className="text-base leading-relaxed">
                Professional evaluators ask questions such as:
              </p>
              <ul className="space-y-2 pl-4 list-disc text-sm">
                <li>Which response better follows the instructions?</li>
                <li>Which response is more accurate?</li>
                <li>Which response is clearer?</li>
                <li>Which response better serves the intended audience?</li>
                <li>Which response would require fewer edits before deployment?</li>
              </ul>
            </section>

            <section className="space-y-5">
              <h2 className="text-xl font-bold text-slate-900 dark:text-white tracking-tight">
                Major vs Minor Differences
              </h2>
              <p className="text-base leading-relaxed">
                Not every mistake carries equal weight. Professional evaluators distinguish between:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
                <div className="p-5 rounded-xl border border-red-200/50 dark:border-red-950/50 bg-red-500/5 space-y-2">
                  <h4 className="text-sm font-bold text-red-600 dark:text-red-400 flex items-center gap-1.5 my-0">
                    <AlertTriangle className="w-4 h-4" /> Major Differences
                  </h4>
                  <ul className="text-xs space-y-1.5 pl-4 list-disc text-slate-600 dark:text-slate-400">
                    <li>Factual errors</li>
                    <li>Safety issues</li>
                    <li>Ignoring important instructions</li>
                    <li>Hallucinations</li>
                    <li>Contradicting context</li>
                  </ul>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400 italic">These often determine the ranking immediately.</p>
                </div>

                <div className="p-5 rounded-xl border border-indigo-200/50 dark:border-indigo-950/50 bg-indigo-500/5 space-y-2">
                  <h4 className="text-sm font-bold text-indigo-600 dark:text-indigo-400 flex items-center gap-1.5 my-0">
                    <Sparkles className="w-4 h-4" /> Minor Differences
                  </h4>
                  <ul className="text-xs space-y-1.5 pl-4 list-disc text-slate-600 dark:text-slate-400">
                    <li>Slightly better wording</li>
                    <li>Better organisation</li>
                    <li>More natural tone</li>
                    <li>Better examples</li>
                    <li>Improved readability</li>
                  </ul>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400 italic">These usually decide close rankings when both responses are otherwise strong.</p>
                </div>
              </div>
            </section>

            <section className="space-y-5">
              <h2 className="text-xl font-bold text-slate-900 dark:text-white tracking-tight">
                Tie Decisions & Common Ranking Mistakes
              </h2>
              <p className="text-base leading-relaxed">
                Sometimes two responses perform equally well. Professional evaluators should only choose <strong>Tie</strong> when there is no meaningful quality difference according to the project rubric. Never choose Tie simply because both responses seem &ldquo;good.&rdquo;
              </p>
              <div className="bg-slate-50 dark:bg-slate-900/40 p-5 rounded-2xl border border-slate-150 dark:border-slate-800 space-y-3">
                <strong className="text-xs font-bold text-amber-600 dark:text-amber-400 uppercase tracking-wide block">Avoid These Common Mistakes:</strong>
                <ul className="text-xs space-y-2 pl-4 list-disc text-slate-650 dark:text-slate-350">
                  <li>Ranking based on personal preference.</li>
                  <li>Rewarding longer responses automatically.</li>
                  <li>Ignoring the primary evaluation dimension.</li>
                  <li>Overlooking subtle factual mistakes.</li>
                  <li>Forgetting the project brief.</li>
                </ul>
              </div>
            </section>

            <section className="space-y-5">
              <h2 className="text-xl font-bold text-slate-900 dark:text-white tracking-tight">
                Worked Example
              </h2>
              <div className="bg-white dark:bg-slate-900 p-5 rounded-2xl border border-slate-200 dark:border-slate-800 space-y-4 shadow-xs">
                <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3">
                  <h3 className="text-sm font-bold text-slate-900 dark:text-white my-0">
                    Project Brief: FinTrust AI
                  </h3>
                  <div className="text-[10px] bg-slate-100 dark:bg-slate-800 text-slate-500 px-2 py-0.5 rounded uppercase font-mono">
                    Primary Dimension: Clarity
                  </div>
                </div>
                <div className="text-xs text-slate-500 space-y-1">
                  <div><strong>Secondary Dimensions:</strong> Helpfulness</div>
                </div>
                <div className="p-3 bg-slate-50 dark:bg-slate-950 rounded-xl">
                  <strong className="text-xs font-mono uppercase tracking-wider block text-slate-400">Prompt:</strong>
                  <p className="text-xs italic text-slate-800 dark:text-slate-200 my-1">
                    &ldquo;Explain budgeting to someone starting their first job.&rdquo;
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl border border-indigo-100 dark:border-slate-800">
                    <strong className="text-indigo-650 dark:text-indigo-400 block text-xs font-bold mb-1">Response A</strong>
                    <p className="text-xs leading-relaxed text-slate-700 dark:text-slate-300">
                      &ldquo;A budget helps you plan how much money you earn, spend and save each month. Start by listing your income, then your essential expenses, and finally decide how much you want to save before spending on non-essential items.&rdquo;
                    </p>
                  </div>
                  <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800">
                    <strong className="text-slate-500 block text-xs font-bold mb-1">Response B</strong>
                    <p className="text-xs leading-relaxed text-slate-700 dark:text-slate-300">
                      &ldquo;A budget is a financial plan that allocates available resources across expenditure categories while ensuring fiscal responsibility.&rdquo;
                    </p>
                  </div>
                </div>

                <div className="p-4 bg-emerald-500/5 rounded-xl border border-emerald-500/10 text-xs text-slate-650 dark:text-slate-350 leading-relaxed">
                  <strong className="text-emerald-600 dark:text-emerald-400 block font-bold mb-1">Professional Evaluation:</strong>
                  Both responses are accurate. However, Response A better matches the intended audience. It is clearer, more practical and easier for a beginner to understand. Professional evaluators would rank Response A higher.
                </div>
              </div>
            </section>

            {/* Step Navigation */}
            <div className="mt-12 pt-6 border-t border-slate-100 dark:border-slate-800 flex justify-end">
              <button
                onClick={() => {
                  setCurrentStep(2);
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className="bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl px-6 py-3 text-xs font-bold flex items-center gap-2 transition-all cursor-pointer shadow-sm hover:shadow-md"
              >
                <span>Continue to Project 1</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {/* ================= STEP 2: EVALUATION PROJECT 1 ================= */}
        {currentStep === 2 && (
          <div className="space-y-8 animate-fade-in">
            <div className="bg-white dark:bg-slate-900/60 p-6 sm:p-8 rounded-[24px] border border-slate-150 dark:border-slate-800 space-y-6">
              <div className="flex items-start justify-between gap-4 flex-wrap border-b border-slate-100 dark:border-slate-800 pb-4">
                <div>
                  <span className="text-[10px] font-extrabold text-indigo-600 dark:text-indigo-455 uppercase tracking-widest block font-mono">
                    Evaluation Project 1 (Intermediate)
                  </span>
                  <h3 className="text-base font-bold text-slate-900 dark:text-white mt-0.5 mb-0">
                    Project: Educational Assistant (LearnSmart AI)
                  </h3>
                </div>
                <div className="bg-slate-100 dark:bg-slate-800 px-2.5 py-1 rounded text-[9px] font-mono text-slate-500 dark:text-slate-400 uppercase">
                  Primary Dimension: Clarity
                </div>
              </div>

              <div className="bg-slate-50 dark:bg-slate-950 p-4 rounded-xl border border-slate-150 dark:border-slate-850 text-xs space-y-3">
                <div className="grid grid-cols-2 gap-4 border-b border-slate-200 dark:border-slate-800 pb-2 mb-2 text-[11px] text-slate-500">
                  <div><strong>Secondary Dimensions:</strong> Audience Alignment, Helpfulness</div>
                  <div><strong>Difficulty:</strong> Intermediate</div>
                </div>

                <p className="my-0"><strong>Prompt:</strong></p>
                <p className="my-0 text-slate-800 dark:text-slate-200 font-medium pl-2 border-l-2 border-indigo-500 italic">
                  &ldquo;Explain cloud computing to a small business owner who has very little technical knowledge.&rdquo;
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                  <div className="bg-white dark:bg-slate-900 p-3.5 rounded-xl border border-slate-150 dark:border-slate-850">
                    <strong className="text-rose-600 dark:text-rose-400 block mb-2 font-bold text-xs">Response A</strong>
                    <p className="text-slate-700 dark:text-slate-300 my-0 leading-relaxed text-xs">
                      &ldquo;Cloud computing lets you use software and store files over the internet instead of buying expensive servers. This saves money, reduces maintenance, and allows you to access your work from almost anywhere.&rdquo;
                    </p>
                  </div>

                  <div className="bg-white dark:bg-slate-900 p-3.5 rounded-xl border border-slate-150 dark:border-slate-850">
                    <strong className="text-emerald-600 dark:text-emerald-400 block mb-2 font-bold text-xs">Response B</strong>
                    <p className="text-slate-700 dark:text-slate-300 my-0 leading-relaxed text-xs">
                      &ldquo;Cloud computing allows organisations to leverage distributed virtualised infrastructure for scalable computing resources delivered over the internet.&rdquo;
                    </p>
                  </div>
                </div>
              </div>

              {/* Evaluation Controls */}
              <div className="space-y-4 pt-2 border-t border-slate-100 dark:border-slate-800">
                <p className="text-xs font-bold text-slate-800 dark:text-slate-200 mt-0 mb-1">
                  1. Overall Ranking:
                </p>
                <div className="grid grid-cols-3 gap-3">
                  {["Response A", "Response B", "Tie"].map((option) => {
                    const isSelected = rankings["ep1"] === option;
                    return (
                      <button
                        key={option}
                        onClick={() => handleRankSelect("ep1", option)}
                        disabled={submitted["ep1"]}
                        className={`py-2 px-3 rounded-xl text-xs font-bold transition-all border text-center cursor-pointer ${
                          isSelected
                            ? "bg-indigo-600 border-indigo-600 text-white"
                            : "bg-slate-50 dark:bg-slate-950 border-slate-200 dark:border-slate-800 text-slate-650 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-850"
                        }`}
                      >
                        {option}
                      </button>
                    );
                  })}
                </div>

                <div className="space-y-3 pt-2">
                  <p className="text-xs font-bold text-slate-800 dark:text-slate-200 mt-0 mb-1">
                    2. Evaluation Notes:
                  </p>
                  <div className="space-y-3">
                    <div>
                      <label className="block text-[10px] uppercase font-bold text-slate-400 dark:text-slate-550 mb-1">
                        Both responses are technically accurate. Which better matches the audience?
                      </label>
                      <input 
                        type="text"
                        placeholder="Type your notes..."
                        value={notes["ep1"]?.["audienceMatch"] || ""}
                        onChange={(e) => handleNoteChange("ep1", "audienceMatch", e.target.value)}
                        disabled={submitted["ep1"]}
                        className="w-full text-xs p-2.5 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl outline-hidden focus:border-indigo-500"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] uppercase font-bold text-slate-400 dark:text-slate-550 mb-1">
                        Which response would require fewer edits before deployment?
                      </label>
                      <input 
                        type="text"
                        placeholder="Type your notes..."
                        value={notes["ep1"]?.["fewerEdits"] || ""}
                        onChange={(e) => handleNoteChange("ep1", "fewerEdits", e.target.value)}
                        disabled={submitted["ep1"]}
                        className="w-full text-xs p-2.5 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl outline-hidden focus:border-indigo-500"
                      />
                    </div>
                  </div>
                </div>

                <div className="space-y-2 pt-2">
                  <label className="block text-xs font-bold text-slate-800 dark:text-slate-200 mb-1">
                    3. Professional Rationale (100–150 words):
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Provide your rationale referencing Clarity, Audience Alignment, and Helpfulness..."
                    value={rationales["ep1"] || ""}
                    onChange={(e) => handleRationaleChange("ep1", e.target.value)}
                    disabled={submitted["ep1"]}
                    className="w-full text-xs p-3 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl outline-hidden focus:border-indigo-500 font-mono"
                  />
                  {rationales["ep1"] && (
                    <span className="text-[10px] font-mono text-slate-450 block text-right">
                      {rationales["ep1"].split(/\s+/).filter(Boolean).length} words
                    </span>
                  )}
                </div>

                <div className="space-y-2 pt-2">
                  <label className="block text-xs font-bold text-slate-800 dark:text-slate-200 mb-1">
                    4. Reflection: Would your ranking change if the audience were an IT Manager? Why?
                  </label>
                  <textarea
                    rows={2}
                    placeholder="Enter your reflection..."
                    value={reflections["ep1"] || ""}
                    onChange={(e) => handleReflectionChange("ep1", e.target.value)}
                    disabled={submitted["ep1"]}
                    className="w-full text-xs p-3 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl outline-hidden focus:border-indigo-500"
                  />
                </div>

                {!submitted["ep1"] && (
                  <button
                    onClick={() => handleProjectSubmit("ep1")}
                    className="w-full py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-xs font-bold transition-all cursor-pointer"
                  >
                    Submit Project 1
                  </button>
                )}
              </div>

              {/* Expert Review Section */}
              {submitted["ep1"] && (
                <div className="mt-6 p-5 sm:p-6 bg-emerald-500/5 rounded-2xl border border-emerald-500/20 space-y-4 animate-fade-in">
                  <h4 className="text-sm font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5 my-0">
                    <CheckCircle2 className="w-5 h-5" /> Expert Review & Calibration
                  </h4>
                  <div className="space-y-3 text-xs text-slate-650 dark:text-slate-350 leading-relaxed">
                    <div>
                      <span className="font-bold text-slate-900 dark:text-white block mb-0.5">Preferred Response:</span>
                      <span className="font-extrabold text-indigo-600 dark:text-indigo-400">Response A</span>
                    </div>
                    <div>
                      <span className="font-bold text-slate-900 dark:text-white block mb-0.5">Expert Rationale:</span>
                      <p className="my-0">
                        Response A is preferred because it translates technical concepts into clear, simple business benefits (saving money, reducing maintenance) that directly address a non-technical small business owner. Response B uses overly complex, academic terminology (&ldquo;leverage distributed virtualised infrastructure&rdquo;) that completely fails the Audience Alignment constraint, requiring significant rewriting to be useful.
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Step Navigation */}
            <div className="mt-12 pt-6 border-t border-slate-100 dark:border-slate-800 flex justify-between">
              <button
                onClick={() => {
                  setCurrentStep(1);
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className="text-slate-400 hover:text-slate-700 dark:hover:text-white text-xs font-bold flex items-center gap-1.5 transition-colors cursor-pointer"
              >
                <ChevronLeft className="w-4 h-4" />
                <span>Back to Lecture</span>
              </button>
              <button
                onClick={() => {
                  setCurrentStep(3);
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className="bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl px-6 py-3 text-xs font-bold flex items-center gap-2 transition-all cursor-pointer shadow-sm hover:shadow-md"
              >
                <span>Continue to Project 2</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {/* ================= STEP 3: EVALUATION PROJECT 2 ================= */}
        {currentStep === 3 && (
          <div className="space-y-8 animate-fade-in">
            <div className="bg-white dark:bg-slate-900/60 p-6 sm:p-8 rounded-[24px] border border-slate-150 dark:border-slate-800 space-y-6">
              <div className="flex items-start justify-between gap-4 flex-wrap border-b border-slate-100 dark:border-slate-800 pb-4">
                <div>
                  <span className="text-[10px] font-extrabold text-indigo-600 dark:text-indigo-455 uppercase tracking-widest block font-mono">
                    Evaluation Project 2 (Intermediate)
                  </span>
                  <h3 className="text-base font-bold text-slate-900 dark:text-white mt-0.5 mb-0">
                    Project: Business Communication Assistant (OfficeFlow AI)
                  </h3>
                </div>
                <div className="bg-slate-100 dark:bg-slate-800 px-2.5 py-1 rounded text-[9px] font-mono text-slate-500 dark:text-slate-400 uppercase">
                  Primary Metric: Professional Tone
                </div>
              </div>

              <div className="bg-slate-50 dark:bg-slate-950 p-4 rounded-xl border border-slate-150 dark:border-slate-850 text-xs space-y-3">
                <div className="grid grid-cols-2 gap-4 border-b border-slate-200 dark:border-slate-800 pb-2 mb-2 text-[11px] text-slate-500">
                  <div><strong>Secondary Dimensions:</strong> Clarity, Completeness</div>
                  <div><strong>Difficulty:</strong> Intermediate</div>
                </div>

                <p className="my-0"><strong>Prompt:</strong></p>
                <p className="my-0 text-slate-800 dark:text-slate-200 font-medium pl-2 border-l-2 border-indigo-500 italic">
                  &ldquo;Write an email requesting to reschedule tomorrow's meeting because of a family emergency.&rdquo;
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                  <div className="bg-white dark:bg-slate-900 p-3.5 rounded-xl border border-slate-150 dark:border-slate-850">
                    <strong className="text-rose-600 dark:text-rose-400 block mb-2 font-bold text-xs">Response A</strong>
                    <div className="text-slate-700 dark:text-slate-300 my-0 leading-relaxed text-xs space-y-1.5 font-mono">
                      <p className="my-0">Dear Sarah,</p>
                      <p className="my-0">Unfortunately, due to an unexpected family emergency, I won't be able to attend tomorrow's meeting. I sincerely apologise for the inconvenience. If possible, I'd appreciate the opportunity to reschedule at a time that works for you.</p>
                      <p className="my-0">Kind regards,</p>
                      <p className="my-0">John</p>
                    </div>
                  </div>

                  <div className="bg-white dark:bg-slate-900 p-3.5 rounded-xl border border-slate-150 dark:border-slate-850">
                    <strong className="text-emerald-600 dark:text-emerald-400 block mb-2 font-bold text-xs">Response B</strong>
                    <div className="text-slate-700 dark:text-slate-300 my-0 leading-relaxed text-xs space-y-1.5 font-mono">
                      <p className="my-0">Hi Sarah,</p>
                      <p className="my-0">Something has come up at home, so I can't make tomorrow's meeting. Let me know another time.</p>
                      <p className="my-0">Thanks.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Evaluation Controls */}
              <div className="space-y-4 pt-2 border-t border-slate-100 dark:border-slate-800">
                <p className="text-xs font-bold text-slate-800 dark:text-slate-200 mt-0 mb-1">
                  1. Overall Ranking:
                </p>
                <div className="grid grid-cols-3 gap-3">
                  {["Response A", "Response B", "Tie"].map((option) => {
                    const isSelected = rankings["ep2"] === option;
                    return (
                      <button
                        key={option}
                        onClick={() => handleRankSelect("ep2", option)}
                        disabled={submitted["ep2"]}
                        className={`py-2 px-3 rounded-xl text-xs font-bold transition-all border text-center cursor-pointer ${
                          isSelected
                            ? "bg-indigo-600 border-indigo-600 text-white"
                            : "bg-slate-50 dark:bg-slate-950 border-slate-200 dark:border-slate-800 text-slate-650 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-850"
                        }`}
                      >
                        {option}
                      </button>
                    );
                  })}
                </div>

                <div className="space-y-3 pt-2">
                  <p className="text-xs font-bold text-slate-800 dark:text-slate-200 mt-0 mb-1">
                    2. Evaluation Notes:
                  </p>
                  <div className="space-y-3">
                    <div>
                      <label className="block text-[10px] uppercase font-bold text-slate-400 dark:text-slate-550 mb-1">
                        Both responses achieve the goal. Which better represents the client's brand voice?
                      </label>
                      <input 
                        type="text"
                        placeholder="Type your notes..."
                        value={notes["ep2"]?.["brandVoiceMatch"] || ""}
                        onChange={(e) => handleNoteChange("ep2", "brandVoiceMatch", e.target.value)}
                        disabled={submitted["ep2"]}
                        className="w-full text-xs p-2.5 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl outline-hidden focus:border-indigo-500"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] uppercase font-bold text-slate-400 dark:text-slate-550 mb-1">
                        Would both be acceptable in different workplaces? Explain.
                      </label>
                      <input 
                        type="text"
                        placeholder="Type your notes..."
                        value={notes["ep2"]?.["workplaceAcceptable"] || ""}
                        onChange={(e) => handleNoteChange("ep2", "workplaceAcceptable", e.target.value)}
                        disabled={submitted["ep2"]}
                        className="w-full text-xs p-2.5 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl outline-hidden focus:border-indigo-500"
                      />
                    </div>
                  </div>
                </div>

                <div className="space-y-2 pt-2">
                  <label className="block text-xs font-bold text-slate-800 dark:text-slate-200 mb-1">
                    3. Professional Rationale (120–150 words):
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Provide your rationale explaining your choice based on Professional Tone, Clarity, and Completeness..."
                    value={rationales["ep2"] || ""}
                    onChange={(e) => handleRationaleChange("ep2", e.target.value)}
                    disabled={submitted["ep2"]}
                    className="w-full text-xs p-3 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl outline-hidden focus:border-indigo-500 font-mono"
                  />
                  {rationales["ep2"] && (
                    <span className="text-[10px] font-mono text-slate-450 block text-right">
                      {rationales["ep2"].split(/\s+/).filter(Boolean).length} words
                    </span>
                  )}
                </div>

                <div className="space-y-2 pt-2">
                  <label className="block text-xs font-bold text-slate-800 dark:text-slate-200 mb-1">
                    4. Reflection: Should professionalism outweigh brevity in this project? Why?
                  </label>
                  <textarea
                    rows={2}
                    placeholder="Enter your reflection..."
                    value={reflections["ep2"] || ""}
                    onChange={(e) => handleReflectionChange("ep2", e.target.value)}
                    disabled={submitted["ep2"]}
                    className="w-full text-xs p-3 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl outline-hidden focus:border-indigo-500"
                  />
                </div>

                {!submitted["ep2"] && (
                  <button
                    onClick={() => handleProjectSubmit("ep2")}
                    className="w-full py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-xs font-bold transition-all cursor-pointer"
                  >
                    Submit Project 2
                  </button>
                )}
              </div>

              {/* Expert Review Section */}
              {submitted["ep2"] && (
                <div className="mt-6 p-5 sm:p-6 bg-emerald-500/5 rounded-2xl border border-emerald-500/20 space-y-4 animate-fade-in">
                  <h4 className="text-sm font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5 my-0">
                    <CheckCircle2 className="w-5 h-5" /> Expert Review & Calibration
                  </h4>
                  <div className="space-y-3 text-xs text-slate-650 dark:text-slate-350 leading-relaxed">
                    <div>
                      <span className="font-bold text-slate-900 dark:text-white block mb-0.5">Preferred Response:</span>
                      <span className="font-extrabold text-indigo-600 dark:text-indigo-400">Response A</span>
                    </div>
                    <div>
                      <span className="font-bold text-slate-900 dark:text-white block mb-0.5">Expert Rationale:</span>
                      <p className="my-0">
                        Response A is preferred because it adopts an appropriate, polite, and professional tone (&ldquo;sincerely apologise for the inconvenience&rdquo;, &ldquo;If possible, I'd appreciate...&rdquo;) suitable for business communication. Response B is overly brief, blunt (&ldquo;Let me know another time&rdquo;), and lacks professional courtesy, failing the primary dimension of Professional Tone.
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Step Navigation */}
            <div className="mt-12 pt-6 border-t border-slate-100 dark:border-slate-800 flex justify-between">
              <button
                onClick={() => {
                  setCurrentStep(2);
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className="text-slate-400 hover:text-slate-700 dark:hover:text-white text-xs font-bold flex items-center gap-1.5 transition-colors cursor-pointer"
              >
                <ChevronLeft className="w-4 h-4" />
                <span>Project 1</span>
              </button>
              <button
                onClick={() => {
                  setCurrentStep(4);
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className="bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl px-6 py-3 text-xs font-bold flex items-center gap-2 transition-all cursor-pointer shadow-sm hover:shadow-md"
              >
                <span>Continue to Project 3</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {/* ================= STEP 4: EVALUATION PROJECT 3 ================= */}
        {currentStep === 4 && (
          <div className="space-y-8 animate-fade-in">
            <div className="bg-white dark:bg-slate-900/60 p-6 sm:p-8 rounded-[24px] border border-slate-150 dark:border-slate-800 space-y-6">
              <div className="flex items-start justify-between gap-4 flex-wrap border-b border-slate-100 dark:border-slate-800 pb-4">
                <div>
                  <span className="text-[10px] font-extrabold text-indigo-600 dark:text-indigo-455 uppercase tracking-widest block font-mono">
                    Evaluation Project 3 (Advanced)
                  </span>
                  <h3 className="text-base font-bold text-slate-900 dark:text-white mt-0.5 mb-0">
                    Project: Career Coach (CareerPath AI)
                  </h3>
                </div>
                <div className="bg-slate-100 dark:bg-slate-800 px-2.5 py-1 rounded text-[9px] font-mono text-slate-500 dark:text-slate-400 uppercase">
                  Primary Metric: Helpfulness
                </div>
              </div>

              <div className="bg-slate-50 dark:bg-slate-950 p-4 rounded-xl border border-slate-150 dark:border-slate-850 text-xs space-y-3">
                <div className="grid grid-cols-2 gap-4 border-b border-slate-200 dark:border-slate-800 pb-2 mb-2 text-[11px] text-slate-500">
                  <div><strong>Secondary Dimensions:</strong> Completeness, Clarity</div>
                  <div><strong>Difficulty:</strong> Advanced</div>
                </div>

                <p className="my-0"><strong>Prompt:</strong></p>
                <p className="my-0 text-slate-800 dark:text-slate-200 font-medium pl-2 border-l-2 border-indigo-500 italic">
                  A university student asks: &ldquo;I have no work experience. How can I improve my CV?&rdquo;
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                  <div className="bg-white dark:bg-slate-900 p-3.5 rounded-xl border border-slate-150 dark:border-slate-850">
                    <strong className="text-rose-600 dark:text-rose-400 block mb-2 font-bold text-xs">Response A</strong>
                    <p className="text-slate-700 dark:text-slate-300 my-0 leading-relaxed text-xs">
                      &ldquo;Include university projects, volunteer work, leadership activities, relevant coursework, certifications, technical skills, and tailor your CV to each job application. Employers understand that graduates often have limited work experience.&rdquo;
                    </p>
                  </div>

                  <div className="bg-white dark:bg-slate-900 p-3.5 rounded-xl border border-slate-150 dark:border-slate-850">
                    <strong className="text-emerald-600 dark:text-emerald-400 block mb-2 font-bold text-xs">Response B</strong>
                    <p className="text-slate-700 dark:text-slate-300 my-0 leading-relaxed text-xs">
                      &ldquo;Add your education and skills to your CV.&rdquo;
                    </p>
                  </div>
                </div>
              </div>

              {/* Evaluation Controls */}
              <div className="space-y-4 pt-2 border-t border-slate-100 dark:border-slate-800">
                <p className="text-xs font-bold text-slate-800 dark:text-slate-200 mt-0 mb-1">
                  1. Overall Ranking:
                </p>
                <div className="grid grid-cols-3 gap-3">
                  {["Response A", "Response B", "Tie"].map((option) => {
                    const isSelected = rankings["ep3"] === option;
                    return (
                      <button
                        key={option}
                        onClick={() => handleRankSelect("ep3", option)}
                        disabled={submitted["ep3"]}
                        className={`py-2 px-3 rounded-xl text-xs font-bold transition-all border text-center cursor-pointer ${
                          isSelected
                            ? "bg-indigo-600 border-indigo-600 text-white"
                            : "bg-slate-50 dark:bg-slate-950 border-slate-200 dark:border-slate-800 text-slate-650 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-850"
                        }`}
                      >
                        {option}
                      </button>
                    );
                  })}
                </div>

                <div className="space-y-3 pt-2">
                  <p className="text-xs font-bold text-slate-800 dark:text-slate-200 mt-0 mb-1">
                    2. Evaluation Notes:
                  </p>
                  <div className="space-y-3">
                    <div>
                      <label className="block text-[10px] uppercase font-bold text-slate-400 dark:text-slate-550 mb-1">
                        Does Response B answer the question? Is it the better response? Explain.
                      </label>
                      <input 
                        type="text"
                        placeholder="Type your notes..."
                        value={notes["ep3"]?.["bAnswers"] || ""}
                        onChange={(e) => handleNoteChange("ep3", "bAnswers", e.target.value)}
                        disabled={submitted["ep3"]}
                        className="w-full text-xs p-2.5 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl outline-hidden focus:border-indigo-500"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] uppercase font-bold text-slate-400 dark:text-slate-550 mb-1">
                        What additional value does Response A provide?
                      </label>
                      <input 
                        type="text"
                        placeholder="Type your notes..."
                        value={notes["ep3"]?.["aValue"] || ""}
                        onChange={(e) => handleNoteChange("ep3", "aValue", e.target.value)}
                        disabled={submitted["ep3"]}
                        className="w-full text-xs p-2.5 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl outline-hidden focus:border-indigo-500"
                      />
                    </div>
                  </div>
                </div>

                <div className="space-y-2 pt-2">
                  <label className="block text-xs font-bold text-slate-800 dark:text-slate-200 mb-1">
                    3. Professional Rationale (120–150 words):
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Explain your decision focusing on Helpfulness, Completeness, and Clarity..."
                    value={rationales["ep3"] || ""}
                    onChange={(e) => handleRationaleChange("ep3", e.target.value)}
                    disabled={submitted["ep3"]}
                    className="w-full text-xs p-3 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl outline-hidden focus:border-indigo-500 font-mono"
                  />
                  {rationales["ep3"] && (
                    <span className="text-[10px] font-mono text-slate-450 block text-right">
                      {rationales["ep3"].split(/\s+/).filter(Boolean).length} words
                    </span>
                  )}
                </div>

                <div className="space-y-2 pt-2">
                  <label className="block text-xs font-bold text-slate-800 dark:text-slate-200 mb-1">
                    4. Reflection: Can a response be correct but still rank significantly lower? Explain.
                  </label>
                  <textarea
                    rows={2}
                    placeholder="Enter your reflection..."
                    value={reflections["ep3"] || ""}
                    onChange={(e) => handleReflectionChange("ep3", e.target.value)}
                    disabled={submitted["ep3"]}
                    className="w-full text-xs p-3 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl outline-hidden focus:border-indigo-500"
                  />
                </div>

                {!submitted["ep3"] && (
                  <button
                    onClick={() => handleProjectSubmit("ep3")}
                    className="w-full py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-xs font-bold transition-all cursor-pointer"
                  >
                    Submit Project 3
                  </button>
                )}
              </div>

              {/* Expert Review Section */}
              {submitted["ep3"] && (
                <div className="mt-6 p-5 sm:p-6 bg-emerald-500/5 rounded-2xl border border-emerald-500/20 space-y-4 animate-fade-in">
                  <h4 className="text-sm font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5 my-0">
                    <CheckCircle2 className="w-5 h-5" /> Expert Review & Calibration
                  </h4>
                  <div className="space-y-3 text-xs text-slate-650 dark:text-slate-350 leading-relaxed">
                    <div>
                      <span className="font-bold text-slate-900 dark:text-white block mb-0.5">Preferred Response:</span>
                      <span className="font-extrabold text-indigo-600 dark:text-indigo-400">Response A</span>
                    </div>
                    <div>
                      <span className="font-bold text-slate-900 dark:text-white block mb-0.5">Expert Rationale:</span>
                      <p className="my-0">
                        Response A is significantly better and preferred because it is comprehensive, actionable, and directly answers how a student with no experience can improve their CV (by including projects, volunteer work, etc.). Response B, while technically accurate, is extremely basic and offers almost zero practical help or guidance, failing the Helpfulness dimension.
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Step Navigation */}
            <div className="mt-12 pt-6 border-t border-slate-100 dark:border-slate-800 flex justify-between">
              <button
                onClick={() => {
                  setCurrentStep(3);
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className="text-slate-400 hover:text-slate-700 dark:hover:text-white text-xs font-bold flex items-center gap-1.5 transition-colors cursor-pointer"
              >
                <ChevronLeft className="w-4 h-4" />
                <span>Project 2</span>
              </button>
              <button
                onClick={() => {
                  setCurrentStep(5);
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className="bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl px-6 py-3 text-xs font-bold flex items-center gap-2 transition-all cursor-pointer shadow-sm hover:shadow-md"
              >
                <span>Continue to Project 4</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {/* ================= STEP 5: EVALUATION PROJECT 4 ================= */}
        {currentStep === 5 && (
          <div className="space-y-8 animate-fade-in">
            <div className="bg-white dark:bg-slate-900/60 p-6 sm:p-8 rounded-[24px] border border-slate-150 dark:border-slate-800 space-y-6">
              <div className="flex items-start justify-between gap-4 flex-wrap border-b border-slate-100 dark:border-slate-800 pb-4">
                <div>
                  <span className="text-[10px] font-extrabold text-indigo-600 dark:text-indigo-455 uppercase tracking-widest block font-mono">
                    Evaluation Project 4 (Advanced)
                  </span>
                  <h3 className="text-base font-bold text-slate-900 dark:text-white mt-0.5 mb-0">
                    Project: Patient Support Assistant (HealthAssist AI)
                  </h3>
                </div>
                <div className="bg-slate-100 dark:bg-slate-800 px-2.5 py-1 rounded text-[9px] font-mono text-slate-500 dark:text-slate-400 uppercase">
                  Primary Metric: Balance Between Accuracy and Empathy
                </div>
              </div>

              <div className="bg-slate-50 dark:bg-slate-950 p-4 rounded-xl border border-slate-150 dark:border-slate-850 text-xs space-y-3">
                <div className="grid grid-cols-2 gap-4 border-b border-slate-200 dark:border-slate-800 pb-2 mb-2 text-[11px] text-slate-500">
                  <div><strong>Secondary Dimensions:</strong> Tone, Helpfulness</div>
                  <div><strong>Difficulty:</strong> Advanced</div>
                </div>

                <p className="my-0"><strong>Prompt:</strong></p>
                <p className="my-0 text-slate-800 dark:text-slate-200 font-medium pl-2 border-l-2 border-indigo-500 italic">
                  A patient asks: &ldquo;My blood pressure is slightly high. Should I be worried?&rdquo;
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                  <div className="bg-white dark:bg-slate-900 p-3.5 rounded-xl border border-slate-150 dark:border-slate-850">
                    <strong className="text-rose-600 dark:text-rose-400 block mb-2 font-bold text-xs">Response A</strong>
                    <p className="text-slate-700 dark:text-slate-300 my-0 leading-relaxed text-xs">
                      &ldquo;Slightly elevated blood pressure doesn't always indicate a serious medical condition, but it's important to monitor it and discuss your readings with your healthcare provider, who can interpret them in the context of your overall health.&rdquo;
                    </p>
                  </div>

                  <div className="bg-white dark:bg-slate-900 p-3.5 rounded-xl border border-slate-150 dark:border-slate-850">
                    <strong className="text-emerald-600 dark:text-emerald-400 block mb-2 font-bold text-xs">Response B</strong>
                    <p className="text-slate-700 dark:text-slate-300 my-0 leading-relaxed text-xs">
                      &ldquo;You probably don't have anything to worry about. High blood pressure is common.&rdquo;
                    </p>
                  </div>
                </div>
              </div>

              {/* Evaluation Controls */}
              <div className="space-y-4 pt-2 border-t border-slate-100 dark:border-slate-800">
                <p className="text-xs font-bold text-slate-800 dark:text-slate-200 mt-0 mb-1">
                  1. Overall Ranking:
                </p>
                <div className="grid grid-cols-3 gap-3">
                  {["Response A", "Response B", "Tie"].map((option) => {
                    const isSelected = rankings["ep4"] === option;
                    return (
                      <button
                        key={option}
                        onClick={() => handleRankSelect("ep4", option)}
                        disabled={submitted["ep4"]}
                        className={`py-2 px-3 rounded-xl text-xs font-bold transition-all border text-center cursor-pointer ${
                          isSelected
                            ? "bg-indigo-600 border-indigo-600 text-white"
                            : "bg-slate-50 dark:bg-slate-950 border-slate-200 dark:border-slate-800 text-slate-650 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-850"
                        }`}
                      >
                        {option}
                      </button>
                    );
                  })}
                </div>

                <div className="space-y-3 pt-2">
                  <p className="text-xs font-bold text-slate-800 dark:text-slate-200 mt-0 mb-1">
                    2. Evaluation Notes:
                  </p>
                  <div className="space-y-3">
                    <div>
                      <label className="block text-[10px] uppercase font-bold text-slate-400 dark:text-slate-550 mb-1">
                        Both responses attempt reassurance. Which better balances reassurance with responsible advice?
                      </label>
                      <input 
                        type="text"
                        placeholder="Type your notes..."
                        value={notes["ep4"]?.["reassuranceBalance"] || ""}
                        onChange={(e) => handleNoteChange("ep4", "reassuranceBalance", e.target.value)}
                        disabled={submitted["ep4"]}
                        className="w-full text-xs p-2.5 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl outline-hidden focus:border-indigo-500"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] uppercase font-bold text-slate-400 dark:text-slate-550 mb-1">
                        Would either response require revision before deployment? Explain.
                      </label>
                      <input 
                        type="text"
                        placeholder="Type your notes..."
                        value={notes["ep4"]?.["requiresRevision"] || ""}
                        onChange={(e) => handleNoteChange("ep4", "requiresRevision", e.target.value)}
                        disabled={submitted["ep4"]}
                        className="w-full text-xs p-2.5 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl outline-hidden focus:border-indigo-500"
                      />
                    </div>
                  </div>
                </div>

                <div className="space-y-2 pt-2">
                  <label className="block text-xs font-bold text-slate-800 dark:text-slate-200 mb-1">
                    3. Professional Rationale (120–150 words):
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Provide your rationale explaining your ranking based on Balance Between Accuracy and Empathy, Tone, and Helpfulness..."
                    value={rationales["ep4"] || ""}
                    onChange={(e) => handleRationaleChange("ep4", e.target.value)}
                    disabled={submitted["ep4"]}
                    className="w-full text-xs p-3 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl outline-hidden focus:border-indigo-500 font-mono"
                  />
                  {rationales["ep4"] && (
                    <span className="text-[10px] font-mono text-slate-450 block text-right">
                      {rationales["ep4"].split(/\s+/).filter(Boolean).length} words
                    </span>
                  )}
                </div>

                <div className="space-y-2 pt-2">
                  <label className="block text-xs font-bold text-slate-800 dark:text-slate-200 mb-1">
                    4. Reflection: How does responsible communication influence trust in healthcare AI?
                  </label>
                  <textarea
                    rows={2}
                    placeholder="Enter your reflection..."
                    value={reflections["ep4"] || ""}
                    onChange={(e) => handleReflectionChange("ep4", e.target.value)}
                    disabled={submitted["ep4"]}
                    className="w-full text-xs p-3 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl outline-hidden focus:border-indigo-500"
                  />
                </div>

                {!submitted["ep4"] && (
                  <button
                    onClick={() => handleProjectSubmit("ep4")}
                    className="w-full py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-xs font-bold transition-all cursor-pointer"
                  >
                    Submit Project 4
                  </button>
                )}
              </div>

              {/* Expert Review Section */}
              {submitted["ep4"] && (
                <div className="mt-6 p-5 sm:p-6 bg-emerald-500/5 rounded-2xl border border-emerald-500/20 space-y-4 animate-fade-in">
                  <h4 className="text-sm font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5 my-0">
                    <CheckCircle2 className="w-5 h-5" /> Expert Review & Calibration
                  </h4>
                  <div className="space-y-3 text-xs text-slate-650 dark:text-slate-350 leading-relaxed">
                    <div>
                      <span className="font-bold text-slate-900 dark:text-white block mb-0.5">Preferred Response:</span>
                      <span className="font-extrabold text-indigo-600 dark:text-indigo-400">Response A</span>
                    </div>
                    <div>
                      <span className="font-bold text-slate-900 dark:text-white block mb-0.5">Expert Rationale:</span>
                      <p className="my-0">
                        Response A is preferred because it perfectly balances empathy with medical safety and accuracy. It validates the patient's concern, offers realistic context (slightly elevated doesn't mean immediate emergency), but responsibly advises monitoring and consulting a healthcare provider. Response B is overly dismissive (&ldquo;probably don't have anything to worry about&rdquo;), which is medically irresponsible and poses safety risks.
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Step Navigation */}
            <div className="mt-12 pt-6 border-t border-slate-100 dark:border-slate-800 flex justify-between">
              <button
                onClick={() => {
                  setCurrentStep(4);
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className="text-slate-400 hover:text-slate-700 dark:hover:text-white text-xs font-bold flex items-center gap-1.5 transition-colors cursor-pointer"
              >
                <ChevronLeft className="w-4 h-4" />
                <span>Project 3</span>
              </button>
              <button
                onClick={() => {
                  setCurrentStep(6);
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className="bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl px-6 py-3 text-xs font-bold flex items-center gap-2 transition-all cursor-pointer shadow-sm hover:shadow-md"
              >
                <span>Continue to Calibration Challenge</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {/* ================= STEP 6: EVALUATION PROJECT 5 (CALIBRATION CHALLENGE) ================= */}
        {currentStep === 6 && (
          <div className="space-y-8 animate-fade-in">
            <div className="bg-white dark:bg-slate-900/60 p-6 sm:p-8 rounded-[24px] border border-slate-150 dark:border-slate-800 space-y-6">
              <div className="flex items-start justify-between gap-4 flex-wrap border-b border-slate-100 dark:border-slate-800 pb-4">
                <div>
                  <span className="text-[10px] font-extrabold text-[#D97706] dark:text-[#F59E0B] uppercase tracking-widest block font-mono">
                    Evaluation Project 5 (Calibration Challenge)
                  </span>
                  <h3 className="text-base font-bold text-slate-900 dark:text-white mt-0.5 mb-0">
                    Project: Career Guidance Platform (GlobalReady AI)
                  </h3>
                </div>
                <div className="bg-amber-100 dark:bg-amber-950/40 text-[#D97706] dark:text-amber-400 px-2.5 py-1 rounded text-[9px] font-mono uppercase">
                  Primary Metric: Overall User Satisfaction
                </div>
              </div>

              <div className="bg-slate-50 dark:bg-slate-950 p-4 rounded-xl border border-slate-150 dark:border-slate-850 text-xs space-y-3">
                <div className="grid grid-cols-2 gap-4 border-b border-slate-200 dark:border-slate-800 pb-2 mb-2 text-[11px] text-slate-500">
                  <div><strong>Secondary Dimensions:</strong> Clarity, Completeness, Audience Alignment, Helpfulness</div>
                  <div><strong>Brand Voice:</strong> Encouraging, Practical, Honest, Action-Oriented</div>
                </div>

                <p className="my-0"><strong>Prompt:</strong></p>
                <p className="my-0 text-slate-800 dark:text-slate-200 font-medium pl-2 border-l-2 border-indigo-500 italic">
                  A teacher asks: &ldquo;I'm interested in transitioning into AI Evaluation. I work full-time and only have about five hours each week to study. What would you recommend?&rdquo;
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                  <div className="bg-white dark:bg-slate-900 p-3.5 rounded-xl border border-slate-150 dark:border-slate-850">
                    <strong className="text-rose-600 dark:text-rose-400 block mb-2 font-bold text-xs">Response A</strong>
                    <p className="text-slate-700 dark:text-slate-300 my-0 leading-relaxed text-xs">
                      &ldquo;Transitioning into AI Evaluation is achievable even with limited study time. Focus on learning one core skill each week, such as instruction following, response ranking, or context tracking. Spend part of your study time completing realistic evaluation exercises, then begin applying for entry-level AI evaluation projects after building a small portfolio of practice work. Consistency will matter more than studying for long hours.&rdquo;
                    </p>
                  </div>

                  <div className="bg-white dark:bg-slate-900 p-3.5 rounded-xl border border-slate-150 dark:border-slate-850">
                    <strong className="text-emerald-600 dark:text-emerald-400 block mb-2 font-bold text-xs">Response B</strong>
                    <p className="text-slate-700 dark:text-slate-300 my-0 leading-relaxed text-xs">
                      &ldquo;AI Evaluation is a rapidly growing field involving data annotation, prompt engineering, reinforcement learning from human feedback, quality assurance, safety evaluation, and model alignment. Before applying, you should develop strong programming skills, study machine learning theory, complete several AI certifications, learn Python in depth, and gain experience across multiple AI domains.&rdquo;
                    </p>
                  </div>
                </div>
              </div>

              {/* Evaluation Controls */}
              <div className="space-y-4 pt-2 border-t border-slate-100 dark:border-slate-800">
                <p className="text-xs font-bold text-slate-800 dark:text-slate-200 mt-0 mb-1">
                  1. Overall Ranking:
                </p>
                <div className="grid grid-cols-3 gap-3">
                  {["Response A", "Response B", "Tie"].map((option) => {
                    const isSelected = rankings["ep5"] === option;
                    return (
                      <button
                        key={option}
                        onClick={() => handleRankSelect("ep5", option)}
                        disabled={submitted["ep5"]}
                        className={`py-2 px-3 rounded-xl text-xs font-bold transition-all border text-center cursor-pointer ${
                          isSelected
                            ? "bg-indigo-600 border-indigo-600 text-white"
                            : "bg-slate-50 dark:bg-slate-950 border-slate-200 dark:border-slate-800 text-slate-650 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-850"
                        }`}
                      >
                        {option}
                      </button>
                    );
                  })}
                </div>

                <div className="space-y-3 pt-2">
                  <p className="text-xs font-bold text-slate-800 dark:text-slate-200 mt-0 mb-1">
                    2. Evaluation Notes:
                  </p>
                  <div className="space-y-3">
                    <div>
                      <label className="block text-[10px] uppercase font-bold text-slate-400 dark:text-slate-550 mb-1">
                        Both responses contain valuable information. Which response better serves the user's situation?
                      </label>
                      <input 
                        type="text"
                        placeholder="Type your notes..."
                        value={notes["ep5"]?.["userSituation"] || ""}
                        onChange={(e) => handleNoteChange("ep5", "userSituation", e.target.value)}
                        disabled={submitted["ep5"]}
                        className="w-full text-xs p-2.5 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl outline-hidden focus:border-indigo-500"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] uppercase font-bold text-slate-400 dark:text-slate-550 mb-1">
                        Which response is more likely to help the user take action immediately?
                      </label>
                      <input 
                        type="text"
                        placeholder="Type your notes..."
                        value={notes["ep5"]?.["immediateAction"] || ""}
                        onChange={(e) => handleNoteChange("ep5", "immediateAction", e.target.value)}
                        disabled={submitted["ep5"]}
                        className="w-full text-xs p-2.5 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl outline-hidden focus:border-indigo-500"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] uppercase font-bold text-slate-400 dark:text-slate-550 mb-1">
                        Would either response require editing before deployment? Explain.
                      </label>
                      <input 
                        type="text"
                        placeholder="Type your notes..."
                        value={notes["ep5"]?.["requiresEditing"] || ""}
                        onChange={(e) => handleNoteChange("ep5", "requiresEditing", e.target.value)}
                        disabled={submitted["ep5"]}
                        className="w-full text-xs p-2.5 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl outline-hidden focus:border-indigo-500"
                      />
                    </div>
                  </div>
                </div>

                <div className="space-y-2 pt-2">
                  <label className="block text-xs font-bold text-slate-800 dark:text-slate-200 mb-1">
                    3. Professional Rationale (150–200 words):
                  </label>
                  <textarea
                    rows={5}
                    placeholder="Provide your professional rationale defending your ranking, referencing Primary Evaluation Dimension, Audience Alignment, Helpfulness, Completeness, and Practicality..."
                    value={rationales["ep5"] || ""}
                    onChange={(e) => handleRationaleChange("ep5", e.target.value)}
                    disabled={submitted["ep5"]}
                    className="w-full text-xs p-3 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl outline-hidden focus:border-indigo-500 font-mono"
                  />
                  {rationales["ep5"] && (
                    <span className="text-[10px] font-mono text-slate-450 block text-right">
                      {rationales["ep5"].split(/\s+/).filter(Boolean).length} words
                    </span>
                  )}
                </div>

                <div className="space-y-2 pt-2">
                  <label className="block text-xs font-bold text-slate-800 dark:text-slate-200 mb-1">
                    4. Reflection: Another evaluator argues that Response B is &ldquo;more comprehensive&rdquo; and therefore should rank higher. Using only the project brief and evaluation criteria, explain whether you agree or disagree.
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Enter your reflection..."
                    value={reflections["ep5"] || ""}
                    onChange={(e) => handleReflectionChange("ep5", e.target.value)}
                    disabled={submitted["ep5"]}
                    className="w-full text-xs p-3 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl outline-hidden focus:border-indigo-500"
                  />
                </div>

                {!submitted["ep5"] && (
                  <button
                    onClick={() => handleProjectSubmit("ep5")}
                    className="w-full py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-xs font-bold transition-all cursor-pointer"
                  >
                    Submit Calibration Challenge
                  </button>
                )}
              </div>

              {/* Expert Review Section */}
              {submitted["ep5"] && (
                <div className="mt-6 p-5 sm:p-6 bg-amber-500/5 rounded-2xl border border-amber-500/20 space-y-4 animate-fade-in">
                  <h4 className="text-sm font-bold text-amber-600 dark:text-amber-400 flex items-center gap-1.5 my-0">
                    <Award className="w-5 h-5 text-amber-500" /> Expert Review & Calibration
                  </h4>
                  <div className="space-y-3 text-xs text-slate-650 dark:text-slate-350 leading-relaxed">
                    <div>
                      <span className="font-bold text-slate-900 dark:text-white block mb-0.5">Preferred Response:</span>
                      <span className="font-extrabold text-[#D97706] dark:text-[#F59E0B]">Response A</span>
                    </div>
                    <div>
                      <span className="font-bold text-slate-900 dark:text-white block mb-0.5">Expert Rationale:</span>
                      <p className="my-0">
                        Both responses are accurate and professionally written. However, the prompt contains an important contextual constraint: the user works full-time and has only five hours each week to study. Response A directly addresses this limitation by offering a realistic, achievable learning path with actionable next steps. Response B provides broad background information but recommends a much larger learning commitment than the user's situation supports. Although comprehensive, it is less personalised and less immediately useful. Based on the project's primary evaluation dimension—Overall User Satisfaction—Response A better meets the user's needs.
                      </p>
                    </div>
                    <div className="pt-2 border-t border-amber-200/40">
                      <span className="font-bold text-slate-900 dark:text-white block mb-0.5 text-[11px] uppercase tracking-wide">Calibration Note:</span>
                      <p className="my-0 italic text-slate-500">
                        When two responses are both factually correct, the deciding factor is often <strong>which one best serves the specific user described in the prompt</strong>, not which one contains more information.
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Step Navigation */}
            <div className="mt-12 pt-6 border-t border-slate-100 dark:border-slate-800 flex justify-between">
              <button
                onClick={() => {
                  setCurrentStep(5);
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className="text-slate-400 hover:text-slate-700 dark:hover:text-white text-xs font-bold flex items-center gap-1.5 transition-colors cursor-pointer"
              >
                <ChevronLeft className="w-4 h-4" />
                <span>Project 4</span>
              </button>
              <button
                onClick={() => {
                  setCurrentStep(7);
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className="bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl px-6 py-3 text-xs font-bold flex items-center gap-2 transition-all cursor-pointer shadow-sm hover:shadow-md"
              >
                <span>Continue to Summary</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {/* ================= STEP 7: SUMMARY & COMPLETION ================= */}
        {currentStep === 7 && (
          <div className="space-y-8 animate-fade-in">
            <div className="bg-emerald-500/5 p-6 rounded-2xl border border-emerald-500/20 text-center space-y-4">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400">
                <Check className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mt-0 mb-1">
                  Congratulations!
                </h3>
                <p className="text-sm font-semibold text-slate-800 dark:text-white max-w-md mx-auto">
                  You have completed Lesson 7: Response Ranking & Preference Evaluation.
                </p>
                <p className="text-xs text-slate-500 dark:text-slate-400 max-w-md mx-auto leading-relaxed mt-2">
                  You have now completed the entire theoretical series of Part 2! You can compare competing AI responses, defend your rankings with evidence, and make nuanced evaluation decisions similar to those expected in professional AI evaluation projects and technical interviews.
                </p>
              </div>
            </div>

            <section className="bg-white dark:bg-slate-900/40 p-6 rounded-2xl border border-slate-150 dark:border-slate-800 space-y-4">
              <h3 className="text-base font-bold text-slate-900 dark:text-white mt-0 mb-1">
                Key Takeaways
              </h3>
              <ul className="space-y-2 pl-4 list-disc marker:text-indigo-500 text-xs text-slate-650 dark:text-slate-400 my-0">
                <li>Response ranking is about comparing responses against the project rubric, not personal preference.</li>
                <li>Major issues such as factual errors, safety concerns, or instruction-following failures usually outweigh minor writing differences.</li>
                <li>Good evaluators recognise when both responses are strong and identify the subtle factors that determine the better choice.</li>
                <li>Tie should only be selected when there is no meaningful quality difference according to the evaluation criteria.</li>
                <li>Strong rationales explain <strong>why</strong> one response better satisfies the project goals using evidence from the prompt, responses, and project brief.</li>
                <li>Professional AI evaluation is ultimately about selecting the response that delivers the greatest value to the user while meeting the client's priorities.</li>
              </ul>
            </section>

            {/* Step Navigation */}
            <div className="mt-12 pt-6 border-t border-slate-100 dark:border-slate-800 flex justify-between">
              <button
                onClick={() => {
                  setCurrentStep(6);
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className="text-slate-400 hover:text-slate-700 dark:hover:text-white text-xs font-bold flex items-center gap-1.5 transition-colors cursor-pointer"
              >
                <ChevronLeft className="w-4 h-4" />
                <span>Calibration Challenge</span>
              </button>
              
              <button
                onClick={handleFinishLesson}
                className="bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl px-6 py-3 text-xs font-bold flex items-center gap-2 transition-all cursor-pointer shadow-sm hover:shadow-md"
              >
                <Check className="w-4 h-4" />
                <span>Complete Lesson 7 & Finish Track</span>
              </button>
            </div>
          </div>
        )}

      </article>
    </div>
  );
}
