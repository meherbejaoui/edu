import Button from "../../../design/components/Button.jsx";
import Card from "../../../design/components/Card.jsx";
import Label from "../../../design/components/Label.jsx";

export default function Epilogue({ blindSpot, anchor, onPlayAgain }) {
  return (
    <div style={{ maxWidth: 720, margin: "0 auto", padding: "70px 0 60px", textAlign: "center" }}>
      <h3 style={{ fontFamily: "var(--serif)", fontSize: "clamp(28px, 5.5vw, 42px)", fontWeight: 400, lineHeight: 1.2, margin: 0, color: "var(--ink)" }}>
        The next time you watch a public decision
        <br />
        and it looks obvious —
      </h3>
      <p style={{ color: "var(--muted)", fontSize: 18, lineHeight: 1.8, maxWidth: 580, margin: "24px auto 0" }}>
        remember the red envelope. Remember the engineer whose report couldn't chant, the supervisor who "didn't
        recall," the two headlines describing the same night. The person you're arguing with online saw one lens.
        You saw one lens. The room saw everything, and it still wasn't enough.
      </p>
      <p style={{ fontFamily: "var(--serif)", fontSize: 22, fontStyle: "italic", color: "var(--anr-anchor)", margin: "30px auto 0", maxWidth: 540, lineHeight: 1.5 }}>
        “Leadership isn't not feeling the pushes. It's having anchors heavy enough to hold when the wind starts.”
      </p>

      {(blindSpot || anchor) && (
        <div style={{ margin: "34px auto 0", maxWidth: 500 }}>
          <Card style={{ textAlign: "left" }}>
            <Label color="var(--faint)">your signature</Label>
            {blindSpot && (
              <p style={{ fontFamily: "var(--serif)", fontStyle: "italic", fontSize: 17.5, lineHeight: 1.6, margin: "14px 0 0", color: "var(--ink)" }}>
                Blind spot: “{blindSpot}”
              </p>
            )}
            {anchor && (
              <p style={{ fontFamily: "var(--serif)", fontStyle: "italic", fontSize: 17.5, lineHeight: 1.6, margin: "10px 0 0", color: "var(--ink)" }}>
                Anchor: “{anchor}”
              </p>
            )}
          </Card>
        </div>
      )}

      <div style={{ marginTop: 36, display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
        <Button variant="ghost" onClick={onPlayAgain}>
          Play again — choose differently
        </Button>
      </div>
      <p style={{ fontFamily: "var(--sans)", color: "var(--faint)", fontSize: 12.5, marginTop: 26, letterSpacing: "0.05em" }}>
        the other options aren't wrong. that's the point.
      </p>
    </div>
  );
}
