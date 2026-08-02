import { ReactNode } from "react";

export const heroSizes: Record<string, { width: number; height: number }> = {
  binarysync: { width: 517, height: 553 },
  neuroscreen: { width: 473, height: 546 },
  "ai-service-orchestrator": { width: 464, height: 557 },
  "printing-shop": { width: 740, height: 381 },
  eva: { width: 718, height: 377 },
};

function BinarySyncVisual() {
  const chunks = [
    { x: 70, fill: false },
    { x: 160, fill: false },
    { x: 250, fill: true },
    { x: 340, fill: false },
    { x: 430, fill: true },
    { x: 520, fill: false },
    { x: 610, fill: false },
    { x: 700, fill: false },
  ];
  return (
    <svg viewBox="0 0 800 600" className="h-full w-full" fill="none" role="img" aria-label="BinarySync content-defined chunking and delta sync">
      <g className="text-text-secondary" stroke="currentColor" strokeOpacity="0.35" strokeWidth="1">
        {chunks.map((c) => (
          <rect
            key={c.x}
            x={c.x}
            y={110}
            width={80}
            height={52}
            rx="6"
            fill={c.fill ? "currentColor" : "transparent"}
            fillOpacity={c.fill ? "0.12" : "0"}
          />
        ))}
      </g>

      <text x={70} y={205} fontSize="11" fontFamily="JetBrains Mono, monospace" className="fill-text-tertiary">
        chunk
      </text>

      <text x={400} y={76} textAnchor="middle" fontSize="13" className="fill-text-secondary">
        binary file
      </text>

      <g className="text-text-secondary" stroke="currentColor" strokeOpacity="0.6" strokeWidth="1">
        {chunks
          .filter((c) => c.fill)
          .map((c) => (
            <line key={c.x} x1={c.x + 40} y1={162} x2={c.x + 40} y2={260} />
          ))}
      </g>

      <g className="text-availability" stroke="currentColor" strokeWidth="1">
        {chunks
          .filter((c) => c.fill)
          .map((c) => (
            <path
              key={c.x}
              d={`M ${c.x + 40} 246 l 6 8 m -12 0 l 6 -8`}
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          ))}
      </g>

      <g className="text-text-secondary">
        <rect
          x={chunks
            .filter((c) => c.fill)
            .map((c) => c.x)
            .reduce((a, b) => Math.min(a, b), 0) - 20}
          y={270}
          width={220}
          height={70}
          rx="10"
          fill="currentColor"
          fillOpacity="0.05"
          stroke="currentColor"
          strokeOpacity="0.35"
          strokeWidth="1"
        />
        <text x={-20 + 110} y={300} textAnchor="middle" fontSize="13" className="fill-text-primary">
          only changed
        </text>
        <text x={-20 + 110} y={320} textAnchor="middle" fontSize="11" fontFamily="JetBrains Mono, monospace" className="fill-text-tertiary">
          chunks uploaded
        </text>
      </g>

      <g className="text-text-secondary" stroke="currentColor" strokeOpacity="0.6" strokeWidth="1">
        <line x1={-20 + 110} y1={340} x2={-20 + 110} y2={420} />
        <path d="M -20+100 412 l 10 12 m -10 -12 m 20 0 l -10 12" transform="translate(0,0)" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      </g>

      <g className="text-text-secondary">
        <rect
          x={440}
          y={430}
          width={270}
          height={84}
          rx="10"
          fill="currentColor"
          fillOpacity="0.05"
          stroke="currentColor"
          strokeOpacity="0.35"
          strokeWidth="1"
        />
        <text x={575} y={462} textAnchor="middle" fontSize="13" className="fill-text-primary">
          chunk store
        </text>
        <text x={575} y={484} textAnchor="middle" fontSize="11" fontFamily="JetBrains Mono, monospace" className="fill-text-tertiary">
          AWS S3 · SHA-256
        </text>
      </g>

      <g className="text-text-secondary" stroke="currentColor" strokeOpacity="0.6" strokeWidth="1">
        <line x1={110} y1={415} x2={110} y2={430} />
        <line x1={110} y1={430} x2={440} y2={472} />
      </g>

      <text x={90} y={560} fontSize="11" fontFamily="JetBrains Mono, monospace" className="fill-text-tertiary">
        delta sync — only missing chunks are transferred
      </text>
    </svg>
  );
}

function AisoVisual() {
  return (
    <svg viewBox="0 0 800 600" className="h-full w-full" fill="none" role="img" aria-label="AI Service Orchestrator declarative workflow execution">
      <g className="text-text-secondary">
        <rect
          x={60}
          y={80}
          width={180}
          height={300}
          rx="10"
          fill="currentColor"
          fillOpacity="0.03"
          stroke="currentColor"
          strokeOpacity="0.35"
          strokeWidth="1"
        />
        <text x={150} y={108} textAnchor="middle" fontSize="12" className="fill-text-secondary">
          workflow.yml
        </text>
        <g fontFamily="JetBrains Mono, monospace" fontSize="11" className="fill-text-tertiary">
          <text x={80} y={140}>steps:</text>
          <text x={96} y={164}>- extract</text>
          <text x={96} y={188}>- analyze</text>
          <text x={96} y={212}>- summarize</text>
          <text x={80} y={244}>parallel:</text>
          <text x={96} y={268}>- classify</text>
          <text x={96} y={292}>- tag</text>
          <text x={80} y={324}>retries: 3</text>
          <text x={80} y={348}>timeout: 60s</text>
        </g>
      </g>

      <g className="text-text-secondary" stroke="currentColor" strokeOpacity="0.6" strokeWidth="1">
        <line x1={240} y1={230} x2={330} y2={230} />
        <path d="M 320 224 l 10 6 m 0 0 l -10 6" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      </g>

      <g className="text-text-secondary">
        <rect
          x={330}
          y={180}
          width={160}
          height={100}
          rx="10"
          fill="currentColor"
          fillOpacity="0.05"
          stroke="currentColor"
          strokeOpacity="0.35"
          strokeWidth="1"
        />
        <text x={410} y={222} textAnchor="middle" fontSize="13" className="fill-text-primary">
          execution engine
        </text>
        <text x={410} y={244} textAnchor="middle" fontSize="11" fontFamily="JetBrains Mono, monospace" className="fill-text-tertiary">
          retry · branch
        </text>
        <text x={410} y={262} textAnchor="middle" fontSize="11" fontFamily="JetBrains Mono, monospace" className="fill-text-tertiary">
          parallel
        </text>
      </g>

      <g className="text-text-secondary" stroke="currentColor" strokeOpacity="0.6" strokeWidth="1">
        <line x1={490} y1={205} x2={560} y2={150} />
        <line x1={490} y1={230} x2={560} y2={230} />
        <line x1={490} y1={255} x2={560} y2={310} />
      </g>

      <g className="text-text-secondary">
        <rect x={560} y={120} width={170} height={60} rx="10" fill="currentColor" fillOpacity="0.05" stroke="currentColor" strokeOpacity="0.35" strokeWidth="1" />
        <text x={645} y={150} textAnchor="middle" fontSize="12" className="fill-text-primary">
          provider A
        </text>
        <text x={645} y={168} textAnchor="middle" fontSize="10" fontFamily="JetBrains Mono, monospace" className="fill-text-tertiary">
          OpenAPI
        </text>
      </g>
      <g className="text-text-secondary">
        <rect x={560} y={200} width={170} height={60} rx="10" fill="currentColor" fillOpacity="0.05" stroke="currentColor" strokeOpacity="0.35" strokeWidth="1" />
        <text x={645} y={230} textAnchor="middle" fontSize="12" className="fill-text-primary">
          provider B
        </text>
        <text x={645} y={248} textAnchor="middle" fontSize="10" fontFamily="JetBrains Mono, monospace" className="fill-text-tertiary">
          OpenAPI
        </text>
      </g>
      <g className="text-text-secondary">
        <rect x={560} y={280} width={170} height={60} rx="10" fill="currentColor" fillOpacity="0.05" stroke="currentColor" strokeOpacity="0.35" strokeWidth="1" />
        <text x={645} y={310} textAnchor="middle" fontSize="12" className="fill-text-primary">
          provider C
        </text>
        <text x={645} y={328} textAnchor="middle" fontSize="10" fontFamily="JetBrains Mono, monospace" className="fill-text-tertiary">
          OpenAPI
        </text>
      </g>

      <text x={400} y={520} textAnchor="middle" fontSize="11" fontFamily="JetBrains Mono, monospace" className="fill-text-tertiary">
        declarative workflows — no orchestration code required
      </text>
    </svg>
  );
}

const visuals: Record<string, () => ReactNode> = {
  binarysync: BinarySyncVisual,
  "ai-service-orchestrator": AisoVisual,
};

export function ProjectVisual({ slug }: { slug: string }) {
  const Visual = visuals[slug];
  if (!Visual) return null;
  return <Visual />;
}
