type Props = {
  children: string;
  className?: string;
};

export function Tag({ children, className = "" }: Props) {
  return (
    <span
      className={`inline-block rounded-full border border-border px-3 py-1 font-mono text-xs text-text-secondary ${className}`}
    >
      {children}
    </span>
  );
}
