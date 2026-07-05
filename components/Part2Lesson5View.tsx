import React, { useState } from "react";
import { 
  ArrowLeft, ChevronRight, Check, BookOpen, CheckCircle2, ChevronLeft
} from "lucide-react";

interface Part2Lesson5ViewProps {
  onBack: () => void;
  onComplete: (xpEarned: number) => void;
}

export default function Part2Lesson5View({ onBack, onComplete }: Part2Lesson5ViewProps) {
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
    onComplete(120); // Award 120 XP for Lesson 5 completion
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
            Part 2 &bull; Lesson 5
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight">
            Clarity, Tone & Audience Alignment
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
                <li>Evaluate whether an AI response is clear and easy to understand.</li>
                <li>Assess whether the tone matches the user's expectations and context.</li>
                <li>Determine whether a response is appropriate for its intended audience.</li>
                <li>Recognize when multiple responses are technically correct but differ in communication quality.</li>
                <li>Write professional evaluation rationales supported by evidence from the responses.</li>
              </ul>
            </div>

            <section className="space-y-5">
              <h2 className="text-xl font-bold text-slate-900 dark:text-white tracking-tight mt-8 animate-slide-in">
                Communication Is More Than Being Correct
              </h2>
              <p className="text-base leading-relaxed">
                Imagine you ask an AI:
              </p>
              <blockquote className="border-l-4 border-slate-200 dark:border-slate-800 pl-4 italic my-4 text-slate-650 dark:text-slate-400">
                &ldquo;Explain Artificial Intelligence to my grandmother.&rdquo;
              </blockquote>
              <p className="text-base leading-relaxed">
                The AI replies:
              </p>
              <blockquote className="border-l-4 border-slate-200 dark:border-slate-800 pl-4 italic my-4 text-slate-650 dark:text-slate-400">
                &ldquo;Artificial Intelligence is a computational paradigm involving statistical optimization, neural network architectures, and probabilistic inference.&rdquo;
              </blockquote>
              <p className="text-base leading-relaxed">
                Everything it says is technically correct. But would your grandmother understand it? Probably not.
              </p>
              <p className="text-base leading-relaxed">
                Now imagine another response:
              </p>
              <blockquote className="border-l-4 border-slate-200 dark:border-slate-800 pl-4 italic my-4 text-slate-650 dark:text-slate-400">
                &ldquo;Artificial Intelligence is a type of computer technology that helps machines learn and solve problems, almost like how people learn from experience.&rdquo;
              </blockquote>
              <p className="text-base leading-relaxed">
                Both responses are accurate. Only one communicates effectively to the intended audience.
              </p>
              <p className="text-base leading-relaxed">
                As an AI evaluator, your responsibility is to evaluate <strong>how well the AI communicates</strong>, not simply whether the facts are correct. Professional AI systems are expected to adapt their communication style depending on who they are speaking to.
              </p>
            </section>

            <hr className="border-slate-100 dark:border-slate-800" />

            <section className="space-y-5">
              <h2 className="text-xl font-bold text-slate-900 dark:text-white tracking-tight">
                The Three Dimensions
              </h2>
              <p className="text-base leading-relaxed">
                This lesson focuses on three communication dimensions.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-6">
                <div className="bg-slate-50 dark:bg-slate-900/40 p-5 rounded-2xl border border-slate-150 dark:border-slate-800">
                  <h3 className="text-sm font-bold text-indigo-600 dark:text-indigo-400 mt-0 mb-2">1. Clarity</h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-0 mb-4">Is this response easy to understand?</p>
                  <ul className="space-y-1.5 list-disc pl-4 text-xs font-medium text-slate-700 dark:text-slate-300">
                    <li>Uses simple language.</li>
                    <li>Avoids jargon.</li>
                    <li>Flows logically.</li>
                    <li>Easy to read.</li>
                  </ul>
                </div>

                <div className="bg-slate-50 dark:bg-slate-900/40 p-5 rounded-2xl border border-slate-150 dark:border-slate-800">
                  <h3 className="text-sm font-bold text-indigo-600 dark:text-indigo-400 mt-0 mb-2">2. Tone</h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-0 mb-4">What personality style is used?</p>
                  <ul className="space-y-1.5 list-disc pl-4 text-xs font-medium text-slate-700 dark:text-slate-300">
                    <li>Professional or Casual.</li>
                    <li>Formal or Friendly.</li>
                    <li>Empathetic or Cold.</li>
                    <li>Reassuring / Educational.</li>
                  </ul>
                </div>

                <div className="bg-slate-50 dark:bg-slate-900/40 p-5 rounded-2xl border border-slate-150 dark:border-slate-800">
                  <h3 className="text-sm font-bold text-indigo-600 dark:text-indigo-400 mt-0 mb-2">3. Audience Alignment</h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-0 mb-4">Is it written for the reader?</p>
                  <ul className="space-y-1.5 list-disc pl-4 text-xs font-medium text-slate-700 dark:text-slate-300">
                    <li>Matches background level.</li>
                    <li>Addresses user constraints.</li>
                    <li>Avoids overcomplicating.</li>
                    <li>Adjusts tone for safety.</li>
                  </ul>
                </div>
              </div>
            </section>

            <hr className="border-slate-100 dark:border-slate-800" />

            <section className="space-y-5">
              <h2 className="text-xl font-bold text-slate-900 dark:text-white tracking-tight">
                Common Communication Problems
              </h2>
              <div className="bg-rose-500/5 border-l-4 border-rose-500 p-5 rounded-r-2xl text-xs space-y-2 leading-relaxed text-slate-650 dark:text-slate-350">
                <p className="font-bold text-rose-600 dark:text-rose-450 mt-0">Watch for responses that:</p>
                <ul className="space-y-1.5 list-disc pl-4 my-0">
                  <li>Use unnecessary technical jargon.</li>
                  <li>Sound overly robotic, generic, or clinical.</li>
                  <li>Are too formal or dismissively too casual.</li>
                  <li>Ignore the user's explicitly requested audience.</li>
                  <li>Use inappropriate emotional or patronizing tones.</li>
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
                <p className="mb-1"><strong>Client:</strong> LearnSmart AI</p>
                <p className="mb-4"><strong>Brand Voice:</strong> Friendly, Educational, Beginner-friendly, Avoid unnecessary jargon</p>
                
                <strong className="text-slate-855 dark:text-slate-200 block mb-1">Prompt:</strong>
                <p className="italic mb-4">&ldquo;Explain blockchain to a small business owner who has never studied technology.&rdquo;</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-white dark:bg-slate-950 p-3.5 rounded-xl border border-slate-150 dark:border-slate-850">
                    <strong className="text-rose-600 block mb-2 font-bold">Response A</strong>
                    <p className="text-slate-750 dark:text-slate-300 my-0 leading-relaxed font-mono text-[11px]">
                      &ldquo;Blockchain is a decentralized distributed ledger technology that enables immutable transactional verification through cryptographic consensus.&rdquo;
                    </p>
                  </div>

                  <div className="bg-white dark:bg-slate-950 p-3.5 rounded-xl border border-slate-150 dark:border-slate-850">
                    <strong className="text-emerald-600 block mb-2 font-bold">Response B</strong>
                    <p className="text-slate-750 dark:text-slate-300 my-0 leading-relaxed text-xs">
                      &ldquo;Think of blockchain as a digital notebook shared by many computers. Whenever someone writes something in it, everyone has the same copy, making it very difficult to secretly change the information.&rdquo;
                    </p>
                  </div>
                </div>

                <div className="mt-4 p-4 bg-indigo-50/20 rounded-xl border-l-2 border-indigo-500 text-slate-700 dark:text-slate-300">
                  <strong className="text-indigo-600 dark:text-indigo-400 block mb-1 font-bold">Professional Evaluation:</strong>
                  Both responses are technically accurate. However, Response B communicates the concept in language that matches the intended audience. Professional evaluators would rank Response B higher because communication quality—not technical complexity—is the primary evaluation objective.
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
                    Project Brief: Children's Education Assistant (LearnKids AI)
                  </h3>
                </div>
                <div className="bg-slate-105 dark:bg-slate-800 px-2 py-1 rounded text-[9px] font-mono text-slate-500 dark:text-slate-400 uppercase">
                  Primary Metric: Audience Alignment
                </div>
              </div>

              <div className="bg-slate-50 dark:bg-slate-950 p-4 rounded-xl border border-slate-150 dark:border-slate-850 text-xs space-y-3">
                <div className="grid grid-cols-2 gap-4 border-b border-slate-200 dark:border-slate-800 pb-2 mb-2 text-[11px] text-slate-500">
                  <div><strong>Secondary:</strong> Clarity</div>
                  <div><strong>Brand Voice:</strong> Friendly, Encouraging, Simple, Fun</div>
                </div>
                <p className="my-0"><strong>Prompt:</strong></p>
                <p className="my-0 text-slate-800 dark:text-slate-200 font-medium pl-2 border-l-2 border-indigo-500 italic">
                  &ldquo;Explain electricity to a <strong>7-year-old child</strong>.&rdquo;
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                  <div className="bg-white dark:bg-slate-900 p-3.5 rounded-xl border border-slate-150 dark:border-slate-850">
                    <strong className="text-rose-600 block mb-2 font-bold text-xs">Response A</strong>
                    <p className="text-slate-700 dark:text-slate-300 my-0 font-mono text-[11px] leading-relaxed">
                      &ldquo;Electricity is the movement of electrons through conductive materials due to a potential difference.&rdquo;
                    </p>
                  </div>

                  <div className="bg-white dark:bg-slate-900 p-3.5 rounded-xl border border-slate-150 dark:border-slate-850">
                    <strong className="text-emerald-600 block mb-2 font-bold text-xs">Response B</strong>
                    <p className="text-slate-700 dark:text-slate-300 my-0 text-xs leading-relaxed">
                      &ldquo;Electricity is like tiny invisible energy that helps lights turn on, toys work, and your TV play cartoons. It travels through wires to bring power to things we use every day.&rdquo;
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
                        Which response better matches the intended audience?
                      </label>
                      <input 
                        type="text"
                        placeholder="Type your notes..."
                        value={notes["cs1"]?.["audienceCheck"] || ""}
                        onChange={(e) => handleNoteChange("cs1", "audienceCheck", e.target.value)}
                        disabled={submitted["cs1"]}
                        className="w-full text-xs p-2.5 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl outline-hidden focus:border-indigo-500"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] uppercase font-bold text-slate-400 dark:text-slate-550 mb-1">
                        Would Response A be appropriate for another audience?
                      </label>
                      <input 
                        type="text"
                        placeholder="Type your notes..."
                        value={notes["cs1"]?.["altAudience"] || ""}
                        onChange={(e) => handleNoteChange("cs1", "altAudience", e.target.value)}
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
                    placeholder="Explain your ranking with references to Audience Alignment and Clarity..."
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
                    4. Reflection: If the audience changed from a child to an engineering student, would your ranking change? Why?
                  </label>
                  <textarea
                    rows={2}
                    placeholder="Enter your reflection..."
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
                      <p><strong>Expert Rationale:</strong> Response B is the clear winner because it perfectly aligns with a 7-year-old child's level of comprehension. It uses friendly, fun, relatable analogies (lights, toys, TV cartoons) to explain electricity without technical jargon. Response A is highly technical, dense, and abstract, using terms like "electrons," "conductive materials," and "potential difference" which would be completely incomprehensible and alienating to a child. While Response A is technically correct, it completely fails the primary metric of Audience Alignment.</p>
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
                    Case Study 2 (Intermediate)
                  </span>
                  <h3 className="text-base font-bold text-slate-900 dark:text-white mt-0.5 mb-0">
                    Project Brief: Personal Finance Assistant (FinTrust AI)
                  </h3>
                </div>
                <div className="bg-slate-105 dark:bg-slate-800 px-2 py-1 rounded text-[9px] font-mono text-slate-500 dark:text-slate-400 uppercase">
                  Primary Metric: Clarity
                </div>
              </div>

              <div className="bg-slate-50 dark:bg-slate-950 p-4 rounded-xl border border-slate-150 dark:border-slate-850 text-xs space-y-3">
                <div className="grid grid-cols-2 gap-4 border-b border-slate-200 dark:border-slate-800 pb-2 mb-2 text-[11px] text-slate-500">
                  <div><strong>Secondary:</strong> Audience Alignment</div>
                  <div><strong>Brand Voice:</strong> Professional, Trustworthy, Beginner-friendly, Avoid financial jargon</div>
                </div>
                <p className="my-0"><strong>Prompt:</strong></p>
                <p className="my-0 text-slate-800 dark:text-slate-200 font-medium pl-2 border-l-2 border-indigo-500 italic">
                  &ldquo;Explain compound interest to someone opening their first savings account.&rdquo;
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                  <div className="bg-white dark:bg-slate-900 p-3.5 rounded-xl border border-slate-150 dark:border-slate-850">
                    <strong className="text-emerald-600 block mb-2 font-bold text-xs">Response A</strong>
                    <p className="text-slate-700 dark:text-slate-300 my-0 leading-relaxed text-xs">
                      &ldquo;Compound interest means your savings earn interest, and over time you also earn interest on the interest you've already received. This helps your money grow faster the longer you keep saving.&rdquo;
                    </p>
                  </div>

                  <div className="bg-white dark:bg-slate-900 p-3.5 rounded-xl border border-slate-150 dark:border-slate-850">
                    <strong className="text-rose-600 block mb-2 font-bold text-xs">Response B</strong>
                    <p className="text-slate-700 dark:text-slate-300 my-0 font-mono text-[11px] leading-relaxed">
                      &ldquo;Compound interest refers to exponential capital appreciation through cumulative interest reinvestment over successive compounding periods.&rdquo;
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
                        Both responses are accurate. Which one better serves the client?
                      </label>
                      <input 
                        type="text"
                        placeholder="Type your notes..."
                        value={notes["cs2"]?.["clientCheck"] || ""}
                        onChange={(e) => handleNoteChange("cs2", "clientCheck", e.target.value)}
                        disabled={submitted["cs2"]}
                        className="w-full text-xs p-2.5 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl outline-hidden focus:border-indigo-500"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] uppercase font-bold text-slate-400 dark:text-slate-550 mb-1">
                        Which response is more likely to build customer confidence?
                      </label>
                      <input 
                        type="text"
                        placeholder="Type your notes..."
                        value={notes["cs2"]?.["confidenceCheck"] || ""}
                        onChange={(e) => handleNoteChange("cs2", "confidenceCheck", e.target.value)}
                        disabled={submitted["cs2"]}
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
                    4. Reflection: Could Response B confuse first-time customers? Why?
                  </label>
                  <textarea
                    rows={2}
                    placeholder="Enter your reflection..."
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
                      <p><strong>Expert Rationale:</strong> Response A explains the fundamental concept of compound interest clearly using intuitive, easy-to-understand language (&ldquo;interest on interest&rdquo;). This aligns perfectly with the brand voice constraints of being beginner-friendly and avoiding financial jargon. Response B completely fails the Clarity dimension by loading the sentence with academic terminology (&ldquo;exponential capital appreciation&rdquo;, &ldquo;cumulative interest reinvestment&rdquo;) that would highly likely intimidate or confuse a first-time savings customer.</p>
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
                    Project Brief: Patient Support Assistant (HealthConnect AI)
                  </h3>
                </div>
                <div className="bg-slate-105 dark:bg-slate-800 px-2 py-1 rounded text-[9px] font-mono text-slate-500 dark:text-slate-400 uppercase">
                  Primary Metric: Tone
                </div>
              </div>

              <div className="bg-slate-50 dark:bg-slate-950 p-4 rounded-xl border border-slate-150 dark:border-slate-850 text-xs space-y-3">
                <div className="grid grid-cols-2 gap-4 border-b border-slate-200 dark:border-slate-800 pb-2 mb-2 text-[11px] text-slate-500">
                  <div><strong>Secondary:</strong> Clarity</div>
                  <div><strong>Brand Voice:</strong> Calm, Reassuring, Professional, Empathetic</div>
                </div>
                <p className="my-0"><strong>Prompt:</strong></p>
                <p className="my-0 text-slate-800 dark:text-slate-200 font-medium pl-2 border-l-2 border-indigo-500 italic">
                  A patient says:<br />
                  &ldquo;I'm worried because my blood test results came back abnormal.&rdquo;
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                  <div className="bg-white dark:bg-slate-900 p-3.5 rounded-xl border border-slate-150 dark:border-slate-850">
                    <strong className="text-emerald-600 block mb-2 font-bold text-xs">Response A</strong>
                    <p className="text-slate-700 dark:text-slate-300 my-0 leading-relaxed text-xs">
                      &ldquo;Abnormal blood tests don't necessarily mean something is seriously wrong. Many abnormal results have simple explanations, but it's important to discuss them with your doctor so they can interpret them based on your medical history.&rdquo;
                    </p>
                  </div>

                  <div className="bg-white dark:bg-slate-900 p-3.5 rounded-xl border border-slate-150 dark:border-slate-850">
                    <strong className="text-rose-600 block mb-2 font-bold text-xs">Response B</strong>
                    <p className="text-slate-700 dark:text-slate-300 my-0 leading-relaxed text-xs">
                      &ldquo;Don't panic. It's probably nothing serious. You'll most likely be fine.&rdquo;
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
                        Both responses attempt to reassure. Which better matches the company's tone?
                      </label>
                      <input 
                        type="text"
                        placeholder="Type your notes..."
                        value={notes["cs3"]?.["toneCheck"] || ""}
                        onChange={(e) => handleNoteChange("cs3", "toneCheck", e.target.value)}
                        disabled={submitted["cs3"]}
                        className="w-full text-xs p-2.5 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl outline-hidden focus:border-indigo-500"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] uppercase font-bold text-slate-400 dark:text-slate-550 mb-1">
                        Could Response B reduce trust?
                      </label>
                      <input 
                        type="text"
                        placeholder="Type your notes..."
                        value={notes["cs3"]?.["trustCheck"] || ""}
                        onChange={(e) => handleNoteChange("cs3", "trustCheck", e.target.value)}
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
                    placeholder="Provide your professional rationale supporting your ranking..."
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
                    4. Reflection: Should empathy ever come before certainty? Explain.
                  </label>
                  <textarea
                    rows={2}
                    placeholder="Enter your reflection..."
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
                      <p><strong>Expert Rationale:</strong> Response A successfully captures a calm, reassuring, professional, and empathetic tone. It validates the patient's worry while presenting structured next steps (talking with a doctor). Response B is highly unprofessional and unsafe; telling an anxious medical patient &ldquo;Don't panic... you'll most likely be fine&rdquo; is flippant, dismissive, and medically irresponsible. It actively erodes patient trust by failing to recognize the emotional and legal context of healthcare communication.</p>
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
                    Case Study 4 (Advanced)
                  </span>
                  <h3 className="text-base font-bold text-slate-900 dark:text-white mt-0.5 mb-0">
                    Project Brief: Career Coach (CareerBoost AI)
                  </h3>
                </div>
                <div className="bg-slate-105 dark:bg-slate-800 px-2 py-1 rounded text-[9px] font-mono text-slate-500 dark:text-slate-400 uppercase">
                  Primary Metric: Professional Tone
                </div>
              </div>

              <div className="bg-slate-50 dark:bg-slate-950 p-4 rounded-xl border border-slate-150 dark:border-slate-850 text-xs space-y-3">
                <div className="grid grid-cols-2 gap-4 border-b border-slate-200 dark:border-slate-800 pb-2 mb-2 text-[11px] text-slate-500">
                  <div><strong>Secondary:</strong> Clarity</div>
                  <div><strong>Brand Voice:</strong> Professional, Motivating, Respectful, Clear</div>
                </div>
                <p className="my-0"><strong>Prompt:</strong></p>
                <p className="my-0 text-slate-800 dark:text-slate-200 font-medium pl-2 border-l-2 border-indigo-500 italic">
                  &ldquo;Write feedback for someone who failed a job interview.&rdquo;
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                  <div className="bg-white dark:bg-slate-900 p-3.5 rounded-xl border border-slate-150 dark:border-slate-850">
                    <strong className="text-emerald-600 block mb-2 font-bold text-xs">Response A</strong>
                    <p className="text-slate-700 dark:text-slate-300 my-0 leading-relaxed text-xs">
                      &ldquo;Unfortunately, you weren't selected this time. Interviewing is a skill that improves with practice. Take some time to reflect on the experience, identify areas to strengthen, and remember that many successful professionals faced rejection before achieving their goals.&rdquo;
                    </p>
                  </div>

                  <div className="bg-white dark:bg-slate-900 p-3.5 rounded-xl border border-slate-150 dark:border-slate-850">
                    <strong className="text-rose-600 block mb-2 font-bold text-xs">Response B</strong>
                    <p className="text-slate-700 dark:text-slate-300 my-0 leading-relaxed text-xs">
                      &ldquo;You failed because you weren't prepared enough. Practice harder next time.&rdquo;
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
                        Which response better protects the company's brand?
                      </label>
                      <input 
                        type="text"
                        placeholder="Type your notes..."
                        value={notes["cs4"]?.["brandCheck"] || ""}
                        onChange={(e) => handleNoteChange("cs4", "brandCheck", e.target.value)}
                        disabled={submitted["cs4"]}
                        className="w-full text-xs p-2.5 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl outline-hidden focus:border-indigo-500"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] uppercase font-bold text-slate-400 dark:text-slate-550 mb-1">
                        How does tone influence motivation?
                      </label>
                      <input 
                        type="text"
                        placeholder="Type your notes..."
                        value={notes["cs4"]?.["motivationCheck"] || ""}
                        onChange={(e) => handleNoteChange("cs4", "motivationCheck", e.target.value)}
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
                    placeholder="Provide your professional rationale explaining your decision..."
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
                    4. Reflection: Would you be comfortable sending Response B to a paying customer? Why?
                  </label>
                  <textarea
                    rows={2}
                    placeholder="Enter your reflection..."
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
                      <p><strong>Expert Rationale:</strong> Response A maintains an exemplary professional and motivating brand voice. It delivers disappointing news with respect, emphasizes that interviewing is an improvable skill, and supports morale. Response B is highly toxic, dismissive, and rude (&ldquo;You failed because you weren't prepared enough&rdquo;), which violates all parameters of professional and respectful user engagement. It would damage the brand's reputation immediately.</p>
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

        {/* ================= STEP 4: CASE STUDY 5 & REFLECTION ================= */}
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
                    Project Brief: Career Guidance Platform (TechMentor AI)
                  </h3>
                </div>
                <div className="bg-slate-105 dark:bg-slate-800 px-2 py-1 rounded text-[9px] font-mono text-slate-500 dark:text-slate-400 uppercase">
                  Primary Metric: Audience Alignment
                </div>
              </div>

              <div className="bg-slate-50 dark:bg-slate-950 p-4 rounded-xl border border-slate-150 dark:border-slate-850 text-xs space-y-3">
                <div className="grid grid-cols-2 gap-4 border-b border-slate-200 dark:border-slate-800 pb-2 mb-2 text-[11px] text-slate-500">
                  <div><strong>Secondary:</strong> Tone, Clarity</div>
                  <div><strong>Brand Voice:</strong> Professional, Inspiring, Practical, Beginner-friendly</div>
                </div>
                <p className="my-0"><strong>Prompt:</strong></p>
                <p className="my-0 text-slate-800 dark:text-slate-200 font-medium pl-2 border-l-2 border-indigo-500 italic">
                  A high school student asks:<br />
                  &ldquo;I'm interested in Artificial Intelligence but don't know where to start.&rdquo;
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                  <div className="bg-white dark:bg-slate-900 p-3.5 rounded-xl border border-slate-150 dark:border-slate-850">
                    <strong className="text-rose-600 block mb-2 font-bold text-xs">Response A</strong>
                    <p className="text-slate-700 dark:text-slate-300 my-0 leading-relaxed text-xs font-mono text-[11px]">
                      &ldquo;Artificial Intelligence encompasses numerous interdisciplinary domains including machine learning, reinforcement learning, computer vision, natural language processing, optimization theory, and probabilistic graphical modelling. Students should begin by developing a strong mathematical foundation.&rdquo;
                    </p>
                  </div>

                  <div className="bg-white dark:bg-slate-900 p-3.5 rounded-xl border border-slate-150 dark:border-slate-850">
                    <strong className="text-emerald-600 block mb-2 font-bold text-xs">Response B</strong>
                    <p className="text-slate-700 dark:text-slate-300 my-0 leading-relaxed text-xs">
                      &ldquo;Artificial Intelligence is a field where computers learn to solve problems, recognize patterns, and make decisions. A great place to start is by learning basic Python programming, exploring simple AI projects, and building your curiosity step by step. You don't need to know everything today—every AI engineer started as a beginner.&rdquo;
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
                        Both responses contain accurate information. Which response would better inspire and guide the intended audience?
                      </label>
                      <input 
                        type="text"
                        placeholder="Type your notes..."
                        value={notes["cs5"]?.["inspireCheck"] || ""}
                        onChange={(e) => handleNoteChange("cs5", "inspireCheck", e.target.value)}
                        disabled={submitted["cs5"]}
                        className="w-full text-xs p-2.5 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl outline-hidden focus:border-indigo-500"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] uppercase font-bold text-slate-400 dark:text-slate-550 mb-1">
                        If you were reviewing this for deployment, which response would you approve? Why?
                      </label>
                      <input 
                        type="text"
                        placeholder="Type your notes..."
                        value={notes["cs5"]?.["approveCheck"] || ""}
                        onChange={(e) => handleNoteChange("cs5", "approveCheck", e.target.value)}
                        disabled={submitted["cs5"]}
                        className="w-full text-xs p-2.5 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl outline-hidden focus:border-indigo-500"
                      />
                    </div>
                  </div>
                </div>

                <div className="space-y-2 pt-2">
                  <label className="block text-xs font-bold text-slate-855 dark:text-slate-205 mb-1">
                    3. Professional Rationale (120–150 words):
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Provide your professional rationale referencing Audience Alignment, Clarity, Tone, and Brand Voice..."
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
                    4. Reflection: Imagine another evaluator argues that Response A is &ldquo;more intelligent&rdquo; because it uses advanced terminology. How would you explain why Response B better satisfies the evaluation criteria?
                  </label>
                  <textarea
                    rows={2}
                    placeholder="Enter your explanation..."
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
                      <p><strong>Expert Rationale:</strong> Response B is perfectly aligned with a high school beginner. It defines AI simply and provides actionable, step-by-step guidance (learning Python, building small projects, keeping curiosity). Crucially, its tone is inspiring and practical, matching the TechMentor AI brand voice. Response A is highly intimidating and academic, listing countless advanced topics (probabilistic graphical modelling, reinforcement learning) that would overwhelm almost any high school student looking to get started, completely failing Audience Alignment.</p>
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
                <li>A response can be accurate and complete but still fail if it does not communicate effectively.</li>
                <li><strong>Clarity</strong> is about making information easy to understand without losing meaning.</li>
                <li><strong>Tone</strong> should match the user's situation and the client's brand expectations.</li>
                <li><strong>Audience Alignment</strong> requires adapting language and explanations to the intended reader.</li>
                <li>In many professional AI evaluation projects, communication quality is just as important as factual accuracy.</li>
                <li>Great evaluators choose responses that best serve the user's needs—not those that simply sound more sophisticated.</li>
              </ul>
            </div>

            <p className="text-base text-slate-500 dark:text-slate-400 max-w-md mx-auto leading-relaxed mb-8">
              <strong>Congratulations!</strong> You have completed Lesson 5. You can now evaluate AI responses not only for correctness but also for how effectively they communicate with the people they are designed to help.
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
                <span>Complete & Continue to Lesson 6</span>
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
