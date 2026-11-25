-- ---------------------------------------------------------------------------
-- Binit Nayak — portfolio backend
--
-- Run this in Supabase → SQL Editor (or `supabase db push`) to set up:
--   1. public.messages    — contact form submissions (insert-only for visitors)
--   2. public.page_views  — small aggregated view counter
--
-- Security model
--   * RLS enabled on both tables.
--   * messages: anon/authenticated may INSERT only. There are no SELECT,
--     UPDATE or DELETE policies, so no one can read submissions with the anon
--     key. The site's own route handler reads/writes with the service role key,
--     which never reaches the browser.
--   * page_views: no anon access at all. The counter is incremented by the
--     server through a SECURITY DEFINER function.
-- Safe to re-run: every statement is idempotent.
-- ---------------------------------------------------------------------------

create extension if not exists pgcrypto;

-- 1. Contact form submissions ------------------------------------------------
create table if not exists public.messages (
  id uuid primary key default gen_random_uuid(),
  name text not null check (char_length(btrim(name)) between 2 and 80),
  email text not null check (char_length(email) <= 254 and position('@' in email) > 1),
  message text not null check (char_length(btrim(message)) between 10 and 2000),
  created_at timestamptz not null default now()
);

comment on table public.messages is 'Contact form submissions from the portfolio site. Insert-only for anonymous visitors.';

create index if not exists messages_created_at_idx on public.messages (created_at desc);

alter table public.messages enable row level security;

-- Visitors may add a message…
drop policy if exists "messages: anon can insert" on public.messages;
create policy "messages: anon can insert"
  on public.messages
  for insert
  to anon, authenticated
  with check (true);

-- …but reads, edits and deletes are deliberately left without a policy, which
-- means they are denied for every non service-role request.
grant insert on public.messages to anon, authenticated;
revoke select, update, delete on public.messages from anon, authenticated;

-- 2. Page view counter -------------------------------------------------------
create table if not exists public.page_views (
  path text primary key,
  views bigint not null default 0,
  updated_at timestamptz not null default now()
);

comment on table public.page_views is 'Aggregated page views per path. Written only by the server.';

alter table public.page_views enable row level security;
-- No policies on purpose: readable only with the service role key.

revoke all on public.page_views from anon, authenticated;

create or replace function public.increment_page_view(p_path text)
returns bigint
language plpgsql
security definer
set search_path = public
as $$
declare
  new_total bigint;
begin
  insert into public.page_views (path, views)
  values (left(coalesce(p_path, '/'), 200), 1)
  on conflict (path) do update
    set views = public.page_views.views + 1,
        updated_at = now();

  select views into new_total
  from public.page_views
  where path = left(coalesce(p_path, '/'), 200);

  return new_total;
end;
$$;

revoke all on function public.increment_page_view(text) from public, anon, authenticated;
