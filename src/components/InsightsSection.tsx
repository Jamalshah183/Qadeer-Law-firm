import React, { useState } from 'react';
import {
  ArrowUpRight,
  BookOpen,
  Scale,
  ChevronLeft,
  ChevronRight,
  Sparkles,
} from 'lucide-react';
import { INSIGHTS_DATA, INSIGHT_CATEGORIES, InsightPost } from '../data/insightsData';

interface InsightsSectionProps {
  onNavigateToAllInsights: () => void;
  onNavigateToPost: (slug: string) => void;
}

const MOBILE_CATEGORY_SHORT_LABELS: Record<string, string> = {
  'All Publications': 'All Chamber Publications',
  'Property & Real Estate': 'Property & Real Estate',
  'Corporate & Commercial': 'Corporate & Commercial',
  'Family & Private Client': 'Family & Succession',
  'International & Cross-Border': 'International Counsel',
  'Litigation & Dispute Resolution': 'Litigation & Disputes',
  'Immigration & International Law': 'Immigration & Visas',
};

export const InsightsSection: React.FC<InsightsSectionProps> = ({
  onNavigateToAllInsights,
  onNavigateToPost,
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('All Publications');
  const [mobileSpotlightIndex, setMobileSpotlightIndex] = useState<number>(0);

  const leadPost = INSIGHTS_DATA[0];

  const displayedGridPosts: InsightPost[] =
    activeCategory === 'All Publications'
      ? INSIGHTS_DATA.slice(1, 4)
      : INSIGHTS_DATA.filter((post) => post.category === activeCategory);

  // Filtered list for the Mobile-Native Interactive Journal
  const mobileFilteredPosts: InsightPost[] =
    activeCategory === 'All Publications'
      ? INSIGHTS_DATA
      : INSIGHTS_DATA.filter((post) => post.category === activeCategory);

  const safeSpotlightIndex =
    mobileSpotlightIndex < mobileFilteredPosts.length ? mobileSpotlightIndex : 0;
  const mobileSpotlightPost = mobileFilteredPosts[safeSpotlightIndex] || INSIGHTS_DATA[0];
  const mobileLedgerPosts = mobileFilteredPosts.filter(
    (post) => post.id !== mobileSpotlightPost.id
  );

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
    setMobileSpotlightIndex(0);
  };

  const handlePostClick = (e: React.MouseEvent<HTMLAnchorElement>, slug: string) => {
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.button !== 0) return;
    e.preventDefault();
    onNavigateToPost(slug);
  };

  const handleAllClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.button !== 0) return;
    e.preventDefault();
    onNavigateToAllInsights();
  };

  const handlePrevMobileSpotlight = () => {
    setMobileSpotlightIndex((prev) =>
      prev <= 0 ? mobileFilteredPosts.length - 1 : prev - 1
    );
  };

  const handleNextMobileSpotlight = () => {
    setMobileSpotlightIndex((prev) =>
      prev >= mobileFilteredPosts.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <section
      id="insights"
      className="relative z-[16] -mt-10 sm:-mt-12 lg:-mt-14 pt-16 sm:pt-22 lg:pt-28 pb-24 sm:pb-28 lg:pb-36 bg-[#FFFFFF] text-[#0F172A] rounded-t-[50px] sm:rounded-t-[65px] lg:rounded-t-[80px] border-t-2 border-[#9B112C]/20 shadow-[0_-25px_50px_-15px_rgba(155,17,44,0.10)] overflow-hidden"
    >
      {/* Subtle ambient depth */}
      <div
        className="absolute inset-0 bg-radial from-slate-100/50 via-transparent to-transparent pointer-events-none"
        aria-hidden="true"
      />

      {/* ======================================================================
          MOBILE-NATIVE INTERACTIVE CHAMBER JOURNAL (lg:hidden)
          Purpose-built for mobile viewports — not a shrunk desktop grid.
          Features a 2-column no-scroll category bento, an interactive Deep
          Burgundy & Gold Spotlight Deck, and compact tappable dossier rows.
          ====================================================================== */}
      <div className="lg:hidden relative z-10 max-w-xl mx-auto px-4 sm:px-6">
        {/* 1. Compact Mobile Editorial Header */}
        <div className="text-center mb-6">
          <div className="inline-flex items-center justify-center gap-2 mb-2.5">
            <span className="h-[1px] w-6 bg-[#E5B842]" aria-hidden="true" />
            <Scale className="w-3.5 h-3.5 text-[#9B112C]" aria-hidden="true" />
            <span className="font-sans text-[10.5px] uppercase tracking-[0.16em] font-bold text-[#9B112C]">
              LEGAL INSIGHTS & BLOGS
            </span>
            <span className="h-[1px] w-6 bg-[#E5B842]" aria-hidden="true" />
          </div>

          <h2 className="font-serif text-[2.05rem] sm:text-4xl font-semibold text-[#0F172A] leading-[1.06] tracking-[-0.02em]">
            Chamber Briefings &{' '}
            <span className="italic font-normal text-[#9B112C]">
              Legal Perspectives.
            </span>
          </h2>

          <p className="font-sans text-[13.5px] sm:text-[14.5px] text-[#475569] leading-[1.5] mt-2 max-w-md mx-auto">
            Pakistani-law commentary, statutory guides, and cross-border legal analysis by our advocates.
          </p>
        </div>

        {/* 2. Responsive 2-Column Mobile Category Selector (Zero Horizontal Scroll) */}
        <div
          className="grid grid-cols-2 gap-2 mb-5"
          role="tablist"
          aria-label="Filter legal insights by practice area"
        >
          {INSIGHT_CATEGORIES.map((category, idx) => {
            const isActive = activeCategory === category;
            const isAllTab = idx === 0;
            const label = MOBILE_CATEGORY_SHORT_LABELS[category] || category;

            return (
              <button
                key={category}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => handleCategoryChange(category)}
                className={`${
                  isAllTab ? 'col-span-2' : 'col-span-1'
                } min-h-[42px] px-3 py-2 rounded-xl font-sans text-[11.5px] sm:text-[12px] font-semibold tracking-[0.01em] transition-all duration-150 flex items-center justify-between gap-1.5 cursor-pointer border ${
                  isActive
                    ? 'bg-[#9B112C] text-white border-[#E5B842]/60 shadow-md'
                    : 'bg-slate-50 text-[#334155] border-slate-200/80 active:bg-slate-100'
                }`}
              >
                <span className="truncate">{label}</span>
                <span
                  className={`text-[10px] font-serif font-bold px-1.5 py-0.5 rounded-md shrink-0 tabular-nums ${
                    isActive
                      ? 'bg-[#E5B842] text-[#0F172A]'
                      : 'bg-slate-200 text-[#475569]'
                  }`}
                >
                  {isAllTab
                    ? `0${INSIGHTS_DATA.length}`
                    : `0${INSIGHTS_DATA.filter((p) => p.category === category).length}`}
                </span>
              </button>
            );
          })}
        </div>

        {/* 3. Interactive Deep Ruby Burgundy & Gold Spotlight Briefing Card */}
        <div className="rounded-3xl bg-gradient-to-b from-[#8C0E26] via-[#750B1F] to-[#5C0818] text-white border-2 border-[#E5B842]/50 shadow-2xl overflow-hidden mb-5">
          {/* Top Switcher Bar inside Spotlight Card */}
          <div className="px-4 py-2.5 bg-[#4A0713]/90 border-b border-[#E5B842]/25 flex items-center justify-between gap-2">
            <div className="flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-[#E5B842]" aria-hidden="true" />
              <span className="font-sans text-[10.5px] uppercase tracking-[0.14em] font-bold text-[#E5B842]">
                {activeCategory === 'All Publications'
                  ? 'Featured Briefing'
                  : 'Selected Briefing'}
              </span>
            </div>

            {mobileFilteredPosts.length > 1 && (
              <div className="flex items-center gap-1">
                {mobileFilteredPosts.map((post, idx) => {
                  const isCurrent = idx === safeSpotlightIndex;
                  return (
                    <button
                      key={post.id}
                      type="button"
                      onClick={() => setMobileSpotlightIndex(idx)}
                      aria-label={`Preview briefing ${post.number}`}
                      className={`w-6 h-6 rounded-full font-serif text-[11px] font-bold transition-all flex items-center justify-center cursor-pointer tabular-nums ${
                        isCurrent
                          ? 'bg-[#E5B842] text-[#0F172A] shadow-xs'
                          : 'bg-white/10 text-white/75 hover:bg-white/20'
                      }`}
                    >
                      {post.number}
                    </button>
                  );
                })}
              </div>
            )}
          </div>

          {/* Clickable Visual Header */}
          <a
            href={`/insights/${mobileSpotlightPost.slug}`}
            onClick={(e) => handlePostClick(e, mobileSpotlightPost.slug)}
            className="block relative aspect-[16/9] w-full overflow-hidden bg-[#4A0713]"
          >
            <img
              src={mobileSpotlightPost.image}
              alt={mobileSpotlightPost.title}
              loading="lazy"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
            <div
              className="absolute inset-0 bg-gradient-to-t from-[#5C0818] via-[#5C0818]/35 to-transparent pointer-events-none"
              aria-hidden="true"
            />

            {/* Editorial Number Badge & Unboxed Metadata */}
            <div className="absolute bottom-2.5 left-4 right-4 flex items-end justify-between gap-2">
              <div className="flex flex-wrap items-center gap-1.5 font-sans text-[11px] text-[#E5B842] font-semibold">
                <span>{mobileSpotlightPost.category}</span>
                <span aria-hidden="true">·</span>
                <span className="text-white/85 font-normal">
                  {mobileSpotlightPost.readTime}
                </span>
              </div>

              <span className="font-serif text-3xl font-bold text-[#E5B842] leading-none drop-shadow">
                {mobileSpotlightPost.number}
              </span>
            </div>
          </a>

          {/* Spotlight Copy & Direct Action */}
          <div className="p-4 sm:p-5">
            <a
              href={`/insights/${mobileSpotlightPost.slug}`}
              onClick={(e) => handlePostClick(e, mobileSpotlightPost.slug)}
              className="block focus:outline-none"
            >
              <h3 className="font-serif text-[1.35rem] sm:text-2xl font-semibold text-white leading-[1.16] tracking-[-0.01em] mb-2">
                {mobileSpotlightPost.title}
              </h3>

              <p className="font-sans text-[13px] text-white/80 leading-[1.55] line-clamp-2 mb-4">
                {mobileSpotlightPost.excerpt}
              </p>
            </a>

            <div className="pt-3.5 border-t border-[#E5B842]/25 flex items-center justify-between gap-2">
              <div className="min-w-0">
                <div className="font-sans text-[11.5px] font-semibold text-white truncate">
                  {mobileSpotlightPost.author.name}
                </div>
                <div className="font-sans text-[10.5px] text-[#E5B842] truncate">
                  {mobileSpotlightPost.publishedDate}
                </div>
              </div>

              <div className="flex items-center gap-1.5 shrink-0">
                {mobileFilteredPosts.length > 1 && (
                  <>
                    <button
                      type="button"
                      onClick={handlePrevMobileSpotlight}
                      aria-label="Previous briefing"
                      className="w-8 h-8 rounded-full bg-white/10 active:bg-white/20 border border-[#E5B842]/35 text-white flex items-center justify-center cursor-pointer"
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </button>
                    <button
                      type="button"
                      onClick={handleNextMobileSpotlight}
                      aria-label="Next briefing"
                      className="w-8 h-8 rounded-full bg-white/10 active:bg-white/20 border border-[#E5B842]/35 text-white flex items-center justify-center cursor-pointer mr-1"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </>
                )}

                <a
                  href={`/insights/${mobileSpotlightPost.slug}`}
                  onClick={(e) => handlePostClick(e, mobileSpotlightPost.slug)}
                  className="inline-flex items-center gap-1.5 pl-3.5 pr-2 py-1.5 rounded-full bg-[#E5B842] active:bg-[#d4a833] text-[#0F172A] font-sans text-[11px] font-bold uppercase tracking-[0.06em] shadow-md whitespace-nowrap"
                >
                  <span>Read Blog</span>
                  <span className="w-5 h-5 rounded-full bg-white text-[#0F172A] flex items-center justify-center">
                    <ArrowUpRight className="w-3 h-3" />
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* 4. Mobile Chamber Dossier Ledger (Compact Thumbnail + Headline Tap Rows) */}
        {mobileLedgerPosts.length > 0 && (
          <div className="bg-white rounded-2xl border border-slate-200/90 shadow-md overflow-hidden mb-5">
            <div className="px-4 py-2.5 bg-slate-50 border-b border-slate-200 flex items-center justify-between">
              <span className="font-sans text-[10.5px] uppercase tracking-[0.15em] font-bold text-[#9B112C]">
                MORE CHAMBER PUBLICATIONS
              </span>
              <span className="font-serif italic text-[12px] text-[#64748B]">
                Tap to read
              </span>
            </div>

            <div className="divide-y divide-slate-200">
              {mobileLedgerPosts.slice(0, 3).map((post) => (
                <a
                  key={post.id}
                  href={`/insights/${post.slug}`}
                  onClick={(e) => handlePostClick(e, post.slug)}
                  className="group p-3.5 flex items-center justify-between gap-3.5 active:bg-slate-50 transition-colors"
                >
                  {/* Left: Framed Still-Life Square Thumbnail with Number */}
                  <div className="relative w-16 h-16 rounded-xl overflow-hidden bg-[#5C0818] border border-slate-200 shrink-0">
                    <img
                      src={post.image}
                      alt={post.title}
                      loading="lazy"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover"
                    />
                    <div
                      className="absolute inset-0 bg-gradient-to-t from-[#5C0818]/85 via-transparent to-transparent"
                      aria-hidden="true"
                    />
                    <span className="absolute bottom-1 left-1.5 font-serif text-xs font-bold text-[#E5B842] leading-none">
                      {post.number}
                    </span>
                  </div>

                  {/* Center: Unboxed Metadata & 2-Line Serif Headline */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-1.5 font-sans text-[10.5px] text-[#9B112C] font-semibold truncate mb-0.5">
                      <span className="truncate">{post.category}</span>
                      <span className="text-[#64748B] shrink-0" aria-hidden="true">
                        ·
                      </span>
                      <span className="text-[#64748B] font-normal shrink-0">
                        {post.readTime}
                      </span>
                    </div>

                    <h4 className="font-serif text-[16px] font-semibold text-[#0F172A] leading-[1.2] line-clamp-2">
                      {post.title}
                    </h4>
                  </div>

                  {/* Right: Circular Burgundy/Gold Action Badge */}
                  <span className="w-8 h-8 rounded-full bg-slate-100 text-[#9B112C] group-hover:bg-[#9B112C] group-hover:text-white flex items-center justify-center shrink-0 transition-colors">
                    <ArrowUpRight className="w-4 h-4" />
                  </span>
                </a>
              ))}
            </div>
          </div>
        )}

        {/* 5. Full-Width Hero-Style Mobile CTA to All-Blogs Page */}
        <a
          href="/insights"
          onClick={handleAllClick}
          className="w-full inline-flex items-center justify-between pl-5 pr-2 h-[50px] rounded-full bg-[#9B112C] active:bg-[#750B1F] text-white font-sans font-bold text-[12px] uppercase tracking-[0.06em] shadow-xl border border-[#E5B842]/40"
        >
          <span className="inline-flex items-center gap-2">
            <BookOpen className="w-4 h-4 text-[#E5B842]" aria-hidden="true" />
            <span>Explore All {INSIGHTS_DATA.length} Legal Blogs</span>
          </span>
          <span className="w-8.5 h-8.5 rounded-full bg-[#E5B842] text-[#0F172A] flex items-center justify-center shadow-xs shrink-0">
            <ArrowUpRight className="w-4 h-4" />
          </span>
        </a>
      </div>

      {/* ======================================================================
          DESKTOP EDITORIAL SHOWCASE & 3-COLUMN GRID (hidden lg:block)
          ====================================================================== */}
      <div className="hidden lg:block relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Section Header Lockup */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10 sm:mb-12">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2.5 mb-3">
              <span className="h-[1px] w-7 bg-[#E5B842]" aria-hidden="true" />
              <Scale className="w-3.5 h-3.5 text-[#9B112C]" aria-hidden="true" />
              <span className="font-sans text-[11px] sm:text-[12px] uppercase tracking-[0.16em] font-bold text-[#9B112C]">
                LEGAL INSIGHTS & PUBLICATIONS
              </span>
              <span className="h-[1px] w-7 bg-[#E5B842]" aria-hidden="true" />
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-[3.25rem] font-semibold text-[#0F172A] leading-[1.08] tracking-[-0.02em]">
              Chamber Briefings &{' '}
              <span className="italic font-normal text-[#9B112C]">
                Legal Perspectives.
              </span>
            </h2>

            <p className="font-sans text-[15.5px] sm:text-[17px] text-[#475569] leading-[1.65] font-normal mt-3">
              Authoritative commentary, procedural guides, and statutory analysis on Pakistani law prepared by the advocates of Qadeer Legal Chambers.
            </p>
          </div>

          {/* Primary Action Link to Separate All-Blogs Archive Page */}
          <div className="shrink-0">
            <a
              href="/insights"
              onClick={handleAllClick}
              className="group inline-flex items-center justify-between gap-3.5 pl-6 pr-2.5 h-[52px] rounded-full bg-[#9B112C] hover:bg-[#750B1F] text-white font-sans font-bold text-[12.5px] uppercase tracking-[0.06em] shadow-lg hover:-translate-y-0.5 transition-all duration-200 whitespace-nowrap shrink-0"
            >
              <span>View All Publications</span>
              <span className="w-9 h-9 rounded-full bg-[#E5B842] text-[#0F172A] flex items-center justify-center transition-transform duration-200 group-hover:translate-x-0.5 shrink-0">
                <ArrowUpRight className="w-4 h-4" />
              </span>
            </a>
          </div>
        </div>

        {/* Interactive Category Filter Controls (Functional Filter Buttons) */}
        <div
          className="flex flex-wrap items-center gap-2 sm:gap-2.5 pb-4 mb-8 sm:mb-10 border-b border-slate-200"
          role="tablist"
          aria-label="Filter legal insights by practice area"
        >
          {INSIGHT_CATEGORIES.map((category) => {
            const isActive = activeCategory === category;
            return (
              <button
                key={category}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => handleCategoryChange(category)}
                className={`px-3.5 py-2 sm:px-4 sm:py-2.5 rounded-lg font-sans text-[12px] sm:text-[13px] leading-snug font-semibold tracking-[0.02em] transition-all duration-150 text-center cursor-pointer ${
                  isActive
                    ? 'bg-[#9B112C] text-white shadow-xs'
                    : 'bg-slate-50 text-[#334155] hover:bg-[#9B112C]/10 hover:text-[#9B112C] border border-slate-200/90'
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        {/* Tier 1: Featured Lead Publication Showcase (Shown on "All Publications") */}
        {activeCategory === 'All Publications' && (
          <a
            href={`/insights/${leadPost.slug}`}
            onClick={(e) => handlePostClick(e, leadPost.slug)}
            className="group block mb-10 sm:mb-12 rounded-3xl bg-gradient-to-r from-[#8C0E26] via-[#750B1F] to-[#5C0818] text-white border-2 border-[#E5B842]/45 shadow-2xl overflow-hidden transition-transform duration-300 hover:-translate-y-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E5B842]"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
              {/* Left 5 Cols: Editorial Still-Life Photography */}
              <div className="lg:col-span-5 relative min-h-[240px] sm:min-h-[300px] lg:min-h-full overflow-hidden bg-[#5C0818]">
                <img
                  src={leadPost.image}
                  alt={leadPost.title}
                  loading="lazy"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-[#5C0818]/85 via-[#5C0818]/25 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:via-[#5C0818]/20 lg:to-[#5C0818]/90 pointer-events-none"
                  aria-hidden="true"
                />
                <div className="absolute top-5 left-5 font-serif text-3xl sm:text-4xl font-bold text-[#E5B842] drop-shadow-md">
                  {leadPost.number}
                </div>
              </div>

              {/* Right 7 Cols: Lead Dossier Content */}
              <div className="lg:col-span-7 p-6 sm:p-8 lg:p-11 flex flex-col justify-between relative">
                <div>
                  {/* Clean Unboxed Metadata */}
                  <div className="flex flex-wrap items-center gap-2 font-sans text-[12px] sm:text-[12.5px] text-[#E5B842] font-semibold tracking-[0.04em] mb-3">
                    <span>Featured Briefing</span>
                    <span aria-hidden="true">·</span>
                    <span>{leadPost.category}</span>
                    <span aria-hidden="true">·</span>
                    <span className="text-white/80 font-normal">{leadPost.publishedDate}</span>
                    <span aria-hidden="true">·</span>
                    <span className="text-white/80 font-normal">{leadPost.readTime}</span>
                  </div>

                  <h3 className="font-serif text-2xl sm:text-3xl lg:text-[2.2rem] font-semibold text-white group-hover:text-[#E5B842] leading-[1.14] tracking-[-0.015em] transition-colors mb-3.5">
                    {leadPost.title}
                  </h3>

                  <p className="font-sans text-[14.5px] sm:text-[15.5px] text-white/85 leading-[1.65] font-normal max-w-2xl">
                    {leadPost.excerpt}
                  </p>
                </div>

                <div className="mt-7 pt-5 border-t border-[#E5B842]/25 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="font-sans text-[13px] text-white/90">
                    <span className="font-semibold text-white">{leadPost.author.name}</span>
                    <span className="mx-2 text-[#E5B842]" aria-hidden="true">·</span>
                    <span className="text-white/75">{leadPost.author.role}</span>
                  </div>

                  <span className="inline-flex items-center gap-2 font-sans text-[12.5px] uppercase tracking-[0.08em] font-bold text-[#E5B842] group-hover:text-white transition-colors whitespace-nowrap shrink-0">
                    <span>Read Full Article</span>
                    <span className="w-7 h-7 rounded-full bg-[#E5B842] text-[#0F172A] flex items-center justify-center transition-transform duration-200 group-hover:translate-x-0.5">
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </a>
        )}

        {/* Tier 2: Curated Chamber Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {displayedGridPosts.map((post) => (
            <a
              key={post.id}
              href={`/insights/${post.slug}`}
              onClick={(e) => handlePostClick(e, post.slug)}
              className="group bg-white rounded-2xl border border-slate-200/90 hover:border-[#9B112C]/50 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden flex flex-col justify-between focus:outline-none focus-visible:ring-2 focus-visible:ring-[#9B112C]"
            >
              <div>
                {/* 16:9 Still-Life Thumbnail */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#5C0818]">
                  <img
                    src={post.image}
                    alt={post.title}
                    loading="lazy"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-[#5C0818]/75 via-transparent to-transparent pointer-events-none"
                    aria-hidden="true"
                  />
                  <span className="absolute bottom-3 left-4 font-serif text-2xl font-bold text-white drop-shadow">
                    {post.number}
                  </span>
                </div>

                {/* Card Copy */}
                <div className="p-6 pb-4">
                  {/* Unboxed Clean Metadata */}
                  <div className="flex flex-wrap items-center gap-1.5 font-sans text-[12px] text-[#9B112C] font-semibold mb-2.5">
                    <span>{post.category}</span>
                    <span className="text-[#64748B]" aria-hidden="true">·</span>
                    <span className="text-[#64748B] font-normal">{post.publishedDate}</span>
                    <span className="text-[#64748B]" aria-hidden="true">·</span>
                    <span className="text-[#64748B] font-normal">{post.readTime}</span>
                  </div>

                  <h3 className="font-serif text-[1.45rem] sm:text-[1.55rem] font-semibold text-[#0F172A] group-hover:text-[#9B112C] leading-[1.2] tracking-[-0.01em] transition-colors mb-2.5">
                    {post.title}
                  </h3>

                  <p className="font-sans text-[14px] sm:text-[14.5px] text-[#64748B] leading-[1.6] font-normal line-clamp-3">
                    {post.excerpt}
                  </p>
                </div>
              </div>

              {/* Card Footer with Direct Link Affordance */}
              <div className="px-6 pb-5 pt-3.5 border-t border-slate-200 flex items-center justify-between gap-2">
                <div className="font-sans text-[12px] text-[#475569] truncate">
                  By <span className="font-semibold text-[#0F172A]">{post.author.name}</span>
                </div>

                <span className="inline-flex items-center gap-1.5 font-sans text-[12px] font-bold uppercase tracking-[0.06em] text-[#9B112C] group-hover:text-[#750B1F] whitespace-nowrap shrink-0">
                  <span>Read Blog</span>
                  <span className="w-6 h-6 rounded-full bg-slate-100 group-hover:bg-[#9B112C] text-[#9B112C] group-hover:text-white flex items-center justify-center transition-colors">
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </span>
                </span>
              </div>
            </a>
          ))}
        </div>

        {/* Bottom Archive Bar — Direct Entry to the Separate All-Blogs Page */}
        <div className="mt-10 sm:mt-12 p-5 sm:p-6 rounded-2xl bg-slate-50 border border-slate-200/90 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-sm">
          <div className="flex items-center gap-3.5 text-center sm:text-left">
            <div className="w-10 h-10 rounded-full bg-[#9B112C] text-[#E5B842] flex items-center justify-center shrink-0">
              <BookOpen className="w-4.5 h-4.5" aria-hidden="true" />
            </div>
            <div>
              <div className="font-serif text-lg sm:text-xl font-semibold text-[#0F172A]">
                Explore the Complete Qadeer Legal Chambers Publication Archive
              </div>
              <div className="font-sans text-[13px] text-[#64748B]">
                Browse all {INSIGHTS_DATA.length} in-depth legal blogs, statutory guides, and cross-border commentaries on a dedicated page.
              </div>
            </div>
          </div>

          <a
            href="/insights"
            onClick={handleAllClick}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#9B112C] hover:bg-[#750B1F] text-white font-sans text-[12.5px] uppercase tracking-[0.06em] font-bold transition-colors whitespace-nowrap shrink-0 shadow-sm"
          >
            <span>Open All Blogs Page</span>
            <ArrowUpRight className="w-4 h-4 text-[#E5B842]" />
          </a>
        </div>
      </div>
    </section>
  );
};
