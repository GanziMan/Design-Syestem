"use client";

import { type JSX } from "react";
import { type PropsWithChildren } from "react";

type CardProps = PropsWithChildren<{
  className?: string;
  title: string;
  href: string;
}>;

export function Card({
  className,
  title,
  children,
  href,
}: CardProps): JSX.Element {
  return (
    <a
      className={className}
      href={`${href}?utm_source=create-turbo&utm_medium=basic&utm_campaign=create-turbo"`}
      rel="noopener noreferrer"
      target="_blank"
    >
      <h2>
        {title} <span>-&gt;</span>
      </h2>
      <p>{children}</p>
    </a>
  );
}
