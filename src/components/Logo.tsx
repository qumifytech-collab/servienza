"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";

interface LogoProps {
  dark?: boolean;
  size?: "sm" | "md" | "lg" | "xl";
  showTagline?: boolean;
  className?: string;
}

const sizes = {
  sm: { icon: 28, iconRx: 6, fontSize: 17, sFont: 18, tagSize: 7, tagY: 24, gap: 36 },
  md: { icon: 34, iconRx: 8, fontSize: 20, sFont: 22, tagSize: 8, tagY: 28, gap: 44 },
  lg: { icon: 44, iconRx: 10, fontSize: 24, sFont: 28, tagSize: 10, tagY: 36, gap: 56 },
  xl: { icon: 56, iconRx: 14, fontSize: 30, sFont: 36, tagSize: 12, tagY: 46, gap: 72 },
};

const Logo = ({ dark = false, size = "md", showTagline = false, className }: LogoProps) => {
  const s = sizes[size];
  const textColor = dark ? "white" : "#1a1f3d";
  const tagColor = dark ? "rgba(255,255,255,0.4)" : "#8b90a5";

  return (
    <Link href="/" className={cn("flex items-center gap-2.5 shrink-0", className)}>
      {/* Tilted S mark */}
      <svg
        width={s.icon}
        height={s.icon + 4}
        viewBox={`0 0 ${s.icon + 4} ${s.icon + 4}`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0"
      >
        <g transform={`rotate(-8, ${(s.icon + 4) / 2}, ${(s.icon + 4) / 2})`}>
          <rect
            x="2"
            y="2"
            width={s.icon}
            height={s.icon}
            rx={s.iconRx}
            fill="#a855f7"
          />
          <text
            x={2 + s.icon / 2}
            y={2 + s.icon * 0.72}
            textAnchor="middle"
            style={{
              fontFamily: "Georgia, serif",
              fontSize: `${s.sFont}px`,
              fill: "white",
              fontWeight: 400,
            }}
          >
            S
          </text>
        </g>
      </svg>

      {/* Wordmark */}
      <div className="flex flex-col justify-center">
        <span
          style={{
            fontSize: `${s.fontSize}px`,
            color: textColor,
            letterSpacing: "-0.5px",
            lineHeight: 1.1,
            fontWeight: 600,
          }}
        >
          Servienza
        </span>
        {showTagline && (
          <span
            style={{
              fontFamily: "inherit",
              fontSize: `${s.tagSize}px`,
              color: tagColor,
              letterSpacing: "2px",
              textTransform: "uppercase",
              lineHeight: 1.4,
            }}
          >
            field service platform
          </span>
        )}
      </div>
    </Link>
  );
};

export default Logo;
