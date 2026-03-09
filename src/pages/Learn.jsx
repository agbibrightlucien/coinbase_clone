import Navbar from "../components/layout/Navbar";
import { ChevronRight } from "../components/common/Icons";
import { Label } from "../components/common/Label";
import { BigCard } from "../components/common/BigCard";
import { SmallCard } from "../components/common/SmallCard";
import { SeeMoreBtn } from "../components/common/SeeMoreBtn";
import { Section } from "../components/common/Section";
import { SectionHeader } from "../components/common/SectionHeader";
import {
  featuredArticle,
  popularArticles,
  sectionAnchors,
  cryptoBasicsBig,
  cryptoBasicsSmall,
  wordCloudItems,
  tipsArticles,
  advancedArticles,
  futuresArticles,
  walletArticles,
} from "../data/learnData";

// ─── Main Page ────────────────────────────────────────────────────────────────

export default function CoinbaseLearnPage() {
  return (
    <div className="font-sans bg-white">

      {/* ── Hero ────────────────────────────────────────── */}
      <Section id="crypto-featured">
        <div className="mb-10">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900">Crypto questions, answered</h1>
          <p className="mt-3 text-lg text-gray-500 max-w-2xl">
            Beginner guides, practical tips, and market updates for first-timers, experienced investors, and everyone in between
          </p>
        </div>

        {/* Featured + Popular grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Featured */}
          <div className="lg:col-span-7">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-gray-400 mb-4">Featured</h2>
            <a href={featuredArticle.href} className="group block rounded-2xl overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow duration-200 bg-white">
              <div className="aspect-[16/9] overflow-hidden bg-gray-50">
                <img src={featuredArticle.image} alt={featuredArticle.title} className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-300" />
              </div>
              <div className="p-6">
                <Label text={featuredArticle.label} />
                <h2 className="mt-2 text-2xl font-bold text-gray-900 leading-snug group-hover:text-[#0052ff] transition-colors">{featuredArticle.title}</h2>
                <p className="mt-2 text-gray-600 leading-relaxed">{featuredArticle.description}</p>
              </div>
            </a>
          </div>

          {/* Popular */}
          <div className="lg:col-span-5">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-gray-400 mb-4">Popular</h2>
            <div className="space-y-1">
              {popularArticles.map((a) => (
                <a key={a.href} href={a.href} className="group flex items-start gap-3 p-3 rounded-xl hover:bg-gray-50 transition-colors">
                  <div className="flex-1 min-w-0">
                    <Label text={a.label} />
                    <h3 className="mt-0.5 text-sm font-semibold text-gray-900 leading-snug group-hover:text-[#0052ff] transition-colors line-clamp-2">{a.title}</h3>
                  </div>
                  <svg className="w-4 h-4 text-gray-300 group-hover:text-[#0052ff] flex-shrink-0 mt-1 transition-colors" fill="none" viewBox="0 0 16 16">
                    <path d="M6 3l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Section anchor nav */}
        <nav className="mt-14 grid grid-cols-2 sm:grid-cols-4 gap-4">
          {sectionAnchors.map((a) => (
            <a key={a.id} href={`#${a.id}`} className="group flex flex-col items-center gap-3 p-4 rounded-2xl border border-gray-100 hover:border-[#0052ff] hover:bg-blue-50 transition-all text-center">
              <img src={a.img} alt={a.label} className="w-14 h-14 object-cover rounded-xl" />
              <div>
                <h3 className="text-sm font-semibold text-gray-900 group-hover:text-[#0052ff] transition-colors">{a.label}</h3>
                <p className="text-xs text-gray-400 flex items-center justify-center gap-0.5 mt-0.5">
                  See more <ChevronRight />
                </p>
              </div>
            </a>
          ))}
        </nav>
      </Section>

      {/* ── Crypto Basics ─────────────────────────────────────────────── */}
      <Section id="crypto-basics" gray>
        <SectionHeader
          title="Crypto basics"
          subtitle="New to crypto? Not for long — start with these guides and explainers"
        />

        {/* 2 big cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {cryptoBasicsBig.map((a) => (
            <BigCard key={a.href} {...a} />
          ))}
        </div>

        {/* 4-5 small cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {cryptoBasicsSmall.map((a) => (
            <SmallCard key={a.href} {...a} />
          ))}
        </div>

        <SeeMoreBtn href="/learn/crypto-basics" label="See more crypto basics" />
      </Section>

      {/* ── Word Cloud ────────────────────────────────────────────────── */}
      <Section id="word-cloud">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">What is...</h2>
        <div className="flex flex-wrap gap-3">
          {wordCloudItems.map((w) => (
            <a
              key={w.href}
              href={w.href}
              className="inline-block px-5 py-2.5 rounded-full border border-gray-200 bg-white text-sm font-semibold text-gray-800 hover:bg-[#0052ff] hover:text-white hover:border-[#0052ff] transition-all duration-150 shadow-sm"
            >
              {w.label}
            </a>
          ))}
          <a
            href="/learn/crypto-glossary"
            className="inline-block px-5 py-2.5 rounded-full bg-[#0052ff] text-white text-sm font-semibold hover:bg-blue-700 transition-colors shadow-sm"
          >
            See more
          </a>
        </div>
      </Section>

      {/* ── Tips & Tutorials ──────────────────────────────────────────── */}
      <Section id="tips-and-tutorials" gray>
        <SectionHeader
          title="Tips and tutorials"
          subtitle="Get practical, step-by-step answers to all things crypto"
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {tipsArticles.map((a) => (
            <BigCard key={a.href} {...a} />
          ))}
        </div>
        <SeeMoreBtn href="/learn/tips-and-tutorials" label="See more tips and tutorials" />
      </Section>

      {/* ── Advanced Trading ──────────────────────────────────────────── */}
      <Section id="advanced-trading">
        <SectionHeader
          title="Advanced trading"
          subtitle="Ready to advance? Learn the tools and terminology you need to take control of your trades."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {advancedArticles.map((a) => (
            <BigCard key={a.href} {...a} />
          ))}
        </div>
        <SeeMoreBtn href="/learn/advanced-trading" label="See more advanced trading" />
      </Section>

      {/* ── Futures ───────────────────────────────────────────────────── */}
      <Section id="futures" gray>
        <SectionHeader
          title="Futures"
          subtitle="New to futures trading? Get up to speed on the basics."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {futuresArticles.map((a) => (
            <BigCard key={a.href} {...a} />
          ))}
        </div>
        <SeeMoreBtn href="/learn/futures" label="See more about futures" />
      </Section>

      {/* ── All Things Wallet ─────────────────────────────────────────── */}
      <Section id="wallet">
        <SectionHeader
          title="All Things Wallet"
          subtitle="Earn yield, dive into crypto apps, control your holdings, and much more"
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {walletArticles.map((a) => (
            <BigCard key={a.href} {...a} />
          ))}
        </div>
        <SeeMoreBtn href="/learn/wallet/" label="See more Wallet articles" />
      </Section>
    </div>
  );
}
