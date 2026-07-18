"use client";

interface OptionsEditorProps {
  options: string[];
  correctIndex: number;
  onChange: (options: string[], correctIndex: number) => void;
}

export default function OptionsEditor({
  options,
  correctIndex,
  onChange,
}: OptionsEditorProps) {
  const updateOption = (idx: number, value: string) => {
    const next = [...options];
    next[idx] = value;
    onChange(next, correctIndex);
  };

  const addOption = () => {
    onChange([...options, ""], correctIndex);
  };

  const removeOption = (idx: number) => {
    const next = options.filter((_, i) => i !== idx);
    const nextCorrect =
      correctIndex === idx ? 0 : correctIndex > idx ? correctIndex - 1 : correctIndex;
    onChange(next, nextCorrect);
  };

  return (
    <div className="space-y-2">
      {options.map((opt, idx) => (
        <div key={idx} className="flex items-center gap-2">
          <input
            type="radio"
            checked={correctIndex === idx}
            onChange={() => onChange(options, idx)}
            title="Mark as correct answer"
            className="w-3.5 h-3.5 shrink-0"
          />
          <input
            className="flex-1 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-850 rounded-lg px-3 py-2 text-xs text-slate-900 dark:text-white focus:outline-hidden focus:ring-2 focus:ring-indigo-500"
            value={opt}
            onChange={(e) => updateOption(idx, e.target.value)}
            placeholder={`Option ${idx + 1}`}
          />
          <button
            type="button"
            onClick={() => removeOption(idx)}
            className="text-rose-500 hover:text-rose-600 text-xs font-bold px-2 shrink-0"
          >
            Remove
          </button>
        </div>
      ))}
      <button
        type="button"
        onClick={addOption}
        className="text-indigo-600 dark:text-indigo-400 text-xs font-bold hover:underline"
      >
        + Add Option
      </button>
    </div>
  );
}
