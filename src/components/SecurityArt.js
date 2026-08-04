import React from "react";

// Decorative graphics for the AI Security pillars, matching the live site.
// Purely presentational — each is aria-hidden and carries no meaning alone.

const V = "#A100FF";
const LINE = "rgba(255,255,255,0.3)";
const FAINT = "rgba(255,255,255,0.2)";
const RING = "rgba(255,255,255,0.4)";

const Svg = ({ children }) => (
  <svg viewBox="0 0 240 120" aria-hidden="true" focusable="false">
    {children}
  </svg>
);

// 01 — Agents: a grid of identities, a few of them credentialed
const AgentsArt = () => {
  const rows = [
    { cy: 16, violet: [10, 150] },
    { cy: 52, violet: [50, 190] },
    { cy: 88, violet: [90, 230] },
  ];
  return (
    <Svg>
      {rows.map((row) =>
        Array.from({ length: 12 }, (_, i) => 10 + i * 20).map((cx) => {
          const isV = row.violet.includes(cx);
          return (
            <circle
              key={`${row.cy}-${cx}`}
              cx={cx}
              cy={row.cy}
              r={isV ? 4 : 2}
              fill={isV ? V : LINE}
            />
          );
        }),
      )}
    </Svg>
  );
};

// 02 — Threats: converging channels, one of them redirected
const ThreatsArt = () => {
  const pairs = [
    { a: 8, b: 24, mid: 16 },
    { a: 40, b: 56, mid: 48 },
    { a: 72, b: 88, mid: 80 },
    { a: 104, b: 120, mid: 112 },
  ];
  return (
    <Svg>
      {pairs.map(({ a, b, mid }) => (
        <React.Fragment key={mid}>
          <line
            x1="0"
            y1={a}
            x2="240"
            y2={mid}
            stroke={FAINT}
            strokeWidth="1.5"
          />
          <line
            x1="0"
            y1={b}
            x2="240"
            y2={mid}
            stroke={mid === 48 ? V : FAINT}
            strokeWidth="1.5"
          />
        </React.Fragment>
      ))}
    </Svg>
  );
};

// 03 — Architecture: a layered shield
const ArchitectureArt = () => (
  <Svg>
    <path
      d="M120 12 L180 32 L180 70 Q180 100 120 110 Q60 100 60 70 L60 32 Z"
      fill="none"
      stroke={V}
      strokeWidth="1.5"
    />
    <path
      d="M120 28 L165 42 L165 70 Q165 92 120 100 Q75 92 75 70 L75 42 Z"
      fill="rgba(161,0,255,0.08)"
      stroke={LINE}
      strokeWidth="1"
    />
  </Svg>
);

// 04 — Identity: a scoped delegation chain
const IdentityArt = () => (
  <Svg>
    <circle cx="60" cy="60" r="22" fill="none" stroke={RING} />
    <circle cx="120" cy="60" r="22" fill="none" stroke={V} />
    <circle cx="180" cy="60" r="22" fill="none" stroke={RING} />
    <line x1="82" y1="60" x2="98" y2="60" stroke={LINE} />
    <line x1="142" y1="60" x2="158" y2="60" stroke={LINE} />
  </Svg>
);

// 05 — Governance: an auditable chain of records
const GovernanceArt = () => (
  <Svg>
    {[20, 80, 140, 200].map((x, i) => (
      <g key={x}>
        <rect
          x={x}
          y="48"
          width="32"
          height="24"
          fill="none"
          stroke={i === 1 ? V : LINE}
          rx="3"
        />
        {i < 3 && (
          <line
            x1={x + 32}
            y1="60"
            x2={x + 60}
            y2="60"
            stroke={LINE}
            strokeWidth="1.5"
          />
        )}
      </g>
    ))}
  </Svg>
);

// 06 — Shadow AI: what is sanctioned, and what orbits outside it
const ShadowArt = () => (
  <Svg>
    <ellipse cx="120" cy="60" rx="70" ry="28" fill="none" stroke={V} />
    <circle
      cx="120"
      cy="60"
      r="14"
      fill="rgba(161,0,255,0.2)"
      stroke="rgba(255,255,255,0.5)"
    />
    <circle cx="120" cy="60" r="4" fill="#fff" />
  </Svg>
);

// 07 — Continuity: a lifecycle with its escalation and fallback
const ContinuityArt = () => (
  <Svg>
    <polyline
      points="0,60 40,60 60,30 80,90 100,60 240,60"
      fill="none"
      stroke={V}
      strokeWidth="2"
    />
  </Svg>
);

const art = {
  "01": AgentsArt,
  "02": ThreatsArt,
  "03": ArchitectureArt,
  "04": IdentityArt,
  "05": GovernanceArt,
  "06": ShadowArt,
  "07": ContinuityArt,
};

const SecurityArt = ({ num }) => {
  const Art = art[num];
  return Art ? <Art /> : null;
};

export default SecurityArt;
