import React, { useState } from 'react';
import {
  ArrowLeft,
  ArrowUpRight,
  Search,
  Scale,
  Link2,
  Check,
  MessageSquare,
} from 'lucide-react';
import { INSIGHTS_DATA, INSIGHT_CATEGORIES } from '../data/insightsData';
import { FIRM_CONFIG } from '../data/firmData';
import { heroConfig } from '../data/heroConfig';
import { useTransparentLogo } from '../utils/useTransparentLogo';

interface InsightsArchivePageProps {
  onNavigateHome: (sectionHash?: string) => void;
  onNavigateToPost: (slug: string) => void;
}

const ARCHIVE_MOBILE_CATEGORY_LABELS: Record<string, string> = {
  'All Publications': 'All Chamber Publications',
  'Property & Real Estate': 'Property & Real Estate',
  'Corporate & Commercial': 'Corporate & Commercial',
  'Family & Private Client': 'Family & Succession',
  'International & Cross-Border': 'International Counsel',
  'Litigation & Dispute Resolution': 'Litigation & Disputes',
  'Immigration & International Law': 'Immigration & Visas',
};

export const InsightsArchivePage: React.FC<InsightsArchivePageProps> = ({
  onNavigateHome,
  onNavigateToPost,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All Publications');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [copiedSlug, setCopiedSlug] = useState<string | null>(null);
  const { logoSrc, isProcessed } = useTransparentLogo(heroConfig.logo);

  const filteredPosts = INSIGHTS_DATA.filter((post) => {
    const matchesCategory =
      selectedCategory === 'All Publications' || post.category === selectedCategory;
    const q = searchQuery.trim().toLowerCase();
    const matchesSearch =
      !q ||
      post.title.toLowerCase().includes(q) ||
      post.excerpt.toLowerCase().includes(q) ||
      post.category.toLowerCase().includes(q) ||
      post.author.name.toLowerCase().includes(q);
    return matchesCategory && matchesSearch;
  });

  const handlePostLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, slug: string) => {
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.button !== 0) return;
    e.preventDefault();
    onNavigateToPost(slug);
  };

  const handleCopyPostLink = (e: React.MouseEvent, slug: string) => {
    e.preventDefault();
    e.stopPropagation();
    const fullUrl = `${window.location.origin}/insights/${slug}`;
    navigator.clipboard?.writeText(fullUrl);
    setCopiedSlug(slug);
    window.setTimeout(() => {
      setCopiedSlug((prev) => (prev === slug ? null : prev));
    }, 2200);
  };

  const whatsappHref = `https://wa.me/${FIRM_CONFIG.contact.whatsappNumber}?text=${encodeURIComponent(
    FIRM_CONFIG.whatsappMessage
  )}`;

  return (
    <div className="min-h-screen bg-[#FFFFFF] text-[#0F172A]">
      {/* ====================================================================
          1. VIBRANT RUBY BURGUNDY ARCHITECTURAL HERO HEADER & TOP BAR
          ==================================================================== */}
      <div className="relative bg-gradient-to-b from-[#8C0E26] via-[#750B1F] to-[#5C0818] text-white border-b-2 border-[#E5B842]/45 overflow-hidden">
        {/* Person-Free Legal Library Still-Life Background */}
        <div
          className="absolute inset-0 bg-cover bg-center pointer-events-none scale-105"
          style={{
            backgroundImage: `url(${FIRM_CONFIG.images.practiceCorporate})`,
          }}
          aria-hidden="true"
        />

        {/* Deep Vibrant Ruby Scrim */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'linear-gradient(165deg, rgba(140, 14, 38, 0.94) 0%, rgba(106, 12, 30, 0.92) 55%, rgba(74, 7, 19, 0.97) 100%)',
          }}
          aria-hidden="true"
        />

        {/* Top Bar Contract: Zone 1 Brand, Zone 2 Nav Links, Zone 3 Primary Action */}
        <header className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-5 flex items-center justify-between gap-4 sm:gap-8 border-b border-[#E5B842]/20">
          {/* Zone 1: Brand Logo */}
          <a
            href="/"
            onClick={(e) => {
              if (e.metaKey || e.ctrlKey || e.shiftKey || e.button !== 0) return;
              e.preventDefault();
              onNavigateHome();
            }}
            className="inline-flex items-center whitespace-nowrap shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E5B842] rounded-lg"
            aria-label="Qadeer Legal Chambers - Home"
          >
            <img
              src={logoSrc}
              alt="Qadeer Legal Chambers"
              className={`h-16 sm:h-20 w-auto object-contain shrink-0 ${
                isProcessed ? '' : 'mix-blend-screen'
              }`}
            />
          </a>

          {/* Zone 2: Clean Single-Line Nav Links */}
          <nav
            className="hidden md:flex items-center gap-7 font-sans text-[14px] font-semibold tracking-[0.03em] text-white/85"
            aria-label="Primary navigation"
          >
            <a
              href="/#about"
              onClick={(e) => {
                e.preventDefault();
                onNavigateHome('#about');
              }}
              className="hover:text-[#E5B842] transition-colors whitespace-nowrap shrink-0"
            >
              About
            </a>
            <a
              href="/#practice-areas"
              onClick={(e) => {
                e.preventDefault();
                onNavigateHome('#practice-areas');
              }}
              className="hover:text-[#E5B842] transition-colors whitespace-nowrap shrink-0"
            >
              Practice Areas
            </a>
            <span className="text-[#E5B842] border-b border-[#E5B842] pb-0.5 whitespace-nowrap shrink-0 font-bold">
              Insights
            </span>
            <a
              href="/#testimonials"
              onClick={(e) => {
                e.preventDefault();
                onNavigateHome('#testimonials');
              }}
              className="hover:text-[#E5B842] transition-colors whitespace-nowrap shrink-0"
            >
              Testimonials
            </a>
            <a
              href="/#contact"
              onClick={(e) => {
                e.preventDefault();
                onNavigateHome('#contact');
              }}
              className="hover:text-[#E5B842] transition-colors whitespace-nowrap shrink-0"
            >
              Contact
            </a>
          </nav>

          {/* Zone 3: 1 Primary Action */}
          <div className="shrink-0">
            <a
              href="/"
              onClick={(e) => {
                if (e.metaKey || e.ctrlKey || e.shiftKey || e.button !== 0) return;
                e.preventDefault();
                onNavigateHome();
              }}
              className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-full bg-[#E5B842] hover:bg-[#d4a833] text-[#0F172A] font-sans text-[11.5px] sm:text-[12px] uppercase tracking-[0.06em] font-bold transition-colors whitespace-nowrap shrink-0 shadow-md"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to Home</span>
            </a>
          </div>
        </header>

        {/* Archive Hero Copy & Search Controls */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-9 sm:pt-16 pb-12 sm:pb-20">
          <div className="max-w-3xl text-center sm:text-left">
            <div className="inline-flex items-center gap-2 mb-3">
              <Scale className="w-4 h-4 text-[#E5B842]" aria-hidden="true" />
              <span className="font-sans text-[10.5px] sm:text-[12px] uppercase tracking-[0.16em] font-bold text-[#E5B842]">
                QADEER LEGAL CHAMBERS · KNOWLEDGE ARCHIVE
              </span>
            </div>

            <h1 className="font-serif text-3xl sm:text-5xl lg:text-[3.75rem] font-semibold text-white leading-[1.06] tracking-[-0.02em] mb-3 sm:mb-4">
              Legal Insights, Blogs &{' '}
              <span className="italic font-normal text-[#E5B842]">
                Practice Guides.
              </span>
            </h1>

            <p className="font-sans text-[14px] sm:text-[17.5px] text-white/90 leading-[1.6] font-normal max-w-2xl mx-auto sm:mx-0">
              Explore our complete collection of Pakistani-law articles, statutory commentaries, and cross-border legal guides. Each publication features a dedicated link for direct reference.
            </p>
          </div>

          {/* Search & Filter Strip (Zero Horizontal Scroll, 2-Col Mobile Bento) */}
          <div className="mt-7 sm:mt-10 flex flex-col lg:flex-row items-stretch lg:items-start justify-between gap-4 sm:gap-5 pt-5 sm:pt-6 border-t border-[#E5B842]/30">
            {/* Category Tabs: 2-Col Responsive Grid on Mobile, Flex-Wrap on Tablet/Desktop */}
            <div
              className="grid grid-cols-2 sm:flex sm:flex-wrap items-center gap-2 sm:gap-2.5 flex-1 min-w-0"
              role="tablist"
              aria-label="Filter blogs by practice area"
            >
              {INSIGHT_CATEGORIES.map((category, idx) => {
                const isActive = selectedCategory === category;
                const isAllTab = idx === 0;
                const mobileLabel = ARCHIVE_MOBILE_CATEGORY_LABELS[category] || category;

                return (
                  <button
                    key={category}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    onClick={() => setSelectedCategory(category)}
                    className={`${
                      isAllTab ? 'col-span-2 sm:col-span-1' : 'col-span-1'
                    } min-h-[42px] px-3 py-2 sm:px-4 sm:py-2.5 rounded-xl sm:rounded-lg font-sans text-[11.5px] sm:text-[12.5px] leading-snug font-semibold tracking-[0.02em] transition-all flex items-center justify-between sm:justify-center gap-1.5 cursor-pointer ${
                      isActive
                        ? 'bg-[#E5B842] text-[#0F172A] shadow-md'
                        : 'bg-white/10 text-white/90 hover:bg-white/20 border border-[#E5B842]/30'
                    }`}
                  >
                    <span className="sm:hidden truncate">{mobileLabel}</span>
                    <span className="hidden sm:inline">{category}</span>
                    <span
                      className={`sm:hidden text-[10px] font-serif font-bold px-1.5 py-0.5 rounded-md shrink-0 tabular-nums ${
                        isActive
                          ? 'bg-[#6A0C1E] text-[#E5B842]'
                          : 'bg-white/15 text-[#E5B842]'
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

            {/* Search Input */}
            <div className="relative w-full lg:w-72 shrink-0">
              <Search
                className="w-4 h-4 text-[#E5B842] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none"
                aria-hidden="true"
              />
              <input
                type="search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search articles or statutes..."
                aria-label="Search legal blogs"
                className="w-full pl-10 pr-4 py-2.5 rounded-xl sm:rounded-lg bg-[#5C0818]/85 border border-[#E5B842]/40 text-white placeholder:text-white/60 font-sans text-[13.5px] focus:outline-none focus:border-[#E5B842]"
              />
            </div>
          </div>
        </div>
      </div>

      {/* ====================================================================
          2. ALL BLOGS ARCHIVE (MOBILE DOSSIER DECK + DESKTOP 3-COL GRID)
          ==================================================================== */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-20">
        {/* Results Count Bar */}
        <div className="flex flex-wrap items-center justify-between gap-2 pb-4 sm:pb-6 mb-6 sm:mb-8 border-b border-slate-200">
          <div className="font-sans text-[13px] sm:text-[13.5px] text-[#64748B]">
            Showing{' '}
            <span className="font-semibold text-[#0F172A] tabular-nums">
              {filteredPosts.length}
            </span>{' '}
            of{' '}
            <span className="font-semibold text-[#0F172A] tabular-nums">
              {INSIGHTS_DATA.length}
            </span>{' '}
            published legal blogs
            {selectedCategory !== 'All Publications' ? ` in ${selectedCategory}` : ''}
          </div>

          {selectedCategory !== 'All Publications' || searchQuery ? (
            <button
              type="button"
              onClick={() => {
                setSelectedCategory('All Publications');
                setSearchQuery('');
              }}
              className="font-sans text-[12px] font-bold uppercase tracking-[0.06em] text-[#9B112C] hover:underline cursor-pointer"
            >
              Reset Filters
            </button>
          ) : null}
        </div>

        {filteredPosts.length === 0 ? (
          <div className="bg-slate-50 rounded-2xl border border-slate-200/90 p-10 sm:p-12 text-center max-w-xl mx-auto">
            <h2 className="font-serif text-2xl font-semibold text-[#0F172A] mb-2">
              No Matching Legal Publications Found
            </h2>
            <p className="font-sans text-[14.5px] text-[#64748B] mb-6">
              Try clearing your search query or selecting a different practice area category.
            </p>
            <button
              type="button"
              onClick={() => {
                setSelectedCategory('All Publications');
                setSearchQuery('');
              }}
              className="px-6 py-2.5 rounded-full bg-[#9B112C] text-white font-sans text-[12.5px] uppercase tracking-[0.06em] font-bold cursor-pointer hover:bg-[#750B1F] shadow-sm transition-colors"
            >
              Show All Blogs
            </button>
          </div>
        ) : (
          <>
            {/* ==============================================================
                MOBILE-NATIVE COMPACT DOSSIER STREAM (md:hidden)
                ============================================================== */}
            <div className="md:hidden space-y-4">
              {filteredPosts.map((post, idx) => {
                const isCopied = copiedSlug === post.slug;
                const isLeadMobile = idx === 0 && selectedCategory === 'All Publications' && !searchQuery;

                if (isLeadMobile) {
                  return (
                    <article
                      key={post.id}
                      className="rounded-3xl bg-gradient-to-b from-[#8C0E26] via-[#750B1F] to-[#5C0818] text-white border-2 border-[#E5B842]/45 shadow-xl overflow-hidden"
                    >
                      <a
                        href={`/insights/${post.slug}`}
                        onClick={(e) => handlePostLinkClick(e, post.slug)}
                        className="block relative aspect-[16/9] w-full overflow-hidden bg-[#5C0818]"
                      >
                        <img
                          src={post.image}
                          alt={post.title}
                          loading="lazy"
                          referrerPolicy="no-referrer"
                          className="w-full h-full object-cover"
                        />
                        <div
                          className="absolute inset-0 bg-gradient-to-t from-[#5C0818] via-[#5C0818]/30 to-transparent"
                          aria-hidden="true"
                        />
                        <div className="absolute bottom-2.5 left-4 right-4 flex items-end justify-between gap-2">
                          <div className="font-sans text-[11px] font-semibold text-[#E5B842]">
                            <span>Featured Briefing</span>
                            <span className="mx-1.5" aria-hidden="true">·</span>
                            <span>{post.category}</span>
                          </div>
                          <span className="font-serif text-3xl font-bold text-[#E5B842] leading-none">
                            {post.number}
                          </span>
                        </div>
                      </a>

                      <div className="p-4">
                        <h2 className="font-serif text-[1.35rem] font-semibold text-white leading-[1.16] mb-2">
                          <a
                            href={`/insights/${post.slug}`}
                            onClick={(e) => handlePostLinkClick(e, post.slug)}
                          >
                            {post.title}
                          </a>
                        </h2>

                        <p className="font-sans text-[13px] text-white/85 leading-[1.55] line-clamp-2 mb-3.5">
                          {post.excerpt}
                        </p>

                        <div className="pt-3 border-t border-[#E5B842]/25 flex items-center justify-between gap-2">
                          <button
                            type="button"
                            onClick={(e) => handleCopyPostLink(e, post.slug)}
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/10 border border-[#E5B842]/30 text-[11px] font-sans font-semibold text-white cursor-pointer"
                          >
                            {isCopied ? (
                              <>
                                <Check className="w-3.5 h-3.5 text-[#E5B842]" />
                                <span>Copied</span>
                              </>
                            ) : (
                              <>
                                <Link2 className="w-3.5 h-3.5 text-[#E5B842]" />
                                <span>Copy Link</span>
                              </>
                            )}
                          </button>

                          <a
                            href={`/insights/${post.slug}`}
                            onClick={(e) => handlePostLinkClick(e, post.slug)}
                            className="inline-flex items-center gap-1.5 pl-3.5 pr-2 py-1.5 rounded-full bg-[#E5B842] text-[#0F172A] font-sans text-[11px] font-bold uppercase tracking-[0.06em] shadow-sm"
                          >
                            <span>Read Article</span>
                            <span className="w-5 h-5 rounded-full bg-white text-[#0F172A] flex items-center justify-center">
                              <ArrowUpRight className="w-3 h-3" />
                            </span>
                          </a>
                        </div>
                      </div>
                    </article>
                  );
                }

                return (
                  <article
                    key={post.id}
                    className="bg-white rounded-2xl border border-slate-200/90 shadow-md p-4 flex flex-col gap-3"
                  >
                    {/* Top Horizontal Split: Square Thumbnail + Metadata & Title */}
                    <a
                      href={`/insights/${post.slug}`}
                      onClick={(e) => handlePostLinkClick(e, post.slug)}
                      className="flex items-start gap-3.5"
                    >
                      <div className="relative w-20 h-20 rounded-xl overflow-hidden bg-[#5C0818] border border-slate-200 shrink-0">
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
                        <span className="absolute bottom-1 left-2 font-serif text-sm font-bold text-[#E5B842] leading-none">
                          {post.number}
                        </span>
                      </div>

                      <div className="flex-1 min-w-0">
                        <div className="flex flex-wrap items-center gap-1 font-sans text-[10.5px] text-[#9B112C] font-semibold mb-1">
                          <span>{post.category}</span>
                          <span className="text-[#64748B]" aria-hidden="true">·</span>
                          <span className="text-[#64748B] font-normal">{post.readTime}</span>
                        </div>

                        <h2 className="font-serif text-[1.18rem] font-semibold text-[#0F172A] leading-[1.2] line-clamp-2">
                          {post.title}
                        </h2>
                      </div>
                    </a>

                    {/* Concise 2-Line Excerpt */}
                    <p className="font-sans text-[12.5px] text-[#64748B] leading-[1.5] line-clamp-2">
                      {post.excerpt}
                    </p>

                    {/* Bottom Action Bar */}
                    <div className="pt-2.5 border-t border-slate-200 flex items-center justify-between gap-2">
                      <div className="flex items-center gap-2 min-w-0">
                        <span className="font-sans text-[11px] font-semibold text-[#0F172A] truncate">
                          {post.author.name}
                        </span>
                        <button
                          type="button"
                          onClick={(e) => handleCopyPostLink(e, post.slug)}
                          className="inline-flex items-center gap-1 px-2 py-1 rounded-md bg-slate-100 text-[10.5px] font-sans font-semibold text-[#9B112C] shrink-0 cursor-pointer"
                          title="Copy direct link to this blog"
                        >
                          {isCopied ? (
                            <>
                              <Check className="w-3 h-3" />
                              <span>Copied</span>
                            </>
                          ) : (
                            <>
                              <Link2 className="w-3 h-3" />
                              <span>Link</span>
                            </>
                          )}
                        </button>
                      </div>

                      <a
                        href={`/insights/${post.slug}`}
                        onClick={(e) => handlePostLinkClick(e, post.slug)}
                        className="inline-flex items-center gap-1.5 font-sans text-[11px] font-bold uppercase tracking-[0.06em] text-[#9B112C] whitespace-nowrap shrink-0"
                      >
                        <span>Read Blog</span>
                        <span className="w-6 h-6 rounded-full bg-slate-100 group-hover:bg-[#9B112C] text-[#9B112C] flex items-center justify-center">
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </span>
                      </a>
                    </div>
                  </article>
                );
              })}
            </div>

            {/* ==============================================================
                TABLET & DESKTOP 2/3-COLUMN ARCHIVE GRID (hidden md:grid)
                ============================================================== */}
            <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-7 sm:gap-8">
              {filteredPosts.map((post) => {
                const isCopied = copiedSlug === post.slug;
                return (
                  <article
                    key={post.id}
                    className="group bg-white rounded-2xl border border-slate-200/90 hover:border-[#9B112C]/50 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden flex flex-col justify-between"
                  >
                    <div>
                      {/* Clickable Image Link */}
                      <a
                        href={`/insights/${post.slug}`}
                        onClick={(e) => handlePostLinkClick(e, post.slug)}
                        className="block relative aspect-[16/10] w-full overflow-hidden bg-[#5C0818]"
                      >
                        <img
                          src={post.image}
                          alt={post.title}
                          loading="lazy"
                          referrerPolicy="no-referrer"
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div
                          className="absolute inset-0 bg-gradient-to-t from-[#5C0818]/80 via-transparent to-transparent pointer-events-none"
                          aria-hidden="true"
                        />
                        <span className="absolute bottom-3 left-4 font-serif text-2xl font-bold text-white drop-shadow">
                          {post.number}
                        </span>
                      </a>

                      {/* Card Content */}
                      <div className="p-6 pb-4">
                        {/* Clean Unboxed Metadata */}
                        <div className="flex flex-wrap items-center gap-1.5 font-sans text-[12px] text-[#9B112C] font-semibold mb-2.5">
                          <span>{post.category}</span>
                          <span className="text-[#64748B]" aria-hidden="true">·</span>
                          <span className="text-[#64748B] font-normal">{post.publishedDate}</span>
                          <span className="text-[#64748B]" aria-hidden="true">·</span>
                          <span className="text-[#64748B] font-normal">{post.readTime}</span>
                        </div>

                        <h2 className="font-serif text-[1.5rem] sm:text-[1.6rem] font-semibold text-[#0F172A] group-hover:text-[#9B112C] leading-[1.18] tracking-[-0.01em] transition-colors mb-2.5">
                          <a
                            href={`/insights/${post.slug}`}
                            onClick={(e) => handlePostLinkClick(e, post.slug)}
                            className="focus:outline-none focus-visible:underline"
                          >
                            {post.title}
                          </a>
                        </h2>

                        <p className="font-sans text-[14px] sm:text-[14.5px] text-[#64748B] leading-[1.6] font-normal mb-4">
                          {post.excerpt}
                        </p>

                        {/* Direct Permalink Path Display & Copy Button */}
                        <div className="pt-3 border-t border-slate-100 flex items-center justify-between gap-2 text-[11.5px] font-sans text-[#64748B]">
                          <span className="truncate font-mono text-[11px] text-[#9B112C]/80">
                            /insights/{post.slug}
                          </span>
                          <button
                            type="button"
                            onClick={(e) => handleCopyPostLink(e, post.slug)}
                            className="inline-flex items-center gap-1 text-[11.5px] font-semibold text-[#9B112C] hover:text-[#750B1F] whitespace-nowrap shrink-0 cursor-pointer"
                            title="Copy direct link to this blog"
                          >
                            {isCopied ? (
                              <>
                                <Check className="w-3.5 h-3.5 text-[#9B112C]" />
                                <span>Link Copied</span>
                              </>
                            ) : (
                              <>
                                <Link2 className="w-3.5 h-3.5" />
                                <span>Copy Link</span>
                              </>
                            )}
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* Bottom Author & Open Article Link */}
                    <div className="px-6 pb-5 pt-3.5 border-t border-slate-200 bg-slate-50/60 flex items-center justify-between gap-3">
                      <div className="font-sans text-[12px] text-[#475569] truncate">
                        <span className="font-semibold text-[#0F172A]">{post.author.name}</span>
                        <span className="mx-1.5 text-[#64748B]" aria-hidden="true">·</span>
                        <span className="text-[#64748B]">{post.author.role}</span>
                      </div>

                      <a
                        href={`/insights/${post.slug}`}
                        onClick={(e) => handlePostLinkClick(e, post.slug)}
                        className="inline-flex items-center gap-1.5 font-sans text-[12px] font-bold uppercase tracking-[0.06em] text-[#9B112C] group-hover:text-[#750B1F] whitespace-nowrap shrink-0"
                      >
                        <span>Read Article</span>
                        <span className="w-6 h-6 rounded-full bg-slate-100 group-hover:bg-[#9B112C] text-[#9B112C] group-hover:text-white flex items-center justify-center transition-colors">
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </span>
                      </a>
                    </div>
                  </article>
                );
              })}
            </div>
          </>
        )}

        {/* Bottom Direct Chambers Advisory Callout */}
        <div className="mt-12 sm:mt-16 rounded-3xl bg-gradient-to-r from-[#8C0E26] via-[#750B1F] to-[#5C0818] text-white p-6 sm:p-10 lg:p-12 border-2 border-[#E5B842]/40 shadow-xl flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="max-w-2xl text-center lg:text-left">
            <div className="font-sans text-[10.5px] sm:text-[11px] uppercase tracking-[0.16em] text-[#E5B842] font-bold mb-2">
              BESPOKE LEGAL OPINIONS & REPRESENTATION
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-semibold text-white leading-tight mb-2">
              Require Specific Legal Advice on a Pakistani Law Matter?
            </h2>
            <p className="font-sans text-[14px] sm:text-[15px] text-white/90 leading-relaxed">
              Our publications provide general legal commentary. For formal legal opinions, litigation strategy, or cross-border representation, instruct our chambers directly.
            </p>
          </div>

          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-6 py-3.5 rounded-full bg-[#E5B842] hover:bg-[#d4a833] text-[#0F172A] font-sans text-[12.5px] sm:text-[13px] uppercase tracking-[0.06em] font-bold shadow-lg transition-all whitespace-nowrap shrink-0"
          >
            <MessageSquare className="w-4 h-4 text-[#0F172A]" />
            <span>Consult via WhatsApp</span>
            <ArrowUpRight className="w-4 h-4 text-[#0F172A]" />
          </a>
        </div>
      </div>
    </div>
  );
};
