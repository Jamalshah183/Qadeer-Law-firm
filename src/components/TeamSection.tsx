import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { X, CheckCircle2, ArrowUpRight, Award, MessageSquare } from 'lucide-react';
import { FIRM_CONFIG } from '../data/firmData';
import qadeerCeoImg from '../assets/images/qadeer_hussain_ceo.png';
import arfanImg from '../assets/images/arfan_shahzad.png';

interface TeamMember {
  id: string;
  name: string;
  fullName: string;
  designation: string;
  credentials: string;
  pillarWatermark: string;
  image: string;
  maxAspectRatio?: number;
  bioParagraphs: string[];
  specializations: string[];
}

const TEAM_MEMBERS: TeamMember[] = [
  {
    id: 'qadeer-hussain',
    name: 'Qadeer Hussain',
    fullName: 'Mian Qadeer Hussain',
    designation: 'CEO',
    credentials: 'Founder & Principal · Advocate High Court',
    pillarWatermark: 'CEO',
    image: qadeerCeoImg,
    maxAspectRatio: 1.08,
    bioParagraphs: [
      'As Founder and Principal of Qadeer Law Chamber, Mian Qadeer Hussain practices as an Advocate of the High Court in Pakistan, bringing extensive command across contentious litigation, precision legal drafting, dispute resolution, and high-level advisory mandates.',
      'Guided by a commitment to professional integrity and meticulous case preparation, his practice bridges classical courtroom advocacy with modern legal research, transparent client communication, and seamless cross-border legal cooperation.',
    ],
    specializations: [
      'High Court Litigation & Dispute Resolution',
      'Precision Legal Drafting & Opinions',
      'Strategic Corporate & Civil Advisory',
      'Cross-Border Legal Cooperation',
    ],
  },
  {
    id: 'arfan-shahzad',
    name: 'Arfan Shahzad',
    fullName: 'Arfan Shahzad',
    designation: 'Advocate',
    credentials: 'Associate Advocate · Immigration & International Law',
    pillarWatermark: 'Advocate',
    image: arfanImg,
    maxAspectRatio: 1.04,
    bioParagraphs: [
      'Arfan Shahzad is an experienced Associate Advocate at Qadeer Law Chamber specializing in Immigration Law, Study & Student Visas, and International Law, delivering dedicated legal counsel for local and overseas clients.',
      'With a strong commitment to protecting client interests, he combines thorough documentation strategy with responsive representation to achieve dependable, outcome-focused legal solutions across international and immigration matters.',
    ],
    specializations: [
      'Immigration Law & Regulatory Counsel',
      'Study & Student Visa Advisory',
      'International & Cross-Border Law',
      'Dedicated Client Representation',
    ],
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
          // Cap height-to-width ratio so both portraits match in head/shoulder scale and vertical height
          const subjH = Math.min(rawSubjH, Math.round(subjW * maxAspectRatio));

          const outW = 640;
          const outH = 680;
          const outCanvas = document.createElement('canvas');
          outCanvas.width = outW;
          outCanvas.height = outH;
          const outCtx = outCanvas.getContext('2d');

          if (outCtx) {
            outCtx.imageSmoothingEnabled = true;
            outCtx.imageSmoothingQuality = 'high';
            // Normalize every person to occupy 97% vertical height of the canvas
            const targetH = Math.round(outH * 0.97);
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

const TeamMemberCard: React.FC<{
  member: TeamMember;
  onSelect: (member: TeamMember, cutoutSrc: string) => void;
}> = ({ member, onSelect }) => {
  const cutoutSrc = useStudioCutout(member.image, member.maxAspectRatio ?? 1.22);

  return (
    <div
      role="button"
      tabIndex={0}
      onClick={() => onSelect(member, cutoutSrc)}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onSelect(member, cutoutSrc);
        }
      }}
      aria-label={`View profile of ${member.fullName}`}
      className="group relative w-full max-w-[295px] mx-auto aspect-[3/3.66] select-none overflow-hidden cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C6A15B] rounded-tl-[38px] rounded-b-xl transition-transform duration-300 hover:-translate-y-1"
    >
      {/* 
        1. Left Vertical Burgundy Pillar (Matches reference card's red left bar):
           - Covers ~46% of the card width on the left
           - Rounded top-left corner (rounded-tl-[38px])
           - Contains vertical outlined watermark text
      */}
      <div
        className="absolute top-0 left-0 bottom-0 w-[46%] bg-[#5B1111] rounded-tl-[38px] z-[1] overflow-hidden flex items-start justify-center pt-5"
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
      <div className="absolute inset-x-0 bottom-0 top-2.5 z-[2] flex items-end justify-center pointer-events-none">
        <img
          src={cutoutSrc}
          alt={`${member.fullName} — ${member.designation}`}
          loading="lazy"
          decoding="async"
          referrerPolicy="no-referrer"
          className="w-full h-full object-contain object-bottom transition-transform duration-500 group-hover:scale-[1.03]"
        />
      </div>

      {/* 
        3. Bottom Full-Width Burgundy Gradient Fade & Member Info Lockup:
           - Smoothly fades upward from solid Primary Burgundy (#5B1111) at the bottom edge
           - Displays Name, Designation, and subtle View Profile arrow
      */}
      <div
        className="absolute inset-x-0 bottom-0 h-[36%] z-[3] pointer-events-none"
        style={{
          background:
            'linear-gradient(to top, #5B1111 0%, rgba(91, 17, 17, 0.92) 38%, rgba(91, 17, 17, 0.45) 72%, transparent 100%)',
        }}
        aria-hidden="true"
      />

      <div className="absolute bottom-3.5 left-4 right-3.5 z-[4] flex items-end justify-between gap-2 text-left">
        <div>
          <h3 className="font-sans font-bold text-[18px] sm:text-[19px] text-[#FDF0D5] tracking-[-0.01em] leading-tight">
            {member.name}
          </h3>
          <p className="font-sans font-normal text-[12px] sm:text-[12.5px] text-[#FDF0D5]/90 tracking-[0.02em] mt-0.5">
            {member.designation}
          </p>
        </div>

        <span
          className="w-7 h-7 rounded-full bg-[#C6A15B]/20 group-hover:bg-[#C6A15B] text-[#FDF0D5] group-hover:text-[#171313] border border-[#C6A15B]/50 flex items-center justify-center transition-all duration-200 shrink-0"
          aria-hidden="true"
        >
          <ArrowUpRight className="w-3.5 h-3.5" />
        </span>
      </div>
    </div>
  );
};

export const TeamSection: React.FC = () => {
  const [selectedProfile, setSelectedProfile] = useState<{
    member: TeamMember;
    cutoutSrc: string;
  } | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedProfile(null);
    };
    if (selectedProfile) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [selectedProfile]);

  return (
    <section
      id="team"
      className="relative z-[16] -mt-10 sm:-mt-12 lg:-mt-14 pt-20 sm:pt-24 md:pt-28 pb-24 md:pb-32 bg-[#FFF9EC] rounded-t-[50px] sm:rounded-t-[65px] lg:rounded-t-[80px] rounded-b-[50px] sm:rounded-b-[65px] lg:rounded-b-[80px] border-t-2 border-b-2 border-[#5B1111]/25 shadow-[0_-25px_50px_-15px_rgba(62,8,8,0.25),0_30px_60px_-15px_rgba(30,4,4,0.55)] overflow-hidden"
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
            <TeamMemberCard
              key={member.id}
              member={member}
              onSelect={(m, src) => setSelectedProfile({ member: m, cutoutSrc: src })}
            />
          ))}
        </div>

        {/* Bottom Centered Description Text matching the reference layout */}
        <p className="mt-10 sm:mt-12 max-w-4xl mx-auto text-center font-sans text-[15px] sm:text-[16px] text-[#171313]/80 leading-[1.65] font-normal">
          Our chambers are led by seasoned partners and senior advocates bringing decades of courtroom trial experience, corporate governance advisory, and constitutional advocacy to every client mandate.
        </p>
      </div>

      {/* Interactive Executive Advocate Profile Modal */}
      {selectedProfile &&
        typeof document !== 'undefined' &&
        createPortal(
          <div
            className="fixed inset-0 z-[9999] flex items-center justify-center p-3 sm:p-6"
            role="dialog"
            aria-modal="true"
            aria-labelledby="profile-modal-title"
          >
            {/* Backdrop */}
            <div
              className="fixed inset-0 bg-[#171313]/80 backdrop-blur-xs transition-opacity"
              onClick={() => setSelectedProfile(null)}
              aria-hidden="true"
            />

            {/* Executive Profile Dossier Card */}
            <div className="relative bg-[#FFF9EC] rounded-2xl sm:rounded-3xl max-w-4xl w-full max-h-[calc(100dvh-1.5rem)] sm:max-h-[90dvh] flex flex-col border-2 border-[#C6A15B]/45 shadow-[0_30px_80px_-15px_rgba(23,19,19,0.7)] overflow-hidden z-10">
              {/* Top Gold Accent Bar */}
              <div
                className="h-1.5 w-full shrink-0 bg-gradient-to-r from-[#5B1111] via-[#C6A15B] to-[#5B1111]"
                aria-hidden="true"
              />

              {/* Close Button */}
              <button
                type="button"
                onClick={() => setSelectedProfile(null)}
                className="absolute top-3.5 right-3.5 sm:top-5 sm:right-5 z-30 w-9 h-9 rounded-full bg-[#5B1111] text-[#FDF0D5] hover:bg-[#3E0808] border border-[#C6A15B]/40 flex items-center justify-center transition-colors shadow-md cursor-pointer"
                aria-label="Close profile modal"
              >
                <X className="w-4.5 h-4.5" />
              </button>

              <div className="flex flex-col md:grid md:grid-cols-12 flex-1 min-h-0 overflow-y-auto overscroll-contain">
                {/* 
                  Left Column (4 Cols): Tailored Executive Portrait Frame & Chamber Seal
                  Fixes floating/uncropped bottom edge by housing the portrait inside a
                  bespoke, fixed-aspect-ratio framed card with a bottom burgundy nameplate fade.
                */}
                <div className="md:col-span-5 bg-[#5B1111] pt-10 pb-6 px-5 sm:p-8 flex flex-col items-center justify-between relative shrink-0 border-b md:border-b-0 md:border-r border-[#C6A15B]/30">
                  {/* Subtle radial ambient glow */}
                  <div
                    className="absolute inset-0 bg-radial from-[#C6A15B]/12 via-transparent to-[#3E0808]/70 pointer-events-none"
                    aria-hidden="true"
                  />

                  {/* Framed Executive Portrait Card (Matches the exact Board of Directors card geometry) */}
                  <div className="relative z-10 w-[215px] h-[276px] sm:w-[235px] sm:h-[302px] rounded-2xl bg-[#FFF9EC] border-2 border-[#C6A15B]/60 shadow-2xl overflow-hidden shrink-0">
                    {/* Left Vertical Burgundy Pillar inside portrait frame */}
                    <div
                      className="absolute top-0 left-0 bottom-0 w-[44%] bg-[#3E0808] z-[1] flex items-start justify-center pt-6"
                      aria-hidden="true"
                    >
                      <span
                        className="font-sans font-extrabold text-[34px] tracking-[0.04em] leading-none select-none pointer-events-none whitespace-nowrap"
                        style={{
                          writingMode: 'vertical-rl',
                          transform: 'rotate(180deg)',
                          WebkitTextStroke: '1px rgba(253, 240, 213, 0.30)',
                          color: 'transparent',
                        }}
                      >
                        {selectedProfile.member.pillarWatermark}
                      </span>
                    </div>

                    {/* Crisp High-Res Portrait */}
                    <div className="absolute inset-x-0 bottom-0 top-3 z-[2] flex items-end justify-center pointer-events-none">
                      <img
                        src={selectedProfile.cutoutSrc || selectedProfile.member.image}
                        alt={selectedProfile.member.fullName}
                        className="w-full h-full object-contain object-bottom"
                      />
                    </div>

                    {/* Smooth Bottom Burgundy Gradient Anchor (Eliminates any cut-off bottom edge) */}
                    <div
                      className="absolute inset-x-0 bottom-0 h-[32%] z-[3] pointer-events-none"
                      style={{
                        background:
                          'linear-gradient(to top, #3E0808 0%, rgba(62, 8, 8, 0.88) 40%, transparent 100%)',
                      }}
                      aria-hidden="true"
                    />

                    {/* Framed Portrait Caption */}
                    <div className="absolute bottom-3 left-3.5 right-3.5 z-[4] text-left">
                      <div className="font-serif font-semibold text-[16px] text-[#FDF0D5] leading-tight">
                        {selectedProfile.member.fullName}
                      </div>
                      <div className="font-sans text-[10.5px] uppercase tracking-[0.12em] text-[#C6A15B] font-bold mt-0.5">
                        {selectedProfile.member.designation} · {FIRM_CONFIG.firmName}
                      </div>
                    </div>
                  </div>

                  {/* Chamber Credentials & Direct WhatsApp Action */}
                  <div className="relative z-10 w-full mt-5 sm:mt-6 pt-4 sm:pt-5 border-t border-[#C6A15B]/25 text-center">
                    <div className="font-sans text-[11px] uppercase tracking-[0.14em] text-[#C6A15B] font-bold mb-1">
                      Chambers Jurisdiction
                    </div>
                    <div className="font-serif text-[15px] sm:text-[16px] text-[#FDF0D5]/90 mb-4">
                      Pakistan Courts & International Advisory
                    </div>

                    <a
                      href={`https://wa.me/${FIRM_CONFIG.contact.whatsappNumber}?text=${encodeURIComponent(
                        `Assalam-o-Alaikum Qadeer Law Chamber, I would like to schedule a consultation with ${selectedProfile.member.fullName} (${selectedProfile.member.designation}).`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-2.5 px-5 py-3 rounded-full bg-[#C6A15B] hover:bg-[#b8924b] text-[#171313] font-sans text-[12px] uppercase tracking-[0.06em] font-bold shadow-lg transition-all duration-200 cursor-pointer"
                    >
                      <MessageSquare className="w-4 h-4 text-[#171313]" />
                      <span>Consult via WhatsApp</span>
                    </a>
                  </div>
                </div>

                {/* 
                  Right Column (7 Cols): Executive Legal Dossier & Specializations
                */}
                <div className="md:col-span-7 p-5 sm:p-8 lg:p-10 flex flex-col justify-between bg-[#FFF9EC]">
                  <div>
                    <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#5B1111]/10 border border-[#5B1111]/20 text-[#5B1111] font-sans text-[11px] uppercase tracking-[0.14em] font-bold mb-3.5">
                      <Award className="w-3.5 h-3.5 text-[#C6A15B]" aria-hidden="true" />
                      <span>Professional Profile</span>
                    </div>

                    <h3
                      id="profile-modal-title"
                      className="font-serif text-2xl sm:text-4xl font-bold text-[#171313] tracking-[-0.02em] leading-[1.08]"
                    >
                      {selectedProfile.member.fullName}
                    </h3>

                    <p className="font-sans text-[12.5px] sm:text-[14px] uppercase tracking-[0.08em] font-bold text-[#5B1111] mt-1.5 mb-5 pb-4 border-b border-[#5B1111]/15">
                      {selectedProfile.member.credentials}
                    </p>

                    {/* Editorial Bio Paragraphs with Gold Left Rule on Lead Paragraph */}
                    <div className="space-y-4 font-sans text-[14.5px] sm:text-[15.5px] text-[#171313]/85 leading-[1.68]">
                      {selectedProfile.member.bioParagraphs.map((paragraph, idx) => (
                        <p
                          key={idx}
                          className={
                            idx === 0
                              ? 'border-l-2 border-[#C6A15B] pl-4 font-medium text-[#171313]'
                              : 'text-[#6D6260]'
                          }
                        >
                          {paragraph}
                        </p>
                      ))}
                    </div>

                    {/* Specializations */}
                    <div className="mt-6 sm:mt-7">
                      <h4 className="font-sans text-[11px] uppercase tracking-[0.16em] text-[#5B1111] font-bold mb-3">
                        Areas of Specialization
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        {selectedProfile.member.specializations.map((spec) => (
                          <div
                            key={spec}
                            className="flex items-center gap-2.5 bg-[#FDF0D5] px-3.5 py-2.5 rounded-xl border border-[#5B1111]/15 shadow-2xs"
                          >
                            <CheckCircle2 className="w-4 h-4 text-[#5B1111] shrink-0" />
                            <span className="font-sans text-[13px] font-semibold text-[#171313] leading-snug">
                              {spec}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Bottom Dossier Footer */}
                  <div className="mt-6 sm:mt-7 pt-4 border-t border-[#5B1111]/15 flex items-center justify-between gap-2 text-[12px] font-sans text-[#6D6260]">
                    <span>{FIRM_CONFIG.firmName} · Verified Chamber Profile</span>
                    <button
                      type="button"
                      onClick={() => setSelectedProfile(null)}
                      className="px-4 py-1.5 rounded-full bg-[#5B1111]/10 hover:bg-[#5B1111] text-[#5B1111] hover:text-[#FDF0D5] font-semibold transition-colors cursor-pointer shrink-0"
                    >
                      Close Profile
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>,
          document.body
        )}
    </section>
  );
};
