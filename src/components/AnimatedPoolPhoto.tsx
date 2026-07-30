const IMG = "/pool-hero.jpg";
const VIEW_W = 900;
const VIEW_H = 1125;

// Pool water surface, traced as a perspective quadrilateral over the photo.
const WATER_POLYGON = "198,653 252,495 899,371 899,630 567,709";

// Foliage clusters (left palms, center oak, right trees), softened with a blurred mask.
const TREE_RECTS = [
  { x: 0, y: 146, w: 126, h: 225 },
  { x: 378, y: 146, w: 216, h: 237 },
  { x: 720, y: 191, w: 180, h: 180 },
];

export function AnimatedPoolPhoto() {
  return (
    <div className="relative overflow-hidden rounded-2xl shadow-xl">
      {/* Base photo — always sharp, never distorted. Logo, deck, and building read from here. */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={IMG}
        alt="The Julius Guinyard Foundation logo on the pool deck at The Julius Guinyard Pool and Park"
        className="block h-auto w-full"
      />

      <svg
        viewBox={`0 0 ${VIEW_W} ${VIEW_H}`}
        className="pointer-events-none absolute inset-0 h-full w-full"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden="true"
      >
        <defs>
          <clipPath id="waterClip">
            <polygon points={WATER_POLYGON} />
          </clipPath>

          <filter id="waterRipple" x="-20%" y="-20%" width="140%" height="140%">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.014 0.028"
              numOctaves="2"
              seed="7"
              result="noise"
            >
              <animate
                attributeName="baseFrequency"
                values="0.014 0.028;0.02 0.034;0.012 0.026;0.014 0.028"
                dur="7s"
                repeatCount="indefinite"
              />
            </feTurbulence>
            <feDisplacementMap
              in="SourceGraphic"
              in2="noise"
              scale="22"
              xChannelSelector="R"
              yChannelSelector="G"
            />
          </filter>

          <filter id="leafRustle" x="-30%" y="-30%" width="160%" height="160%">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.08 0.12"
              numOctaves="2"
              seed="4"
              result="noise"
            >
              <animate
                attributeName="baseFrequency"
                values="0.08 0.12;0.11 0.09;0.07 0.13;0.08 0.12"
                dur="2.4s"
                repeatCount="indefinite"
              />
            </feTurbulence>
            <feDisplacementMap
              in="SourceGraphic"
              in2="noise"
              scale="10"
              xChannelSelector="R"
              yChannelSelector="G"
            />
          </filter>

          {TREE_RECTS.map((r, i) => (
            <mask key={i} id={`treeMask${i}`} maskUnits="userSpaceOnUse">
              <rect
                x={r.x}
                y={r.y}
                width={r.w}
                height={r.h}
                fill="white"
                filter="blur(14px)"
              />
            </mask>
          ))}

          <linearGradient id="glint" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="white" stopOpacity="0" />
            <stop offset="45%" stopColor="white" stopOpacity="0.55" />
            <stop offset="55%" stopColor="white" stopOpacity="0.55" />
            <stop offset="100%" stopColor="white" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* Rippling water */}
        <image
          href={IMG}
          x="0"
          y="0"
          width={VIEW_W}
          height={VIEW_H}
          clipPath="url(#waterClip)"
          filter="url(#waterRipple)"
        />

        {/* Sunlight glinting across the moving water */}
        <g clipPath="url(#waterClip)" style={{ mixBlendMode: "overlay" }}>
          <rect x="-400" y="0" width={VIEW_W * 2.5} height={VIEW_H} fill="url(#glint)">
            <animateTransform
              attributeName="transform"
              type="translate"
              values="-300 0; 900 0; -300 0"
              dur="9s"
              repeatCount="indefinite"
            />
          </rect>
        </g>

        {/* Rustling foliage */}
        {TREE_RECTS.map((r, i) => (
          <image
            key={i}
            href={IMG}
            x="0"
            y="0"
            width={VIEW_W}
            height={VIEW_H}
            mask={`url(#treeMask${i})`}
            filter="url(#leafRustle)"
          />
        ))}
      </svg>
    </div>
  );
}
