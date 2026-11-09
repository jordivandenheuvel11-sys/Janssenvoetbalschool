"use client";

import React from "react";
import Link from "next/link";
import {
  useContactModal,
  type ContactAanvraagType,
} from "./ContactModalContext";

type ContactLinkProps = {
  href?: string;
  type?: ContactAanvraagType;
  subject?: string;
  message?: string;
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
};

function inferTypeFromHref(href: string): ContactAanvraagType {
  if (href.includes("proefles")) return "proefles";
  if (href.toLowerCase().includes("mini")) return "mini-voetbalschool";
  return "contact";
}

function subjectFromHref(href: string): string | undefined {
  try {
    const url = new URL(href, "https://example.com");
    const onderwerp = url.searchParams.get("onderwerp");
    return onderwerp ?? undefined;
  } catch {
    return undefined;
  }
}

/**
 * Opent het meerstaps contactformulier als popup.
 * `href` blijft staan voor SEO / no-JS fallback.
 */
export default function ContactLink({
  href = "/contact",
  type,
  subject,
  message,
  children,
  className,
  style,
  onClick,
}: ContactLinkProps) {
  const { openContactModal } = useContactModal();
  const resolvedType = type ?? inferTypeFromHref(href);
  const resolvedSubject = subject ?? subjectFromHref(href);

  return (
    <Link
      href={href}
      className={className}
      style={style}
      onClick={(e) => {
        e.preventDefault();
        openContactModal({
          type: resolvedType,
          subject: resolvedSubject,
          message,
        });
        onClick?.(e);
      }}
    >
      {children}
    </Link>
  );
}
