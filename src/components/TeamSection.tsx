import React, { useEffect, useState } from 'react';
import qadeerCeoImg from '../assets/images/qadeer_hussain_ceo.png';
import arfanImg from '../assets/images/arfan_shahzad.png';

interface TeamMember {
  id: string;
  name: string;
  designation: string;
  pillarWatermark: string;
  image: string;
  maxAspectRatio?: number;
}

const TEAM_MEMBERS: TeamMember[] = [
  {
    id: 'qadeer-hussain',
    name: 'Qadeer Hussain',
    designation: 'CEO',
    pillarWatermark: 'CEO',
    image: qadeerCeoImg,
    maxAspectRatio: 1.22,
  },
  {
    id: 'arfan-shahzad',
    name: 'Arfan Shahzad',
    designation: 'Advocate',
    pillarWatermark: 'Advocate',
    image: arfanImg,
    maxAspectRatio: 1.22,
  },
];

/**
 * Removes any outer solid/studio background if present, detects the exact bounding box
 * of the person, and normalizes the subject onto a uniform 360x460 portrait canvas
 * so every card's person image matches in height and scale.
 */
function useStudioCutout(src: string, maxAspectRatio = 1.22): string {
  const [cutoutUrl, setCutoutUrl] = useState<string>(src);

  useEffect(() => {
    let isCancelled = false;
    const img = new Image();
    img.crossOrigin = 'anonymous';

    img.onload = () => {
      if (isCancelled) return;
      try {
        const srcW = img.naturalWidth || 460;
        const srcH = img.naturalHeight || 460;

        const maxDim = 520;
        const scale = Math.min(1, maxDim / Math.max(srcW, srcH));
        const width = Math.round(srcW * scale);
        const height = Math.round(srcH * scale);

        const canvas = document.createElement('canvas');
        canvas.width = width;
        canvas.height = height;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        ctx.drawImage(img, 0, 0, width, height);
        const imageData = ctx.getImageData(0, 0, width, height);
        const data = imageData.data;
        const totalPixels = width * height;

        // Check if corner pixels are opaque (needs background flood-fill removal)
        const tlAlpha = data[(2 * width + 2) * 4 + 3];
        const trAlpha = data[(2 * width + (width - 3)) * 4 + 3];

        if (tlAlpha > 200 || trAlpha > 200) {
          const visited = new Uint8Array(totalPixels);
          const tlIdx = (2 * width + 2) * 4;
          const trIdx = (2 * width + (width - 3)) * 4;
          const bgR1 = data[tlIdx];
          const bgG1 = data[tlIdx + 1];
          const bgB1 = data[tlIdx + 2];
          const bgR2 = data[trIdx];
          const bgG2 = data[trIdx + 1];
          const bgB2 = data[trIdx + 2];

          const isBackgroundCandidate = (idx: number, parentIdx?: number): boolean => {
            if (data[idx + 3] < 20) return true;
            const r = data[idx];
            const g = data[idx + 1];
            const b = data[idx + 2];
            const maxC = Math.max(r, g, b);
            const minC = Math.min(r, g, b);

            if (r > 210 && g > 210 && b > 210 && maxC - minC < 30) {
              return true;
            }

            const dist1 = Math.abs(r - bgR1) + Math.abs(g - bgG1) + Math.abs(b - bgB1);
            const dist2 = Math.abs(r - bgR2) + Math.abs(g - bgG2) + Math.abs(b - bgB2);
            if (Math.min(dist1, dist2) < 75 && maxC - minC < 38) {
              if (parentIdx === undefined) return true;
              const pr = data[parentIdx];
              const pg = data[parentIdx + 1];
              const pb = data[parentIdx + 2];
              const stepDiff = Math.abs(r - pr) + Math.abs(g - pg) + Math.abs(b - pb);
              return stepDiff < 28;
            }

            return false;
          };

          const queue = new Int32Array(totalPixels);
          let head = 0;
          let tail = 0;

          const enqueueIfBg = (x: number, y: number, parentIdx?: number) => {
            if (x < 0 || x >= width || y < 0 || y >= height) return;
            const p = y * width + x;
            if (visited[p]) return;
            const idx = p * 4;
            if (isBackgroundCandidate(idx, parentIdx)) {
              visited[p] = 1;
              queue[tail++] = p;
            }
          };

          for (let x = 0; x < width; x++) {
            enqueueIfBg(x, 0);
          }
          for (let y = 0; y < Math.floor(height * 0.9); y++) {
            enqueueIfBg(0, y);
            enqueueIfBg(width - 1, y);
          }

          while (head < tail) {
            const p = queue[head++];
            const idx = p * 4;
            const x = p % width;
            const y = (p - x) / width;

            if (x > 0) enqueueIfBg(x - 1, y, idx);
            if (x + 1 < width) enqueueIfBg(x + 1, y, idx);
            if (y > 0) enqueueIfBg(x, y - 1, idx);
            if (y + 1 < height) enqueueIfBg(x, y + 1, idx);

            data[idx + 3] = 0;
          }

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
                data[idx + 3] = Math.round(data[idx + 3] * (1 - transparentNeighbors * 0.18));
              }
            }
          }

          ctx.putImageData(imageData, 0, 0);
        }

        // Find tight bounding box of the person (alpha > 35)
        let minX = width;
        let minY = height;
        let maxX = 0;
        let maxY = 0;

        for (let y = 0; y < height; y++) {
          for (let x = 0; x < width; x++) {
            const alpha = data[(y * width + x) * 4 + 3];
            if (alpha > 35) {
              if (x < minX) minX = x;
              if (x > maxX) maxX = x;
              if (y < minY) minY = y;
              if (y > maxY) maxY = y;
            }
          }
        }

        if (maxX > minX && maxY > minY) {
          const subjW = maxX - minX + 1;
          const rawSubjH = maxY - minY + 1;
          // Cap height-to-width ratio so upper-body and head-and-shoulders portraits match in head/shoulder scale
          const subjH = Math.min(rawSubjH, Math.round(subjW * maxAspectRatio));

          const outW = 380;
          const outH = 470;
          const outCanvas = document.createElement('canvas');
          outCanvas.width = outW;
          outCanvas.height = outH;
          const outCtx = outCanvas.getContext('2d');

          if (outCtx) {
            // Normalize every person to occupy the exact same 95% vertical height of the card
            const targetH = Math.round(outH * 0.95);
            const drawScale = targetH / subjH;
            const targetW = Math.round(subjW * drawScale);
            const drawX = Math.round((outW - targetW) / 2);
            const drawY = outH - targetH;

            outCtx.drawImage(
              canvas,
              minX,
              minY,
              subjW,
              subjH,
              drawX,
              drawY,
              targetW,
              targetH
            );

            const normalizedUrl = outCanvas.toDataURL('image/png');
            if (!isCancelled) {
              setCutoutUrl(normalizedUrl);
            }
            return;
          }
        }

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
  }, [src, maxAspectRatio]);

  return cutoutUrl;
}

const TeamMemberCard: React.FC<{ member: TeamMember }> = ({ member }) => {
  const cutoutSrc = useStudioCutout(member.image, member.maxAspectRatio ?? 1.22);

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
          {member.pillarWatermark}
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

        {/* 2 Team Member Cards */}
        <div className="max-w-2xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-12 items-end justify-center">
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
