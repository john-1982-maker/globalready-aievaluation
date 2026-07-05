import React, { useState } from "react";
import { 
  ArrowLeft, ChevronRight, Check, Target, Lightbulb, BookOpen, Eye, HelpCircle, ShieldAlert, UserCheck, Award, CheckCircle2
} from "lucide-react";

interface Part2IntroLessonViewProps {
  onBack: () => void;
  onComplete: (xpEarned: number) => void;
}

export default function Part2IntroLessonView({ onBack, onComplete }: Part2IntroLessonViewProps) {
  const [currentStep, setCurrentStep] = useState<number>(1); // 1: Welcome & Shift, 2: Framework & Objectives, 3: Core Principle & Complete

  const handleFinish = () => {
    onComplete(50); // Complete lesson and award 50 XP
  };

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-8 md:py-12 animate-fade-in pb-24">
      
      {/* Sleek, minimal back navigation */}
      <div className="mb-10 flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-4">
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-xs font-bold text-slate-400 hover:text-indigo-600 dark:text-slate-500 dark:hover:text-indigo-400 transition-colors uppercase tracking-wider cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Part 2 Overview
        </button>
        
        {/* Simple book page indicator */}
        <span className="text-xs font-mono text-slate-400 dark:text-slate-500 uppercase tracking-wider">
          Section {currentStep} of 3
        </span>
      </div>

      {/* Primary Typographic Canvas */}
      <article className="prose prose-slate dark:prose-invert max-w-none text-slate-700 dark:text-slate-350">
        
        {/* Lesson Title */}
        <div className="mb-8">
          <span className="text-indigo-600 dark:text-indigo-400 text-xs font-mono uppercase tracking-widest font-extrabold block mb-2">
            Part 2 &bull; Introduction
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white font-sans leading-tight">
            Professional AI Evaluation Skills
          </h1>
          <div className="h-1 w-20 bg-indigo-600 dark:bg-indigo-500 mt-4 rounded-full" />
        </div>

        {/* ----------------- STEP 1: WELCOME & THE SHIFT ----------------- */}
        {currentStep === 1 && (
          <div className="space-y-8 animate-fade-in">
            <section className="space-y-6">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white tracking-tight mt-0">
                Welcome to Part 2
              </h2>
              <p className="text-base leading-relaxed">
                Congratulations on completing Foundations! In Part 1, you learned:
              </p>
              
              <ul className="space-y-2 my-4 pl-5 list-disc marker:text-indigo-500">
                <li>What AI evaluation is</li>
                <li>How AI models learn (SFT vs. RLHF)</li>
                <li>How ChatGPT-like systems are built and aligned</li>
                <li>The core mindset of a professional evaluator</li>
              </ul>

              <p className="text-base leading-relaxed">
                You now understand the theory.
              </p>
              <p className="text-base leading-relaxed font-bold text-slate-900 dark:text-white border-l-4 border-indigo-500 pl-4 py-1.5 bg-indigo-50/20 dark:bg-indigo-950/10 my-6">
                But understanding AI evaluation and performing AI evaluation are two very different things.
              </p>
              <p className="text-base leading-relaxed">
                This is where Part 2 begins.
              </p>
            </section>

            <hr className="border-slate-100 dark:border-slate-800" />

            <section className="space-y-6">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
                The Shift From Learning to Doing
              </h2>
              <p className="text-base leading-relaxed">
                Think about learning to drive a car. You can read books about driving, watch videos, and memorize road signs.
              </p>
              <p className="text-base leading-relaxed font-semibold text-slate-900 dark:text-white italic pl-4 border-l-4 border-amber-500 bg-amber-500/5 py-1.5 my-4">
                But eventually, you must sit behind the wheel.
              </p>
              <p className="text-base leading-relaxed">
                AI evaluation works the same way. From this point forward, you will begin evaluating responses, identifying mistakes, ranking outputs, reviewing images, assessing safety, and writing professional justifications.
              </p>
              <p className="text-base leading-relaxed font-bold text-slate-900 dark:text-white">
                You will start thinking like a real evaluator.
              </p>
            </section>

            <div className="pt-6 flex justify-end">
              <button
                onClick={() => setCurrentStep(2)}
                className="py-3 px-6 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer shadow-xs hover:shadow-md"
              >
                <span>Continue Reading</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {/* ----------------- STEP 2: THE FRAMEWORK & OBJECTIVES ----------------- */}
        {currentStep === 2 && (
          <div className="space-y-8 animate-fade-in">
            <section className="space-y-6">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
                What Makes a Great Evaluator?
              </h2>
              <p className="text-base leading-relaxed">
                The best evaluators are not necessarily the smartest people—they are the most consistent.
              </p>
              <p className="text-base leading-relaxed">
                Great evaluators:
              </p>
              <ul className="space-y-2 my-4 pl-5 list-disc marker:text-indigo-500">
                <li>Follow instructions carefully and respect strict limits</li>
                <li>Pay close attention to detail and verify all facts</li>
                <li>Remain objective and separate opinions from criteria</li>
                <li>Explain their reasoning with clear, structured prose</li>
              </ul>
            </section>

            <hr className="border-slate-100 dark:border-slate-800" />

            <section className="space-y-6">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
                The Evaluation Framework
              </h2>
              <p className="text-base leading-relaxed">
                Throughout Part 2, you will repeatedly use seven core evaluation dimensions:
              </p>

              <div className="my-8 space-y-6 pl-4 border-l-2 border-indigo-100 dark:border-slate-800">
                {[
                  { id: 1, title: "Instruction Following", desc: "Did the AI do exactly what the user asked?" },
                  { id: 2, title: "Accuracy & Factuality", desc: "Are all facts, figures, and claims correct?" },
                  { id: 3, title: "Completeness", desc: "Did the response fully answer all parts of the question?" },
                  { id: 4, title: "Clarity & Style", desc: "Is the response easy to read and appropriately formatted?" },
                  { id: 5, title: "Helpfulness & Value", desc: "Does the response provide real value to the user?" },
                  { id: 6, title: "Safety & Ethics", desc: "Is the response appropriate, responsible, and compliant?" },
                  { id: 7, title: "User Intent", desc: "Does the response solve the user's actual underlying problem?" }
                ].map((item) => (
                  <div key={item.id} className="space-y-1">
                    <h3 className="text-base font-extrabold text-slate-900 dark:text-white flex items-center gap-2">
                      <span className="text-xs bg-indigo-50 dark:bg-indigo-950/40 text-indigo-600 dark:text-indigo-400 w-6 h-6 rounded-full flex items-center justify-center font-mono">
                        {item.id}
                      </span>
                      {item.title}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400 text-sm pl-8">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            <div className="pt-6 flex justify-between">
              <button
                onClick={() => setCurrentStep(1)}
                className="py-3 px-6 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-750 text-slate-700 dark:text-slate-350 rounded-xl text-xs font-bold transition-all cursor-pointer"
              >
                Back
              </button>
              <button
                onClick={() => setCurrentStep(3)}
                className="py-3 px-6 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer shadow-xs hover:shadow-md"
              >
                <span>Continue Reading</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {/* ----------------- STEP 3: THE CORE PRINCIPLE & COMPLETE ----------------- */}
        {currentStep === 3 && (
          <div className="space-y-8 animate-fade-in">
            <section className="space-y-6">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
                A Different Type of Learning
              </h2>
              <p className="text-base leading-relaxed">
                Part 1 focused on understanding. Part 2 focuses on **judgment**.
              </p>
              <p className="text-base leading-relaxed">
                There will not always be one perfect answer. Sometimes two responses may both be correct. Your job is to determine which response better serves the user and explain why. That is exactly what professional evaluators do every day.
              </p>
            </section>

            <hr className="border-slate-100 dark:border-slate-800" />

            <section className="space-y-6">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
                Before You Continue
              </h2>
              <p className="text-base leading-relaxed">
                As you move into Part 2, remember one simple principle:
              </p>

              <div className="relative my-8 pl-6 border-l-4 border-indigo-600 dark:border-indigo-400 bg-indigo-50/30 dark:bg-indigo-950/10 py-4 pr-4 rounded-r-2xl">
                <blockquote className="text-lg md:text-xl font-medium italic text-slate-900 dark:text-white leading-relaxed margin-0">
                  &ldquo;The goal is not to find an answer you personally like.
                  <br />
                  The goal is to identify the answer that best satisfies the user's request.&rdquo;
                </blockquote>
              </div>

              <p className="text-base leading-relaxed">
                Master that principle, and you will already be thinking like a professional AI evaluator.
              </p>
              <p className="text-lg font-bold text-slate-950 dark:text-white">
                Let's begin!
              </p>
            </section>

            {/* Completion Box */}
            <div className="bg-emerald-500/10 dark:bg-emerald-500/5 border border-emerald-500/20 rounded-2xl p-6 text-center space-y-4">
              <div className="w-12 h-12 bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto">
                <Award className="w-6 h-6 text-emerald-500" />
              </div>
              <div className="space-y-1">
                <h4 className="font-bold text-slate-900 dark:text-white text-base">You've Completed the Introduction!</h4>
                <p className="text-xs text-slate-500 dark:text-slate-400">Claim 50 XP and unlock Lesson 1 of the learning track.</p>
              </div>
            </div>

            <div className="pt-6 flex justify-between">
              <button
                onClick={() => setCurrentStep(2)}
                className="py-3 px-6 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-750 text-slate-700 dark:text-slate-350 rounded-xl text-xs font-bold transition-all cursor-pointer"
              >
                Back
              </button>
              <button
                onClick={handleFinish}
                className="py-3 px-6 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-xs hover:shadow-md"
              >
                <CheckCircle2 className="w-4 h-4" />
                <span>Complete & Continue to Lesson 1</span>
              </button>
            </div>
          </div>
        )}

      </article>

    </div>
  );
}
