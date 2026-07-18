-- Adds data-driven skill-boost fields, replacing the hardcoded per-ID
-- skill bonus logic that used to live in App.tsx. Run this in the
-- Supabase Dashboard SQL Editor after 0001_init.sql.

alter table public.lessons
  add column skill_boosts jsonb not null default '{}'::jsonb;

alter table public.modules
  add column sim_skill_boosts jsonb not null default '{}'::jsonb;
