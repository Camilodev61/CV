import type { CSSProperties } from "react";

type Line = { text: string; className?: string; tail?: { text: string; className: string } };

const ENTER_STAGGER = 45; // ms between tiles falling into place
const BREEZE_STAGGER = 70; // ms between tiles as the breeze passes through

/**
 * Hero name split into letter "tiles". Each tile drops in like a domino on load, then a
 * gentle breeze wave rolls through the word every few seconds; hovering a tile flips it.
 * All CSS (see `.tile*` in globals.css), so it stays smooth while the page hydrates.
 */
export function NameTiles({ lines }: { lines: Line[] }) {
  let n = 0; // global tile index, so the wave flows from the first line into the second

  return (
    <h1
      aria-label={lines.map((l) => l.text + (l.tail?.text ?? "")).join(" ")}
      className="text-[clamp(40px,11.5vw,180px)] leading-[0.85] font-black tracking-tight uppercase [perspective:900px]"
    >
      {lines.map((line) => {
        const chars = [...line.text].map((ch) => ({ ch, className: line.className }));
        if (line.tail) chars.push({ ch: line.tail.text, className: line.tail.className });
        return (
          <span key={line.text} aria-hidden className="block whitespace-nowrap">
            {chars.map(({ ch, className }, i) => {
              const k = n++;
              const style = {
                "--enter-delay": `${k * ENTER_STAGGER}ms`,
                "--breeze-delay": `${1200 + k * BREEZE_STAGGER}ms`,
              } as CSSProperties;
              return (
                <span key={i} className={`tile inline-block ${className ?? ""}`} style={style}>
                  <span className="tile-face inline-block">{ch}</span>
                </span>
              );
            })}
          </span>
        );
      })}
    </h1>
  );
}
