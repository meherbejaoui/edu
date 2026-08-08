import Label from "../../../design/components/Label.jsx";
import Button from "../../../design/components/Button.jsx";
import Card from "../../../design/components/Card.jsx";
import Chip from "../../../design/components/Chip.jsx";

export default function Debrief({ chapter, entry, casesRemaining, onNextCase, onCloseDocket }) {
  const unheard = chapter.stakeholders.filter((s) => !s.loud && !entry.consulted.includes(s.id));
  const pushes = [...entry.decision.pushes, ...(entry.heat && entry.heat.push ? [entry.heat.push] : []), ...(entry.extraPushes || [])];
  const anchors = [...entry.decision.anchors, ...(entry.heat && entry.heat.anchor ? [entry.heat.anchor] : [])];

  return (
    <div style={{ maxWidth: 840, margin: "0 auto", padding: "44px 0 60px" }}>
      <Label color="var(--anr-anchor)">beneath the surface</Label>
      <h3 style={{ fontFamily: "var(--serif)", fontSize: "clamp(26px, 5vw, 40px)", fontWeight: 400, margin: "8px 0 24px", color: "var(--ink)" }}>
        What actually moved you
      </h3>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(290px, 1fr))", gap: 18 }}>
        <Card accent="var(--anr-push)">
          <Label color="var(--anr-push)">▼ pushes you felt</Label>
          <div style={{ marginTop: 12 }}>
            {pushes.length ? (
              pushes.map((p) => (
                <Chip key={p} color="var(--anr-push)" style={{ margin: "0 6px 9px 0" }}>
                  {p}
                </Chip>
              ))
            ) : (
              <p style={{ color: "var(--muted)", fontSize: 15, margin: 0, lineHeight: 1.6 }}>
                Remarkably, you moved against every current in the room. Notice what that cost — steadiness is
                never free.
              </p>
            )}
          </div>
        </Card>
        <Card accent="var(--anr-anchor)">
          <Label color="var(--anr-anchor)">⚓ anchors you held</Label>
          <div style={{ marginTop: 12 }}>
            {anchors.length ? (
              anchors.map((a) => (
                <Chip key={a} color="var(--anr-anchor)" style={{ margin: "0 6px 9px 0" }}>
                  {a}
                </Chip>
              ))
            ) : (
              <p style={{ color: "var(--muted)", fontSize: 15, margin: 0, lineHeight: 1.6 }}>
                No anchor held this round. Not a verdict — but worth asking: what would have been heavy enough?
              </p>
            )}
          </div>
        </Card>
      </div>

      {unheard.length > 0 ? (
        <Card accent="var(--anr-push)" style={{ marginTop: 18 }}>
          <Label color="var(--anr-push)">◎ your blind spot</Label>
          <p style={{ fontSize: 16, lineHeight: 1.68, margin: "10px 0 0", color: "var(--ink)" }}>
            You never heard {unheard.map((s) => s.name).join(", ")}. {unheard[0].name} knew this:{" "}
            <em>“{unheard[0].insight.replace(/[“”]/g, "").slice(0, 160)}…”</em> The quiet voices don't get louder.
            They just get missed.
          </p>
        </Card>
      ) : (
        <Card accent="var(--anr-quiet)" style={{ marginTop: 18 }}>
          <Label color="var(--anr-quiet)">◎ blind spot check</Label>
          <p style={{ fontSize: 16, lineHeight: 1.68, margin: "10px 0 0", color: "var(--ink)" }}>
            You sought out the quiet voices — the ones with data instead of megaphones. Most people never do. It
            changed what you knew, whatever you chose to do with it.
          </p>
        </Card>
      )}

      <div style={{ marginTop: 32, display: "flex", justifyContent: "flex-end", gap: 14, flexWrap: "wrap", alignItems: "center" }}>
        {casesRemaining > 0 ? (
          <>
            <Button variant="ghost" onClick={onCloseDocket}>
              Close the docket — see my Signature
            </Button>
            <Button onClick={onNextCase}>Next case ({casesRemaining} left) →</Button>
          </>
        ) : (
          <Button onClick={onCloseDocket}>Your Leadership Signature →</Button>
        )}
      </div>
      {casesRemaining > 0 && (
        <p style={{ textAlign: "right", color: "var(--faint)", fontSize: 13.5, marginTop: 10 }}>
          Your Signature is built from every case you've completed — leave now or keep going, it will be waiting.
        </p>
      )}
    </div>
  );
}
