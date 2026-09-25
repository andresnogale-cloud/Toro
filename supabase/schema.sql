-- Toro: accounts, synced progress and friends.
-- Run this once in your Supabase project: SQL Editor > New query > paste > Run.

-- Public card for each learner: name, ticker and personal stock, used by the friends market.
create table if not exists public.profiles (
  id           uuid primary key references auth.users (id) on delete cascade,
  name         text not null default 'You' check (char_length(name) <= 24),
  ticker       text not null default 'YOU' check (char_length(ticker) <= 4),
  friend_code  text not null unique check (friend_code ~ '^[A-Z2-9]{6}$'),
  price        numeric(12,2) not null default 10,
  day_change   numeric(8,2)  not null default 0,
  xp           integer not null default 0,
  streak       integer not null default 0,
  league       text not null default 'Bronze',
  updated_at   timestamptz not null default now()
);

-- Private copy of each learner's full progress and practice account.
create table if not exists public.app_state (
  user_id     uuid primary key references auth.users (id) on delete cascade,
  state       jsonb not null,
  updated_at  timestamptz not null default now()
);

-- Who follows whom.
create table if not exists public.follows (
  follower    uuid not null references auth.users (id) on delete cascade,
  followee    uuid not null references public.profiles (id) on delete cascade,
  created_at  timestamptz not null default now(),
  primary key (follower, followee),
  check (follower <> followee)
);

alter table public.profiles  enable row level security;
alter table public.app_state enable row level security;
alter table public.follows   enable row level security;

-- Profiles: signed-in users can look up cards (needed to follow by code); each user edits only their own.
drop policy if exists "profiles: read when signed in" on public.profiles;
create policy "profiles: read when signed in" on public.profiles for select to authenticated using (true);
drop policy if exists "profiles: insert own" on public.profiles;
create policy "profiles: insert own" on public.profiles for insert to authenticated with check (auth.uid() = id);
drop policy if exists "profiles: update own" on public.profiles;
create policy "profiles: update own" on public.profiles for update to authenticated using (auth.uid() = id) with check (auth.uid() = id);

-- App state: completely private to its owner.
drop policy if exists "app_state: own rows" on public.app_state;
create policy "app_state: own rows" on public.app_state for all to authenticated using (auth.uid() = user_id) with check (auth.uid() = user_id);

-- Follows: each user manages only the people they follow.
drop policy if exists "follows: own rows" on public.follows;
create policy "follows: own rows" on public.follows for all to authenticated using (auth.uid() = follower) with check (auth.uid() = follower);
