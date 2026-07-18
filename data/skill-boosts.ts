import type { UserStats } from "../types";

type SkillBoosts = Partial<UserStats["skills"]>;

// Transcribed exactly from the hardcoded per-ID branches that used to live
// in App.tsx's handleLessonComplete, before skill boosts became a data
// field (lessons.skill_boosts). Used only by scripts/seed.ts to backfill
// existing content — do not edit these to change live behavior; edit the
// lesson's skill_boosts via the admin dashboard instead once that editor
// ships.
export const LESSON_SKILL_BOOSTS: Record<string, SkillBoosts> = {
  p2_m1_l1: {
    promptEvaluation: 10,
    responseRanking: 12,
    factChecking: 10,
    instructionFollowing: 12,
  },
  p2_m1_l2: {
    instructionFollowing: 15,
    promptEvaluation: 10,
    responseRanking: 10,
  },
  p2_m1_l3: {
    factChecking: 15,
    responseRanking: 10,
    promptEvaluation: 5,
  },
  p2_m1_l4: {
    responseRanking: 15,
    instructionFollowing: 10,
    promptEvaluation: 10,
    reasoning: 5,
  },
  p2_m1_l5: {
    promptEvaluation: 15,
    responseRanking: 10,
    instructionFollowing: 10,
    reasoning: 5,
  },
  p2_m1_l6: {
    responseRanking: 15,
    promptEvaluation: 10,
    reasoning: 10,
    factChecking: 5,
  },
  p2_m1_l7: {
    responseRanking: 20,
    promptEvaluation: 10,
    reasoning: 10,
  },
  les_foundations: { promptEvaluation: 8, responseRanking: 6 },
  l1: { promptEvaluation: 8, responseRanking: 6 },
  les_ranking: { responseRanking: 12, reasoning: 8 },
  l2: { responseRanking: 12, reasoning: 8 },
  les_safety: { safetyReview: 15 },
  l3: { safetyReview: 15 },
  les_hallucinations: { factChecking: 14 },
  l4: { factChecking: 14 },
  les_instruction_following: { instructionFollowing: 12, promptEvaluation: 5 },
  l5: { instructionFollowing: 12, promptEvaluation: 5 },
  m4_l1: { responseRanking: 12, reasoning: 8 },
  m5_l1: { promptEvaluation: 10, responseRanking: 10 },
  m2_l1: { promptEvaluation: 10, responseRanking: 10 },
  m3_l1: { factChecking: 12, promptEvaluation: 8 },
  m3_l2: { instructionFollowing: 12, annotation: 10 },
  l6: {
    annotation: 8,
    responseRanking: 6,
    factChecking: 6,
    safetyReview: 6,
  },
};

// Transcribed exactly from the hardcoded per-activeModuleId branches that
// used to live in App.tsx's handleSimulationComplete. "m1" corresponds to
// the previous `else` branch (any module that wasn't m2/m3/m4).
export const MODULE_SIM_SKILL_BOOSTS: Record<string, SkillBoosts> = {
  m1: { factChecking: 10, safetyReview: 8, annotation: 15 },
  m2: { factChecking: 12, promptEvaluation: 10 },
  m3: { instructionFollowing: 15, annotation: 12 },
  m4: { responseRanking: 15, reasoning: 12 },
};
