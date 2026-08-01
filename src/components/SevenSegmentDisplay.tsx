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

const W = 26;
const H = 46;
const T = 4.5;

const SEGMENT_RECTS: Record<string, { x: number; y: number; w: number; h: number }> = {
  a: { x: 4, y: 0, w: W - 8, h: T },
  g: { x: 4, y: (H - T) / 2, w: W - 8, h: T },
  d: { x: 4, y: H - T, w: W - 8, h: T },
  f: { x: 0, y: T, w: T, h: (H - T * 3) / 2 },
  b: { x: W - T, y: T, w: T, h: (H - T * 3) / 2 },
  e: { x: 0, y: (H + T) / 2, w: T, h: (H - T * 3) / 2 },
  c: { x: W - T, y: (H + T) / 2, w: T, h: (H - T * 3) / 2 },
};

function Digit({
  char,
  color,
  dim,
  heightPx,
  glow,
}: {
  char: string;
  color: string;
  dim: string;
  heightPx: number;
  glow: boolean;
}) {
  const lit = new Set(DIGIT_SEGMENTS[char] ?? []);
  const widthPx = heightPx * (W / H);
  return (
    <svg width={widthPx} height={heightPx} viewBox={`0 0 ${W} ${H}`} className="shrink-0">
      {Object.entries(SEGMENT_RECTS).map(([id, r]) => {
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
}: {
  value: string;
  color: string;
  dim?: string;
  heightPx?: number;
  glow?: boolean;
}) {
  return (
    <div className="flex items-end">
      {value.split("").map((char, i) =>
        char === "," ? (
          <Separator key={i} color={color} heightPx={heightPx} glow={glow} />
        ) : (
          <Digit key={i} char={char} color={color} dim={dim} heightPx={heightPx} glow={glow} />
        )
      )}
    </div>
  );
}
