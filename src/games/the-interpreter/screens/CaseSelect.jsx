import { CASES } from "../cases.js";
import Label from "../../../design/components/Label.jsx";
import Card from "../../../design/components/Card.jsx";

const h2 = {
  fontFamily: "var(--serif)",
  fontSize: "clamp(26px, 5vw, 34px)",
  color: "var(--ink)",
  fontWeight: 400,
  margin: 0,
  lineHeight: 1.15,
};

export default function CaseSelect({ onPick, done }) {
  return (
    <div>
      <div style={{ marginBottom: 6 }}>
        <Label>choose a room</Label>
      </div>
      <h2 style={h2}>Who needs carrying today?</h2>
      <div style={{ display: "grid", gap: 14, marginTop: 22 }}>
        {CASES.map((c) => (
          <Card as="button" key={c.id} interactive onClick={() => onPick(c.id)}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: 12 }}>
              <span style={{ fontFamily: "var(--serif)", fontSize: 24, color: "var(--ink)" }}>{c.title}</span>
              <Label>{c.kicker}</Label>
            </div>
            <div style={{ marginTop: 8, display: "flex", gap: 16, flexWrap: "wrap" }}>
              <span style={{ fontFamily: "var(--sans)", fontSize: 13, color: "var(--ir-a)" }}>
                ● {c.partyA.name} · {c.partyA.role}
              </span>
              <span style={{ fontFamily: "var(--sans)", fontSize: 13, color: "var(--ir-b)" }}>
                ● {c.partyB.name} · {c.partyB.role}
              </span>
            </div>
            {done.includes(c.id) && (
              <div style={{ marginTop: 8 }}>
                <Label color="var(--faint)">you've sat this one</Label>
              </div>
            )}
          </Card>
        ))}
      </div>
    </div>
  );
}
