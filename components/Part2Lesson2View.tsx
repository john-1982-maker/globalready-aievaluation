import React, { useState } from "react";
import { 
  ArrowLeft, ChevronRight, Check, X, HelpCircle, Send, BookOpen, AlertCircle, Award, CheckCircle2, ChevronLeft, ThumbsUp
} from "lucide-react";

interface Part2Lesson2ViewProps {
  onBack: () => void;
  onComplete: (xpEarned: number) => void;
}

export default function Part2Lesson2View({ onBack, onComplete }: Part2Lesson2ViewProps) {
  // State for current pagination step
  const [currentStep, setCurrentStep] = useState<number>(1); 
  // 1: Lecture (Theory)
  // 2: Case Studies 1 & 2
  // 3: Case Studies 3 & 4
  // 4: Case Study 5 & Reflection Sandbox
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
    onComplete(120); // Award 120 XP for Lesson 2 completion
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

      <article className="prose prose-slate dark:prose-invert max-w-none text-slate-700 dark:text-slate-350">
        
        {/* Lesson Title */}
        <div className="mb-8">
          <span className="text-indigo-600 dark:text-indigo-400 text-xs font-mono uppercase tracking-widest font-extrabold block mb-2">
            Part 2 &bull; Lesson 2
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white font-sans leading-tight">
            Instruction Following Evaluation
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
                <li>Understand what Instruction Following means in AI evaluation.</li>
                <li>Distinguish between explicit and implicit instructions.</li>
                <li>Identify complete, partial, and failed instruction following.</li>
                <li>Evaluate AI responses where Instruction Following is the primary criterion.</li>
                <li>Write professional rationales that justify your evaluation decisions using evidence.</li>
              </ul>
            </div>

            <section className="space-y-5">
              <h2 className="text-xl font-bold text-slate-900 dark:text-white tracking-tight mt-8">
                Why Instruction Following Matters
              </h2>
              <p className="text-base leading-relaxed">
                Imagine asking a colleague:
              </p>
              <blockquote className="border-l-4 border-slate-200 dark:border-slate-800 pl-4 italic my-4 text-slate-650 dark:text-slate-400">
                &ldquo;Please send me <strong>three</strong> meeting times for next week.&rdquo;
              </blockquote>
              <p className="text-base leading-relaxed">
                Instead, they send you <strong>seven</strong> times and include information about next month's schedule.
              </p>
              <p className="text-base leading-relaxed">
                Did they help? Maybe. Did they follow your instruction? <strong>No.</strong>
              </p>
              <p className="text-base leading-relaxed">
                This is exactly how AI evaluation works. One of the first questions professional evaluators ask is:
              </p>
              <p className="text-lg font-extrabold text-slate-900 dark:text-white text-center py-4 bg-slate-50 dark:bg-slate-900/40 rounded-xl my-6">
                &ldquo;Did the AI actually do what the user asked?&rdquo;
              </p>
              <p className="text-base leading-relaxed">
                Before considering writing style, helpfulness, or creativity, evaluators must determine whether the AI followed the user's instructions. A response can be factually correct, well-written, and helpful—but if it ignores key instructions, it should lose points.
              </p>
            </section>

            <hr className="border-slate-100 dark:border-slate-800" />

            <section className="space-y-5">
              <h2 className="text-xl font-bold text-slate-900 dark:text-white tracking-tight">
                Explicit vs Implicit Instructions
              </h2>
              <p className="text-base leading-relaxed">
                Understanding the difference between explicit and implicit instructions is critical.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
                <div className="bg-slate-50 dark:bg-slate-900/40 p-5 rounded-2xl border border-slate-150 dark:border-slate-800">
                  <h3 className="text-sm font-extrabold text-indigo-655 dark:text-indigo-400 uppercase tracking-wider mt-0 mb-3">
                    Explicit Instructions
                  </h3>
                  <p className="text-xs text-slate-550 dark:text-slate-400 leading-relaxed mb-4">
                    Directly stated by the user. These instructions are measurable and should normally be followed exactly.
                  </p>
                  <ul className="space-y-1.5 list-disc pl-4 text-xs font-medium text-slate-700 dark:text-slate-300">
                    <li>Give <strong>three</strong> examples.</li>
                    <li>Explain this in <strong>one paragraph</strong>.</li>
                    <li>Use <strong>bullet points</strong>.</li>
                    <li>Answer in <strong>less than 100 words</strong>.</li>
                    <li>Explain it to a <strong>10-year-old child</strong>.</li>
                  </ul>
                </div>

                <div className="bg-slate-50 dark:bg-slate-900/40 p-5 rounded-2xl border border-slate-150 dark:border-slate-800">
                  <h3 className="text-sm font-extrabold text-indigo-655 dark:text-indigo-400 uppercase tracking-wider mt-0 mb-3">
                    Implicit Instructions
                  </h3>
                  <p className="text-xs text-slate-550 dark:text-slate-400 leading-relaxed mb-4">
                    Not directly stated but can reasonably be inferred from the context or general user intent.
                  </p>
                  <div className="bg-white dark:bg-slate-950 p-3 rounded-lg border border-slate-150 dark:border-slate-850 text-xs">
                    <strong className="text-slate-800 dark:text-slate-300 block mb-1">Prompt:</strong>
                    &ldquo;Recommend a laptop for university.&rdquo;
                    <p className="mt-2 text-slate-500 leading-relaxed italic">
                      Although the user never says &ldquo;keep the budget reasonable,&rdquo; recommending a €6,000 gaming workstation may not satisfy the user's likely intent.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <hr className="border-slate-100 dark:border-slate-800" />

            <section className="space-y-5">
              <h2 className="text-xl font-bold text-slate-900 dark:text-white tracking-tight">
                Types of Instruction Following
              </h2>
              <p className="text-base leading-relaxed">
                Professional evaluators generally place responses into one of three categories.
              </p>

              <div className="space-y-4 my-6">
                <div className="flex gap-4 p-4 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-900/20 transition-all">
                  <div className="w-8 h-8 rounded-lg bg-emerald-100 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0 font-extrabold text-sm font-mono mt-0.5">
                    C
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900 dark:text-white mt-0 mb-1">Complete Instruction Following</h4>
                    <p className="text-xs text-slate-550 dark:text-slate-400 leading-relaxed">
                      Every important instruction has been followed perfectly.
                      <br />
                      <span className="text-slate-400 italic font-mono">Example: User requests "exactly four healthy snacks", and AI provides exactly four.</span>
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 p-4 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-900/20 transition-all">
                  <div className="w-8 h-8 rounded-lg bg-amber-100 dark:bg-amber-950/40 text-amber-600 dark:text-amber-400 flex items-center justify-center shrink-0 font-extrabold text-sm font-mono mt-0.5">
                    P
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900 dark:text-white mt-0 mb-1">Partial Instruction Following</h4>
                    <p className="text-xs text-slate-550 dark:text-slate-400 leading-relaxed">
                      Some instructions are followed, while others are missed.
                      <br />
                      <span className="text-slate-400 italic font-mono">Example: User requests "Explain this in three bullet points", but AI provides three points written as a paragraph.</span>
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 p-4 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-900/20 transition-all">
                  <div className="w-8 h-8 rounded-lg bg-rose-100 dark:bg-rose-950/40 text-rose-600 dark:text-rose-400 flex items-center justify-center shrink-0 font-extrabold text-sm font-mono mt-0.5">
                    F
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900 dark:text-white mt-0 mb-1">Failed Instruction Following</h4>
                    <p className="text-xs text-slate-550 dark:text-slate-400 leading-relaxed">
                      Major instructions are ignored.
                      <br />
                      <span className="text-slate-400 italic font-mono">Example: User requests "Recommend vegetarian meals", but AI recommends steak and grilled chicken.</span>
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <hr className="border-slate-100 dark:border-slate-800" />

            <section className="space-y-5">
              <h2 className="text-xl font-bold text-slate-900 dark:text-white tracking-tight">
                Common Beginner Mistakes
              </h2>
              <div className="bg-red-500/5 border-l-4 border-rose-500 p-5 rounded-r-2xl text-xs space-y-2 leading-relaxed text-slate-650 dark:text-slate-350 my-6">
                <p className="font-bold text-rose-600 dark:text-rose-450 mt-0">Watch out for these critical traps:</p>
                <ul className="space-y-1.5 list-disc pl-4 my-0">
                  <li><strong>Rewarding longer responses</strong> even when they ignore negative constraints or simple rules.</li>
                  <li><strong>Ignoring exact numbers</strong> such as &ldquo;three examples&rdquo; or &ldquo;five tips.&rdquo;</li>
                  <li><strong>Focusing only on grammar</strong> while ignoring instruction compliance.</li>
                  <li><strong>Assuming &ldquo;helpful&rdquo; automatically means &ldquo;correct.&rdquo;</strong></li>
                  <li><strong>Ignoring audience requirements</strong> (e.g. child persona, expert researcher, casual translation).</li>
                </ul>
              </div>
            </section>

            <hr className="border-slate-100 dark:border-slate-800" />

            <section className="space-y-5">
              <h2 className="text-xl font-bold text-slate-900 dark:text-white tracking-tight">
                Worked Example
              </h2>
              <div className="bg-slate-50 dark:bg-slate-900/40 p-5 rounded-2xl border border-slate-150 dark:border-slate-800 text-xs">
                <p className="font-mono text-slate-450 uppercase tracking-wider text-[10px] mt-0 mb-2">Scenario Demonstration</p>
                <strong className="text-slate-855 dark:text-slate-200 block mb-1">Prompt:</strong>
                <p className="italic mb-4">&ldquo;Recommend <strong>exactly four</strong> books for someone learning Python. Present the answer as a bullet list.&rdquo;</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-white dark:bg-slate-950 p-3.5 rounded-xl border border-slate-150 dark:border-slate-850">
                    <strong className="text-emerald-600 block mb-2 font-bold">Response A</strong>
                    <ul className="list-disc pl-4 space-y-1 my-0 text-slate-700 dark:text-slate-300">
                      <li>Python Crash Course</li>
                      <li>Automate the Boring Stuff with Python</li>
                      <li>Fluent Python</li>
                      <li>Think Python</li>
                    </ul>
                  </div>

                  <div className="bg-white dark:bg-slate-950 p-3.5 rounded-xl border border-slate-150 dark:border-slate-850">
                    <strong className="text-amber-600 block mb-2 font-bold">Response B</strong>
                    <p className="text-slate-700 dark:text-slate-300 my-0 leading-relaxed">
                      Python Crash Course is a great beginner book. You should also read Automate the Boring Stuff with Python, Fluent Python, Think Python, and Effective Python because they all teach different aspects of the language.
                    </p>
                  </div>
                </div>

                <div className="mt-4 p-4 bg-indigo-50/20 rounded-xl border-l-2 border-indigo-500 text-slate-700 dark:text-slate-300">
                  <strong className="text-indigo-600 dark:text-indigo-400 block mb-1 font-bold">Professional Evaluation:</strong>
                  Response A follows every instruction perfectly. It provides <strong>exactly four books</strong> and formats them as a <strong>bullet list</strong>. 
                  Response B recommends <strong>five books</strong> and ignores the requested format. Although the recommendations are good, Response B has weaker instruction following. 
                  Professional evaluators would rank <strong>Response A</strong> higher.
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
                  <span className="text-[10px] font-extrabold text-indigo-600 dark:text-indigo-450 uppercase tracking-widest block font-mono">
                    Case Study 1 (Beginner)
                  </span>
                  <h3 className="text-base font-bold text-slate-900 dark:text-white mt-0.5 mb-0">
                    Project Brief: Educational Assistant (LearnWise AI)
                  </h3>
                </div>
                <div className="bg-slate-105 dark:bg-slate-800 px-2 py-1 rounded text-[9px] font-mono text-slate-500 dark:text-slate-400 uppercase">
                  Primary Metric: Instruction Following
                </div>
              </div>

              <div className="bg-slate-50 dark:bg-slate-950 p-4 rounded-xl border border-slate-150 dark:border-slate-850 text-xs space-y-3">
                <p className="my-0"><strong>Prompt:</strong></p>
                <p className="my-0 text-slate-800 dark:text-slate-200 font-medium pl-2 border-l-2 border-indigo-500 italic">
                  &ldquo;Give <strong>exactly three</strong> benefits of drinking water using bullet points.&rdquo;
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                  <div className="bg-white dark:bg-slate-900 p-3.5 rounded-xl border border-slate-150 dark:border-slate-850">
                    <strong className="text-indigo-600 block mb-2 font-bold text-xs">Response A</strong>
                    <ul className="list-disc pl-4 space-y-1 my-0 text-slate-700 dark:text-slate-300">
                      <li>Keeps your body hydrated.</li>
                      <li>Helps regulate body temperature.</li>
                      <li>Supports healthy digestion.</li>
                    </ul>
                  </div>

                  <div className="bg-white dark:bg-slate-900 p-3.5 rounded-xl border border-slate-150 dark:border-slate-850">
                    <strong className="text-amber-600 block mb-2 font-bold text-xs">Response B</strong>
                    <ul className="list-disc pl-4 space-y-1 my-0 text-slate-700 dark:text-slate-300">
                      <li>Keeps your body hydrated.</li>
                      <li>Helps regulate body temperature.</li>
                      <li>Supports healthy digestion.</li>
                      <li>Improves skin health.</li>
                      <li>Helps maintain energy levels.</li>
                    </ul>
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
                        Did either response fail any explicit instruction?
                      </label>
                      <input 
                        type="text"
                        placeholder="Type your notes..."
                        value={notes["cs1"]?.["failCheck"] || ""}
                        onChange={(e) => handleNoteChange("cs1", "failCheck", e.target.value)}
                        disabled={submitted["cs1"]}
                        className="w-full text-xs p-2.5 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl outline-hidden focus:border-indigo-500"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] uppercase font-bold text-slate-400 dark:text-slate-550 mb-1">
                        Which instruction was most important?
                      </label>
                      <input 
                        type="text"
                        placeholder="Type your notes..."
                        value={notes["cs1"]?.["importantInstr"] || ""}
                        onChange={(e) => handleNoteChange("cs1", "importantInstr", e.target.value)}
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
                    placeholder="Provide your professional rationale using the RACE framework. Explain why your selected model outperformed the other based strictly on explicit constraints..."
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
                    4. Reflection: If Response B contains more useful information, should it still lose points? Why?
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
                      <p><strong>Ideal Answer:</strong> Response A is superior.</p>
                      <p><strong>Expert Rationale:</strong> Response A satisfies every explicit instruction. It recommends exactly three benefits of drinking water using a bulleted list structure. Response B explicitly violated the quantitative constraint by providing five benefits instead of the requested exactly three.</p>
                      <p>In high-grade AI alignment, satisfying numeric constraints represents a hard compliance cutoff. Recommending additional elements is categorized as an instruction-following failure, regardless of the quality of the extra information.</p>
                    </div>
                  </div>
                )}
              </div>
            </section>

            {/* CASE STUDY 2 */}
            <section className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm space-y-6">
              <div className="border-b border-slate-100 dark:border-slate-800 pb-3 flex justify-between items-center flex-wrap gap-2">
                <div>
                  <span className="text-[10px] font-extrabold text-indigo-600 dark:text-indigo-450 uppercase tracking-widest block font-mono">
                    Case Study 2 (Beginner)
                  </span>
                  <h3 className="text-base font-bold text-slate-900 dark:text-white mt-0.5 mb-0">
                    Project Brief: Educational Content (KidsLearn AI)
                  </h3>
                </div>
                <div className="bg-slate-105 dark:bg-slate-800 px-2 py-1 rounded text-[9px] font-mono text-slate-500 dark:text-slate-400 uppercase">
                  Primary Metric: Instruction Following
                </div>
              </div>

              <div className="bg-slate-50 dark:bg-slate-950 p-4 rounded-xl border border-slate-150 dark:border-slate-850 text-xs space-y-3">
                <p className="my-0"><strong>Prompt:</strong></p>
                <p className="my-0 text-slate-800 dark:text-slate-200 font-medium pl-2 border-l-2 border-indigo-500 italic">
                  &ldquo;Explain volcanoes to an <strong>8-year-old child</strong> in <strong>two short sentences</strong>.&rdquo;
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                  <div className="bg-white dark:bg-slate-900 p-3.5 rounded-xl border border-slate-150 dark:border-slate-850">
                    <strong className="text-indigo-600 block mb-2 font-bold text-xs">Response A</strong>
                    <p className="text-slate-700 dark:text-slate-300 my-0 leading-relaxed">
                      Volcanoes are mountains that can erupt and send out hot lava. They happen because hot rock under the Earth pushes its way to the surface.
                    </p>
                  </div>

                  <div className="bg-white dark:bg-slate-900 p-3.5 rounded-xl border border-slate-150 dark:border-slate-850">
                    <strong className="text-amber-600 block mb-2 font-bold text-xs">Response B</strong>
                    <p className="text-slate-700 dark:text-slate-300 my-0 leading-relaxed">
                      Volcanoes are geological landforms created by tectonic plate movement and magma pressure beneath the Earth's crust. These eruptions release lava, ash, volcanic gases, and pyroclastic material that reshape surrounding landscapes over long periods.
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
                        Did either response fail the audience instruction?
                      </label>
                      <input 
                        type="text"
                        placeholder="Type your notes..."
                        value={notes["cs2"]?.["audienceCheck"] || ""}
                        onChange={(e) => handleNoteChange("cs2", "audienceCheck", e.target.value)}
                        disabled={submitted["cs2"]}
                        className="w-full text-xs p-2.5 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl outline-hidden focus:border-indigo-500"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] uppercase font-bold text-slate-400 dark:text-slate-550 mb-1">
                        Which instruction carried the most weight?
                      </label>
                      <input 
                        type="text"
                        placeholder="Type your notes..."
                        value={notes["cs2"]?.["weightCheck"] || ""}
                        onChange={(e) => handleNoteChange("cs2", "weightCheck", e.target.value)}
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
                    placeholder="Provide your professional rationale using the RACE framework. Contrast the structural and stylistic differences..."
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
                    4. Reflection: If Response B is scientifically accurate, why might it still receive a lower Instruction Following score?
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
                      <p><strong>Ideal Answer:</strong> Response A is superior.</p>
                      <p><strong>Expert Rationale:</strong> Response A satisfies both explicit constraints perfectly. It explains volcanoes in exactly two simple sentences and uses an accessible, engaging style appropriate for an 8-year-old child.</p>
                      <p>Response B failed both constraints. It contains two complex sentences, but uses vocabulary that is far too academic and dense for an 8-year-old child (&ldquo;tectonic plate movement,&rdquo; &ldquo;magma pressure,&rdquo; &ldquo;pyroclastic material&rdquo;). In educational projects, failing the audience alignment constraint is a critical issue.</p>
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
                  <span className="text-[10px] font-extrabold text-indigo-600 dark:text-indigo-450 uppercase tracking-widest block font-mono">
                    Case Study 3 (Intermediate)
                  </span>
                  <h3 className="text-base font-bold text-slate-900 dark:text-white mt-0.5 mb-0">
                    Project Brief: Travel Planning Assistant (TravelMate AI)
                  </h3>
                </div>
                <div className="bg-slate-105 dark:bg-slate-800 px-2 py-1 rounded text-[9px] font-mono text-slate-500 dark:text-slate-400 uppercase">
                  Primary Metric: Instruction Following
                </div>
              </div>

              <div className="bg-slate-50 dark:bg-slate-950 p-4 rounded-xl border border-slate-150 dark:border-slate-850 text-xs space-y-3">
                <p className="my-0"><strong>Prompt:</strong></p>
                <p className="my-0 text-slate-800 dark:text-slate-200 font-medium pl-2 border-l-2 border-indigo-500 italic">
                  &ldquo;Recommend <strong>two</strong> beaches in Spain and explain each recommendation in <strong>one sentence</strong>.&rdquo;
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                  <div className="bg-white dark:bg-slate-900 p-3.5 rounded-xl border border-slate-150 dark:border-slate-850">
                    <strong className="text-indigo-600 block mb-2 font-bold text-xs">Response A</strong>
                    <p className="text-slate-700 dark:text-slate-300 my-0 leading-relaxed font-sans space-y-2">
                      1. La Concha Beach – Beautiful beach with calm waters perfect for families.
                      <br /><br />
                      2. Playa de Muro – Long sandy beach with shallow water ideal for children.
                    </p>
                  </div>

                  <div className="bg-white dark:bg-slate-900 p-3.5 rounded-xl border border-slate-150 dark:border-slate-850">
                    <strong className="text-amber-600 block mb-2 font-bold text-xs">Response B</strong>
                    <p className="text-slate-700 dark:text-slate-300 my-0 leading-relaxed font-sans space-y-2">
                      1. La Concha Beach – Beautiful beach with calm waters perfect for families.
                      <br /><br />
                      2. Playa de Muro – Long sandy beach with shallow water ideal for children.
                      <br /><br />
                      3. Barceloneta Beach – Popular destination in Barcelona.
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
                        Did Response B provide useful information?
                      </label>
                      <input 
                        type="text"
                        placeholder="Type your notes..."
                        value={notes["cs3"]?.["usefulInfo"] || ""}
                        onChange={(e) => handleNoteChange("cs3", "usefulInfo", e.target.value)}
                        disabled={submitted["cs3"]}
                        className="w-full text-xs p-2.5 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl outline-hidden focus:border-indigo-500"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] uppercase font-bold text-slate-400 dark:text-slate-550 mb-1">
                        Should useful extra information improve the score?
                      </label>
                      <input 
                        type="text"
                        placeholder="Type your notes..."
                        value={notes["cs3"]?.["extraScore"] || ""}
                        onChange={(e) => handleNoteChange("cs3", "extraScore", e.target.value)}
                        disabled={submitted["cs3"]}
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
                    placeholder="Provide your professional rationale explaining why the additional recommendation hurts the model's score..."
                    value={rationales["cs3"] || ""}
                    onChange={(e) => handleRationaleChange("cs3", e.target.value)}
                    disabled={submitted["cs3"]}
                    className="w-full text-xs p-3 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl outline-hidden focus:border-indigo-500 font-mono"
                  />
                </div>

                <div className="space-y-2 pt-2">
                  <label className="block text-xs font-bold text-slate-855 dark:text-slate-205 mb-1">
                    4. Reflection: Would your decision change if the project rewarded completeness over instruction following? Why?
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
                      <p><strong>Ideal Answer:</strong> Response A is superior.</p>
                      <p><strong>Expert Rationale:</strong> Response A is completely compliant. It recommends exactly two beaches, and each beach is explained in exactly one sentence. </p>
                      <p>Response B failed the primary quantity constraint by recommending three beaches instead of two. Even though the third recommendation is geographically accurate and useful, exceeding explicit quantitative instructions is penalized in SFT and RLHF annotations.</p>
                    </div>
                  </div>
                )}
              </div>
            </section>

            {/* CASE STUDY 4 */}
            <section className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm space-y-6">
              <div className="border-b border-slate-100 dark:border-slate-800 pb-3 flex justify-between items-center flex-wrap gap-2">
                <div>
                  <span className="text-[10px] font-extrabold text-indigo-600 dark:text-indigo-450 uppercase tracking-widest block font-mono">
                    Case Study 4 (Intermediate)
                  </span>
                  <h3 className="text-base font-bold text-slate-900 dark:text-white mt-0.5 mb-0">
                    Project Brief: Email Writing Assistant (OfficeFlow AI)
                  </h3>
                </div>
                <div className="bg-slate-105 dark:bg-slate-800 px-2 py-1 rounded text-[9px] font-mono text-slate-500 dark:text-slate-400 uppercase">
                  Primary Metric: Instruction Following
                </div>
              </div>

              <div className="bg-slate-50 dark:bg-slate-950 p-4 rounded-xl border border-slate-150 dark:border-slate-850 text-xs space-y-3">
                <p className="my-0"><strong>Prompt:</strong></p>
                <p className="my-0 text-slate-800 dark:text-slate-200 font-medium pl-2 border-l-2 border-indigo-500 italic">
                  &ldquo;Write a professional meeting request email in <strong>less than 80 words</strong>.&rdquo;
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                  <div className="bg-white dark:bg-slate-900 p-3.5 rounded-xl border border-slate-150 dark:border-slate-850">
                    <strong className="text-indigo-600 block mb-2 font-bold text-xs">Response A (64 words)</strong>
                    <p className="text-slate-700 dark:text-slate-300 my-0 leading-relaxed font-mono text-[11px] whitespace-pre-line">
                      Subject: Meeting Request: Project Status Review

                      Dear Sarah,
                      I hope you are well. Could we schedule a 30-minute meeting this week to review the updated project status? I would like to align on our timeline and address any outstanding items.

                      Please let me know if you are available on Thursday at 2:00 PM.

                      Best regards,
                      Mark
                    </p>
                  </div>

                  <div className="bg-white dark:bg-slate-900 p-3.5 rounded-xl border border-slate-150 dark:border-slate-850">
                    <strong className="text-amber-600 block mb-2 font-bold text-xs">Response B (158 words)</strong>
                    <p className="text-slate-700 dark:text-slate-300 my-0 leading-relaxed font-mono text-[11px] whitespace-pre-line">
                      Subject: Request for Alignment Meeting - Project Milestones & Timelines

                      Dear Sarah,
                      I hope this email finds you well and that you're having a productive week.

                      As we approach the end of the quarter, it's critical that we align on our key milestones and review the updated timeline. I've compiled the draft reports and would appreciate your strategic input. We have several critical items to address, including resource allocation, budget adjustments, and client delivery expectations.

                      Could we schedule a 45-minute call sometime this week? I am fully available on Thursday afternoon, specifically between 2:00 PM and 4:00 PM, or Friday morning if that works better for your schedule. Alternatively, feel free to suggest another time that is convenient for you.

                      I've attached the draft agenda for your review so we can make the most of our time.

                      Thank you for your leadership, and I look forward to your response.

                      Warm regards,
                      Mark
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
                        Which instruction did Response B fail?
                      </label>
                      <input 
                        type="text"
                        placeholder="Type your notes..."
                        value={notes["cs4"]?.["failedInstr"] || ""}
                        onChange={(e) => handleNoteChange("cs4", "failedInstr", e.target.value)}
                        disabled={submitted["cs4"]}
                        className="w-full text-xs p-2.5 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl outline-hidden focus:border-indigo-500"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] uppercase font-bold text-slate-400 dark:text-slate-550 mb-1">
                        Should exceeding the word limit affect the final ranking?
                      </label>
                      <input 
                        type="text"
                        placeholder="Type your notes..."
                        value={notes["cs4"]?.["limitScore"] || ""}
                        onChange={(e) => handleNoteChange("cs4", "limitScore", e.target.value)}
                        disabled={submitted["cs4"]}
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
                    placeholder="Provide your professional rationale citing specific word counts..."
                    value={rationales["cs4"] || ""}
                    onChange={(e) => handleRationaleChange("cs4", e.target.value)}
                    disabled={submitted["cs4"]}
                    className="w-full text-xs p-3 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl outline-hidden focus:border-indigo-500 font-mono"
                  />
                  {rationales["cs4"] && (
                    <span className="text-[10px] font-mono text-slate-450 block text-right">
                      {rationales["cs4"].split(/\s+/).filter(Boolean).length} words
                    </span>
                  )}
                </div>

                <div className="space-y-2 pt-2">
                  <label className="block text-xs font-bold text-slate-855 dark:text-slate-205 mb-1">
                    4. Reflection: Would you make the same decision if you were the project reviewer? Explain.
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
                      <p><strong>Ideal Answer:</strong> Response A is superior.</p>
                      <p><strong>Expert Rationale:</strong> Response A is completely aligned. It writes a professional meeting request email of 64 words, satisfying the explicit constraint &ldquo;less than 80 words.&rdquo;</p>
                      <p>Response B wrote a highly detailed and polite email but failed the word count constraint by writing 158 words. In professional evaluation, maximum word limits represent hard boundaries; any output exceeding the threshold is marked as a direct instruction following failure.</p>
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

        {/* ================= STEP 4: CASE STUDY 5 & SANDBOX ================= */}
        {currentStep === 4 && (
          <div className="space-y-12 animate-fade-in">
            
            {/* CASE STUDY 5 */}
            <section className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm space-y-6">
              <div className="border-b border-slate-100 dark:border-slate-800 pb-3 flex justify-between items-center flex-wrap gap-2">
                <div>
                  <span className="text-[10px] font-extrabold text-indigo-600 dark:text-indigo-450 uppercase tracking-widest block font-mono">
                    Case Study 5 (Intermediate)
                  </span>
                  <h3 className="text-base font-bold text-slate-900 dark:text-white mt-0.5 mb-0">
                    Project Brief: Nutrition Assistant (HealthyLiving AI)
                  </h3>
                </div>
                <div className="bg-slate-105 dark:bg-slate-800 px-2 py-1 rounded text-[9px] font-mono text-slate-500 dark:text-slate-400 uppercase">
                  Primary Metric: Instruction Following
                </div>
              </div>

              <div className="bg-slate-50 dark:bg-slate-950 p-4 rounded-xl border border-slate-150 dark:border-slate-850 text-xs space-y-3">
                <p className="my-0"><strong>Prompt:</strong></p>
                <p className="my-0 text-slate-800 dark:text-slate-200 font-medium pl-2 border-l-2 border-indigo-500 italic">
                  &ldquo;Recommend <strong>five vegetarian dinner ideas</strong>.&rdquo;
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                  <div className="bg-white dark:bg-slate-900 p-3.5 rounded-xl border border-slate-150 dark:border-slate-850">
                    <strong className="text-indigo-600 block mb-2 font-bold text-xs">Response A</strong>
                    <ol className="list-decimal pl-4 space-y-1 my-0 text-slate-700 dark:text-slate-300">
                      <li>Lentil Curry</li>
                      <li>Vegetable Stir Fry</li>
                      <li>Mushroom Pasta</li>
                      <li>Chickpea Salad</li>
                      <li>Vegetable Lasagna</li>
                    </ol>
                  </div>

                  <div className="bg-white dark:bg-slate-900 p-3.5 rounded-xl border border-slate-150 dark:border-slate-850">
                    <strong className="text-amber-600 block mb-2 font-bold text-xs">Response B</strong>
                    <ol className="list-decimal pl-4 space-y-1 my-0 text-slate-700 dark:text-slate-300">
                      <li>Chicken Stir Fry</li>
                      <li>Vegetable Stir Fry</li>
                      <li>Mushroom Pasta</li>
                      <li>Beef Tacos</li>
                      <li>Vegetable Lasagna</li>
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
                        Did Response B satisfy the user's request?
                      </label>
                      <input 
                        type="text"
                        placeholder="Type your notes..."
                        value={notes["cs5"]?.["satisfyCheck"] || ""}
                        onChange={(e) => handleNoteChange("cs5", "satisfyCheck", e.target.value)}
                        disabled={submitted["cs5"]}
                        className="w-full text-xs p-2.5 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl outline-hidden focus:border-indigo-500"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] uppercase font-bold text-slate-400 dark:text-slate-550 mb-1">
                        Would this be considered partial or failed Instruction Following?
                      </label>
                      <input 
                        type="text"
                        placeholder="Type your notes..."
                        value={notes["cs5"]?.["failureCheck"] || ""}
                        onChange={(e) => handleNoteChange("cs5", "failureCheck", e.target.value)}
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
                    placeholder="Provide your professional rationale explaining why meat dishes directly fail the user's specific diet constraints..."
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
                    4. Reflection: How would you defend your ranking if another evaluator argued that Response B still provided five dinner ideas?
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
                      <p><strong>Ideal Answer:</strong> Response A is superior.</p>
                      <p><strong>Expert Rationale:</strong> Response A successfully recommended five vegetarian dinner ideas. Response B failed the core dietary constraint &ldquo;vegetarian&rdquo; by recommending Chicken Stir Fry and Beef Tacos, both of which contain meat.</p>
                      <p>This represents a critical failure. Recommending non-vegetarian dishes for a vegetarian query represents a direct instruction following failure and a factual contradiction that renders the output useless to the user.</p>
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
                  // Verify that they submitted Case Study 5 before allowing continuation to summary
                  if (!submitted["cs5"]) {
                    alert("Please submit Case Study 5 before continuing!");
                    return;
                  }
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
          <div className="space-y-8 animate-fade-in">
            <section className="space-y-5">
              <h2 className="text-xl font-bold text-slate-900 dark:text-white tracking-tight mt-0">
                Key Takeaways
              </h2>
              <p className="text-base leading-relaxed">
                Congratulations on completing Lesson 2! Let's summarize the key rules of Instruction Following:
              </p>

              <div className="space-y-4 my-6 pl-1">
                <div className="flex gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-2 shrink-0" />
                  <p className="text-sm text-slate-650 dark:text-slate-300 my-0">
                    <strong>Instruction Following is one of the highest-priority evaluation dimensions</strong> in almost all professional AI projects.
                  </p>
                </div>
                <div className="flex gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-2 shrink-0" />
                  <p className="text-sm text-slate-650 dark:text-slate-300 my-0">
                    <strong>Always identify the user's explicit instructions</strong> before reviewing the responses.
                  </p>
                </div>
                <div className="flex gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-2 shrink-0" />
                  <p className="text-sm text-slate-650 dark:text-slate-300 my-0">
                    <strong>Helpful or accurate responses can still lose points</strong> if they fail to follow strict explicit instructions (such as exact counts or negative constraints).
                  </p>
                </div>
                <div className="flex gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-2 shrink-0" />
                  <p className="text-sm text-slate-650 dark:text-slate-300 my-0">
                    <strong>Professional evaluators support every ranking with a clear, evidence-based rationale</strong>.
                  </p>
                </div>
                <div className="flex gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-2 shrink-0" />
                  <p className="text-sm text-slate-650 dark:text-slate-300 my-0">
                    <strong>Consistency and objectivity</strong> are more important than personal preference.
                  </p>
                </div>
                <div className="flex gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-2 shrink-0" />
                  <p className="text-sm text-slate-650 dark:text-slate-300 my-0">
                    <strong>Strong evaluators evaluate against the project brief</strong>—not against their own opinions.
                  </p>
                </div>
              </div>

              <div className="bg-emerald-500/5 p-6 rounded-2xl border border-emerald-500/20 text-center space-y-4 my-8">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-emerald-100 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 font-extrabold text-lg">
                  <Award className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mt-0 mb-1">
                    Lesson 2 Complete!
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed max-w-md mx-auto">
                    You have successfully completed Lesson 2: Instruction Following Evaluation and strengthened one of the most critical skills required in professional AI evaluation projects.
                  </p>
                </div>
              </div>

              <div className="pt-6 flex justify-center">
                <button
                  onClick={handleFinishLesson}
                  className="bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl px-8 py-4 text-sm font-bold flex items-center gap-2.5 transition-all cursor-pointer shadow-md shadow-emerald-600/10 hover:shadow-emerald-600/20 hover:-translate-y-0.5 active:translate-y-0"
                >
                  <span>Complete & Continue to Lesson 3</span>
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>

            </section>
          </div>
        )}

      </article>

    </div>
  );
}
