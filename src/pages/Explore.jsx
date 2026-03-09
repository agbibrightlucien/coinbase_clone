import { useState, useRef } from "react";
import { COINS, STAT_CARDS, TOP_MOVERS, NEW_COINS } from "../data/exploreData";
import { Spark } from "../components/crypto/Sparkline";
import { makePts } from "../data/sparklineUtils";
import { CoinLogo } from "../components/crypto/CoinLogo";
import { ChangeText } from "../components/common/ChangeText";
import { SortBtn } from "../components/common/SortBtn";
import { DropBtn } from "../components/common/DropBtn";

// ─── Main ─────────────────────────────────────────────────────────────────────
function Explore() {
  const [starred, setStarred] = useState(new Set());
  const [expandStats, setExpandStats] = useState(false);
  const [expandPrices, setExpandPrices] = useState(false);
  const tmRef = useRef(null);
  const ncRef = useRef(null);

  // Pre-generate sparklines
  const sparks = Object.fromEntries(
    COINS.map(c => [c.ticker, makePts(c.change > 0 ? 0.8 : -0.8, 40, c.seed)])
  );
  const statSparks = STAT_CARDS.map(c => makePts(c.change > 0 ? 0.5 : -1.5, 60, c.seed));

  const toggleStar = (t) => setStarred(p => { const n = new Set(p); n.has(t) ? n.delete(t) : n.add(t); return n; });

  return (
    <div className="bg-white min-h-screen" style={{ fontFamily: "system-ui, -apple-system, sans-serif" }}>
      <div className="max-w-[1400px] mx-auto px-6 py-8 flex gap-8">

        {/* ══ MAIN CONTENT ══════════════════════════════════════════════════ */}
        <main className="flex-1 min-w-0">

          {/* Title + search */}
          <div className="flex items-start justify-between mb-8 gap-6">
            <div>
              <h1 className="text-[2.5rem] font-bold text-gray-950 leading-tight tracking-tight">
                Explore crypto
              </h1>
              <div className="flex items-center gap-1.5 mt-1.5 text-sm text-gray-500">
                Coinbase 50 Index is down
                <span className="text-red-500 font-medium">↘ 0.36% (24hrs)</span>
                <span className="w-4 h-4 rounded-full border border-gray-300 text-gray-400 text-[10px] flex items-center justify-center cursor-help select-none">i</span>
              </div>
            </div>
            <div className="relative w-80 flex-shrink-0">
              <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
              </svg>
              <input type="text" placeholder="Search for an asset"
                className="w-full pl-10 pr-4 py-2.5 rounded-full border border-gray-200 bg-gray-100 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all" />
            </div>
          </div>

          {/* ── MARKET STATS ───────────────────────────────────────── */}
          <section className="border border-gray-200 rounded-2xl p-6 mb-6">
            <div className="flex items-center justify-between mb-2">
              <h2 className="text-2xl font-bold text-gray-950">Market stats</h2>
              <div className="flex gap-2">
                {["‹","›"].map(c => (
                  <button key={c} className="w-8 h-8 rounded-full border border-gray-200 text-gray-500 hover:bg-gray-50 flex items-center justify-center text-lg transition-colors">{c}</button>
                ))}
              </div>
            </div>

            <p className="text-sm text-gray-500 leading-relaxed">
              The overall crypto market is growing this week. As of today, the total crypto market capitalization is 24.31 trillion, representing a 4.06% increase from last week.
              {expandStats && " The 24-hour crypto market trading volume has also seen a 1.48% decrease over the past day. The top performing cryptocurrencies by price are Alchemix, Syndicate and Perpetual Protocol. Bitcoin remains the largest cryptocurrency by market capitalization."}
            </p>
            <button onClick={() => setExpandStats(v => !v)}
              className="text-sm text-blue-600 hover:text-blue-700 font-medium mt-1 mb-5">
              {expandStats ? "Show less" : "Read more"}
            </button>

            <div className="grid grid-cols-2 xl:grid-cols-4 gap-3">
              {STAT_CARDS.map((card, i) => (
                <div key={card.label} className="bg-gray-50 border border-gray-150 rounded-xl px-4 pt-4 pb-2">
                  <div className="text-xs text-gray-500 mb-1">{card.label}</div>
                  <div className="flex items-baseline gap-2 mb-3">
                    <span className="text-[15px] font-semibold text-gray-900">{card.value}</span>
                    <ChangeText value={card.change} size="xs" />
                  </div>
                  <Spark pts={statSparks[i]} color="#EF4444" w={160} h={52} filled />
                </div>
              ))}
            </div>
          </section>

          {/* ── CRYPTO MARKET PRICES ────────────────────────────────── */}
          <section className="border border-gray-200 rounded-2xl p-6">
            <div className="flex items-baseline gap-3 mb-1">
              <h2 className="text-2xl font-bold text-gray-950">Crypto market prices</h2>
              <span className="text-sm text-gray-400">18,591 assets</span>
            </div>

            <p className="text-sm text-gray-500 leading-relaxed">
              The overall crypto market is growing this week. As of today, the total crypto market capitalization is 24.31 trillion, representing a 4.06% increase from last week.
              {expandPrices && " The top performing cryptocurrencies by price are Alchemix, Syndicate and Perpetual Protocol."}
            </p>
            <button onClick={() => setExpandPrices(v => !v)}
              className="text-sm text-blue-600 hover:text-blue-700 font-medium mt-1 mb-5">
              {expandPrices ? "Show less" : "Read more"}
            </button>

            {/* Filter pills */}
            <div className="flex flex-wrap gap-2 mb-5">
              <DropBtn icon="🌐">All assets</DropBtn>
              <DropBtn>1D</DropBtn>
              <DropBtn>GHS</DropBtn>
              <DropBtn>10 rows</DropBtn>
            </div>

            {/* Table */}
            <div className="overflow-x-auto -mx-1">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="border-b border-gray-100">
                    <th className="w-6 py-2 px-1"></th>
                    <th className="py-2 px-2 text-left">
                      <SortBtn label="Asset" />
                    </th>
                    <th className="py-2 px-3 text-right">
                      <SortBtn label="Market price" />
                    </th>
                    <th className="py-2 px-3 text-left text-gray-500 font-medium">Chart</th>
                    <th className="py-2 px-3 text-right">
                      <SortBtn label="Change" />
                    </th>
                    <th className="py-2 px-3 text-right">
                      <SortBtn label="Mkt cap" active />
                    </th>
                    <th className="py-2 px-3 text-right">
                      <SortBtn label="Volume" />
                    </th>
                    <th className="py-2 px-3 text-right text-gray-500 font-medium">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {COINS.map((coin) => (
                    <tr key={coin.ticker}
                      className="border-b border-gray-50 hover:bg-gray-50/60 transition-colors cursor-pointer">
                      {/* Star */}
                      <td className="py-3.5 px-1 w-6">
                        <button onClick={() => toggleStar(coin.ticker)}
                          className="text-gray-300 hover:text-yellow-400 transition-colors">
                          <svg className={`w-4 h-4 ${starred.has(coin.ticker) ? "fill-yellow-400 text-yellow-400" : "fill-none"}`}
                            viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                            <path strokeLinecap="round" strokeLinejoin="round"
                              d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"/>
                          </svg>
                        </button>
                      </td>
                      {/* Asset */}
                      <td className="py-3.5 px-2">
                        <div className="flex items-center gap-3">
                          <CoinLogo ticker={coin.ticker} color={coin.color} size={36} />
                          <div>
                            <div className="font-semibold text-gray-900 text-[15px]">{coin.name}</div>
                            <div className="text-xs text-gray-400 mt-0.5">{coin.ticker}</div>
                          </div>
                        </div>
                      </td>
                      {/* Price */}
                      <td className="py-3.5 px-3 text-right font-medium text-gray-900 tabular-nums whitespace-nowrap">
                        {coin.price}
                      </td>
                      {/* Chart */}
                      <td className="py-3.5 px-3">
                        <Spark pts={sparks[coin.ticker]} color={coin.change >= 0 ? "#10B981" : "#F7931A"} w={80} h={32} />
                      </td>
                      {/* Change */}
                      <td className="py-3.5 px-3 text-right whitespace-nowrap">
                        <ChangeText value={coin.change} />
                      </td>
                      {/* Mkt cap */}
                      <td className="py-3.5 px-3 text-right text-gray-700 tabular-nums whitespace-nowrap">
                        {coin.mktCap}
                      </td>
                      {/* Volume */}
                      <td className="py-3.5 px-3 text-right text-gray-700 tabular-nums whitespace-nowrap">
                        {coin.vol}
                      </td>
                      {/* Trade */}
                      <td className="py-3.5 px-3 text-right">
                        <button className="px-5 py-1.5 bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white text-sm font-semibold rounded-full transition-colors whitespace-nowrap">
                          Trade
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="pt-5 text-center">
              <button className="text-sm text-blue-600 hover:text-blue-700 font-semibold">
                See all assets →
              </button>
            </div>
          </section>
        </main>

        {/* ══ RIGHT SIDEBAR ════════════════════════════════════════════════ */}
        <aside className="hidden lg:flex flex-col gap-4 w-[270px] flex-shrink-0">

          {/* Get started */}
          <div className="bg-blue-600 rounded-2xl p-5 relative overflow-hidden text-white min-h-[160px]">
            <div className="text-xl font-bold mb-1">Get started</div>
            <div className="text-sm text-blue-100 mb-5">Create your account today</div>
            <button className="px-5 py-2 bg-white text-gray-950 text-sm font-bold rounded-full hover:bg-gray-100 transition-colors">
              Sign up
            </button>
            {/* Coin decorations */}
            <div className="absolute right-3 top-3 pointer-events-none">
              <div className="relative w-20 h-20">
                <div className="absolute right-2 top-1 w-14 h-14 rounded-full bg-yellow-400 border-[3px] border-white shadow-lg flex items-center justify-center">
                  <svg viewBox="0 0 24 24" width="24" height="24" fill="white"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z"/></svg>
                </div>
                <div className="absolute right-11 top-7 w-9 h-9 rounded-full bg-blue-400 border-2 border-white shadow flex items-center justify-center">
                  <span className="text-white text-base font-bold">◈</span>
                </div>
                <div className="absolute right-2 top-12 w-7 h-7 rounded-full bg-green-400 border-2 border-white shadow flex items-center justify-center">
                  <span className="text-white text-xs font-bold">●</span>
                </div>
              </div>
            </div>
          </div>

          {/* Top movers */}
          <div className="border border-gray-200 rounded-2xl p-4">
            <div className="flex items-center justify-between mb-0.5">
              <h3 className="text-base font-bold text-gray-950">Top movers</h3>
              <div className="flex gap-1">
                {["‹","›"].map((c,i) => (
                  <button key={i} onClick={() => tmRef.current?.scrollBy({ left: i===0?-130:130, behavior:"smooth" })}
                    className="w-7 h-7 rounded-full border border-gray-200 text-gray-500 hover:bg-gray-50 flex items-center justify-center text-base transition-colors">{c}</button>
                ))}
              </div>
            </div>
            <div className="text-xs text-gray-400 mb-3">24hr change</div>
            <div ref={tmRef} className="flex gap-2 overflow-x-auto pb-1" style={{ scrollbarWidth:"none" }}>
              {TOP_MOVERS.map(coin => (
                <div key={coin.ticker} className="flex-shrink-0 w-[110px] bg-gray-50 border border-gray-200 rounded-xl p-3 hover:border-gray-300 transition-colors cursor-pointer">
                  <div className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold text-white mb-2"
                    style={{ background: coin.color }}>
                    {coin.ticker.slice(0,2)}
                  </div>
                  <div className="text-xs text-gray-500">{coin.ticker}</div>
                  <div className="text-base font-bold text-emerald-600 leading-tight">
                    ↗ {Math.abs(coin.change).toFixed(2)}%
                  </div>
                  <div className="text-xs text-gray-600 mt-0.5">{coin.price}</div>
                </div>
              ))}
            </div>
          </div>

          {/* New on Coinbase */}
          <div className="border border-gray-200 rounded-2xl p-4">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-base font-bold text-gray-950">New on Coinbase</h3>
              <div className="flex gap-1">
                {["‹","›"].map((c,i) => (
                  <button key={i} onClick={() => ncRef.current?.scrollBy({ left: i===0?-130:130, behavior:"smooth" })}
                    className="w-7 h-7 rounded-full border border-gray-200 text-gray-500 hover:bg-gray-50 flex items-center justify-center text-base transition-colors">{c}</button>
                ))}
              </div>
            </div>
            <div ref={ncRef} className="flex gap-2 overflow-x-auto pb-1" style={{ scrollbarWidth:"none" }}>
              {NEW_COINS.map(coin => (
                <div key={coin.ticker} className="flex-shrink-0 w-[110px] bg-gray-50 border border-gray-200 rounded-xl p-3 hover:border-gray-300 transition-colors cursor-pointer">
                  <div className="w-9 h-9 rounded-full flex items-center justify-center text-[10px] font-bold text-white mb-2"
                    style={{ background: coin.color }}>
                    {coin.ticker.slice(0,4)}
                  </div>
                  <div className="text-[10px] text-gray-400 uppercase tracking-wide">{coin.ticker}</div>
                  <div className="text-sm font-bold text-gray-900 leading-tight">{coin.name}</div>
                  <div className="text-xs text-gray-400 mt-0.5">{coin.added}</div>
                </div>
              ))}
            </div>
          </div>

        </aside>
      </div>
    </div>
  );
}



export default Explore;