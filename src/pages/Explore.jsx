import { useState, useRef, useEffect } from "react";
import axios from "axios";
import { STAT_CARDS } from "../data/exploreData";
import { Spark } from "../components/crypto/Sparkline";
import { makePts } from "../data/sparklineUtils";
import { ChangeText } from "../components/common/ChangeText";
import { SortBtn } from "../components/common/SortBtn";
import { DropBtn } from "../components/common/DropBtn";

function Explore() {
  const [starred, setStarred] = useState(new Set());
  const [expandStats, setExpandStats] = useState(false);
  const [expandPrices, setExpandPrices] = useState(false);
  
  const [coins, setCoins] = useState([]);
  const [topMovers, setTopMovers] = useState([]);
  const [newCoins, setNewCoins] = useState([]);
  const [loading, setLoading] = useState(true);

  const tmRef = useRef(null);
  const ncRef = useRef(null);

  useEffect(() => {
    const fetchCryptoData = async () => {
      try {
        const [allRes, gainersRes, newRes] = await Promise.all([
          axios.get("http://localhost:5000/api/crypto"),
          axios.get("http://localhost:5000/api/crypto/gainers"),
          axios.get("http://localhost:5000/api/crypto/new"),
        ]);
        setCoins(allRes.data);
        setTopMovers(gainersRes.data.slice(0, 10)); 
        setNewCoins(newRes.data.slice(0, 10)); 
      } catch (error) {
        console.error("Failed to fetch crypto data", error);
      } finally {
        setLoading(false);
      }
    };
    fetchCryptoData();
  }, []);

  const statSparks = STAT_CARDS.map(c => makePts(c.change > 0 ? 0.5 : -1.5, 60, c.seed));
  const toggleStar = (t) => setStarred(p => { const n = new Set(p); n.has(t) ? n.delete(t) : n.add(t); return n; });

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center bg-cb-bg"><div className="text-xl text-cb-text font-medium">Loading assets...</div></div>;
  }

  return (
    <div className="bg-cb-bg min-h-screen">
      <div className="max-w-[1400px] mx-auto px-6 py-10 flex gap-10">
        
        {/* ══ MAIN CONTENT ══════════════════════════════════════════════════ */}
        <main className="flex-1 min-w-0">

          {/* Title + search */}
          <div className="flex items-start justify-between mb-8 gap-6">
            <div>
              <h1 className="text-[32px] font-bold text-cb-text leading-tight tracking-tight">
                Explore crypto
              </h1>
              <div className="flex items-center gap-2 mt-1 text-[14px] text-cb-muted font-medium">
                Coinbase 50 Index is down
                <span className="text-cb-negative">↘ 0.36% (24hrs)</span>
                <span className="w-4 h-4 rounded-full border border-cb-border text-cb-muted text-[10px] flex items-center justify-center cursor-help select-none bg-cb-gray-bg">i</span>
              </div>
            </div>
            <div className="relative w-80 flex-shrink-0">
              <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-cb-muted" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
              </svg>
              <input type="text" placeholder="Search for an asset"
                className="w-full pl-10 pr-4 py-3 rounded-full border border-cb-border bg-cb-gray-bg text-[15px] text-cb-text placeholder-cb-muted focus:outline-none focus:ring-1 focus:ring-cb-blue focus:bg-white transition-all font-medium" />
            </div>
          </div>

          {/* ── MARKET STATS ───────────────────────────────────────── */}
          <section className="border border-cb-border rounded-[16px] p-6 mb-8">
            <div className="flex items-center justify-between mb-3">
              <h2 className="text-[20px] font-bold text-cb-text">Market stats</h2>
              <div className="flex gap-2">
                {["‹","›"].map(c => (
                  <button key={c} className="w-8 h-8 rounded-full border border-cb-border text-cb-muted hover:bg-cb-gray-bg flex items-center justify-center text-lg transition-colors bg-white font-bold">{c}</button>
                ))}
              </div>
            </div>

            <p className="text-[14px] text-cb-muted leading-relaxed font-medium">
              The overall crypto market is growing this week. As of today, the total crypto market capitalization is 24.31 trillion, representing a 4.06% increase from last week.
              {expandStats && " The 24-hour crypto market trading volume has also seen a 1.48% decrease over the past day. The top performing cryptocurrencies by price are Alchemix, Syndicate and Perpetual Protocol. Bitcoin remains the largest cryptocurrency by market capitalization."}
            </p>
            <button onClick={() => setExpandStats(v => !v)}
              className="text-[14px] text-cb-blue hover:text-cb-blue-hover font-semibold mt-1 mb-6">
              {expandStats ? "Show less" : "Read more"}
            </button>

            <div className="grid grid-cols-2 xl:grid-cols-4 gap-4">
              {STAT_CARDS.map((card, i) => (
                <div key={card.label} className="bg-cb-gray-bg border border-cb-border rounded-[12px] px-4 pt-4 pb-2">
                  <div className="text-[12px] font-medium text-cb-muted mb-1">{card.label}</div>
                  <div className="flex items-baseline gap-2 mb-3">
                    <span className="text-[16px] font-semibold text-cb-text">{card.value}</span>
                    <span className="text-[12px] font-medium text-cb-negative">{card.change < 0 ? '↘' : '↗'} {Math.abs(card.change).toFixed(2)}%</span>
                  </div>
                  <Spark pts={statSparks[i]} color="#CF202F" w={160} h={52} filled />
                </div>
              ))}
            </div>
          </section>

          {/* ── CRYPTO MARKET PRICES ────────────────────────────────── */}
          <section className="border border-cb-border rounded-[16px] p-6">
            <div className="flex items-baseline gap-3 mb-2">
              <h2 className="text-[20px] font-bold text-cb-text">Crypto market prices</h2>
              <span className="text-[14px] font-medium text-cb-muted">{coins.length} assets</span>
            </div>

            <p className="text-[14px] font-medium text-cb-muted leading-relaxed">
              The overall crypto market is growing this week. As of today, the total crypto market capitalization is 24.31 trillion, representing a 4.06% increase from last week.
              {expandPrices && " The top performing cryptocurrencies by price are Alchemix, Syndicate and Perpetual Protocol."}
            </p>
            <button onClick={() => setExpandPrices(v => !v)}
              className="text-[14px] text-cb-blue hover:text-cb-blue-hover font-semibold mt-1 mb-6">
              {expandPrices ? "Show less" : "Read more"}
            </button>

            {/* Filter pills */}
            <div className="flex flex-wrap gap-2 mb-6">
              <DropBtn icon="🌐">All assets</DropBtn>
              <DropBtn>1D</DropBtn>
              <DropBtn>USD</DropBtn>
              <DropBtn>10 rows</DropBtn>
            </div>

            {/* Table */}
            <div className="overflow-x-auto -mx-1">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="border-b border-cb-border">
                    <th className="w-6 py-3 px-2"></th>
                    <th className="py-3 px-3 text-left font-semibold text-cb-muted text-[13px]">Asset</th>
                    <th className="py-3 px-3 text-right font-semibold text-cb-muted text-[13px]">Market price</th>
                    <th className="py-3 px-3 text-left font-semibold text-cb-muted text-[13px]">Chart</th>
                    <th className="py-3 px-3 text-right font-semibold text-cb-muted text-[13px]">Change</th>
                    <th className="py-3 px-3 text-right font-semibold text-cb-muted text-[13px]">Mkt cap</th>
                    <th className="py-3 px-3 text-right font-semibold text-cb-muted text-[13px]">Volume</th>
                    <th className="py-3 px-3 text-right font-semibold text-cb-muted text-[13px]">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {coins.map((coin) => {
                    const sparkPts = makePts(coin.change24h > 0 ? 0.8 : -0.8, 40, coin._id.charCodeAt(0));
                    return (
                    <tr key={coin.symbol}
                      className="border-b border-cb-border hover:bg-cb-gray-bg transition-colors cursor-pointer group">
                      {/* Star */}
                      <td className="py-4 px-2 w-6">
                        <button onClick={() => toggleStar(coin.symbol)}
                          className="text-cb-muted hover:text-yellow-400 transition-colors">
                          <svg className={`w-[18px] h-[18px] ${starred.has(coin.symbol) ? "fill-yellow-400 text-yellow-400" : "fill-none"}`}
                            viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"/>
                          </svg>
                        </button>
                      </td>
                      {/* Asset */}
                      <td className="py-4 px-3">
                        <div className="flex items-center gap-4">
                          <img src={coin.image} alt={coin.name} className="w-[36px] h-[36px] rounded-full object-cover bg-white border border-cb-border" />
                          <div>
                            <div className="font-semibold text-cb-text text-[15px]">{coin.name}</div>
                            <div className="text-[14px] text-cb-muted font-medium mt-0.5">{coin.symbol}</div>
                          </div>
                        </div>
                      </td>
                      {/* Price */}
                      <td className="py-4 px-3 text-right font-medium text-cb-text text-[15px] tabular-nums whitespace-nowrap">
                        ${coin.price.toLocaleString(undefined, { minimumFractionDigits: 2 })}
                      </td>
                      {/* Chart */}
                      <td className="py-4 px-3">
                        <Spark pts={sparkPts} color={coin.change24h >= 0 ? "#098551" : "#CF202F"} w={80} h={32} />
                      </td>
                      {/* Change */}
                      <td className={`py-4 px-3 text-right whitespace-nowrap font-medium text-[15px] ${coin.change24h >= 0 ? 'text-cb-positive' : 'text-cb-negative'}`}>
                        {coin.change24h >= 0 ? '↗' : '↘'} {Math.abs(coin.change24h).toFixed(2)}%
                      </td>
                      {/* Mkt cap */}
                      <td className="py-4 px-3 text-right font-medium text-cb-text text-[15px] tabular-nums whitespace-nowrap">
                        --
                      </td>
                      {/* Volume */}
                      <td className="py-4 px-3 text-right font-medium text-cb-text text-[15px] tabular-nums whitespace-nowrap">
                        --
                      </td>
                      {/* Trade */}
                      <td className="py-4 px-3 text-right">
                        <button className="px-5 py-2 bg-cb-blue hover:bg-cb-blue-hover active:bg-[#0038B3] text-white text-[14px] font-semibold rounded-full transition-colors whitespace-nowrap">
                          Trade
                        </button>
                      </td>
                    </tr>
                  )})}
                </tbody>
              </table>
            </div>
            <div className="pt-6 text-center">
              <button className="text-[15px] text-cb-blue hover:text-cb-blue-hover font-semibold">
                See all assets
              </button>
            </div>
          </section>
        </main>

        {/* ══ RIGHT SIDEBAR ════════════════════════════════════════════════ */}
        <aside className="hidden lg:flex flex-col gap-6 w-[290px] flex-shrink-0 mt-8">

          {/* Get started */}
          <div className="bg-cb-blue rounded-[16px] p-6 relative overflow-hidden text-white min-h-[160px] shadow-sm">
            <div className="text-[18px] font-bold mb-2">Get started</div>
            <div className="text-[14px] text-white/90 mb-6 font-medium">Create your account today</div>
            <button className="px-5 py-2 bg-white text-cb-text text-[14px] font-bold rounded-full hover:bg-gray-50 transition-colors shadow-sm">
              Sign up
            </button>
          </div>

          {/* Top movers */}
          <div className="border border-cb-border rounded-[16px] p-5">
            <div className="flex items-center justify-between mb-1">
              <h3 className="text-[16px] font-bold text-cb-text">Top movers</h3>
              <div className="flex gap-1">
                {["‹","›"].map((c,i) => (
                  <button key={i} onClick={() => tmRef.current?.scrollBy({ left: i===0?-130:130, behavior:"smooth" })}
                    className="w-[28px] h-[28px] rounded-full border border-cb-border text-cb-muted hover:bg-cb-gray-bg flex items-center justify-center text-sm transition-colors font-bold">{c}</button>
                ))}
              </div>
            </div>
            <div className="text-[13px] font-medium text-cb-muted mb-4">24hr change</div>
            <div ref={tmRef} className="flex gap-3 overflow-x-auto pb-2 -mx-1 px-1" style={{ scrollbarWidth:"none" }}>
              {topMovers.map(coin => (
                <div key={coin.symbol} className="flex-shrink-0 w-[120px] bg-cb-bg border border-cb-border rounded-[12px] p-4 hover:border-gray-300 transition-colors cursor-pointer shadow-sm">
                  <img src={coin.image} alt={coin.name} className="w-[32px] h-[32px] rounded-full mb-3 border border-cb-border" />
                  <div className="text-[13px] font-medium text-cb-muted mb-1">{coin.symbol}</div>
                  <div className="text-[16px] font-bold text-cb-positive leading-tight mb-1">
                    ↗ {Math.abs(coin.change24h).toFixed(2)}%
                  </div>
                  <div className="text-[13px] font-medium text-cb-text">${coin.price.toLocaleString()}</div>
                </div>
              ))}
            </div>
          </div>

          {/* New listings */}
          <div className="border border-cb-border rounded-[16px] p-5">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-[16px] font-bold text-cb-text">New listings</h3>
              <div className="flex gap-1">
                {["‹","›"].map((c,i) => (
                  <button key={i} onClick={() => ncRef.current?.scrollBy({ left: i===0?-130:130, behavior:"smooth" })}
                    className="w-[28px] h-[28px] rounded-full border border-cb-border text-cb-muted hover:bg-cb-gray-bg flex items-center justify-center text-sm transition-colors font-bold">{c}</button>
                ))}
              </div>
            </div>
            <div ref={ncRef} className="flex gap-3 overflow-x-auto pb-2 -mx-1 px-1" style={{ scrollbarWidth:"none" }}>
              {newCoins.map(coin => (
                <div key={coin.symbol} className="flex-shrink-0 w-[120px] bg-cb-bg border border-cb-border rounded-[12px] p-4 hover:border-gray-300 transition-colors cursor-pointer shadow-sm">
                  <img src={coin.image} alt={coin.name} className="w-[32px] h-[32px] rounded-full mb-3 border border-cb-border" />
                  <div className="text-[12px] font-medium text-cb-muted uppercase tracking-wide mb-1">{coin.symbol}</div>
                  <div className="text-[15px] font-bold text-cb-text leading-tight truncate mb-1">{coin.name}</div>
                  <div className="text-[12px] font-medium text-cb-muted">Recently added</div>
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