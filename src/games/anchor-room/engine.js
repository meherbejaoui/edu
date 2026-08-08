import { ARCHETYPES } from "./archetypes.js";

export const DECIDE_SECONDS = 45;
export const HEAT_SECONDS = 30;
export const CONVERSATIONS_ALLOWED = 3;

// "Your center" — a running steadiness score across every chapter completed
// this session. Anchors held pull it up, pushes given in to pull it down.
export function computeSteadiness(log) {
  let s = 0;
  log.forEach((entry) => {
    s += entry.decision.anchors.length;
    s -= (entry.decision.pushes.length + (entry.extraPushes || []).length) * 0.6;
    s += entry.heat && entry.heat.anchor ? 2 : 0;
    s -= entry.heat && entry.heat.push ? 1 : 0;
  });
  return Math.max(0, s + log.length * 1.5);
}

export function maxSteadiness(chapterCount) {
  return Math.max(chapterCount, 1) * 8;
}

// The Leadership Signature: an archetype plus the pushes/anchors/quiet-voices
// tally drawn from every chapter completed this session.
export function computeSignature(log) {
  let score = 0;
  log.forEach((entry) => {
    score += entry.decision.anchors.length >= 2 ? 2 : entry.decision.anchors.length === 1 ? 1 : 0;
    score += entry.heat && entry.heat.anchor ? 1 : 0;
  });
  const possible = Math.max(log.length * 3, 1);
  const ratio = score / possible;
  const arch = ARCHETYPES.find((a) => ratio >= a.minRatio) || ARCHETYPES[ARCHETYPES.length - 1];
  const allPushes = [
    ...new Set(
      log.flatMap((entry) => [
        ...entry.decision.pushes,
        ...(entry.heat && entry.heat.push ? [entry.heat.push] : []),
        ...(entry.extraPushes || []),
      ])
    ),
  ];
  const allAnchors = [
    ...new Set(
      log.flatMap((entry) => [
        ...entry.decision.anchors,
        ...(entry.heat && entry.heat.anchor ? [entry.heat.anchor] : []),
      ])
    ),
  ];
  const totalQuiet = log.reduce((n, entry) => n + entry.chapter.stakeholders.filter((p) => !p.loud).length, 0);
  const quietHeard = log.reduce(
    (n, entry) => n + entry.chapter.stakeholders.filter((p) => !p.loud && entry.consulted.includes(p.id)).length,
    0
  );
  return { arch, allPushes, allAnchors, totalQuiet, quietHeard, cases: log.length, ratio };
}
