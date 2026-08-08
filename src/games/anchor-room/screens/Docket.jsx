import Label from "../../../design/components/Label.jsx";
import Card from "../../../design/components/Card.jsx";
import { PACKS } from "../packs.js";
import { CASES } from "../cases.js";
import { DECIDE_SECONDS, HEAT_SECONDS } from "../engine.js";

export default function Docket({ timerEnabled, onToggleTimer, onPick }) {
  return (
    <div style={{ maxWidth: 940, margin: "0 auto", padding: "56px 0 90px" }}>
      <div style={{ textAlign: "center", marginBottom: 30 }}>
        <Label color="var(--anr-anchor)">choose your docket</Label>
        <h2
          style={{
            fontFamily: "var(--serif)",
            fontSize: "clamp(28px, 5.5vw, 44px)",
            fontWeight: 400,
            margin: "10px 0 6px",
            color: "var(--ink)",
          }}
        >
          Which cases land on your desk?
        </h2>
        <p style={{ color: "var(--muted)", fontSize: 16.5, maxWidth: 560, margin: "0 auto", lineHeight: 1.6 }}>
          Every docket ends in a Leadership Signature drawn from the cases you complete — one, three, five, or all
          eleven.
        </p>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(270px, 1fr))", gap: 18 }}>
        {PACKS.map((p) => (
          <Card
            as="button"
            key={p.id}
            interactive
            onClick={() => onPick(p.ids)}
            style={{ display: "flex", flexDirection: "column" }}
          >
            <Label color="var(--faint)">
              {p.ids.length} cases {p.id === "frontline" ? "· contested terrain" : ""}
            </Label>
            <div style={{ fontFamily: "var(--serif)", fontSize: 24, fontWeight: 400, margin: "8px 0 4px", color: "var(--ink)" }}>
              {p.name}
            </div>
            <div
              style={{
                fontFamily: "var(--sans)",
                fontSize: 12.5,
                letterSpacing: "0.08em",
                color: "var(--faint)",
                textTransform: "uppercase",
                marginBottom: 12,
              }}
            >
              {p.tagline}
            </div>
            <p style={{ fontSize: 15.5, lineHeight: 1.6, margin: 0, flex: 1, color: "var(--muted)" }}>{p.desc}</p>
            <div style={{ marginTop: 16, fontSize: 14, color: "var(--ink)" }}>
              {p.ids.map((id) => (
                <div key={id} style={{ padding: "3px 0", borderTop: "1px solid var(--hair)" }}>
                  ▸ {CASES.find((c) => c.id === id).title}
                </div>
              ))}
            </div>
            <div
              style={{
                fontFamily: "var(--sans)",
                marginTop: 16,
                fontSize: 13,
                fontWeight: 600,
                letterSpacing: "0.1em",
                color: "var(--anr-push)",
              }}
            >
              ▸ open this docket
            </div>
          </Card>
        ))}
      </div>

      <div style={{ marginTop: 26, display: "flex", justifyContent: "center" }}>
        <label
          className="eg-focus"
          style={{
            display: "flex",
            alignItems: "center",
            gap: 14,
            cursor: "pointer",
            background: timerEnabled ? "color-mix(in srgb, var(--anr-push) 14%, var(--surface))" : "var(--surface)",
            border: `1.5px solid ${timerEnabled ? "var(--anr-push)" : "var(--hair)"}`,
            borderRadius: "var(--radius)",
            padding: "16px 22px",
            maxWidth: 560,
          }}
        >
          <input
            type="checkbox"
            checked={timerEnabled}
            onChange={(e) => onToggleTimer(e.target.checked)}
            style={{ width: 22, height: 22, accentColor: "var(--anr-push)", flex: "none" }}
          />
          <span style={{ textAlign: "left" }}>
            <span style={{ fontFamily: "var(--serif)", fontWeight: 700, fontSize: 17, color: "var(--ink)" }}>
              ⏱ Pressure Clock mode
            </span>
            <span style={{ display: "block", fontSize: 14.5, color: "var(--muted)", lineHeight: 1.5, marginTop: 3 }}>
              Decisions get {DECIDE_SECONDS}s, the heat gets {HEAT_SECONDS}s. Run out, and the room decides for
              you — the way it does in real life.
            </span>
          </span>
        </label>
      </div>
    </div>
  );
}
