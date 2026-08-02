import { ReactNode, RefObject } from "react";

type Props = {
  id?: string;
  children: ReactNode;
  className?: string;
};

export function Section({ id, children, className = "" }: Props) {
  return (
    <section id={id} className={`section-padding ${className}`}>
      {children}
    </section>
  );
}
