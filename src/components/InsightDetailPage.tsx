import React from 'react';
import {
  ArrowLeft,
  ArrowUpRight,
  CheckCircle2,
  MessageSquare,
  Scale,
  BookOpen,
} from 'lucide-react';
import { INSIGHTS_DATA, InsightPost } from '../data/insightsData';
import { FIRM_CONFIG } from '../data/firmData';
import { heroConfig } from '../data/heroConfig';
import { useTransparentLogo } from '../utils/useTransparentLogo';

interface InsightDetailPageProps {
  post: InsightPost;
  onNavigateHome: (sectionHash?: string) => void;
  onNavigateToAllInsights: () => void;
  onNavigateToPost: (slug: string) => void;
}

export const InsightDetailPage: React.FC<InsightDetailPageProps> = ({
  post,
  onNavigateHome,
  onNavigateToAllInsights,
  onNavigateToPost,
}) => {
  const { logoSrc, isProcessed } = useTransparentLogo(heroConfig.logo);

  const relatedPosts = INSIGHTS_DATA.filter((item) => item.slug !== post.slug).slice(0, 3);

  const whatsappText = `Assalam-o-Alaikum Qadeer Legal Chambers, I read your publication "${post.title}" and would like to request legal counsel regarding ${post.category}.`;
  const whatsappHref = `https://wa.me/${FIRM_CONFIG.contact.whatsappNumber}?text=${encodeURIComponent(
    whatsappText
  )}`;

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

  return (
    <div className="min-h-screen bg-[#FFFFFF] text-[#0F172A]">
      {/* ====================================================================
          1. VIBRANT RUBY BURGUNDY EDITORIAL ARTICLE HEADER
          ==================================================================== */}
      <div className="relative bg-gradient-to-b from-[#8C0E26] via-[#750B1F] to-[#5C0818] text-white border-b-2 border-[#E5B842]/45 overflow-hidden">
        {/* Background Legal Still Life */}
        <div
          className="absolute inset-0 bg-cover bg-center pointer-events-none scale-105"
          style={{
            backgroundImage: `url(${post.image})`,
          }}
          aria-hidden="true"
        />

        {/* Deep Vibrant Ruby Scrim */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'linear-gradient(170deg, rgba(140, 14, 38, 0.95) 0%, rgba(106, 12, 30, 0.92) 55%, rgba(74, 7, 19, 0.98) 100%)',
          }}
          aria-hidden="true"
        />

        {/* Top Bar Contract: Zone 1 Brand, Zone 2 Nav, Zone 3 Primary Action */}
        <header className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex items-center justify-between gap-8 border-b border-[#E5B842]/20">
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
              className="h-12 sm:h-14 lg:h-16 w-auto object-contain shrink-0"
            />
          </a>

          {/* Zone 2: Clean Single-Line Nav Links */}
          <nav
            className="hidden md:flex items-center gap-7 font-sans text-[14px] font-semibold tracking-[0.03em] text-white/85"
            aria-label="Primary navigation"
          >
            <a
              href="/"
              onClick={(e) => {
                e.preventDefault();
                onNavigateHome();
              }}
              className="hover:text-[#E5B842] transition-colors whitespace-nowrap shrink-0"
            >
              Home
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
            <a
              href="/insights"
              onClick={handleAllClick}
              className="text-[#E5B842] border-b border-[#E5B842] pb-0.5 whitespace-nowrap shrink-0 font-bold"
            >
              All Insights
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
              href="/insights"
              onClick={handleAllClick}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#E5B842] hover:bg-[#d4a833] text-[#0F172A] font-sans text-[12px] uppercase tracking-[0.06em] font-bold transition-colors whitespace-nowrap shrink-0 shadow-md"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>All Blogs</span>
            </a>
          </div>
        </header>

        {/* Article Title & Metadata Lockup */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 sm:pt-14 pb-16 sm:pb-20">
          {/* Clean Unboxed Breadcrumb & Metadata */}
          <div className="flex flex-wrap items-center gap-2 font-sans text-[12px] sm:text-[13px] text-[#E5B842] font-semibold tracking-[0.04em] mb-4">
            <a
              href="/insights"
              onClick={handleAllClick}
              className="hover:underline text-white/80 font-normal"
            >
              Insights Archive
            </a>
            <span aria-hidden="true">/</span>
            <span>{post.category}</span>
            <span aria-hidden="true">·</span>
            <span className="text-white/85 font-normal">{post.publishedDate}</span>
            <span aria-hidden="true">·</span>
            <span className="text-white/85 font-normal">{post.readTime}</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl lg:text-[3.35rem] font-semibold text-white leading-[1.08] tracking-[-0.02em] mb-5">
            {post.title}
          </h1>

          <p className="font-sans text-[16px] sm:text-[18px] text-white/90 leading-[1.6] font-normal max-w-3xl mb-8">
            {post.subtitle}
          </p>

          {/* Author & Direct Link Bar */}
          <div className="pt-6 border-t border-[#E5B842]/30 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <div className="font-serif text-xl font-semibold text-white">
                {post.author.name}
              </div>
              <div className="font-sans text-[12.5px] text-[#E5B842] tracking-[0.03em]">
                {post.author.credentials}
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#E5B842] hover:bg-[#d4a833] text-[#0F172A] font-sans text-[12px] font-bold uppercase tracking-[0.05em] transition-colors whitespace-nowrap shrink-0 shadow-sm"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>Inquire on Topic</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ====================================================================
          2. FEATURE STILL-LIFE PHOTOGRAPH & TWO-COLUMN EDITORIAL BODY
          ==================================================================== */}
      <article className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        {/* Framed Editorial Feature Image */}
        <figure className="mb-12 sm:mb-16">
          <div className="rounded-3xl overflow-hidden border-2 border-slate-200 shadow-2xl aspect-[16/8.5] bg-[#5C0818]">
            <img
              src={post.image}
              alt={post.title}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
          </div>
          <figcaption className="font-serif italic text-[13.5px] sm:text-[14.5px] text-[#64748B] mt-3 text-center">
            {post.imageCaption}
          </figcaption>
        </figure>

        {/* Two-Column Asymmetric Reading Layout (8 Cols Essay / 4 Cols Margin Dossier) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left 8 Cols: Long-Form Legal Analysis */}
          <div className="lg:col-span-8 space-y-10">
            {post.sections.map((section, secIdx) => (
              <section key={section.heading} className="space-y-4">
                <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-[#9B112C] leading-[1.18] tracking-[-0.01em]">
                  {section.heading}
                </h2>

                {section.paragraphs.map((para, pIdx) => {
                  const isFirstParagraphOfArticle = secIdx === 0 && pIdx === 0;
                  return (
                    <p
                      key={pIdx}
                      className={`font-sans text-[15.5px] sm:text-[16.5px] text-[#334155] leading-[1.78] font-normal ${
                        isFirstParagraphOfArticle
                          ? 'first-letter:text-5xl first-letter:font-serif first-letter:font-bold first-letter:text-[#9B112C] first-letter:float-left first-letter:mr-3.5 first-letter:mt-1 first-letter:leading-none'
                          : ''
                      }`}
                    >
                      {para}
                    </p>
                  );
                })}

                {/* Insert Editorial Pull Quote after Section 1 */}
                {secIdx === 0 && (
                  <blockquote className="my-8 py-7 px-6 sm:px-8 border-y border-slate-200 bg-slate-50 rounded-2xl text-center">
                    <p className="font-serif italic text-xl sm:text-2xl md:text-[1.65rem] font-medium text-[#9B112C] leading-[1.4]">
                      “{post.pullQuote}”
                    </p>
                  </blockquote>
                )}
              </section>
            ))}

            {/* Key Legal Takeaways Box */}
            <div className="bg-slate-50 rounded-2xl p-6 sm:p-8 border border-slate-200/90 shadow-md">
              <div className="font-sans text-[11.5px] uppercase tracking-[0.15em] font-bold text-[#9B112C] mb-2">
                PRACTICAL SUMMARY
              </div>
              <h3 className="font-serif text-2xl font-semibold text-[#0F172A] mb-5">
                Key Legal & Procedural Takeaways
              </h3>

              <ul className="space-y-3.5">
                {post.keyTakeaways.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#9B112C] shrink-0 mt-0.5" />
                    <span className="font-sans text-[14.5px] sm:text-[15.5px] text-[#334155] leading-[1.6]">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Formal Chamber Disclaimer */}
            <div className="pt-6 border-t border-slate-200 font-sans text-[12.5px] text-[#64748B] leading-[1.6]">
              <strong className="text-[#0F172A] font-semibold">Chamber Notice:</strong> This publication is prepared by {FIRM_CONFIG.firmName} for general informational and educational reference regarding Pakistani law and procedure. It does not constitute a formal legal opinion or create an advocate-client relationship.
            </div>
          </div>

          {/* Right 4 Cols: Sticky Chamber Dossier & Statutory Index */}
          <aside className="lg:col-span-4 space-y-6 lg:sticky lg:top-8">
            {/* Statutory Reference Ledger */}
            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200/90 shadow-md">
              <div className="flex items-center gap-2 font-sans text-[11px] uppercase tracking-[0.15em] font-bold text-[#9B112C] mb-3">
                <Scale className="w-3.5 h-3.5 text-[#E5B842]" aria-hidden="true" />
                <span>APPLICABLE STATUTES & FORUMS</span>
              </div>

              <dl className="divide-y divide-slate-200 font-sans text-[13.5px]">
                {post.statutesReferenced.map((statute, index) => (
                  <div key={statute} className="py-2.5 flex items-start gap-2.5">
                    <dt className="font-serif font-bold text-[#9B112C] tabular-nums shrink-0">
                      0{index + 1}.
                    </dt>
                    <dd className="text-[#1E293B] font-medium leading-snug">{statute}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </aside>
        </div>

        {/* ====================================================================
            3. RELATED BLOGS & FURTHER READING
            ==================================================================== */}
        <div className="mt-16 sm:mt-20 pt-12 border-t-2 border-slate-200">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
            <div>
              <div className="font-sans text-[11px] uppercase tracking-[0.16em] font-bold text-[#9B112C] mb-1.5">
                CONTINUE READING
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-[#0F172A]">
                Related Chamber Insights
              </h2>
            </div>

            <a
              href="/insights"
              onClick={handleAllClick}
              className="inline-flex items-center gap-2 font-sans text-[12.5px] uppercase tracking-[0.06em] font-bold text-[#9B112C] hover:text-[#750B1F]"
            >
              <BookOpen className="w-4 h-4" />
              <span>View All {INSIGHTS_DATA.length} Blogs</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedPosts.map((related) => (
              <a
                key={related.id}
                href={`/insights/${related.slug}`}
                onClick={(e) => handlePostClick(e, related.slug)}
                className="group bg-white rounded-2xl border border-slate-200/90 hover:border-[#9B112C]/50 p-5 shadow-sm hover:shadow-lg transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-1.5 font-sans text-[11.5px] text-[#9B112C] font-semibold mb-2">
                    <span>{related.category}</span>
                    <span className="text-[#64748B]" aria-hidden="true">·</span>
                    <span className="text-[#64748B] font-normal">{related.readTime}</span>
                  </div>

                  <h3 className="font-serif text-xl font-semibold text-[#0F172A] group-hover:text-[#9B112C] leading-snug mb-2">
                    {related.title}
                  </h3>

                  <p className="font-sans text-[13.5px] text-[#64748B] line-clamp-2">
                    {related.excerpt}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[12px] font-sans font-bold text-[#9B112C]">
                  <span>Read Blog</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </article>
    </div>
  );
};
