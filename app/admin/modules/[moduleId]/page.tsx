import { notFound } from "next/navigation";
import { getAdminModule } from "@/lib/admin/queries";
import ModuleForm from "../ModuleForm";

export default async function EditModulePage({
  params,
}: {
  params: Promise<{ moduleId: string }>;
}) {
  const { moduleId } = await params;
  const mod = await getAdminModule(moduleId);

  if (!mod) notFound();

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-black text-slate-900 dark:text-white">
        Edit Module
      </h2>
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6">
        <ModuleForm module={mod} />
      </div>
    </div>
  );
}
