import React from "react";

export function PinkCatLogo({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Pink Cat Logo"
    >
      {/* Soft Pink Squircle Background */}
      <rect
        x="4"
        y="4"
        width="92"
        height="92"
        rx="26"
        fill="#FDF2F8"
        stroke="#F472B6"
        strokeWidth="2.5"
      />

      {/* Cat Ears */}
      {/* Left Ear */}
      <path d="M 23 46 L 29 18 C 30 14 36 14 38 18 L 47 41 Z" fill="#F472B6" />
      <path d="M 28 43 L 32 23 C 33 20 36 20 37 23 L 43 39 Z" fill="#FDA4AF" />

      {/* Right Ear */}
      <path d="M 77 46 L 71 18 C 70 14 64 14 62 18 L 53 41 Z" fill="#F472B6" />
      <path d="M 72 43 L 68 23 C 67 20 64 20 63 23 L 57 39 Z" fill="#FDA4AF" />

      {/* Cat Head */}
      <ellipse cx="50" cy="56" rx="33" ry="27" fill="#F472B6" />
      {/* Cheeks Shadow / Soft Depth */}
      <ellipse cx="50" cy="58" rx="30" ry="23" fill="#FB7185" opacity="0.25" />

      {/* Big Kawaii Cat Eyes */}
      {/* Left Eye */}
      <ellipse cx="37" cy="53" rx="5.2" ry="6.5" fill="#1E1B4B" />
      <circle cx="35" cy="50.8" r="2.3" fill="#FFFFFF" />
      <circle cx="39.2" cy="55.8" r="1.1" fill="#FFFFFF" />

      {/* Right Eye */}
      <ellipse cx="63" cy="53" rx="5.2" ry="6.5" fill="#1E1B4B" />
      <circle cx="61" cy="50.8" r="2.3" fill="#FFFFFF" />
      <circle cx="65.2" cy="55.8" r="1.1" fill="#FFFFFF" />

      {/* Rosy Blush Cheeks */}
      <ellipse cx="26" cy="62" rx="5" ry="3" fill="#FB7185" opacity="0.6" />
      <ellipse cx="74" cy="62" rx="5" ry="3" fill="#FB7185" opacity="0.6" />

      {/* Cute Nose */}
      <polygon points="50,61 47,57.5 53,57.5" fill="#881337" />

      {/* Cute W Smile */}
      <path
        d="M 45.5 63 Q 48 66 50 63.5 Q 52 66 54.5 63"
        stroke="#881337"
        strokeWidth="1.8"
        strokeLinecap="round"
        fill="none"
      />

      {/* Whiskers */}
      {/* Left */}
      <line x1="16" y1="57" x2="27" y2="59" stroke="#E11D48" strokeWidth="1.5" strokeLinecap="round" opacity="0.75" />
      <line x1="15" y1="64" x2="26" y2="63" stroke="#E11D48" strokeWidth="1.5" strokeLinecap="round" opacity="0.75" />

      {/* Right */}
      <line x1="84" y1="57" x2="73" y2="59" stroke="#E11D48" strokeWidth="1.5" strokeLinecap="round" opacity="0.75" />
      <line x1="85" y1="64" x2="74" y2="63" stroke="#E11D48" strokeWidth="1.5" strokeLinecap="round" opacity="0.75" />

      {/* Little Head Sparkle */}
      <circle cx="50" cy="38" r="1.8" fill="#FFFFFF" opacity="0.9" />
    </svg>
  );
}
