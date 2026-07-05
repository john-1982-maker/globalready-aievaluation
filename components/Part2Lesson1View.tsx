import React, { useState } from "react";
import { 
  ArrowLeft, ChevronRight, Check, X, HelpCircle, Send, BookOpen, AlertCircle, Award, CheckCircle2
} from "lucide-react";

interface Part2Lesson1ViewProps {
  onBack: () => void;
  onComplete: (xpEarned: number) => void;
}

export default function Part2Lesson1View({ onBack, onComplete }: Part2Lesson1ViewProps) {
  // State for Interactive Exercises
  const [caseAnswers, setCaseAnswers] = useState<Record<string, number>>({});
  const [caseSubmitted, setCaseSubmitted] = useState<Record<string, boolean>>({});
  
  // State for Practice Sandbox
  const [sandboxRanking, setSandboxRanking] = useState<string>("");
  const [sandboxRationale, setSandboxRationale] = useState<string>("");
  const [sandboxSubmitted, setSandboxSubmitted] = useState<boolean>(false);
  
  // State for lesson progress / reading sections
  const [currentStep, setCurrentStep] = useState<number>(1); // 1: Objectives & Welcome, 2: Workflow, 3: Dimensions & Practice, 4: Sandbox & Wrap

  const handleCaseSelect = (caseId: string, optionIdx: number) => {
    if (caseSubmitted[caseId]) return;
    setCaseAnswers(prev => ({ ...prev, [caseId]: optionIdx }));
  };

  const handleCaseSubmit = (caseId: string) => {
    if (caseAnswers[caseId] === undefined) return;
    setCaseSubmitted(prev => ({ ...prev, [caseId]: true }));
  };

  const handleSandboxSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!sandboxRanking || !sandboxRationale.trim()) return;
    setSandboxSubmitted(true);
  };

  const handleFinishLesson = () => {
    onComplete(100); // Complete lesson and award 100 XP
  };

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-8 md:py-12 animate-fade-in pb-24">
      
      {/* Sleek, minimal back navigation */}
      <div className="mb-10 flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-4">
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-xs font-bold text-slate-400 hover:text-indigo-650 dark:text-slate-500 dark:hover:text-indigo-400 transition-colors uppercase tracking-wider cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Part 2 Overview
        </button>
        
        {/* Simple book page indicator */}
        <span className="text-xs font-mono text-slate-400 dark:text-slate-500 uppercase tracking-wider">
          Section {currentStep} of 4
        </span>
      </div>

      {/* Primary Typographic Canvas */}
      <article className="prose prose-slate dark:prose-invert max-w-none text-slate-700 dark:text-slate-350">
        
        {/* Lesson Title */}
        <div className="mb-8">
          <span className="text-indigo-600 dark:text-indigo-400 text-xs font-mono uppercase tracking-widest font-extrabold block mb-2">
            Part 2 &bull; Lesson 1
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white font-sans leading-tight">
            How Professional AI Evaluators Review Responses
          </h1>
          <div className="h-1 w-20 bg-indigo-600 dark:bg-indigo-500 mt-4 rounded-full" />
        </div>

        {/* ----------------- STEP 1: OBJECTIVES & WELCOME ----------------- */}
        {currentStep === 1 && (
          <div className="space-y-8 animate-fade-in">
            {/* Objectives Box - Typographic, no heavy border */}
            <div className="bg-indigo-50/20 dark:bg-indigo-950/5 p-6 rounded-2xl my-6 border-l-4 border-indigo-600">
              <h3 className="text-base font-bold text-slate-950 dark:text-white mt-0 mb-3 flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-indigo-500" />
                Learning Objectives
              </h3>
              <p className="text-sm text-slate-500 dark:text-slate-400 mt-0 mb-4">
                By the end of this lesson, you will be able to:
              </p>
              <ul className="space-y-2.5 my-0 pl-4 list-disc marker:text-indigo-500 text-sm">
                <li>Understand the workflow professional AI evaluators use to review AI-generated responses.</li>
                <li>Apply a structured evaluation process instead of relying on personal opinion.</li>
                <li>Identify the key evaluation dimensions used across AI evaluation projects.</li>
                <li>Write clear, evidence-based rationales to justify your rankings.</li>
                <li>Think like a professional evaluator when comparing multiple AI responses.</li>
              </ul>
            </div>

            <section className="space-y-5">
              <h2 className="text-xl font-bold text-slate-900 dark:text-white tracking-tight mt-8">
                Welcome to Professional AI Evaluation
              </h2>
              <p className="text-base leading-relaxed">
                Congratulations! You have completed the Foundations section of the academy.
              </p>
              <p className="text-base leading-relaxed">
                You now understand how AI models are trained, what SFT and RLHF are, and why AI companies rely on human evaluators.
              </p>
              <p className="text-base leading-relaxed font-bold text-slate-950 dark:text-white">
                Now it's time to put that knowledge into practice.
              </p>
              <p className="text-base leading-relaxed">
                Professional AI evaluation is not about choosing the answer you personally prefer. 
                In fact, relying on personal taste or "vibes" is the quickest way to fail audits on professional platforms.
              </p>
              <p className="text-base leading-relaxed font-medium text-slate-950 dark:text-white my-4 italic pl-4 border-l-4 border-amber-500 bg-amber-500/5 py-1">
                Instead, your job is to determine which response best satisfies the user's request based on objective criteria. This is the absolute core of the role.
              </p>
            </section>

            {/* Bottom Nav */}
            <div className="mt-12 pt-6 border-t border-slate-100 dark:border-slate-800 flex justify-end">
              <button
                onClick={() => {
                  setCurrentStep(2);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl px-6 py-3 text-xs font-bold flex items-center gap-2 transition-all cursor-pointer"
              >
                <span>Continue to Structured Workflow</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {/* ----------------- STEP 2: STRUCTURED WORKFLOW ----------------- */}
        {currentStep === 2 && (
          <div className="space-y-8 animate-fade-in">
            <section className="space-y-5">
              <h2 className="text-xl font-bold text-slate-900 dark:text-white tracking-tight">
                The Structured Evaluation Workflow
              </h2>
              <p className="text-base leading-relaxed">
                Professional evaluators do not simply read two responses and click a button. They use a structured workflow to ensure objective, high-quality reviews. This workflow filters out personal biases and guarantees systematic precision.
              </p>

              {/* Step list - styled purely with elegant text spacing and typography */}
              <div className="space-y-8 my-8 pl-1">
                
                <div className="space-y-2">
                  <h3 className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
                    <span className="w-6 h-6 rounded-md bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 flex items-center justify-center font-mono text-xs font-extrabold">1</span>
                    Parse the Prompt and Constraints
                  </h3>
                  <p className="text-sm leading-relaxed text-slate-650 dark:text-slate-300 pl-8">
                    Before looking at the responses, understand exactly what the user is asking for. Look for:
                  </p>
                  <ul className="space-y-1.5 pl-12 list-disc text-xs text-slate-600 dark:text-slate-400">
                    <li><strong className="text-slate-900 dark:text-slate-200">Explicit Constraints:</strong> Specific keywords, negative constraints (e.g., "do not use the word 'not'"), formatting requests (e.g., "output as a markdown table"), or precise word counts.</li>
                    <li><strong className="text-slate-900 dark:text-slate-200">Implicit Expectations:</strong> What does a high-quality answer naturally require? (e.g., medical safety, accurate code imports, or correct logical deductions).</li>
                  </ul>
                </div>

                <div className="space-y-2">
                  <h3 className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
                    <span className="w-6 h-6 rounded-md bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 flex items-center justify-center font-mono text-xs font-extrabold">2</span>
                    Meticulous Line-by-Line Fact-Checking
                  </h3>
                  <p className="text-sm leading-relaxed text-slate-650 dark:text-slate-300 pl-8">
                    Verify every single claim made in the responses against authoritative sources. Never assume a model is correct because it sounds professional or uses authoritative language. Look for:
                  </p>
                  <ul className="space-y-1.5 pl-12 list-disc text-xs text-slate-600 dark:text-slate-400">
                    <li>Incorrect dates, historical attributions, or scientific facts.</li>
                    <li>Hallucinated sources, false citation references, or dead URLs.</li>
                    <li>Logical contradictions or inconsistencies within the text itself.</li>
                  </ul>
                </div>

                <div className="space-y-2">
                  <h3 className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
                    <span className="w-6 h-6 rounded-md bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 flex items-center justify-center font-mono text-xs font-extrabold">3</span>
                    Grade Dimensions Individually
                  </h3>
                  <p className="text-sm leading-relaxed text-slate-650 dark:text-slate-300 pl-8">
                    Instead of a single subjective "vibe check", grade each response across specific performance dimensions: instruction following, factual accuracy, readability, tone, completeness, and reasoning structure.
                  </p>
                </div>

                <div className="space-y-2">
                  <h3 className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
                    <span className="w-6 h-6 rounded-md bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 flex items-center justify-center font-mono text-xs font-extrabold">4</span>
                    Compare and Decide
                  </h3>
                  <p className="text-sm leading-relaxed text-slate-650 dark:text-slate-300 pl-8">
                    Rank the responses based on objective comparison:
                  </p>
                  <ul className="space-y-1.5 pl-12 list-disc text-xs text-slate-600 dark:text-slate-400">
                    <li>Is one clearly superior because it satisfied a constraint that the other violated?</li>
                    <li>Are they equal in constraints, but one is slightly better due to superior structure, formatting, or clarity?</li>
                    <li>Did both fail critical rules or safety guardrails?</li>
                  </ul>
                </div>

                <div className="space-y-2">
                  <h3 className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
                    <span className="w-6 h-6 rounded-md bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 flex items-center justify-center font-mono text-xs font-extrabold">5</span>
                    Draft an Evidence-Based Justification
                  </h3>
                  <p className="text-sm leading-relaxed text-slate-650 dark:text-slate-300 pl-8">
                    Write a detailed, objective rationale. Always reference exact words, cite lines, list the specific constraints met or missed, and explicitly support your ranking with textual evidence.
                  </p>
                </div>

              </div>
            </section>

            {/* Inline Check Your Understanding Case Study 1 */}
            <div className="my-10 p-6 rounded-2xl bg-slate-50 dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800 animate-fade-in">
              <span className="inline-flex items-center gap-1.5 text-[10px] font-extrabold text-indigo-600 dark:text-indigo-400 uppercase tracking-widest mb-3 font-mono">
                <HelpCircle className="w-3.5 h-3.5" /> Case Study #1: Constraint Parsing
              </span>
              <h4 className="text-base font-bold text-slate-900 dark:text-white mt-0 mb-3">
                Prompt constraint evaluation:
              </h4>
              <p className="text-xs text-slate-500 dark:text-slate-450 my-2">
                <strong>Prompt:</strong> "Provide a 3-sentence summary of photosynthesis. Do not use the word 'green'."
              </p>
              
              <div className="space-y-3 my-4">
                <div className="p-3 bg-white dark:bg-slate-950 rounded-xl border border-slate-150 dark:border-slate-850 text-xs">
                  <strong className="text-indigo-600 dark:text-indigo-450 block mb-1">Response A:</strong>
                  "Photosynthesis is how plants convert sunlight into chemical energy. They use water and carbon dioxide to create sugars and oxygen. This vital process supports life on Earth."
                </div>
                <div className="p-3 bg-white dark:bg-slate-950 rounded-xl border border-slate-150 dark:border-slate-850 text-xs">
                  <strong className="text-amber-600 dark:text-amber-500 block mb-1">Response B:</strong>
                  "Plants use sunlight to make food. This occurs inside the green chloroplasts of leaves. It produces glucose and oxygen."
                </div>
              </div>

              <p className="text-xs font-bold text-slate-800 dark:text-slate-200 my-3">
                Which response is superior according to strict evaluation guidelines?
              </p>

              <div className="space-y-2">
                {[
                  "Response A is superior because it fully adhered to the negative constraint (avoiding 'green') and exactly met the 3-sentence count.",
                  "Response B is superior because it adds important scientific context regarding chloroplasts."
                ].map((option, idx) => {
                  const isSelected = caseAnswers["cs1"] === idx;
                  const isSubmitted = caseSubmitted["cs1"];
                  const isCorrect = idx === 0;
                  
                  return (
                    <button
                      key={idx}
                      onClick={() => handleCaseSelect("cs1", idx)}
                      disabled={isSubmitted}
                      className={`w-full text-left p-3 rounded-xl text-xs transition-all flex items-start gap-2.5 cursor-pointer ${
                        isSelected 
                          ? isSubmitted 
                            ? isCorrect 
                              ? "bg-emerald-50 dark:bg-emerald-950/20 border-emerald-500 text-emerald-800 dark:text-emerald-300" 
                              : "bg-rose-50 dark:bg-rose-950/20 border-rose-500 text-rose-800 dark:text-rose-300"
                            : "bg-indigo-50/50 dark:bg-indigo-950/20 border-indigo-500 text-indigo-900 dark:text-indigo-300 font-medium"
                          : "bg-white dark:bg-slate-950 border border-slate-150 dark:border-slate-850 text-slate-650 hover:bg-slate-50"
                      }`}
                    >
                      <span className="mt-0.5 shrink-0">
                        {isSubmitted && isSelected ? (
                          isCorrect ? <Check className="w-4 h-4 text-emerald-600" /> : <X className="w-4 h-4 text-rose-600" />
                        ) : (
                          <span className={`w-4.5 h-4.5 rounded-full border flex items-center justify-center font-mono text-[10px] ${isSelected ? "border-indigo-500 text-indigo-500 bg-indigo-50" : "border-slate-300"}`}>
                            {idx === 0 ? "A" : "B"}
                          </span>
                        )}
                      </span>
                      <span>{option}</span>
                    </button>
                  );
                })}
              </div>

              {caseAnswers["cs1"] !== undefined && !caseSubmitted["cs1"] && (
                <button
                  onClick={() => handleCaseSubmit("cs1")}
                  className="mt-4 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg text-xs font-bold transition-all cursor-pointer"
                >
                  Submit Answer
                </button>
              )}

              {caseSubmitted["cs1"] && (
                <div className="mt-4 p-3 bg-emerald-500/5 rounded-xl text-xs leading-relaxed border-l-2 border-emerald-500 text-slate-700 dark:text-slate-300 animate-fade-in">
                  <p className="font-bold text-emerald-700 dark:text-emerald-400 mt-0 mb-1">Expert Rationale:</p>
                  Response A is completely pristine. It followed the positive constraint (exactly 3 sentences) and strictly avoided the forbidden word (the negative constraint). Response B explicitly violated the negative constraint by writing the word &ldquo;green&rdquo;.
                </div>
              )}
            </div>

            {/* Bottom Nav */}
            <div className="mt-12 pt-6 border-t border-slate-100 dark:border-slate-800 flex justify-between">
              <button
                onClick={() => {
                  setCurrentStep(1);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="text-slate-400 hover:text-slate-700 dark:hover:text-white text-xs font-bold flex items-center gap-1.5 transition-colors cursor-pointer"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Go Back</span>
              </button>
              <button
                onClick={() => {
                  setCurrentStep(3);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl px-6 py-3 text-xs font-bold flex items-center gap-2 transition-all cursor-pointer"
              >
                <span>Continue to Dimensions</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {/* ----------------- STEP 3: SEVEN CORE DIMENSIONS ----------------- */}
        {currentStep === 3 && (
          <div className="space-y-8 animate-fade-in">
            <section className="space-y-5">
              <h2 className="text-xl font-bold text-slate-900 dark:text-white tracking-tight">
                Seven Core Evaluation Dimensions
              </h2>
              <p className="text-base leading-relaxed">
                Across almost all professional AI evaluation platforms (Outlier, Alignerr, DataAnnotation, etc.), you will find variations of these seven core dimensions. Memorize these, as they represent the benchmarks of AI alignment:
              </p>

              {/* Dimensions Grid - Styled using spacious bullet structure */}
              <div className="space-y-6 my-8 pl-1">
                
                <div className="flex items-start gap-3">
                  <div className="w-2.5 h-2.5 rounded-full bg-indigo-600 mt-1.5 shrink-0" />
                  <div className="space-y-1">
                    <strong className="text-base font-bold text-slate-900 dark:text-white block">Instruction Following</strong>
                    <p className="text-sm text-slate-650 dark:text-slate-300">
                      The single most critical metric. If a model fails to respect a single explicit constraint (e.g., negative constraints, word counts, format instructions), it is automatically classified as a failure.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-2.5 h-2.5 rounded-full bg-indigo-600 mt-1.5 shrink-0" />
                  <div className="space-y-1">
                    <strong className="text-base font-bold text-slate-900 dark:text-white block">Factual Accuracy & Truthfulness</strong>
                    <p className="text-sm text-slate-650 dark:text-slate-300">
                      Models must never hallucinate facts, invent historical events, create false citations, or present fake URL references as real. You must verify all claims against authoritative sources.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-2.5 h-2.5 rounded-full bg-indigo-600 mt-1.5 shrink-0" />
                  <div className="space-y-1">
                    <strong className="text-base font-bold text-slate-900 dark:text-white block">Completeness & Depth</strong>
                    <p className="text-sm text-slate-650 dark:text-slate-300">
                      Does the model satisfy every part of the user's inquiry? If a prompt asks for "advantages and disadvantages" and the model only lists advantages, it is a completeness failure.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-2.5 h-2.5 rounded-full bg-indigo-600 mt-1.5 shrink-0" />
                  <div className="space-y-1">
                    <strong className="text-base font-bold text-slate-900 dark:text-white block">Tone, Style & Fluff Prevention</strong>
                    <p className="text-sm text-slate-650 dark:text-slate-300">
                      Responses must remain objective, neutral, helpful, and polite. They should avoid conversational fluff, robotic preambles (e.g., "As an AI..."), and excessive exclamation points.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-2.5 h-2.5 rounded-full bg-indigo-600 mt-1.5 shrink-0" />
                  <div className="space-y-1">
                    <strong className="text-base font-bold text-slate-900 dark:text-white block">Formatting & Structure</strong>
                    <p className="text-sm text-slate-650 dark:text-slate-300">
                      Information must be structured cleanly. The appropriate use of Markdown, headers, lists, code blocks, or tables is essential to guarantee human readability.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-2.5 h-2.5 rounded-full bg-indigo-600 mt-1.5 shrink-0" />
                  <div className="space-y-1">
                    <strong className="text-base font-bold text-slate-900 dark:text-white block">Reasoning & Logic</strong>
                    <p className="text-sm text-slate-650 dark:text-slate-300">
                      For math, logic, or programming tasks, the model must follow logical step-by-step reasoning (Chain of Thought). Intermediate calculations must be mathematically sound.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-2.5 h-2.5 rounded-full bg-indigo-600 mt-1.5 shrink-0" />
                  <div className="space-y-1">
                    <strong className="text-base font-bold text-slate-900 dark:text-white block">Safety & Alignment</strong>
                    <p className="text-sm text-slate-650 dark:text-slate-300">
                      Absolutely critical. Responses must be completely free of hazardous instructions, toxic content, hate speech, medical diagnosis liabilities, and copyright violations.
                    </p>
                  </div>
                </div>

              </div>
            </section>

            {/* Case Study 2 Fact checking */}
            <div className="my-10 p-6 rounded-2xl bg-slate-50 dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800 animate-fade-in">
              <span className="inline-flex items-center gap-1.5 text-[10px] font-extrabold text-indigo-600 dark:text-indigo-400 uppercase tracking-widest mb-3 font-mono">
                <HelpCircle className="w-3.5 h-3.5" /> Case Study #2: Fact-Checking
              </span>
              <h4 className="text-base font-bold text-slate-900 dark:text-white mt-0 mb-3">
                Magna Carta historical fact-check:
              </h4>
              <p className="text-xs text-slate-500 dark:text-slate-450 my-2">
                <strong>Prompt:</strong> "State when and where the Magna Carta was signed."
              </p>
              
              <div className="space-y-3 my-4">
                <div className="p-3 bg-white dark:bg-slate-950 rounded-xl border border-slate-150 dark:border-slate-850 text-xs">
                  <strong className="text-indigo-600 dark:text-indigo-450 block mb-1">Response A:</strong>
                  "The Magna Carta was signed by King John of England at Runnymede, near Windsor, on June 15, 1215."
                </div>
                <div className="p-3 bg-white dark:bg-slate-950 rounded-xl border border-slate-150 dark:border-slate-850 text-xs">
                  <strong className="text-amber-600 dark:text-amber-500 block mb-1">Response B:</strong>
                  "The Magna Carta was famously signed by King John on June 15, 1216, at Runnymede."
                </div>
              </div>

              <p className="text-xs font-bold text-slate-800 dark:text-slate-200 my-3">
                Which response is factually accurate?
              </p>

              <div className="space-y-2">
                {[
                  "Response A is factually accurate (June 15, 1215).",
                  "Response B is factually accurate (June 15, 1216)."
                ].map((option, idx) => {
                  const isSelected = caseAnswers["cs2"] === idx;
                  const isSubmitted = caseSubmitted["cs2"];
                  const isCorrect = idx === 0;
                  
                  return (
                    <button
                      key={idx}
                      onClick={() => handleCaseSelect("cs2", idx)}
                      disabled={isSubmitted}
                      className={`w-full text-left p-3 rounded-xl text-xs transition-all flex items-start gap-2.5 cursor-pointer ${
                        isSelected 
                          ? isSubmitted 
                            ? isCorrect 
                              ? "bg-emerald-50 dark:bg-emerald-950/20 border-emerald-500 text-emerald-800 dark:text-emerald-300" 
                              : "bg-rose-50 dark:bg-rose-950/20 border-rose-500 text-rose-800 dark:text-rose-300"
                            : "bg-indigo-50/50 dark:bg-indigo-950/20 border-indigo-500 text-indigo-900 dark:text-indigo-300 font-medium"
                          : "bg-white dark:bg-slate-950 border border-slate-150 dark:border-slate-850 text-slate-650 hover:bg-slate-50"
                      }`}
                    >
                      <span className="mt-0.5 shrink-0">
                        {isSubmitted && isSelected ? (
                          isCorrect ? <Check className="w-4 h-4 text-emerald-600" /> : <X className="w-4 h-4 text-rose-600" />
                        ) : (
                          <span className={`w-4.5 h-4.5 rounded-full border flex items-center justify-center font-mono text-[10px] ${isSelected ? "border-indigo-500 text-indigo-500 bg-indigo-50" : "border-slate-300"}`}>
                            {idx === 0 ? "A" : "B"}
                          </span>
                        )}
                      </span>
                      <span>{option}</span>
                    </button>
                  );
                })}
              </div>

              {caseAnswers["cs2"] !== undefined && !caseSubmitted["cs2"] && (
                <button
                  onClick={() => handleCaseSubmit("cs2")}
                  className="mt-4 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg text-xs font-bold transition-all cursor-pointer"
                >
                  Submit Answer
                </button>
              )}

              {caseSubmitted["cs2"] && (
                <div className="mt-4 p-3 bg-emerald-500/5 rounded-xl text-xs leading-relaxed border-l-2 border-emerald-500 text-slate-700 dark:text-slate-300 animate-fade-in">
                  <p className="font-bold text-emerald-700 dark:text-emerald-400 mt-0 mb-1">Expert Rationale:</p>
                  Response A is factually perfect. The Magna Carta was agreed upon and sealed on June 15, 1215. Response B hallucinated the year as 1216, which is a critical factual error. Fact checking unfamiliar dates is an essential evaluator skill.
                </div>
              )}
            </div>

            {/* Bottom Nav */}
            <div className="mt-12 pt-6 border-t border-slate-100 dark:border-slate-800 flex justify-between">
              <button
                onClick={() => {
                  setCurrentStep(2);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="text-slate-400 hover:text-slate-700 dark:hover:text-white text-xs font-bold flex items-center gap-1.5 transition-colors cursor-pointer"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Go Back</span>
              </button>
              <button
                onClick={() => {
                  setCurrentStep(4);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl px-6 py-3 text-xs font-bold flex items-center gap-2 transition-all cursor-pointer"
              >
                <span>Continue to Practice Sandbox</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {/* ----------------- STEP 4: INTERACTIVE PRACTICE SANDBOX ----------------- */}
        {currentStep === 4 && (
          <div className="space-y-8 animate-fade-in">
            <section className="space-y-5">
              <h2 className="text-xl font-bold text-slate-900 dark:text-white tracking-tight">
                Evaluating Like a Professional
              </h2>
              <p className="text-base leading-relaxed">
                Now it's time to put your skills to the test in a real-world evaluation task. In the sandbox below, audit the prompt, examine the responses, select the winner, and write your rationale.
              </p>
              
              <div className="bg-slate-50 dark:bg-slate-900/40 border border-slate-250 dark:border-slate-800 rounded-2xl p-6 my-6">
                <span className="inline-flex items-center gap-1.5 text-[10px] font-extrabold text-[#4F46E5] dark:text-indigo-400 uppercase tracking-widest mb-4 font-mono">
                  <AlertCircle className="w-3.5 h-3.5" /> Client Project Evaluation Task
                </span>

                <div className="space-y-4 text-xs">
                  <div>
                    <strong className="block text-slate-450 font-semibold mb-1 uppercase tracking-wider text-[10px]">User Prompt:</strong>
                    <div className="p-3 bg-white dark:bg-slate-950 border border-slate-150 dark:border-slate-850 rounded-xl leading-relaxed text-slate-800 dark:text-slate-200">
                      "Write a short, numbered, step-by-step guide on how to prepare a hard-boiled egg. <strong className="text-rose-600 dark:text-rose-450 bg-rose-50 dark:bg-rose-950/20 px-1 py-0.5 rounded">Do not use the words 'boil', 'boiled', or 'water'</strong> in your response."
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <strong className="block text-slate-450 font-semibold mb-1 uppercase tracking-wider text-[10px]">Response A:</strong>
                      <div className="p-4 bg-white dark:bg-slate-950 border border-slate-150 dark:border-slate-850 rounded-xl leading-relaxed text-slate-700 dark:text-slate-350 space-y-2 h-[220px] overflow-y-auto">
                        <p>1. Place the fresh egg inside a deep metal pot.</p>
                        <p>2. Fill the pot with clear liquid until the egg is fully submerged.</p>
                        <p>3. Heat the pot on the burner until the liquid gets extremely hot and simmers for exactly ten minutes.</p>
                        <p>4. Carefully remove the egg, let it cool completely, and peel the shell.</p>
                      </div>
                    </div>

                    <div>
                      <strong className="block text-slate-450 font-semibold mb-1 uppercase tracking-wider text-[10px]">Response B:</strong>
                      <div className="p-4 bg-white dark:bg-slate-950 border border-slate-150 dark:border-slate-850 rounded-xl leading-relaxed text-slate-700 dark:text-slate-350 space-y-2 h-[220px] overflow-y-auto">
                        <p>1. Add water to a saucepan and place the egg inside.</p>
                        <p>2. Bring the water to a boil over medium-high heat.</p>
                        <p>3. Let it cook at a hard boil for 9 to 12 minutes depending on your desired yolk consistency.</p>
                        <p>4. Submerge in ice water, peel, and serve.</p>
                      </div>
                    </div>
                  </div>

                  <form onSubmit={handleSandboxSubmit} className="space-y-5 pt-4 border-t border-slate-100 dark:border-slate-850">
                    <div>
                      <strong className="block text-slate-900 dark:text-white font-bold mb-2">1. Select your evaluation ranking:</strong>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                        {[
                          { id: "A", label: "Response A is superior" },
                          { id: "B", label: "Response B is superior" },
                          { id: "E", label: "Both are equal / failed" }
                        ].map((choice) => (
                          <button
                            key={choice.id}
                            type="button"
                            onClick={() => !sandboxSubmitted && setSandboxRanking(choice.id)}
                            className={`p-3 rounded-xl text-left text-xs transition-all flex items-center gap-2 cursor-pointer ${
                              sandboxRanking === choice.id
                                ? "bg-indigo-600 border-indigo-600 text-white font-bold"
                                : "bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-850 text-slate-700 dark:text-slate-300 hover:bg-slate-50"
                            }`}
                            disabled={sandboxSubmitted}
                          >
                            <span className={`w-3.5 h-3.5 rounded-full border flex items-center justify-center font-mono text-[9px] shrink-0 ${sandboxRanking === choice.id ? "border-white text-indigo-600 bg-white" : "border-slate-400"}`}>
                              {choice.id}
                            </span>
                            <span>{choice.label}</span>
                          </button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <strong className="block text-slate-900 dark:text-white font-bold mb-2">2. Provide your evidence-based rationale (rationales are audited for quality):</strong>
                      <textarea
                        value={sandboxRationale}
                        onChange={(e) => setSandboxRationale(e.target.value)}
                        placeholder="Write a clear, objective comparison. Cite exact word violations, list specific constraints met/failed..."
                        rows={4}
                        className="w-full p-3 text-xs bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-850 rounded-xl leading-relaxed text-slate-800 dark:text-slate-200 focus:outline-hidden focus:ring-1 focus:ring-indigo-500"
                        disabled={sandboxSubmitted}
                        required
                      />
                    </div>

                    {!sandboxSubmitted && (
                      <button
                        type="submit"
                        disabled={!sandboxRanking || !sandboxRationale.trim()}
                        className="w-full sm:w-auto py-3 px-6 bg-indigo-600 hover:bg-indigo-700 disabled:opacity-50 text-white rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-xs"
                      >
                        <Send className="w-3.5 h-3.5" />
                        <span>Submit Evaluation</span>
                      </button>
                    )}
                  </form>

                  {sandboxSubmitted && (
                    <div className="p-5 bg-emerald-500/5 rounded-2xl text-xs leading-relaxed border-l-4 border-emerald-500 text-slate-700 dark:text-slate-300 space-y-3 animate-fade-in">
                      <div className="flex items-center gap-2 text-emerald-700 dark:text-emerald-400 font-extrabold text-sm">
                        <CheckCircle2 className="w-5 h-5" />
                        <span>Annotation Submitted Successfully!</span>
                      </div>
                      
                      <p>
                        <strong>Your Grade:</strong> <span className="text-emerald-600 font-bold font-mono">100% Correct / Pass</span>
                      </p>

                      <hr className="border-emerald-500/10" />

                      <p className="font-bold text-emerald-700 dark:text-emerald-400 mt-0">Expert Evaluation Comparison:</p>
                      
                      <div className="space-y-2 text-slate-600 dark:text-slate-350">
                        <p>
                          <strong>Winner:</strong> <span className="font-bold text-slate-900 dark:text-white">Response A is superior.</span>
                        </p>
                        <p>
                          <strong>Instruction Following Analysis:</strong> Response A successfully followed all positive and negative constraints. It utilized a clean numbered format, described the hardness preparation accurately, and completely avoided the forbidden terms <em>'boil', 'boiled'</em>, and <em>'water'</em> by substituting them with <em>'simmers'</em> and <em>'liquid'</em>.
                        </p>
                        <p>
                          Response B failed multiple critical negative constraints in the very first steps. It explicitly used the word <em>'water'</em> in Step 1 (<em>'Add water to a saucepan'</em>), and explicitly used the word <em>'boil'</em> in Step 2 (<em>'Bring the water to a boil'</em>) and Step 3 (<em>'Let it cook at a hard boil'</em>).
                        </p>
                        <p className="italic bg-indigo-50 dark:bg-indigo-950/20 p-2.5 rounded-xl text-slate-500 dark:text-slate-400 mt-2">
                          <strong>Gold-Standard Justification:</strong> "Response A is superior because it fully adhered to all explicit positive and negative constraints. Specifically, Response A successfully avoided using the forbidden terms 'boil', 'boiled', and 'water' by using clever synonyms like 'liquid' and 'simmers'. Conversely, Response B explicitly violated these negative constraints multiple times, including using 'water' in step 1, 'boil' in step 2, and 'boil' in step 3."
                        </p>
                      </div>
                    </div>
                  )}

                </div>
              </div>
            </section>

            {/* Takeaways & Congratulations */}
            {sandboxSubmitted && (
              <div className="space-y-6 animate-fade-in pt-6 border-t border-slate-150 dark:border-slate-800">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mt-0 mb-3 flex items-center gap-2">
                  <Award className="w-5 h-5 text-amber-500" />
                  Lesson Complete!
                </h3>
                
                <p className="text-sm leading-relaxed text-slate-650 dark:text-slate-300">
                  Excellent work! You have successfully completed Lesson 1 of Part 2. You now understand how to review AI-generated responses using a structured, dimension-based workflow rather than subjective opinions.
                </p>

                <div className="space-y-2.5 my-4 pl-4 border-l-2 border-indigo-500">
                  <span className="text-xs font-bold text-indigo-600 dark:text-indigo-400 block uppercase tracking-wider">Key Takeaways:</span>
                  <ul className="space-y-1.5 list-disc text-xs text-slate-600 dark:text-slate-400 pl-4 my-0">
                    <li>Always parse and prioritize negative constraints first.</li>
                    <li>Fact-check every claim line-by-line; ignore confidence or tone.</li>
                    <li>Provide direct citations and clear textual evidence in justifications.</li>
                  </ul>
                </div>

                <div className="pt-4 flex justify-center">
                  <button
                    onClick={handleFinishLesson}
                    className="bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl px-8 py-4 text-sm font-bold flex items-center gap-2.5 transition-all cursor-pointer shadow-md shadow-emerald-600/10 hover:shadow-emerald-600/20 hover:-translate-y-0.5 active:translate-y-0"
                  >
                    <span>Complete & Continue to Lesson 2</span>
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            )}

            {/* Bottom Nav (If not submitted yet, show standard back button) */}
            {!sandboxSubmitted && (
              <div className="mt-12 pt-6 border-t border-slate-150 dark:border-slate-800 flex justify-between">
                <button
                  onClick={() => {
                    setCurrentStep(3);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="text-slate-400 hover:text-slate-700 dark:hover:text-white text-xs font-bold flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Go Back</span>
                </button>
              </div>
            )}
          </div>
        )}

      </article>

    </div>
  );
}
