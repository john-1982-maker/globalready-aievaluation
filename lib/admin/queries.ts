import { createClient } from "@/lib/supabase/server";

export interface AdminJobRow {
  id: string;
  title: string;
  pay_rate: string | null;
  pay_rate_min_cents: number | null;
  referral_reward: string | null;
  badge: string | null;
  hired_text: string | null;
  category: "project-based" | "one-time" | "talent-network";
  field: string;
  avatars: string[];
  required_lesson_id: string | null;
  required_lesson_name: string | null;
  description: string | null;
  skills_needed: string[];
  application_url: string;
  is_active: boolean;
  sort_order: number;
}

export interface AdminAchievementRow {
  id: string;
  title: string;
  description: string | null;
  icon: string | null;
  req_metric: string | null;
  sort_order: number;
}

export interface AdminModuleRow {
  id: string;
  title: string;
  description: string | null;
  simulation_intro: { scenario: string; objective: string } | null;
  sim_skill_boosts: Record<string, number>;
  sort_order: number;
}

export interface AdminSimulationTaskRow {
  id: string;
  module_id: string;
  type: string | null;
  title: string | null;
  prompt: string | null;
  responses: { letter: string; text: string }[] | null;
  response_single: string | null;
  response: string | null;
  options: string[];
  correct_option_index: number | null;
  ideal_justification_keywords: string[];
  rubric: string | null;
  explanation: string | null;
  ideal_rating: number | null;
  ideal_flags: { hallucination: boolean; safety: boolean; formatting: boolean } | null;
  category: string | null;
  sort_order: number;
}

export interface AdminExamQuestionRow {
  id: string;
  module_id: string;
  type: string | null;
  category: string | null;
  question: string | null;
  options: string[];
  correct_option_index: number | null;
  explanation: string | null;
  part: string | null;
  scenario: string | null;
  sort_order: number;
}

export async function getAdminJobs(): Promise<AdminJobRow[]> {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("jobs")
    .select("*")
    .order("sort_order");

  if (error) throw new Error(`getAdminJobs: ${error.message}`);
  return data ?? [];
}

export async function getAdminJob(id: string): Promise<AdminJobRow | null> {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("jobs")
    .select("*")
    .eq("id", id)
    .maybeSingle();

  if (error) throw new Error(`getAdminJob: ${error.message}`);
  return data;
}

export async function getAdminAchievements(): Promise<AdminAchievementRow[]> {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("achievements")
    .select("*")
    .order("sort_order");

  if (error) throw new Error(`getAdminAchievements: ${error.message}`);
  return data ?? [];
}

export async function getAdminAchievement(
  id: string,
): Promise<AdminAchievementRow | null> {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("achievements")
    .select("*")
    .eq("id", id)
    .maybeSingle();

  if (error) throw new Error(`getAdminAchievement: ${error.message}`);
  return data;
}

export async function getAdminModules(): Promise<AdminModuleRow[]> {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("modules")
    .select("*")
    .order("sort_order");

  if (error) throw new Error(`getAdminModules: ${error.message}`);
  return data ?? [];
}

export async function getAdminModule(
  id: string,
): Promise<AdminModuleRow | null> {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("modules")
    .select("*")
    .eq("id", id)
    .maybeSingle();

  if (error) throw new Error(`getAdminModule: ${error.message}`);
  return data;
}

export async function getAdminSimulationTasks(
  moduleId: string,
): Promise<AdminSimulationTaskRow[]> {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("simulation_tasks")
    .select("*")
    .eq("module_id", moduleId)
    .order("sort_order");

  if (error) throw new Error(`getAdminSimulationTasks: ${error.message}`);
  return data ?? [];
}

export async function getAdminSimulationTask(
  id: string,
): Promise<AdminSimulationTaskRow | null> {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("simulation_tasks")
    .select("*")
    .eq("id", id)
    .maybeSingle();

  if (error) throw new Error(`getAdminSimulationTask: ${error.message}`);
  return data;
}

export async function getAdminExamQuestions(
  moduleId: string,
): Promise<AdminExamQuestionRow[]> {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("exam_questions")
    .select("*")
    .eq("module_id", moduleId)
    .order("sort_order");

  if (error) throw new Error(`getAdminExamQuestions: ${error.message}`);
  return data ?? [];
}

export async function getAdminExamQuestion(
  id: string,
): Promise<AdminExamQuestionRow | null> {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("exam_questions")
    .select("*")
    .eq("id", id)
    .maybeSingle();

  if (error) throw new Error(`getAdminExamQuestion: ${error.message}`);
  return data;
}
