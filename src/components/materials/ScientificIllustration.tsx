import { useEffect, useId, useRef, useState } from "react";
import type { CSSProperties } from "react";

type Props = { variant: "lattice" | "film" };

export default function ScientificIllustration({ variant }: Props) {
  const id = useId();
  const figure = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(true);
  useEffect(() => {
    if (!figure.current || typeof IntersectionObserver === "undefined") return;
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { rootMargin: "60px", threshold: 0.1 },
    );
    observer.observe(figure.current);
    return () => observer.disconnect();
  }, []);
  if (variant === "film")
    return (
      <figure ref={figure} className="film-figure" data-visible={visible}>
        <svg
          viewBox="0 0 520 450"
          role="img"
          aria-labelledby={`${id}-title ${id}-desc`}
        >
          <title id={`${id}-title`}>
            Conceptual thin-film deposition cross section
          </title>
          <desc id={`${id}-desc`}>
            Atoms arrive above a stepped substrate. A deposited layer follows
            the surface into a trench. This is an explanatory drawing, not
            simulation output.
          </desc>
          <defs>
            <pattern
              id={`${id}-grid`}
              width="26"
              height="26"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 26 0 L 0 0 0 26"
                fill="none"
                stroke="currentColor"
                strokeOpacity=".08"
              />
            </pattern>
            <linearGradient id={`${id}-layer`} x2="0" y2="1">
              <stop stopColor="#dfa276" />
              <stop offset="1" stopColor="#b96742" />
            </linearGradient>
          </defs>
          <rect width="520" height="450" fill={`url(#${id}-grid)`} />
          <g aria-hidden="true">
            <text x="32" y="34" className="svg-label">
              DEPOSITION / CROSS SECTION
            </text>
            {[90, 160, 245, 305, 405, 455].map((x, i) => (
              <g key={x}>
                <circle
                  className="film-particle"
                  cx={x}
                  cy={85 + (i % 3) * 35}
                  r="6"
                  fill="#dfa276"
                  style={
                    {
                      "--phase": `${-i * 0.57}s`,
                      "--fall-distance": `${(x > 170 && x < 355 ? 319 : 239) - (85 + (i % 3) * 35)}px`,
                    } as CSSProperties
                  }
                />
                <circle
                  className="film-arrival"
                  cx={x}
                  cy={x > 170 && x < 355 ? 319 : 239}
                  r="8"
                  fill="none"
                  stroke="#edc7a5"
                  style={{ "--phase": `${-i * 0.57}s` } as CSSProperties}
                />
                <path
                  d={`M${x} ${104 + (i % 3) * 35} v28 m-4 -5 l4 5 4 -5`}
                  fill="none"
                  stroke="#dfa276"
                  strokeOpacity=".65"
                />
              </g>
            ))}
            <path
              d="M50 260 H185 V340 H340 V260 H470 V395 H50Z"
              fill="#3a4441"
              stroke="#83918a"
              strokeWidth="1.5"
            />
            <path
              d="M50 245 H170 V325 H355 V245 H470 V260 H340 V340 H185 V260 H50Z"
              fill={`url(#${id}-layer)`}
            />
            <path
              d="M50 242 H167 V322 H358 V242 H470"
              fill="none"
              stroke="#edc7a5"
              strokeWidth="1.5"
            />
            <path
              className="film-growth-trace"
              d="M50 242 H167 V322 H358 V242 H470"
              pathLength="1"
              fill="none"
              stroke="#ffe0ba"
              strokeWidth="3"
            />
            <path d="M68 374 H450" stroke="#8b9992" strokeDasharray="3 6" />
            <path
              d="M260 290 V245 H350"
              fill="none"
              stroke="#b5bfb6"
              strokeWidth="1"
            />
            <text x="260" y="232" className="svg-label">
              TRENCH GEOMETRY
            </text>
            <text x="68" y="364" className="svg-label">
              SUBSTRATE
            </text>
            <circle cx="50" cy="245" r="3" fill="#edc7a5" />
            <path d="M50 240 V205 H130" fill="none" stroke="#b5bfb6" />
            <text x="52" y="193" className="svg-label">
              GROWING FILM
            </text>
          </g>
        </svg>
        <figcaption>Conceptual illustration · not simulation output</figcaption>
      </figure>
    );

  const project = (x: number, y: number, z: number) => ({
    x: 280 + (x - y) * 53,
    y: 92 + (x + y) * 28 + z * 66,
  });
  const points = Array.from({ length: 64 }, (_, i) => ({
    a: i % 4,
    b: Math.floor(i / 4) % 4,
    c: Math.floor(i / 16),
  }));
  return (
    <figure ref={figure} className="lattice-figure" data-visible={visible}>
      <svg
        viewBox="0 0 560 530"
        role="img"
        aria-labelledby={`${id}-title ${id}-desc`}
      >
        <title id={`${id}-title`}>Conceptual crystal lattice</title>
        <desc id={`${id}-desc`}>
          An isometric network of atoms and bonds, illustrating the repeating
          structures that inspire materials science. An artistic conceptual
          illustration, not research data.
        </desc>
        <defs>
          <radialGradient id={`${id}-halo`}>
            <stop stopColor="#dcc2a0" stopOpacity=".3" />
            <stop offset="1" stopColor="#dcc2a0" stopOpacity="0" />
          </radialGradient>
          <radialGradient id={`${id}-atom`} cx="32%" cy="28%">
            <stop stopColor="#f3d3a6" />
            <stop offset=".5" stopColor="#b8663e" />
            <stop offset="1" stopColor="#743c28" />
          </radialGradient>
          <pattern
            id={`${id}-dots`}
            width="22"
            height="22"
            patternUnits="userSpaceOnUse"
          >
            <circle cx="1" cy="1" r=".8" fill="#8d8a7a" opacity=".25" />
          </pattern>
        </defs>
        <rect width="560" height="530" fill={`url(#${id}-dots)`} />
        <circle
          className="lattice-halo"
          cx="280"
          cy="275"
          r="250"
          fill={`url(#${id}-halo)`}
        />
        <g fill="none" stroke="#a39c8a" aria-hidden="true">
          <circle
            className="lattice-orbit"
            cx="280"
            cy="275"
            r="224"
            strokeDasharray="2 8"
            opacity=".5"
          />
          <path d="M280 30 V53 M280 497 V520 M25 275 H48 M512 275 H535" />
          <path d="M58 66 H79 M68 56 V77 M479 463 H500 M489 453 V474" />
        </g>
        <g aria-hidden="true">
          <g className="lattice-structure">
            {points.flatMap(({ a, b, c }) => {
              const start = project(a, b, c);
              return [
                [a + 1, b, c],
                [a, b + 1, c],
                [a, b, c + 1],
              ]
                .filter((v) => v.every((n) => n < 4))
                .map(([x, y, z], i) => {
                  const end = project(x, y, z);
                  return (
                    <line
                      key={`${a}-${b}-${c}-${i}`}
                      x1={start.x}
                      y1={start.y}
                      x2={end.x}
                      y2={end.y}
                      stroke="#9c6b4d"
                      strokeWidth="1.25"
                      opacity={0.23 + c * 0.1}
                    />
                  );
                });
            })}
            {points.map(({ a, b, c }) => {
              const p = project(a, b, c);
              return (
                <circle
                  className="lattice-node"
                  key={`${a}-${b}-${c}`}
                  cx={p.x}
                  cy={p.y}
                  r={4.5 + c * 0.8}
                  fill={`url(#${id}-atom)`}
                  stroke="#fbefdc"
                  strokeWidth=".7"
                  style={
                    { "--phase": `${-(a + b + c) * 0.45}s` } as CSSProperties
                  }
                />
              );
            })}
          </g>
          <path d="M121 374 H61 V405" fill="none" stroke="#9b5c3e" />
          <text x="43" y="426" className="svg-label">
            ORDER AT SMALL SCALES
          </text>
          <text x="390" y="60" className="svg-label">
            MATERIAL / STRUCTURE
          </text>
          <text x="391" y="78" className="svg-label svg-fine">
            A STUDY IN POSSIBILITY
          </text>
        </g>
      </svg>
      <figcaption>
        Conceptual crystal lattice <span aria-hidden="true">↗</span>
      </figcaption>
    </figure>
  );
}
