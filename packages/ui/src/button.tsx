"use client";

import { type PropsWithChildren } from "react";

type ButtonProps = PropsWithChildren<{
  className?: string;
  appName: string;
}>;

export const Button = ({ children, className, appName }: ButtonProps) => {
  return (
    <button
      className={className}
      onClick={() => alert(`Hello from your ${appName} app!`)}
    >
      {children}
    </button>
  );
};
