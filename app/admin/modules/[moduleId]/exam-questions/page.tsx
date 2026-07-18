import Link from "next/link";
import { Plus, ArrowLeft } from "lucide-react";
import { getAdminExamQuestions, getAdminModule } from "@/lib/admin/queries";
import { deleteExamQuestion } from "@/lib/actions/admin-exam-questions";
import DeleteButton from "../../../DeleteButton";

export default async function ExamQuestionsPage({
  params,
}: {
  params: Promise<{ moduleId: string }>;
}) {
  const { moduleId } = await params;
  const [questions, mod] = await Promise.all([
    getAdminExamQuestions(moduleId),
    getAdminModule(moduleId),
  ]);

  async function boundDelete(id: string) {
    "use server";
    return deleteExamQuestion(id, moduleId);
  }

  return (
    <div className="space-y-6">
      <Link
        href="/admin/modules"
        className="flex items-center gap-2 text-xs font-bold text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
      >
        <ArrowLeft className="w-3.5 h-3.5" />
        Back to Modules
      </Link>

      <div className="flex items-center justify-between">
        <h2 className="text-xl font-black text-slate-900 dark:text-white">
          Exam Questions — {mod?.title ?? moduleId}
        </h2>
        <Link
          href={`/admin/modules/${moduleId}/exam-questions/new`}
          className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold px-4 py-2 rounded-xl text-xs transition-colors flex items-center gap-1.5"
        >
          <Plus className="w-4 h-4" />
          New Question
        </Link>
      </div>

      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden">
        <table className="w-full text-xs">
          <thead className="bg-slate-50 dark:bg-slate-850 text-slate-500 dark:text-slate-400 uppercase tracking-wider font-bold">
            <tr>
              <th className="text-left px-4 py-3">Question</th>
              <th className="text-left px-4 py-3">Category</th>
              <th className="text-left px-4 py-3">Order</th>
              <th className="text-right px-4 py-3">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 dark:divide-slate-850">
            {questions.map((q) => (
              <tr key={q.id}>
                <td className="px-4 py-3 font-semibold text-slate-900 dark:text-white max-w-md truncate">
                  {q.question || "(untitled)"}
                  <div className="text-slate-400 font-normal">{q.id}</div>
                </td>
                <td className="px-4 py-3 text-slate-600 dark:text-slate-300">{q.category}</td>
                <td className="px-4 py-3 text-slate-600 dark:text-slate-300">{q.sort_order}</td>
                <td className="px-4 py-3 text-right space-x-3">
                  <Link
                    href={`/admin/modules/${moduleId}/exam-questions/${q.id}`}
                    className="text-indigo-600 dark:text-indigo-400 font-bold hover:underline"
                  >
                    Edit
                  </Link>
                  <DeleteButton id={q.id} action={boundDelete} label={q.id} />
                </td>
              </tr>
            ))}
            {questions.length === 0 && (
              <tr>
                <td colSpan={4} className="px-4 py-8 text-center text-slate-400">
                  No exam questions yet.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
