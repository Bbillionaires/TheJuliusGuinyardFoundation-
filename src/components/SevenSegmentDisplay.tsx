const DIGIT_SEGMENTS: Record<string, string[]> = {
  "0": ["a", "b", "c", "d", "e", "f"],
  "1": ["b", "c"],
  "2": ["a", "b", "g", "e", "d"],
  "3": ["a", "b", "g", "c", "d"],
  "4": ["f", "g", "b", "c"],
  "5": ["a", "f", "g", "c", "d"],
  "6": ["a", "f", "g", "e", "c", "d"],
  "7": ["a", "b", "c"],
  "8": ["a", "b", "c", "d", "e", "f", "g"],
  "9": ["a", "b", "c", "d", "f", "g"],
};

const W = 30;
const H = 46;

function segmentRects(t: number): Record<string, { x: number; y: number; w: number; h: number }> {
  return {
    a: { x: 4, y: 0, w: W - 8, h: t },
    g: { x: 4, y: (H - t) / 2, w: W - 8, h: t },
    d: { x: 4, y: H - t, w: W - 8, h: t },
    f: { x: 0, y: t, w: t, h: (H - t * 3) / 2 },
    b: { x: W - t, y: t, w: t, h: (H - t * 3) / 2 },
    e: { x: 0, y: (H + t) / 2, w: t, h: (H - t * 3) / 2 },
    c: { x: W - t, y: (H + t) / 2, w: t, h: (H - t * 3) / 2 },
  };
}

function Digit({
  char,
  color,
  dim,
  heightPx,
  glow,
  thickness,
}: {
  char: string;
  color: string;
  dim: string;
  heightPx: number;
  glow: boolean;
  thickness: number;
}) {
  const lit = new Set(DIGIT_SEGMENTS[char] ?? []);
  const widthPx = heightPx * (W / H);
  const rects = segmentRects(thickness);
  return (
    <svg width={widthPx} height={heightPx} viewBox={`0 0 ${W} ${H}`} className="shrink-0">
      {Object.entries(rects).map(([id, r]) => {
        const isLit = lit.has(id);
        return (
          <rect
            key={id}
            x={r.x}
            y={r.y}
            width={r.w}
            height={r.h}
            rx={1.2}
            fill={isLit ? color : dim}
            style={
              isLit && glow
                ? { filter: `drop-shadow(0 0 3px ${color}) drop-shadow(0 0 7px ${color})` }
                : undefined
            }
          />
        );
      })}
    </svg>
  );
}

function Separator({
  color,
  heightPx,
  glow,
}: {
  color: string;
  heightPx: number;
  glow: boolean;
}) {
  const widthPx = heightPx * (10 / H);
  return (
    <svg width={widthPx} height={heightPx} viewBox={`0 0 10 ${H}`} className="shrink-0">
      <rect
        x={3}
        y={H - 8}
        width={4}
        height={4}
        rx={1}
        fill={color}
        style={glow ? { filter: `drop-shadow(0 0 3px ${color})` } : undefined}
      />
    </svg>
  );
}

export function SevenSegmentDisplay({
  value,
  color,
  dim = "#3a1210",
  heightPx = 46,
  glow = true,
  thickness = 4.5,
}: {
  value: string;
  color: string;
  dim?: string;
  heightPx?: number;
  glow?: boolean;
  thickness?: number;
}) {
  return (
    <div className="flex items-end gap-[0.15em]" style={{ fontSize: heightPx }}>
      {value.split("").map((char, i) =>
        char === "," ? (
          <Separator key={i} color={color} heightPx={heightPx} glow={glow} />
        ) : (
          <Digit
            key={i}
            char={char}
            color={color}
            dim={dim}
            heightPx={heightPx}
            glow={glow}
            thickness={thickness}
          />
        )
      )}
    </div>
  );
}
