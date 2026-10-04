import React, { useEffect, useState } from 'react';
import omarImg from '../assets/images/team_member_omar_1791081602302.jpg';
import laylaImg from '../assets/images/team_member_layla_1791081614356.jpg';
import draperImg from '../assets/images/team_member_draper_1791081626182.jpg';
import mariamImg from '../assets/images/team_member_mariam_1791081638034.jpg';

interface TeamMember {
  id: string;
  name: string;
  designation: string;
  image: string;
}

const TEAM_MEMBERS: TeamMember[] = [
  {
    id: 'omar-mehri',
    name: 'Omar Mehri',
    designation: 'Managing Partner',
    image: omarImg,
  },
  {
    id: 'layla-samuel',
    name: 'Layla Samuel',
    designation: 'Senior Corporate Counsel',
    image: laylaImg,
  },
  {
    id: 'draper-timothy',
    name: 'Draper Timothy',
    designation: 'Head of Civil Litigation',
    image: draperImg,
  },
  {
    id: 'mariam-shah',
    name: 'Mariam Shah',
    designation: 'Senior Property & Estate Counsel',
    image: mariamImg,
  },
];

/**
 * Removes the outer studio white background using an edge-connected flood fill (BFS)
 * with soft alpha feathering so internal whites (shirts, eyes) remain 100% intact.
 */
function useStudioCutout(src: string): string {
  const [cutoutUrl, setCutoutUrl] = useState<string>(src);

  useEffect(() => {
    let isCancelled = false;
    const img = new Image();
    img.crossOrigin = 'anonymous';

    img.onload = () => {
      if (isCancelled) return;
      try {
        // Downscale canvas to max 420px width for fast, low-memory GPU texture compositing
        const maxW = 420;
        const scale = Math.min(1, maxW / (img.naturalWidth || maxW));
        const width = Math.round(img.naturalWidth * scale);
        const height = Math.round(img.naturalHeight * scale);

        const canvas = document.createElement('canvas');
        canvas.width = width;
        canvas.height = height;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        ctx.drawImage(img, 0, 0, width, height);
        const imageData = ctx.getImageData(0, 0, width, height);
        const data = imageData.data;
        const totalPixels = width * height;
        const visited = new Uint8Array(totalPixels);

        const isBackgroundCandidate = (idx: number): boolean => {
          const r = data[idx];
          const g = data[idx + 1];
          const b = data[idx + 2];
          const maxC = Math.max(r, g, b);
          const minC = Math.min(r, g, b);
          // Studio light/white background check: high brightness & low saturation
          return r > 218 && g > 218 && b > 218 && maxC - minC < 26;
        };

        const queue = new Int32Array(totalPixels);
        let head = 0;
        let tail = 0;

        const enqueueIfBg = (x: number, y: number) => {
          if (x < 0 || x >= width || y < 0 || y >= height) return;
          const p = y * width + x;
          if (visited[p]) return;
          const idx = p * 4;
          if (isBackgroundCandidate(idx)) {
            visited[p] = 1;
            queue[tail++] = p;
          }
        };

        // Seed flood-fill along top, left, and right borders
        for (let x = 0; x < width; x++) {
          enqueueIfBg(x, 0);
        }
        for (let y = 0; y < Math.floor(height * 0.85); y++) {
          enqueueIfBg(0, y);
          enqueueIfBg(width - 1, y);
        }

        while (head < tail) {
          const p = queue[head++];
          const idx = p * 4;
          data[idx + 3] = 0; // Make background transparent

          const x = p % width;
          const y = (p - x) / width;

          if (x > 0) enqueueIfBg(x - 1, y);
          if (x + 1 < width) enqueueIfBg(x + 1, y);
          if (y > 0) enqueueIfBg(x, y - 1);
          if (y + 1 < height) enqueueIfBg(x, y + 1);
        }

        // Feather 1-2px boundary edges for smooth anti-aliased cutout
        for (let y = 1; y < height - 1; y++) {
          for (let x = 1; x < width - 1; x++) {
            const p = y * width + x;
            if (visited[p]) continue;
            const transparentNeighbors =
              visited[p - 1] +
              visited[p + 1] +
              visited[p - width] +
              visited[p + width];
            if (transparentNeighbors > 0) {
              const idx = p * 4;
              const brightness = (data[idx] + data[idx + 1] + data[idx + 2]) / 3;
              if (brightness > 200) {
                data[idx + 3] = Math.round(255 * (1 - transparentNeighbors * 0.2));
              }
            }
          }
        }

        ctx.putImageData(imageData, 0, 0);
        const resultUrl = canvas.toDataURL('image/png');
        if (!isCancelled) {
          setCutoutUrl(resultUrl);
        }
      } catch {
        // Fallback to original image if canvas manipulation is restricted
      }
    };

    img.src = src;
    return () => {
      isCancelled = true;
    };
  }, [src]);

  return cutoutUrl;
}

const TeamMemberCard: React.FC<{ member: TeamMember }> = ({ member }) => {
  const cutoutSrc = useStudioCutout(member.image);

  return (
    <div className="group relative w-full max-w-[295px] mx-auto aspect-[3/4.15] select-none overflow-hidden">
      {/* 
        1. Left Vertical Burgundy Pillar (Matches reference card's red left bar):
           - Covers ~46% of the card width on the left
           - Rounded top-left corner (rounded-tl-[38px])
           - Contains vertical outlined watermark text "Directors"
      */}
      <div
        className="absolute top-0 left-0 bottom-0 w-[46%] bg-[#5B1111] rounded-tl-[38px] z-[1] overflow-hidden flex items-start justify-center pt-10"
        aria-hidden="true"
      >
        <span
          className="font-sans font-extrabold text-[44px] sm:text-[48px] tracking-[0.04em] leading-none select-none pointer-events-none whitespace-nowrap"
          style={{
            writingMode: 'vertical-rl',
            transform: 'rotate(180deg)',
            WebkitTextStroke: '1.25px rgba(253, 240, 213, 0.34)',
            color: 'transparent',
          }}
        >
          Directors
        </span>
      </div>

      {/* 
        2. Foreground Cutout Portrait:
           - Overlaps both the left Burgundy pillar and the right Cream space
      */}
      <div className="absolute inset-x-0 bottom-0 top-5 z-[2] flex items-end justify-center pointer-events-none">
        <img
          src={cutoutSrc}
          alt={`${member.name} — ${member.designation}`}
          loading="lazy"
          decoding="async"
          referrerPolicy="no-referrer"
          className="w-full h-full object-contain object-bottom transition-transform duration-500 group-hover:scale-[1.02]"
        />
      </div>

      {/* 
        3. Bottom Full-Width Burgundy Gradient Fade & Member Info Lockup:
           - Smoothly fades upward from solid Primary Burgundy (#5B1111) at the bottom edge
           - Displays Name and Designation at the bottom-left
      */}
      <div
        className="absolute inset-x-0 bottom-0 h-[36%] z-[3] pointer-events-none"
        style={{
          background:
            'linear-gradient(to top, #5B1111 0%, rgba(91, 17, 17, 0.92) 38%, rgba(91, 17, 17, 0.45) 72%, transparent 100%)',
        }}
        aria-hidden="true"
      />

      <div className="absolute bottom-3.5 left-4 right-3 z-[4] text-left">
        <h3 className="font-sans font-bold text-[18px] sm:text-[19px] text-[#FDF0D5] tracking-[-0.01em] leading-tight">
          {member.name}
        </h3>
        <p className="font-sans font-normal text-[12px] sm:text-[12.5px] text-[#FDF0D5]/90 tracking-[0.02em] mt-0.5">
          {member.designation}
        </p>
      </div>
    </div>
  );
};

export const TeamSection: React.FC = () => {
  return (
    <section
      id="team"
      className="relative z-[14] -mt-10 sm:-mt-12 lg:-mt-14 pt-20 sm:pt-24 md:pt-28 pb-24 md:pb-32 bg-[#FFF9EC] rounded-t-[50px] sm:rounded-t-[65px] lg:rounded-t-[80px] rounded-b-[50px] sm:rounded-b-[65px] lg:rounded-b-[80px] border-t-2 border-b-2 border-[#5B1111]/25 shadow-[0_-25px_50px_-15px_rgba(62,8,8,0.25),0_30px_60px_-15px_rgba(30,4,4,0.55)] overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Centered Heading */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-[3.25rem] font-semibold text-[#171313] leading-[1.08] tracking-[-0.02em]">
            Board Of Directors
          </h2>
        </div>

        {/* 4 Team Member Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-7 items-end">
          {TEAM_MEMBERS.map((member) => (
            <TeamMemberCard key={member.id} member={member} />
          ))}
        </div>

        {/* Bottom Centered Description Text matching the reference layout */}
        <p className="mt-10 sm:mt-12 max-w-4xl mx-auto text-center font-sans text-[15px] sm:text-[16px] text-[#171313]/80 leading-[1.65] font-normal">
          Our chambers are led by seasoned partners and senior advocates bringing decades of courtroom trial experience, corporate governance advisory, and constitutional advocacy to every client mandate.
        </p>
      </div>
    </section>
  );
};
