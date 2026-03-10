import React, { PropsWithChildren } from "react";

export default function HeroFrame({ children }: PropsWithChildren<{}>) {
  return (
    <div className="relative mx-auto w-full sm:max-w-[720px] lg:max-w-[962px] rounded-3xl">
      <div className="block w-full pointer-events-none shadow-2xl rounded-3xl overflow-visible">
      <svg
        className="w-full"
        width="962"
        height="606"
        viewBox="0 0 962 606"
        fill="none"
        preserveAspectRatio="xMidYMid meet"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_d_10159_3695)">
          <path
            d="M4 15C4 6.71572 10.7157 0 19 0H943C951.284 0 958 6.71573 958 15V583C958 591.284 951.284 598 943 598H19C10.7157 598 4 591.284 4 583V15Z"
            fill="url(#paint0_linear_10159_3695)"
            stroke="rgba(0,0,0,0.06)"
            strokeWidth="1"
            shapeRendering="crispEdges"
          />
        </g>
        <defs>
          <filter
            id="filter0_d_10159_3695"
            x="0"
            y="0"
            width="962"
            height="606"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="6" />
            <feGaussianBlur stdDeviation="6" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.35 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_10159_3695" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_10159_3695" result="shape" />
          </filter>
            <linearGradient id="paint0_linear_10159_3695" x1="481" y1="0" x2="481" y2="598" gradientUnits="userSpaceOnUse">
            <stop stopColor="white" stopOpacity="0.85" />
            <stop offset="1" stopColor="white" stopOpacity="0.85" />
          </linearGradient>
        </defs>
      </svg>
      </div>

      <div
        className="absolute inset-4 md:inset-12 p-6 md:p-12 bg-white/80 backdrop-blur-md rounded-[24px]"
        style={{ border: "1.8px solid #8B1E1E", boxShadow: "inset 0 1px 0 rgba(255,255,255,0.6)" }}
      >
        {children}
      </div>
    </div>
  );
}
