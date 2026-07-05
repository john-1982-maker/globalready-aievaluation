import React, { useState } from "react";
import { 
  ArrowLeft, ChevronRight, Check, BookOpen, CheckCircle2, ChevronLeft
} from "lucide-react";

interface Part2Lesson4ViewProps {
  onBack: () => void;
  onComplete: (xpEarned: number) => void;
}

export default function Part2Lesson4View({ onBack, onComplete }: Part2Lesson4ViewProps) {
  // State for current pagination step (1 to 5)
  const [currentStep, setCurrentStep] = useState<number>(1); 
  // 1: Lecture (Theory)
  // 2: Case Studies 1 & 2
  // 3: Case Studies 3 & 4
  // 4: Case Study 5 & Reflection
  // 5: Summary & Complete

  // Interactive exercises state
  const [rankings, setRankings] = useState<Record<string, string>>({});
  const [notes, setNotes] = useState<Record<string, Record<string, string>>>({});
  const [rationales, setRationales] = useState<Record<string, string>>({});
  const [reflections, setReflections] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState<Record<string, boolean>>({});

  const handleRankSelect = (caseId: string, rank: string) => {
    if (submitted[caseId]) return;
    setRankings(prev => ({ ...prev, [caseId]: rank }));
  };

  const handleNoteChange = (caseId: string, field: string, value: string) => {
    if (submitted[caseId]) return;
    setNotes(prev => ({
      ...prev,
      [caseId]: {
        ...prev[caseId],
        [field]: value
      }
    }));
  };

  const handleRationaleChange = (caseId: string, val: string) => {
    if (submitted[caseId]) return;
    setRationales(prev => ({ ...prev, [caseId]: val }));
  };

  const handleReflectionChange = (caseId: string, val: string) => {
    if (submitted[caseId]) return;
    setReflections(prev => ({ ...prev, [caseId]: val }));
  };

  const handleCaseSubmit = (caseId: string) => {
    if (!rankings[caseId]) {
      alert("Please select an Overall Ranking first!");
      return;
    }
    setSubmitted(prev => ({ ...prev, [caseId]: true }));
  };

  const handleFinishLesson = () => {
    onComplete(120); // Award 120 XP for Lesson 4 completion
  };

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-8 md:py-12 animate-fade-in pb-24">
      
      {/* Back and Page navigation header */}
      <div className="mb-10 flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-4">
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-xs font-bold text-slate-400 hover:text-indigo-650 dark:text-slate-500 dark:hover:text-indigo-400 transition-colors uppercase tracking-wider cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Part 2 Overview
        </button>
        
        <span className="text-xs font-mono text-slate-400 dark:text-slate-500 uppercase tracking-wider">
          Section {currentStep} of 5
        </span>
      </div>

      <article className="prose prose-slate dark:prose-invert max-w-none text-slate-700 dark:text-slate-350 font-sans">
        
        {/* Lesson Title */}
        <div className="mb-8">
          <span className="text-indigo-600 dark:text-indigo-400 text-xs font-mono uppercase tracking-widest font-extrabold block mb-2">
            Part 2 &bull; Lesson 4
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight">
            Completeness & Helpfulness Evaluation
          </h1>
          <div className="h-1 w-20 bg-indigo-600 dark:bg-indigo-500 mt-4 rounded-full" />
        </div>

        {/* ================= STEP 1: LECTURE / THEORY ================= */}
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
                <li>Understand the difference between completeness and helpfulness.</li>
                <li>Identify responses that only partially answer a user's question.</li>
                <li>Evaluate whether a response provides practical value to the user.</li>
                <li>Distinguish between technically correct and genuinely useful responses.</li>
                <li>Write professional rationales that explain why one response is more complete and helpful than another.</li>
              </ul>
            </div>

            <section className="space-y-5">
              <h2 className="text-xl font-bold text-slate-900 dark:text-white tracking-tight mt-8 animate-slide-in">
                Why Completeness and Helpfulness Matter
              </h2>
              <p className="text-base leading-relaxed">
                Imagine you ask an AI:
              </p>
              <blockquote className="border-l-4 border-slate-200 dark:border-slate-800 pl-4 italic my-4 text-slate-650 dark:text-slate-400">
                &ldquo;I'm travelling to Germany for the first time. What documents do I need?&rdquo;
              </blockquote>
              <p className="text-base leading-relaxed">
                The AI replies:
              </p>
              <blockquote className="border-l-4 border-slate-200 dark:border-slate-800 pl-4 italic my-4 text-slate-650 dark:text-slate-400">
                &ldquo;You'll need a passport.&rdquo;
              </blockquote>
              <p className="text-base leading-relaxed">
                Is that answer correct? <strong>Yes.</strong>
              </p>
              <p className="text-base leading-relaxed font-bold text-rose-650 dark:text-rose-450">
                Is it complete? No.
              </p>
              <p className="text-base leading-relaxed">
                Depending on your nationality and purpose of travel, you might also need:
              </p>
              <ul className="list-disc pl-5 space-y-1 text-sm">
                <li>A visa</li>
                <li>Travel insurance</li>
                <li>Proof of accommodation</li>
                <li>Return ticket</li>
                <li>Financial documentation</li>
              </ul>
              <p className="text-base leading-relaxed">
                The AI answered the question, but only partially. Now imagine another response that covers all of these points in a clear and organized way. Which response is more useful?
              </p>
              <p className="text-base leading-relaxed">
                This is exactly what professional evaluators assess:
              </p>
              <p className="text-base leading-relaxed">
                <strong>Completeness</strong> measures whether the response answers the entire question.
              </p>
              <p className="text-base leading-relaxed">
                <strong>Helpfulness</strong> measures whether the response genuinely helps the user achieve their goal.
              </p>
              <p className="text-base leading-relaxed">
                A response may be completely accurate but still fail because it leaves out important information.
              </p>
            </section>

            <hr className="border-slate-100 dark:border-slate-800" />

            <section className="space-y-5">
              <h2 className="text-xl font-bold text-slate-900 dark:text-white tracking-tight">
                Completeness vs Helpfulness
              </h2>
              <p className="text-base leading-relaxed">
                Although related, these are different evaluation dimensions.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
                <div className="bg-slate-50 dark:bg-slate-900/40 p-5 rounded-2xl border border-slate-150 dark:border-slate-800">
                  <h3 className="text-sm font-bold text-indigo-600 dark:text-indigo-400 mt-0 mb-2">Completeness</h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-0 mb-4">Ask yourself:</p>
                  <ul className="space-y-1.5 list-disc pl-4 text-xs font-medium text-slate-700 dark:text-slate-300">
                    <li>Did the AI answer every part of the prompt?</li>
                    <li>Were any important points missing?</li>
                    <li>Did the response stop too early?</li>
                  </ul>
                </div>

                <div className="bg-slate-50 dark:bg-slate-900/40 p-5 rounded-2xl border border-slate-150 dark:border-slate-800">
                  <h3 className="text-sm font-bold text-indigo-600 dark:text-indigo-400 mt-0 mb-2">Helpfulness</h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-0 mb-4">Ask yourself:</p>
                  <ul className="space-y-1.5 list-disc pl-4 text-xs font-medium text-slate-700 dark:text-slate-300">
                    <li>Does the response help the user solve their problem?</li>
                    <li>Is the advice practical?</li>
                    <li>Can the user take action after reading it?</li>
                  </ul>
                </div>
              </div>
              <p className="text-base leading-relaxed">
                A response can be complete but still not very helpful if it is vague or impractical.
              </p>
            </section>

            <hr className="border-slate-100 dark:border-slate-800" />

            <section className="space-y-5">
              <h2 className="text-xl font-bold text-slate-900 dark:text-white tracking-tight">
                Evaluating Completeness & Helpfulness
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
                <div className="bg-red-500/5 border-l-4 border-rose-500 p-5 rounded-r-2xl text-xs space-y-2 leading-relaxed text-slate-650 dark:text-slate-350">
                  <p className="font-bold text-rose-600 dark:text-rose-450 mt-0">Common Signs of Incomplete Responses:</p>
                  <ul className="space-y-1.5 list-disc pl-4 my-0">
                    <li>Missing steps</li>
                    <li>Unanswered questions</li>
                    <li>Ignored sub-questions</li>
                    <li>Missing examples</li>
                    <li>Lack of explanation</li>
                  </ul>
                </div>

                <div className="bg-emerald-500/5 border-l-4 border-emerald-500 p-5 rounded-r-2xl text-xs space-y-2 leading-relaxed text-slate-650 dark:text-slate-350">
                  <p className="font-bold text-emerald-600 dark:text-emerald-450 mt-0">Common Signs of Helpful Responses:</p>
                  <ul className="space-y-1.5 list-disc pl-4 my-0">
                    <li>Explain concepts clearly.</li>
                    <li>Offer practical advice.</li>
                    <li>Include relevant examples.</li>
                    <li>Suggest next steps.</li>
                    <li>Anticipate common follow-up questions.</li>
                  </ul>
                </div>
              </div>
            </section>

            <hr className="border-slate-100 dark:border-slate-800" />

            <section className="space-y-5">
              <h2 className="text-xl font-bold text-slate-900 dark:text-white tracking-tight">
                Common Beginner Mistakes
              </h2>
              <div className="bg-amber-500/5 border-l-4 border-amber-500 p-5 rounded-r-2xl text-xs space-y-2 leading-relaxed text-slate-650 dark:text-slate-350">
                <p className="font-bold text-amber-600 dark:text-amber-500 mt-0">Watch out for these classic pitfalls:</p>
                <ul className="space-y-1.5 list-disc pl-4 my-0">
                  <li>Stopping reading after the first correct answer.</li>
                  <li>Ignoring missing parts of the prompt.</li>
                  <li>Confusing accuracy with completeness.</li>
                  <li>Rewarding long responses even when they include unnecessary information.</li>
                  <li>Assuming detailed responses are always helpful.</li>
                </ul>
              </div>
              <p className="text-base font-bold text-slate-900 dark:text-white leading-relaxed text-center py-4 bg-slate-50 dark:bg-slate-900/40 rounded-xl my-6">
                &ldquo;Longer does not always mean better.&rdquo;
              </p>
            </section>

            <hr className="border-slate-100 dark:border-slate-800" />

            <section className="space-y-5">
              <h2 className="text-xl font-bold text-slate-900 dark:text-white tracking-tight">
                Worked Example
              </h2>
              <div className="bg-slate-50 dark:bg-slate-900/40 p-5 rounded-2xl border border-slate-150 dark:border-slate-800 text-xs">
                <p className="font-mono text-slate-450 uppercase tracking-wider text-[10px] mt-0 mb-2">Scenario Demonstration</p>
                <strong className="text-slate-855 dark:text-slate-200 block mb-1">Prompt:</strong>
                <p className="italic mb-4">&ldquo;Give me three tips for preparing for a marathon and explain why each tip is important.&rdquo;</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-white dark:bg-slate-950 p-3.5 rounded-xl border border-slate-150 dark:border-slate-850">
                    <strong className="text-rose-600 block mb-2 font-bold">Response A</strong>
                    <ol className="list-decimal pl-4 text-slate-700 dark:text-slate-300 my-0 leading-relaxed">
                      <li>Train consistently.</li>
                      <li>Stay hydrated.</li>
                      <li>Eat well.</li>
                    </ol>
                  </div>

                  <div className="bg-white dark:bg-slate-950 p-3.5 rounded-xl border border-slate-150 dark:border-slate-850">
                    <strong className="text-emerald-600 block mb-2 font-bold">Response B</strong>
                    <ol className="list-decimal pl-4 text-slate-700 dark:text-slate-300 my-0 leading-relaxed">
                      <li>Train consistently to build endurance and reduce injury risk.</li>
                      <li>Stay hydrated to maintain performance and prevent dehydration.</li>
                      <li>Eat a balanced diet to fuel your body and support recovery.</li>
                    </ol>
                  </div>
                </div>

                <div className="mt-4 p-4 bg-indigo-50/20 rounded-xl border-l-2 border-indigo-500 text-slate-700 dark:text-slate-300">
                  <strong className="text-indigo-600 dark:text-indigo-400 block mb-1 font-bold">Professional Evaluation:</strong>
                  Both responses provide three tips. However, Response A does not explain <strong>why</strong> the tips matter. Response B fully satisfies the prompt and provides practical value. Professional evaluators would rank <strong>Response B</strong> higher.
                </div>
              </div>
            </section>

            {/* Bottom Pager */}
            <div className="mt-12 pt-6 border-t border-slate-100 dark:border-slate-800 flex justify-end">
              <button
                onClick={() => {
                  setCurrentStep(2);
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className="bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl px-6 py-3 text-xs font-bold flex items-center gap-2 transition-all cursor-pointer shadow-sm hover:shadow-md"
              >
                <span>Continue to Case Studies 1 & 2</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {/* ================= STEP 2: CASE STUDIES 1 & 2 ================= */}
        {currentStep === 2 && (
          <div className="space-y-12 animate-fade-in">
            
            {/* CASE STUDY 1 */}
            <section className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm space-y-6">
              <div className="border-b border-slate-100 dark:border-slate-800 pb-3 flex justify-between items-center flex-wrap gap-2">
                <div>
                  <span className="text-[10px] font-extrabold text-indigo-600 dark:text-indigo-455 uppercase tracking-widest block font-mono">
                    Case Study 1 (Beginner)
                  </span>
                  <h3 className="text-base font-bold text-slate-900 dark:text-white mt-0.5 mb-0">
                    Project Brief: Interview Preparation Assistant (CareerCoach AI)
                  </h3>
                </div>
                <div className="bg-slate-105 dark:bg-slate-800 px-2 py-1 rounded text-[9px] font-mono text-slate-500 dark:text-slate-400 uppercase">
                  Primary Metric: Completeness & Helpfulness
                </div>
              </div>

              <div className="bg-slate-50 dark:bg-slate-950 p-4 rounded-xl border border-slate-150 dark:border-slate-850 text-xs space-y-3">
                <p className="my-0"><strong>Prompt:</strong></p>
                <p className="my-0 text-slate-800 dark:text-slate-200 font-medium pl-2 border-l-2 border-indigo-500 italic">
                  &ldquo;Give me <strong>five</strong> interview preparation tips and explain why each one is important.&rdquo;
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                  <div className="bg-white dark:bg-slate-900 p-3.5 rounded-xl border border-slate-150 dark:border-slate-850">
                    <strong className="text-rose-600 block mb-2 font-bold text-xs">Response A</strong>
                    <ol className="list-decimal pl-4 text-slate-700 dark:text-slate-300 my-0 space-y-1">
                      <li>Research the company.</li>
                      <li>Practice interview questions.</li>
                      <li>Dress professionally.</li>
                      <li>Arrive early.</li>
                      <li>Be confident.</li>
                    </ol>
                  </div>

                  <div className="bg-white dark:bg-slate-900 p-3.5 rounded-xl border border-slate-150 dark:border-slate-850">
                    <strong className="text-emerald-600 block mb-2 font-bold text-xs">Response B</strong>
                    <ol className="list-decimal pl-4 text-slate-700 dark:text-slate-300 my-0 space-y-1">
                      <li>Research the company so you understand its values and products.</li>
                      <li>Practice common questions to improve confidence.</li>
                      <li>Dress professionally to create a strong first impression.</li>
                      <li>Arrive early to reduce stress and avoid delays.</li>
                      <li>Be confident because employers value clear communication and self-belief.</li>
                    </ol>
                  </div>
                </div>
              </div>

              {/* Evaluation Controls */}
              <div className="space-y-4 pt-2">
                <p className="text-xs font-bold text-slate-800 dark:text-slate-200 mt-0 mb-1">
                  1. Overall Ranking:
                </p>
                <div className="grid grid-cols-3 gap-3">
                  {["Response A", "Response B", "Tie"].map((option) => {
                    const isSelected = rankings["cs1"] === option;
                    return (
                      <button
                        key={option}
                        onClick={() => handleRankSelect("cs1", option)}
                        disabled={submitted["cs1"]}
                        className={`py-2 px-3 rounded-xl text-xs font-bold transition-all border text-center cursor-pointer ${
                          isSelected
                            ? "bg-indigo-600 border-indigo-600 text-white"
                            : "bg-slate-50 dark:bg-slate-950 border-slate-200 dark:border-slate-800 text-slate-650 hover:bg-slate-100 dark:hover:bg-slate-850"
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
                        Did either response leave out part of the user's request?
                      </label>
                      <input 
                        type="text"
                        placeholder="Type your notes..."
                        value={notes["cs1"]?.["missingCheck"] || ""}
                        onChange={(e) => handleNoteChange("cs1", "missingCheck", e.target.value)}
                        disabled={submitted["cs1"]}
                        className="w-full text-xs p-2.5 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl outline-hidden focus:border-indigo-500"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] uppercase font-bold text-slate-400 dark:text-slate-550 mb-1">
                        Which response would better prepare someone for an interview?
                      </label>
                      <input 
                        type="text"
                        placeholder="Type your notes..."
                        value={notes["cs1"]?.["betterPrep"] || ""}
                        onChange={(e) => handleNoteChange("cs1", "betterPrep", e.target.value)}
                        disabled={submitted["cs1"]}
                        className="w-full text-xs p-2.5 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl outline-hidden focus:border-indigo-500"
                      />
                    </div>
                  </div>
                </div>

                <div className="space-y-2 pt-2">
                  <label className="block text-xs font-bold text-slate-855 dark:text-slate-205 mb-1">
                    3. Professional Rationale (75–120 words):
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Provide your professional rationale explaining how Response B satisfied the negative/explicit constraints..."
                    value={rationales["cs1"] || ""}
                    onChange={(e) => handleRationaleChange("cs1", e.target.value)}
                    disabled={submitted["cs1"]}
                    className="w-full text-xs p-3 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl outline-hidden focus:border-indigo-500 font-mono"
                  />
                  {rationales["cs1"] && (
                    <span className="text-[10px] font-mono text-slate-450 block text-right">
                      {rationales["cs1"].split(/\s+/).filter(Boolean).length} words
                    </span>
                  )}
                </div>

                <div className="space-y-2 pt-2">
                  <label className="block text-xs font-bold text-slate-855 dark:text-slate-205 mb-1">
                    4. Reflection: Can a response be complete but still not very helpful? Explain using this case.
                  </label>
                  <textarea
                    rows={2}
                    placeholder="Enter your reflection thoughts..."
                    value={reflections["cs1"] || ""}
                    onChange={(e) => handleReflectionChange("cs1", e.target.value)}
                    disabled={submitted["cs1"]}
                    className="w-full text-xs p-3 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl outline-hidden focus:border-indigo-500"
                  />
                </div>

                {!submitted["cs1"] && (
                  <button
                    onClick={() => handleCaseSubmit("cs1")}
                    className="w-full py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-xs font-bold transition-all cursor-pointer"
                  >
                    Submit Case Study 1
                  </button>
                )}

                {submitted["cs1"] && (
                  <div className="p-4 rounded-xl bg-emerald-500/5 border border-emerald-500/20 text-xs space-y-3 mt-4 animate-fade-in">
                    <div className="flex items-center gap-2 text-emerald-700 dark:text-emerald-400 font-bold">
                      <CheckCircle2 className="w-4 h-4 shrink-0" />
                      <span>Expert Review (Revealed)</span>
                    </div>
                    <div className="text-slate-700 dark:text-slate-300 space-y-2 leading-relaxed font-sans">
                      <p><strong>Ideal Answer:</strong> Response B is superior.</p>
                      <p><strong>Expert Rationale:</strong> Response B satisfies all prompt requirements, presenting 5 tips along with corresponding explanations of why each tip is important. Response A is incomplete because it lists the 5 tips but totally fails to provide the required explanations. Thus, Response B is significantly more complete and helpful.</p>
                    </div>
                  </div>
                )}
              </div>
            </section>

            {/* CASE STUDY 2 */}
            <section className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm space-y-6">
              <div className="border-b border-slate-100 dark:border-slate-800 pb-3 flex justify-between items-center flex-wrap gap-2">
                <div>
                  <span className="text-[10px] font-extrabold text-indigo-600 dark:text-indigo-455 uppercase tracking-widest block font-mono">
                    Case Study 2 (Beginner)
                  </span>
                  <h3 className="text-base font-bold text-slate-900 dark:text-white mt-0.5 mb-0">
                    Project Brief: Travel Planning Assistant (TravelMate AI)
                  </h3>
                </div>
                <div className="bg-slate-105 dark:bg-slate-800 px-2 py-1 rounded text-[9px] font-mono text-slate-500 dark:text-slate-400 uppercase">
                  Primary Metric: Helpfulness & Completeness
                </div>
              </div>

              <div className="bg-slate-50 dark:bg-slate-950 p-4 rounded-xl border border-slate-150 dark:border-slate-850 text-xs space-y-3">
                <p className="my-0"><strong>Prompt:</strong></p>
                <p className="my-0 text-slate-800 dark:text-slate-200 font-medium pl-2 border-l-2 border-indigo-500 italic">
                  &ldquo;I'm visiting Paris for two days. Suggest an itinerary that includes museums, local food, and outdoor attractions.&rdquo;
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                  <div className="bg-white dark:bg-slate-900 p-3.5 rounded-xl border border-slate-150 dark:border-slate-850">
                    <strong className="text-rose-600 block mb-2 font-bold text-xs">Response A</strong>
                    <p className="text-slate-700 dark:text-slate-300 my-0 leading-relaxed">
                      Visit the Eiffel Tower and the Louvre.
                    </p>
                  </div>

                  <div className="bg-white dark:bg-slate-900 p-3.5 rounded-xl border border-slate-150 dark:border-slate-850">
                    <strong className="text-emerald-600 block mb-2 font-bold text-xs">Response B</strong>
                    <p className="text-slate-700 dark:text-slate-300 my-0 leading-relaxed space-y-1">
                      <strong>Day 1:</strong> Visit the Louvre in the morning, enjoy lunch at a local bistro, and explore the Seine River in the afternoon.<br />
                      <strong>Day 2:</strong> Visit the Musée d'Orsay, enjoy fresh pastries at a local café, and relax in Luxembourg Gardens before ending your evening at the Eiffel Tower.
                    </p>
                  </div>
                </div>
              </div>

              {/* Evaluation Controls */}
              <div className="space-y-4 pt-2">
                <p className="text-xs font-bold text-slate-800 dark:text-slate-200 mt-0 mb-1">
                  1. Overall Ranking:
                </p>
                <div className="grid grid-cols-3 gap-3">
                  {["Response A", "Response B", "Tie"].map((option) => {
                    const isSelected = rankings["cs2"] === option;
                    return (
                      <button
                        key={option}
                        onClick={() => handleRankSelect("cs2", option)}
                        disabled={submitted["cs2"]}
                        className={`py-2 px-3 rounded-xl text-xs font-bold transition-all border text-center cursor-pointer ${
                          isSelected
                            ? "bg-indigo-600 border-indigo-600 text-white"
                            : "bg-slate-50 dark:bg-slate-950 border-slate-200 dark:border-slate-800 text-slate-650 hover:bg-slate-100 dark:hover:bg-slate-850"
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
                        Which parts of the prompt were ignored in Response A?
                      </label>
                      <input 
                        type="text"
                        placeholder="Type your notes..."
                        value={notes["cs2"]?.["ignoredCheck"] || ""}
                        onChange={(e) => handleNoteChange("cs2", "ignoredCheck", e.target.value)}
                        disabled={submitted["cs2"]}
                        className="w-full text-xs p-2.5 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl outline-hidden focus:border-indigo-500"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] uppercase font-bold text-slate-400 dark:text-slate-550 mb-1">
                        Would you find Response B more useful as a traveller?
                      </label>
                      <input 
                        type="text"
                        placeholder="Type your notes..."
                        value={notes["cs2"]?.["userValue"] || ""}
                        onChange={(e) => handleNoteChange("cs2", "userValue", e.target.value)}
                        disabled={submitted["cs2"]}
                        className="w-full text-xs p-2.5 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl outline-hidden focus:border-indigo-500"
                      />
                    </div>
                  </div>
                </div>

                <div className="space-y-2 pt-2">
                  <label className="block text-xs font-bold text-slate-855 dark:text-slate-205 mb-1">
                    3. Professional Rationale (75–120 words):
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Provide your professional rationale. Contrast the completeness of the itineraries..."
                    value={rationales["cs2"] || ""}
                    onChange={(e) => handleRationaleChange("cs2", e.target.value)}
                    disabled={submitted["cs2"]}
                    className="w-full text-xs p-3 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl outline-hidden focus:border-indigo-500 font-mono"
                  />
                  {rationales["cs2"] && (
                    <span className="text-[10px] font-mono text-slate-450 block text-right">
                      {rationales["cs2"].split(/\s+/).filter(Boolean).length} words
                    </span>
                  )}
                </div>

                <div className="space-y-2 pt-2">
                  <label className="block text-xs font-bold text-slate-855 dark:text-slate-205 mb-1">
                    4. Reflection: If both responses were factually correct, why should one still receive a lower score?
                  </label>
                  <textarea
                    rows={2}
                    placeholder="Enter your reflection thoughts..."
                    value={reflections["cs2"] || ""}
                    onChange={(e) => handleReflectionChange("cs2", e.target.value)}
                    disabled={submitted["cs2"]}
                    className="w-full text-xs p-3 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl outline-hidden focus:border-indigo-500"
                  />
                </div>

                {!submitted["cs2"] && (
                  <button
                    onClick={() => handleCaseSubmit("cs2")}
                    className="w-full py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-xs font-bold transition-all cursor-pointer"
                  >
                    Submit Case Study 2
                  </button>
                )}

                {submitted["cs2"] && (
                  <div className="p-4 rounded-xl bg-emerald-500/5 border border-emerald-500/20 text-xs space-y-3 mt-4 animate-fade-in">
                    <div className="flex items-center gap-2 text-emerald-700 dark:text-emerald-400 font-bold">
                      <CheckCircle2 className="w-4 h-4 shrink-0" />
                      <span>Expert Review (Revealed)</span>
                    </div>
                    <div className="text-slate-700 dark:text-slate-300 space-y-2 leading-relaxed font-sans">
                      <p><strong>Ideal Answer:</strong> Response B is superior.</p>
                      <p><strong>Expert Rationale:</strong> Response B fulfills the full multi-part intent by outlining a detailed 2-day itinerary containing museums (Louvre, Musée d'Orsay), local food bistros and cafés, and outdoor attractions (Seine River, Luxembourg Gardens). Response A is extremely lazy, naming only two sights and lacking any structured daily planner. Response B is vastly more helpful and complete.</p>
                    </div>
                  </div>
                )}
              </div>
            </section>

            {/* Step Navigation */}
            <div className="mt-12 pt-6 border-t border-slate-100 dark:border-slate-800 flex justify-between">
              <button
                onClick={() => {
                  setCurrentStep(1);
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className="text-slate-450 hover:text-slate-700 dark:hover:text-white text-xs font-bold flex items-center gap-1.5 transition-colors cursor-pointer"
              >
                <ChevronLeft className="w-4 h-4" />
                <span>Lecture</span>
              </button>
              <button
                onClick={() => {
                  setCurrentStep(3);
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className="bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl px-6 py-3 text-xs font-bold flex items-center gap-2 transition-all cursor-pointer shadow-sm hover:shadow-md"
              >
                <span>Continue to Case Studies 3 & 4</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

          </div>
        )}

        {/* ================= STEP 3: CASE STUDIES 3 & 4 ================= */}
        {currentStep === 3 && (
          <div className="space-y-12 animate-fade-in">
            
            {/* CASE STUDY 3 */}
            <section className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm space-y-6">
              <div className="border-b border-slate-100 dark:border-slate-800 pb-3 flex justify-between items-center flex-wrap gap-2">
                <div>
                  <span className="text-[10px] font-extrabold text-indigo-600 dark:text-indigo-455 uppercase tracking-widest block font-mono">
                    Case Study 3 (Intermediate)
                  </span>
                  <h3 className="text-base font-bold text-slate-900 dark:text-white mt-0.5 mb-0">
                    Project Brief: Personal Finance Assistant (FinanceGuide AI)
                  </h3>
                </div>
                <div className="bg-slate-105 dark:bg-slate-800 px-2 py-1 rounded text-[9px] font-mono text-slate-500 dark:text-slate-400 uppercase">
                  Primary Metric: Helpfulness & Completeness
                </div>
              </div>

              <div className="bg-slate-50 dark:bg-slate-950 p-4 rounded-xl border border-slate-150 dark:border-slate-850 text-xs space-y-3">
                <p className="my-0"><strong>Prompt:</strong></p>
                <p className="my-0 text-slate-800 dark:text-slate-200 font-medium pl-2 border-l-2 border-indigo-500 italic">
                  &ldquo;Explain how to create a monthly budget for someone who has never managed money before.&rdquo;
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                  <div className="bg-white dark:bg-slate-900 p-3.5 rounded-xl border border-slate-150 dark:border-slate-850">
                    <strong className="text-rose-600 block mb-2 font-bold text-xs">Response A</strong>
                    <p className="text-slate-700 dark:text-slate-300 my-0 leading-relaxed">
                      A budget helps you track your income and expenses.
                    </p>
                  </div>

                  <div className="bg-white dark:bg-slate-900 p-3.5 rounded-xl border border-slate-150 dark:border-slate-850">
                    <strong className="text-emerald-600 block mb-2 font-bold text-xs">Response B</strong>
                    <p className="text-slate-700 dark:text-slate-300 my-0 leading-relaxed">
                      Start by listing your monthly income. Next, write down all your regular expenses such as rent, food, and transportation. Then decide how much you want to save before planning your remaining spending. Review your budget every month and adjust it as your circumstances change.
                    </p>
                  </div>
                </div>
              </div>

              {/* Evaluation Controls */}
              <div className="space-y-4 pt-2">
                <p className="text-xs font-bold text-slate-800 dark:text-slate-200 mt-0 mb-1">
                  1. Overall Ranking:
                </p>
                <div className="grid grid-cols-3 gap-3">
                  {["Response A", "Response B", "Tie"].map((option) => {
                    const isSelected = rankings["cs3"] === option;
                    return (
                      <button
                        key={option}
                        onClick={() => handleRankSelect("cs3", option)}
                        disabled={submitted["cs3"]}
                        className={`py-2 px-3 rounded-xl text-xs font-bold transition-all border text-center cursor-pointer ${
                          isSelected
                            ? "bg-indigo-600 border-indigo-600 text-white"
                            : "bg-slate-50 dark:bg-slate-950 border-slate-200 dark:border-slate-800 text-slate-650 hover:bg-slate-100 dark:hover:bg-slate-850"
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
                        Which response provides practical next steps?
                      </label>
                      <input 
                        type="text"
                        placeholder="Type your notes..."
                        value={notes["cs3"]?.["stepsCheck"] || ""}
                        onChange={(e) => handleNoteChange("cs3", "stepsCheck", e.target.value)}
                        disabled={submitted["cs3"]}
                        className="w-full text-xs p-2.5 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl outline-hidden focus:border-indigo-500"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] uppercase font-bold text-slate-400 dark:text-slate-550 mb-1">
                        Did Response A answer the question completely?
                      </label>
                      <input 
                        type="text"
                        placeholder="Type your notes..."
                        value={notes["cs3"]?.["completeCheck"] || ""}
                        onChange={(e) => handleNoteChange("cs3", "completeCheck", e.target.value)}
                        disabled={submitted["cs3"]}
                        className="w-full text-xs p-2.5 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl outline-hidden focus:border-indigo-500"
                      />
                    </div>
                  </div>
                </div>

                <div className="space-y-2 pt-2">
                  <label className="block text-xs font-bold text-slate-855 dark:text-slate-205 mb-1">
                    3. Professional Rationale (100–150 words):
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Provide your professional rationale..."
                    value={rationales["cs3"] || ""}
                    onChange={(e) => handleRationaleChange("cs3", e.target.value)}
                    disabled={submitted["cs3"]}
                    className="w-full text-xs p-3 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl outline-hidden focus:border-indigo-500 font-mono"
                  />
                  {rationales["cs3"] && (
                    <span className="text-[10px] font-mono text-slate-450 block text-right">
                      {rationales["cs3"].split(/\s+/).filter(Boolean).length} words
                    </span>
                  )}
                </div>

                <div className="space-y-2 pt-2">
                  <label className="block text-xs font-bold text-slate-855 dark:text-slate-205 mb-1">
                    4. Reflection: Would a beginner know what to do after reading Response A? Why or why not?
                  </label>
                  <textarea
                    rows={2}
                    placeholder="Enter your reflection thoughts..."
                    value={reflections["cs3"] || ""}
                    onChange={(e) => handleReflectionChange("cs3", e.target.value)}
                    disabled={submitted["cs3"]}
                    className="w-full text-xs p-3 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl outline-hidden focus:border-indigo-500"
                  />
                </div>

                {!submitted["cs3"] && (
                  <button
                    onClick={() => handleCaseSubmit("cs3")}
                    className="w-full py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-xs font-bold transition-all cursor-pointer"
                  >
                    Submit Case Study 3
                  </button>
                )}

                {submitted["cs3"] && (
                  <div className="p-4 rounded-xl bg-emerald-500/5 border border-emerald-500/20 text-xs space-y-3 mt-4 animate-fade-in">
                    <div className="flex items-center gap-2 text-emerald-700 dark:text-emerald-400 font-bold">
                      <CheckCircle2 className="w-4 h-4 shrink-0" />
                      <span>Expert Review (Revealed)</span>
                    </div>
                    <div className="text-slate-700 dark:text-slate-300 space-y-2 leading-relaxed font-sans">
                      <p><strong>Ideal Answer:</strong> Response B is superior.</p>
                      <p><strong>Expert Rationale:</strong> Response B actually answers the "how-to" request by listing a sequential, actionable guide suitable for absolute beginners. Response A merely defines what a budget is, which is totally unhelpful and fails to answer how to create one. Response B is the winner on both Helpfulness and Completeness.</p>
                    </div>
                  </div>
                )}
              </div>
            </section>

            {/* CASE STUDY 4 */}
            <section className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm space-y-6">
              <div className="border-b border-slate-100 dark:border-slate-800 pb-3 flex justify-between items-center flex-wrap gap-2">
                <div>
                  <span className="text-[10px] font-extrabold text-indigo-600 dark:text-indigo-455 uppercase tracking-widest block font-mono">
                    Case Study 4 (Intermediate)
                  </span>
                  <h3 className="text-base font-bold text-slate-900 dark:text-white mt-0.5 mb-0">
                    Project Brief: Wellness Assistant (HealthyLiving AI)
                  </h3>
                </div>
                <div className="bg-slate-105 dark:bg-slate-800 px-2 py-1 rounded text-[9px] font-mono text-slate-500 dark:text-slate-400 uppercase">
                  Primary Metric: Completeness & Helpfulness
                </div>
              </div>

              <div className="bg-slate-50 dark:bg-slate-950 p-4 rounded-xl border border-slate-150 dark:border-slate-850 text-xs space-y-3">
                <p className="my-0"><strong>Prompt:</strong></p>
                <p className="my-0 text-slate-800 dark:text-slate-200 font-medium pl-2 border-l-2 border-indigo-500 italic">
                  &ldquo;List three ways to reduce stress and explain how each one helps.&rdquo;
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                  <div className="bg-white dark:bg-slate-900 p-3.5 rounded-xl border border-slate-150 dark:border-slate-850">
                    <strong className="text-rose-600 block mb-2 font-bold text-xs">Response A</strong>
                    <ol className="list-decimal pl-4 text-slate-700 dark:text-slate-300 my-0 space-y-1">
                      <li>Exercise.</li>
                      <li>Sleep.</li>
                      <li>Meditation.</li>
                    </ol>
                  </div>

                  <div className="bg-white dark:bg-slate-900 p-3.5 rounded-xl border border-slate-150 dark:border-slate-850">
                    <strong className="text-emerald-600 block mb-2 font-bold text-xs">Response B</strong>
                    <ol className="list-decimal pl-4 text-slate-700 dark:text-slate-300 my-0 space-y-1">
                      <li>Exercise releases endorphins that improve mood.</li>
                      <li>Getting enough sleep helps your brain recover and improves emotional regulation.</li>
                      <li>Meditation helps calm the mind and reduce anxiety by encouraging relaxation.</li>
                    </ol>
                  </div>
                </div>
              </div>

              {/* Evaluation Controls */}
              <div className="space-y-4 pt-2">
                <p className="text-xs font-bold text-slate-800 dark:text-slate-200 mt-0 mb-1">
                  1. Overall Ranking:
                </p>
                <div className="grid grid-cols-3 gap-3">
                  {["Response A", "Response B", "Tie"].map((option) => {
                    const isSelected = rankings["cs4"] === option;
                    return (
                      <button
                        key={option}
                        onClick={() => handleRankSelect("cs4", option)}
                        disabled={submitted["cs4"]}
                        className={`py-2 px-3 rounded-xl text-xs font-bold transition-all border text-center cursor-pointer ${
                          isSelected
                            ? "bg-indigo-600 border-indigo-600 text-white"
                            : "bg-slate-50 dark:bg-slate-950 border-slate-200 dark:border-slate-800 text-slate-650 hover:bg-slate-100 dark:hover:bg-slate-850"
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
                        Did Response A satisfy every part of the prompt?
                      </label>
                      <input 
                        type="text"
                        placeholder="Type your notes..."
                        value={notes["cs4"]?.["satisfiedCheck"] || ""}
                        onChange={(e) => handleNoteChange("cs4", "satisfiedCheck", e.target.value)}
                        disabled={submitted["cs4"]}
                        className="w-full text-xs p-2.5 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl outline-hidden focus:border-indigo-500"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] uppercase font-bold text-slate-400 dark:text-slate-550 mb-1">
                        Which response gives the user more practical value?
                      </label>
                      <input 
                        type="text"
                        placeholder="Type your notes..."
                        value={notes["cs4"]?.["userValueCheck"] || ""}
                        onChange={(e) => handleNoteChange("cs4", "userValueCheck", e.target.value)}
                        disabled={submitted["cs4"]}
                        className="w-full text-xs p-2.5 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl outline-hidden focus:border-indigo-500"
                      />
                    </div>
                  </div>
                </div>

                <div className="space-y-2 pt-2">
                  <label className="block text-xs font-bold text-slate-855 dark:text-slate-205 mb-1">
                    3. Professional Rationale:
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Provide your professional rationale supporting your decision..."
                    value={rationales["cs4"] || ""}
                    onChange={(e) => handleRationaleChange("cs4", e.target.value)}
                    disabled={submitted["cs4"]}
                    className="w-full text-xs p-3 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl outline-hidden focus:border-indigo-500 font-mono"
                  />
                </div>

                <div className="space-y-2 pt-2">
                  <label className="block text-xs font-bold text-slate-855 dark:text-slate-205 mb-1">
                    4. Reflection: What is the difference between listing ideas and explaining them?
                  </label>
                  <textarea
                    rows={2}
                    placeholder="Enter your reflection thoughts..."
                    value={reflections["cs4"] || ""}
                    onChange={(e) => handleReflectionChange("cs4", e.target.value)}
                    disabled={submitted["cs4"]}
                    className="w-full text-xs p-3 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl outline-hidden focus:border-indigo-500"
                  />
                </div>

                {!submitted["cs4"] && (
                  <button
                    onClick={() => handleCaseSubmit("cs4")}
                    className="w-full py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-xs font-bold transition-all cursor-pointer"
                  >
                    Submit Case Study 4
                  </button>
                )}

                {submitted["cs4"] && (
                  <div className="p-4 rounded-xl bg-emerald-500/5 border border-emerald-500/20 text-xs space-y-3 mt-4 animate-fade-in">
                    <div className="flex items-center gap-2 text-emerald-700 dark:text-emerald-400 font-bold">
                      <CheckCircle2 className="w-4 h-4 shrink-0" />
                      <span>Expert Review (Revealed)</span>
                    </div>
                    <div className="text-slate-700 dark:text-slate-300 space-y-2 leading-relaxed font-sans">
                      <p><strong>Ideal Answer:</strong> Response B is superior.</p>
                      <p><strong>Expert Rationale:</strong> Response B successfully covers all parts of the instruction: it lists three specific stress-relief methods AND provides concise explanations of how each helps. Response A fails the Completeness dimension by omitting the explanation segment completely. Hence, Response B is much more helpful and comprehensive.</p>
                    </div>
                  </div>
                )}
              </div>
            </section>

            {/* Step Navigation */}
            <div className="mt-12 pt-6 border-t border-slate-100 dark:border-slate-800 flex justify-between">
              <button
                onClick={() => {
                  setCurrentStep(2);
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className="text-slate-450 hover:text-slate-700 dark:hover:text-white text-xs font-bold flex items-center gap-1.5 transition-colors cursor-pointer"
              >
                <ChevronLeft className="w-4 h-4" />
                <span>Case Studies 1 & 2</span>
              </button>
              <button
                onClick={() => {
                  setCurrentStep(4);
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className="bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl px-6 py-3 text-xs font-bold flex items-center gap-2 transition-all cursor-pointer shadow-sm hover:shadow-md"
              >
                <span>Continue to Case Study 5</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

          </div>
        )}

        {/* ================= STEP 4: CASE STUDY 5 ================= */}
        {currentStep === 4 && (
          <div className="space-y-12 animate-fade-in">
            
            {/* CASE STUDY 5 */}
            <section className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm space-y-6">
              <div className="border-b border-slate-100 dark:border-slate-800 pb-3 flex justify-between items-center flex-wrap gap-2">
                <div>
                  <span className="text-[10px] font-extrabold text-indigo-600 dark:text-indigo-455 uppercase tracking-widest block font-mono">
                    Case Study 5 (Advanced)
                  </span>
                  <h3 className="text-base font-bold text-slate-900 dark:text-white mt-0.5 mb-0">
                    Project Brief: Cooking Assistant (HomeChef AI)
                  </h3>
                </div>
                <div className="bg-slate-105 dark:bg-slate-800 px-2 py-1 rounded text-[9px] font-mono text-slate-500 dark:text-slate-400 uppercase">
                  Primary Metric: Helpfulness & Completeness
                </div>
              </div>

              <div className="bg-slate-50 dark:bg-slate-950 p-4 rounded-xl border border-slate-150 dark:border-slate-850 text-xs space-y-3">
                <p className="my-0"><strong>Prompt:</strong></p>
                <p className="my-0 text-slate-800 dark:text-slate-200 font-medium pl-2 border-l-2 border-indigo-500 italic">
                  &ldquo;A beginner wants to cook spaghetti bolognese. Explain the ingredients needed and the cooking steps.&rdquo;
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                  <div className="bg-white dark:bg-slate-900 p-3.5 rounded-xl border border-slate-150 dark:border-slate-850">
                    <strong className="text-rose-600 block mb-2 font-bold text-xs">Response A</strong>
                    <p className="text-slate-700 dark:text-slate-300 my-0 leading-relaxed">
                      You'll need spaghetti, minced beef, tomatoes, onions, garlic, and seasoning. Cook everything until it's ready.
                    </p>
                  </div>

                  <div className="bg-white dark:bg-slate-900 p-3.5 rounded-xl border border-slate-150 dark:border-slate-850">
                    <strong className="text-emerald-600 block mb-2 font-bold text-xs">Response B</strong>
                    <p className="text-slate-700 dark:text-slate-300 my-0 leading-relaxed">
                      You'll need spaghetti, minced beef, onions, garlic, chopped tomatoes, tomato paste, olive oil, salt, pepper, and herbs. Cook the onions and garlic first, brown the beef, add the tomatoes and seasoning, simmer the sauce, cook the spaghetti separately, then combine and serve.
                    </p>
                  </div>
                </div>
              </div>

              {/* Evaluation Controls */}
              <div className="space-y-4 pt-2">
                <p className="text-xs font-bold text-slate-800 dark:text-slate-200 mt-0 mb-1">
                  1. Overall Ranking:
                </p>
                <div className="grid grid-cols-3 gap-3">
                  {["Response A", "Response B", "Tie"].map((option) => {
                    const isSelected = rankings["cs5"] === option;
                    return (
                      <button
                        key={option}
                        onClick={() => handleRankSelect("cs5", option)}
                        disabled={submitted["cs5"]}
                        className={`py-2 px-3 rounded-xl text-xs font-bold transition-all border text-center cursor-pointer ${
                          isSelected
                            ? "bg-indigo-600 border-indigo-600 text-white"
                            : "bg-slate-50 dark:bg-slate-950 border-slate-200 dark:border-slate-800 text-slate-650 hover:bg-slate-100 dark:hover:bg-slate-850"
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
                        Which important information is missing from Response A?
                      </label>
                      <input 
                        type="text"
                        placeholder="Type your notes..."
                        value={notes["cs5"]?.["missingInfoCheck"] || ""}
                        onChange={(e) => handleNoteChange("cs5", "missingInfoCheck", e.target.value)}
                        disabled={submitted["cs5"]}
                        className="w-full text-xs p-2.5 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl outline-hidden focus:border-indigo-500"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] uppercase font-bold text-slate-400 dark:text-slate-550 mb-1">
                        Would a beginner successfully prepare the meal using only Response A?
                      </label>
                      <input 
                        type="text"
                        placeholder="Type your notes..."
                        value={notes["cs5"]?.["beginnerSuccess"] || ""}
                        onChange={(e) => handleNoteChange("cs5", "beginnerSuccess", e.target.value)}
                        disabled={submitted["cs5"]}
                        className="w-full text-xs p-2.5 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl outline-hidden focus:border-indigo-500"
                      />
                    </div>
                  </div>
                </div>

                <div className="space-y-2 pt-2">
                  <label className="block text-xs font-bold text-slate-855 dark:text-slate-205 mb-1">
                    3. Professional Rationale (100–150 words):
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Provide your professional rationale defending your decision..."
                    value={rationales["cs5"] || ""}
                    onChange={(e) => handleRationaleChange("cs5", e.target.value)}
                    disabled={submitted["cs5"]}
                    className="w-full text-xs p-3 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl outline-hidden focus:border-indigo-500 font-mono"
                  />
                  {rationales["cs5"] && (
                    <span className="text-[10px] font-mono text-slate-450 block text-right">
                      {rationales["cs5"].split(/\s+/).filter(Boolean).length} words
                    </span>
                  )}
                </div>

                <div className="space-y-2 pt-2">
                  <label className="block text-xs font-bold text-slate-855 dark:text-slate-205 mb-1">
                    4. Reflection: Imagine another evaluator argues that Response A is &ldquo;good enough.&rdquo; How would you explain why Response B better satisfies the evaluation criteria?
                  </label>
                  <textarea
                    rows={2}
                    placeholder="Enter your reflection thoughts..."
                    value={reflections["cs5"] || ""}
                    onChange={(e) => handleReflectionChange("cs5", e.target.value)}
                    disabled={submitted["cs5"]}
                    className="w-full text-xs p-3 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl outline-hidden focus:border-indigo-500"
                  />
                </div>

                {!submitted["cs5"] && (
                  <button
                    onClick={() => handleCaseSubmit("cs5")}
                    className="w-full py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-xs font-bold transition-all cursor-pointer"
                  >
                    Submit Case Study 5
                  </button>
                )}

                {submitted["cs5"] && (
                  <div className="p-4 rounded-xl bg-emerald-500/5 border border-emerald-500/20 text-xs space-y-3 mt-4 animate-fade-in">
                    <div className="flex items-center gap-2 text-emerald-700 dark:text-emerald-400 font-bold">
                      <CheckCircle2 className="w-4 h-4 shrink-0" />
                      <span>Expert Review (Revealed)</span>
                    </div>
                    <div className="text-slate-700 dark:text-slate-300 space-y-2 leading-relaxed font-sans">
                      <p><strong>Ideal Answer:</strong> Response B is superior.</p>
                      <p><strong>Expert Rationale:</strong> Response B is highly comprehensive, presenting clear ingredients and sequential, logical cooking instructions tailored for a beginner. Response A provides an extremely vague explanation, neglecting actual cooking times, proportions, order of actions, or combined steps (&ldquo;Cook everything until it's ready&rdquo; is a useless instruction for a beginner). Recommending Response A is an evaluative failure under the Helpfulness dimension.</p>
                    </div>
                  </div>
                )}
              </div>
            </section>

            {/* Step Navigation */}
            <div className="mt-12 pt-6 border-t border-slate-100 dark:border-slate-800 flex justify-between">
              <button
                onClick={() => {
                  setCurrentStep(3);
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className="text-slate-450 hover:text-slate-700 dark:hover:text-white text-xs font-bold flex items-center gap-1.5 transition-colors cursor-pointer"
              >
                <ChevronLeft className="w-4 h-4" />
                <span>Case Studies 3 & 4</span>
              </button>
              <button
                onClick={() => {
                  setCurrentStep(5);
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

        {/* ================= STEP 5: SUMMARY & COMPLETE ================= */}
        {currentStep === 5 && (
          <div className="space-y-8 animate-fade-in text-center py-6">
            <div className="w-20 h-20 bg-indigo-50 dark:bg-indigo-950/40 text-indigo-600 dark:text-indigo-400 rounded-full flex items-center justify-center mx-auto mb-6 shadow-xs">
              <Award className="w-10 h-10" />
            </div>

            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white mt-0">
              Key Takeaways
            </h2>
            
            <div className="max-w-xl mx-auto text-left bg-slate-50 dark:bg-slate-900/40 border border-slate-150 dark:border-slate-800 p-6 rounded-2xl space-y-4 my-8 text-sm">
              <ul className="space-y-3 list-disc pl-4 marker:text-indigo-500 text-slate-650 dark:text-slate-350 my-0 leading-relaxed">
                <li><strong>Completeness</strong> measures whether every part of the user's request has been addressed.</li>
                <li><strong>Helpfulness</strong> measures whether the response genuinely helps the user achieve their goal.</li>
                <li>Accurate responses are not always complete or useful.</li>
                <li>Practical guidance often makes the difference between an average response and an excellent one.</li>
                <li>Strong evaluators identify missing information even when a response appears correct.</li>
                <li>Professional rationales should explain how completeness and helpfulness influenced the final ranking.</li>
              </ul>
            </div>

            <p className="text-base text-slate-500 dark:text-slate-400 max-w-md mx-auto leading-relaxed mb-8">
              <strong>Congratulations!</strong> You have completed Lesson 4 and developed another core skill used in real AI evaluation projects: judging whether a response fully answers the user's question while providing meaningful value.
            </p>

            <div className="pt-6 border-t border-slate-100 dark:border-slate-800 flex justify-between max-w-xl mx-auto">
              <button
                onClick={() => {
                  setCurrentStep(4);
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className="text-slate-450 hover:text-slate-700 dark:hover:text-white text-xs font-bold flex items-center gap-1.5 transition-colors cursor-pointer"
              >
                <ChevronLeft className="w-4 h-4" />
                <span>Case Study 5</span>
              </button>
              
              <button
                onClick={handleFinishLesson}
                className="bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl px-8 py-3 text-xs font-bold flex items-center gap-2 transition-all cursor-pointer shadow-md hover:shadow-lg hover:-translate-y-0.5"
              >
                <span>Complete & Continue to Lesson 5</span>
                <Check className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

      </article>
    </div>
  );
}

// Minimal placeholder Lucide icons to prevent build errors
function Award({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <circle cx="12" cy="8" r="7" />
      <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
    </svg>
  );
}
