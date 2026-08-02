import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
};

export function Container({ children, className = "" }: Props) {
  return (
    <div className={`mx-auto w-full max-w-[72rem] px-6 md:px-8 lg:px-0 ${className}`}>
      {children}
    </div>
  );
}
