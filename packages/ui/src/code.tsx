"use client";
import { type JSX } from "react";
import { type PropsWithChildren } from "react";

export type CodeProps = PropsWithChildren<{
  className?: string;
}>;

export function Code({ children, className }: CodeProps): JSX.Element {
  return <code className={className}>{children}</code>;
}
