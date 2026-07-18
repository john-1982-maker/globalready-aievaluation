"use client";

const SKILL_KEYS = [
  "promptEvaluation",
  "responseRanking",
  "factChecking",
  "safetyReview",
  "annotation",
  "reasoning",
  "reasoningEvaluation",
  "instructionFollowing",
] as const;

type SkillKey = (typeof SKILL_KEYS)[number];

const SKILL_LABELS: Record<SkillKey, string> = {
  promptEvaluation: "Prompt Evaluation",
  responseRanking: "Response Ranking",
  factChecking: "Fact Checking",
  safetyReview: "Safety Review",
  annotation: "Annotation",
  reasoning: "Reasoning",
  reasoningEvaluation: "Reasoning Evaluation",
  instructionFollowing: "Instruction Following",
};

interface SkillBoostsEditorProps {
  value: Partial<Record<SkillKey, number>>;
  onChange: (value: Partial<Record<SkillKey, number>>) => void;
}

export default function SkillBoostsEditor({
  value,
  onChange,
}: SkillBoostsEditorProps) {
  const handleChange = (key: SkillKey, raw: string) => {
    const next = { ...value };
    const num = raw === "" ? undefined : Number(raw);
    if (num === undefined || num === 0 || Number.isNaN(num)) {
      delete next[key];
    } else {
      next[key] = num;
    }
    onChange(next);
  };

  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
      {SKILL_KEYS.map((key) => (
        <div key={key}>
          <label className="text-[10px] text-slate-455 font-bold uppercase tracking-wider block mb-1">
            {SKILL_LABELS[key]}
          </label>
          <input
            type="number"
            value={value[key] ?? ""}
            onChange={(e) => handleChange(key, e.target.value)}
            placeholder="0"
            className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-850 rounded-lg px-2.5 py-2 text-xs text-slate-900 dark:text-white focus:outline-hidden focus:ring-2 focus:ring-indigo-500"
          />
        </div>
      ))}
    </div>
  );
}
