import Label from "../../../design/components/Label.jsx";
import Button from "../../../design/components/Button.jsx";
import Card from "../../../design/components/Card.jsx";

export default function Title({ onEnter }) {
  return (
    <div style={{ maxWidth: 780, margin: "0 auto", padding: "70px 0 90px", textAlign: "center" }}>
      <Label color="var(--anr-anchor)">a game of public decisions</Label>
      <h1
        style={{
          fontFamily: "var(--serif)",
          fontSize: "clamp(40px, 8vw, 72px)",
          fontWeight: 400,
          lineHeight: 1.05,
          margin: "18px 0 8px",
          color: "var(--ink)",
        }}
      >
        The Anchor Room
      </h1>
      <p
        style={{
          fontFamily: "var(--sans)",
          fontSize: 17,
          lineHeight: 1.7,
          color: "var(--muted)",
          maxWidth: 580,
          margin: "18px auto 0",
        }}
      >
        Every public decision you've ever argued about online looked simple from
        the outside. Tonight, you're on the inside — where the pressure is
        personal, the data is quiet, and every choice is a loss to someone.
      </p>
      <Card style={{ margin: "44px auto 0", maxWidth: 580, textAlign: "left" }}>
        <Label color="var(--anr-push)">Rules of the chamber</Label>
        <div style={{ marginTop: 16, display: "grid", gap: 13, fontSize: 16, lineHeight: 1.62, color: "var(--ink)" }}>
          <div>
            <strong>There are no right answers.</strong> There are only forces — the{" "}
            <span style={{ color: "var(--anr-push)", fontWeight: 700 }}>Pushes</span> that move you, and the{" "}
            <span style={{ color: "var(--anr-anchor)", fontWeight: 700 }}>Anchors</span> that hold you.
          </div>
          <div>
            <strong>The loudest voice is rarely the whole story.</strong> You'll have limited time to listen. Who
            you don't hear becomes your blind spot.
          </div>
          <div>
            <strong>After every choice, you face the people you didn't pick.</strong> That part isn't optional. It
            never is.
          </div>
          <div>
            <strong>Leave whenever you like.</strong> After any case, you can continue — or close the docket and
            receive your Leadership Signature, built from every case you played.
          </div>
        </div>
      </Card>
      <Button onClick={onEnter} style={{ marginTop: 36 }}>
        Enter the room
      </Button>
      <p style={{ fontFamily: "var(--sans)", fontSize: 12.5, color: "var(--faint)", marginTop: 24, letterSpacing: "0.05em" }}>
        11 cases · play one pack or all · based on a live leadership workshop
      </p>
    </div>
  );
}
