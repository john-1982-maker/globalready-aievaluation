import React, { useState } from "react";
import { 
  ArrowLeft, ChevronRight, Check, BookOpen, CheckCircle2, ChevronLeft
} from "lucide-react";

interface Part2Lesson6ViewProps {
  onBack: () => void;
  onComplete: (xpEarned: number) => void;
}

export default function Part2Lesson6View({ onBack, onComplete }: Part2Lesson6ViewProps) {
  // State for current pagination step (1 to 5)
  const [currentStep, setCurrentStep] = useState<number>(1); 
  // 1: Lecture (Theory)
  // 2: Evaluation Project 1 (Barcelona Travel)
  // 3: Evaluation Project 2 (Student Success Coach)
  // 4: Evaluation Project 3 (Family Travel Planner)
  // 5: Finish & Complete Part A

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

  const handleFinishPartA = () => {
    onComplete(120); // Award 120 XP for Lesson 6 Part A completion
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
          Section {currentStep} of 7
        </span>
      </div>

      <article className="prose prose-slate dark:prose-invert max-w-none text-slate-700 dark:text-slate-350 font-sans">
        
        {/* Lesson Title */}
        <div className="mb-8">
          <span className="text-indigo-600 dark:text-indigo-400 text-xs font-mono uppercase tracking-widest font-extrabold block mb-2">
            Part 2 &bull; Lesson 6
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight">
            Context Tracking & Information Retrieval Evaluation
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
                <li>Evaluate whether an AI correctly retrieves and applies information from previous context.</li>
                <li>Distinguish between relevant and irrelevant context.</li>
                <li>Detect when an AI ignores, contradicts, or hallucinates information from a conversation.</li>
                <li>Evaluate personalization based on user preferences and conversation history.</li>
                <li>Write professional rationales that justify your rankings using contextual evidence.</li>
              </ul>
            </div>

            <section className="space-y-5">
              <h2 className="text-xl font-bold text-slate-900 dark:text-white tracking-tight mt-8 animate-slide-in">
                Why Context Tracking Matters
              </h2>
              <p className="text-base leading-relaxed">
                Modern AI systems are expected to do much more than answer isolated questions. They must remember important details, ignore irrelevant information, and use previous conversation history to generate better responses.
              </p>
              <p className="text-base leading-relaxed">
                Imagine the following conversation.
              </p>
              
              <div className="bg-slate-50 dark:bg-slate-900/40 p-5 rounded-2xl border border-slate-150 dark:border-slate-800 space-y-3 my-4">
                <div className="flex gap-2.5">
                  <span className="font-bold text-xs text-indigo-600 uppercase tracking-wider shrink-0 mt-0.5">User:</span>
                  <p className="text-xs text-slate-700 dark:text-slate-350 italic my-0">
                    &ldquo;I'm travelling to Rome next week with my wife and our two children.&rdquo;
                  </p>
                </div>
                <div className="text-[10px] text-slate-400 dark:text-slate-550 font-mono pl-12">Later...</div>
                <div className="flex gap-2.5">
                  <span className="font-bold text-xs text-indigo-600 uppercase tracking-wider shrink-0 mt-0.5">User:</span>
                  <p className="text-xs text-slate-700 dark:text-slate-350 italic my-0">
                    &ldquo;My wife is vegetarian.&rdquo;
                  </p>
                </div>
                <div className="text-[10px] text-slate-400 dark:text-slate-550 font-mono pl-12">Later...</div>
                <div className="flex gap-2.5">
                  <span className="font-bold text-xs text-indigo-600 uppercase tracking-wider shrink-0 mt-0.5">User:</span>
                  <p className="text-xs text-slate-700 dark:text-slate-350 italic my-0">
                    &ldquo;My son has a peanut allergy.&rdquo;
                  </p>
                </div>
                <div className="text-[10px] text-slate-400 dark:text-slate-550 font-mono pl-12">Later...</div>
                <div className="flex gap-2.5">
                  <span className="font-bold text-xs text-indigo-600 uppercase tracking-wider shrink-0 mt-0.5">User:</span>
                  <p className="text-xs text-slate-700 dark:text-slate-350 italic my-0">
                    &ldquo;Yesterday we visited the Colosseum.&rdquo;
                  </p>
                </div>
                <div className="text-[10px] text-slate-400 dark:text-slate-550 font-mono pl-12">Finally the user asks:</div>
                <div className="flex gap-2.5 border-t border-slate-100 dark:border-slate-800/80 pt-3 mt-1">
                  <span className="font-bold text-xs text-indigo-600 uppercase tracking-wider shrink-0">User:</span>
                  <p className="text-xs text-slate-850 dark:text-slate-200 font-medium my-0">
                    &ldquo;Recommend somewhere for dinner tonight.&rdquo;
                  </p>
                </div>
              </div>

              <p className="text-base leading-relaxed">
                A professional AI should understand all of this context.
              </p>
              <p className="text-base leading-relaxed">
                It should <strong>not</strong> recommend:
              </p>
              <ul className="space-y-1.5 list-disc pl-5 text-sm text-slate-650 dark:text-slate-400">
                <li>A steakhouse as the only option.</li>
                <li>A restaurant famous for peanut dishes.</li>
                <li>A restaurant beside the Colosseum if the user has already spent the day there and asked for something different.</li>
              </ul>
              <p className="text-base leading-relaxed">
                Instead, it should use the relevant information from the conversation to produce a personalized recommendation. This ability is called <strong>Context Tracking</strong>.
              </p>
              <p className="text-base leading-relaxed">
                Professional AI evaluators spend a great deal of time assessing whether a model correctly understands and applies context.
              </p>
            </section>

            <hr className="border-slate-100 dark:border-slate-800" />

            <section className="space-y-5">
              <h2 className="text-xl font-bold text-slate-900 dark:text-white tracking-tight">
                What Counts as Context?
              </h2>
              <p className="text-base leading-relaxed">
                Context includes anything the model should reasonably use when generating a response.
              </p>
              <p className="text-base leading-relaxed">
                Examples include:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
                <div className="p-4 rounded-xl bg-slate-55/40 dark:bg-slate-900/20 border border-slate-100 dark:border-slate-800/80 text-xs">
                  <ul className="space-y-2 pl-4 list-disc text-slate-700 dark:text-slate-350">
                    <li>Previous conversation history</li>
                    <li>User preferences</li>
                    <li>User constraints</li>
                    <li>Uploaded documents</li>
                  </ul>
                </div>
                <div className="p-4 rounded-xl bg-slate-55/40 dark:bg-slate-900/20 border border-slate-100 dark:border-slate-800/80 text-xs">
                  <ul className="space-y-2 pl-4 list-disc text-slate-700 dark:text-slate-350">
                    <li>System instructions</li>
                    <li>Developer notes</li>
                    <li>Previous corrections made by the user</li>
                  </ul>
                </div>
              </div>
              <p className="text-base leading-relaxed">
                Good AI systems retrieve relevant context while ignoring information that does not matter.
              </p>
            </section>

            <hr className="border-slate-100 dark:border-slate-800" />

            <section className="space-y-5">
              <h2 className="text-xl font-bold text-slate-900 dark:text-white tracking-tight">
                Relevant vs Irrelevant Context
              </h2>
              <p className="text-base leading-relaxed">
                Not every detail matters.
              </p>
              <div className="bg-amber-500/5 border-l-4 border-amber-500 p-5 rounded-r-2xl space-y-3 text-xs leading-relaxed text-slate-650 dark:text-slate-350">
                <p className="my-0"><strong>Example:</strong> User says:</p>
                <ul className="space-y-1 my-0 pl-4 list-disc">
                  <li>I like blue.</li>
                  <li>I own two cats.</li>
                  <li>I am allergic to peanuts.</li>
                  <li>I am travelling to Japan.</li>
                </ul>
                <p className="my-0">Later asks:</p>
                <p className="italic my-0 pl-2 font-semibold border-l border-amber-400">&ldquo;Recommend dinner.&rdquo;</p>
                <p className="my-0 font-medium text-slate-800 dark:text-slate-200">
                  The peanut allergy matters. The favourite colour does not.
                </p>
              </div>
              <p className="text-base leading-relaxed">
                Professional evaluators distinguish between <strong>important context</strong> and <strong>background noise</strong>.
              </p>
            </section>

            <hr className="border-slate-100 dark:border-slate-800" />

            <section className="space-y-5">
              <h2 className="text-xl font-bold text-slate-900 dark:text-white tracking-tight">
                Common Context Errors
              </h2>
              <p className="text-base leading-relaxed">
                AI models often make one of these mistakes.
              </p>

              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/30 border border-slate-100 dark:border-slate-850">
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white mt-0 mb-1">Ignoring Context</h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 my-0 leading-relaxed">The information exists but the model doesn't use it.</p>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/30 border border-slate-100 dark:border-slate-850">
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white mt-0 mb-1">Contradicting Context</h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 my-0 leading-relaxed">The response conflicts with previous information.</p>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/30 border border-slate-100 dark:border-slate-850">
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white mt-0 mb-1">Hallucinating Context</h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 my-0 leading-relaxed">The model instantiates or invents details that were never provided in the history.</p>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/30 border border-slate-100 dark:border-slate-850">
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white mt-0 mb-1">Using Outdated Context</h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 my-0 leading-relaxed">The user later corrected earlier details but the model continued utilizing the stale parameters.</p>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/30 border border-slate-100 dark:border-slate-850">
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white mt-0 mb-1">Missing Personalization</h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 my-0 leading-relaxed">The AI provides a generic answer instead of leveraging high-value profile parameters.</p>
                </div>
              </div>
            </section>

            <hr className="border-slate-100 dark:border-slate-800" />

            <section className="space-y-5">
              <h2 className="text-xl font-bold text-slate-900 dark:text-white tracking-tight">
                Worked Example
              </h2>
              <div className="bg-slate-50 dark:bg-slate-900/40 p-5 rounded-2xl border border-slate-150 dark:border-slate-880 text-xs">
                <p className="font-mono text-slate-450 uppercase tracking-wider text-[10px] mt-0 mb-2">Scenario Demonstration</p>
                <p className="mb-1"><strong>Client:</strong> SmartLife AI</p>
                <p className="mb-3"><strong>Primary Metric:</strong> Context Tracking | <strong>Secondary:</strong> Personalization, User Intent</p>
                <p className="mb-4"><strong>Brand Voice:</strong> Friendly, Practical, Personalized</p>

                <div className="bg-white dark:bg-slate-950 p-3.5 rounded-xl border border-slate-150 dark:border-slate-850 mb-4 space-y-2 leading-relaxed">
                  <strong className="text-slate-900 dark:text-white block font-bold text-[11px] mb-1">Conversation History:</strong>
                  <ul className="list-disc pl-4 space-y-1 text-slate-650 dark:text-slate-350">
                    <li>My name is Emma.</li>
                    <li>I recently became vegetarian.</li>
                    <li>I injured my left knee while training for a marathon.</li>
                    <li>I'm travelling to Amsterdam next month.</li>
                  </ul>
                </div>
                
                <strong className="text-slate-855 dark:text-slate-200 block mb-1">User Prompt:</strong>
                <p className="italic mb-4 pl-2 border-l-2 border-indigo-500">&ldquo;Recommend a healthy dinner for tonight.&rdquo;</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-white dark:bg-slate-950 p-3.5 rounded-xl border border-slate-150 dark:border-slate-850">
                    <strong className="text-rose-600 block mb-2 font-bold">Response A</strong>
                    <p className="text-slate-750 dark:text-slate-300 my-0 leading-relaxed font-mono text-[11px]">
                      &ldquo;Grilled chicken with rice would be an excellent high-protein dinner before marathon training.&rdquo;
                    </p>
                  </div>

                  <div className="bg-white dark:bg-slate-950 p-3.5 rounded-xl border border-slate-150 dark:border-slate-850">
                    <strong className="text-emerald-600 block mb-2 font-bold">Response B</strong>
                    <p className="text-slate-750 dark:text-slate-300 my-0 leading-relaxed text-xs">
                      &ldquo;A lentil and vegetable curry with brown rice would provide plenty of energy while matching your vegetarian diet. Since you're recovering from a knee injury, remember not to overtrain until you've recovered.&rdquo;
                    </p>
                  </div>
                </div>

                <div className="mt-4 p-4 bg-indigo-50/20 rounded-xl border-l-2 border-indigo-500 text-slate-700 dark:text-slate-300">
                  <strong className="text-indigo-600 dark:text-indigo-400 block mb-1 font-bold">Professional Evaluation:</strong>
                  Response A gives sensible nutritional advice but ignores two important pieces of context: <strong>vegetarian diet</strong> and <strong>knee injury</strong>. Response B successfully retrieves both details while also providing a personalized recommendation. Professional evaluators would rank Response B higher.
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
                <span>Continue to Project 1</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {/* ================= STEP 2: EVALUATION PROJECT 1 ================= */}
        {currentStep === 2 && (
          <div className="space-y-12 animate-fade-in">
            
            <section className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm space-y-6">
              <div className="border-b border-slate-100 dark:border-slate-800 pb-3 flex justify-between items-center flex-wrap gap-2">
                <div>
                  <span className="text-[10px] font-extrabold text-indigo-600 dark:text-indigo-455 uppercase tracking-widest block font-mono">
                    Evaluation Project 1 (Beginner)
                  </span>
                  <h3 className="text-base font-bold text-slate-900 dark:text-white mt-0.5 mb-0">
                    Project Brief: Personal Travel Assistant (TravelMate AI)
                  </h3>
                </div>
                <div className="bg-slate-105 dark:bg-slate-800 px-2.5 py-1 rounded text-[9px] font-mono text-slate-500 dark:text-slate-400 uppercase">
                  Primary Metric: Context Tracking
                </div>
              </div>

              <div className="bg-slate-50 dark:bg-slate-950 p-4 rounded-xl border border-slate-150 dark:border-slate-850 text-xs space-y-3">
                <div className="grid grid-cols-2 gap-4 border-b border-slate-200 dark:border-slate-800 pb-2 mb-2 text-[11px] text-slate-500">
                  <div><strong>Secondary:</strong> Personalization, User Intent</div>
                  <div><strong>Brand Voice:</strong> Friendly, Helpful, Personalized</div>
                </div>

                <div className="space-y-1 bg-white dark:bg-slate-900 p-3 rounded-lg border border-slate-100 dark:border-slate-850">
                  <strong className="text-slate-900 dark:text-white block font-bold text-[10px] uppercase text-slate-400">Conversation History:</strong>
                  <ul className="list-decimal pl-4 space-y-0.5 font-sans leading-relaxed text-slate-650 dark:text-slate-350">
                    <li>My wife and I are spending four days in Barcelona.</li>
                    <li>We enjoy museums and local food.</li>
                    <li>My wife is vegetarian.</li>
                    <li>Yesterday we visited the Picasso Museum.</li>
                    <li>Our hotel is near La Rambla.</li>
                  </ul>
                </div>

                <p className="my-0"><strong>User Prompt:</strong></p>
                <p className="my-0 text-slate-800 dark:text-slate-200 font-medium pl-2 border-l-2 border-indigo-500 italic">
                  &ldquo;Recommend an afternoon activity followed by dinner.&rdquo;
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                  <div className="bg-white dark:bg-slate-900 p-3.5 rounded-xl border border-slate-150 dark:border-slate-850">
                    <strong className="text-rose-600 block mb-2 font-bold text-xs">Response A</strong>
                    <p className="text-slate-700 dark:text-slate-300 my-0 leading-relaxed text-xs">
                      &ldquo;Visit the Picasso Museum again before enjoying dinner at a famous steakhouse.&rdquo;
                    </p>
                  </div>

                  <div className="bg-white dark:bg-slate-900 p-3.5 rounded-xl border border-slate-150 dark:border-slate-850">
                    <strong className="text-emerald-600 block mb-2 font-bold text-xs">Response B</strong>
                    <p className="text-slate-700 dark:text-slate-300 my-0 leading-relaxed text-xs">
                      &ldquo;Visit the Maritime Museum in the afternoon before walking back towards La Rambla for dinner at a vegetarian-friendly Spanish restaurant.&rdquo;
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
                    const isSelected = rankings["ep1"] === option;
                    return (
                      <button
                        key={option}
                        onClick={() => handleRankSelect("ep1", option)}
                        disabled={submitted["ep1"]}
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
                        List every relevant context item correctly used by Response B:
                      </label>
                      <input 
                        type="text"
                        placeholder="Type your notes..."
                        value={notes["ep1"]?.["bCorrectContext"] || ""}
                        onChange={(e) => handleNoteChange("ep1", "bCorrectContext", e.target.value)}
                        disabled={submitted["ep1"]}
                        className="w-full text-xs p-2.5 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl outline-hidden focus:border-indigo-500"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] uppercase font-bold text-slate-400 dark:text-slate-550 mb-1">
                        Identify every piece of context ignored or contradicted by Response A:
                      </label>
                      <input 
                        type="text"
                        placeholder="Type your notes..."
                        value={notes["ep1"]?.["aIgnoredContext"] || ""}
                        onChange={(e) => handleNoteChange("ep1", "aIgnoredContext", e.target.value)}
                        disabled={submitted["ep1"]}
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
                    placeholder="Provide your professional rationale explaining your ranking with references to Context Tracking, Personalization, and User Intent..."
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
                  <label className="block text-xs font-bold text-slate-855 dark:text-slate-205 mb-1">
                    4. Reflection: If Response A had recommended a vegetarian restaurant but still suggested revisiting the Picasso Museum, would your ranking change? Why?
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

                {submitted["ep1"] && (
                  <div className="p-4 rounded-xl bg-emerald-500/5 border border-emerald-500/20 text-xs space-y-3 mt-4 animate-fade-in">
                    <div className="flex items-center gap-2 text-emerald-700 dark:text-emerald-400 font-bold">
                      <CheckCircle2 className="w-4 h-4 shrink-0" />
                      <span>Expert Review (Revealed)</span>
                    </div>
                    <div className="text-slate-700 dark:text-slate-300 space-y-2 leading-relaxed font-sans">
                      <p><strong>Ideal Answer:</strong> Response B is superior.</p>
                      <p><strong>Expert Rationale:</strong> Response B demonstrates exceptional Context Tracking by correctly recalling and applying multiple context clues: 1) It respects the constraint that the wife is <strong>vegetarian</strong>; 2) It avoids suggesting the <strong>Picasso Museum</strong> which they visited yesterday; 3) It keeps activities geographically practical, locating dinner near <strong>La Rambla</strong> where their hotel is situated; 4) It respects their interest in <strong>museums</strong>. Response A fails miserably on multiple counts: it proposes the steakhouse (ignoring the vegetarian constraint), suggests revisiting the Picasso Museum (ignoring that they spent yesterday there), and neglects hotel placement.</p>
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
                <span>Continue to Project 2</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

          </div>
        )}

        {/* ================= STEP 3: EVALUATION PROJECT 2 ================= */}
        {currentStep === 3 && (
          <div className="space-y-12 animate-fade-in">
            
            <section className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm space-y-6">
              <div className="border-b border-slate-100 dark:border-slate-800 pb-3 flex justify-between items-center flex-wrap gap-2">
                <div>
                  <span className="text-[10px] font-extrabold text-indigo-600 dark:text-indigo-455 uppercase tracking-widest block font-mono">
                    Evaluation Project 2 (Intermediate)
                  </span>
                  <h3 className="text-base font-bold text-slate-900 dark:text-white mt-0.5 mb-0">
                    Project Brief: Student Success Coach (LearnPath AI)
                  </h3>
                </div>
                <div className="bg-slate-105 dark:bg-slate-800 px-2.5 py-1 rounded text-[9px] font-mono text-slate-500 dark:text-slate-400 uppercase">
                  Primary Metric: Information Retrieval
                </div>
              </div>

              <div className="bg-slate-50 dark:bg-slate-950 p-4 rounded-xl border border-slate-150 dark:border-slate-850 text-xs space-y-3">
                <div className="grid grid-cols-2 gap-4 border-b border-slate-200 dark:border-slate-800 pb-2 mb-2 text-[11px] text-slate-500">
                  <div><strong>Secondary:</strong> Personalization, Accuracy</div>
                  <div><strong>Brand Voice:</strong> Encouraging, Practical, Supportive</div>
                </div>

                <div className="space-y-2 bg-white dark:bg-slate-900 p-3 rounded-lg border border-slate-100 dark:border-slate-850 text-slate-650 dark:text-slate-350">
                  <strong className="text-slate-900 dark:text-white block font-bold text-[10px] uppercase text-slate-400 mb-1">Student Profile (Sarah):</strong>
                  <div className="grid grid-cols-2 gap-x-6 gap-y-1.5 leading-relaxed">
                    <div><strong>Name:</strong> Sarah</div>
                    <div><strong>Age:</strong> 18</div>
                    <div><strong>University:</strong> First Year Computer Science</div>
                    <div><strong>Subjects:</strong> Programming, Mathematics, Databases, Networking</div>
                    <div><strong>Weakest Subject:</strong> Programming</div>
                    <div><strong>Exam Schedule:</strong> Programming (Monday), Mathematics (Thursday)</div>
                    <div className="col-span-2"><strong>Personal Goal:</strong> Pass Programming with at least 70%</div>
                  </div>
                </div>

                <p className="my-0"><strong>User Prompt:</strong></p>
                <p className="my-0 text-slate-800 dark:text-slate-200 font-medium pl-2 border-l-2 border-indigo-500 italic">
                  &ldquo;I only have one full day to study tomorrow. How should I spend it?&rdquo;
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                  <div className="bg-white dark:bg-slate-900 p-3.5 rounded-xl border border-slate-150 dark:border-slate-850">
                    <strong className="text-rose-600 block mb-2 font-bold text-xs">Response A</strong>
                    <p className="text-slate-700 dark:text-slate-300 my-0 leading-relaxed text-xs">
                      &ldquo;Spend most of your day revising Mathematics because it is one of the most challenging university subjects.&rdquo;
                    </p>
                  </div>

                  <div className="bg-white dark:bg-slate-900 p-3.5 rounded-xl border border-slate-150 dark:border-slate-850">
                    <strong className="text-emerald-600 block mb-2 font-bold text-xs">Response B</strong>
                    <p className="text-slate-700 dark:text-slate-300 my-0 leading-relaxed text-xs font-mono text-[11px]">
                      &ldquo;Prioritize Programming because it is your weakest subject and your first exam is on Monday. Spend the morning reviewing lecture material, the afternoon solving coding exercises, and the evening completing a timed practice test.&rdquo;
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
                    const isSelected = rankings["ep2"] === option;
                    return (
                      <button
                        key={option}
                        onClick={() => handleRankSelect("ep2", option)}
                        disabled={submitted["ep2"]}
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
                        Which important pieces of context did Response B successfully retrieve?
                      </label>
                      <input 
                        type="text"
                        placeholder="Type your notes..."
                        value={notes["ep2"]?.["bRetrievedContext"] || ""}
                        onChange={(e) => handleNoteChange("ep2", "bRetrievedContext", e.target.value)}
                        disabled={submitted["ep2"]}
                        className="w-full text-xs p-2.5 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl outline-hidden focus:border-indigo-500"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] uppercase font-bold text-slate-400 dark:text-slate-550 mb-1">
                        Did Response A hallucinate or simply ignore context? Explain:
                      </label>
                      <input 
                        type="text"
                        placeholder="Type your notes..."
                        value={notes["ep2"]?.["aErrorCheck"] || ""}
                        onChange={(e) => handleNoteChange("ep2", "aErrorCheck", e.target.value)}
                        disabled={submitted["ep2"]}
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
                    placeholder="Provide your professional rationale defending your decision..."
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
                  <label className="block text-xs font-bold text-slate-855 dark:text-slate-205 mb-1">
                    4. Reflection: How is context retrieval different from factual accuracy?
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

                {submitted["ep2"] && (
                  <div className="p-4 rounded-xl bg-emerald-500/5 border border-emerald-500/20 text-xs space-y-3 mt-4 animate-fade-in">
                    <div className="flex items-center gap-2 text-emerald-700 dark:text-emerald-400 font-bold">
                      <CheckCircle2 className="w-4 h-4 shrink-0" />
                      <span>Expert Review (Revealed)</span>
                    </div>
                    <div className="text-slate-700 dark:text-slate-300 space-y-2 leading-relaxed font-sans">
                      <p><strong>Ideal Answer:</strong> Response B is superior.</p>
                      <p><strong>Expert Rationale:</strong> Response B retrieves and links multiple critical dimensions: that Sarah's weakest subject is <strong>Programming</strong>, that her <strong>Programming exam is on Monday</strong> (which occurs before her Mathematics exam on Thursday), and that she only has <strong>one day to study</strong>. Therefore, prioritizing Programming is the only logically sound and contextually personalized recommendation. Response A ignores Sarah's exam timeline, her subject weakness status, and her specific learning profile, proposing Mathematics study solely based on generic difficulty.</p>
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
          <div className="space-y-12 animate-fade-in">
            
            <section className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm space-y-6">
              <div className="border-b border-slate-100 dark:border-slate-800 pb-3 flex justify-between items-center flex-wrap gap-2">
                <div>
                  <span className="text-[10px] font-extrabold text-indigo-600 dark:text-indigo-455 uppercase tracking-widest block font-mono">
                    Evaluation Project 3 (Advanced)
                  </span>
                  <h3 className="text-base font-bold text-slate-900 dark:text-white mt-0.5 mb-0">
                    Project Brief: Family Travel Planner (SmartTravel AI)
                  </h3>
                </div>
                <div className="bg-slate-105 dark:bg-slate-800 px-2.5 py-1 rounded text-[9px] font-mono text-slate-500 dark:text-slate-400 uppercase">
                  Primary Metric: Context Tracking
                </div>
              </div>

              <div className="bg-slate-50 dark:bg-slate-950 p-4 rounded-xl border border-slate-150 dark:border-slate-850 text-xs space-y-3">
                <div className="grid grid-cols-2 gap-4 border-b border-slate-200 dark:border-slate-800 pb-2 mb-2 text-[11px] text-slate-500">
                  <div><strong>Secondary:</strong> Personalization, User Intent, Instruction Following</div>
                  <div><strong>Brand Voice:</strong> Practical, Family-Friendly, Budget Conscious</div>
                </div>

                <div className="p-3 bg-indigo-500/5 rounded-lg border border-indigo-500/20 space-y-1 text-[11px] leading-normal text-slate-650 dark:text-slate-350">
                  <strong className="text-indigo-600 dark:text-indigo-400 block font-bold uppercase text-[9px] tracking-wider mb-1">System Instruction:</strong>
                  <ul className="list-disc pl-4 space-y-0.5 my-0">
                    <li>Always personalize recommendations using the customer's previous preferences.</li>
                    <li>Never recommend attractions already visited.</li>
                  </ul>
                </div>

                <div className="space-y-2 bg-white dark:bg-slate-900 p-3 rounded-lg border border-slate-100 dark:border-slate-850 text-slate-650 dark:text-slate-350">
                  <strong className="text-slate-900 dark:text-white block font-bold text-[10px] uppercase text-slate-400 mb-1">Conversation History:</strong>
                  <ul className="list-decimal pl-4 space-y-0.5 leading-relaxed font-sans text-xs">
                    <li>My wife and I are visiting Barcelona with our two children aged 8 and 11.</li>
                    <li>We're staying near La Rambla.</li>
                    <li>Our daily budget is around €180.</li>
                    <li>My wife is vegetarian.</li>
                    <li>My son has a peanut allergy.</li>
                    <li>Yesterday we visited: <strong>Park Güell</strong> and <strong>Sagrada Família</strong>.</li>
                    <li>Tomorrow's weather forecast predicts rain.</li>
                    <li>The children love science museums.</li>
                    <li>We don't enjoy nightlife.</li>
                  </ul>
                </div>

                <p className="my-0"><strong>User Prompt:</strong></p>
                <div className="my-0 text-slate-800 dark:text-slate-200 font-medium pl-2 border-l-2 border-indigo-500 italic space-y-1 text-xs">
                  <p className="my-0">&ldquo;Recommend a full itinerary for tomorrow.</p>
                  <p className="my-0">Include:</p>
                  <ul className="list-disc pl-4 my-0 space-y-0.5 text-[11px]">
                    <li>Morning activity</li>
                    <li>Lunch</li>
                    <li>Afternoon activity</li>
                    <li>Dinner&rdquo;</li>
                  </ul>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                  <div className="bg-white dark:bg-slate-900 p-3.5 rounded-xl border border-slate-150 dark:border-slate-850">
                    <strong className="text-rose-600 block mb-2 font-bold text-xs">Response A</strong>
                    <p className="text-slate-700 dark:text-slate-300 my-0 leading-relaxed text-xs">
                      &ldquo;Start your morning by revisiting Park Güell before having lunch at a seafood restaurant. Spend the afternoon shopping before ending the evening at a rooftop cocktail bar.&rdquo;
                    </p>
                  </div>

                  <div className="bg-white dark:bg-slate-900 p-3.5 rounded-xl border border-slate-150 dark:border-slate-850">
                    <strong className="text-emerald-600 block mb-2 font-bold text-xs font-mono text-[11px]">Response B</strong>
                    <p className="text-slate-700 dark:text-slate-300 my-0 leading-relaxed text-xs">
                      &ldquo;Visit CosmoCaixa Science Museum in the morning so the children can enjoy interactive exhibits indoors while avoiding the rain. Have lunch at a vegetarian-friendly restaurant that offers peanut-safe options within your budget. Spend the afternoon exploring Barcelona Aquarium before enjoying dinner near La Rambla at a family-friendly restaurant.&rdquo;
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
                    const isSelected = rankings["ep3"] === option;
                    return (
                      <button
                        key={option}
                        onClick={() => handleRankSelect("ep3", option)}
                        disabled={submitted["ep3"]}
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
                        List at least six pieces of context successfully used by Response B:
                      </label>
                      <input 
                        type="text"
                        placeholder="Type your notes..."
                        value={notes["ep3"]?.["bSixDetails"] || ""}
                        onChange={(e) => handleNoteChange("ep3", "bSixDetails", e.target.value)}
                        disabled={submitted["ep3"]}
                        className="w-full text-xs p-2.5 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl outline-hidden focus:border-indigo-500"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] uppercase font-bold text-slate-400 dark:text-slate-550 mb-1">
                        Identify every important context item ignored or contradicted by Response A:
                      </label>
                      <input 
                        type="text"
                        placeholder="Type your notes..."
                        value={notes["ep3"]?.["aErrors"] || ""}
                        onChange={(e) => handleNoteChange("ep3", "aErrors", e.target.value)}
                        disabled={submitted["ep3"]}
                        className="w-full text-xs p-2.5 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl outline-hidden focus:border-indigo-500"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] uppercase font-bold text-slate-400 dark:text-slate-550 mb-1">
                        Would either response require revision before deployment? Explain:
                      </label>
                      <input 
                        type="text"
                        placeholder="Type your notes..."
                        value={notes["ep3"]?.["deploymentNeeds"] || ""}
                        onChange={(e) => handleNoteChange("ep3", "deploymentNeeds", e.target.value)}
                        disabled={submitted["ep3"]}
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
                    placeholder="Provide your professional rationale defending your ranking with references to Context Tracking, Personalization, User Intent, and Instruction Following..."
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
                  <label className="block text-xs font-bold text-slate-855 dark:text-slate-205 mb-1">
                    4. Reflection: Imagine another evaluator argues that Response A includes more famous tourist attractions and therefore should rank higher. Using only the project brief and evaluation criteria, explain why you agree or disagree.
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

                {submitted["ep3"] && (
                  <div className="p-4 rounded-xl bg-emerald-500/5 border border-emerald-500/20 text-xs space-y-3 mt-4 animate-fade-in">
                    <div className="flex items-center gap-2 text-emerald-700 dark:text-emerald-400 font-bold">
                      <CheckCircle2 className="w-4 h-4 shrink-0" />
                      <span>Expert Review (Revealed)</span>
                    </div>
                    <div className="text-slate-700 dark:text-slate-300 space-y-2 leading-relaxed font-sans">
                      <p><strong>Ideal Answer:</strong> Response B is superior.</p>
                      <p><strong>Expert Rationale:</strong> Response B is a perfect display of context tracking and instruction-following. It successfully complies with multiple client and user criteria: 1) Places the kids at <strong>CosmoCaixa Science Museum</strong> because they love science museums and the forecast predicts <strong>rain</strong>; 2) Respects the negative constraint not to recommend already visited attractions by avoiding <strong>Park Güell</strong> and <strong>Sagrada Família</strong>; 3) Recommends a <strong>vegetarian-friendly</strong>, <strong>peanut-safe</strong> lunch meeting their budget limit; 4) Locates dinner near <strong>La Rambla</strong> where they are staying; 5) Remains <strong>family-friendly</strong> without nightlife. Response A completely fails by recommending a previously visited attraction (Park Güell), recommending seafood (wife is vegetarian), planning outdoor shopping in the rain, and recommending a nightlife bar for a family with children.</p>
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
          <div className="space-y-12 animate-fade-in">
            
            <section className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm space-y-6">
              <div className="border-b border-slate-100 dark:border-slate-800 pb-3 flex justify-between items-center flex-wrap gap-2">
                <div>
                  <span className="text-[10px] font-extrabold text-indigo-600 dark:text-indigo-455 uppercase tracking-widest block font-mono">
                    Evaluation Project 4 (Advanced)
                  </span>
                  <h3 className="text-base font-bold text-slate-900 dark:text-white mt-0.5 mb-0">
                    Project Brief: Personal Health Coach (HealthAssist AI)
                  </h3>
                </div>
                <div className="bg-slate-105 dark:bg-slate-800 px-2.5 py-1 rounded text-[9px] font-mono text-slate-500 dark:text-slate-400 uppercase">
                  Primary Dimension: Context Tracking
                </div>
              </div>

              <div className="bg-slate-50 dark:bg-slate-950 p-4 rounded-xl border border-slate-150 dark:border-slate-850 text-xs space-y-3">
                <div className="grid grid-cols-2 gap-4 border-b border-slate-200 dark:border-slate-800 pb-2 mb-2 text-[11px] text-slate-500">
                  <div><strong>Secondary:</strong> Personalization, Safety, User Intent</div>
                  <div><strong>Brand Voice:</strong> Calm, Professional, Evidence-Based, Encouraging</div>
                </div>

                <div className="p-3 bg-indigo-500/5 rounded-lg border border-indigo-500/20 space-y-1 text-[11px] leading-normal text-slate-650 dark:text-slate-350">
                  <strong className="text-indigo-600 dark:text-indigo-400 block font-bold uppercase text-[9px] tracking-wider mb-1">System Instruction:</strong>
                  <ul className="list-disc pl-4 space-y-0.5 my-0">
                    <li>Always prioritize the <strong>most recent information</strong> provided by the user.</li>
                    <li>Never use outdated medical information from earlier in the conversation.</li>
                  </ul>
                </div>

                <div className="space-y-2 bg-white dark:bg-slate-900 p-3 rounded-lg border border-slate-100 dark:border-slate-850 text-slate-650 dark:text-slate-350">
                  <strong className="text-slate-900 dark:text-white block font-bold text-[10px] uppercase text-slate-400 mb-1">Conversation History:</strong>
                  <ul className="list-decimal pl-4 space-y-0.5 leading-relaxed font-sans text-xs">
                    <li>I'm trying to lose weight.</li>
                    <li>I'm 39 years old.</li>
                    <li>I was diagnosed with Type 2 Diabetes two years ago.</li>
                    <li>My doctor asked me to reduce my sugar intake.</li>
                    <li>I walk about 8,000 steps every day.</li>
                    <li>Actually, good news! My latest blood tests showed I no longer have diabetes. My doctor confirmed my blood sugar is now in the normal range.</li>
                    <li>However, I still want to continue eating healthier.</li>
                  </ul>
                </div>

                <p className="my-0"><strong>User Prompt:</strong></p>
                <p className="my-0 text-slate-800 dark:text-slate-200 font-medium pl-2 border-l-2 border-indigo-500 italic">
                  &ldquo;Can you recommend a dessert for tonight?&rdquo;
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                  <div className="bg-white dark:bg-slate-900 p-3.5 rounded-xl border border-slate-150 dark:border-slate-850">
                    <strong className="text-rose-600 block mb-2 font-bold text-xs">Response A</strong>
                    <p className="text-slate-700 dark:text-slate-300 my-0 leading-relaxed text-xs">
                      &ldquo;Since you're diabetic, you should completely avoid fruit because it contains sugar. Stick to sugar-free jelly only.&rdquo;
                    </p>
                  </div>

                  <div className="bg-white dark:bg-slate-900 p-3.5 rounded-xl border border-slate-150 dark:border-slate-850">
                    <strong className="text-emerald-600 block mb-2 font-bold text-xs">Response B</strong>
                    <p className="text-slate-700 dark:text-slate-300 my-0 leading-relaxed text-xs">
                      &ldquo;Congratulations on your improved health. Since your doctor confirmed your blood sugar has returned to normal, you still want to maintain healthy eating habits. A bowl of Greek yogurt with fresh berries or baked apples with cinnamon could be balanced dessert options. If you have any dietary concerns, continue following your doctor's advice.&rdquo;
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
                    const isSelected = rankings["ep4"] === option;
                    return (
                      <button
                        key={option}
                        onClick={() => handleRankSelect("ep4", option)}
                        disabled={submitted["ep4"]}
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
                        Identify every important context item correctly used by Response B:
                      </label>
                      <input 
                        type="text"
                        placeholder="Type your notes..."
                        value={notes["ep4"]?.["bCorrectContext"] || ""}
                        onChange={(e) => handleNoteChange("ep4", "bCorrectContext", e.target.value)}
                        disabled={submitted["ep4"]}
                        className="w-full text-xs p-2.5 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl outline-hidden focus:border-indigo-500"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] uppercase font-bold text-slate-400 dark:text-slate-550 mb-1">
                        Which outdated piece of context did Response A incorrectly rely on?
                      </label>
                      <input 
                        type="text"
                        placeholder="Type your notes..."
                        value={notes["ep4"]?.["aOutdatedContext"] || ""}
                        onChange={(e) => handleNoteChange("ep4", "aOutdatedContext", e.target.value)}
                        disabled={submitted["ep4"]}
                        className="w-full text-xs p-2.5 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl outline-hidden focus:border-indigo-500"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] uppercase font-bold text-slate-400 dark:text-slate-550 mb-1">
                        Did either response make unsupported assumptions? Explain:
                      </label>
                      <input 
                        type="text"
                        placeholder="Type your notes..."
                        value={notes["ep4"]?.["unsupportedAssumptions"] || ""}
                        onChange={(e) => handleNoteChange("ep4", "unsupportedAssumptions", e.target.value)}
                        disabled={submitted["ep4"]}
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
                    placeholder="Provide your professional rationale defending your ranking..."
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
                  <label className="block text-xs font-bold text-slate-855 dark:text-slate-205 mb-1">
                    4. Reflection: Professional AI systems often receive updated information during long conversations. Why is using the latest context more important than simply remembering everything?
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

                {submitted["ep4"] && (
                  <div className="p-4 rounded-xl bg-emerald-500/5 border border-emerald-500/20 text-xs space-y-3 mt-4 animate-fade-in">
                    <div className="flex items-center gap-2 text-emerald-700 dark:text-emerald-400 font-bold">
                      <CheckCircle2 className="w-4 h-4 shrink-0" />
                      <span>Expert Review (Revealed)</span>
                    </div>
                    <div className="text-slate-700 dark:text-slate-300 space-y-2 leading-relaxed font-sans">
                      <p><strong>Ideal Answer:</strong> Response B is superior.</p>
                      <p><strong>Expert Rationale:</strong> Response B successfully adheres to the system instruction to prioritize the <strong>most recent information</strong> (the user is no longer diabetic and blood sugar is in the normal range). It offers a personalized, safe, and balanced dessert option (Greek yogurt with berries or baked apples) matching the brand voice (calm, professional, evidence-based, encouraging) and user intent. Response A fails on <strong>Context Tracking</strong> and <strong>Safety</strong> by using outdated context (relying on diabetes diagnosis from earlier), and makes an unsupported/unscientific assumption that a diabetic must &ldquo;completely avoid fruit,&rdquo; which contradicts professional evidence-based nutritional guidelines.</p>
                    </div>
                  </div>
                )}
              </div>
            </section>

            {/* Step Navigation */}
            <div className="mt-12 pt-6 border-t border-slate-100 dark:border-slate-800 flex justify-between">
              <button
                onClick={() => {
                  setCurrentStep(4);
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className="text-slate-450 hover:text-slate-700 dark:hover:text-white text-xs font-bold flex items-center gap-1.5 transition-colors cursor-pointer"
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
                <span>Continue to Project 5</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

          </div>
        )}

        {/* ================= STEP 6: EVALUATION PROJECT 5 ================= */}
        {currentStep === 6 && (
          <div className="space-y-12 animate-fade-in">
            
            <section className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm space-y-6">
              <div className="border-b border-slate-100 dark:border-slate-800 pb-3 flex justify-between items-center flex-wrap gap-2">
                <div>
                  <span className="text-[10px] font-extrabold text-indigo-600 dark:text-indigo-455 uppercase tracking-widest block font-mono">
                    Evaluation Project 5 (Calibration Challenge)
                  </span>
                  <h3 className="text-base font-bold text-slate-900 dark:text-white mt-0.5 mb-0">
                    Project Brief: AI Career Coach (CareerPath AI)
                  </h3>
                </div>
                <div className="bg-slate-105 dark:bg-slate-800 px-2.5 py-1 rounded text-[9px] font-mono text-slate-500 dark:text-slate-400 uppercase">
                  Primary Dimension: Context Tracking
                </div>
              </div>

              <div className="bg-slate-50 dark:bg-slate-950 p-4 rounded-xl border border-slate-150 dark:border-slate-850 text-xs space-y-3">
                <div className="grid grid-cols-2 gap-4 border-b border-slate-200 dark:border-slate-800 pb-2 mb-2 text-[11px] text-slate-500">
                  <div><strong>Secondary:</strong> Personalization, Helpfulness, Instruction Following</div>
                  <div><strong>Brand Voice:</strong> Professional, Motivating, Honest, Practical</div>
                </div>

                <div className="p-3 bg-indigo-500/5 rounded-lg border border-indigo-500/20 space-y-1 text-[11px] leading-normal text-slate-650 dark:text-slate-350">
                  <strong className="text-indigo-600 dark:text-indigo-400 block font-bold uppercase text-[9px] tracking-wider mb-1">System Instruction:</strong>
                  <ul className="list-disc pl-4 space-y-0.5 my-0">
                    <li>Always provide career advice using the user's most recent goals and preferences.</li>
                    <li>Do not recommend careers that contradict the user's stated interests.</li>
                  </ul>
                </div>

                <div className="space-y-2 bg-white dark:bg-slate-900 p-3 rounded-lg border border-slate-100 dark:border-slate-850 text-slate-650 dark:text-slate-350">
                  <strong className="text-slate-900 dark:text-white block font-bold text-[10px] uppercase text-slate-400 mb-1">Conversation History:</strong>
                  <ul className="list-decimal pl-4 space-y-0.5 leading-relaxed font-sans text-xs">
                    <li>I currently work as an accountant.</li>
                    <li>I've started learning Python.</li>
                    <li>I enjoy solving analytical problems.</li>
                    <li>I don't enjoy sales jobs.</li>
                    <li>My long-term goal is to transition into AI Evaluation.</li>
                    <li>I recently completed an introductory course on prompt engineering.</li>
                    <li>I'm looking for fully remote work because I care for my elderly parents.</li>
                    <li>I don't mind taking another certification if it improves my chances.</li>
                    <li>Money is important, but long-term career growth matters even more.</li>
                  </ul>
                </div>

                <p className="my-0"><strong>User Prompt:</strong></p>
                <p className="my-0 text-slate-800 dark:text-slate-200 font-medium pl-2 border-l-2 border-indigo-500 italic">
                  &ldquo;Based on everything we've discussed, what should I focus on over the next three months?&rdquo;
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                  <div className="bg-white dark:bg-slate-900 p-3.5 rounded-xl border border-slate-150 dark:border-slate-850">
                    <strong className="text-rose-600 block mb-2 font-bold text-xs">Response A</strong>
                    <p className="text-slate-700 dark:text-slate-300 my-0 leading-relaxed text-xs">
                      &ldquo;Since you've already started learning Python and completed an introductory prompt engineering course, spend the next three months strengthening your AI evaluation skills through realistic practice projects. Apply for remote AI evaluator positions while continuing to improve your Python skills and completing one recognised certification. Your analytical background in accounting is a transferable strength that many evaluation projects value.&rdquo;
                    </p>
                  </div>

                  <div className="bg-white dark:bg-slate-900 p-3.5 rounded-xl border border-slate-150 dark:border-slate-850">
                    <strong className="text-emerald-600 block mb-2 font-bold text-xs font-mono text-[11px]">Response B</strong>
                    <p className="text-slate-700 dark:text-slate-300 my-0 leading-relaxed text-xs">
                      &ldquo;You should transition into enterprise software sales because it offers excellent commission opportunities. Spend the next three months developing persuasion skills and networking with sales managers.&rdquo;
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
                    const isSelected = rankings["ep5"] === option;
                    return (
                      <button
                        key={option}
                        onClick={() => handleRankSelect("ep5", option)}
                        disabled={submitted["ep5"]}
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
                        List every relevant piece of context used by Response A:
                      </label>
                      <input 
                        type="text"
                        placeholder="Type your notes..."
                        value={notes["ep5"]?.["aRelevantContext"] || ""}
                        onChange={(e) => handleNoteChange("ep5", "aRelevantContext", e.target.value)}
                        disabled={submitted["ep5"]}
                        className="w-full text-xs p-2.5 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl outline-hidden focus:border-indigo-500"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] uppercase font-bold text-slate-400 dark:text-slate-550 mb-1">
                        Identify every contradiction found in Response B:
                      </label>
                      <input 
                        type="text"
                        placeholder="Type your notes..."
                        value={notes["ep5"]?.["bContradictions"] || ""}
                        onChange={(e) => handleNoteChange("ep5", "bContradictions", e.target.value)}
                        disabled={submitted["ep5"]}
                        className="w-full text-xs p-2.5 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl outline-hidden focus:border-indigo-500"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] uppercase font-bold text-slate-400 dark:text-slate-550 mb-1">
                        If you were performing quality assurance, would either response require revision before deployment? Explain:
                      </label>
                      <input 
                        type="text"
                        placeholder="Type your notes..."
                        value={notes["ep5"]?.["deploymentNeeds"] || ""}
                        onChange={(e) => handleNoteChange("ep5", "deploymentNeeds", e.target.value)}
                        disabled={submitted["ep5"]}
                        className="w-full text-xs p-2.5 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl outline-hidden focus:border-indigo-500"
                      />
                    </div>
                  </div>
                </div>

                <div className="space-y-2 pt-2">
                  <label className="block text-xs font-bold text-slate-855 dark:text-slate-205 mb-1">
                    3. Professional Rationale (150–200 words):
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Provide your professional rationale defending your decision with specific conversation history evidence..."
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
                  <label className="block text-xs font-bold text-slate-855 dark:text-slate-205 mb-1">
                    4. Reflection: Imagine another evaluator argues: &ldquo;Response B could still be useful because sales careers pay well.&rdquo; Using only the project brief and evaluation criteria, explain why you would agree or disagree.
                  </label>
                  <textarea
                    rows={2}
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
                    Submit Project 5
                  </button>
                )}

                {submitted["ep5"] && (
                  <div className="p-4 rounded-xl bg-emerald-500/5 border border-emerald-500/20 text-xs space-y-3 mt-4 animate-fade-in">
                    <div className="flex items-center gap-2 text-emerald-700 dark:text-emerald-400 font-bold">
                      <CheckCircle2 className="w-4 h-4 shrink-0" />
                      <span>Expert Review (Revealed)</span>
                    </div>
                    <div className="text-slate-700 dark:text-slate-300 space-y-2 leading-relaxed font-sans">
                      <p><strong>Preferred Response:</strong> Response A</p>
                      <p><strong>Expert Rationale:</strong> Response A consistently retrieves and applies the user's stated goals, preferences, and constraints. It acknowledges the user's accounting background, Python learning, prompt engineering experience, interest in AI evaluation, desire for remote work, willingness to gain further certification, and preference for long-term career growth. The recommendations are personalised and aligned with the user's objectives.</p>
                      <p>Response B ignores multiple pieces of critical context, recommends a career the user explicitly stated they do not enjoy, and fails to personalise its advice. Although software sales can be financially rewarding, that recommendation directly contradicts the user's stated interests and therefore performs poorly on the primary evaluation dimension.</p>
                      <p><strong>Calibration Notes:</strong> Professional evaluators should prioritise <strong>Context Tracking</strong> over general career advice. A recommendation can be reasonable in isolation but still fail if it ignores or contradicts the conversation history.</p>
                      <p><strong>Key Learning Point:</strong> The best AI responses don't simply answer the latest prompt—they integrate the most relevant information from the entire conversation.</p>
                    </div>
                  </div>
                )}
              </div>
            </section>

            {/* Step Navigation */}
            <div className="mt-12 pt-6 border-t border-slate-100 dark:border-slate-800 flex justify-between">
              <button
                onClick={() => {
                  setCurrentStep(5);
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className="text-slate-450 hover:text-slate-700 dark:hover:text-white text-xs font-bold flex items-center gap-1.5 transition-colors cursor-pointer"
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
                  You have completed Lesson 6: Context Tracking & Information Retrieval Evaluation.
                </p>
                <p className="text-xs text-slate-500 dark:text-slate-400 max-w-md mx-auto leading-relaxed mt-2">
                  You have now mastered one of the fastest-growing areas of modern AI evaluation and developed the skills needed to assess conversational AI systems that rely on long-context understanding, personalisation, and multi-turn reasoning.
                </p>
              </div>
            </div>

            <section className="bg-slate-50 dark:bg-slate-900/40 p-6 rounded-2xl border border-slate-150 dark:border-slate-800 space-y-5">
              <h3 className="text-base font-bold text-slate-900 dark:text-white mt-0 mb-1">
                Lesson Summary
              </h3>
              <p className="text-xs leading-relaxed text-slate-600 dark:text-slate-400 my-0">
                Throughout this lesson you learned that professional AI evaluation is not only about judging the quality of a response—it is also about determining whether the AI correctly understands and uses context.
              </p>
              <p className="text-xs leading-relaxed text-slate-600 dark:text-slate-400 my-0">
                Modern AI assistants are expected to personalise responses, remember important information, adapt to changing circumstances, and ignore irrelevant details. Evaluators play a crucial role in ensuring models behave consistently across long conversations.
              </p>
            </section>

            <section className="bg-white dark:bg-slate-900/40 p-6 rounded-2xl border border-slate-150 dark:border-slate-800 space-y-4">
              <h3 className="text-base font-bold text-slate-900 dark:text-white mt-0 mb-1">
                Key Takeaways
              </h3>
              <ul className="space-y-2 pl-4 list-disc marker:text-indigo-500 text-xs text-slate-650 dark:text-slate-400 my-0">
                <li>Always read the <strong>entire conversation history</strong> before evaluating a response.</li>
                <li>Identify which pieces of context are <strong>relevant</strong>, <strong>irrelevant</strong>, or <strong>outdated</strong>.</li>
                <li>Prioritise the <strong>most recent</strong> user information when earlier context has been updated.</li>
                <li>Evaluate whether the response successfully personalises its recommendations.</li>
                <li>Distinguish between <strong>ignoring context</strong>, <strong>contradicting context</strong>, and <strong>hallucinating context</strong>.</li>
                <li>Base every ranking on the <strong>Project Brief</strong> and <strong>Primary Evaluation Dimension</strong>, not on personal preference.</li>
                <li>Professional rationales should reference specific evidence from the conversation history to justify evaluation decisions.</li>
              </ul>
            </section>

            <div className="p-5 bg-indigo-500/5 rounded-2xl border border-indigo-500/10 space-y-2">
              <h4 className="text-xs font-bold text-slate-950 dark:text-white uppercase tracking-wider font-mono my-0">
                Next Lesson
              </h4>
              <p className="text-xs leading-relaxed text-slate-600 dark:text-slate-400 my-0">
                <strong>Response Ranking & Preference Evaluation</strong>, where you'll learn how professional evaluators compare multiple high-quality AI responses, resolve close decisions, and write calibration-quality ranking rationales.
              </p>
            </div>

            {/* Step Navigation */}
            <div className="mt-12 pt-6 border-t border-slate-100 dark:border-slate-800 flex justify-between">
              <button
                onClick={() => {
                  setCurrentStep(6);
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className="text-slate-450 hover:text-slate-700 dark:hover:text-white text-xs font-bold flex items-center gap-1.5 transition-colors cursor-pointer"
              >
                <ChevronLeft className="w-4 h-4" />
                <span>Project 5</span>
              </button>
              
              <button
                onClick={handleFinishPartA}
                className="bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl px-6 py-3 text-xs font-bold flex items-center gap-2 transition-all cursor-pointer shadow-sm hover:shadow-md"
              >
                <Check className="w-4 h-4" />
                <span>Complete & Continue to Lesson 7</span>
              </button>
            </div>
          </div>
        )}

      </article>
    </div>
  );
}
