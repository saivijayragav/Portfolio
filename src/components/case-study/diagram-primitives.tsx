import { ReactNode } from "react";

type BoxProps = {
  x: number;
  y: number;
  width: number;
  height: number;
  label: string;
  sub?: string;
  muted?: boolean;
};

type FlowProps = {
  from: { x: number; y: number };
  to: { x: number; y: number };
  dashed?: boolean;
};

const markerId = "diagram-arrow";

export function ArrowMarker() {
  return (
    <marker
      id={markerId}
      markerWidth="8"
      markerHeight="8"
      refX="7"
      refY="4"
      orient="auto"
    >
      <path d="M0,0 L8,4 L0,8 Z" className="fill-text-secondary/60" />
    </marker>
  );
}

export function Flow({ from, to, dashed = false }: FlowProps) {
  return (
    <line
      x1={from.x}
      y1={from.y}
      x2={to.x}
      y2={to.y}
      stroke="currentColor"
      strokeOpacity="0.5"
      strokeWidth="1"
      strokeDasharray={dashed ? "4 4" : undefined}
      markerEnd={`url(#${markerId})`}
      className="text-text-secondary"
    />
  );
}

export function FlowVertical({ from, to, dashed = false }: FlowProps) {
  return <Flow from={from} to={to} dashed={dashed} />;
}

export function Box({ x, y, width, height, label, sub, muted }: BoxProps) {
  return (
    <g>
      <rect
        x={x}
        y={y}
        width={width}
        height={height}
        rx="8"
        fill="currentColor"
        fillOpacity={muted ? "0.03" : "0.05"}
        stroke="currentColor"
        strokeOpacity="0.35"
        strokeWidth="1"
        className="text-text-secondary"
      />
      <text
        x={x + width / 2}
        y={y + height / 2 - (sub ? 7 : 0)}
        textAnchor="middle"
        dominantBaseline="middle"
        fontSize="12"
        className="fill-text-primary"
      >
        {label}
      </text>
      {sub && (
        <text
          x={x + width / 2}
          y={y + height / 2 + 12}
          textAnchor="middle"
          dominantBaseline="middle"
          fontSize="10"
          fontFamily="JetBrains Mono, monospace"
          className="fill-text-tertiary"
        >
          {sub}
        </text>
      )}
    </g>
  );
}

export function DiagramFrame({ children, caption }: { children: ReactNode; caption?: string }) {
  return (
    <figure>
      <div className="overflow-x-auto rounded-xl border border-border bg-muted p-6">
        <svg
          viewBox="0 0 800 340"
          className="min-w-[640px] text-text-primary"
          fill="none"
          role="img"
        >
          <ArrowMarker />
          {children}
        </svg>
      </div>
      {caption && (
        <figcaption className="mt-3 font-mono text-xs text-text-tertiary">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
