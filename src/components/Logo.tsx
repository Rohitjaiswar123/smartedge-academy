import React from "react";
import Image from "next/image";
import Link from "next/link";

interface LogoProps {
  className?: string;
  href?: string;
  width?: number;
  height?: number;
  showSubtitle?: boolean;
}

export default function Logo({
  className = "",
  href = "/",
  width = 180,
  height = 50,
}: LogoProps) {
  const content = (
    <div className={`inline-flex items-center gap-2 relative ${className}`}>
      {/* Light Mode Logo */}
      <Image
        src="/images/smartedge-logo.png"
        alt="SmartEdge Academy Logo"
        width={width}
        height={height}
        className="w-auto h-9 sm:h-10 dark:hidden object-contain"
        priority
      />
      {/* Dark Mode Logo */}
      <Image
        src="/images/smartedge-logo-dark.png"
        alt="SmartEdge Academy Logo"
        width={width}
        height={height}
        className="w-auto h-9 sm:h-10 hidden dark:block object-contain"
        priority
      />
    </div>
  );

  if (href) {
    return (
      <Link href={href} className="inline-flex items-center group transition-transform hover:opacity-95">
        {content}
      </Link>
    );
  }

  return content;
}
