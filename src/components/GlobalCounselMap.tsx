import React, { useState } from 'react';

export interface MapRegion {
  id: string;
  name: string;
  subtext: string;
  // Node coordinates on 1000x520 canvas
  x: number;
  y: number;
  // Arc control point
  arcControlX: number;
  arcControlY: number;
  // Leader line & label coordinates
  leaderPoints: string;
  labelX: number;
  labelY: number;
  align: 'left' | 'right' | 'center';
}

const REGIONS: MapRegion[] = [
  {
    id: 'north-america',
    name: 'NORTH AMERICA',
    subtext: 'International law firms & businesses',
    x: 230,
    y: 175,
    arcControlX: 410,
    arcControlY: 105,
    leaderPoints: '230,175 160,115 130,115',
    labelX: 125,
    labelY: 95,
    align: 'right',
  },
  {
    id: 'europe',
    name: 'EUROPE',
    subtext: 'Legal counsel & partnerships',
    x: 495,
    y: 165,
    arcControlX: 555,
    arcControlY: 175,
    leaderPoints: '495,165 495,95',
    labelX: 495,
    labelY: 80,
    align: 'center',
  },
  {
    id: 'asia',
    name: 'ASIA',
    subtext: 'Corporates & individuals with legal matters in Pakistan',
    x: 755,
    y: 185,
    arcControlX: 690,
    arcControlY: 185,
    leaderPoints: '755,185 810,120 840,120',
    labelX: 845,
    labelY: 100,
    align: 'left',
  },
  {
    id: 'global-clients',
    name: 'GLOBAL CLIENTS',
    subtext: 'Trusted legal support, wherever you are',
    x: 320,
    y: 345,
    arcControlX: 450,
    arcControlY: 250,
    leaderPoints: '320,345 220,345',
    labelX: 215,
    labelY: 335,
    align: 'right',
  },
  {
    id: 'africa',
    name: 'AFRICA',
    subtext: 'Cross-border legal coordination',
    x: 520,
    y: 355,
    arcControlX: 575,
    arcControlY: 295,
    leaderPoints: '520,355 545,415 570,415',
    labelX: 575,
    labelY: 410,
    align: 'left',
  },
  {
    id: 'australia',
    name: 'AUSTRALIA',
    subtext: 'Legal representation & advisory',
    x: 825,
    y: 395,
    arcControlX: 745,
    arcControlY: 330,
    leaderPoints: '825,395 850,445 875,445',
    labelX: 880,
    labelY: 440,
    align: 'left',
  },
];

// Pakistan coordinates on 1000x520 map
const PAKISTAN_HUB = { x: 622, y: 238 };

export const GlobalCounselMap: React.FC = () => {
  const [activeRegion, setActiveRegion] = useState<string | null>(null);

  return (
    <div className="relative w-full overflow-hidden select-none">
      {/* ======================================================================
          INTERACTIVE SVG MAP CANVAS
          Exact visual rendition of the reference image:
          - Golden/bronze continents
          - Luminous arcs emanating from Pakistan
          - Glowing nodes with leader lines pointing to region labels
          - Central highlighted PAKISTAN badge
          ====================================================================== */}
      <div className="relative w-full aspect-[16/9] min-h-[360px] sm:min-h-[480px] lg:min-h-[540px] flex items-center justify-center">
        <svg
          viewBox="0 0 1000 520"
          className="w-full h-full drop-shadow-[0_10px_35px_rgba(0,0,0,0.5)]"
          preserveAspectRatio="xMidYMid meet"
          aria-label="Global Counsel Network Map connecting Pakistan to the World"
        >
          <defs>
            {/* Golden Metallic Linear Gradient for Continents */}
            <linearGradient id="goldContinentGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#C99738" stopOpacity="0.42" />
              <stop offset="45%" stopColor="#8C5C1E" stopOpacity="0.32" />
              <stop offset="85%" stopColor="#4A2E0E" stopOpacity="0.22" />
              <stop offset="100%" stopColor="#2D1A08" stopOpacity="0.18" />
            </linearGradient>

            {/* Radiant Gold Glow for Arcs & Nodes */}
            <filter id="goldGlow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur in="SourceGraphic" stdDeviation="4" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>

            {/* Intense Beacon Glow for Pakistan */}
            <filter id="pakistanEpicenterGlow" x="-100%" y="-100%" width="300%" height="300%">
              <feGaussianBlur in="SourceGraphic" stdDeviation="8" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>

            {/* Arc Beam Gradient */}
            <linearGradient id="arcBeamGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFEAA7" stopOpacity="0.95" />
              <stop offset="35%" stopColor="#E5B842" stopOpacity="0.85" />
              <stop offset="70%" stopColor="#C99738" stopOpacity="0.65" />
              <stop offset="100%" stopColor="#9B6C1E" stopOpacity="0.4" />
            </linearGradient>
          </defs>

          {/* ==================================================================
              CONTINENTS VECTOR SILHOUETTE (Golden Bronze Metallic Texture)
              ================================================================== */}
          <g
            fill="url(#goldContinentGrad)"
            stroke="#E5B842"
            strokeWidth="0.8"
            strokeOpacity="0.45"
            strokeLinejoin="round"
          >
            {/* North America & Greenland */}
            <path d="M 125,75 L 145,65 L 175,70 L 190,85 L 175,100 L 140,95 Z" />
            <path d="M 60,140 Q 90,110 135,105 Q 180,95 235,115 Q 280,130 305,170 Q 280,210 240,230 Q 215,260 210,290 Q 185,270 170,240 Q 140,250 115,220 Q 80,200 60,165 Z" />
            <path d="M 210,290 Q 230,315 250,335 L 240,345 Q 220,325 205,300 Z" />

            {/* South America */}
            <path d="M 255,335 Q 295,330 330,360 Q 365,400 345,450 Q 320,490 295,505 Q 280,480 285,440 Q 270,390 255,335 Z" />

            {/* Europe */}
            <path d="M 440,115 Q 460,95 480,105 Q 500,120 485,150 Q 450,155 440,130 Z" />
            <path d="M 465,150 Q 510,135 550,145 Q 560,185 520,200 Q 480,205 460,180 Z" />

            {/* Africa */}
            <path d="M 455,210 Q 520,195 570,230 Q 590,280 575,340 Q 545,410 515,440 Q 490,410 485,340 Q 450,290 445,240 Z" />
            <path d="M 590,360 Q 600,350 605,370 Q 595,400 585,390 Z" />

            {/* Asia & Middle East */}
            <path d="M 550,140 Q 640,110 740,120 Q 820,130 870,180 Q 840,240 780,260 Q 720,245 680,270 Q 640,290 610,260 Q 570,260 550,210 Z" />
            <path d="M 680,270 Q 720,290 705,345 Q 675,355 660,310 Z" />
            <path d="M 740,290 Q 790,310 820,350 Q 780,365 745,330 Z" />
            <path d="M 850,200 Q 870,190 875,220 Q 855,250 845,225 Z" />

            {/* Australia & Oceania */}
            <path d="M 770,365 Q 835,355 885,390 Q 880,440 840,460 Q 780,455 765,410 Z" />
            <path d="M 905,430 Q 920,425 915,455 Q 895,475 900,450 Z" />
          </g>

          {/* ==================================================================
              GOLDEN CONNECTION ARCS RADIATING FROM PAKISTAN
              Exact curved parabolic trajectories from reference image
              ================================================================== */}
          <g>
            {REGIONS.map((region) => {
              const isHovered = activeRegion === region.id;
              const hasActive = activeRegion !== null;
              const strokeOpacity = isHovered ? 1 : hasActive ? 0.35 : 0.75;
              const strokeWidth = isHovered ? 2.5 : 1.6;

              return (
                <g key={`arc-${region.id}`}>
                  {/* Subtle Glow Under-layer */}
                  <path
                    d={`M ${PAKISTAN_HUB.x} ${PAKISTAN_HUB.y} Q ${region.arcControlX} ${region.arcControlY} ${region.x} ${region.y}`}
                    fill="none"
                    stroke="#E5B842"
                    strokeWidth={strokeWidth + 3}
                    strokeOpacity={isHovered ? 0.6 : 0.2}
                    filter="url(#goldGlow)"
                  />

                  {/* Sharp Crisp Core Beam */}
                  <path
                    d={`M ${PAKISTAN_HUB.x} ${PAKISTAN_HUB.y} Q ${region.arcControlX} ${region.arcControlY} ${region.x} ${region.y}`}
                    fill="none"
                    stroke="url(#arcBeamGrad)"
                    strokeWidth={strokeWidth}
                    strokeOpacity={strokeOpacity}
                    className="transition-all duration-300"
                  />
                </g>
              );
            })}
          </g>

          {/* ==================================================================
              REGIONAL NODES & FINE ANGLED LEADER LINES
              ================================================================== */}
          {REGIONS.map((region) => {
            const isHovered = activeRegion === region.id;

            return (
              <g
                key={`node-${region.id}`}
                className="cursor-pointer group"
                onMouseEnter={() => setActiveRegion(region.id)}
                onMouseLeave={() => setActiveRegion(null)}
              >
                {/* Angled Gold Leader Line */}
                <polyline
                  points={region.leaderPoints}
                  fill="none"
                  stroke="#E5B842"
                  strokeWidth="1.2"
                  strokeOpacity={isHovered ? 0.95 : 0.6}
                  className="transition-all duration-300"
                />

                {/* Outer Golden Target Halo */}
                <circle
                  cx={region.x}
                  cy={region.y}
                  r={isHovered ? 14 : 10}
                  fill="#E5B842"
                  fillOpacity={isHovered ? 0.25 : 0.12}
                  stroke="#E5B842"
                  strokeWidth="1"
                  strokeOpacity={isHovered ? 0.8 : 0.4}
                  className="transition-all duration-300"
                />

                {/* Inner Core Glowing Node */}
                <circle
                  cx={region.x}
                  cy={region.y}
                  r={isHovered ? 5.5 : 4}
                  fill="#FFF2B2"
                  stroke="#E5B842"
                  strokeWidth="1.5"
                  filter="url(#goldGlow)"
                  className="transition-all duration-300"
                />

                {/* Region Callout Label on SVG canvas */}
                <g className="transition-all duration-300">
                  <text
                    x={region.labelX}
                    y={region.labelY}
                    textAnchor={
                      region.align === 'right'
                        ? 'end'
                        : region.align === 'center'
                        ? 'middle'
                        : 'start'
                    }
                    className="font-sans font-bold text-[12px] sm:text-[13px] fill-white tracking-[0.14em] uppercase"
                  >
                    {region.name}
                  </text>
                  <text
                    x={region.labelX}
                    y={region.labelY + 16}
                    textAnchor={
                      region.align === 'right'
                        ? 'end'
                        : region.align === 'center'
                        ? 'middle'
                        : 'start'
                    }
                    className="font-sans font-normal text-[10px] sm:text-[11px] fill-[#E5B842]/90 tracking-normal"
                  >
                    {region.subtext}
                  </text>
                </g>
              </g>
            );
          })}

          {/* ==================================================================
              CENTRAL EPICENTER: PAKISTAN HUB
              Radiant Golden Node + Distinctive Dark/Gold Plaque Badge
              ================================================================== */}
          <g className="cursor-default">
            {/* Radiant Ambient Halo */}
            <circle
              cx={PAKISTAN_HUB.x}
              cy={PAKISTAN_HUB.y}
              r="24"
              fill="#E5B842"
              fillOpacity="0.18"
              filter="url(#pakistanEpicenterGlow)"
            />

            {/* Pakistan Concentric Rings */}
            <circle
              cx={PAKISTAN_HUB.x}
              cy={PAKISTAN_HUB.y}
              r="14"
              fill="none"
              stroke="#E5B842"
              strokeWidth="1.5"
              strokeOpacity="0.75"
            />
            <circle
              cx={PAKISTAN_HUB.x}
              cy={PAKISTAN_HUB.y}
              r="7"
              fill="#FFFFFF"
              stroke="#E5B842"
              strokeWidth="2"
              filter="url(#goldGlow)"
            />

            {/* Iconic Dark/Gold Plaque Badge: [ PAKISTAN ] (from reference image) */}
            <g transform={`translate(${PAKISTAN_HUB.x + 18}, ${PAKISTAN_HUB.y - 12})`}>
              {/* Badge Background */}
              <rect
                x="0"
                y="0"
                width="82"
                height="24"
                rx="3"
                fill="#150206"
                stroke="#E5B842"
                strokeWidth="1.2"
                className="drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]"
              />
              {/* Badge Text */}
              <text
                x="41"
                y="16"
                textAnchor="middle"
                className="font-sans font-bold text-[11px] fill-[#E5B842] tracking-[0.2em] uppercase"
              >
                PAKISTAN
              </text>
            </g>
          </g>
        </svg>
      </div>

      {/* ======================================================================
          MOBILE & ACCESSIBLE REGIONAL CAPABILITIES LIST
          Ensures high touch legibility on smaller screens
          ====================================================================== */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:hidden gap-3 mt-4 pt-4 border-t border-[#E5B842]/20">
        {REGIONS.map((region) => (
          <div
            key={`mobile-${region.id}`}
            className="flex items-start gap-3 p-3 rounded-xl bg-white/[0.03] border border-[#E5B842]/20 text-left"
          >
            <span className="w-2 h-2 rounded-full bg-[#E5B842] mt-1 shrink-0 shadow-[0_0_8px_#E5B842]" />
            <div>
              <div className="font-sans text-[11.5px] uppercase tracking-[0.14em] font-bold text-white">
                {region.name}
              </div>
              <div className="font-sans text-[12px] text-[#E5B842] mt-0.5">
                {region.subtext}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
