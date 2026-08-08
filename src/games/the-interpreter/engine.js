export const clamp = (n, lo = 0, hi = 100) => Math.max(lo, Math.min(hi, n));

// deterministic-enough shuffle for rendering order (per beat, stable within beat)
export function shuffledOrder(seed, n = 3) {
  const idx = Array.from({ length: n }, (_, i) => i);
  let s = seed * 9301 + 49297;
  for (let i = n - 1; i > 0; i--) {
    s = (s * 233280 + 49297) % 233281;
    const j = s % (i + 1);
    [idx[i], idx[j]] = [idx[j], idx[i]];
  }
  return idx;
}

export function heatWord(h) {
  if (h < 22) return "easy";
  if (h < 42) return "settled";
  if (h < 60) return "tense";
  if (h < 78) return "brittle";
  return "breaking";
}

export function heatColor(h) {
  // interpolate cool -> hot (matches --ir-cool / --ir-hot in tokens.css)
  const c1 = [124, 147, 168];
  const c2 = [180, 85, 63];
  const t = clamp(h) / 100;
  const mix = c1.map((v, i) => Math.round(v + (c2[i] - v) * t));
  return `rgb(${mix[0]},${mix[1]},${mix[2]})`;
}

// pick which src variant to show based on current heat
export function srcFor(beat, heat) {
  if (typeof beat.src === "string") return beat.src;
  if (heat < 40) return beat.src.cool;
  if (heat < 68) return beat.src.warm;
  return beat.src.hot;
}

// which end-state bucket did the run land in?
export function bucketOf(heat, driftA, driftB) {
  // A peace is false if EVEN ONE party leaves badly misled — so the trigger is
  // the worse of the two drifts, not the average. (Averaging let a softener's
  // occasional faithful line dilute the trap away; the worst-drift rule means
  // sustained smoothing reliably springs the false peace it was built to catch.)
  const worstDrift = Math.max(driftA, driftB);
  const highDrift = worstDrift >= 34;
  const highHeat = heat >= 58;
  if (highDrift && highHeat) return "MESS";
  if (highDrift && !highHeat) return "FALSEPEACE";
  if (!highDrift && highHeat) return "RUPTURE";
  return "UNDERSTANDING";
}

// analyze the choice log for the debrief fingerprint
export function analyze(log) {
  let softA = 0,
    sharpA = 0,
    softB = 0,
    sharpB = 0,
    faithful = 0,
    total = 0;
  let sideActions = 0;
  log.forEach((e) => {
    if (e.kind === "beat") {
      total++;
      const spk = e.speaker;
      if (e.cat === "F") faithful++;
      if (e.cat === "S") (spk === "A" ? softA++ : softB++);
      if (e.cat === "H") (spk === "A" ? sharpA++ : sharpB++);
    } else if (e.kind === "pressure") {
      if (e.note === "leanA" || e.note === "leanB") sideActions++;
    }
  });
  // image-favor: softening a party makes them sound more reasonable; sharpening, worse.
  const favorA = softA - sharpA;
  const favorB = softB - sharpB;
  const bias = favorA - favorB; // >0 you protected A's image; <0 you protected B's
  let side = "balanced";
  if (bias >= 3) side = "A";
  else if (bias <= -3) side = "B";

  const softeningTotal = softA + softB;
  const sharpeningTotal = sharpA + sharpB;
  let style = "even-handed";
  if (softeningTotal - sharpeningTotal >= 4) style = "soft";
  else if (sharpeningTotal - softeningTotal >= 4) style = "sharp";
  else if (faithful >= total - 2) style = "faithful";

  return {
    total,
    faithful,
    softA,
    sharpA,
    softB,
    sharpB,
    softeningTotal,
    sharpeningTotal,
    favorA,
    favorB,
    bias,
    side,
    style,
    sideActions,
  };
}

// derive Pushes (pressures) and Anchors (values) from the pattern — Anchor Room kinship
export function pushesAndAnchors(a) {
  const pushes = [];
  const anchors = [];
  if (a.style === "soft") {
    pushes.push("the pull to keep the peace");
    anchors.push("Mercy");
  }
  if (a.style === "sharp") {
    pushes.push("the urge to make the truth unavoidable");
    anchors.push("Fidelity");
  }
  if (a.style === "faithful") {
    pushes.push("the discipline of the conduit");
    anchors.push("Fidelity");
  }
  if (a.style === "even-handed") {
    pushes.push("the wish to hold the middle");
    anchors.push("Fidelity");
  }
  if (a.side === "A") {
    pushes.push("sympathy for the one who felt unheard");
    anchors.push("Belonging");
  }
  if (a.side === "B") {
    pushes.push("sympathy for the one who felt cornered");
    anchors.push("Belonging");
  }
  if (a.sideActions > 0) {
    pushes.push("the plea you were asked to carry in secret");
  }
  if (anchors.indexOf("Self-preservation") === -1 && a.faithful <= 2 && a.style !== "faithful") {
    // heavy intervention often protects the interpreter from the discomfort of a hard true line
    pushes.push("the discomfort of carrying a cruel thing cleanly");
    anchors.push("Self-preservation");
  }
  return {
    pushes: Array.from(new Set(pushes)).slice(0, 3),
    anchors: Array.from(new Set(anchors)).slice(0, 3),
  };
}
