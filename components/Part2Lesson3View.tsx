import React, { useState } from "react";
import { 
  ArrowLeft, ChevronRight, Check, X, HelpCircle, Send, BookOpen, AlertCircle, Award, CheckCircle2, ChevronLeft, ThumbsUp
} from "lucide-react";

interface Part2Lesson3ViewProps {
  onBack: () => void;
  onComplete: (xpEarned: number) => void;
}

export default function Part2Lesson3View({ onBack, onComplete }: Part2Lesson3ViewProps) {
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
    onComplete(120); // Award 120 XP for Lesson 3 completion
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
            Part 2 &bull; Lesson 3
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight">
            Accuracy & Factuality Evaluation
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
                <li>Understand what Accuracy & Factuality mean in AI evaluation.</li>
                <li>Distinguish between factual errors, hallucinations, and unsupported claims.</li>
                <li>Evaluate AI responses where Accuracy is the primary evaluation criterion.</li>
                <li>Identify subtle factual mistakes that are easy to overlook.</li>
                <li>Write professional rationales supported by evidence rather than assumptions.</li>
              </ul>
            </div>

            <section className="space-y-5">
              <h2 className="text-xl font-bold text-slate-900 dark:text-white tracking-tight mt-8 animate-slide-in">
                Why Accuracy Matters
              </h2>
              <p className="text-base leading-relaxed">
                Imagine asking an AI:
              </p>
              <blockquote className="border-l-4 border-slate-200 dark:border-slate-800 pl-4 italic my-4 text-slate-650 dark:text-slate-400">
                &ldquo;What is the capital of Australia?&rdquo;
              </blockquote>
              <p className="text-base leading-relaxed">
                The AI confidently replies:
              </p>
              <blockquote className="border-l-4 border-slate-200 dark:border-slate-800 pl-4 italic my-4 text-slate-650 dark:text-slate-400">
                &ldquo;Sydney.&rdquo;
              </blockquote>
              <p className="text-base leading-relaxed">
                The response is well-written. It is clear. It is easy to understand.
              </p>
              <p className="text-base leading-relaxed font-bold text-rose-650 dark:text-rose-450">
                But it is still wrong.
              </p>
              <p className="text-base leading-relaxed">
                As an AI evaluator, your responsibility is not to judge how convincing a response sounds—your responsibility is to determine whether it is <strong>factually correct</strong>.
              </p>
              <p className="text-base leading-relaxed">
                One inaccurate response can mislead thousands of users. That is why AI companies invest heavily in human evaluators who can verify facts, identify hallucinations, and flag misinformation before models are improved.
              </p>
            </section>

            <hr className="border-slate-100 dark:border-slate-800" />

            <section className="space-y-5">
              <h2 className="text-xl font-bold text-slate-900 dark:text-white tracking-tight">
                What is Accuracy?
              </h2>
              <p className="text-base leading-relaxed">
                Accuracy measures whether the information provided by the AI is correct, verifiable, and supported by reliable knowledge.
              </p>
              <div className="bg-slate-50 dark:bg-slate-900/40 p-5 rounded-2xl border border-slate-150 dark:border-slate-800 my-4">
                <p className="text-sm font-bold text-slate-800 dark:text-slate-200 mt-0 mb-3">Ask yourself:</p>
                <ul className="space-y-1.5 list-disc pl-4 text-xs font-medium text-slate-700 dark:text-slate-300">
                  <li>Are the facts correct?</li>
                  <li>Are numbers and dates accurate?</li>
                  <li>Are names and locations correct?</li>
                  <li>Does the response invent information?</li>
                  <li>Can the claims be verified?</li>
                </ul>
              </div>
              <p className="text-lg font-extrabold text-slate-900 dark:text-white text-center py-4 bg-slate-50 dark:bg-slate-900/40 rounded-xl my-6">
                &ldquo;Confidence is not evidence.&rdquo;
              </p>
              <p className="text-base leading-relaxed">
                A response that sounds convincing may still be incorrect.
              </p>
            </section>

            <hr className="border-slate-100 dark:border-slate-800" />

            <section className="space-y-5">
              <h2 className="text-xl font-bold text-slate-900 dark:text-white tracking-tight">
                What is a Hallucination?
              </h2>
              <p className="text-base leading-relaxed">
                A hallucination occurs when an AI confidently generates information that is false, fabricated, or unsupported.
              </p>
              <div className="bg-red-500/5 border-l-4 border-rose-500 p-5 rounded-r-2xl text-xs space-y-2 leading-relaxed text-slate-650 dark:text-slate-350">
                <p className="font-bold text-rose-600 dark:text-rose-450 mt-0">Common hallucination patterns:</p>
                <ul className="space-y-1.5 list-disc pl-4 my-0">
                  <li>Inventing facts.</li>
                  <li>Making up quotations.</li>
                  <li>Creating fake statistics.</li>
                  <li>Referencing books or research that do not exist.</li>
                  <li>Attributing statements to the wrong person.</li>
                </ul>
              </div>
              <p className="text-base leading-relaxed">
                Hallucinations are one of the most common problems in generative AI and a major focus of AI evaluation.
              </p>
            </section>

            <hr className="border-slate-100 dark:border-slate-800" />

            <section className="space-y-5">
              <h2 className="text-xl font-bold text-slate-900 dark:text-white tracking-tight">
                Types of Accuracy Errors
              </h2>
              
              <div className="space-y-4 my-6">
                <div className="flex gap-4 p-4 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-900/20 transition-all">
                  <div className="w-8 h-8 rounded-lg bg-rose-100 dark:bg-rose-950/40 text-rose-600 dark:text-rose-400 flex items-center justify-center shrink-0 font-extrabold text-sm font-mono mt-0.5">
                    1
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900 dark:text-white mt-0 mb-1">Completely Incorrect</h4>
                    <p className="text-xs text-slate-550 dark:text-slate-400 leading-relaxed">
                      The core response contradicts established reality.
                      <br />
                      <span className="text-slate-400 italic font-mono">Example: "The capital of Australia is Sydney."</span>
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 p-4 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-900/20 transition-all">
                  <div className="w-8 h-8 rounded-lg bg-amber-100 dark:bg-amber-950/40 text-amber-600 dark:text-amber-400 flex items-center justify-center shrink-0 font-extrabold text-sm font-mono mt-0.5">
                    2
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900 dark:text-white mt-0 mb-1">Partially Correct</h4>
                    <p className="text-xs text-slate-550 dark:text-slate-400 leading-relaxed">
                      The statement contains some truth but is incomplete or misleading.
                      <br />
                      <span className="text-slate-400 italic font-mono">Example: "Mount Everest is located in China." (Everest lies on the border of Nepal and China).</span>
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 p-4 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-900/20 transition-all">
                  <div className="w-8 h-8 rounded-lg bg-yellow-100 dark:bg-yellow-950/40 text-yellow-600 dark:text-yellow-450 flex items-center justify-center shrink-0 font-extrabold text-sm font-mono mt-0.5">
                    3
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900 dark:text-white mt-0 mb-1">Unsupported Claims</h4>
                    <p className="text-xs text-slate-550 dark:text-slate-400 leading-relaxed">
                      No source or evidence is provided, and the claim is unverified or speculative.
                      <br />
                      <span className="text-slate-400 italic font-mono">Example: "Drinking coffee increases lifespan by 20%."</span>
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 p-4 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-900/20 transition-all">
                  <div className="w-8 h-8 rounded-lg bg-purple-100 dark:bg-purple-950/40 text-purple-600 dark:text-purple-400 flex items-center justify-center shrink-0 font-extrabold text-sm font-mono mt-0.5">
                    4
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900 dark:text-white mt-0 mb-1">Fabricated Information</h4>
                    <p className="text-xs text-slate-550 dark:text-slate-400 leading-relaxed">
                      The AI invents specific credentials, sources, or documents to support its claims.
                      <br />
                      <span className="text-slate-400 italic font-mono">Example: "According to a 2025 Harvard study..." (When no such study exists).</span>
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
              <div className="bg-red-500/5 border-l-4 border-rose-500 p-5 rounded-r-2xl text-xs space-y-2 leading-relaxed text-slate-650 dark:text-slate-350">
                <p className="font-bold text-rose-600 dark:text-rose-450 mt-0">Watch out for these classic pitfalls:</p>
                <ul className="space-y-1.5 list-disc pl-4 my-0">
                  <li>Assuming confident writing means accurate information.</li>
                  <li>Ignoring small factual mistakes.</li>
                  <li>Failing to distinguish between opinion and fact.</li>
                  <li>Rewarding fluent writing over correctness.</li>
                  <li>Forgetting to verify numerical information.</li>
                </ul>
              </div>
              <p className="text-base font-bold text-slate-900 dark:text-white leading-relaxed">
                Remember: Accuracy always comes before confidence.
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
                <p className="italic mb-4">&ldquo;What is the largest planet in our solar system?&rdquo;</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-white dark:bg-slate-950 p-3.5 rounded-xl border border-slate-150 dark:border-slate-850">
                    <strong className="text-emerald-600 block mb-2 font-bold">Response A</strong>
                    <p className="text-slate-700 dark:text-slate-300 my-0 leading-relaxed">
                      Jupiter is the largest planet in our solar system.
                    </p>
                  </div>

                  <div className="bg-white dark:bg-slate-950 p-3.5 rounded-xl border border-slate-150 dark:border-slate-850">
                    <strong className="text-rose-600 block mb-2 font-bold">Response B</strong>
                    <p className="text-slate-700 dark:text-slate-300 my-0 leading-relaxed">
                      Saturn is the largest planet in our solar system.
                    </p>
                  </div>
                </div>

                <div className="mt-4 p-4 bg-indigo-50/20 rounded-xl border-l-2 border-indigo-500 text-slate-700 dark:text-slate-300">
                  <strong className="text-indigo-600 dark:text-indigo-400 block mb-1 font-bold">Professional Evaluation:</strong>
                  Both responses are clear. Both answer the question directly. However, only Response A is factually correct. Even if Response B is well written, it should receive a significantly lower Accuracy score.
                </div>

                <div className="mt-2.5 p-4 bg-indigo-55/10 rounded-xl border-l-2 border-slate-400 text-slate-700 dark:text-slate-300">
                  <strong className="text-slate-800 dark:text-slate-300 block mb-1 font-bold">Professional Rationale:</strong>
                  &ldquo;Response A should be ranked higher because it correctly identifies Jupiter as the largest planet in the solar system. Response B contains a factual error by stating that Saturn is the largest planet. Since the primary evaluation criterion for this project is Accuracy, the factual mistake outweighs any strengths in writing style or clarity.&rdquo;
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
                    Project Brief: General Knowledge Assistant (KnowledgeBase AI)
                  </h3>
                </div>
                <div className="bg-slate-105 dark:bg-slate-800 px-2 py-1 rounded text-[9px] font-mono text-slate-500 dark:text-slate-400 uppercase">
                  Primary Metric: Accuracy
                </div>
              </div>

              <div className="bg-slate-50 dark:bg-slate-950 p-4 rounded-xl border border-slate-150 dark:border-slate-850 text-xs space-y-3">
                <p className="my-0"><strong>Prompt:</strong></p>
                <p className="my-0 text-slate-800 dark:text-slate-200 font-medium pl-2 border-l-2 border-indigo-500 italic">
                  &ldquo;What is the capital of Australia?&rdquo;
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                  <div className="bg-white dark:bg-slate-900 p-3.5 rounded-xl border border-slate-150 dark:border-slate-850">
                    <strong className="text-indigo-600 block mb-2 font-bold text-xs">Response A</strong>
                    <p className="text-slate-700 dark:text-slate-300 my-0 leading-relaxed">
                      Sydney is the capital of Australia.
                    </p>
                  </div>

                  <div className="bg-white dark:bg-slate-900 p-3.5 rounded-xl border border-slate-150 dark:border-slate-850">
                    <strong className="text-emerald-600 block mb-2 font-bold text-xs">Response B</strong>
                    <p className="text-slate-700 dark:text-slate-300 my-0 leading-relaxed">
                      Canberra is the capital of Australia.
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
                        Which factual claim influenced your decision?
                      </label>
                      <input 
                        type="text"
                        placeholder="Type your notes..."
                        value={notes["cs1"]?.["influenceCheck"] || ""}
                        onChange={(e) => handleNoteChange("cs1", "influenceCheck", e.target.value)}
                        disabled={submitted["cs1"]}
                        className="w-full text-xs p-2.5 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl outline-hidden focus:border-indigo-500"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] uppercase font-bold text-slate-400 dark:text-slate-550 mb-1">
                        Did either response contain a hallucination?
                      </label>
                      <input 
                        type="text"
                        placeholder="Type your notes..."
                        value={notes["cs1"]?.["hallucinationCheck"] || ""}
                        onChange={(e) => handleNoteChange("cs1", "hallucinationCheck", e.target.value)}
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
                    placeholder="Provide your professional rationale. Contrast the accurate and inaccurate factual claims..."
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
                    4. Reflection: If Response A sounded more convincing than Response B, should that influence your ranking? Why or why not?
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
                      <p><strong>Expert Rationale:</strong> Response B correctly states that Canberra is the capital of Australia. Response A contains a major factual error by stating that Sydney is the capital. In projects where Accuracy is the primary metric, factual correctness outweighs any stylistic differences or confident writing.</p>
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
                    Project Brief: Science Tutor (EduFacts AI)
                  </h3>
                </div>
                <div className="bg-slate-105 dark:bg-slate-800 px-2 py-1 rounded text-[9px] font-mono text-slate-500 dark:text-slate-400 uppercase">
                  Primary Metric: Accuracy
                </div>
              </div>

              <div className="bg-slate-50 dark:bg-slate-950 p-4 rounded-xl border border-slate-150 dark:border-slate-850 text-xs space-y-3">
                <p className="my-0"><strong>Prompt:</strong></p>
                <p className="my-0 text-slate-800 dark:text-slate-200 font-medium pl-2 border-l-2 border-indigo-500 italic">
                  &ldquo;Explain why seasons occur on Earth.&rdquo;
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                  <div className="bg-white dark:bg-slate-900 p-3.5 rounded-xl border border-slate-150 dark:border-slate-850">
                    <strong className="text-rose-600 block mb-2 font-bold text-xs">Response A</strong>
                    <p className="text-slate-700 dark:text-slate-300 my-0 leading-relaxed">
                      Seasons occur because the Earth is closer to the Sun during summer and farther away during winter.
                    </p>
                  </div>

                  <div className="bg-white dark:bg-slate-900 p-3.5 rounded-xl border border-slate-150 dark:border-slate-850">
                    <strong className="text-emerald-600 block mb-2 font-bold text-xs">Response B</strong>
                    <p className="text-slate-700 dark:text-slate-300 my-0 leading-relaxed">
                      Seasons occur because the Earth's axis is tilted, causing different parts of the planet to receive varying amounts of sunlight throughout the year.
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
                        Which response contains the factual error?
                      </label>
                      <input 
                        type="text"
                        placeholder="Type your notes..."
                        value={notes["cs2"]?.["factualErrorCheck"] || ""}
                        onChange={(e) => handleNoteChange("cs2", "factualErrorCheck", e.target.value)}
                        disabled={submitted["cs2"]}
                        className="w-full text-xs p-2.5 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl outline-hidden focus:border-indigo-500"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] uppercase font-bold text-slate-400 dark:text-slate-550 mb-1">
                        Could someone unfamiliar with science believe the incorrect response?
                      </label>
                      <input 
                        type="text"
                        placeholder="Type your notes..."
                        value={notes["cs2"]?.["misconceptionCheck"] || ""}
                        onChange={(e) => handleNoteChange("cs2", "misconceptionCheck", e.target.value)}
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
                    placeholder="Provide your professional rationale. Contrast the physical mechanisms explained in each response..."
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
                    4. Reflection: Why do you think this misconception is so common?
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
                      <p><strong>Expert Rationale:</strong> Response B correctly explains that seasons occur due to the Earth's tilted axis. Response A repeats a very common misconception that seasons occur because of the Earth's changing distance from the Sun. Recommending or teaching incorrect scientific principles is a critical error in tutoring applications, so Response B is the clear winner.</p>
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
                    Project Brief: Health Information Assistant (HealthGuide AI)
                  </h3>
                </div>
                <div className="bg-slate-105 dark:bg-slate-800 px-2 py-1 rounded text-[9px] font-mono text-slate-500 dark:text-slate-400 uppercase">
                  Primary Metric: Accuracy
                </div>
              </div>

              <div className="bg-slate-50 dark:bg-slate-950 p-4 rounded-xl border border-slate-150 dark:border-slate-850 text-xs space-y-3">
                <p className="my-0"><strong>Prompt:</strong></p>
                <p className="my-0 text-slate-800 dark:text-slate-200 font-medium pl-2 border-l-2 border-indigo-500 italic">
                  &ldquo;Can antibiotics cure viral infections like the common cold?&rdquo;
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                  <div className="bg-white dark:bg-slate-900 p-3.5 rounded-xl border border-slate-150 dark:border-slate-850">
                    <strong className="text-rose-600 block mb-2 font-bold text-xs">Response A</strong>
                    <p className="text-slate-700 dark:text-slate-300 my-0 leading-relaxed font-sans">
                      Yes. Antibiotics kill viruses and are commonly prescribed for colds.
                    </p>
                  </div>

                  <div className="bg-white dark:bg-slate-900 p-3.5 rounded-xl border border-slate-150 dark:border-slate-850">
                    <strong className="text-emerald-600 block mb-2 font-bold text-xs">Response B</strong>
                    <p className="text-slate-700 dark:text-slate-300 my-0 leading-relaxed font-sans">
                      No. Antibiotics are designed to treat bacterial infections, not viral infections such as the common cold.
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
                        Could the incorrect response cause harm?
                      </label>
                      <input 
                        type="text"
                        placeholder="Type your notes..."
                        value={notes["cs3"]?.["harmCheck"] || ""}
                        onChange={(e) => handleNoteChange("cs3", "harmCheck", e.target.value)}
                        disabled={submitted["cs3"]}
                        className="w-full text-xs p-2.5 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl outline-hidden focus:border-indigo-500"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] uppercase font-bold text-slate-400 dark:text-slate-550 mb-1">
                        Should harmful factual mistakes receive a stronger penalty?
                      </label>
                      <input 
                        type="text"
                        placeholder="Type your notes..."
                        value={notes["cs3"]?.["penaltyCheck"] || ""}
                        onChange={(e) => handleNoteChange("cs3", "penaltyCheck", e.target.value)}
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
                    placeholder="Provide your professional rationale. Discuss the safety implications and factual correctness..."
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
                    4. Reflection: How should evaluators handle inaccurate health advice compared to general knowledge questions?
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
                      <p><strong>Expert Rationale:</strong> Response B is factually correct: antibiotics treat bacterial infections and have no efficacy against viral infections. Response A contains a highly dangerous medical inaccuracy that could lead to antibiotic misuse and delayed correct treatment. Evaluators must severely penalize factual errors that can cause physical harm, making Response B the absolute preferred choice.</p>
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
                    Project Brief: Research Assistant (ResearchMate AI)
                  </h3>
                </div>
                <div className="bg-slate-105 dark:bg-slate-800 px-2 py-1 rounded text-[9px] font-mono text-slate-500 dark:text-slate-400 uppercase">
                  Primary Metric: Accuracy & Citation Reliability
                </div>
              </div>

              <div className="bg-slate-50 dark:bg-slate-950 p-4 rounded-xl border border-slate-150 dark:border-slate-850 text-xs space-y-3">
                <p className="my-0"><strong>Prompt:</strong></p>
                <p className="my-0 text-slate-800 dark:text-slate-200 font-medium pl-2 border-l-2 border-indigo-500 italic">
                  &ldquo;According to the latest WHO report, malaria cases declined by 40% worldwide in 2025.&rdquo;
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                  <div className="bg-white dark:bg-slate-900 p-3.5 rounded-xl border border-slate-150 dark:border-slate-850">
                    <strong className="text-rose-600 block mb-2 font-bold text-xs">Response A</strong>
                    <p className="text-slate-700 dark:text-slate-300 my-0 leading-relaxed font-sans">
                      According to the WHO's 2025 report, malaria cases declined by 40% worldwide.
                    </p>
                  </div>

                  <div className="bg-white dark:bg-slate-900 p-3.5 rounded-xl border border-slate-150 dark:border-slate-850">
                    <strong className="text-emerald-600 block mb-2 font-bold text-xs">Response B</strong>
                    <p className="text-slate-700 dark:text-slate-300 my-0 leading-relaxed font-sans">
                      I cannot verify that claim without a reliable source. The statistic should be confirmed using an official WHO publication before presenting it as fact.
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
                        Which response demonstrates better factual responsibility?
                      </label>
                      <input 
                        type="text"
                        placeholder="Type your notes..."
                        value={notes["cs4"]?.["responsibilityCheck"] || ""}
                        onChange={(e) => handleNoteChange("cs4", "responsibilityCheck", e.target.value)}
                        disabled={submitted["cs4"]}
                        className="w-full text-xs p-2.5 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl outline-hidden focus:border-indigo-500"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] uppercase font-bold text-slate-400 dark:text-slate-550 mb-1">
                        Is it acceptable for an AI to admit uncertainty?
                      </label>
                      <input 
                        type="text"
                        placeholder="Type your notes..."
                        value={notes["cs4"]?.["uncertaintyCheck"] || ""}
                        onChange={(e) => handleNoteChange("cs4", "uncertaintyCheck", e.target.value)}
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
                    placeholder="Provide your professional rationale. Contrast blind echo with cautious fact checking..."
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
                    4. Reflection: Why is acknowledging uncertainty sometimes better than giving a confident answer?
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
                    <div className="text-slate-700 dark:text-slate-350 space-y-2 leading-relaxed font-sans">
                      <p><strong>Ideal Answer:</strong> Response B is superior.</p>
                      <p><strong>Expert Rationale:</strong> Response B is superior because it responsibly flags the unverified and potentially fabricated statistic rather than echoing it blindly. Response A blindly accepts and repeats a premise that is not supported by real reports, which is a hallucination risk. Admitting uncertainty and encouraging verified sources is highly valuable in professional research AI.</p>
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
                  <span className="text-[10px] font-extrabold text-indigo-600 dark:text-indigo-455 uppercase tracking-widest block font-mono">
                    Case Study 5 (Advanced)
                  </span>
                  <h3 className="text-base font-bold text-slate-900 dark:text-white mt-0.5 mb-0">
                    Project Brief: Historical Knowledge Assistant (HistoryAI)
                  </h3>
                </div>
                <div className="bg-slate-105 dark:bg-slate-800 px-2 py-1 rounded text-[9px] font-mono text-slate-500 dark:text-slate-400 uppercase">
                  Primary Metric: Accuracy
                </div>
              </div>

              <div className="bg-slate-50 dark:bg-slate-950 p-4 rounded-xl border border-slate-150 dark:border-slate-850 text-xs space-y-3">
                <p className="my-0"><strong>Prompt:</strong></p>
                <p className="my-0 text-slate-800 dark:text-slate-200 font-medium pl-2 border-l-2 border-indigo-500 italic">
                  &ldquo;Who discovered penicillin?&rdquo;
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                  <div className="bg-white dark:bg-slate-900 p-3.5 rounded-xl border border-slate-150 dark:border-slate-850">
                    <strong className="text-emerald-600 block mb-2 font-bold text-xs">Response A</strong>
                    <p className="text-slate-700 dark:text-slate-300 my-0 leading-relaxed font-sans">
                      Alexander Fleming discovered penicillin in 1928 after observing that mold inhibited bacterial growth.
                    </p>
                  </div>

                  <div className="bg-white dark:bg-slate-900 p-3.5 rounded-xl border border-slate-150 dark:border-slate-850">
                    <strong className="text-rose-600 block mb-2 font-bold text-xs">Response B</strong>
                    <p className="text-slate-700 dark:text-slate-300 my-0 leading-relaxed font-sans">
                      Louis Pasteur discovered penicillin in 1910 while studying vaccines.
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
                        Identify every factual error in the lower-ranked response.
                      </label>
                      <input 
                        type="text"
                        placeholder="Type your notes..."
                        value={notes["cs5"]?.["errorsCheck"] || ""}
                        onChange={(e) => handleNoteChange("cs5", "errorsCheck", e.target.value)}
                        disabled={submitted["cs5"]}
                        className="w-full text-xs p-2.5 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl outline-hidden focus:border-indigo-500"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] uppercase font-bold text-slate-400 dark:text-slate-550 mb-1">
                        Would partial credit be appropriate? Explain.
                      </label>
                      <input 
                        type="text"
                        placeholder="Type your notes..."
                        value={notes["cs5"]?.["partialCheck"] || ""}
                        onChange={(e) => handleNoteChange("cs5", "partialCheck", e.target.value)}
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
                    placeholder="Provide your professional rationale explaining why the incorrect claim represents a complete historic hallucination..."
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
                    4. Reflection: Imagine another evaluator selected the incorrect response because it sounded more authoritative. How would you respectfully explain why that ranking is incorrect?
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
                    <div className="text-slate-700 dark:text-slate-350 space-y-2 leading-relaxed font-sans">
                      <p><strong>Ideal Answer:</strong> Response A is superior.</p>
                      <p><strong>Expert Rationale:</strong> Response A correctly attributes the discovery of penicillin to Alexander Fleming in 1928. Response B contains multiple glaring factual errors: Louis Pasteur did not discover penicillin, and he died in 1895, making a 1910 discovery historically impossible. No partial credit should be awarded for highly confident but completely false historical fabrications.</p>
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
                Congratulations on completing Lesson 3! Let's summarize the key takeaways of Accuracy & Factuality Evaluation:
              </p>

              <div className="space-y-4 my-6 pl-1 animate-fade-in">
                <div className="flex gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-2 shrink-0" />
                  <p className="text-sm text-slate-650 dark:text-slate-300 my-0">
                    <strong>Accuracy is one of the highest-priority dimensions</strong> in AI evaluation.
                  </p>
                </div>
                <div className="flex gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-2 shrink-0" />
                  <p className="text-sm text-slate-650 dark:text-slate-300 my-0">
                    <strong>A confident response is not necessarily a correct response</strong>. Avoid being swayed by authoritative language.
                  </p>
                </div>
                <div className="flex gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-2 shrink-0" />
                  <p className="text-sm text-slate-650 dark:text-slate-300 my-0">
                    <strong>Evaluators must identify factual errors, hallucinations, and unsupported claims</strong> through thorough fact-checking.
                  </p>
                </div>
                <div className="flex gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-2 shrink-0" />
                  <p className="text-sm text-slate-650 dark:text-slate-300 my-0">
                    <strong>When facts are uncertain</strong>, acknowledging uncertainty is often preferable to inventing information.
                  </p>
                </div>
                <div className="flex gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-2 shrink-0" />
                  <p className="text-sm text-slate-650 dark:text-slate-300 my-0">
                    <strong>Professional rationales should reference evidence</strong> from the responses, not personal beliefs.
                  </p>
                </div>
                <div className="flex gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-2 shrink-0" />
                  <p className="text-sm text-slate-650 dark:text-slate-300 my-0">
                    <strong>Strong evaluators verify information carefully and remain objective</strong>, especially in high-impact domains such as health, science, and history.
                  </p>
                </div>
              </div>

              <div className="bg-emerald-500/5 p-6 rounded-2xl border border-emerald-500/20 text-center space-y-4 my-8">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-emerald-100 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 font-extrabold text-lg">
                  <Award className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mt-0 mb-1">
                    Lesson 3 Complete!
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed max-w-md mx-auto">
                    You have successfully completed Lesson 3: Accuracy & Factuality Evaluation and strengthened one of the most valuable skills in professional AI evaluation.
                  </p>
                </div>
              </div>

              <div className="pt-6 flex justify-center">
                <button
                  onClick={handleFinishLesson}
                  className="bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl px-8 py-4 text-sm font-bold flex items-center gap-2.5 transition-all cursor-pointer shadow-md shadow-emerald-600/10 hover:shadow-emerald-600/20 hover:-translate-y-0.5 active:translate-y-0"
                >
                  <span>Complete & Continue to Lesson 4</span>
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
