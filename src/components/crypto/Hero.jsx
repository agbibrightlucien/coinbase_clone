import heroPhone from "../../assets/hero-phone.avif";
import { useState } from "react";
import { cryptos, tabs, articles } from "../../data/heroData";
import { CryptoRow } from "./CryptoRow";

function Hero() {
    const [activeTab, setActiveTab] = useState("Tradable");

    return (
        <div>
            <section className="py-20 px-6">
            <div className="max-w-[1600px] mx-auto mx-auto flex flex-col lg:flex-row items-center gap-10">
                <div className="relative w-full lg:w-1/2 flex justify-start">
                    <img src={heroPhone} alt="Hero phone" className="w-full max-w-3xl rounded-4xl" />
                </div>
                
                
                <div className="w-full lg:w-1/2 text-left py-20 md:py-32">
                    <h1 className="text-2xl md:text-8xl font-sm leading-tight">
                        The future of finance is here.
                    </h1>

                    <p className="mt-6 text-lg text-gray-600">
                        Trade crypto and more on a platform you can trust.
                    </p>

                    <div className="mt-8 flex flex-col sm:flex-row items-center gap-4">
                        <input
                            type="email"
                            placeholder="satoshi@nakamoto.com"
                            className="px-4 py-3 border border-gray-300 rounded-lg w-full sm:w-80"
                        />
                        <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4.5 rounded-full font-medium whitespace-nowrap">
                            Sign up
                        </button>
                    </div>
                </div>
            </div>
        </section>

        <section className="bg-gray-100 py-24 px-24">
            <div className="max-w-[1500px] mx-auto flex flex-col lg:flex-row items-center justify-between gap-16">
                <div className="w-full lg:w-1/2 text-left">
                    <h2 className="text-5xl font-sm leading-tight">
                        Explore crypto like Bitcoin, Ethereum, and Dogecoin.
                    </h2>
                    <p className="text-gray-700 text-[18px] py-4">
                        Simply and securely buy, sell, and manage hundreds of cryptocurrencies.
                    </p>
                    <button className="bg-black text-white font-bold px-6 py-4 rounded-4xl text-[20px]">
                        See more assets
                    </button>
                </div>
                <div className="bg-black rounded-3xl p-4 shadow-2xl w-full max-w-2xl h-[600px] lg:mx-0">
                    <div className="flex gap-2 mb-4">
                        {tabs.map((tab) => (
                            <button key={tab} onClick={() => setActiveTab(tab)} className={`px-4 py-4 rounded-full text-sm font-medium transition-colors ${ activeTab === tab   ? "bg-gray-700 text-white"  : "text-gray-400 hover:text-white"}`}>
                                {tab}
                            </button>
                        ))}

                    </div>

                    <div className="divide-y divide-white/5">
                        {cryptos.map((crypto) =>(
                            <CryptoRow key={crypto.symbol} {...crypto}/>
                        ))}
                    </div>
                </div>

            

            </div>
        </section>

        <section className="w-full bg-white py-20 px-6">
            <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center mt-18 mb-52 gap-12">
                <div className="w-full lg:w-1/2">
                    <img
                        src="https://images.ctfassets.net/o10es7wu5gm1/3FwiGvu5fYVsludi8jgOY7/14e7039558786f182123e658c6940151/Advanced.png"
                        alt="Advanced Trade UI"
                        className="w-full h-auto rounded-2xl object-cover rounded-4xl"
                    />
                </div>

                <div className="w-full lg:w-1/2">
                    
                    <h2 className="text-3xl md:text-4xl font-semibold mb-6">
                        Powerful tools, designed for the advanced trader.
                    </h2>

                    <p className="text-gray-600 text-lg mb-8">
                        Powerful analytical tools with the safety and security of Coinbase
                        deliver the ultimate trading experience. Tap into sophisticated
                        charting capabilities, real-time order books, and deep liquidity
                        across hundreds of markets.
                    </p>

                    <button class="inline-block bg-black hover:bg-blue-700 text-white font-medium px-4 py-4 rounded-full transition">
                            Claim free trial 
                    </button>
                </div>
                

            </div>
            <div class="max-w-6xl mx-auto flex flex-col lg:flex-row items-center mb-52 gap-12">


                <div class="w-full lg:w-1/2">
      
                    <div class="inline-flex items-center gap-2 border border-gray-300 rounded-full px-4 py-1 w-fit">
                        <span class="text-blue-600 font-bold">󰉤</span>
                        <span class="text-gray-500 font-medium text-sm">COINBASE ONE</span>
                    </div>


                    <h2 class="text-3xl md:text-4xl font-semibold">
                        Zero trading fees, more rewards.
                    </h2>


                    <p class="text-gray-600 text-lg mb-8">
                        Get more out of crypto with one membership: zero trading fees, boosted rewards, priority support, and more.
                    </p>
                    <button class="inline-block bg-black hover:bg-blue-700 text-white font-medium px-4 py-4 rounded-full transition">
                        Claim free trial 
                    </button>

                </div>
              
                <div class="w-full lg:w-1/2">
                    <img 
                        src="https://images.ctfassets.net/o10es7wu5gm1/4CyfFj8M0X8tKnzh8AgdxT/f0fa52750499d9b1691f62880906ff3e/zero_fees_us.png?fm=avif&w=1320&h=1320&q=65"
                        alt="Zero fees"
                        class="w-full h-auto rounded-2xl object-contain rounded-4xl"
                    />
                </div>

                
                
    
            </div>
            <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12">
    
                {/* Image */}
                <div className="w-full lg:w-1/2">
                    <img
                        src="https://images.ctfassets.net/o10es7wu5gm1/5bELGzAuqD4Kh1UhKOOuut/c1f4c17cc78ce3505ec04b0eb0522895/CB_LOLP__1_.png?fm=avif&w=1200&h=960&q=65"
                        alt="Advanced Trade UI"
                        className="w-full h-auto rounded-2xl object-cover rounded-4xl"
                    />
                </div>

                {/* Text Content */}
                <div className="w-full lg:w-1/2">
                    <div class="inline-flex items-center gap-2 border border-gray-300 rounded-full px-4 py-1 w-fit">
                        <span class="text-blue-600 font-bold">󰉤</span>
                        <span class="text-gray-500 font-medium text-sm">BASE APP</span>
                    </div>

                    <h2 className="text-3xl md:text-4xl font-semibold mb-6">
                        Powerful tools, designed for the advanced trader.
                    </h2>

                    <p className="text-gray-600 text-lg mb-8">
                        Powerful analytical tools with the safety and security of Coinbase
                        deliver the ultimate trading experience. Tap into sophisticated
                        charting capabilities, real-time order books, and deep liquidity
                        across hundreds of markets.
                    </p>

                    <button class="inline-block bg-black hover:bg-blue-700 text-white font-medium px-4 py-4 rounded-full transition">
                            Claim free trial 
                    </button>
                </div>

            </div>
        </section>


        <section className="bg-gray-100 w-full py-28 px-28">
            {/* Header */}
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-12 gap-6 ">
                <div className="max-w-2xl">
                    <h1 className="text-[64px] font-normal text-black">
                        New to crypto? Learn some crypto basics
                    </h1>

                    
                </div>

                <div className="max-w-md justify-end">
                    <p className="text-gray-600 mt-4 text-lg py-8">
                        Beginner guides, practical tips, and market updates for first-timers,
                        experienced investors, and everyone in between.
                    </p>
                    <a
                        href="/learn"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-black text-white px-6 py-4 rounded-4xl font-medium hover:bg-blue-700 transition"
                        >
                        Read More
                    </a>
                </div>
                    
                
            </div>

            {/* Articles */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {articles.map((article, index) => (
                <a
                    key={index}
                    href={article.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className=" rounded-xl overflow-hidden hover:shadow-lg transition group w-fit"
                >
                    <div className=" overflow-hidden max-h-64 rounded-xl w-fit">
                        <img
                            src={article.image}
                            alt={article.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition"
                        />
                        </div>

                        <div className="p-6">
                        <h3 className="text-4xl font-semibold text-gray-900 mb-3 w-full">
                            {article.title}
                        </h3>

                        <p className="text-gray-600 text-sm leading-relaxed">
                            {article.description}
                        </p>
                    </div>
                </a>
                ))}
            </div>
        </section>
        <section className="w-full bg-white py-42 px-6 lg:px-20">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-12">

                {/* Left Content */}
                <div className="max-w-xl">
                <h1 className="text-5xl lg:text-6xl font-semibold text-gray-900 leading-tight">
                    Take control <br /> of your money
                </h1>

                <p className="text-gray-600 mt-6 text-lg">
                    Start your portfolio today and discover crypto
                </p>

                {/* Email Form */}
                <form className="flex flex-col sm:flex-row gap-4 mt-8">
                    <input
                    type="email"
                    placeholder="satoshi@nakamoto.com"
                    className="flex-1 px-5 py-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />

                    <button
                    type="submit"
                    className="bg-blue-600 text-white px-8 py-4 rounded-full font-medium hover:bg-blue-700 transition"
                    >
                    Sign up
                    </button>
                </form>
                </div>

                {/* Right Image */}
                <div className="flex justify-center lg:justify-end">
                <img
                    src="https://images.ctfassets.net/o10es7wu5gm1/3Ib1lnukt8MvV4bDjH2jm7/00bd55a880ce264f3b77253b837760b2/image.png"
                    alt="Crypto icons circle"
                    className="max-w-md lg:max-w-lg object-contain"
                />
                </div>

            </div>

            {/* Footer Disclaimer */}
            <div className="max-w-4xl mx-auto text-center text-xs text-gray-500 mt-20 leading-relaxed">
                <p>DEX trading is offered by Coinbase Bermuda Technologies Ltd.</p>
                <p className="mt-2">
                Products and features may not be available in all regions. Information is
                for informational purposes only and is not an offer to invest or trade.
                Trading cryptocurrency comes with risk.
                </p>
            </div>
            </section>
        </div>
        
    );
}

export default Hero;