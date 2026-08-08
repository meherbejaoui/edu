import Label from "../../../design/components/Label.jsx";
import Button from "../../../design/components/Button.jsx";
import Card from "../../../design/components/Card.jsx";
import { computeSignature } from "../engine.js";

export default function Signature({ log, casesRemaining, blindSpot, onBlindSpot, anchor, onAnchor, onOneMoreCase, onSeal }) {
  const sig = computeSignature(log);
  return (
    <div style={{ maxWidth: 800, margin: "0 auto", padding: "48px 0 60px" }}>
      <div style={{ textAlign: "center" }}>
        <Label color="var(--anr-anchor)">
          the chamber empties · {sig.cases} {sig.cases === 1 ? "case" : "cases"} decided · your record remains
        </Label>
        <h2 style={{ fontFamily: "var(--serif)", fontSize: "clamp(30px, 6vw, 50px)", fontWeight: 400, margin: "10px 0 4px", color: "var(--ink)" }}>
          {sig.arch.name}
        </h2>
        <div style={{ fontFamily: "var(--sans)", color: "var(--faint)", fontSize: 14.5, letterSpacing: "0.08em", textTransform: "uppercase" }}>
          {sig.arch.sub}
        </div>
      </div>

      <Card accent="var(--anr-anchor)" style={{ marginTop: 24 }}>
        <p style={{ fontSize: 16.5, lineHeight: 1.75, margin: 0, color: "var(--ink)" }}>{sig.arch.text}</p>
        <div style={{ borderTop: "1px solid var(--hair)", margin: "18px 0" }} />
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(210px, 1fr))", gap: 18, fontSize: 15 }}>
          <div>
            <Label color="var(--anr-push)">pushes that found you</Label>
            <div style={{ marginTop: 8, color: "var(--ink)" }}>
              {sig.allPushes.length ? (
                sig.allPushes.map((p) => (
                  <div key={p} style={{ marginBottom: 5, lineHeight: 1.45 }}>
                    · {p}
                  </div>
                ))
              ) : (
                <div style={{ color: "var(--faint)" }}>None recorded. Rare air.</div>
              )}
            </div>
          </div>
          <div>
            <Label color="var(--anr-anchor)">anchors you used</Label>
            <div style={{ marginTop: 8, color: "var(--ink)" }}>
              {sig.allAnchors.length ? (
                sig.allAnchors.map((a) => (
                  <div key={a} style={{ marginBottom: 5, lineHeight: 1.45 }}>
                    · {a}
                  </div>
                ))
              ) : (
                <div style={{ color: "var(--faint)" }}>None held. The replay is yours.</div>
              )}
            </div>
          </div>
          <div>
            <Label color="var(--anr-lens1)">quiet voices heard</Label>
            <div style={{ fontFamily: "var(--serif)", fontSize: 34, fontWeight: 700, lineHeight: 1, marginTop: 8, color: "var(--ink)" }}>
              {sig.quietHeard}
              <span style={{ fontSize: 17, color: "var(--faint)" }}> of {sig.totalQuiet}</span>
            </div>
            <div style={{ color: "var(--faint)", marginTop: 4 }}>The ones without megaphones.</div>
          </div>
        </div>
      </Card>

      <Card style={{ marginTop: 22 }}>
        <Label color="var(--faint)">sign your record — two commitments, in your own words</Label>
        <label style={{ display: "block", marginTop: 14, fontWeight: 700, fontSize: 15.5, color: "var(--ink)" }}>
          The Blind Spot Commitment
          <span style={{ display: "block", fontWeight: 400, fontSize: 14.5, color: "var(--faint)", margin: "4px 0 8px" }}>
            “Whose voice will I intentionally seek out, so I'm not leading with a blindfold?”
          </span>
          <input
            className="eg-focus"
            value={blindSpot}
            onChange={(e) => onBlindSpot(e.target.value)}
            placeholder="Write it here — nobody sees this but you"
            style={{
              width: "100%",
              fontFamily: "var(--sans)",
              fontSize: 15,
              padding: "10px 12px",
              borderRadius: "var(--radius-sm)",
              border: "1px solid var(--hair)",
              background: "var(--surface)",
              color: "var(--ink)",
            }}
          />
        </label>
        <label style={{ display: "block", marginTop: 16, fontWeight: 700, fontSize: 15.5, color: "var(--ink)" }}>
          The Resolute Promise
          <span style={{ display: "block", fontWeight: 400, fontSize: 14.5, color: "var(--faint)", margin: "4px 0 8px" }}>
            “What is the one anchor I will not trade — even when the room is loud?”
          </span>
          <input
            className="eg-focus"
            value={anchor}
            onChange={(e) => onAnchor(e.target.value)}
            placeholder="Write it here"
            style={{
              width: "100%",
              fontFamily: "var(--sans)",
              fontSize: 15,
              padding: "10px 12px",
              borderRadius: "var(--radius-sm)",
              border: "1px solid var(--hair)",
              background: "var(--surface)",
              color: "var(--ink)",
            }}
          />
        </label>
      </Card>

      <div style={{ marginTop: 26, display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
        {casesRemaining > 0 && log.length > 0 && (
          <Button variant="ghost" onClick={onOneMoreCase}>
            ← Actually, one more case ({casesRemaining} left)
          </Button>
        )}
        <Button onClick={onSeal}>Seal it</Button>
      </div>
    </div>
  );
}
