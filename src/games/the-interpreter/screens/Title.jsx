import Label from "../../../design/components/Label.jsx";
import Button from "../../../design/components/Button.jsx";

export default function Title({ onStart }) {
  return (
    <div style={{ textAlign: "center", paddingTop: 40 }}>
      <div style={{ marginBottom: 18 }}>
        <Label>a game about carrying words across</Label>
      </div>
      <h1
        style={{
          fontFamily: "var(--serif)",
          fontSize: "clamp(40px, 9vw, 76px)",
          lineHeight: 1.0,
          margin: 0,
          color: "var(--ink)",
          fontWeight: 400,
          letterSpacing: "-0.01em",
        }}
      >
        The Interpreter
      </h1>
      <p
        style={{
          fontFamily: "var(--sans)",
          fontSize: 17,
          lineHeight: 1.6,
          color: "var(--muted)",
          maxWidth: 520,
          margin: "26px auto 0",
        }}
      >
        Two people who can no longer reach each other. Every line passes through
        you. You choose the words. You will not be told which choice is right,
        because there isn't one — only the one you can live with once you've heard
        where it lands.
      </p>
      <Button onClick={onStart} style={{ marginTop: 28 }}>
        Take the chair
      </Button>
      <p style={{ fontFamily: "var(--sans)", fontSize: 13, color: "var(--faint)", marginTop: 22 }}>
        Three cases · about 10 minutes each · nothing is saved
      </p>
    </div>
  );
}
